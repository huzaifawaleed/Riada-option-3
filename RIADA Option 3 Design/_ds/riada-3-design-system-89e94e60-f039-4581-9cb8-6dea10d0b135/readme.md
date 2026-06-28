# RIADA — Design System

**ريادة (riāda):** pioneering, leadership, entrepreneurship — rendered in a refined, lighter register.
**Brand essence:** *Premium Precision.* **One-liner:** RIADA — pioneering leadership, refined to its essence.

RIADA is a strategic advisory firm for the GCC (Saudi Arabia core), and a **Fiduciam Global** company. This system implements **Option 03 — "Premium Precision"**: the most polished, executive-facing of the brand's three parallel directions. **Colors and logo are locked — do not alter.**

- **Mission** — Give GCC organizations the structured clarity to make confident, defensible decisions; bridge global rigor with regional fluency.
- **Vision** — Be the most trusted advisory partner in the Gulf, where ambition meets disciplined execution.
- **Audiences** — Enterprise & government, SMEs & startups, investors & partners.
- **Practice lines** — Strategy & Growth · Government & Public Sector · Risk & Compliance (GRC) · Digital Transformation · Corporate Finance & M&A · Organizational Design.
- **Signature deliverable** — *The RIADA Report*, an executive-grade advisory document.

---

## Sources provided
- `uploads/RIADA-Option03-Brand-System.md` — full Option 03 brand system (foundation, color tokens, gradients, type, logo rules, surfaces). The authoritative spec.
- Brand-board screenshots (`uploads/Screenshot 2026-06-14 *.png`) — concept summary, logo lockups on grounds, mockup, and the type specimen used to confirm fonts.
- `uploads/logos-*.zip` → extracted to `assets/logos/` (4 SVGs + 2 hi-res PNGs).

No codebase or Figma was provided; this system is built from the brand spec + screenshots. The marketing site is an original implementation in the brand's visual language (no existing product UI was supplied to recreate).

---

## CONTENT FUNDAMENTALS

**Voice:** *Polished. Selective. Exact.* Refined, not loud — say less, mean more. Mature and composed; restraint signals confidence. Precise: every word and figure is considered. Bilingual-aware, Arabic-first framing where it serves regional audiences (here: English-led, with the Arabic wordmark as the anchor).

- **Person/POV:** Speak as the firm — "we" / "RIADA." Address the client as "you," sparingly. Third-person framing for positioning ("RIADA gives GCC organizations…").
- **Casing:** Sentence case for headlines and body. UPPERCASE only for letter-spaced eyebrows, micro-labels, and the "RIADA" Latin lockup. Never all-caps a sentence.
- **Tone examples (use as reference):**
  - Headline: *"Refined counsel for the region's boldest decisions."*
  - Lede: *"Structured clarity to act with confidence — bridging global rigor with regional fluency."*
  - Eyebrow: *STRATEGIC ADVISORY · GCC*
  - Principle: *"Ambition meets disciplined execution."*
  - Sign-off / footer: *"Polished · Selective · Exact."* / *"A Fiduciam Global company."*
- **Punctuation:** Em dashes for considered asides. The middot ( · ) joins short label pairs ("Riyadh · KSA", "Polished · Selective · Exact").
- **Numbers / data:** Used sparingly and only when defensible. No vanity stats, no data slop. Precision over volume.
- **Emoji:** Never. The brand register is executive and restrained.
- **Vibe:** Boardroom-grade, discreet, premium. The reader should feel they're in selective company.

---

## VISUAL FOUNDATIONS

**Colors (locked).** Teal `#17403E` (primary, dark grounds, wordmark) · Coral `#E2493B` (signature accent — dots, highlights, CTAs) · Charcoal `#2D2D2D` (secondary dark) · Blush `#F4CDC6` · Cream `#FBEFEA` (default light paper) · White · Ink `#14302E` (body on light). Build with the **semantic aliases** in `tokens/colors.css` (`--surface-*`, `--text-*`, `--action-*`, `--border-*`), not raw hexes. Coral is used as a *highlight*, never a flood — small areas, single CTA per view, the dot motif.

**Type.** Two families only.
- **Cormorant Garamond** — refined display serif for headings, covers, and "RIADA"-style letter-spaced caps. Light (300) / Regular (400), often italic for emphasis. This carries the premium register.
- **Lato** — humanist sans for all functional copy (UI, body, captions, eyebrows). 300/400/700/900. *(Confirmed from the brand-board type specimen.)*
- Lighter weights + airy spacing throughout. Headlines in sentence case; eyebrows are 11px, `0.28em` tracking, uppercase Lato.

