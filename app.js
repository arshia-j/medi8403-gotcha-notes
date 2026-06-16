/* MEDI8403 Gotcha Notes — renderer (no dependencies, file:// + http) */
(function () {
  "use strict";

  var DATA = (window.GOTCHA && window.GOTCHA.modules) || [];

  /* preferred category order; any unknown category is appended after these */
  var CAT_ORDER = ["Paediatrics", "Obstetrics", "Gynaecology", "Medicine", "Surgery"];

  var state = {
    moduleId: DATA[0] && DATA[0].id,
    sub: null,
    query: "",
    expandAll: false
  };

  var el = {
    nav:        document.getElementById("nav"),
    main:       document.getElementById("content"),
    search:     document.getElementById("search"),
    searchClear:document.getElementById("search-clear"),
    expandAll:  document.getElementById("expand-all"),
    themeToggle:document.getElementById("theme-toggle"),
    navToggle:  document.getElementById("nav-toggle"),
    scrim:      document.getElementById("scrim")
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

    return '<article class="card' + (tc ? " tc" : "") + open + '">' +
      '<button type="button" class="card-head" aria-expanded="' + (state.expandAll ? "true" : "false") +
        '" aria-controls="' + bodyId + '">' +
        chevron +
        '<span class="ch-title">' + esc(title) + '</span>' + hook +
        '<span class="ch-flags">' + imgDot +
          (tc ? '<span class="ch-tc" title="time-critical"></span>' : "") + (ver || "") +
        '</span>' +
      '</button>' +
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

  /* ---------------- go ---------------- */
  render();
})();
