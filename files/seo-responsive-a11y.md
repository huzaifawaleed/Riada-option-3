# RIADA Option 03 — Shipping Reference
### SEO · Responsiveness · Accessibility · Performance · RTL

Everything needed to ship an Option 03 surface to a premium, award-winning
standard. Apply all of this before considering a build done.

---

## 1. SEO & meta

Head block for `index.html` (fill real copy in the brand voice — *Polished.
Selective. Exact.*):

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>RIADA — Refined strategic advisory for the GCC</title>
<meta name="description" content="RIADA delivers refined, high-value counsel for the GCC — structured clarity to act with confidence. A Fiduciam Global company.">
<link rel="canonical" href="https://riada.sa/">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="RIADA — Pioneering leadership, refined to its essence">
<meta property="og:description" content="Refined counsel for the region's boldest decisions.">
<meta property="og:image" content="https://riada.sa/assets/og/riada-pine-cover.png"><!-- Pine cover + reversed wordmark, 1200×630 -->
<meta property="og:locale" content="en">
<meta property="og:locale:alternate" content="ar">
<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">

<!-- Favicon from the coral dot / mark -->
<link rel="icon" href="/assets/logos/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/logos/apple-touch-icon.png">

<!-- Fonts: preconnect for the Google Fonts CDN used by the DS -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

- **OG image:** a Pine-gradient cover with the `riada3_reversed` wordmark, 1200×630.
- **Structured data:** add `Organization` (and `ProfessionalService`) JSON-LD —
  name "RIADA", parent "Fiduciam Global", areaServed "GCC / Saudi Arabia",
  contact `hello@riada.sa`, offices Al Khobar · Jeddah · Riyadh.
- **Semantic HTML is SEO:** one `<h1>` (the hero/manifesto line), logical
  `<h2>/<h3>` order, `<main>`, `<nav>`, `<footer>`, `<section aria-labelledby>`.
- **Sitemap & robots:** ship `sitemap.xml` + `robots.txt`. Set `hreflang` for the
  English/Arabic pair once the RTL variant exists.
- **Performance is ranking:** see §4 — Core Web Vitals are part of SEO.

---

## 2. Responsiveness

Mobile-first. The editorial layout adapts, it does not get crammed.

- **Breakpoints (suggested):** base (≤640), `md` 641–1024, `lg` ≥1025. Content
  caps at `--container-max` (1200px); wide brand moments may use
  `--container-wide` (1360px).
- **Fluid type:** wrap the px scale in `clamp()` for hero/display so it scales
  without breakpoints, e.g.
  `font-size: clamp(2.75rem, 6vw, 4.75rem);` for the hero serif.
- **Section rhythm:** `--section-y` 112px on desktop → reduce to ~72–80px on
  mobile; keep generous — whitespace is the premium signal even on small screens.
- **Component adaptations:**
  - Practice hover-index → **tap-to-expand** stacked list (no hover dependency).
  - Method timeline → stays vertical (already ideal).
  - Multi-column → single column; preserve airy spacing, don't tighten to fill.
  - Nav → fine "menu" toggle → full-screen cream overlay, links centered in serif,
    slow staggered reveal.
- **Three.js:** reduce dot count on mobile; keep DPR capped at 1.5.
- **Touch targets:** ≥44×44px; underline-style inputs still get a comfortable tap
  height.
- **Images:** `aspect-ratio` boxes + `srcset`/`sizes`; never let the duotone
  imagery cause layout shift.

---

## 3. Accessibility (target WCAG 2.1 AA)

- **Contrast:** teal/white, teal/cream, ink/cream pass AA. **Never use coral for
  small body text on cream** — coral is for accents, large display, and on dark
  where contrast holds. Verify each pairing with a checker.
- **Focus:** visible `:focus-visible` ring everywhere — `outline:3px solid
  var(--focus-ring); outline-offset:2px;`. Never remove outlines without a
  replacement.
- **Forms (the enquiry):** every field has a real `<label>`; errors linked via
  `aria-describedby`; required fields marked; error text is not color-only (pair
  the coral dot + words). Success announced via `aria-live="polite"`.
