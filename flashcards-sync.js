// Recall sync — pure state merge (shared by iPhone app, Mac app, and the web page).
//
// mergeStates(a, b) combines two `gn_fc_v1` progress blobs into one, designed so
// that studying on more than one device never loses review work:
//
//   - sched (per-card SM-2 state): keep the more-recently-reviewed record
//     (greater `last` day-number, tie-break greater `reps`). Union of all card ids.
//   - history / log / streak / studied / missedToday: combined so stats survive.
//   - flags + prefs (enabled, starred, deleted, edits, confidence, theme, …):
//     last-write-wins by the document's top-level `mutatedAt` stamp.
//
// Pure and side-effect free so it can be unit-tested under Node and reused verbatim
// in the browser. Exposed as window.RecallMerge in the browser, module.exports in Node.

(function (root, factory) {
  var api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.RecallMerge = api;
})(this, function () {
  'use strict';

  var LWW_MAPS = ['enabled', 'starred', 'deleted', 'edits', 'confidence'];
  var LWW_PREFS = ['theme', 'examDate', 'intervalMult', 'timerSecs', 'fontSize', 'swipeEnabled', 'clozeMode'];

  function num(x, dflt) { var n = +x; return isFinite(n) ? n : (dflt === undefined ? 0 : dflt); }

  function mergeStates(a, b) {
    a = a || {};
    b = b || {};
    var an = num(a.mutatedAt, 0), bn = num(b.mutatedAt, 0);
    var newer = an >= bn ? a : b;
    var older = newer === a ? b : a;

    var out = { v: 1 };

    // ---- sched: per-card, keep the more-recently-reviewed record ----
    out.sched = {};
    var ids = {};
    Object.keys(a.sched || {}).forEach(function (k) { ids[k] = 1; });
    Object.keys(b.sched || {}).forEach(function (k) { ids[k] = 1; });
    Object.keys(ids).forEach(function (id) {
      var ra = (a.sched || {})[id], rb = (b.sched || {})[id];
      if (!ra) { out.sched[id] = rb; return; }
      if (!rb) { out.sched[id] = ra; return; }
      var la = num(ra.last), lb = num(rb.last);
      if (la !== lb) { out.sched[id] = la > lb ? ra : rb; return; }
      out.sched[id] = num(ra.reps) >= num(rb.reps) ? ra : rb;
    });

    // ---- history {dayKey: count}: per-day max ----
    out.history = {};
    [a.history, b.history].forEach(function (h) {
      if (!h) return;
      Object.keys(h).forEach(function (k) { out.history[k] = Math.max(num(out.history[k]), num(h[k])); });
    });

    // ---- log [{ts,id,g,ivl}]: union, dedup by ts+id, newest first, cap 60 ----
    var seen = {}, log = [];
    (a.log || []).concat(b.log || []).forEach(function (e) {
      if (!e) return;
      var key = e.ts + ':' + e.id;
      if (seen[key]) return;
      seen[key] = 1;
      log.push(e);
    });
    log.sort(function (x, y) { return num(y.ts) - num(x.ts); });
    out.log = log.slice(0, 60);

    // ---- streak {count,last(day)}: greater last day, tie greater count ----
    var sa = a.streak || { count: 0, last: null }, sb = b.streak || { count: 0, last: null };
    var sla = sa.last == null ? -1 : num(sa.last), slb = sb.last == null ? -1 : num(sb.last);
    out.streak = sla === slb ? (num(sa.count) >= num(sb.count) ? sa : sb) : (sla > slb ? sa : sb);

    // ---- studied {day,n}: greater day; same day -> max n ----
    var ua = a.studied || { day: null, n: 0 }, ub = b.studied || { day: null, n: 0 };
    if (ua.day === ub.day) out.studied = { day: ua.day, n: Math.max(num(ua.n), num(ub.n)) };
    else out.studied = (ua.day == null ? -1 : num(ua.day)) > (ub.day == null ? -1 : num(ub.day)) ? ua : ub;

    // ---- missedToday {day,ids[]}: greater day; same day -> union ids ----
    var ma = a.missedToday || { day: null, ids: [] }, mb = b.missedToday || { day: null, ids: [] };
    if (ma.day === mb.day) {
      var u = {}, list = [];
      (ma.ids || []).concat(mb.ids || []).forEach(function (id) { if (!u[id]) { u[id] = 1; list.push(id); } });
      out.missedToday = { day: ma.day, ids: list };
    } else {
      out.missedToday = (ma.day == null ? -1 : num(ma.day)) > (mb.day == null ? -1 : num(mb.day)) ? ma : mb;
    }

    // ---- last-write-wins (whole field) by mutatedAt ----
    LWW_MAPS.forEach(function (f) { out[f] = newer[f] !== undefined ? newer[f] : (older[f] || {}); });
    LWW_PREFS.forEach(function (f) { out[f] = newer[f] !== undefined ? newer[f] : older[f]; });

    out.mutatedAt = Math.max(an, bn);
    return out;
  }

  return { mergeStates: mergeStates };
});
