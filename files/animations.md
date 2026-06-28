# RIADA Option 03 — Animation System ("Slow Luxury")

Motion philosophy: **slow, eased, sparse.** Longer durations and gentler easing
than a typical site. Nothing snaps, bounces, or loops decoratively. The site
should feel like it *exhales*. **Always honor `prefers-reduced-motion`** — disable
the Three.js idle loop and non-essential motion, keep all content visible and
forms fully functional.

Stack: **GSAP** (+ ScrollTrigger; DrawSVG/SplitText-style for line & stroke
reveals), **Three.js** (hero coral-dot field), **Lenis** (slow weighted
smooth-scroll). Load via CDN or npm. Keep each concern in its own JS module
(`main.js`, `hero-three.js`, `practice-index.js`, `enquiry-form.js`).

---

## 0. Global guards (put at top of main.js)

```js
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Token-aligned constants (mirror the CSS motion tokens)
const EASE = 'power2.out';          // ≈ cubic-bezier(.22,1,.36,1)
const DUR  = { reveal: 1.1, line: 0.9, slow: 1.3 }; // seconds — slower than usual
```

If `reduceMotion`, skip Lenis, skip Three.js, and replace reveals with instant
visibility (`gsap.set(targets,{opacity:1,y:0})`).

---

## 1. Lenis — weighted smooth scroll, synced to GSAP

```js
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let lenis;
if (!reduceMotion) {
  lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10*t)) });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}
```
The longer `duration: 1.2` gives the heavy, premium scroll feel. Keep it; do not
speed it up.

---

## 2. Reveal philosophy (GSAP ScrollTrigger)

Slower and gentler than Option 01/02. Small `y` move (elegance, not bounce).

```js
function revealOnScroll(){
  if (reduceMotion){ gsap.set('[data-reveal]', {opacity:1, y:0}); return; }
  gsap.utils.toArray('[data-reveal]').forEach(el => {
    gsap.from(el, {
      opacity:0, y:16, duration:DUR.reveal, ease:EASE,
      scrollTrigger:{ trigger:el, start:'top 82%' }
    });
  });
}
```

### Line-by-line clip reveal (manifesto / big serif statements)
Text rises from behind a mask, slow stagger. This is the boldest *typographic*
moment — not a visual effect.
```js
function lineReveal(scope){
  if (reduceMotion) return;
  // wrap each line in <span class="line"><span class="inner">…</span></span> first
  gsap.utils.toArray(`${scope} .line .inner`).forEach((inner,i)=>{
    gsap.from(inner, {
      yPercent:120, duration:DUR.line, ease:EASE, stagger:0,
      scrollTrigger:{ trigger:inner.closest('.line'), start:'top 88%' }
    });
  });
}
```
```css
.line{ overflow:hidden; display:block; }
.line .inner{ display:block; }
```

### Hairline / timeline draw (the Method section)
A fine vertical coral line "draws" downward as phases reveal one-by-one.
```js
function drawTimeline(){
  if (reduceMotion){ gsap.set('.timeline__line',{scaleY:1}); return; }
  gsap.from('.timeline__line', {
    scaleY:0, transformOrigin:'top', ease:'none',
    scrollTrigger:{ trigger:'.timeline', start:'top 70%', end:'bottom 70%', scrub:true }
  });
  gsap.utils.toArray('.timeline__node').forEach(node=>{
    gsap.from(node, { opacity:0, x:-8, duration:DUR.line, ease:EASE,
      scrollTrigger:{ trigger:node, start:'top 80%' }});
  });
}
```

> No stagger-heavy grids (there are no grids). Reveals are singular and
> deliberate.

---

## 3. The signature interaction — Practice hover-reveal index

The centerpiece: a list of practice lines; hovering one fades in a single
duotone image + one-line description on the right. One image visible at a time —
like turning plates in a book. Lives in `practice-index.js`.

