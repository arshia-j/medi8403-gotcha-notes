/* Gotcha Flashcards — Anki-style SRS over the verified MEDI8403 Gotcha cards.
   No build step, no backend: all state lives in localStorage. */
(function () {
  'use strict';

  // ---------- source data ----------
  var DECK = (window.FLASHCARDS && window.FLASHCARDS.cards) || [];
  var MODULES = (window.GOTCHA && window.GOTCHA.modules) || [];

  // parentId -> { card, moduleName } from the original Gotcha data (for "Confused?" + images)
  var parentMap = {};
  MODULES.forEach(function (m) {
    (m.cards || []).forEach(function (pc) { parentMap[pc.id] = { card: pc, moduleName: m.name }; });
  });

  // ordered list of modules present in the deck
  var moduleOrder = [];
  var moduleMeta = {};
  DECK.forEach(function (c) {
    if (!moduleMeta[c.moduleId]) { moduleMeta[c.moduleId] = { id: c.moduleId, name: c.module }; moduleOrder.push(c.moduleId); }
  });
  moduleOrder.sort(function (a, b) { return moduleMeta[a].name.localeCompare(moduleMeta[b].name); });

  // ---------- state ----------
  var KEY = 'gn_fc_v1';
  var state = load();

  function load() {
    var def = { v: 1, sched: {}, enabled: {}, starred: {}, deleted: {}, edits: {}, streak: { count: 0, last: null }, studied: { day: null, n: 0 } };
    try {
      var raw = JSON.parse(localStorage.getItem(KEY));
      if (raw && raw.v === 1) {
        ['sched', 'enabled', 'starred', 'deleted', 'edits'].forEach(function (k) { if (raw[k]) def[k] = raw[k]; });
        if (raw.streak) def.streak = raw.streak;
        if (raw.studied) def.studied = raw.studied;
      }
    } catch (e) {}
    moduleOrder.forEach(function (id) { if (!(id in def.enabled)) def.enabled[id] = true; });
    return def;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

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
  function enabledIds() { return liveIds().filter(function (id) { return state.enabled[live[id].moduleId]; }); }
  function moduleLiveCount(mid) { var n = 0; for (var id in live) if (live[id].moduleId === mid) n++; return n; }
  function starredIds() { return liveIds().filter(function (id) { return state.starred[id]; }); }
  function deletedCount() { return Object.keys(state.deleted).length; }

  // ---------- dates (local epoch-day integer) ----------
  function todayNum() { var d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000); }

  // ---------- SRS (SM-2 lite, day based) ----------
  function compute(cur, grade) {
    var ease = cur ? cur.ease : 2.5, ivl = cur ? cur.ivl : 0, reps = cur ? cur.reps : 0, lapses = cur ? cur.lapses : 0;
    if (grade === 0) { lapses++; reps = 0; ivl = 0; ease = Math.max(1.3, ease - 0.2); }
    else if (grade === 1) { ease = Math.max(1.3, ease - 0.15); ivl = reps < 1 ? 1 : Math.max(1, Math.round(ivl * 1.2)); reps++; }
    else if (grade === 2) { ivl = reps < 1 ? 1 : (reps < 2 ? 3 : Math.round(Math.max(ivl, 1) * ease)); reps++; }
    else { ease = ease + 0.15; ivl = reps < 1 ? 2 : Math.round(Math.max(ivl, 1) * ease * 1.3); reps++; }
    return { ease: Math.round(ease * 100) / 100, ivl: ivl, reps: reps, lapses: lapses, due: todayNum() + ivl, last: todayNum() };
  }
  function ivlLabel(ivl) { return ivl <= 0 ? '<10m' : (ivl === 1 ? '1d' : (ivl < 30 ? ivl + 'd' : Math.round(ivl / 30) + 'mo')); }

  // ---------- session ----------
  var mode = 'due';            // 'due' | 'cram'  (quick modes)
  var custom = null;           // active custom session: {source, module, limit, cram, label}
  var queue = [];
  var session = { total: 0, done: 0 };
  var showBack = false;
  var editing = false;
  var undoSnap = null;

  function isCram() { return custom ? custom.cram : (mode === 'cram'); }

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
      case 'module':  ids = liveIds().filter(function (id) { return live[id].moduleId === custom.module; }); break;
      case 'starred': ids = starredIds(); break;
      case 'due':     ids = enabledIds().filter(function (id) { var s = state.sched[id]; return s && s.due <= t; }); break;
      case 'new':     ids = enabledIds().filter(function (id) { return !state.sched[id]; }); break;
      case 'hardest': ids = enabledIds().slice().sort(function (a, b) { return (state.sched[b] ? state.sched[b].lapses : 0) - (state.sched[a] ? state.sched[a].lapses : 0); }); break;
      default:        ids = enabledIds();
    }
    return ids;
  }

  function buildQueue() {
    var ids;
    if (custom) {
      ids = customPool();
      ids = custom.cram ? shuffle(ids.slice()) : orderDueFirst(ids);
      if (custom.limit > 0) ids = ids.slice(0, custom.limit);
    } else if (mode === 'cram') {
      ids = shuffle(enabledIds().slice());
    } else {
      ids = orderDueFirst(enabledIds());
    }
    queue = ids;
    session = { total: queue.length, done: 0 };
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
    var id = queue[0];
    undoSnap = { id: id, prev: state.sched[id] ? JSON.parse(JSON.stringify(state.sched[id])) : null, queue: queue.slice(), done: session.done };
    state.sched[id] = compute(state.sched[id], g);
    if (state.studied.day !== todayNum()) state.studied = { day: todayNum(), n: 0 };
    state.studied.n++; bumpStreak();
    queue.shift();
    var repeat = isCram() ? (g <= 1) : (g === 0);
    if (repeat) queue.splice(Math.min(queue.length, 8 + Math.floor(Math.random() * 6)), 0, id);
    else session.done++;
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
    queue = undoSnap.queue; session.done = undoSnap.done;
    if (state.studied.n > 0) state.studied.n--;
    showBack = true; editing = false; undoSnap = null; save(); render();
  }

  // ---------- card actions: star / edit / delete ----------
  function toggleStar(id) { if (state.starred[id]) delete state.starred[id]; else state.starred[id] = true; save(); render(); }
  function deleteCard(id) {
    if (!confirm('Remove this card from your deck? You can restore removed cards from the Decks panel.')) return;
    state.deleted[id] = true; save(); rebuild();
    queue = queue.filter(function (q) { return q !== id; });
    if (session.total > 0) session.total--;
    showBack = false; editing = false; render();
  }
  function saveEdit(id, front, back) {
    front = (front || '').trim(); back = (back || '').trim();
    if (!front || !back) { alert('Front and back can’t be empty.'); return; }
    state.edits[id] = { front: front, back: back }; save(); rebuild();
    editing = false; render();
  }

  // ---------- markdown-lite (escape first; bold + bullets) ----------
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
    return '<figure class="fc-img"><img src="' + esc(img.src) + '" alt="' + esc(img.alt || img.caption || '') + '" loading="lazy" />' +
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

  // ---------- render ----------
  var stage = document.getElementById('fc-stage');
  var countsEl = document.getElementById('fc-counts');
  var progFill = document.getElementById('fc-prog-fill');
  var scopeLabel = document.getElementById('fc-scope-label');
  var streakEl = document.getElementById('fc-streak');

  function render() {
    renderCounts();
    if (!liveIds().length) { stage.innerHTML = emptyState('Deck empty', 'Every card is removed or no data loaded. Restore cards from the Decks panel, or serve this page over http so the data loads.'); return; }
    if (!queue.length) { renderDone(); return; }

    var card = live[queue[0]];
    if (!card) { queue.shift(); return render(); }
    var p = parentMap[card.parentId];
    var sub = card.subarea || (p && p.card.subarea) || '';

    var html = '<article class="fc-card">';
    html += '<div class="fc-meta"><span class="fc-chip">' + esc(card.module) + '</span>' + (sub ? '<span class="fc-chip sub">' + esc(sub) + '</span>' : '');
    if (showBack && !editing) {
      html += '<div class="fc-actions">' +
        '<button class="fc-act ' + (state.starred[card.id] ? 'is-star' : '') + '" data-act="star">' + (state.starred[card.id] ? '★' : '☆') + '</button>' +
        '<button class="fc-act" data-act="edit">✎ Edit</button>' +
        '<button class="fc-act danger" data-act="del">🗑</button>' +
      '</div>';
    }
    html += '</div>';

    html += '<div class="fc-q">' + esc(card.front) + (card.edited ? '<span class="fc-edited-tag">edited</span>' : '') + '</div>';

    if (!showBack) {
      html += '<div class="fc-front-cue"><kbd>Space</kbd> or tap to reveal</div>';
      html += '<button class="fc-flip-btn" id="flip-btn">Show answer</button>';
    } else if (editing) {
      html += '<div class="fc-edit">' +
        '<div><label>Front</label><textarea id="edit-front">' + esc(card.front) + '</textarea></div>' +
        '<div><label>Back</label><textarea id="edit-back">' + esc(card.back) + '</textarea></div>' +
        '<div class="fc-edit-row"><button class="fc-edit-save" id="edit-save">Save</button><button class="fc-edit-cancel" id="edit-cancel">Cancel</button></div>' +
      '</div>';
    } else {
      html += '<div class="fc-divider"></div>';
      html += '<div class="fc-q-echo">' + esc(card.front) + '</div>';
      html += '<div class="fc-a">' + esc(card.back) + '</div>';
      if (card.image) html += imageFig(card.image);
      html += '<details class="fc-more"><summary class="fc-more-toggle"><span class="caret">▸</span> Confused? — full explanation</summary>' +
        '<div class="fc-more-body">' + explanation(card) + '</div></details>';
      html += '<div class="fc-grades">';
      [['0', 'Again'], ['1', 'Hard'], ['2', 'Good'], ['3', 'Easy']].forEach(function (g) {
        var prev = compute(state.sched[card.id], parseInt(g[0], 10));
        html += '<button class="fc-grade" data-g="' + g[0] + '"><span class="g-lbl">' + g[1] + '</span><span class="g-ivl">' + ivlLabel(prev.ivl) + '</span></button>';
      });
      html += '</div>';
    }
    html += '</article>';
    stage.innerHTML = html;
    wireCard(card.id);
  }

  function wireCard(id) {
    var fb = document.getElementById('flip-btn');
    if (fb) fb.addEventListener('click', flip);
    var cardEl = stage.querySelector('.fc-card');
    if (!showBack && cardEl) cardEl.addEventListener('click', function (e) { if (e.target.closest('.fc-flip-btn')) return; flip(); });
    stage.querySelectorAll('.fc-grade').forEach(function (b) { b.addEventListener('click', function () { grade(parseInt(b.getAttribute('data-g'), 10)); }); });
    stage.querySelectorAll('.fc-act').forEach(function (b) {
      b.addEventListener('click', function () {
        var a = b.getAttribute('data-act');
        if (a === 'star') toggleStar(id); else if (a === 'edit') { editing = true; render(); } else if (a === 'del') deleteCard(id);
      });
    });
    var es = document.getElementById('edit-save');
    if (es) es.addEventListener('click', function () { saveEdit(id, document.getElementById('edit-front').value, document.getElementById('edit-back').value); });
    var ec = document.getElementById('edit-cancel');
    if (ec) ec.addEventListener('click', function () { editing = false; render(); });
  }

  function renderCounts() {
    var c = counts();
    countsEl.innerHTML =
      '<span><span class="dot" style="background:var(--easy)"></span><b>' + c.nw + '</b> new</span>' +
      '<span><span class="dot" style="background:var(--hard)"></span><b>' + c.learn + '</b> learning</span>' +
      '<span><span class="dot" style="background:var(--good)"></span><b>' + Math.max(0, c.due - c.learn) + '</b> due</span>';
    progFill.style.width = (session.total ? Math.round(session.done / session.total * 100) : 0) + '%';
    scopeLabel.textContent = custom ? ('Set · ' + custom.label) : (mode === 'cram' ? 'Cram · all enabled modules' : 'MEDI8403 · spaced recall');
    streakEl.textContent = '🔥 ' + state.streak.count + '-day streak · ' + (state.studied.day === todayNum() ? state.studied.n : 0) + ' reviewed today';
  }

  function emptyState(title, body, btnLabel, btnFn) {
    setTimeout(function () { var b = document.getElementById('es-btn'); if (b && btnFn) b.addEventListener('click', btnFn); }, 0);
    return '<div class="fc-empty"><div class="big">✓</div><h2>' + esc(title) + '</h2><p>' + esc(body) + '</p>' +
      (btnLabel ? '<button id="es-btn">' + esc(btnLabel) + '</button>' : '') + '</div>';
  }
  function renderDone() {
    if (custom) { stage.innerHTML = emptyState('Set complete', 'You cleared every card in “' + custom.label + '”. Start another set or switch back to Due.', 'Back to Due', function () { setMode('due'); }); return; }
    if (mode === 'cram') { stage.innerHTML = emptyState('Cram complete', 'You cleared every card in this set. Cram again, pick a Set, or switch to scheduled review.', 'Cram all again', buildQueue); return; }
    var c = counts();
    if (c.nw + c.due === 0) stage.innerHTML = emptyState('All caught up', 'Nothing is due right now. Hit Cram or build a Set to keep drilling before the exam.', 'Cram everything', function () { setMode('cram'); });
    else stage.innerHTML = emptyState('Session done', 'You finished this batch. ' + (c.nw + c.due) + ' more are waiting — start another round?', 'Continue', buildQueue);
  }
  function flip() { if (!showBack) { showBack = true; render(); } }

  // ---------- modes ----------
  function refreshModeButtons() {
    var due = document.getElementById('mode-due'), cram = document.getElementById('mode-cram');
    var dOn = !custom && mode === 'due', cOn = !custom && mode === 'cram';
    due.classList.toggle('is-on', dOn); cram.classList.toggle('is-on', cOn);
    due.setAttribute('aria-selected', dOn); cram.setAttribute('aria-selected', cOn);
  }
  function setMode(m) { mode = m; custom = null; buildQueue(); }
  document.getElementById('mode-due').addEventListener('click', function () { setMode('due'); });
  document.getElementById('mode-cram').addEventListener('click', function () { setMode('cram'); });

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
      var total = moduleLiveCount(id);
      var dueN = liveIds().filter(function (cid) { return live[cid].moduleId === id; }).filter(function (cid) { var s = state.sched[cid]; return !s || s.due <= t; }).length;
      return '<label class="fc-deck-row">' +
        '<input type="checkbox" data-mod="' + id + '"' + (state.enabled[id] ? ' checked' : '') + ' />' +
        '<span class="d-name">' + esc(moduleMeta[id].name) + '</span>' +
        '<span class="d-count">' + dueN + '/' + total + '</span>' +
        '<button class="d-cram" data-cram="' + id + '">Cram this</button></label>';
    }).join('');
    deckList.querySelectorAll('input[data-mod]').forEach(function (cb) { cb.addEventListener('change', function () { state.enabled[cb.getAttribute('data-mod')] = cb.checked; save(); }); });
    deckList.querySelectorAll('button[data-cram]').forEach(function (b) { b.addEventListener('click', function () { custom = { source: 'module', module: b.getAttribute('data-cram'), limit: 0, cram: true, label: moduleMeta[b.getAttribute('data-cram')].name }; decksModal.hidden = true; buildQueue(); }); });
    var dc = deletedCount();
    if (dc) { deckRemoved.hidden = false; deckRemoved.innerHTML = '<span>' + dc + ' card' + (dc > 1 ? 's' : '') + ' removed</span><button id="restore-all">Restore all</button>'; document.getElementById('restore-all').addEventListener('click', function () { state.deleted = {}; save(); rebuild(); renderDeckList(); }); }
    else { deckRemoved.hidden = true; deckRemoved.innerHTML = ''; }
  }

  // ---------- session builder ----------
  var setsModal = document.getElementById('sets-modal');
  var setModuleWrap = document.getElementById('set-module-wrap');
  var setModuleSel = document.getElementById('set-module');
  var setLimitSel = document.getElementById('set-limit');
  var setModeSel = document.getElementById('set-mode');
  var setsCount = document.getElementById('sets-count');
  setModuleSel.innerHTML = moduleOrder.map(function (id) { return '<option value="' + id + '">' + esc(moduleMeta[id].name) + ' (' + moduleLiveCount(id) + ')</option>'; }).join('');

  document.getElementById('sets-btn').addEventListener('click', openSets);
  document.getElementById('sets-close').addEventListener('click', function () { setsModal.hidden = true; });
  setsModal.addEventListener('click', function (e) { if (e.target === setsModal) setsModal.hidden = true; });
  document.getElementById('sets-start').addEventListener('click', startSet);
  setsModal.querySelectorAll('input[name="set-src"]').forEach(function (r) { r.addEventListener('change', onSetSrcChange); });
  [setLimitSel, setModeSel, setModuleSel].forEach(function (el) { el.addEventListener('change', updateSetPreview); });

  function currentSrc() { var r = setsModal.querySelector('input[name="set-src"]:checked'); return r ? r.value : 'enabled'; }
  function onSetSrcChange() { setModuleWrap.hidden = currentSrc() !== 'module'; updateSetPreview(); }
  function poolForPreview() {
    var t = todayNum(), src = currentSrc();
    if (src === 'module') return liveIds().filter(function (id) { return live[id].moduleId === setModuleSel.value; });
    if (src === 'starred') return starredIds();
    if (src === 'due') return enabledIds().filter(function (id) { var s = state.sched[id]; return s && s.due <= t; });
    if (src === 'new') return enabledIds().filter(function (id) { return !state.sched[id]; });
    if (src === 'hardest') return enabledIds();
    return enabledIds();
  }
  function updateSetPreview() {
    var pool = poolForPreview().length, lim = parseInt(setLimitSel.value, 10);
    var n = lim > 0 ? Math.min(lim, pool) : pool;
    setsCount.textContent = pool === 0 ? 'No cards match' : (n + ' card' + (n > 1 ? 's' : '') + (lim > 0 && pool > lim ? ' of ' + pool : ''));
    document.getElementById('sets-start').disabled = pool === 0;
  }
  function openSets() {
    document.getElementById('set-star-n').textContent = '(' + starredIds().length + ')';
    setModuleWrap.hidden = currentSrc() !== 'module';
    updateSetPreview();
    setsModal.hidden = false;
  }
  function startSet() {
    var src = currentSrc(), label;
    if (src === 'module') label = moduleMeta[setModuleSel.value].name;
    else label = ({ enabled: 'All enabled', starred: '★ Starred', due: 'Only due', 'new': 'Only new', hardest: 'Hardest' })[src];
    custom = { source: src, module: setModuleSel.value, limit: parseInt(setLimitSel.value, 10), cram: setModeSel.value === 'cram', label: label };
    setsModal.hidden = true;
    buildQueue();
  }

  // ---------- reset ----------
  document.getElementById('reset-btn').addEventListener('click', function () {
    if (!confirm('Reset scheduling, streak and progress? Your stars, edits, removed cards and deck selection are kept. This cannot be undone.')) return;
    state.sched = {}; state.streak = { count: 0, last: null }; state.studied = { day: null, n: 0 };
    save(); setMode('due');
  });

  // ---------- keyboard ----------
  document.addEventListener('keydown', function (e) {
    if (!decksModal.hidden || !setsModal.hidden) { if (e.key === 'Escape') { decksModal.hidden = true; setsModal.hidden = true; buildQueue(); } return; }
    if (editing) return;
    if (e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); flip(); }
    else if (e.key === 'ArrowLeft' || e.key === 'u' || e.key === 'U') { e.preventDefault(); undo(); }
    else if (e.key === 's' || e.key === 'S') { if (showBack && queue.length) { e.preventDefault(); toggleStar(queue[0]); } }
    else if (showBack && ['1', '2', '3', '4'].indexOf(e.key) >= 0) { e.preventDefault(); grade(parseInt(e.key, 10) - 1); }
  });

  // ---------- go ----------
  buildQueue();
})();
