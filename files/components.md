# RIADA Option 03 — Component Reference

The design system ships **7 React primitives** under the namespace
`RIADADesignSystem_89e94e`, plus brand utility classes for vanilla builds. Use
React when building in React; otherwise use the vanilla HTML/CSS equivalents
below. Both consume the same tokens, so output is visually identical.

> Restraint rule: these components exist to be used *sparingly*. Option 03 favors
> editorial type, hairlines, and the dot motif over card-heavy layouts. One
> primary (coral) CTA per view — and only it carries the glow.

---

## React components (namespace `RIADADesignSystem_89e94e`)

| Component | Purpose | Key props |
|---|---|---|
| `Button` | primary (coral + glow) · secondary (teal outline) · ghost | `variant`, `size` (sm/md/lg), `onDark`, icon slots |
| `Badge` | letter-spaced caps label | `tone` (7 tones), `dot` (optional coral dot) |
| `Card` (+ `CardBody`, `CardFooter`) | paper/cream/pine surfaces, optional coral accent, hover lift | surface/accent props |
| `Input` | labeled field/textarea | teal focus ring, `error` state |
| `Eyebrow` | section micro-label with coral rule | — |

Source paths: `components/core/{Button,Badge,Card,Input,Eyebrow}.jsx`. Showcase:
`components/core/core.card.html`.

---

## Vanilla equivalents

These reproduce the components with plain HTML + CSS, using the tokens. Put the
CSS in `css/styles.css` after the token `@import`.

### Eyebrow (section micro-label + coral rule)
```html
<p class="eyebrow"><span class="rule"></span>Strategic Advisory · GCC</p>
```
```css
.eyebrow{
  display:flex; align-items:center; gap:var(--space-3);
  font:var(--fw-bold) var(--fs-micro)/1 var(--font-sans);
  letter-spacing:var(--ls-widest); text-transform:uppercase;
  color:var(--text-accent);
}
.eyebrow .rule{ inline-size:32px; block-size:var(--bw-rule); background:var(--riada-coral); border-radius:2px; }
```

### Primary button — with the signature coral glow
The glow is a base `box-shadow` + a blurred `::before` halo that intensifies on
hover and softens on press. **Use on one CTA per view only.**
```html
<a class="btn btn--primary" href="#contact">Begin a conversation <span class="arrow">→</span></a>
```
```css
.btn{
  --_y:0;
  display:inline-flex; align-items:center; gap:var(--space-2);
  font:var(--fw-bold) var(--fs-body-sm)/1 var(--font-sans);
  padding:var(--space-3) var(--space-6); border-radius:var(--radius-sm);
  text-decoration:none; cursor:pointer; position:relative; isolation:isolate;
  transform:translateY(var(--_y)); transition:transform var(--dur-fast) var(--ease-out),
    box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.btn .arrow{ font-family:var(--font-serif); } /* serif → glyph, editorial tone */

.btn--primary{
  background:var(--action-primary); color:var(--action-on-primary);
  box-shadow:var(--glow-coral);
}
.btn--primary::before{ /* the bloom halo */
  content:""; position:absolute; inset:0; z-index:-1; border-radius:inherit;
  box-shadow:var(--glow-coral-bloom); opacity:.0; transition:opacity var(--dur-base) var(--ease-out);
}
.btn--primary:hover{ background:var(--action-primary-hover); --_y:-1px; box-shadow:var(--glow-coral-strong); }
.btn--primary:hover::before{ opacity:1; }
.btn--primary:active{ background:var(--action-primary-press); --_y:0; box-shadow:var(--glow-coral-soft); }
.btn--primary:focus-visible{ outline:3px solid var(--focus-ring); outline-offset:2px; }
```

### Secondary (teal outline) & ghost
```css
.btn--secondary{ background:transparent; color:var(--action-secondary-fg);
  box-shadow:inset 0 0 0 1px var(--action-secondary-bd); }
.btn--secondary:hover{ background:var(--riada-teal); color:var(--text-on-dark); --_y:-1px; }

.btn--ghost{ background:transparent; color:var(--text-strong); }
.btn--ghost:hover{ background:var(--riada-teal-50); }
/* onDark: swap text to --text-on-dark and borders to --border-on-dark */
```

