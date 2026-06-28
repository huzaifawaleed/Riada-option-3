/* ============================================================
   RIADA — Option 03 · main.js
   Orchestrates the "slow luxury" motion: Lenis smooth-scroll,
   GSAP reveals, line-by-line manifesto, the method draw-timeline,
   the figures count-up, nav state, and the
   dynamic-imported Three.js hero. Everything degrades gracefully:
   no JS / failed CDN / reduced-motion all leave content visible.
   ============================================================ */

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mark JS as active so CSS can hide [data-reveal] before animating.
root.classList.add('has-js');
if (reduceMotion) root.classList.add('reduced-motion');

// Token-aligned motion constants (mirror the CSS motion tokens).
const EASE = 'power2.out';
const DUR = { reveal: 1.1, line: 0.9, slow: 1.3 };

// ---- tiny always-on bits (run regardless of GSAP availability) ----
const yearEl = document.querySelector('[data-year]');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

initNav();
initMobileOverlay();

// ---- everything motion-related, behind a safe loader ----
boot();

async function boot() {
  // Reduced motion: reveal everything instantly, init non-motion interactions, stop.
  if (reduceMotion) {
    revealAllInstant();
    setFiguresFinal();
    await initPractice();
    await initForm();
    return;
  }

  let gsap, ScrollTrigger;
  try {
    gsap = (await import('https://esm.sh/gsap@3.12.5')).default;
    ScrollTrigger = (await import('https://esm.sh/gsap@3.12.5/ScrollTrigger')).default;
    gsap.registerPlugin(ScrollTrigger);
  } catch (err) {
    // CDN unavailable — fail open: show all content, keep interactions.
    // Smooth scroll still runs (Lenis drives its own RAF without GSAP).
    console.warn('[RIADA] GSAP failed to load; revealing content statically.', err);
    revealAllInstant();
    setFiguresFinal();
    await initLenis(null, null);
    await initPractice();
    await initForm();
    return;
  }

  await initLenis(gsap, ScrollTrigger);
  initReveals(gsap, ScrollTrigger);
  initLineReveal(gsap, ScrollTrigger);
  initTimeline(gsap, ScrollTrigger);
  initFigures(gsap, ScrollTrigger);
  initNavSpy(ScrollTrigger);

  await initPractice();
  await initForm();

  // Heaviest, last: the Three.js hero field — after first paint.
  requestIdleCallbackSafe(() => loadHero());

  ScrollTrigger.refresh();
}

/* ------------------------------------------------------------
   Lenis — weighted smooth scroll. Synced to the GSAP ticker when
   GSAP is present (so ScrollTrigger stays in lockstep); otherwise
   it drives its own requestAnimationFrame loop so smooth scroll
   works even if GSAP failed to load.
   ------------------------------------------------------------ */
async function initLenis(gsap, ScrollTrigger) {
  try {
    const Lenis = (await import('https://esm.sh/lenis@1.1.13')).default;
    const lenis = new Lenis({
      // lerp (continuous interpolation) reads as smoother than duration-based
      // easing for touchpads, which fire many small wheel events. Lower lerp =
      // heavier, more weighted glide; this keeps the premium feel without choppiness.
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      syncTouch: true,
    });

    if (gsap && ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(time => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      // Standalone RAF loop (no GSAP available).
      const raf = time => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }

    // Quiet anchor scrolling through Lenis
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -10, duration: 1.4 });
        closeOverlay();
      });
    });
    window.__riadaLenis = lenis;
  } catch (err) {
    console.warn('[RIADA] Lenis unavailable; native scroll in use.', err);
  }
}

/* ------------------------------------------------------------
   Default reveal — slow, small y move (elegance, not bounce)
   ------------------------------------------------------------ */
function initReveals(gsap, ScrollTrigger) {
  gsap.utils.toArray('[data-reveal]').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 16 },
      {
        opacity: 1, y: 0, duration: DUR.reveal, ease: EASE,
        scrollTrigger: { trigger: el, start: 'top 82%' },
      });
  });
}

/* ------------------------------------------------------------
   Line-by-line clip reveal — the manifesto / big serif text
   ------------------------------------------------------------ */
function initLineReveal(gsap, ScrollTrigger) {
  document.querySelectorAll('[data-lines]').forEach(el => {
    splitIntoLines(el);
    gsap.utils.toArray(el.querySelectorAll('.line .inner')).forEach(inner => {
      gsap.from(inner, {
        yPercent: 120, duration: DUR.line, ease: EASE,
        scrollTrigger: { trigger: inner.closest('.line'), start: 'top 90%' },
      });
    });
  });
}

/* ------------------------------------------------------------
   Method — the coral hairline "draws" down, nodes reveal
   ------------------------------------------------------------ */
function initTimeline(gsap, ScrollTrigger) {
  const tl = document.querySelector('[data-timeline]');
  if (!tl) return;
  const line = tl.querySelector('.timeline__line');
  if (line) {
    gsap.fromTo(line, { scaleY: 0 }, {
      scaleY: 1, ease: 'none', transformOrigin: 'top',
      scrollTrigger: { trigger: tl, start: 'top 70%', end: 'bottom 75%', scrub: true },
    });
  }
  gsap.utils.toArray(tl.querySelectorAll('.timeline__node')).forEach(node => {
    gsap.from(node, {
      opacity: 0, x: -8, duration: DUR.line, ease: EASE,
      scrollTrigger: { trigger: node, start: 'top 80%' },
    });
  });
}