- **Motion:** full `prefers-reduced-motion` path — disable Three.js idle loop,
  Lenis, and scroll reveals; show all content immediately; forms fully functional.
- **Semantics & landmarks:** `<header><nav><main><footer>`, `<section
  aria-labelledby>`, ordered headings, descriptive `alt` on meaningful images
  (empty `alt=""` on decorative/duotone-only images), `aria-hidden` on the
  Three.js canvas and the coral-dot cursor (decorative).
- **Keyboard:** the Practice index must respond to `focus` as well as hover (see
  animations ref); all interactive elements reachable and operable by keyboard;
  logical tab order; skip-link to `#main`.
- **Language:** `<html lang="en">` (and `lang="ar" dir="rtl"` on the Arabic
  variant); mark inline Arabic with `lang="ar"`.

---

## 4. Performance (Core Web Vitals)

Budget: **LCP < 2.5s, CLS < 0.1, INP < 200ms.** The sparse design helps — keep it
that way.

- **Defer the heavy bits:** dynamic-`import()` Three.js *after* first paint; never
  block render on it. The hero must look complete via the CSS Pine fallback before
  JS runs.
- **Fonts:** `display=swap` (already in the DS import); `preconnect` to the font
  CDN; consider self-hosting + `preload` the two key weights (Cormorant 400,
  Lato 400) for licensed masters.
- **Images:** `.webp`, lazy-load below the fold (`loading="lazy"`), correct
  `width`/`height` or `aspect-ratio` to prevent CLS, responsive `srcset`. Fewer,
  larger, better — not many thumbnails.
- **JS:** ES modules, tree-shake GSAP plugins (register only ScrollTrigger +
  what's used); cap Three.js DPR at 1.5; pause its RAF off-screen.
- **CSS:** ship the DS token files once; avoid duplicate token declarations;
  prefer transforms/opacity for animation (compositor-friendly).
- **Caching/build:** Vite for bundling/minify; hash assets; gzip/brotli.

---

## 5. RTL & bilingual readiness

Arabic leads this brand, so the Arabic variant must feel **native, not bolted on.**

- Author layout with **logical CSS properties** (`margin-inline`, `padding-block`,
  `inset-inline-start`, `border-inline-end`) so `dir="rtl"` mirrors cleanly.
- Provide an Arabic page at `dir="rtl" lang="ar"`; mirror nav, alignment, and the
  Practice index image side. Pair an elegant light naskh (e.g. *29LT Azer*,
  *Greta Arabic*, *TheSans Arabic Light*) for Arabic copy; keep the wordmark as
  artwork.
- Numerals: decide Western vs Eastern-Arabic per locale; keep figures precise and
  sparse either way.
- `hreflang="en"` / `hreflang="ar"` alternates + `og:locale:alternate`.
- The coral dot, rule, and glow all work identically in RTL — no mirroring needed
  for the motif itself.

---

## 6. Pre-ship checklist

- [ ] Only locked colors used; all via semantic aliases; no stray hexes.
- [ ] Coral appears only as small accents + one glowing CTA per view.
- [ ] Two fonts only (Cormorant + Lato); sentence-case headings; eyebrows uppercase.
- [ ] Gradients only on covers/hero; no text over gradients.
- [ ] Correct logo lockup per ground; clear space respected; not recolored/distorted.
- [ ] Motion slow & eased; one signature interaction; full reduced-motion path.
- [ ] SEO complete: title, description, OG, JSON-LD, sitemap, favicon, canonical.
- [ ] AA contrast verified (esp. no small coral-on-cream text).
- [ ] Forms labeled, errors non-color-only, success announced, keyboard-complete.
- [ ] LCP/CLS/INP within budget; Three.js deferred with CSS fallback.
- [ ] Responsive: Practice index taps on mobile; airy spacing preserved.
- [ ] RTL-ready: logical properties throughout; Arabic variant plan in place.
- [ ] Separate files: HTML / CSS / JS not inlined together.