**Backgrounds.** Flat cream/white for content; teal (Pine) or charcoal for executive moments. Gradients are reserved for covers & hero panels only — **Ember** (coral), **Pine** (teal), **Petal** (blush wash) — 135° house default. Never run body text over a gradient. A recurring texture motif: large, faint coral circles on teal/coral panels (from the brand board) — used as ambient depth behind the logo, never behind text.

**Spacing & layout.** 4px base scale; generous whitespace is the core premium signal. Sections breathe at ~112px vertical rhythm. Max content width 1200px. Fine hairline rules (`--border-hair`) and a 2px **coral rule** as a recurring divider/accent device.

**Corners & cards.** Restrained radii — 10–16px on cards, 6–10px on inputs/buttons; never pill-shaped containers (pills reserved for badges). Cards are paper surfaces with hairline borders OR soft elevation (not both); an optional top coral rule marks featured cards. Cards lift `translateY(-3px)` into a larger shadow on hover.

**Shadows.** Soft, warm-tinted (teal-toned) elevation — `--shadow-xs … --shadow-xl`. Nothing harsh or neutral-grey.

**The signature glow.** Primary (coral) buttons carry a soft coral glow: a base `box-shadow` bloom plus a blurred `::before` halo that intensifies on hover and softens on press. Tokens: `--glow-coral`, `--glow-coral-strong`, `--glow-coral-soft`. This is the brand's one piece of "light," used only on the primary CTA.

**Motion.** Quiet and precise. `--ease-out` (cubic-bezier .22,1,.36,1), 140–380ms. Buttons lift 1px on hover; cards lift 3px; the underline on nav links wipes in. No bounce, no parallax, no decorative loops.

**States.** Hover = slightly lighter coral + stronger glow (primary), teal fill (secondary outline), faint teal wash (ghost). Press = deeper coral + reduced glow + return to baseline Y. Focus = 3px coral focus ring (`--focus-ring`).

**Transparency / blur.** Used sparingly: the sticky nav is a cream blur (`backdrop-filter`), and dark overlay cards use a subtle frosted teal. Imagery register: warm, deep, slightly grainy teal surfaces (per the mockup) — cool-to-warm, never bright or saturated beyond the coral accent.

---

## ICONOGRAPHY

The brand spec ships **no icon set**, and no codebase/icon font was provided. RIADA's restraint means iconography is intentionally minimal:
- **The coral dot** ( ● ) is the primary "icon" — abstracted from the wordmark's dots. Used as list markers, eyebrow accents, status dots, and section punctuation. See `guidelines/brand-dots.html` and the `dot` prop on `Badge`/`Eyebrow`.
- **The fine coral rule** (2px) is the secondary device — dividers, eyebrow lead-in, featured-card top accent.
- **Arrows** use the serif glyph `→` (Cormorant) inline in links/buttons, matching the editorial tone rather than a UI icon font.
- **No emoji. No multicolor icons.** If a future surface needs a line-icon set, use **Lucide** (CDN) at a 1.5px stroke in teal — it matches the refined weight. *(Flagged as a substitution — none was specified by the brand.)*

Logos live in `assets/logos/` (see Brand cards): `riada3_primary` (teal+coral, default on light), `riada3_reversed` (white+coral on dark), `riada3_white_solid`, `riada3_teal_solid`. Keep clear space ≥ the height of the Arabic ة; never recolor, stretch, or add effects.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry point (imports only). Consumers link this.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skills wrapper.

**`tokens/`** — `fonts.css` (Google Fonts: Lato + Cormorant), `colors.css`, `typography.css`, `spacing.css` (spacing, radii, shadows, **glow**, motion), `base.css` (reset + brand utilities).

**`components/core/`** — reusable React primitives (namespace `window.RIADADesignSystem_89e94e`):
- `Button` — primary (coral + glow) · secondary (teal outline) · ghost; sizes sm/md/lg; `onDark`; icon slots.
- `Badge` — letter-spaced caps label, 7 tones, optional dot.
- `Card` (+ `CardBody`, `CardFooter`) — paper/cream/pine surfaces, coral accent, hover lift.
- `Input` — labeled field/textarea with teal focus ring + error state.
- `Eyebrow` — section micro-label with coral rule.
- `core.card.html` — the showcase / DS-tab thumbnail.

**`ui_kits/website/`** — interactive marketing site (Header, Hero, Practice, Approach, Report, Contact, Footer). Entry `index.html`; see its `README.md`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**`assets/logos/`** — the four locked logo lockups (SVG) + hi-res PNGs.

---

### Substitutions to confirm
- **Fonts load from the Google Fonts CDN** (Lato + Cormorant Garamond) rather than self-hosted files. Lato matches the brand-board specimen exactly; Cormorant is a refined stand-in for the display serif. If you have licensed masters, drop the files in and I'll swap the `@font-face` source.