/* ------------------------------------------------------------
   Figures — slow count-up, once, on first view
   ------------------------------------------------------------ */
function initFigures(gsap, ScrollTrigger) {
  document.querySelectorAll('[data-count]').forEach(el => {
    const to = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const fmt = v => prefix + v.toFixed(decimals) + suffix;
    const o = { val: 0 };
    gsap.to(o, {
      val: to, duration: DUR.slow * 1.6, ease: EASE,
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: () => { el.textContent = fmt(o.val); },
    });
  });
}

function setFiguresFinal() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const to = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    el.textContent = (el.dataset.prefix || '') + to.toFixed(decimals) + (el.dataset.suffix || '');
  });
}

/* ------------------------------------------------------------
   Nav — active-link spy via ScrollTrigger
   ------------------------------------------------------------ */
function initNavSpy(ScrollTrigger) {
  const map = [
    ['#practice', '.nav__link[href="#practice"]'],
    ['#method', '.nav__link[href="#method"]'],
    ['#invitation', '.nav__link[href="#invitation"]'],
  ];
  map.forEach(([sec, linkSel]) => {
    const section = document.querySelector(sec);
    const link = document.querySelector(linkSel);
    if (!section || !link) return;
    ScrollTrigger.create({
      trigger: section, start: 'top center', end: 'bottom center',
      onToggle: self => link.classList.toggle('is-active', self.isActive),
    });
  });
}

/* ------------------------------------------------------------
   Hero — dynamic-import the Three.js field after first paint
   ------------------------------------------------------------ */
async function loadHero() {
  const canvas = document.querySelector('[data-hero-canvas]');
  if (!canvas) return;
  try {
    const { initHero } = await import('./hero-three.js');
    await initHero(canvas);
  } catch (err) {
    console.warn('[RIADA] Hero field unavailable; CSS fallback in use.', err);
  }
}

/* ------------------------------------------------------------
   Nav scroll state + scroll-cue fade
   ------------------------------------------------------------ */
function initNav() {
  const nav = document.querySelector('[data-nav]');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ------------------------------------------------------------
   Mobile overlay
   ------------------------------------------------------------ */
function initMobileOverlay() {
  const toggle = document.querySelector('.nav__toggle');
  const overlay = document.querySelector('[data-nav-overlay]');
  if (!toggle || !overlay) return;
  overlay.removeAttribute('hidden');
  toggle.addEventListener('click', () => {
    const open = overlay.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeOverlay));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeOverlay(); });
}
function closeOverlay() {
  const toggle = document.querySelector('.nav__toggle');
  const overlay = document.querySelector('[data-nav-overlay]');
  if (!overlay || !overlay.classList.contains('is-open')) return;
  overlay.classList.remove('is-open');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* ------------------------------------------------------------
   Practice + Form modules (their own files)
   ------------------------------------------------------------ */
async function initPractice() {
  try {
    const { initPracticeIndex } = await import('./practice-index.js');
    initPracticeIndex();
  } catch (err) { console.warn('[RIADA] Practice index failed to init.', err); }
}
async function initForm() {
  try {
    const { initEnquiryForm } = await import('./enquiry-form.js');
    initEnquiryForm();
  } catch (err) { console.warn('[RIADA] Enquiry form failed to init.', err); }
}

/* ------------------------------------------------------------
   Helpers
   ------------------------------------------------------------ */
function revealAllInstant() {
  document.querySelectorAll('[data-reveal]').forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
}

// Split a text element into mask-wrapped lines, preserving a trailing
// inline accent (the manifesto's coral dot) on the final line.
function splitIntoLines(el) {
  const dot = el.querySelector('.statement__dot');
  if (dot) dot.remove();
  const text = el.textContent.trim();
  const words = text.split(/\s+/);
  el.textContent = '';

  // Lay words out in temporary spans to detect natural line breaks.
  const probes = words.map(w => {
    const s = document.createElement('span');
    s.textContent = w + ' ';
    s.style.display = 'inline';
    el.appendChild(s);
    return s;
  });

  const lines = [];
  let current = null, lastTop = null;
  probes.forEach(span => {
    const top = span.offsetTop;
    if (lastTop === null || top !== lastTop) { current = []; lines.push(current); lastTop = top; }
    current.push(span.textContent);
  });

  el.textContent = '';
  lines.forEach((wordsInLine, i) => {
    const line = document.createElement('span');
    line.className = 'line';
    const inner = document.createElement('span');
    inner.className = 'inner';
    inner.textContent = wordsInLine.join('').trim();
    if (i === lines.length - 1 && dot) { inner.appendChild(document.createTextNode(' ')); inner.appendChild(dot); }
    line.appendChild(inner);
    el.appendChild(line);
  });
}

function requestIdleCallbackSafe(fn) {
  if ('requestIdleCallback' in window) requestIdleCallback(fn, { timeout: 2000 });
  else setTimeout(fn, 600);
}
