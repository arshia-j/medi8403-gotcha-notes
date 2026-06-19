/* Recall — Anki-style SRS over the verified MEDI8403 Gotcha cards.
   Offline, no backend: all state lives in localStorage (bridged to the native app container). */
(function () {
  'use strict';

  // ---------- source data ----------
  var DECK = (window.FLASHCARDS && window.FLASHCARDS.cards) || [];
  var MODULES = (window.GOTCHA && window.GOTCHA.modules) || [];

  var parentMap = {};
  MODULES.forEach(function (m) {
    (m.cards || []).forEach(function (pc) { parentMap[pc.id] = { card: pc, moduleName: m.name }; });
  });

  var moduleOrder = [];
  var moduleMeta = {};
  DECK.forEach(function (c) {
    if (!moduleMeta[c.moduleId]) { moduleMeta[c.moduleId] = { id: c.moduleId, name: c.module }; moduleOrder.push(c.moduleId); }
  });
  moduleOrder.sort(function (a, b) { return moduleMeta[a].name.localeCompare(moduleMeta[b].name); });

  // ---------- native bridge (haptics / share) ----------
  function haptic(type) { try { window.webkit.messageHandlers.haptic.postMessage(type); } catch (e) {} }
  function shareText(text) {
    try { window.webkit.messageHandlers.shareText.postMessage(text); return true; } catch (e) { return false; }
  }

  // ---------- state ----------
  var KEY = 'gn_fc_v1';
  var state = load();
  var applyingRemote = false; // true while a synced state is being applied (suppresses re-push)

  function load() {
    var def = {
      v: 1, sched: {}, enabled: {}, starred: {}, deleted: {}, edits: {},
      confidence: {}, missedToday: { day: null, ids: [] }, history: {}, log: [],
      theme: 'light', examDate: null, intervalMult: 1, timerSecs: 0, fontSize: 1,
      swipeEnabled: true, clozeMode: false,
      streak: { count: 0, last: null }, studied: { day: null, n: 0 }
    };
    try {
      var raw = JSON.parse(localStorage.getItem(KEY));
      if (raw && raw.v === 1) {
        Object.keys(def).forEach(function (k) { if (k !== 'v' && raw[k] !== undefined) def[k] = raw[k]; });
      }
    } catch (e) {}
    moduleOrder.forEach(function (id) { if (!(id in def.enabled)) def.enabled[id] = true; });
    return def;
  }
  function persistRaw() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function save() {
    state.mutatedAt = Date.now();
    persistRaw();
    if (typeof Sync !== 'undefined' && Sync && !applyingRemote) Sync.scheduleAfterChange();
  }

  // Replace the running state with a synced/merged blob and refresh the UI,
  // without bumping mutatedAt or re-triggering a push.
  function applyMergedState(newState) {
    applyingRemote = true;
    try {
      if (!newState.enabled) newState.enabled = {};
      moduleOrder.forEach(function (id) { if (!(id in newState.enabled)) newState.enabled[id] = true; });
      state = newState;
      persistRaw();
      rebuild();
      applyPrefs();
      var tb = document.getElementById('theme-btn'); if (tb) tb.textContent = state.theme === 'dark' ? '☀' : '☽';
      if (!editing) buildQueue();
    } finally { applyingRemote = false; }
  }

  function applyPrefs() {
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
    document.documentElement.style.setProperty('--fs-scale', state.fontSize || 1);
    var tc = document.querySelector('meta[name=theme-color]');
    if (tc) tc.setAttribute('content', state.theme === 'dark' ? '#0f0f12' : '#ffffff');
  }

  // ---------- live deck (apply edits, drop deleted) ----------
  var live = {};
  function rebuild() {
    live = {};
    DECK.forEach(function (c) {
      if (state.deleted[c.id]) return;
      var e = state.edits[c.id];
      live[c.id] = e ? { id: c.id, module: c.module, moduleId: c.moduleId, subarea: c.subarea, front: e.front, back: e.back, parentId: c.parentId, image: c.image, edited: true } : c;
    });
  }
  rebuild();
  function liveIds() { return Object.keys(live); }
  function enabledIds() {
    return liveIds().filter(function (id) {
      return state.enabled[live[id].moduleId] && !(state.sched[id] && state.sched[id].suspended);
    });
  }
  function moduleLiveCount(mid) { var n = 0; for (var id in live) if (live[id].moduleId === mid) n++; return n; }
  function starredIds() { return liveIds().filter(function (id) { return state.starred[id]; }); }
  function deletedCount() { return Object.keys(state.deleted).length; }
  function isLeech(id) { return !!(state.sched[id] && state.sched[id].lapses >= 8 && !state.sched[id].known); }

  // mcq-trap pool (cards whose parent carries an MCQ trap)
  var mcqTrapIds = new Set(liveIds().filter(function (id) { var p = parentMap[live[id].parentId]; return p && p.card.mcqTrap; }));

  // ---------- dates ----------
  function todayNum() { var d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000); }
  function todayKey() { var d = new Date(); return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); }

  // ---------- SRS (SM-2 lite + exam-mode interval compressor) ----------
  function compute(cur, grade) {
    var ease = cur ? cur.ease : 2.5, ivl = cur ? cur.ivl : 0, reps = cur ? cur.reps : 0, lapses = cur ? cur.lapses : 0;
    if (grade === 0) { lapses++; reps = 0; ivl = 0; ease = Math.max(1.3, ease - 0.2); }
    else if (grade === 1) { ease = Math.max(1.3, ease - 0.15); ivl = reps < 1 ? 1 : Math.max(1, Math.round(ivl * 1.2)); reps++; }
    else if (grade === 2) { ivl = reps < 1 ? 1 : (reps < 2 ? 3 : Math.round(Math.max(ivl, 1) * ease)); reps++; }
    else { ease = ease + 0.15; ivl = reps < 1 ? 2 : Math.round(Math.max(ivl, 1) * ease * 1.3); reps++; }
    if (ivl >= 1 && state.intervalMult && state.intervalMult < 1) ivl = Math.max(1, Math.round(ivl * state.intervalMult));
    var out = { ease: Math.round(ease * 100) / 100, ivl: ivl, reps: reps, lapses: lapses, due: todayNum() + ivl, last: todayNum() };
    if (cur && cur.suspended) out.suspended = cur.suspended;
    return out;
  }
  function ivlLabel(ivl) { return ivl <= 0 ? '<10m' : (ivl === 1 ? '1d' : (ivl < 30 ? ivl + 'd' : Math.round(ivl / 30) + 'mo')); }

  // ---------- session ----------
  var mode = 'due';            // 'due' | 'cram'
  var blitz = false;
  var custom = null;           // {source, module, subarea, limit, cram, label, ids?, mnemonicMode?}
  var queue = [];
  var session = { total: 0, done: 0 };
  var showBack = false, editing = false, undoSnap = null;
  var sessionLog = [], sessionStartedAt = 0, blitzStart = 0;
  var timerInterval = null;

  function isCram() { return blitz || (custom ? custom.cram : (mode === 'cram')); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  function orderDueFirst(ids) {
    var t = todayNum(), due = [], fresh = [];
    ids.forEach(function (id) { var s = state.sched[id]; if (!s) fresh.push(id); else if (s.due <= t) due.push(id); });
    due.sort(function (a, b) { return state.sched[a].due - state.sched[b].due; });
    return due.concat(shuffle(fresh));
  }

  function customPool() {
    var t = todayNum(), ids;
    switch (custom.source) {
      case 'module':  ids = liveIds().filter(function (id) { return live[id].moduleId === custom.module && !(state.sched[id] && state.sched[id].suspended); }); break;
      case 'starred': ids = starredIds(); break;
      case 'due':     ids = enabledIds().filter(function (id) { var s = state.sched[id]; return s && s.due <= t; }); break;
      case 'new':     ids = enabledIds().filter(function (id) { return !state.sched[id]; }); break;
      case 'hardest': ids = enabledIds().slice().sort(function (a, b) { return (state.sched[b] ? state.sched[b].lapses : 0) - (state.sched[a] ? state.sched[a].lapses : 0); }); break;
      case 'mcqtrap': ids = enabledIds().filter(function (id) { return mcqTrapIds.has(id); }); break;
      case 'mnemonic': ids = enabledIds().filter(function (id) { var p = parentMap[live[id].parentId]; return p && p.card.mnemonic; }); break;
      case 'shaky':   ids = enabledIds().filter(function (id) { return state.confidence[id] === 'shaky' || state.confidence[id] === 'blank'; }); break;
      case 'leech':   ids = liveIds().filter(isLeech); break;
      case 'weakest': {
        var rates = {};
        moduleOrder.forEach(function (mid) {
          var mids = liveIds().filter(function (id) { return live[id].moduleId === mid && state.sched[id]; });
          rates[mid] = mids.length ? mids.reduce(function (s, id) { return s + (state.sched[id].lapses || 0); }, 0) / mids.length : 0;
        });
        var top3 = moduleOrder.slice().sort(function (a, b) { return rates[b] - rates[a]; }).slice(0, 3);
        ids = enabledIds().filter(function (id) { return top3.indexOf(live[id].moduleId) >= 0; }); break;
      }
      case 'ahead': { var a = custom.aheadDays || 1; ids = enabledIds().filter(function (id) { var s = state.sched[id]; return !s || s.due <= t + a; }); break; }
      case 'ids':     ids = (custom.ids || []).filter(function (id) { return id in live; }); break;
      default:        ids = enabledIds();
    }
    if (custom.subarea) ids = ids.filter(function (id) { return live[id].subarea === custom.subarea; });
    return ids;
  }

  function buildQueue() {
    Object.keys(state.sched).forEach(function (id) { if (state.sched[id]._buried) { delete state.sched[id]._buried; state.sched[id].due = todayNum(); } });
    var ids;
    if (custom) {
      ids = customPool();
      ids = custom.cram ? shuffle(ids.slice()) : orderDueFirst(ids);
      if (custom.limit > 0) ids = ids.slice(0, custom.limit);
    } else if (blitz) {
      ids = shuffle(enabledIds().slice());
    } else if (mode === 'cram') {
      ids = shuffle(enabledIds().slice());
    } else {
      ids = orderDueFirst(enabledIds());
    }
    queue = ids;
    session = { total: queue.length, done: 0 };
    sessionLog = []; sessionStartedAt = Date.now(); blitzStart = Date.now();
    showBack = false; editing = false; undoSnap = null;
    refreshModeButtons();
    render();
  }

  // ---------- counts ----------
  function counts() {
    var t = todayNum(), nw = 0, due = 0, learn = 0;
    enabledIds().forEach(function (id) {
      var s = state.sched[id];
      if (!s) nw++; else if (s.due <= t) { due++; if (s.ivl < 1) learn++; }
    });
    return { nw: nw, due: due, learn: learn };
  }

  // ---------- grading ----------
  function grade(g) {
    if (!queue.length || editing) return;
    haptic(['error', 'light', 'medium', 'heavy'][g]);
    var id = queue[0];
    undoSnap = { id: id, prev: state.sched[id] ? JSON.parse(JSON.stringify(state.sched[id])) : null, queue: queue.slice(), done: session.done, log: sessionLog.slice() };
    state.sched[id] = compute(state.sched[id], g);
    if (state.studied.day !== todayNum()) state.studied = { day: todayNum(), n: 0 };
    state.studied.n++; bumpStreak();
    var dk = todayKey(); state.history[dk] = (state.history[dk] || 0) + 1;
    state.log.unshift({ ts: Date.now(), id: id, g: g, ivl: state.sched[id].ivl }); if (state.log.length > 60) state.log.pop();
    sessionLog.push({ id: id, g: g, moduleId: live[id] ? live[id].moduleId : '' });
    if (g === 0) {
      if (state.missedToday.day !== todayNum()) state.missedToday = { day: todayNum(), ids: [] };
      if (state.missedToday.ids.indexOf(id) < 0) state.missedToday.ids.push(id);
    }
    queue.shift();
    var repeat = isCram() ? (g <= 1) : (g === 0);
    if (repeat) queue.splice(Math.min(queue.length, 8 + Math.floor(Math.random() * 6)), 0, id);
    else session.done++;
    var card = live[id];
    if (card && card.parentId) {
      if (isCram()) {
        queue.filter(function (qid) { return live[qid] && live[qid].parentId === card.parentId; }).forEach(function (sid) {
          var i = queue.indexOf(sid); if (i > -1) { queue.splice(i, 1); queue.push(sid); }
        });
      } else {
        liveIds().forEach(function (sid) {
          if (sid !== id && live[sid].parentId === card.parentId && state.sched[sid] && state.sched[sid].due <= todayNum()) {
            state.sched[sid]._buried = true; state.sched[sid].due = todayNum() + 1;
          }
        });
        queue = queue.filter(function (qid) { return !(state.sched[qid] && state.sched[qid]._buried); });
      }
    }
    save(); showBack = false; render();
  }
  function bumpStreak() {
    var t = todayNum();
    if (state.streak.last === t) return;
    state.streak.count = (state.streak.last === t - 1) ? state.streak.count + 1 : 1;
    state.streak.last = t;
  }
  function undo() {
    if (!undoSnap) return;
    if (undoSnap.prev) state.sched[undoSnap.id] = undoSnap.prev; else delete state.sched[undoSnap.id];
    queue = undoSnap.queue; session.done = undoSnap.done; sessionLog = undoSnap.log || sessionLog;
    if (state.studied.n > 0) state.studied.n--;
    if (state.log.length) state.log.shift();
    showBack = true; editing = false; undoSnap = null; save(); render();
  }
  function markKnown() {
    if (!queue.length || editing) return;
    haptic('heavy');
    var id = queue[0], cur = state.sched[id];
    undoSnap = { id: id, prev: cur ? JSON.parse(JSON.stringify(cur)) : null, queue: queue.slice(), done: session.done, log: sessionLog.slice() };
    state.sched[id] = { ease: cur ? cur.ease : 2.5, ivl: 9999, reps: (cur ? cur.reps : 0) + 1, lapses: cur ? cur.lapses : 0, due: todayNum() + 9999, last: todayNum(), known: true };
    if (state.studied.day !== todayNum()) state.studied = { day: todayNum(), n: 0 };
    state.studied.n++; bumpStreak();
    sessionLog.push({ id: id, g: 3, moduleId: live[id] ? live[id].moduleId : '' });
    queue.shift(); session.done++;
    save(); showBack = false; render();
  }

  // ---------- card actions ----------
  function toggleStar(id) { if (state.starred[id]) delete state.starred[id]; else state.starred[id] = true; haptic('light'); save(); render(); }
  function deleteCard(id) {
    if (!confirm('Remove this card from your deck? You can restore removed cards from the Decks panel.')) return;
    state.deleted[id] = true; save(); rebuild();
    queue = queue.filter(function (q) { return q !== id; });
    if (session.total > 0) session.total--;
    showBack = false; editing = false; render();
  }
  function suspendCard(id) {
    if (!state.sched[id]) state.sched[id] = compute(null, 1);
    state.sched[id].suspended = true; save();
    queue = queue.filter(function (q) { return q !== id; });
    showBack = false; render();
  }
  function saveEdit(id, front, back) {
    front = (front || '').trim(); back = (back || '').trim();
    if (!front || !back) { alert('Front and back can’t be empty.'); return; }
    state.edits[id] = { front: front, back: back }; save(); rebuild(); editing = false; render();
  }

  // ---------- cloze ----------
  function makeCloze(back) {
    var token = null, m;
    if ((m = /\*\*(.+?)\*\*/.exec(back))) token = m[1];
    else if ((m = /\d+(?:\.\d+)?\s?(?:mmol\/L|mg\/dL|mcg|mg|g\/L|g|mm|cm|mL|min|hours?|hrs?|days?|weeks?|%|bpm)/i.exec(back))) token = m[0];
    else { var caps = back.match(/\b[A-Z][A-Za-z]{3,}\b/g); if (caps) token = caps[caps.length - 1]; }
    if (!token) return { html: esc(back) };
    var idx = back.indexOf(token);
    return { html: esc(back.slice(0, idx)) + '<span class="fc-cloze" data-ans="' + esc(token) + '">[    ]</span>' + esc(back.slice(idx + token.length)) };
  }

  // ---------- markdown-lite ----------
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function mdLite(text) {
    if (!text) return '';
    var lines = String(text).split('\n'), html = '', inUl = false;
    lines.forEach(function (ln) {
      var b = esc(ln).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'), trimmed = ln.trim();
      if (/^[-•]\s+/.test(trimmed)) { if (!inUl) { html += '<ul>'; inUl = true; } html += '<li>' + b.replace(/^\s*[-•]\s+/, '') + '</li>'; }
      else if (trimmed === '') { if (inUl) { html += '</ul>'; inUl = false; } }
      else { if (inUl) { html += '</ul>'; inUl = false; } html += '<p>' + b + '</p>'; }
    });
    if (inUl) html += '</ul>';
    return html;
  }
  function imageFig(img) {
    if (!img || !img.src) return '';
    return '<figure class="fc-img"><img src="' + esc(img.src) + '" alt="' + esc(img.alt || img.caption || '') + '" loading="lazy" onerror="this.closest(\'figure\').style.display=\'none\'" />' +
      (img.caption ? '<figcaption>' + esc(img.caption) + (img.credit ? ' · ' + esc(img.credit) : '') + '</figcaption>' : '') + '</figure>';
  }
  function explanation(card) {
    var p = parentMap[card.parentId];
    if (!p) return '<p style="color:var(--ink-3)">No further explanation linked for this card.</p>';
    var c = p.card, h = '';
    function sec(label, val, md) { if (!val) return; h += '<h4>' + label + '</h4>' + (md ? mdLite(val) : '<p>' + esc(val) + '</p>'); }
    sec('How to tell it apart', c.discriminator, true);
    sec('Do this first', c.whatFirst, true);
    sec('Red flags', c.redFlags, true);
    sec('The trap', c.trap, true);
    sec('MCQ trap', c.mcqTrap, true);
    sec('Say it (viva)', c.viva, true);
    if (c.mnemonic) h += '<h4>Mnemonic</h4>' + mdLite(c.mnemonic);
    if (c.visualHtml) h += '<h4>At a glance</h4>' + c.visualHtml;
    if (c.images && c.images.length) { h += '<h4>Image' + (c.images.length > 1 ? 's' : '') + '</h4>'; c.images.forEach(function (im) { h += imageFig(im); }); }
    if (c.source) h += '<p class="fc-src">Source: ' + esc(c.source) + '</p>';
    return h;
  }

  // ---------- DOM refs ----------
  var stage = document.getElementById('fc-stage');
  var countsEl = document.getElementById('fc-counts');
  var progFill = document.getElementById('fc-prog-fill');
  var scopeLabel = document.getElementById('fc-scope-label');
  var streakEl = document.getElementById('fc-streak');
  var countdownEl = document.getElementById('fc-countdown');
  var missedBtn = document.getElementById('missed-btn');

  // ---------- render ----------
  function render() {
    clearTimer();
    renderChrome();
    if (!liveIds().length) { stage.innerHTML = emptyState('Deck empty', 'Every card is removed. Restore cards from the Decks panel.'); return; }
    if (!queue.length) { renderDone(); return; }

    var card = live[queue[0]];
    if (!card) { queue.shift(); return render(); }
    var p = parentMap[card.parentId];
    var sub = card.subarea || (p && p.card.subarea) || '';
    var mnemonicMode = custom && custom.mnemonicMode;

    var html = '<article class="fc-card">';
    html += '<div class="fc-meta"><span class="fc-chip">' + esc(card.module) + '</span>' + (sub ? '<span class="fc-chip sub">' + esc(sub) + '</span>' : '');
    if (isLeech(card.id)) html += '<span class="fc-leech">Leech</span>';
    if (state.confidence[card.id]) html += '<span class="conf-dot conf-' + state.confidence[card.id] + '"></span>';
    if (showBack && !editing) {
      html += '<div class="fc-actions">' +
        '<button class="fc-act ' + (state.starred[card.id] ? 'is-star' : '') + '" data-act="star">' + (state.starred[card.id] ? '★' : '☆') + '</button>' +
        '<button class="fc-act" data-act="edit">✎</button>' +
        (isLeech(card.id) ? '<button class="fc-act" data-act="suspend">Suspend</button>' : '') +
        '<button class="fc-act danger" data-act="del">🗑</button>' +
      '</div>';
    }
    html += '</div>';

    if (mnemonicMode) {
      var mn = p && p.card.mnemonic;
      html += '<div class="fc-q fc-mnemonic">' + esc(mn || card.front) + '</div><div class="fc-mnemonic-sub">' + esc(card.front) + '</div>';
    } else {
      html += '<div class="fc-q">' + esc(card.front) + (card.edited ? '<span class="fc-edited-tag">edited</span>' : '') + '</div>';
    }

    if (!showBack) {
      if (blitz) {
        html += '<div class="fc-blitz-row"><button class="fc-blitz no" id="blitz-no">Missed</button><button class="fc-blitz yes" id="blitz-yes">Knew it</button></div>';
      } else {
        if (state.timerSecs > 0) html += '<div class="fc-timer"><span class="fc-timer-bar" id="fc-timer-bar"></span></div>';
        html += '<div class="fc-front-cue"><kbd>Space</kbd> or tap to reveal</div>';
        html += '<button class="fc-flip-btn" id="flip-btn">Show answer</button>';
      }
    } else if (editing) {
      html += '<div class="fc-edit">' +
        '<div><label>Front</label><textarea id="edit-front">' + esc(card.front) + '</textarea></div>' +
        '<div><label>Back</label><textarea id="edit-back">' + esc(card.back) + '</textarea></div>' +
        '<div class="fc-edit-row"><button class="fc-edit-save" id="edit-save">Save</button><button class="fc-edit-cancel" id="edit-cancel">Cancel</button></div>' +
      '</div>';
    } else {
      html += '<div class="fc-divider"></div>';
      html += '<div class="fc-q-echo">' + esc(card.front) + '</div>';
      var clozeUsed = state.clozeMode && !mnemonicMode;
      html += '<div class="fc-a">' + (clozeUsed ? makeCloze(card.back).html : esc(card.back)) + '</div>';
      if (card.image) html += imageFig(card.image);
      html += '<div class="fc-conf-row">' +
        ['know', 'shaky', 'blank'].map(function (k) {
          return '<button class="fc-conf ' + k + (state.confidence[card.id] === k ? ' active' : '') + '" data-conf="' + k + '">' + (k === 'know' ? 'Know' : k === 'shaky' ? 'Shaky' : 'Blank') + '</button>';
        }).join('') + '</div>';
      var mcqT = p && p.card.mcqTrap;
      if (mcqT) html += '<div class="fc-mcq-trap"><strong>MCQ trap.</strong> ' + esc(mcqT).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n+/g, ' · ') + '</div>';
      html += '<details class="fc-more"><summary class="fc-more-toggle"><span class="caret">▸</span> Confused? — full explanation</summary>' +
        '<div class="fc-more-body">' + explanation(card) + '</div></details>';
      html += '<div class="fc-grades">';
      var keyFor = { 0: 'k', 3: 'm' };
      [['0', 'Again'], ['1', 'Hard'], ['2', 'Good'], ['3', 'Easy']].forEach(function (g) {
        var gi = parseInt(g[0], 10), prev = compute(state.sched[card.id], gi);
        html += '<button class="fc-grade" data-g="' + g[0] + '"><span class="g-lbl">' + g[1] + (keyFor[gi] ? ' <span class="g-key">' + keyFor[gi] + '</span>' : '') + '</span><span class="g-ivl">' + ivlLabel(prev.ivl) + '</span></button>';
      });
      html += '</div>';
      html += '<button class="fc-bury" id="bury-btn">Got it — don’t remind me <span class="g-key">Enter</span></button>';
    }
    html += '</article>';
    stage.innerHTML = html;
    wireCard(card.id);
    if (!showBack && !blitz && state.timerSecs > 0) startTimer();
  }

  function wireCard(id) {
    var fb = document.getElementById('flip-btn');
    if (fb) fb.addEventListener('click', flip);
    var cardEl = stage.querySelector('.fc-card');
    if (cardEl && state.swipeEnabled) attachSwipe(cardEl);
    if (!showBack && cardEl && !blitz) cardEl.addEventListener('click', function (e) { if (e.target.closest('button')) return; flip(); });
    stage.querySelectorAll('.fc-grade').forEach(function (b) { b.addEventListener('click', function () { grade(parseInt(b.getAttribute('data-g'), 10)); }); });
    stage.querySelectorAll('.fc-act').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        var a = b.getAttribute('data-act');
        if (a === 'star') toggleStar(id);
        else if (a === 'edit') { editing = true; render(); }
        else if (a === 'del') deleteCard(id);
        else if (a === 'suspend') suspendCard(id);
      });
    });
    stage.querySelectorAll('.fc-conf').forEach(function (b) {
      b.addEventListener('click', function (e) { e.stopPropagation(); var k = b.getAttribute('data-conf'); if (state.confidence[id] === k) delete state.confidence[id]; else state.confidence[id] = k; save(); render(); });
    });
    stage.querySelectorAll('.fc-cloze').forEach(function (sp) {
      sp.addEventListener('click', function (e) { e.stopPropagation(); sp.textContent = sp.getAttribute('data-ans'); sp.classList.add('open'); });
    });
    var es = document.getElementById('edit-save');
    if (es) es.addEventListener('click', function () { saveEdit(id, document.getElementById('edit-front').value, document.getElementById('edit-back').value); });
    var ec = document.getElementById('edit-cancel');
    if (ec) ec.addEventListener('click', function () { editing = false; render(); });
    var bb = document.getElementById('bury-btn');
    if (bb) bb.addEventListener('click', markKnown);
    var by = document.getElementById('blitz-yes'), bn = document.getElementById('blitz-no');
    if (by) by.addEventListener('click', function () { grade(2); });
    if (bn) bn.addEventListener('click', function () { toggleStar(id); grade(0); });
  }

  // ---------- swipe to grade ----------
  function attachSwipe(el) {
    var x0 = 0, y0 = 0, dx = 0, dy = 0, active = false;
    el.addEventListener('touchstart', function (e) { var t = e.touches[0]; x0 = t.clientX; y0 = t.clientY; active = true; el.style.transition = 'none'; }, { passive: true });
    el.addEventListener('touchmove', function (e) {
      if (!active) return; var t = e.touches[0]; dx = t.clientX - x0; dy = t.clientY - y0;
      if (Math.abs(dx) > Math.abs(dy)) { el.style.transform = 'translateX(' + dx + 'px) rotate(' + (dx / 40) + 'deg)'; el.style.opacity = String(1 - Math.min(0.4, Math.abs(dx) / 600)); }
    }, { passive: true });
    el.addEventListener('touchend', function () {
      active = false; el.style.transition = 'transform .18s ease, opacity .18s ease'; el.style.transform = ''; el.style.opacity = '';
      if (!showBack) { if (dx > 70) flip(); dx = dy = 0; return; }
      if (dy < -70 && Math.abs(dy) > Math.abs(dx)) grade(2);
      else if (dx > 70) grade(3);
      else if (dx < -70) grade(0);
      dx = dy = 0;
    });
  }

  // ---------- timer ----------
  function clearTimer() { if (timerInterval) { clearInterval(timerInterval); timerInterval = null; } }
  function startTimer() {
    var bar = document.getElementById('fc-timer-bar'); if (!bar) return;
    var remaining = state.timerSecs; bar.style.width = '100%';
    timerInterval = setInterval(function () {
      remaining--; bar.style.width = Math.max(0, remaining / state.timerSecs * 100) + '%';
      if (remaining <= 0) { clearTimer(); haptic('error'); flip(); }
    }, 1000);
  }

  // ---------- chrome ----------
  function renderChrome() {
    var c = counts();
    countsEl.innerHTML =
      '<span><span class="dot" style="background:var(--easy)"></span><b>' + c.nw + '</b> new</span>' +
      '<span><span class="dot" style="background:var(--hard)"></span><b>' + c.learn + '</b> learning</span>' +
      '<span><span class="dot" style="background:var(--good)"></span><b>' + Math.max(0, c.due - c.learn) + '</b> due</span>';
    progFill.style.width = (session.total ? Math.round(session.done / session.total * 100) : 0) + '%';
    var label = blitz ? 'Blitz · triage' : custom ? ('Set · ' + custom.label) : (mode === 'cram' ? 'Cram · all enabled' : 'Spaced recall');
    if (state.intervalMult && state.intervalMult < 1) label += ' · ' + (Math.round(state.intervalMult * 10) / 10) + '×';
    scopeLabel.textContent = label;
    streakEl.textContent = '🔥 ' + state.streak.count + ' · ' + (state.studied.day === todayNum() ? state.studied.n : 0) + ' today';
    if (state.examDate) {
      var daysLeft = Math.ceil((new Date(state.examDate + 'T00:00:00') - Date.now()) / 86400000);
      if (daysLeft > 0) {
        var rem = c.nw + c.due, target = Math.ceil(rem / daysLeft);
        countdownEl.hidden = false;
        countdownEl.className = 'fc-countdown ' + (daysLeft <= 3 ? 'urgent' : daysLeft <= 7 ? 'soon' : '');
        countdownEl.textContent = daysLeft + ' day' + (daysLeft > 1 ? 's' : '') + ' to exam · aim ' + target + '/day (' + rem + ' left)';
      } else { countdownEl.hidden = true; }
    } else { countdownEl.hidden = true; }
    if (missedBtn) missedBtn.hidden = !(state.missedToday.day === todayNum() && state.missedToday.ids.length);
  }

  function emptyState(title, body, btnLabel, btnFn, extra) {
    setTimeout(function () {
      var b = document.getElementById('es-btn'); if (b && btnFn) b.addEventListener('click', btnFn);
      var r = document.getElementById('es-retry'); if (r) r.addEventListener('click', retryMisses);
    }, 0);
    return '<div class="fc-empty"><div class="big">✓</div><h2>' + esc(title) + '</h2><p>' + esc(body) + '</p>' +
      (extra || '') + (btnLabel ? '<button id="es-btn">' + esc(btnLabel) + '</button>' : '') + '</div>';
  }

  function retryMisses() {
    var missed = sessionLog.filter(function (e) { return e.g === 0; }).map(function (e) { return e.id; });
    if (!missed.length) return;
    blitz = false; custom = { source: 'ids', ids: missed, cram: true, label: 'Session misses' }; buildQueue();
  }

  function renderDone() {
    if (blitz) {
      var mins = (Date.now() - blitzStart) / 60000, cpm = mins > 0 ? (session.done / mins).toFixed(1) : '0';
      stage.innerHTML = emptyState('Blitz done', session.done + ' cards in ' + Math.round(mins) + ' min (' + cpm + '/min). Missed ones were starred.', 'Blitz again', function () { buildQueue(); });
      return;
    }
    if (sessionLog.length) {
      var per = [0, 0, 0, 0]; sessionLog.forEach(function (e) { per[e.g]++; });
      var secs = Math.round((Date.now() - sessionStartedAt) / 1000), mm = Math.floor(secs / 60), ss = secs % 60, missedN = per[0];
      var badges = '<div class="fc-summary">' +
        '<span class="sm-badge again">' + per[0] + ' Again</span>' +
        '<span class="sm-badge hard">' + per[1] + ' Hard</span>' +
        '<span class="sm-badge good">' + per[2] + ' Good</span>' +
        '<span class="sm-badge easy">' + per[3] + ' Easy</span></div>' +
        '<div class="fc-summary-meta">' + sessionLog.length + ' reviewed · ' + mm + 'm ' + ss + 's</div>' +
        (missedN ? '<button id="es-retry" class="fc-retry">Retry ' + missedN + ' missed</button>' : '');
      stage.innerHTML = emptyState('Session done', 'Nice work.', custom ? 'New session' : 'Continue', buildQueue, badges);
      return;
    }
    if (custom) { stage.innerHTML = emptyState('Set complete', 'You cleared every card in “' + custom.label + '”.', 'Back to Due', function () { setMode('due'); }); return; }
    var c = counts();
    if (c.nw + c.due === 0) stage.innerHTML = emptyState('All caught up', 'Nothing is due. Cram or build a Set to keep drilling.', 'Cram everything', function () { setMode('cram'); });
    else stage.innerHTML = emptyState('Session done', (c.nw + c.due) + ' more are waiting.', 'Continue', buildQueue);
  }

  function flip() { if (!showBack) { clearTimer(); haptic('light'); showBack = true; render(); } }

  // ---------- modes ----------
  function refreshModeButtons() {
    [['mode-due', !custom && !blitz && mode === 'due'], ['mode-cram', !custom && !blitz && mode === 'cram'], ['mode-blitz', blitz]].forEach(function (p) {
      var el = document.getElementById(p[0]); if (el) { el.classList.toggle('is-on', p[1]); el.setAttribute('aria-selected', p[1]); }
    });
  }
  function setMode(m) { mode = m; blitz = false; custom = null; buildQueue(); }
  document.getElementById('mode-due').addEventListener('click', function () { setMode('due'); });
  document.getElementById('mode-cram').addEventListener('click', function () { setMode('cram'); });
  document.getElementById('mode-blitz').addEventListener('click', function () { blitz = true; custom = null; mode = 'cram'; buildQueue(); });
  if (missedBtn) missedBtn.addEventListener('click', function () { blitz = false; custom = { source: 'ids', ids: state.missedToday.ids.slice(), cram: true, label: 'Missed today' }; buildQueue(); });

  document.getElementById('theme-btn').addEventListener('click', function () {
    state.theme = state.theme === 'dark' ? 'light' : 'dark'; applyPrefs(); save();
    document.getElementById('theme-btn').textContent = state.theme === 'dark' ? '☀' : '☽';
  });

  // ---------- decks modal ----------
  var decksModal = document.getElementById('decks-modal');
  var deckList = document.getElementById('deck-list');
  var deckRemoved = document.getElementById('deck-removed');
  document.getElementById('decks-btn').addEventListener('click', openDecks);
  document.getElementById('decks-close').addEventListener('click', closeDecks);
  decksModal.addEventListener('click', function (e) { if (e.target === decksModal) closeDecks(); });
  document.getElementById('deck-all').addEventListener('click', function () { moduleOrder.forEach(function (id) { state.enabled[id] = true; }); save(); renderDeckList(); });
  document.getElementById('deck-none').addEventListener('click', function () { moduleOrder.forEach(function (id) { state.enabled[id] = false; }); save(); renderDeckList(); });
  function openDecks() { renderDeckList(); decksModal.hidden = false; }
  function closeDecks() { decksModal.hidden = true; buildQueue(); }
  function renderDeckList() {
    var t = todayNum();
    deckList.innerHTML = moduleOrder.map(function (id) {
      var mids = liveIds().filter(function (cid) { return live[cid].moduleId === id; });
      var total = mids.length || 1;
      var dueN = mids.filter(function (cid) { var s = state.sched[cid]; return !s || s.due <= t; }).length;
      var mature = mids.filter(function (cid) { var s = state.sched[cid]; return s && (s.ivl >= 7 || s.known); }).length;
      var learning = mids.filter(function (cid) { var s = state.sched[cid]; return s && s.ivl < 7 && !s.known; }).length;
      var leeches = mids.filter(isLeech).length;
      return '<div class="fc-deck-row"><label><input type="checkbox" data-mod="' + id + '"' + (state.enabled[id] ? ' checked' : '') + ' />' +
        '<span class="d-name">' + esc(moduleMeta[id].name) + (leeches ? ' <span class="d-leech">' + leeches + ' leech</span>' : '') + '</span>' +
        '<span class="d-count">' + dueN + '/' + mids.length + '</span></label>' +
        '<div class="d-bar"><span class="db-m" style="width:' + Math.round(mature / total * 100) + '%"></span><span class="db-l" style="width:' + Math.round(learning / total * 100) + '%"></span></div>' +
        '<button class="d-cram" data-cram="' + id + '">Cram this</button></div>';
    }).join('');
    deckList.querySelectorAll('input[data-mod]').forEach(function (cb) { cb.addEventListener('change', function () { state.enabled[cb.getAttribute('data-mod')] = cb.checked; save(); }); });
    deckList.querySelectorAll('button[data-cram]').forEach(function (b) { b.addEventListener('click', function () { blitz = false; custom = { source: 'module', module: b.getAttribute('data-cram'), limit: 0, cram: true, label: moduleMeta[b.getAttribute('data-cram')].name }; decksModal.hidden = true; buildQueue(); }); });
    var dc = deletedCount(), leechTotal = liveIds().filter(isLeech).length, extra = '';
    if (leechTotal) extra += '<span>' + leechTotal + ' leech' + (leechTotal > 1 ? 'es' : '') + ' (8+ lapses)</span>';
    if (dc) extra += '<span>' + dc + ' removed</span><button id="restore-all">Restore</button>';
    deckRemoved.hidden = !extra; deckRemoved.innerHTML = extra;
    var ra = document.getElementById('restore-all'); if (ra) ra.addEventListener('click', function () { state.deleted = {}; save(); rebuild(); renderDeckList(); });
  }

  // ---------- sets modal ----------
  var setsModal = document.getElementById('sets-modal');
  var setModuleWrap = document.getElementById('set-module-wrap');
  var setSubareaWrap = document.getElementById('set-subarea-wrap');
  var setAheadWrap = document.getElementById('set-ahead-wrap');
  var setModuleSel = document.getElementById('set-module');
  var setSubareaSel = document.getElementById('set-subarea');
  var setAheadSel = document.getElementById('set-ahead-days');
  var setLimitSel = document.getElementById('set-limit');
  var setModeSel = document.getElementById('set-mode');
  var setsCount = document.getElementById('sets-count');
  setModuleSel.innerHTML = moduleOrder.map(function (id) { return '<option value="' + id + '">' + esc(moduleMeta[id].name) + ' (' + moduleLiveCount(id) + ')</option>'; }).join('');

  document.getElementById('sets-btn').addEventListener('click', openSets);
  document.getElementById('sets-close').addEventListener('click', function () { setsModal.hidden = true; });
  setsModal.addEventListener('click', function (e) { if (e.target === setsModal) setsModal.hidden = true; });
  document.getElementById('sets-start').addEventListener('click', startSet);
  setsModal.querySelectorAll('input[name="set-src"]').forEach(function (r) { r.addEventListener('change', onSetSrcChange); });
  [setLimitSel, setModeSel, setModuleSel, setSubareaSel, setAheadSel].forEach(function (el) { if (el) el.addEventListener('change', function () { if (el === setModuleSel) populateSubareas(); updateSetPreview(); }); });

  function currentSrc() { var r = setsModal.querySelector('input[name="set-src"]:checked'); return r ? r.value : 'enabled'; }
  function populateSubareas() {
    var subs = [''].concat([...new Set(liveIds().filter(function (id) { return live[id].moduleId === setModuleSel.value; }).map(function (id) { return live[id].subarea; }).filter(Boolean))].sort());
    setSubareaSel.innerHTML = subs.map(function (s) { return '<option value="' + esc(s) + '">' + (s ? esc(s) : 'All subareas') + '</option>'; }).join('');
  }
  function onSetSrcChange() {
    var src = currentSrc();
    setModuleWrap.hidden = src !== 'module';
    setSubareaWrap.hidden = src !== 'module';
    setAheadWrap.hidden = src !== 'ahead';
    if (src === 'module') populateSubareas();
    updateSetPreview();
  }
  function buildCustomFromUI() {
    var src = currentSrc();
    var c = { source: src, module: setModuleSel.value, subarea: src === 'module' ? (setSubareaSel.value || null) : null, aheadDays: parseInt(setAheadSel.value, 10) || 1, limit: parseInt(setLimitSel.value, 10), cram: setModeSel.value === 'cram' };
    if (src === 'mnemonic') c.mnemonicMode = true;
    return c;
  }
  function previewPool() { var saved = custom; custom = buildCustomFromUI(); var pool = customPool(); custom = saved; return pool; }
  function updateSetPreview() {
    var pool = previewPool().length, lim = parseInt(setLimitSel.value, 10);
    var n = lim > 0 ? Math.min(lim, pool) : pool;
    setsCount.textContent = pool === 0 ? 'No cards match' : (n + ' card' + (n > 1 ? 's' : '') + (lim > 0 && pool > lim ? ' of ' + pool : ''));
    document.getElementById('sets-start').disabled = pool === 0;
  }
  function openSets() {
    document.getElementById('set-star-n').textContent = '(' + starredIds().length + ')';
    document.getElementById('set-mcq-n').textContent = '(' + mcqTrapIds.size + ')';
    document.getElementById('set-leech-n').textContent = '(' + liveIds().filter(isLeech).length + ')';
    onSetSrcChange();
    setsModal.hidden = false;
  }
  function startSet() {
    var c = buildCustomFromUI();
    var labels = { enabled: 'All enabled', module: moduleMeta[setModuleSel.value].name, starred: '★ Starred', due: 'Only due', 'new': 'Only new', hardest: 'Hardest', mcqtrap: 'MCQ traps', mnemonic: 'Mnemonics', shaky: 'Shaky/Blank', weakest: 'Weakest modules', leech: 'Leeches', ahead: 'Due next ' + c.aheadDays + 'd' };
    c.label = labels[c.source] || 'Set';
    if (c.source === 'module' && c.subarea) c.label = moduleMeta[setModuleSel.value].name + ' → ' + c.subarea;
    blitz = false; custom = c; setsModal.hidden = true; buildQueue();
  }

  // ---------- stats modal ----------
  var statsModal = document.getElementById('stats-modal');
  document.getElementById('stats-btn').addEventListener('click', openStats);
  document.getElementById('stats-close').addEventListener('click', function () { statsModal.hidden = true; });
  statsModal.addEventListener('click', function (e) { if (e.target === statsModal) statsModal.hidden = true; });
  var statsSort = { col: 'lapse', dir: -1 };
  function openStats() { renderStats(); statsModal.hidden = false; }
  function renderStats() {
    var body = document.getElementById('stats-body');
    var ids = liveIds();
    var nw = 0, young = 0, mature = 0, retired = 0;
    ids.forEach(function (id) { var s = state.sched[id]; if (!s) nw++; else if (s.known) retired++; else if (s.ivl >= 7) mature++; else young++; });
    var h = '<div class="st-maturity">' +
      '<span class="st-chip new"><b>' + nw + '</b> new</span>' +
      '<span class="st-chip young"><b>' + young + '</b> learning</span>' +
      '<span class="st-chip mature"><b>' + mature + '</b> mature</span>' +
      '<span class="st-chip retired"><b>' + retired + '</b> retired</span></div>';
    var t = todayNum(), bins = [0, 0, 0, 0, 0, 0, 0];
    enabledIds().forEach(function (id) { var s = state.sched[id]; if (s && !s.known) { var d = s.due - t; if (d >= 0 && d < 7) bins[d]++; } });
    var maxB = Math.max(1, Math.max.apply(null, bins));
    h += '<h4>Due — next 7 days</h4><div class="st-forecast">' + bins.map(function (n, i) {
      return '<div class="st-fcol"><div class="st-fbar" style="height:' + Math.round(n / maxB * 60) + 'px"></div><span class="st-fn">' + n + '</span><span>' + (i === 0 ? 'tod' : '+' + i) + '</span></div>';
    }).join('') + '</div>';
    h += '<h4>Last 30 days</h4><div class="st-cal">';
    for (var i = 29; i >= 0; i--) {
      var d = new Date(); d.setDate(d.getDate() - i);
      var dk = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      var n = state.history[dk] || 0;
      h += '<span class="cal-day" title="' + dk + ': ' + n + '" style="opacity:' + (n ? (0.25 + Math.min(0.75, n / 30)) : 0.08) + '"></span>';
    }
    h += '</div>';
    var rows = moduleOrder.map(function (mid) {
      var mids = ids.filter(function (id) { return live[id].moduleId === mid && state.sched[id]; });
      var lapse = mids.length ? mids.reduce(function (s, id) { return s + (state.sched[id].lapses || 0); }, 0) / mids.length : 0;
      return { name: moduleMeta[mid].name, cards: moduleLiveCount(mid), lapse: lapse };
    });
    rows.sort(function (a, b) { return (a[statsSort.col] > b[statsSort.col] ? 1 : -1) * statsSort.dir; });
    h += '<h4>Per-module lapse rate</h4><table class="st-table"><tr>' +
      '<th data-col="name">Module</th><th data-col="cards">Cards</th><th data-col="lapse">Lapse</th></tr>' +
      rows.map(function (r) { return '<tr><td>' + esc(r.name) + '</td><td>' + r.cards + '</td><td>' + r.lapse.toFixed(2) + '</td></tr>'; }).join('') + '</table>';
    var top = enabledIds().filter(function (id) { return state.sched[id] && state.sched[id].lapses; }).sort(function (a, b) { return state.sched[b].lapses - state.sched[a].lapses; }).slice(0, 10);
    if (top.length) h += '<h4>Hardest cards</h4><ul class="st-list">' + top.map(function (id) { return '<li><span>' + esc(live[id].front.slice(0, 52)) + '</span><b>' + state.sched[id].lapses + '×</b></li>'; }).join('') + '</ul>';
    if (state.log.length) h += '<h4>Recent reviews</h4><ul class="st-log">' + state.log.slice(0, 50).map(function (e) {
      return '<li><span class="lg-g g' + e.g + '">' + ['Again', 'Hard', 'Good', 'Easy'][e.g] + '</span> ' + esc((live[e.id] ? live[e.id].front : 'deleted').slice(0, 40)) + ' <span class="lg-ivl">' + ivlLabel(e.ivl) + '</span></li>';
    }).join('') + '</ul>';
    body.innerHTML = h;
    body.querySelectorAll('.st-table th[data-col]').forEach(function (th) {
      th.addEventListener('click', function () { var c = th.getAttribute('data-col'); if (statsSort.col === c) statsSort.dir *= -1; else { statsSort.col = c; statsSort.dir = c === 'name' ? 1 : -1; } renderStats(); });
    });
  }

  // ---------- settings modal ----------
  var settingsModal = document.getElementById('settings-modal');
  document.getElementById('settings-btn').addEventListener('click', openSettings);
  document.getElementById('settings-close').addEventListener('click', function () { settingsModal.hidden = true; });
  settingsModal.addEventListener('click', function (e) { if (e.target === settingsModal) settingsModal.hidden = true; });
  function openSettings() {
    document.getElementById('exam-date').value = state.examDate || '';
    document.getElementById('mult-slider').value = state.intervalMult;
    document.getElementById('mult-label').textContent = (Math.round(state.intervalMult * 10) / 10) + '×';
    document.getElementById('timer-sel').value = String(state.timerSecs);
    document.getElementById('cloze-toggle').checked = state.clozeMode;
    document.getElementById('swipe-toggle').checked = state.swipeEnabled;
    [['fs-085', 0.85], ['fs-1', 1], ['fs-12', 1.2]].forEach(function (p) { document.getElementById(p[0]).classList.toggle('is-on', state.fontSize === p[1]); });
    document.getElementById('settings-msg').textContent = '';
    settingsModal.hidden = false;
  }
  document.getElementById('exam-date').addEventListener('change', function () { state.examDate = this.value || null; save(); renderChrome(); });
  document.getElementById('mult-slider').addEventListener('input', function () { state.intervalMult = parseFloat(this.value); document.getElementById('mult-label').textContent = (Math.round(state.intervalMult * 10) / 10) + '×'; save(); renderChrome(); });
  document.getElementById('timer-sel').addEventListener('change', function () { state.timerSecs = parseInt(this.value, 10); save(); });
  document.getElementById('cloze-toggle').addEventListener('change', function () { state.clozeMode = this.checked; save(); render(); });
  document.getElementById('swipe-toggle').addEventListener('change', function () { state.swipeEnabled = this.checked; save(); render(); });
  [['fs-085', 0.85], ['fs-1', 1], ['fs-12', 1.2]].forEach(function (p) {
    document.getElementById(p[0]).addEventListener('click', function () { state.fontSize = p[1]; applyPrefs(); save(); openSettings(); });
  });
  document.getElementById('export-btn').addEventListener('click', function () {
    var data = localStorage.getItem(KEY) || '';
    if (shareText(data)) { document.getElementById('settings-msg').textContent = 'Opened share sheet.'; return; }
    try { navigator.clipboard.writeText(data); document.getElementById('settings-msg').textContent = 'Copied backup to clipboard.'; }
    catch (e) { document.getElementById('settings-msg').textContent = 'Copy failed.'; }
  });
  document.getElementById('import-btn').addEventListener('click', function () {
    var ta = document.getElementById('import-area'); ta.hidden = !ta.hidden; document.getElementById('import-do').hidden = ta.hidden;
  });
  document.getElementById('import-do').addEventListener('click', function () {
    try {
      var raw = JSON.parse(document.getElementById('import-area').value);
      if (raw && raw.v === 1) { if (confirm('Replace ALL current progress with this backup? This cannot be undone.')) { localStorage.setItem(KEY, JSON.stringify(raw)); location.reload(); } }
      else alert('Not a valid backup.');
    } catch (e) { alert('Invalid backup data.'); }
  });
  document.getElementById('reset-btn').addEventListener('click', function () {
    if (!confirm('Reset scheduling, streak, history and confidence? Stars, edits and removed cards are kept. Cannot be undone.')) return;
    state.sched = {}; state.streak = { count: 0, last: null }; state.studied = { day: null, n: 0 }; state.history = {}; state.log = []; state.confidence = {}; state.missedToday = { day: null, ids: [] };
    save(); settingsModal.hidden = true; setMode('due');
  });

  // ---------- swipe-to-dismiss sheets ----------
  function attachSheetSwipe(panel, closeFn) {
    var handle = panel.querySelector('.fc-panel-head'); if (!handle) return;
    var y0 = 0, dy = 0, active = false;
    handle.addEventListener('touchstart', function (e) { y0 = e.touches[0].clientY; active = true; panel.style.transition = 'none'; }, { passive: true });
    handle.addEventListener('touchmove', function (e) { if (!active) return; dy = e.touches[0].clientY - y0; if (dy > 0) panel.style.transform = 'translateY(' + dy + 'px)'; }, { passive: true });
    handle.addEventListener('touchend', function () {
      active = false; panel.style.transition = 'transform .22s ease';
      if (dy > 80) { panel.style.transform = 'translateY(100%)'; setTimeout(function () { panel.style.transform = ''; panel.style.transition = ''; closeFn(); }, 220); }
      else { panel.style.transform = 'translateY(0)'; }
      dy = 0;
    });
  }
  attachSheetSwipe(decksModal.querySelector('.fc-panel'), closeDecks);
  attachSheetSwipe(setsModal.querySelector('.fc-panel'), function () { setsModal.hidden = true; });
  attachSheetSwipe(statsModal.querySelector('.fc-panel'), function () { statsModal.hidden = true; });
  attachSheetSwipe(settingsModal.querySelector('.fc-panel'), function () { settingsModal.hidden = true; });

  // ---------- keyboard ----------
  document.addEventListener('keydown', function (e) {
    var modals = [decksModal, setsModal, statsModal, settingsModal];
    if (modals.some(function (m) { return !m.hidden; })) { if (e.key === 'Escape') { modals.forEach(function (m) { m.hidden = true; }); buildQueue(); } return; }
    if (editing) return;
    if (e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); flip(); }
    else if (e.key === 'ArrowLeft' || e.key === 'u' || e.key === 'U') { e.preventDefault(); undo(); }
    else if (e.key === 's' || e.key === 'S') { if (showBack && queue.length) { e.preventDefault(); toggleStar(queue[0]); } }
    else if (!showBack) { return; }
    else if (e.key === 'k' || e.key === 'K') { e.preventDefault(); grade(0); }
    else if (e.key === 'm' || e.key === 'M') { e.preventDefault(); grade(3); }
    else if (e.key === 'Enter') { e.preventDefault(); markKnown(); }
    else if (['1', '2', '3', '4'].indexOf(e.key) >= 0) { e.preventDefault(); grade(parseInt(e.key, 10) - 1); }
  });

  // ---------- cross-device sync ----------
  var SYNC_CFG_KEY = 'gn_fc_sync';
  var DEFAULT_SYNC_URL = 'https://recall-sync-production.up.railway.app';
  var Sync = (function () {
    var cfg = loadCfg();
    var pushTimer = null;

    function loadCfg() {
      try { var c = JSON.parse(localStorage.getItem(SYNC_CFG_KEY)); if (c && c.url && c.code) return c; } catch (e) {}
      var d = (typeof window !== 'undefined') && window.RECALL_SYNC_DEFAULTS; // native shell pre-pairing
      if (d && d.url && d.code) { var c2 = { url: d.url, code: d.code, secret: d.secret || '', rev: 0 }; persistCfg(c2); return c2; }
      return null;
    }
    function persistCfg(c) { cfg = c; try { localStorage.setItem(SYNC_CFG_KEY, JSON.stringify(c)); } catch (e) {} }
    function configured() { return !!(cfg && cfg.url && cfg.code); }
    function endpoint() { return cfg.url.replace(/\/+$/, '') + '/v1/state/' + encodeURIComponent(cfg.code); }
    function headers() { var h = { 'content-type': 'application/json' }; if (cfg.secret) h['x-sync-secret'] = cfg.secret; return h; }
    function now() { try { return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); } catch (e) { return ''; } }
    function setStatus(s) { var el = document.getElementById('sync-status'); if (el) el.textContent = s; }
    function localState() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
    function canon(s) { return JSON.stringify(window.RecallMerge.mergeStates(s, s)); }

    // merge a server blob into local, apply only if it actually changes anything; return merged
    function absorb(serverState) {
      var cur = localState();
      var merged = window.RecallMerge.mergeStates(cur, serverState);
      if (JSON.stringify(merged) !== canon(cur)) applyMergedState(merged);
      return merged;
    }

    function pull() {
      if (!configured()) return Promise.resolve();
      setStatus('Syncing…');
      return fetch(endpoint(), { headers: headers() }).then(function (r) {
        if (r.status === 404) return null;
        if (r.status === 401) { setStatus('Sync: check secret'); throw new Error('401'); }
        if (!r.ok) throw new Error('GET ' + r.status);
        return r.json();
      }).then(function (data) {
        if (!data) return push();                       // nothing on server yet -> upload local
        cfg.rev = data.rev; persistCfg(cfg);
        var merged = absorb(data.state);
        if (JSON.stringify(merged) !== canon(data.state)) return push(); // local had extra -> push
        setStatus('Synced ' + now());
      }).catch(function (e) { if (String(e.message) !== '401') setStatus('Offline — will retry'); });
    }

    function push(depth) {
      if (!configured()) return Promise.resolve();
      if (depth == null) depth = 0;
      if (depth > 5) { setStatus('Sync: too many conflicts'); return Promise.resolve(); }
      setStatus('Syncing…');
      var body = JSON.stringify({ rev: cfg.rev || 0, state: localState() });
      return fetch(endpoint(), { method: 'PUT', headers: headers(), body: body }).then(function (r) {
        if (r.status === 409) return r.json().then(function (cur) { cfg.rev = cur.rev; persistCfg(cfg); absorb(cur.state); return push(depth + 1); });
        if (r.status === 401) { setStatus('Sync: check secret'); throw new Error('401'); }
        if (!r.ok) throw new Error('PUT ' + r.status);
        return r.json().then(function (res) { cfg.rev = res.rev; persistCfg(cfg); setStatus('Synced ' + now()); });
      }).catch(function (e) { if (String(e.message) !== '401') setStatus('Offline — will retry'); });
    }

    function scheduleAfterChange() {
      if (!configured()) return;
      if (pushTimer) clearTimeout(pushTimer);
      pushTimer = setTimeout(function () { push(); }, 3500);
    }

    return {
      pull: pull, push: push, scheduleAfterChange: scheduleAfterChange, configured: configured,
      getCfg: function () { return cfg ? { url: cfg.url, code: cfg.code, secret: cfg.secret || '' } : null; },
      setCfg: function (url, code, secret) { persistCfg({ url: url, code: code, secret: secret || '', rev: 0 }); },
      clear: function () { cfg = null; try { localStorage.removeItem(SYNC_CFG_KEY); } catch (e) {} },
      applyPairing: function (p) { // called by the native deep-link handler or a web #pair= link
        if (!p || !p.url || !p.code) return false;
        persistCfg({ url: p.url, code: p.code, secret: p.secret || '', rev: 0 });
        setStatus('Paired — syncing…'); pull(); refreshSyncUI(); return true;
      },
      init: function () {
        // accept a web pairing link: flashcards.html#pair?u=..&c=..&s=..
        if (location.hash.indexOf('pair') >= 0) {
          var q = new URLSearchParams(location.hash.replace(/^#?pair\??/, ''));
          if (q.get('u') && q.get('c')) { this.applyPairing({ url: q.get('u'), code: q.get('c'), secret: q.get('s') || '' }); }
          try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
        }
        if (!configured()) return;
        pull();
        window.addEventListener('focus', pull);
        document.addEventListener('visibilitychange', function () { if (!document.hidden) pull(); });
      }
    };
  })();
  window.RecallSync = Sync;

  // ---------- sync settings UI ----------
  function genCode() {
    var a = new Uint8Array(12);
    (window.crypto || window.msCrypto).getRandomValues(a);
    return Array.prototype.map.call(a, function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
  }
  function refreshSyncUI() {
    var cfg = Sync.getCfg();
    var sum = document.getElementById('sync-summary');
    if (sum) {
      if (cfg) {
        var host = cfg.url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
        sum.textContent = 'On · code ' + cfg.code.slice(0, 6) + '… · ' + host;
      } else { sum.textContent = 'Off — set up to sync this device with your others.'; }
    }
    var u = document.getElementById('sync-url'), c = document.getElementById('sync-code'), s = document.getElementById('sync-secret');
    if (u) u.value = cfg ? cfg.url : DEFAULT_SYNC_URL;
    if (c) c.value = cfg ? cfg.code : '';
    if (s) s.value = cfg ? cfg.secret : '';
    var qr = document.getElementById('sync-qr'); if (qr) { qr.hidden = true; qr.innerHTML = ''; }
  }
  function renderSyncQR() {
    var cfg = Sync.getCfg(); var box = document.getElementById('sync-qr'); if (!box) return;
    if (!cfg) { box.textContent = 'Set up sync first.'; box.hidden = false; return; }
    var payload = 'recall://pair?u=' + encodeURIComponent(cfg.url) + '&c=' + encodeURIComponent(cfg.code) + (cfg.secret ? '&s=' + encodeURIComponent(cfg.secret) : '');
    try {
      var qr = qrcode(0, 'M'); qr.addData(payload); qr.make();
      box.innerHTML = qr.createImgTag(4, 10) + '<div class="fc-hint">Scan with your other device’s camera to pair it.</div>';
    } catch (e) { box.textContent = 'QR unavailable.'; }
    box.hidden = false;
  }
  (function wireSyncUI() {
    var setupBtn = document.getElementById('sync-setup'), fields = document.getElementById('sync-setup-fields');
    if (setupBtn) setupBtn.addEventListener('click', function () { fields.hidden = !fields.hidden; });
    var nowBtn = document.getElementById('sync-now'); if (nowBtn) nowBtn.addEventListener('click', function () { Sync.pull(); });
    var qrBtn = document.getElementById('sync-qr-btn'); if (qrBtn) qrBtn.addEventListener('click', renderSyncQR);
    var gen = document.getElementById('sync-gen'); if (gen) gen.addEventListener('click', function () { document.getElementById('sync-code').value = genCode(); });
    var saveBtn = document.getElementById('sync-save');
    if (saveBtn) saveBtn.addEventListener('click', function () {
      var url = document.getElementById('sync-url').value.trim();
      var code = document.getElementById('sync-code').value.trim();
      var secret = document.getElementById('sync-secret').value.trim();
      if (!url || !code) { document.getElementById('sync-status').textContent = 'Enter a URL and a code.'; return; }
      Sync.setCfg(url, code, secret); refreshSyncUI(); Sync.pull();
    });
    var off = document.getElementById('sync-off'); if (off) off.addEventListener('click', function () { Sync.clear(); refreshSyncUI(); document.getElementById('sync-status').textContent = 'Sync turned off.'; });
    var sBtn = document.getElementById('settings-btn'); if (sBtn) sBtn.addEventListener('click', refreshSyncUI);
  })();

  // ---------- go ----------
  applyPrefs();
  document.getElementById('theme-btn').textContent = state.theme === 'dark' ? '☀' : '☽';
  buildQueue();
  Sync.init();
})();