```js
export function initPracticeIndex(){
  const items = document.querySelectorAll('.practice__item');
  const stage = document.querySelector('.practice__stage'); // holds the images
  items.forEach(item=>{
    const key = item.dataset.key;
    const show = ()=>{
      stage.querySelectorAll('.practice__img').forEach(img=>{
        img.classList.toggle('is-active', img.dataset.key===key);
      });
      items.forEach(i=>i.classList.toggle('is-active', i===item));
    };
    item.addEventListener('mouseenter', show);
    item.addEventListener('focus', show);   // keyboard parity
  });
}
```
```css
.practice__img{ position:absolute; inset:0; opacity:0;
  transition:opacity var(--dur-slow) var(--ease-out); }
.practice__img.is-active{ opacity:1; }
.practice__item{ position:relative; }
.practice__item .underline{ /* drawn underline on hover */
  position:absolute; inset-block-end:0; inset-inline-start:0; block-size:1px;
  inline-size:0; background:var(--riada-coral); transition:inline-size var(--dur-base) var(--ease-out); }
.practice__item.is-active .underline{ inline-size:100%; }
```
Mobile: convert to tap-to-expand — each item reveals its image + description
inline (no hover dependency).

---

## 4. Hero — Three.js coral-dot field

Sparse coral (and a few cream) dots drifting *very slowly* on the Pine gradient —
like motes in still air. Low count, low opacity, near-still camera. NOT a busy
particle demo. Lives in `hero-three.js`, **dynamic-imported after first paint**.

Key parameters:
- Color: `--riada-coral` (#E2493B) + a few `--riada-cream`; opacity 0.2–0.5.
- Count: ~80–140 desktop, ~40 mobile. Gentle depth parallax.
- Mouse parallax ≤ 2° — almost imperceptible; camera essentially still.
- Optional: faint hairlines between nearest dots, barely visible (a whisper of
  "connection," not a constellation).
- Performance: cap `renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5))`;
  pause the RAF loop when the hero leaves the viewport (IntersectionObserver);
  reduce count on mobile.

```js
// hero-three.js (sketch)
export async function initHero(canvas){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; // fallback CSS shows
  const THREE = await import('three');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  // …scene, camera (near-still), ~120 small dot sprites in coral/cream…
  // drift upward/diagonally very slowly; rotate gently; ≤2° mouse parallax.
  let running = true;
  const io = new IntersectionObserver(([e]) => running = e.isIntersecting);
  io.observe(canvas);
  const tick = () => { if(running){ /* advance drift */ renderer.render(scene,camera);} requestAnimationFrame(tick); };
  tick();
}
```

**Fallback (no WebGL / reduced-motion):** static **Pine** gradient with a faint
coral-circle texture (echoing the brand board), very low opacity. The hero must
look complete without JS.

```css
.hero{ background:var(--riada-gradient-pine); position:relative; }
.hero__canvas{ position:absolute; inset:0; }
.hero--fallback{ /* faint coral circles */
  background-image:radial-gradient(circle at 70% 60%, rgba(226,73,59,.10) 0 14%, transparent 15%),
                   radial-gradient(circle at 30% 30%, rgba(226,73,59,.07) 0 10%, transparent 11%);
}
```

---

## 5. Micro-interactions (restrained)

- **Coral-dot cursor** (desktop only, hidden on touch): a small coral dot follows
  the cursor, scaling subtly over interactive elements. The unifying micro-motion.
- **Hero serif letter-spacing ease-in:** the hero line animates tracking from
  tight → airy on load.
- **Link underline-dots:** links underline with a fine rule terminating in a coral
  dot on hover.
- **Slow count-up** for figures — once, subtle, on first view (respect
  reduced-motion). No bars, no bouncing.
- **Deliberately omitted** (would break the calm): magnetic buttons, rotating
  shapes, marquees, heavy parallax, scroll-jacking gimmicks.

### Count-up helper
```js
function countUp(el, to, opts={}){
  if (reduceMotion){ el.textContent = opts.format ? opts.format(to) : to; return; }
  const o = { val:0 };
  gsap.to(o, { val:to, duration:DUR.slow*1.4, ease:EASE,
    scrollTrigger:{ trigger:el, start:'top 85%', once:true },
    onUpdate:()=>{ el.textContent = opts.format ? opts.format(o.val) : Math.round(o.val); }});
}
```

---

## 6. Motion tone checklist

- Durations skew long (0.9–1.3s for reveals); easing soft (`power2`/`--ease-out`).
- UI feedback stays quick (140–380ms) but gentle: buttons lift 1px, cards lift 3px.
- Nothing snaps or bounces. One signature interaction per page, not many.
- Everything has a `prefers-reduced-motion` path that leaves content fully usable.
