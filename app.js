/* MEDI8403 Gotcha Notes — renderer (no dependencies, file:// + http) */
(function () {
  "use strict";

  var DATA = (window.GOTCHA && window.GOTCHA.modules) || [];

  /* preferred category order; any unknown category is appended after these */
  var CAT_ORDER = ["Paediatrics", "Obstetrics", "Gynaecology", "Medicine", "Surgery"];

  var SEL_KEY = "medi8403_revision_set";
  function loadSel() { try { return JSON.parse(localStorage.getItem(SEL_KEY)) || []; } catch (e) { return []; } }

  var state = {
    moduleId: DATA[0] && DATA[0].id,
    sub: null,
    query: "",
    expandAll: false,
    selected: loadSel()        /* ordered array of card ids in the revision set */
  };

  /* id -> { card, module, subarea } across all modules (for lookup + combining) */
  var INDEX = {};
  DATA.forEach(function (m) {
    (m.cards || []).forEach(function (c) { if (c.id) INDEX[c.id] = { card: c, module: m.name, subarea: c.subarea || "" }; });
  });
  function isSel(id) { return state.selected.indexOf(id) >= 0; }

  var el = {
    nav:        document.getElementById("nav"),
    main:       document.getElementById("content"),
    search:     document.getElementById("search"),
    searchClear:document.getElementById("search-clear"),
    expandAll:  document.getElementById("expand-all"),
    themeToggle:document.getElementById("theme-toggle"),
    navToggle:  document.getElementById("nav-toggle"),
    scrim:      document.getElementById("scrim"),
    reviseBtn:  document.getElementById("revise-btn"),
    reviseCount:document.getElementById("revise-count"),
    reviseModal:document.getElementById("revise-modal"),
    reviseClose:document.getElementById("revise-close"),
    reviseList: document.getElementById("revise-list"),
    reviseText: document.getElementById("revise-text"),
    reviseN:    document.getElementById("revise-n"),
    reviseEmpty:document.getElementById("revise-empty"),
    reviseCopy: document.getElementById("revise-copy"),
    reviseCopyClaude: document.getElementById("revise-copy-claude"),
    reviseClear:document.getElementById("revise-clear")
  };

  /* ---------------- helpers ---------------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function moduleById(id) {
    for (var i = 0; i < DATA.length; i++) if (DATA[i].id === id) return DATA[i];
    return null;
  }
  function isTC(card) {
    var t = (card.tags || []).join(" ").toLowerCase();
    return /time.?critical|emergency|urgent|do not delay|do-not-miss|straight to theatre|peri.?arrest/.test(t);
  }
  function cardText(c) {
    return [
      c.title, c.subtitle, c.topic, c.subarea, c.trap, c.whatFirst, c.discriminator,
      c.redFlags, c.mcqTrap, c.viva, c.mnemonic, c.source,
      (c.cutoffs || []).join(" "), (c.tags || []).join(" ")
    ].join(" ").toLowerCase();
  }

  /* ---------------- sidebar (data-driven, grouped by category) ---------------- */
  function renderNav() {
    /* group modules by category, preserving first-appearance order within a group */
    var groups = {};      /* category -> [modules] */
    var seen = [];        /* category appearance order */
    DATA.forEach(function (m) {
      var cat = m.category || "Other";
      if (!groups[cat]) { groups[cat] = []; seen.push(cat); }
      groups[cat].push(m);
    });

    /* ordered category list: preferred order first, then any extras */
    var cats = [];
    CAT_ORDER.forEach(function (c) { if (groups[c]) cats.push(c); });
    seen.forEach(function (c) { if (cats.indexOf(c) < 0) cats.push(c); });

    var html = "";
    cats.forEach(function (cat) {
      html += '<div class="nav-group"><h3>' + esc(cat) + '</h3>';
      groups[cat].forEach(function (m) {
        var active = (m.id === state.moduleId && !state.query) ? " active" : "";
        var n = m.cards ? m.cards.length : 0;
        html += '<button type="button" class="mod-link' + active + '" data-mod="' + esc(m.id) + '">' +
          '<span>' + esc(m.name) + '</span><span class="count">' + n + '</span></button>';
      });
      html += '</div>';
    });

    html += '<div class="nav-about">High-yield gotcha notes — the cut-offs, discriminators and traps that catch you. ' +
      'Not teaching notes. Verified against current Australian guidelines.</div>';

    el.nav.innerHTML = html;

    Array.prototype.forEach.call(el.nav.querySelectorAll(".mod-link"), function (btn) {
      btn.addEventListener("click", function () {
        state.moduleId = btn.getAttribute("data-mod");
        state.sub = null; state.query = "";
        el.search.value = "";
        toggleClear();
        closeNav();
        render();
        el.main.focus && el.main.focus();
        window.scrollTo(0, 0);
      });
    });
  }

  /* ---------------- a single card ---------------- */
  function fieldHTML(lbl, val, cls) {
    if (!val) return "";
    return '<div class="field ' + (cls || "") + '"><div class="lbl">' + esc(lbl) +
      '</div><div class="val">' + val + '</div></div>';
  }
  function listHTML(arr) {
    if (!arr || !arr.length) return "";
    return "<ul>" + arr.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
  }
  /* lightweight markdown: **bold** + nested "- " dot-points. Plain prose (no markers) -> paragraph. */
  function mdInline(s) {
    return esc(s).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }
  function mdBlock(s) {
    if (s == null) return "";
    s = String(s).trim();
    if (!s) return "";
    var lines = s.split(/\r?\n/).filter(function (l) { return l.trim() !== ""; });
    var anyBullet = lines.some(function (l) { return /^\s*[-*•]\s+/.test(l); });
    if (!anyBullet) return "<p>" + mdInline(s) + "</p>";
    var i = 0;
    function parseList(minIndent) {
      var html = "<ul>";
      while (i < lines.length) {
        var m = lines[i].match(/^(\s*)[-*•]\s+(.*)$/);
        if (!m || m[1].length < minIndent) break;
        html += "<li>" + mdInline(m[2].trim());
        i++;
        var nm = i < lines.length ? lines[i].match(/^(\s*)[-*•]\s+/) : null;
        if (nm && nm[1].length > minIndent) html += parseList(nm[1].length);
        html += "</li>";
      }
      return html + "</ul>";
    }
    var out = "";
    while (i < lines.length) {
      if (/^\s*[-*•]\s+/.test(lines[i])) out += parseList(lines[i].match(/^(\s*)/)[1].length);
      else { out += "<p>" + mdInline(lines[i].trim()) + "</p>"; i++; }
    }
    return out;
  }
  function listHTMLmd(arr) {
    if (!arr || !arr.length) return "";
    return "<ul>" + arr.map(function (x) { return "<li>" + mdInline(x) + "</li>"; }).join("") + "</ul>";
  }

  function cardHTML(c, idx) {
    var tc = isTC(c);

    /* badges */
    var ver = "";
    if (c.verified === true) ver = '<span class="verified" title="Verified against current Australian guidelines">✓</span>';
    else if (c.verified === false) ver = '<span class="verified no" title="Check the cited source">⚠</span>';

    /* tags */
    var tags = "";
    if (tc) tags += '<span class="tag tc">time-critical</span>';
    if (c.cutoffs && c.cutoffs.length) tags += '<span class="tag cut">cut-offs</span>';
    (c.tags || []).forEach(function (t) {
      if (/time.?critical|cut.?off|do-not-miss|emergency/i.test(t)) return;
      tags += '<span class="tag">' + esc(t) + '</span>';
    });

    /* images: support c.images[] (gallery, each {src,alt,caption,credit}) and legacy single c.image */
    var imgs = [];
    if (c.images && c.images.length) imgs = c.images;
    else if (c.image && c.image.src) imgs = [c.image];
    imgs = imgs.filter(function (im) { return im && im.src; });
    var gallery = "";
    if (imgs.length) {
      gallery = '<div class="card-gallery' + (imgs.length > 1 ? " multi" : "") + '">' + imgs.map(function (im) {
        return '<figure class="card-img"><img src="' + esc(im.src) + '" alt="' + esc(im.alt || "") + '" loading="lazy" ' +
          'onerror="this.closest(&quot;.card-img&quot;).remove()" />' +
          ((im.caption || im.credit)
            ? '<figcaption>' + (im.caption ? '<b>' + esc(im.caption) + '</b> ' : "") + esc(im.credit || "") + '</figcaption>'
            : "") + '</figure>';
      }).join("") + '</div>';
    }

    /* body */
    var body = "";
    if (tags) body += '<div class="tags">' + tags + '</div>';
    body += gallery;
    body += fieldHTML("The trap", mdBlock(c.trap), "trap");
    if (c.cutoffs && c.cutoffs.length) body += fieldHTML("Cut-offs / thresholds", listHTMLmd(c.cutoffs));
    body += fieldHTML("What first / sequence", mdBlock(c.whatFirst));
    body += fieldHTML("Discriminator", mdBlock(c.discriminator));
    body += fieldHTML("Red flags / escalation", mdBlock(c.redFlags));
    body += fieldHTML("MCQ trap", mdBlock(c.mcqTrap));
    if (c.visualHtml) body += '<div class="gv">' + c.visualHtml + '</div>';
    if (c.viva) body += '<div class="viva"><div class="lbl">VIVA angle</div><div class="val">' + mdBlock(c.viva) + '</div></div>';
    if (c.mnemonic) body += '<div class="mnemonic"><div class="lbl">Mnemonic</div><div class="val">' + mdInline(c.mnemonic) + '</div></div>';
    if (c.source) body += '<div class="source"><b>Source:</b> ' + esc(c.source) + '</div>';

    var title = c.title || c.topic || "Untitled";
    var hook = c.subtitle ? '<span class="ch-hook">' + esc(c.subtitle) + '</span>' : '';
    var imgIcon = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.4"></circle>' +
      '<path d="M21 15l-5-5L4 21"></path></svg>';
    var imgDot = imgs.length ? '<span class="ch-img" title="' + imgs.length + ' image' + (imgs.length > 1 ? "s" : "") + '">' +
      (imgs.length > 1 ? imgs.length : "") + imgIcon + '</span>' : '';
    var bodyId = "cb-" + (c.id ? esc(c.id) : "i" + idx);
    var open = state.expandAll ? " open" : "";

    var chevron = '<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<polyline points="6 9 12 15 18 9"></polyline></svg>';

    var selCls = (c.id && isSel(c.id)) ? " selected" : "";
    var selBox = c.id
      ? '<label class="card-select" title="Add to revision set" onclick="event.stopPropagation()">' +
          '<input type="checkbox" class="sel-box" data-id="' + esc(c.id) + '"' + (isSel(c.id) ? " checked" : "") +
          ' aria-label="Add to revision set" /></label>'
      : "";

    return '<article class="card' + (tc ? " tc" : "") + open + selCls + '">' +
      '<button type="button" class="card-head" aria-expanded="' + (state.expandAll ? "true" : "false") +
        '" aria-controls="' + bodyId + '">' +
        chevron +
        '<span class="ch-title">' + esc(title) + '</span>' + hook +
        '<span class="ch-flags">' + imgDot +
          (tc ? '<span class="ch-tc" title="time-critical"></span>' : "") + (ver || "") +
        '</span>' +
      '</button>' + selBox +
      '<div class="card-body-outer" id="' + bodyId + '"><div class="card-body-inner">' +
        '<div class="card-body">' + body + '</div>' +
      '</div></div>' +
    '</article>';
  }

  /* ---------------- main render ---------------- */
  function render() {
    renderNav();

    var cards, headHTML;

    if (state.query) {
      var q = state.query.toLowerCase();
      cards = [];
      DATA.forEach(function (m) {
        (m.cards || []).forEach(function (c) {
          if (cardText(c).indexOf(q) >= 0) cards.push(c);
        });
      });
      headHTML = '<div class="mod-head"><div class="kicker">Search results</div>' +
        '<h1>“' + esc(state.query) + '”</h1>' +
        '<div class="countline">' + cards.length + ' card' + (cards.length === 1 ? "" : "s") +
        ' matching across all modules</div></div>';
      el.main.innerHTML = headHTML + buildFlatGrid(cards);
    } else {
      var m = moduleById(state.moduleId);
      if (!m) {
        el.main.innerHTML = '<div class="empty"><div class="big">Pick a module</div></div>';
        wireCards();
        return;
      }

      /* distinct sub-areas in first-appearance order */
      var subOrder = [], subCount = {};
      (m.cards || []).forEach(function (c) {
        if (!c.subarea) return;
        if (subCount[c.subarea] == null) { subCount[c.subarea] = 0; subOrder.push(c.subarea); }
        subCount[c.subarea]++;
      });

      var total = m.cards ? m.cards.length : 0;
      var chips = '<button type="button" class="chip' + (state.sub ? "" : " active") +
        '" data-sub="">All <span class="n">· ' + total + '</span></button>';
      subOrder.forEach(function (s) {
        chips += '<button type="button" class="chip' + (state.sub === s ? " active" : "") +
          '" data-sub="' + esc(s) + '">' + esc(s) + ' <span class="n">· ' + subCount[s] + '</span></button>';
      });

      var shown = (m.cards || []).filter(function (c) { return !state.sub || c.subarea === state.sub; });

      headHTML = '<div class="mod-head"><div class="kicker">' + esc(m.category || "") + '</div>' +
        '<h1>' + esc(m.name) + '</h1>' +
        (m.blurb ? '<div class="sub">' + esc(m.blurb) + '</div>' : '') +
        '<div class="countline">' + shown.length +
          (state.sub ? ' card' + (shown.length === 1 ? "" : "s") + ' in this sub-area' : ' card' + (shown.length === 1 ? "" : "s")) +
        '</div></div>' +
        (subOrder.length ? '<div class="subfilter">' + chips + '</div>' : '');

      el.main.innerHTML = headHTML + buildGroupedGrid(shown, subOrder, state.sub);
    }

    wireFilters();
    wireCards();
  }

  /* flat grid (search view) */
  function buildFlatGrid(cards) {
    if (!cards.length) return emptyState();
    var html = '<div class="cards">';
    cards.forEach(function (c, i) { html += cardHTML(c, i); });
    return html + '</div>';
  }

  /* grid grouped + headed by sub-area, unless a single sub-area is filtered */
  function buildGroupedGrid(cards, subOrder, activeSub) {
    if (!cards.length) return emptyState();

    /* no sub-areas at all, or one is selected -> flat list (no section headers) */
    if (!subOrder.length || activeSub) {
      return '<div class="cards">' + cards.map(function (c, i) { return cardHTML(c, i); }).join("") + '</div>';
    }

    var idx = 0, html = "";
    var saChevron = '<svg class="sa-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<polyline points="6 9 12 15 18 9"></polyline></svg>';
    function section(name, list) {
      var inner = '<div class="cards">';
      list.forEach(function (c) { inner += cardHTML(c, idx++); });
      inner += '</div>';
      return '<section class="sub-group">' +
        '<button type="button" class="subarea-head" aria-expanded="true">' + saChevron +
          '<span class="sa-name">' + esc(name) + '</span><span class="n">' + list.length + '</span></button>' +
        '<div class="sub-cards">' + inner + '</div></section>';
    }
    subOrder.forEach(function (s) {
      var inGroup = cards.filter(function (c) { return c.subarea === s; });
      if (inGroup.length) html += section(s, inGroup);
    });
    var noSub = cards.filter(function (c) { return !c.subarea; });
    if (noSub.length) html += section("Other", noSub);
    return html;
  }

  function emptyState() {
    return '<div class="empty"><div class="big">No matches</div>' +
      '<div>Nothing matches that search or filter — try clearing it.</div></div>';
  }

  /* ---------------- wiring ---------------- */
  function wireFilters() {
    Array.prototype.forEach.call(el.main.querySelectorAll(".subfilter .chip"), function (ch) {
      ch.addEventListener("click", function () {
        state.sub = ch.getAttribute("data-sub") || null;
        render();
      });
    });
  }

  function wireCards() {
    Array.prototype.forEach.call(el.main.querySelectorAll(".card-head"), function (head) {
      head.addEventListener("click", function () {
        var card = head.parentNode;
        var nowOpen = card.classList.toggle("open");
        head.setAttribute("aria-expanded", nowOpen ? "true" : "false");
      });
    });
  }

  /* expand / collapse all (operates on whatever is currently rendered) */
  function applyExpandAll(open) {
    state.expandAll = open;
    el.expandAll.setAttribute("aria-pressed", open ? "true" : "false");
    el.expandAll.textContent = open ? "Collapse all" : "Expand all";
    Array.prototype.forEach.call(el.main.querySelectorAll(".card"), function (card) {
      card.classList.toggle("open", open);
      var head = card.querySelector(".card-head");
      if (head) head.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------------- top-bar events ---------------- */
  function toggleClear() {
    el.searchClear.hidden = !el.search.value;
  }

  el.search.addEventListener("input", function () {
    state.query = el.search.value.trim();
    toggleClear();
    render();
  });
  el.searchClear.addEventListener("click", function () {
    el.search.value = ""; state.query = ""; toggleClear();
    el.search.focus();
    render();
  });

  el.expandAll.addEventListener("click", function () {
    applyExpandAll(!state.expandAll);
  });

  /* theme toggle with persistence */
  function applyTheme(t) {
    if (t === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    el.themeToggle.querySelector(".theme-icon").textContent = t === "dark" ? "☾" : "◐";
  }
  function loadTheme() {
    var saved = null;
    try { saved = localStorage.getItem("gotcha-theme"); } catch (e) {}
    if (saved === "dark" || saved === "light") return saved;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    return "light";
  }
  var theme = loadTheme();
  applyTheme(theme);
  el.themeToggle.addEventListener("click", function () {
    theme = (theme === "dark") ? "light" : "dark";
    applyTheme(theme);
    try { localStorage.setItem("gotcha-theme", theme); } catch (e) {}
  });

  /* mobile drawer nav */
  function openNav() {
    document.body.classList.add("nav-open");
    el.navToggle.setAttribute("aria-expanded", "true");
    el.scrim.hidden = false;
  }
  function closeNav() {
    document.body.classList.remove("nav-open");
    el.navToggle.setAttribute("aria-expanded", "false");
    el.scrim.hidden = true;
  }
  el.navToggle.addEventListener("click", function () {
    if (document.body.classList.contains("nav-open")) closeNav(); else openNav();
  });
  el.scrim.addEventListener("click", closeNav);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  /* keyboard shortcut: "/" focuses search */
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== el.search) {
      e.preventDefault();
      el.search.focus();
    }
  });

  /* ---------------- image lightbox (click any card image to enlarge) ---------------- */
  function lightbox() {
    var lb = document.getElementById("lightbox");
    if (!lb) {
      lb = document.createElement("div");
      lb.id = "lightbox"; lb.className = "lightbox"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true");
      lb.innerHTML = '<figure><img alt="" /><figcaption></figcaption></figure><button class="lb-close" type="button" aria-label="Close image">×</button>';
      lb.addEventListener("click", function () { lb.classList.remove("open"); });
      document.body.appendChild(lb);
    }
    return lb;
  }
  document.addEventListener("click", function (e) {
    var img = e.target.closest ? e.target.closest(".card-img img") : null;
    if (!img) return;
    var lb = lightbox();
    var fig = img.closest("figure");
    var cap = fig ? fig.querySelector("figcaption") : null;
    lb.querySelector("img").src = img.getAttribute("src");
    lb.querySelector("img").alt = img.getAttribute("alt") || "";
    lb.querySelector("figcaption").innerHTML = cap ? cap.innerHTML : "";
    lb.classList.add("open");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { var lb = document.getElementById("lightbox"); if (lb) lb.classList.remove("open"); }
  });

  /* ---------------- collapsible sub-area sections ---------------- */
  document.addEventListener("click", function (e) {
    var h = e.target.closest ? e.target.closest(".subarea-head") : null;
    if (!h) return;
    var grp = h.closest(".sub-group");
    if (!grp) return;
    var collapsed = grp.classList.toggle("collapsed");
    h.setAttribute("aria-expanded", collapsed ? "false" : "true");
  });

  /* ---------------- revision set (select cards -> combine -> copy) ---------------- */
  function saveSel() { try { localStorage.setItem(SEL_KEY, JSON.stringify(state.selected)); } catch (e) {} }
  function updateReviseCount() {
    el.reviseCount.textContent = state.selected.length;
    el.reviseBtn.classList.toggle("has", state.selected.length > 0);
  }
  function cardMd(c, info) {
    var L = [], title = c.title || c.topic || "Untitled";
    L.push("## " + title + (c.subtitle ? " — " + c.subtitle : ""));
    if (info) L.push("_" + info.module + (info.subarea ? " › " + info.subarea : "") + "_");
    L.push("");
    function field(label, val) { if (val && String(val).trim()) { L.push("**" + label + "**", String(val).trim(), ""); } }
    field("The trap", c.trap);
    if (c.cutoffs && c.cutoffs.length) { L.push("**Cut-offs / thresholds**"); c.cutoffs.forEach(function (x) { L.push("- " + x); }); L.push(""); }
    field("What first / sequence", c.whatFirst);
    field("Discriminator", c.discriminator);
    field("Red flags / escalation", c.redFlags);
    field("MCQ trap", c.mcqTrap);
    field("VIVA angle", c.viva);
    field("Mnemonic", c.mnemonic);
    if (c.source) L.push("_Source: " + c.source + "_");
    return L.join("\n");
  }
  function buildNotesMd() {
    var cards = state.selected.map(function (id) { return INDEX[id]; }).filter(Boolean);
    return "# MEDI8403 revision set (" + cards.length + " card" + (cards.length === 1 ? "" : "s") + ")\n\n" +
      cards.map(function (info) { return cardMd(info.card, info); }).join("\n\n---\n\n");
  }
  function claudeWrap(t) {
    var n = state.selected.length;
    return "Here are " + n + " MEDI8403 revision card" + (n === 1 ? "" : "s") + " I'm working through. " +
      "Please help me with these — quiz me on them, expand anything I'm shaky on, or tighten the key cut-offs:\n\n" + t;
  }
  function renderTray() {
    var cards = state.selected.map(function (id) { return INDEX[id]; }).filter(Boolean);
    el.reviseN.textContent = cards.length;
    el.reviseEmpty.hidden = cards.length > 0;
    el.reviseList.innerHTML = cards.map(function (info) {
      var c = info.card;
      return '<div class="revise-item"><span>' + esc(c.title || c.topic || "") +
        ' <em>' + esc(info.module) + '</em></span>' +
        '<button class="revise-rm" type="button" data-id="' + esc(c.id) + '" aria-label="Remove">×</button></div>';
    }).join("");
    el.reviseText.value = cards.length ? buildNotesMd() : "";
  }
  function toggleSelect(id, on) {
    var i = state.selected.indexOf(id);
    if (on && i < 0) state.selected.push(id);
    else if (!on && i >= 0) state.selected.splice(i, 1);
    saveSel(); updateReviseCount();
    var box = el.main.querySelector('.sel-box[data-id="' + id + '"]');
    if (box) { box.checked = on; var cd = box.closest(".card"); if (cd) cd.classList.toggle("selected", on); }
    if (!el.reviseModal.hidden) renderTray();
  }
  function copyText(t, btn) {
    function done() { var o = btn.textContent; btn.textContent = "Copied ✓"; setTimeout(function () { btn.textContent = o; }, 1400); }
    function fb() { el.reviseText.value = t; el.reviseText.focus(); el.reviseText.select(); try { document.execCommand("copy"); } catch (e) {} }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, function () { fb(); done(); });
    else { fb(); done(); }
  }
  document.addEventListener("change", function (e) {
    var b = e.target.closest ? e.target.closest(".sel-box") : null;
    if (b) toggleSelect(b.getAttribute("data-id"), b.checked);
  });
  el.reviseBtn.addEventListener("click", function () { renderTray(); el.reviseModal.hidden = false; });
  el.reviseClose.addEventListener("click", function () { el.reviseModal.hidden = true; });
  el.reviseModal.addEventListener("click", function (e) { if (e.target === el.reviseModal) el.reviseModal.hidden = true; });
  el.reviseList.addEventListener("click", function (e) {
    var rm = e.target.closest ? e.target.closest(".revise-rm") : null;
    if (rm) toggleSelect(rm.getAttribute("data-id"), false);
  });
  el.reviseCopy.addEventListener("click", function () { copyText(el.reviseText.value || buildNotesMd(), el.reviseCopy); });
  el.reviseCopyClaude.addEventListener("click", function () { copyText(claudeWrap(el.reviseText.value || buildNotesMd()), el.reviseCopyClaude); });
  el.reviseClear.addEventListener("click", function () {
    state.selected = []; saveSel(); updateReviseCount(); renderTray();
    Array.prototype.forEach.call(el.main.querySelectorAll(".card.selected"), function (c) { c.classList.remove("selected"); });
    Array.prototype.forEach.call(el.main.querySelectorAll(".sel-box:checked"), function (b) { b.checked = false; });
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !el.reviseModal.hidden) el.reviseModal.hidden = true; });
  updateReviseCount();

  /* ---------------- AI quiz generator (live, bring-your-own Anthropic key) ---------------- */
  (function () {
    var Q = {
      btn: document.getElementById("quiz-btn"), modal: document.getElementById("quiz-modal"),
      close: document.getElementById("quiz-close"), setup: document.getElementById("quiz-setup"),
      scope: document.getElementById("quiz-scope"), count: document.getElementById("quiz-count"),
      diff: document.getElementById("quiz-diff"), model: document.getElementById("quiz-model"),
      key: document.getElementById("quiz-key"), gen: document.getElementById("quiz-generate"),
      msg: document.getElementById("quiz-msg"), run: document.getElementById("quiz-run"), sub: document.getElementById("quiz-sub")
    };
    if (!Q.btn) return;
    var KEY_LS = "medi8403_anthropic_key", CFG_LS = "medi8403_quiz_cfg";
    function setMsg(t, err) { Q.msg.textContent = t || ""; Q.msg.className = "quiz-msg" + (err ? " err" : ""); }

    function buildScope() {
      var html = "";
      if (state.selected.length) {
        html += '<label class="scope-row scope-revset"><input type="checkbox" id="scope-revset" checked> ' +
          '<span>My revision set <em>(' + state.selected.length + ')</em></span></label>';
      }
      var groups = {}, order = [];
      DATA.forEach(function (m) { var c = m.category || "Other"; if (!groups[c]) { groups[c] = []; order.push(c); } groups[c].push(m); });
      var cats = []; CAT_ORDER.forEach(function (c) { if (groups[c]) cats.push(c); }); order.forEach(function (c) { if (cats.indexOf(c) < 0) cats.push(c); });
      cats.forEach(function (cat) {
        html += '<div class="scope-cat">' + esc(cat) + '</div>';
        groups[cat].forEach(function (m) {
          html += '<label class="scope-row"><input type="checkbox" class="scope-mod" value="' + esc(m.id) + '"> ' +
            '<span>' + esc(m.name) + ' <em>(' + (m.cards ? m.cards.length : 0) + ')</em></span></label>';
        });
      });
      Q.scope.innerHTML = html;
      if (!state.selected.length) { var cur = Q.scope.querySelector('.scope-mod[value="' + state.moduleId + '"]'); if (cur) cur.checked = true; }
    }
    function scopeCards() {
      var cards = [], seen = {};
      function add(c) { if (c && c.id && !seen[c.id]) { seen[c.id] = 1; cards.push(c); } }
      var rev = Q.scope.querySelector("#scope-revset");
      if (rev && rev.checked) state.selected.forEach(function (id) { if (INDEX[id]) add(INDEX[id].card); });
      Array.prototype.forEach.call(Q.scope.querySelectorAll(".scope-mod:checked"), function (b) {
        var m = moduleById(b.value); if (m) (m.cards || []).forEach(add);
      });
      return cards;
    }
    function strip(s) { if (Array.isArray(s)) s = s.join("; "); return String(s || "").replace(/\*\*/g, "").replace(/\n\s*-\s+/g, "; ").replace(/\s+/g, " ").trim(); }
    function condense(c) {
      var p = "- " + (c.title || c.topic || "");
      if (c.subtitle) p += " — " + c.subtitle;
      if (c.trap) p += " | Trap: " + strip(c.trap).slice(0, 220);
      if (c.cutoffs && c.cutoffs.length) p += " | Cut-offs: " + strip(c.cutoffs).slice(0, 240);
      if (c.discriminator) p += " | Discriminator: " + strip(c.discriminator).slice(0, 170);
      if (c.whatFirst) p += " | First step: " + strip(c.whatFirst).slice(0, 150);
      if (c.redFlags) p += " | Red flags: " + strip(c.redFlags).slice(0, 150);
      if (c.mcqTrap) p += " | Classic MCQ trap: " + strip(c.mcqTrap).slice(0, 200);
      return p;
    }
    function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

    function runQuiz(questions) {
      Q.setup.hidden = true; Q.run.hidden = false;
      var score = 0, answered = 0, total = questions.length;
      var html = '<div class="quiz-scoreline" id="quiz-scoreline">Tap an option to answer — score appears here.</div>';
      questions.forEach(function (q, i) {
        var ans = Math.max(0, Math.min((q.options || []).length - 1, q.answer || 0));
        var opts = (q.options || []).map(function (o, j) {
          return '<button type="button" class="quiz-opt" data-o="' + j + '"><b>' + String.fromCharCode(65 + j) + '</b> ' + esc(o) + '</button>';
        }).join("");
        html += '<div class="quiz-q" data-ans="' + ans + '" data-done="0">' +
          '<div class="quiz-stem"><span class="quiz-num">Q' + (i + 1) + '</span> ' + esc(q.stem) + '</div>' +
          '<div class="quiz-opts">' + opts + '</div>' +
          '<div class="quiz-rat" hidden><b>Answer ' + String.fromCharCode(65 + ans) + '.</b> ' + esc(q.rationale || "") + '</div></div>';
      });
      html += '<div class="quiz-run-actions"><button id="quiz-new" type="button" class="ghost">New quiz</button></div>';
      Q.run.innerHTML = html;
      function score_() { document.getElementById("quiz-scoreline").textContent = "Score: " + score + " / " + answered + " answered  ·  " + total + " total"; }
      Array.prototype.forEach.call(Q.run.querySelectorAll(".quiz-opt"), function (btn) {
        btn.addEventListener("click", function () {
          var qd = btn.parentNode.parentNode;
          if (qd.getAttribute("data-done") === "1") return;
          qd.setAttribute("data-done", "1");
          var ans = parseInt(qd.getAttribute("data-ans"), 10), chosen = parseInt(btn.getAttribute("data-o"), 10);
          Array.prototype.forEach.call(qd.querySelectorAll(".quiz-opt"), function (b, j) {
            b.disabled = true; if (j === ans) b.classList.add("correct"); if (j === chosen && chosen !== ans) b.classList.add("wrong");
          });
          qd.querySelector(".quiz-rat").hidden = false;
          answered++; if (chosen === ans) score++; score_();
        });
      });
      document.getElementById("quiz-new").addEventListener("click", function () { Q.run.hidden = true; Q.setup.hidden = false; });
    }

    function generate() {
      var cards = scopeCards();
      if (!cards.length) { setMsg("Pick at least one module (or your revision set).", true); return; }
      var key = Q.key.value.trim();
      if (!key) { setMsg("Enter your Anthropic API key.", true); return; }
      var n = parseInt(Q.count.value, 10) || 10, diff = Q.diff.value, model = Q.model.value;
      try { localStorage.setItem(KEY_LS, key); localStorage.setItem(CFG_LS, JSON.stringify({ n: Q.count.value, diff: diff, model: model })); } catch (e) {}
      var ground = cards.slice(); if (ground.length > 55) ground = shuffle(ground).slice(0, 55);
      var grounding = ground.map(condense).join("\n");
      var sys = "You are a MEDI8403 examiner (Macquarie University MD, Australian final-year, early-intern level). Write single-best-answer MCQs using CURRENT AUSTRALIAN guidelines and conventions. Test discriminators, exact cut-offs and what-first/sequence decisions — never bare recall, and never name the diagnosis in the stem. Each item: a short clinical vignette stem; exactly 5 plausible, similar-length options; one best answer; a one-sentence rationale naming the key cut-off/discriminator. Base every question ONLY on the provided notes.";
      var user = "Write " + n + " " + (diff === "hard" ? "hard " : "") + "single-best-answer MCQs grounded ONLY in these MEDI8403 gotcha notes:\n\n" + grounding;
      Q.gen.disabled = true; setMsg("Generating " + n + " questions with " + model + "… a few seconds.");
      fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" },
        body: JSON.stringify({
          model: model, max_tokens: 8192, system: sys, messages: [{ role: "user", content: user }],
          tool_choice: { type: "tool", name: "make_quiz" },
          tools: [{ name: "make_quiz", description: "Return the generated MCQs.", input_schema: {
            type: "object", required: ["questions"], properties: { questions: { type: "array", items: {
              type: "object", required: ["stem", "options", "answer", "rationale"], properties: {
                stem: { type: "string" }, options: { type: "array", items: { type: "string" } },
                answer: { type: "integer", description: "0-based index (0-4) of the single best option" },
                rationale: { type: "string" } } } } } } }]
        })
      }).then(function (res) {
        return res.text().then(function (tx) { if (!res.ok) throw new Error("HTTP " + res.status + " — " + tx.slice(0, 260)); return JSON.parse(tx); });
      }).then(function (data) {
        var tu = (data.content || []).filter(function (b) { return b.type === "tool_use"; })[0];
        if (!tu || !tu.input || !tu.input.questions || !tu.input.questions.length) throw new Error("No questions returned — try again.");
        setMsg(""); runQuiz(tu.input.questions);
      }).catch(function (e) {
        var m = String(e && e.message || e);
        if (/Failed to fetch|NetworkError|CORS/i.test(m)) m = "Network/CORS error — check your key and connection. " + m;
        setMsg(m, true);
      }).then(function () { Q.gen.disabled = false; });
    }

    Q.btn.addEventListener("click", function () {
      buildScope();
      try { var cfg = JSON.parse(localStorage.getItem(CFG_LS) || "{}"); if (cfg.n) Q.count.value = cfg.n; if (cfg.diff) Q.diff.value = cfg.diff; if (cfg.model) Q.model.value = cfg.model; } catch (e) {}
      try { Q.key.value = localStorage.getItem(KEY_LS) || ""; } catch (e) {}
      Q.run.hidden = true; Q.setup.hidden = false; setMsg(""); Q.modal.hidden = false;
    });
    Q.close.addEventListener("click", function () { Q.modal.hidden = true; });
    Q.modal.addEventListener("click", function (e) { if (e.target === Q.modal) Q.modal.hidden = true; });
    Q.gen.addEventListener("click", generate);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !Q.modal.hidden) Q.modal.hidden = true; });
  })();

  /* ---------------- go ---------------- */
  render();
})();
