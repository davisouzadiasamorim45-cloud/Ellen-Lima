// Ported near-verbatim from the original site's `Component extends DCLogic`
// runtime (support.js) so every scroll/hover/tab effect keeps behaving
// exactly as it did in the static .dc.html build.
export function initPlanos(root) {
  const $ = (s, c) => Array.from((c || root).querySelectorAll(s));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cleanup = [];
  const on = (t, e, f, o) => { t.addEventListener(e, f, o); cleanup.push(() => t.removeEventListener(e, f, o)); };
  const state = {};

  const navlinks = root.querySelector("#navlinks");
  const tabRow = root.querySelector("[data-svctab]") ? root.querySelector("[data-svctab]").parentElement : null;
  const menuBtn = root.querySelector("#menuBtn");
  const ctaNav = root.querySelector("#ctaNav");
  const layout = () => {
    const w = window.innerWidth, wide = w >= 1080;
    if (navlinks) navlinks.style.display = wide ? "flex" : "none";
    if (ctaNav) ctaNav.style.display = w < 640 ? "none" : "inline-block";
    if (menuBtn) menuBtn.style.display = wide ? "none" : "flex";
    if (wide && state.closeMobileMenu) state.closeMobileMenu();
    if (tabRow) {
      Array.from(tabRow.children).forEach(k => { k.style.flex = "0 0 auto"; });
    }
  };
  layout(); on(window, "resize", layout);
  setTimeout(layout, 250);
  setTimeout(layout, 900);

  /* ---- mobile hamburger menu ---- */
  const mobileMenu = root.querySelector("#mobileMenu");
  const menuLine1 = root.querySelector("#menuLine1");
  const menuLine2 = root.querySelector("#menuLine2");
  const menuLine3 = root.querySelector("#menuLine3");
  let menuOpen = false;
  const setMenuOpen = (open) => {
    menuOpen = open;
    if (mobileMenu) { mobileMenu.style.opacity = open ? "1" : "0"; mobileMenu.style.pointerEvents = open ? "auto" : "none"; }
    if (menuBtn) menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (menuLine1) menuLine1.style.transform = open ? "translateY(7px) rotate(45deg)" : "none";
    if (menuLine2) menuLine2.style.opacity = open ? "0" : "1";
    if (menuLine3) { menuLine3.style.transform = open ? "translateY(-7px) rotate(-45deg)" : "none"; menuLine3.style.width = open ? "100%" : "65%"; }
    document.body.style.overflow = open ? "hidden" : "";
  };
  state.closeMobileMenu = () => setMenuOpen(false);
  if (menuBtn) on(menuBtn, "click", () => setMenuOpen(!menuOpen));
  $("[data-mobilenav]").forEach(a => on(a, "click", () => setMenuOpen(false)));
  cleanup.push(() => { document.body.style.overflow = ""; });

  const revealables = $("[data-reveal]");
  const showReveal = (el) => {
    if (el._shown) return; el._shown = true;
    el.style.opacity = "1"; el.style.transform = "translateY(0)";
  };
  if (!reduce) {
    revealables.forEach(el => {
      el.style.opacity = "0"; el.style.transform = "translateY(26px)";
      el.style.transition = "opacity .95s cubic-bezier(.16,1,.3,1), transform 1.05s cubic-bezier(.16,1,.3,1)";
    });
  } else revealables.forEach(showReveal);
  const inView = (el) => {
    const r = el.getBoundingClientRect();
    return r.top < (window.innerHeight || 800) * 0.94 && r.bottom > -80;
  };
  const sweep = () => revealables.forEach(el => { if (!el._shown && inView(el)) showReveal(el); });
  setTimeout(sweep, 80);
  const poll = setInterval(sweep, 220);
  cleanup.push(() => clearInterval(poll));
  on(window, "scroll", sweep, { passive: true });
  const bail = setTimeout(() => { if (!revealables.some(el => el._shown)) revealables.forEach(showReveal); }, 4000);
  cleanup.push(() => clearTimeout(bail));

  const nav = root.querySelector("#nav");
  const prog = root.querySelector("#prog");
  let ticking = false;
  const onScroll = () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY || 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (prog) prog.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
      if (nav) nav.style.backgroundColor = y > 60 ? "rgba(243,242,242,.86)" : "rgba(243,242,242,.72)";
      ticking = false;
    });
  };
  on(window, "scroll", onScroll, { passive: true });
  onScroll();

  $("[data-plan] li").forEach(li => {
    const dot = document.createElement("span");
    dot.style.cssText = "position:absolute;left:0;top:.62em;width:5px;height:1px;background:var(--color-accent)";
    li.insertBefore(dot, li.firstChild);
  });

  /* ---- side plans emerge from behind the centre card on scroll ---- */
  const fanPanels = $("[data-svcpanel]").filter(p => p.querySelectorAll("[data-plan]").length >= 2);
  const fanCards = [];
  fanPanels.forEach(p => {
    const cards = Array.from(p.querySelectorAll("[data-plan]"));
    if (cards.length < 2) return;
    const mid = cards[Math.floor((cards.length - 1) / 2)];
    const feat = cards.find(c => c.hasAttribute("data-featured"));
    const origin = (feat && Math.abs(cards.indexOf(feat) - cards.indexOf(mid)) <= 1) ? feat : mid;
    cards.forEach(c => {
      c.style.willChange = "transform, opacity";
      c.style.zIndex = c === origin ? "3" : "1";
      if (c !== origin) fanCards.push({ el: c, panel: p, centre: origin });
    });
  });
  const panelEligible = (panel) => {
    if (!panel || !panel.offsetParent) return false;
    const cards = Array.from(panel.querySelectorAll("[data-plan]"));
    if (cards.length < 2) return false;
    const t = cards[0].offsetTop;
    return cards.every(c => Math.abs(c.offsetTop - t) < 4);
  };
  const restCards = (cards) => {
    cards.forEach(c => { c.el.style.transform = ""; c.el.style.opacity = "1"; });
  };
  const measure = (c) => {
    c._dx = (c.centre.offsetLeft + c.centre.offsetWidth / 2) - (c.el.offsetLeft + c.el.offsetWidth / 2);
    c._dy = (c.centre.offsetTop + c.centre.offsetHeight / 2) - (c.el.offsetTop + c.el.offsetHeight / 2);
  };
  const layoutFan = (cards, p) => {
    const e = 1 - Math.pow(1 - p, 3);
    cards.forEach(c => {
      if (c._dx == null || (!c._dx && !c._dy)) measure(c);
      const dx = (c._dx || 0) * (1 - e), dy = (c._dy || 0) * (1 - e);
      c.el.style.transform = "translate(" + dx.toFixed(1) + "px," + dy.toFixed(1) + "px) scale(" + (0.86 + e * 0.14).toFixed(3) + ")";
      c.el.style.opacity = (0.12 + e * 0.88).toFixed(3);
    });
  };
  if (fanCards.length && !reduce) {
    fanCards.forEach(c => { c.el.style.transition = "none"; });
    const groups = new Map();
    fanCards.forEach(c => {
      if (!groups.has(c.panel)) groups.set(c.panel, []);
      groups.get(c.panel).push(c);
    });
    const updateFan = () => {
      groups.forEach((cards, panel) => {
        if (cards._replaying) return;
        if (!panelEligible(panel)) { restCards(cards); return; }
        const r = panel.getBoundingClientRect();
        const h = window.innerHeight || 800;
        const start = h * 0.92, end = h * 0.34;
        const p = Math.min(1, Math.max(0, (start - r.top) / (start - end)));
        layoutFan(cards, p);
      });
    };
    state.fanRemeasure = () => { fanCards.forEach(c => { c._dx = null; c._dy = null; }); updateFan(); };
    state.fanReplay = (panel) => {
      const cards = groups.get(panel);
      if (!cards || !cards.length || !panelEligible(panel)) return;
      cards._replaying = true;
      cards.forEach(c => { c._dx = null; c._dy = null; c.el.style.transition = "none"; });
      layoutFan(cards, 0);
      if (cards._timer) clearInterval(cards._timer);
      const t0 = Date.now(), dur = 900;
      cards._timer = setInterval(() => {
        const p = Math.min(1, (Date.now() - t0) / dur);
        layoutFan(cards, p);
        if (p >= 1) {
          clearInterval(cards._timer);
          cards._timer = null;
          cards._replaying = false;
        }
      }, 16);
      cleanup.push(() => { if (cards._timer) clearInterval(cards._timer); });
    };
    updateFan();
    const fanPoll = setInterval(updateFan, 200);
    cleanup.push(() => clearInterval(fanPoll));
    on(window, "scroll", updateFan, { passive: true });
    on(window, "resize", state.fanRemeasure);
  }

  $("[data-plan]").forEach(el => {
    const base = () => el.style.transform.replace(/translateY\([^)]*\)/, "") || "";
    on(el, "mouseenter", () => { el.style.transform = base() + " translateY(-8px)"; el.style.boxShadow = "0 12px 32px rgba(45,43,43,.14)"; });
    on(el, "mouseleave", () => { el.style.transform = base(); el.style.boxShadow = "none"; });
  });

  const tabs = $("[data-svctab]"), panels = $("[data-svcpanel]");
  const activate = (key) => {
    tabs.forEach(o => {
      const active = o.dataset.svctab === key;
      o.style.background = active ? "var(--color-text)" : "transparent";
      o.style.color = active ? "var(--color-bg)" : "var(--color-text)";
    });
    panels.forEach(p => {
      p.style.display = p.dataset.svcpanel === key ? "grid" : "none";
    });
    $("[data-svcnote]").forEach(n => {
      n.style.display = n.dataset.svcnote === key ? "block" : "none";
    });
  };
  activate("assessoria");
  tabs.forEach(t => on(t, "click", () => {
    activate(t.dataset.svctab);
    const panel = panels.find(p => p.dataset.svcpanel === t.dataset.svctab);
    if (state.fanReplay && panel) setTimeout(() => state.fanReplay(panel), 20);
    else if (state.fanRemeasure) setTimeout(state.fanRemeasure, 20);
  }));

  return () => cleanup.forEach(f => f());
}
