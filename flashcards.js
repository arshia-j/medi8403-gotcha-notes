/* Gotcha Flashcards — Anki-style SRS over the verified MEDI8403 Gotcha cards.
   No build step, no backend: all state lives in localStorage. */
(function () {
  'use strict';

  // ---------- data ----------
  var DECK = (window.FLASHCARDS && window.FLASHCARDS.cards) || [];
  var MODULES = (window.GOTCHA && window.GOTCHA.modules) || [];

  // id -> flashcard
  var byId = {};
  DECK.forEach(function (c) { byId[c.id] = c; });

  // parentId -> { card, moduleName } from the original Gotcha data (for "Confused?" + images)
  var parentMap = {};
  MODULES.forEach(function (m) {
    (m.cards || []).forEach(function (pc) { parentMap[pc.id] = { card: pc, moduleName: m.name }; });
  });

  // ordered list of modules actually present in the deck
  var moduleOrder = [];
  var moduleMeta = {};
  DECK.forEach(function (c) {
    if (!moduleMeta[c.moduleId]) {
      moduleMeta[c.moduleId] = { id: c.moduleId, name: c.module, count: 0 };
      moduleOrder.push(c.moduleId);
    }
    moduleMeta[c.moduleId].count++;
  });
  moduleOrder.sort(function (a, b) { return moduleMeta[a].name.localeCompare(moduleMeta[b].name); });

  // ---------- state ----------
  var KEY = 'gn_fc_v1';
  var state = load();

  function load() {
    var def = { v: 1, sched: {}, enabled: {}, streak: { count: 0, last: null }, studied: { day: null, n: 0 } };
    try {
      var raw = JSON.parse(localStorage.getItem(KEY));
      if (raw && raw.v === 1) {
        def.sched = raw.sched || {};
        def.enabled = raw.enabled || {};
        def.streak = raw.streak || def.streak;
        def.studied = raw.studied || def.studied;
      }
    } catch (e) {}
    // default: every module enabled
    moduleOrder.forEach(function (id) { if (!(id in def.enabled)) def.enabled[id] = true; });
    return def;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  // ---------- dates (local epoch-day integer) ----------
  function todayNum() {
    var d = new Date();
    return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000);
  }

  // ---------- SRS (SM-2 lite, day based) ----------
  function compute(cur, grade) {
    var ease = cur ? cur.ease : 2.5;
    var ivl = cur ? cur.ivl : 0;
    var reps = cur ? cur.reps : 0;
    var lapses = cur ? cur.lapses : 0;
    if (grade === 0) {            // Again — relearn today
      lapses++; reps = 0; ivl = 0; ease = Math.max(1.3, ease - 0.2);
    } else if (grade === 1) {     // Hard
      ease = Math.max(1.3, ease - 0.15);
      ivl = reps < 1 ? 1 : Math.max(1, Math.round(ivl * 1.2)); reps++;
    } else if (grade === 2) {     // Good
      ivl = reps < 1 ? 1 : (reps < 2 ? 3 : Math.round(Math.max(ivl, 1) * ease)); reps++;
    } else {                      // Easy
      ease = ease + 0.15;
      ivl = reps < 1 ? 2 : Math.round(Math.max(ivl, 1) * ease * 1.3); reps++;
    }
    return { ease: Math.round(ease * 100) / 100, ivl: ivl, reps: reps, lapses: lapses, due: todayNum() + ivl, last: todayNum() };
  }
  function ivlLabel(ivl) { return ivl <= 0 ? '<10m' : (ivl === 1 ? '1d' : (ivl < 30 ? ivl + 'd' : Math.round(ivl / 30) + 'mo')); }

  // ---------- queue ----------
  var mode = 'due';            // 'due' | 'cram'
  var cramScope = 'all';       // 'all' | moduleId
  var queue = [];
  var session = { total: 0, done: 0 };
  var showBack = false;
  var undoSnap = null;

  function enabledIds() {
    return DECK.filter(function (c) { return state.enabled[c.moduleId]; }).map(function (c) { return c.id; });
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  function buildQueue() {
    var t = todayNum();
    if (mode === 'cram') {
      var pool = (cramScope === 'all')
        ? enabledIds()
        : DECK.filter(function (c) { return c.moduleId === cramScope; }).map(function (c) { return c.id; });
      queue = shuffle(pool.slice());
    } else {
      var ids = enabledIds();
      var due = [], fresh = [];
      ids.forEach(function (id) {
        var s = state.sched[id];
        if (!s) fresh.push(id);
        else if (s.due <= t) due.push(id);
      });
      due.sort(function (a, b) { return state.sched[a].due - state.sched[b].due; });
      shuffle(fresh);
      queue = due.concat(fresh);
    }
    session = { total: queue.length, done: 0 };
    showBack = false;
    undoSnap = null;
    render();
  }

  // ---------- counts ----------
  function counts() {
    var t = todayNum(), nw = 0, dueN = 0, learn = 0;
    enabledIds().forEach(function (id) {
      var s = state.sched[id];
      if (!s) nw++;
      else if (s.due <= t) { dueN++; if (s.ivl < 1) learn++; }
    });
    return { nw: nw, due: dueN, learn: learn };
  }

  // ---------- grading ----------
  function grade(g) {
    if (!queue.length) return;
    var id = queue[0];
    undoSnap = { id: id, prev: state.sched[id] ? JSON.parse(JSON.stringify(state.sched[id])) : null, queue: queue.slice(), done: session.done, back: true };

    state.sched[id] = compute(state.sched[id], g);

    // studied / streak
    if (state.studied.day !== todayNum()) state.studied = { day: todayNum(), n: 0 };
    state.studied.n++;
    bumpStreak();

    // queue movement
    queue.shift();
    var repeat = (mode === 'cram') ? (g <= 1) : (g === 0);
    if (repeat) { queue.splice(Math.min(queue.length, 8 + Math.floor(Math.random() * 6)), 0, id); }
    else session.done++;

    save();
    showBack = false;
    render();
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
    queue = undoSnap.queue;
    session.done = undoSnap.done;
    if (state.studied.n > 0) state.studied.n--;
    showBack = true;
    undoSnap = null;
    save();
    render();
  }

  // ---------- markdown-lite (escape first; bold + bullets) ----------
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function mdLite(text) {
    if (!text) return '';
    var lines = String(text).split('\n');
    var html = '', inUl = false;
    lines.forEach(function (ln) {
      var b = esc(ln).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      var trimmed = ln.trim();
      if (/^[-•]\s+/.test(trimmed)) {
        if (!inUl) { html += '<ul>'; inUl = true; }
        html += '<li>' + b.replace(/^\s*[-•]\s+/, '') + '</li>';
      } else if (trimmed === '') {
        if (inUl) { html += '</ul>'; inUl = false; }
      } else {
        if (inUl) { html += '</ul>'; inUl = false; }
        html += '<p>' + b + '</p>';
      }
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
    if (c.mnemonic) { h += '<h4>Mnemonic</h4>' + mdLite(c.mnemonic); }
    if (c.visualHtml) { h += '<h4>At a glance</h4>' + c.visualHtml; }
    if (c.images && c.images.length) { h += '<h4>Image' + (c.images.length > 1 ? 's' : '') + '</h4>'; c.images.forEach(function (im) { h += imageFig(im); }); }
    if (c.source) { h += '<p class="fc-src">Source: ' + esc(c.source) + '</p>'; }
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
    if (!DECK.length) { stage.innerHTML = emptyState('No cards loaded', 'The flashcard data files did not load. Open this page over http (e.g. a local server) so the data scripts can load.'); return; }
    if (!queue.length) { renderDone(); return; }

    var card = byId[queue[0]];
    var p = parentMap[card.parentId];
    var sub = card.subarea || (p && p.card.subarea) || '';
    var html = '<article class="fc-card">';
    html += '<div class="fc-meta"><span class="fc-chip">' + esc(card.module) + '</span>' + (sub ? '<span class="fc-chip sub">' + esc(sub) + '</span>' : '') + '</div>';
    html += '<div class="fc-q">' + esc(card.front) + '</div>';

    if (!showBack) {
      html += '<div class="fc-front-cue"><kbd>Space</kbd> or tap to reveal</div>';
      html += '<button class="fc-flip-btn" id="flip-btn">Show answer</button>';
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

    var fb = document.getElementById('flip-btn');
    if (fb) fb.addEventListener('click', flip);
    var cardEl = stage.querySelector('.fc-card');
    if (!showBack && cardEl) cardEl.addEventListener('click', function (e) { if (e.target.closest('.fc-flip-btn')) return; flip(); });
    stage.querySelectorAll('.fc-grade').forEach(function (b) {
      b.addEventListener('click', function () { grade(parseInt(b.getAttribute('data-g'), 10)); });
    });
  }

  function renderCounts() {
    var c = counts();
    countsEl.innerHTML =
      '<span><span class="dot" style="background:var(--easy)"></span><b>' + c.nw + '</b> new</span>' +
      '<span><span class="dot" style="background:var(--hard)"></span><b>' + c.learn + '</b> learning</span>' +
      '<span><span class="dot" style="background:var(--good)"></span><b>' + Math.max(0, c.due - c.learn) + '</b> due</span>';
    var pct = session.total ? Math.round(session.done / session.total * 100) : 0;
    progFill.style.width = pct + '%';
    scopeLabel.textContent = (mode === 'cram')
      ? 'Cram · ' + (cramScope === 'all' ? 'all enabled modules' : (moduleMeta[cramScope] ? moduleMeta[cramScope].name : ''))
      : 'MEDI8403 · spaced recall';
    streakEl.textContent = '🔥 ' + state.streak.count + '-day streak · ' + (state.studied.day === todayNum() ? state.studied.n : 0) + ' reviewed today';
  }

  function emptyState(title, body, btnLabel, btnFn) {
    var id = 'es-btn';
    setTimeout(function () { var b = document.getElementById(id); if (b && btnFn) b.addEventListener('click', btnFn); }, 0);
    return '<div class="fc-empty"><div class="big">✓</div><h2>' + esc(title) + '</h2><p>' + esc(body) + '</p>' +
      (btnLabel ? '<button id="' + id + '">' + esc(btnLabel) + '</button>' : '') + '</div>';
  }

  function renderDone() {
    if (mode === 'cram') {
      stage.innerHTML = emptyState('Cram complete', 'You cleared every card in this set. Switch decks, cram another module, or move to scheduled review.', 'Cram all again', function () { cramScope = 'all'; buildQueue(); });
    } else {
      var c = counts();
      if (c.nw + c.due === 0) {
        stage.innerHTML = emptyState('All caught up', 'Nothing is due right now. Come back later, or hit Cram to keep drilling before the exam.', 'Cram everything', function () { setMode('cram'); cramScope = 'all'; buildQueue(); });
      } else {
        stage.innerHTML = emptyState('Session done', 'You finished this batch. ' + (c.nw + c.due) + ' more are waiting — start another round?', 'Continue', buildQueue);
      }
    }
  }

  function flip() { if (!showBack) { showBack = true; render(); } }

  // ---------- mode + decks ----------
  function setMode(m) {
    mode = m;
    document.getElementById('mode-due').classList.toggle('is-on', m === 'due');
    document.getElementById('mode-cram').classList.toggle('is-on', m === 'cram');
    document.getElementById('mode-due').setAttribute('aria-selected', m === 'due');
    document.getElementById('mode-cram').setAttribute('aria-selected', m === 'cram');
    if (m === 'cram') cramScope = 'all';
    buildQueue();
  }
  document.getElementById('mode-due').addEventListener('click', function () { setMode('due'); });
  document.getElementById('mode-cram').addEventListener('click', function () { setMode('cram'); });

  var decksModal = document.getElementById('decks-modal');
  var deckList = document.getElementById('deck-list');
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
      var m = moduleMeta[id];
      var dueN = DECK.filter(function (c) { return c.moduleId === id; }).filter(function (c) { var s = state.sched[c.id]; return !s || s.due <= t; }).length;
      return '<label class="fc-deck-row">' +
        '<input type="checkbox" data-mod="' + id + '"' + (state.enabled[id] ? ' checked' : '') + ' />' +
        '<span class="d-name">' + esc(m.name) + '</span>' +
        '<span class="d-count">' + dueN + '/' + m.count + '</span>' +
        '<button class="d-cram" data-cram="' + id + '">Cram this</button>' +
        '</label>';
    }).join('');
    deckList.querySelectorAll('input[data-mod]').forEach(function (cb) {
      cb.addEventListener('change', function () { state.enabled[cb.getAttribute('data-mod')] = cb.checked; save(); });
    });
    deckList.querySelectorAll('button[data-cram]').forEach(function (b) {
      b.addEventListener('click', function () { setMode('cram'); cramScope = b.getAttribute('data-cram'); closeDecks(); });
    });
  }

  // ---------- reset ----------
  document.getElementById('reset-btn').addEventListener('click', function () {
    if (!confirm('Reset all scheduling, streak and progress? Your decks stay selected. This cannot be undone.')) return;
    state.sched = {}; state.streak = { count: 0, last: null }; state.studied = { day: null, n: 0 };
    save(); setMode('due');
  });

  // ---------- keyboard ----------
  document.addEventListener('keydown', function (e) {
    if (!decksModal.hidden) { if (e.key === 'Escape') closeDecks(); return; }
    if (e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); flip(); }
    else if (e.key === 'ArrowLeft' || e.key === 'u' || e.key === 'U') { e.preventDefault(); undo(); }
    else if (showBack && ['1', '2', '3', '4'].indexOf(e.key) >= 0) { e.preventDefault(); grade(parseInt(e.key, 10) - 1); }
  });

  // ---------- go ----------
  buildQueue();
})();
