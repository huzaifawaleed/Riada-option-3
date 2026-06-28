# RIADA Option 03 — Token Reference

Every value below is from the RIADA Option 03 design system. **Build with the
semantic aliases**, not raw hexes. If the design-system `styles.css` is available,
`@import` it instead of re-declaring these.

---

## Base palette (locked — do not alter)

```css
--riada-teal:      #17403E;  /* primary brand, wordmark, dark grounds */
--riada-teal-deep: #0E2B29;  /* deepest teal, gradient floor */
--riada-coral:     #E2493B;  /* signature accent — dots, highlights, CTA */
--riada-coral-deep:#C13A2E;  /* pressed / gradient floor for coral */
--riada-charcoal:  #2D2D2D;  /* deep neutral ground, secondary dark */
--riada-blush:     #F4CDC6;  /* warm light tint, soft surfaces */
--riada-cream:     #FBEFEA;  /* light background, paper */
--riada-white:     #FFFFFF;
--riada-ink:       #14302E;  /* body text on light */
```

### Tonal teal scale (surfaces, borders, depth)
```css
--riada-teal-900:#0B201F; --riada-teal-800:#0E2B29; --riada-teal-700:#123532;
--riada-teal-600:#17403E; --riada-teal-500:#245B58; --riada-teal-400:#3C7A76;
--riada-teal-100:#D6E3E1; --riada-teal-50:#EAF1F0;
```

### Neutral / paper scale
```css
--riada-paper-0:#FFFFFF; --riada-paper-1:#FDF7F4; --riada-paper-2:#FBEFEA;
--riada-paper-3:#F6E4DD; --riada-line:#ECDED7; --riada-line-strong:#DCC9C0;
```

### Coral tints
```css
--riada-coral-100:#F7D6D1; --riada-coral-50:#FCEAE7;
```

---

## Semantic aliases — BUILD WITH THESE

```css
/* Surfaces */
--surface-page:      var(--riada-cream);     /* default page ground */
--surface-page-warm: var(--riada-paper-1);
--surface-card:      var(--riada-white);
--surface-card-warm: var(--riada-paper-2);
--surface-inverse:   var(--riada-teal);      /* executive dark moments */
--surface-inverse-2: var(--riada-charcoal);
--surface-accent:    var(--riada-coral);     /* tiny areas / the CTA only */
--surface-blush:     var(--riada-blush);

/* Text */
--text-strong:       var(--riada-teal);      /* headings on light */
--text-body:         var(--riada-ink);
--text-muted:        #5C6F6C;
--text-faint:        #8A9794;                /* captions / meta */
--text-on-dark:      var(--riada-white);
--text-on-dark-muted:rgba(251,239,234,0.72);
--text-accent:       var(--riada-coral);

/* Lines / borders */
--border-hair:       var(--riada-line);
--border-strong:     var(--riada-line-strong);
--border-on-dark:    rgba(255,255,255,0.14);
--border-accent:     var(--riada-coral);

/* Interactive */
--action-primary:       var(--riada-coral);
--action-primary-hover: #EC5A4D;
--action-primary-press: var(--riada-coral-deep);
--action-on-primary:    var(--riada-white);
--action-secondary-fg:  var(--riada-teal);
--action-secondary-bd:  var(--riada-teal);
--focus-ring:           rgba(226,73,59,0.55);

/* Status (restrained, brand-tuned) */
--status-success:#2E7D6B; --status-warning:#C8862B;
--status-danger: var(--riada-coral-deep); --status-info: var(--riada-teal-500);
```

### Contrast guardrail
Teal/white, teal/cream, and ink/cream pass AA. **Do not use coral for small body
text on cream** — coral is for accents, large display text, and use on dark where
contrast holds. Verify each pairing.

---

## Gradients (reserved for covers & hero panels only)

```css
--riada-gradient-ember: linear-gradient(135deg, #E2493B 0%, #C13A2E 100%);
--riada-gradient-pine:  linear-gradient(135deg, #17403E 0%, #0E2B29 100%);
--riada-gradient-petal: linear-gradient(180deg, #FBEFEA 0%, #F4CDC6 100%);
```
Never run body text over a gradient. **Pine** = hero / closing cover; **Ember** =
the single primary CTA & rare brand moments; **Petal** = a barely-there wash on
light sections. Most of the site is flat cream or flat teal.

**Texture motif:** large, faint coral circles on teal/coral panels (from the brand
board) — ambient depth behind the logo, never behind text.

---

## Typography

```css
--font-serif:  'Cormorant Garamond', 'Times New Roman', serif; /* display */
--font-sans:   'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; /* functional */
--font-display:var(--font-serif);
--font-body:   var(--font-sans);
```
Load via Google Fonts (already in the DS `fonts.css`):
`Lato 300/400/700/900 (+ italic 400)` and `Cormorant Garamond 300/400/500/600 (+ italic 400)`.

