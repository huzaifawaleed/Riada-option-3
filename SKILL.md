---
name: riada-premium-precision
description: >
  Build on-brand RIADA Option 03 ("Premium Precision") web experiences — landing
  pages, marketing sites, covers, and components — for the GCC strategic-advisory
  brand (a Fiduciam Global company). Use whenever building or styling any RIADA
  Option 03 surface: applies the locked teal/coral/cream palette, Cormorant +
  Lato type, semantic design tokens, the coral-dot motif, the signature coral
  glow, and the "slow luxury" GSAP / Three.js / Lenis animation system. Covers
  vanilla HTML/CSS/JS (separate files, primary path) and the React component
  library (optional). Includes SEO, responsiveness, accessibility, performance,
  and RTL. Triggers on: RIADA, Option 03, Premium Precision, riada3, advisory
  landing page, the teal #17403E / coral #E2493B palette.
---

# RIADA — Premium Precision (Option 03)

This skill builds **award-winning, premium web surfaces** for RIADA, a selective
GCC strategic-advisory firm and a **Fiduciam Global** company. It implements
**Option 03 — *Premium Precision***: the most polished, executive-facing of the
brand's three parallel directions.

**Brand essence:** *Premium Precision.* **One-liner:** *RIADA — pioneering
leadership, refined to its essence.* **Voice:** *Polished. Selective. Exact.*

> **The first law: restraint is the luxury.** RIADA does *less, better*. Vast
> whitespace, light serif type, slow motion, and the coral accent used like a
> jeweller uses a gemstone — rarely, with intent. If a choice feels loud, busy,
> bouncy, or decorative, it is wrong for this brand.

---

## 0. Locked rules — never violate

These come from the brand system and design system. They are not stylistic
suggestions; treat them as hard constraints.

1. **Colors are locked.** Teal `#17403E` · Coral `#E2493B` · Charcoal `#2D2D2D` ·
   Blush `#F4CDC6` · Cream `#FBEFEA` · White · Ink `#14302E`. Never introduce new
   brand hues. Build with the **semantic aliases** (`--surface-*`, `--text-*`,
   `--action-*`, `--border-*`), not raw hexes.
2. **Coral is a highlight, never a flood.** Small areas only — the dot motif, a
   single primary CTA per view, fine rules, focus rings. Never large coral fills
   behind text.
3. **The logo is locked.** Four lockups only (`riada3_primary`,
   `riada3_reversed`, `riada3_white_solid`, `riada3_teal_solid`). The coral dots
   are part of the mark. Never recolor the teal, stretch, rotate, condense, add
   effects, or crowd its clear space (≥ the height of the Arabic ة).
4. **Two fonts only.** **Cormorant Garamond** (display serif, light weights) +
   **Lato** (all functional copy). No third family.
5. **Gradients are reserved.** Ember / Pine / Petal for covers & hero panels
   only, 135° house default. Never run body text over a gradient.
6. **Motion is quiet.** Slow, eased, sparse. No bounce, no parallax theatrics, no
   decorative loops. Always honor `prefers-reduced-motion`.
7. **Whitespace is the layout.** Generous spacing is the core premium signal —
   never crowd to fill space.

---

## 1. What to read, when

This skill is a router. Load the focused reference for the task at hand:

| You are doing… | Read |
|---|---|
| Anything (always start here) | this `SKILL.md` |
| Picking colors, type sizes, spacing, shadows, glow, motion values | `references/tokens.md` |
| Building buttons, cards, inputs, badges, eyebrows, the dot/rule | `references/components.md` |
| Adding GSAP / Three.js / Lenis / vanilla motion | `references/animations.md` |
| Shipping: SEO, meta, responsive, a11y, performance, RTL | `references/seo-responsive-a11y.md` |

The authoritative source files (tokens CSS, component JSX, the marketing site)
live in the user's `RIADA Option 3 Design` design-system package. When that
package is available, link/copy its `styles.css` (which imports all token files)
rather than re-declaring tokens.

---

## 2. The build philosophy — "The Quiet Reveal"

RIADA Option 03 surfaces are **editorial, gallery-like experiences**, not a stack
of generic UI components. Build like a printed monograph:

- **Editorial, not card-soup.** Favor full-width type, oversized light numerals,
  fine hairline rules, and asymmetric single-column breaks over boxed card grids.
  Cards exist (see components) but are used sparingly, never as the default.
- **The coral dot is the signature.** Abstracted from the wordmark's dots, it is
  the primary "icon": list markers, eyebrow accents, status dots, section
  punctuation, the cursor, link underline-dots, hero particles.