### Card (paper surface, optional coral top rule, hover lift)
```html
<article class="card card--accent">
  <h3 class="card__title">Strategy &amp; Growth</h3>
  <p class="card__body">Market entry, expansion, and Vision-aligned roadmaps.</p>
</article>
```
```css
.card{
  background:var(--surface-card); border-radius:var(--radius-card);
  padding:var(--space-8); border:1px solid var(--border-hair);
  transition:transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.card:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); }
.card--accent{ position:relative; }
.card--accent::before{ /* featured top coral rule */
  content:""; position:absolute; inset-block-start:0; inset-inline:var(--space-8);
  block-size:var(--bw-rule); background:var(--riada-coral); border-radius:2px;
}
.card__title{ font-family:var(--font-serif); font-weight:var(--fw-regular);
  font-size:var(--fs-h3); color:var(--text-strong); margin:0 0 var(--space-2); }
.card__body{ color:var(--text-muted); font-size:var(--fs-body); margin:0; }
/* Use a paper surface with hairline border OR soft elevation — not both at rest. */
```

### Input (underline-style, premium register)
Option 03 prefers minimal underline fields over heavy boxes.
```html
<label class="field">
  <span class="field__label">Full name</span>
  <input class="field__input" type="text" name="name" required>
</label>
```
```css
.field{ display:block; }
.field__label{ display:block; font-size:var(--fs-caption); color:var(--text-muted);
  letter-spacing:var(--ls-wide); margin-block-end:var(--space-2); }
.field__input{
  inline-size:100%; border:0; border-block-end:1px solid var(--border-strong);
  background:transparent; padding:var(--space-2) 0; font:var(--fw-regular) var(--fs-body) var(--font-sans);
  color:var(--text-body); transition:border-color var(--dur-base) var(--ease-out);
}
.field__input:focus-visible{ outline:none; border-block-end-color:var(--riada-coral);
  box-shadow:0 1px 0 0 var(--riada-coral); }
.field[data-error] .field__input{ border-block-end-color:var(--status-danger); }
.field__error{ display:flex; align-items:center; gap:var(--space-2);
  color:var(--status-danger); font-size:var(--fs-caption); margin-block-start:var(--space-2); }
.field__error::before{ content:""; inline-size:6px; block-size:6px; border-radius:50%;
  background:var(--status-danger); } /* the coral dot */
```

### Badge
```css
.badge{ display:inline-flex; align-items:center; gap:var(--space-2);
  font:var(--fw-bold) var(--fs-micro)/1 var(--font-sans); letter-spacing:var(--ls-wider);
  text-transform:uppercase; padding:var(--space-1) var(--space-3);
  border-radius:var(--radius-pill); background:var(--riada-teal-50); color:var(--text-strong); }
.badge .dot{ inline-size:6px; block-size:6px; border-radius:50%; background:var(--riada-coral); }
```

---

## The coral dot motif (primary "icon")

Abstracted from the wordmark dots — the brand's main accent device. Use as list
markers, eyebrow accents, status dots, section punctuation, cursor, link
underline-dots, hero particles.

```css
.riada-dot{ display:inline-block; inline-size:7px; block-size:7px;
  border-radius:50%; background:var(--riada-coral); }
/* list marker */
.dot-list{ list-style:none; padding:0; }
.dot-list li{ display:flex; align-items:baseline; gap:var(--space-3); }
.dot-list li::before{ content:""; flex:0 0 auto; inline-size:7px; block-size:7px;
  border-radius:50%; background:var(--riada-coral); transform:translateY(-2px); }
```

### The fine coral rule (secondary device)
```css
.riada-rule{ inline-size:48px; block-size:var(--bw-rule); background:var(--riada-coral); border:0; border-radius:2px; }
```

### Arrows & icons
Use the **serif glyph `→`** (Cormorant) inline in links/buttons — not a UI icon
font. No emoji, no multicolor icons. If a line-icon set becomes necessary, use
**Lucide** at 1.5px stroke in teal (flagged substitution — none specified by the
brand).

---

## Logos (locked)

In `assets/logos/` — four lockups, SVG + hi-res PNG:

| File | Use |
|---|---|
| `riada3_primary` | teal + coral — default on cream/white |
| `riada3_reversed` | white + coral — on teal/charcoal/coral (hero, footer) |
| `riada3_white_solid` | all-white single-color, on busy/dark grounds |
| `riada3_teal_solid` | all-teal single-color, on light grounds |

Clear space ≥ height of the Arabic ة. Never recolor the teal, stretch, rotate,
condense, or add effects. The coral dots are part of the mark.

> Note (from the brand system): the SVGs are vector reconstructions; the coral
> dots are slightly squared in the trace — round to true circles if used at very
> large print size, or request the designer's vector master.