### Weights (premium = lighter)
```css
--fw-light:300; --fw-regular:400; --fw-medium:500; --fw-semibold:600; --fw-bold:700; --fw-black:900;
```
Use 300–400 for display serif and body. Reserve 700+ for eyebrows/labels.

### Size scale (px)
```css
--fs-display-xl:76px;  /* hero serif */      --fs-display:56px; /* cover / opener */
--fs-h1:40px; --fs-h2:30px; --fs-h3:22px;    --fs-title:19px;   /* card titles */
--fs-body-lg:19px; --fs-body:16px; --fs-body-sm:15px;
--fs-caption:13px; --fs-micro:11px;          /* letter-spaced eyebrows */
```

### Line height & letter spacing
```css
--lh-tight:1.08; --lh-display:1.12; --lh-heading:1.22; --lh-snug:1.4; --lh-body:1.62;
--ls-tight:-0.02em; --ls-normal:0; --ls-wide:0.04em; --ls-wider:0.12em; --ls-widest:0.28em;
```

### Eyebrow role (the signature label)
```css
--eyebrow-font: var(--font-sans);
--eyebrow-weight: var(--fw-bold);
--eyebrow-spacing: var(--ls-widest); /* 0.28em */
--eyebrow-size: var(--fs-micro);     /* 11px, uppercase, coral */
```

### Usage rules
- Headlines & body: **sentence case**, light weights, airy line-height.
- Display serif (Cormorant) for covers, big moments, and "RIADA"-style
  letter-spaced caps; italic 400 for emphasis.
- Lato for all UI, body, captions, eyebrows.

---

## Spacing, layout, radii (4px base)

```css
--space-1:4px;  --space-2:8px;  --space-3:12px; --space-4:16px; --space-5:20px;
--space-6:24px; --space-8:32px; --space-10:40px; --space-12:48px; --space-16:64px;
--space-20:80px; --space-24:96px; --space-32:128px; --space-40:160px;

--container-max:1200px; --container-wide:1360px; --gutter:24px;
--section-y:112px;  /* vertical rhythm between sections */

--radius-xs:4px; --radius-sm:6px; --radius-md:10px; --radius-lg:16px; --radius-xl:24px;
--radius-pill:999px; --radius-card:var(--radius-lg);

--bw-hair:1px;  --bw-rule:2px;  /* the fine coral rule */
```
Restrained radii: 10–16px on cards, 6–10px on inputs/buttons. **Never pill-shaped
containers** (pills reserved for badges). Generous whitespace is the premium
signal — sections breathe at ~112px.

---

## Elevation, glow, motion

```css
/* Soft, warm-tinted (teal-toned) shadows — nothing harsh/grey */
--shadow-xs:0 1px 2px rgba(20,48,46,0.06);  --shadow-sm:0 2px 8px rgba(20,48,46,0.07);
--shadow-md:0 8px 24px rgba(20,48,46,0.09); --shadow-lg:0 18px 48px rgba(20,48,46,0.12);
--shadow-xl:0 32px 80px rgba(20,48,46,0.16);
--shadow-inset-hair: inset 0 0 0 1px var(--riada-line);

/* THE SIGNATURE CORAL GLOW — behind the single primary CTA only */
--glow-coral:        0 6px 20px rgba(226,73,59,0.34);
--glow-coral-strong: 0 8px 30px rgba(226,73,59,0.50);
--glow-coral-soft:   0 4px 14px rgba(226,73,59,0.22);
--glow-coral-bloom:  0 0 42px 6px rgba(226,73,59,0.40); /* layered ::before halo */

/* Motion — quiet & precise */
--ease-out:   cubic-bezier(0.22, 1, 0.36, 1);
--ease-inout: cubic-bezier(0.65, 0, 0.35, 1);
--dur-fast:140ms; --dur-base:220ms; --dur-slow:380ms;

/* Z-index */
--z-base:0; --z-sticky:100; --z-overlay:800; --z-modal:900; --z-toast:1000;
```

UI micro-motion: buttons lift 1px on hover; cards lift `translateY(-3px)` into a
larger shadow; nav underline wipes in. No bounce, no parallax, no decorative loops.
(Scroll-reveal motion is slower — see `references/animations.md`.)

---

## Brand utility classes (from base.css)

```css
.riada-eyebrow    /* coral, uppercase, 0.28em tracking, 11px Lato bold */
.riada-display    /* Cormorant light, tight tracking, teal */
.riada-spaced-caps/* Cormorant medium, 0.12em tracking, uppercase */
.riada-rule       /* 48px × 2px coral rule — the recurring divider device */
.riada-dot        /* coral dot accent — echoes the wordmark dots */
```
`::selection` is coral on white, set globally in base.css.