- **The coral glow is the one piece of "light."** A soft bloom behind the *single*
  primary CTA per view. Used nowhere else.
- **Slow luxury motion.** Longer durations (0.9–1.3s for reveals), gentle easing
  (`--ease-out`), line-by-line text reveals, hairlines that draw. Nothing snaps.
- **Sentence case** headlines and body. UPPERCASE only for letter-spaced eyebrows,
  micro-labels, and the "RIADA" Latin lockup. Never all-caps a sentence.
- **Em dashes** for considered asides; the **middot ( · )** joins short label pairs
  ("Riyadh · KSA", "Polished · Selective · Exact"). **Never emoji.**

A typical page sequence (chapters, not components): *The Opening* (Pine hero,
reversed wordmark, slow coral-dot field) → *The Statement* (one oversized serif
line, revealed line-by-line) → *What We Hold* (principles as an editorial list) →
*Where We Work* (practice lines as a hover-reveal index, one image at a time) →
*How We Think* (a quiet vertical draw-timeline) → *The Figures* (numbers as
editorial pull-quotes) → *The Backing* (Fiduciam as discreet provenance) →
*Begin a Conversation* (a refined enquiry form) → *Cover-close* + quiet footer.

---

## 3. Output format (decided default)

**Primary path: vanilla HTML / CSS / JS in separate files.** This matches the
RIADA landing-page specs. Never inline a whole page into one file.

```
/index.html              ← markup only; links the CSS + JS, loads tokens
/css/styles.css           ← imports DS tokens, then page styles & components
/js/main.js               ← page logic, Lenis, GSAP reveals, interactions
/js/hero-three.js          ← Three.js coral-dot hero field (dynamic-imported)
/js/practice-index.js      ← the hover-reveal Practice index interaction
/js/enquiry-form.js        ← form validation + submit handling
/assets/logos/...          ← the 4 locked riada3 SVG lockups
/assets/img/...            ← duotone imagery (webp)
```

- HTML = structure only. No `<style>` blocks; no inline `<script>` logic beyond
  necessary tag references. Link CSS via `<link rel="stylesheet">`; load JS via
  `<script type="module">`.
- Pull tokens in first: `@import` the design system's `styles.css` (or the five
  token files) at the top of `css/styles.css`, then write page styles using the
  semantic aliases.

**Optional path: React.** The design-system package ships real components under
the namespace `RIADADesignSystem_89e94e` (`Button`, `Badge`, `Card`, `CardBody`,
`CardFooter`, `Eyebrow`, `Input`). Use them when building in React; otherwise use
the vanilla HTML/CSS equivalents in `references/components.md`. The same tokens
power both, so output is visually identical either way.

---

## 4. Quick-start scaffold (vanilla)

`css/styles.css` top:
```css
/* Pull in the locked RIADA Option 03 tokens first */
@import url('../assets/ds/styles.css'); /* fonts + colors + type + spacing + base */

/* Then page styles — always via semantic aliases */
.section { padding-block: var(--section-y); }
.container { max-inline-size: var(--container-max); margin-inline: auto; padding-inline: var(--gutter); }
.h-display { font-family: var(--font-display); font-weight: var(--fw-light); font-size: var(--fs-display); line-height: var(--lh-display); color: var(--text-strong); }
.eyebrow { /* or use the .riada-eyebrow utility */ font: var(--fw-bold) var(--fs-micro)/1 var(--font-sans); letter-spacing: var(--ls-widest); text-transform: uppercase; color: var(--text-accent); }
```

If the DS package isn't present, declare the token blocks from
`references/tokens.md` directly, then proceed identically.

`index.html` head essentials (full SEO/meta in the shipping reference):
```html
<link rel="stylesheet" href="/css/styles.css">
<script type="module" src="/js/main.js"></script>
```

---

## 5. Definition of "award-winning" done

- Feels like a printed monograph: vast whitespace, slow motion, fine hairlines,
  light serif type.
- One restrained signature interaction (e.g. the Practice hover-reveal index)
  that feels expensive and effortless.
- The coral dot is the single disciplined accent; the coral glow appears on one
  CTA per view and nowhere else.
- Motion is slow, eased, and sparse; nothing bounces or shouts; forms are quiet,
  validated, and accessible.
- Unmistakably Option 03: teal / coral / cream, refined Cormorant serif, airy
  spacing, the reversed wordmark on Pine.
- Ships clean: SEO complete, AA contrast, `prefers-reduced-motion` honored,
  responsive, RTL-ready. (See `references/seo-responsive-a11y.md`.)

---

*Brand & colors locked. Restraint is the luxury. Build everything else to feel
polished, selective, and exact.*
