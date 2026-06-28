# RIADA — Option 03 · *Premium Precision*

An award-winning, editorial landing page for **RIADA**, a selective GCC strategic-advisory
firm and a *Fiduciam Global* company. Built on the locked Option 03 brand system —
refined, restrained, and exact. *Restraint is the luxury.*

## The build

A premium, gallery-like single page ("The Quiet Reveal") delivered as **separate
HTML / CSS / JS files** on the locked design tokens.

```
site/
├─ index.html              ← semantic markup + SEO / OG / JSON-LD
├─ css/styles.css          ← imports the DS tokens, then editorial layout
├─ js/
│  ├─ main.js              ← Lenis smooth-scroll, GSAP reveals, timeline, count-up, nav
│  ├─ hero-three.js        ← Three.js coral-dot hero field (dynamic-imported, with fallback)
│  ├─ practice-index.js    ← the signature hover-reveal Practice index
│  └─ enquiry-form.js      ← validation, honeypot, mocked submit
└─ assets/
   ├─ ds/                  ← the locked design-system token files
   └─ logos/               ← the four locked RIADA lockups + favicon
```

The page is a scroll-told story in chapters: **The Opening** (Pine hero) → **The
Statement** → **What We Hold** → **Where We Work** (the Practice hover-reveal index) →
**How We Think** (draw-timeline) → **The Figures** → **The Backing** → **Begin a
Conversation** (enquiry form) → cover-close + footer.

## Run locally

No build step — it's vanilla. Serve the `site/` folder over HTTP (ES modules need it):

```bash
cd site
python -m http.server 8753
# open http://localhost:8753/
```

GSAP, Three.js, and Lenis load from a CDN and are dynamic-imported after first paint.
If a CDN or JS fails, the page degrades gracefully — all content stays visible and the
form still works.

## Brand notes (locked)

- **Colours:** Teal `#17403E` · Coral `#E2493B` · Charcoal · Blush · Cream · White · Ink —
  used only via the design-system semantic tokens.
- **Type:** Cormorant Garamond (display serif) + Lato (functional) — two families only.
- **Coral** is an accent — the dot motif and a single glowing CTA per view, never a flood.
- Motion is slow, eased, and sparse; `prefers-reduced-motion` is fully honoured.

## Reference docs

Brand & build specs live alongside the build: `RIADA-Option03-Brand-System.md`,
`RIADA-Option03-Landing-Page-Build-Spec.md`, the `files/` references, and the
`RIADA Option 3 Design/` design-system package.

---

*Brand & colours locked. Polished · Selective · Exact.*
