# RIADA — Brand System (Option 03)
### *Premium Precision*

A strategic advisory firm for the GCC, and a Fiduciam Global company. This is the **Option 03** direction: a refined, elegant Arabic wordmark that presents RIADA as selective, thoughtful, and high-value. It's the most premium of the three routes — softer in strategic authority, but the most polished and executive-facing. **Logo and colors are fixed — do not alter.**

> This document covers Option 03 only. It is a separate, parallel direction to Option 01 (*Structured Leadership*) and Option 02 (*Confident Arabic Presence*). Pick one to carry forward — don't mix the systems.

---

## 1. Brand Foundation

**Name meaning** — ريادة (*riāda*): pioneering, leadership, entrepreneurship. Here the wordmark is rendered with refined, lighter typography for a premium register.

**One-liner**
> RIADA — pioneering leadership, refined to its essence.

**Mission**
> To give GCC organizations the structured clarity they need to make confident, defensible decisions — bridging global rigor with regional fluency.

**Vision**
> To be the most trusted advisory partner in the Gulf, where ambition meets disciplined execution.

**Positioning statement (Option 03 framing)**
> For enterprises, government bodies, and investors across the GCC who value discretion and quality over noise, RIADA is the selective advisory firm that delivers refined, high-value counsel — polished, mature, and precise. A Fiduciam Global company.

**Brand essence:** *Premium Precision*

**Why this direction works**
- The lighter visual rhythm and refined typography shift the identity toward a premium register.
- It feels mature, polished, and restrained rather than forceful.
- It gives RIADA a sophisticated tone — best for proposal covers, executive reports, and premium-facing communications.

---

## 2. Brand Pillars

| Pillar | What it means | How it shows up |
|---|---|---|
| **Refined** | Elegance over volume | Lighter type, generous whitespace |
| **Selective** | Quality of engagement over quantity | Curated, high-value positioning |
| **Precise** | Considered, exact counsel | Clean layouts, exact detailing |
| **Pioneering** | Forward-leaning leadership | Aligned to the GCC growth agenda |

---

## 3. Product / Service Architecture

RIADA delivers a focused set of advisory practice lines (a curated subset of parent Fiduciam Global's offering):

1. **Strategy & Growth** — market entry, expansion, corporate strategy, Vision-alignment roadmaps
2. **Government & Public Sector** — policy advisory, transformation programs, PMO setup
3. **Risk & Compliance (GRC)** — governance, risk, Saudization & regulatory compliance
4. **Digital Transformation** — AI, analytics, and modernization
5. **Corporate Finance & M&A** — due diligence, deal structuring, restructuring
6. **Organizational Design** — operating models, governance, restructuring

**Signature deliverable:** the *RIADA Report* — a refined, executive-grade advisory document.

**Primary audiences:** Enterprise & government clients · SMEs & startups · Investors & partners
**Primary market:** GCC region (Saudi Arabia core)

---

## 4. Voice & Tone

- **Refined, not loud.** Say less, mean more.
- **Mature and composed.** Restraint signals confidence.
- **Bilingual-aware.** Arabic-first framing for regional audiences.
- **Precise.** Every word and figure considered.

Three words: **Polished. Selective. Exact.**

---

## 5. Design System — Color Tokens

Sampled from the Option 03 brand board. Verify against your exact source swatches and nudge if needed.

| Token | Hex | Role |
|---|---|---|
| `--riada-teal` | `#17403E` | Primary brand, wordmark, dark backgrounds |
| `--riada-coral` | `#E2493B` | Signature accent (dots, highlights, CTAs) |
| `--riada-charcoal` | `#2D2D2D` | Deep neutral background, secondary dark |
| `--riada-blush` | `#F4CDC6` | Warm light tint, soft surfaces |
| `--riada-cream` | `#FBEFEA` | Light background, paper |
| `--riada-white` | `#FFFFFF` | Reversed logo, light surfaces |
| `--riada-ink` | `#14302E` | Body text on light |

### Semantic Roles
- **Backgrounds:** teal or charcoal (dark) / cream or white (light)
- **Primary action:** coral
- **Accent / highlight:** coral dots
- **Text on dark:** white / cream
- **Text on light:** teal / ink

---

## 6. Design System — Gradients

The Option 03 board uses a refined coral-circle-textured panel and a deep teal mockup surface. Use these for premium covers, hero panels, and executive moments — sparingly, to preserve the elegant register.

### Primary Gradient — "Ember"
A soft coral-to-deep-coral diagonal (from the concept summary panel).
```css
--riada-gradient-ember: linear-gradient(135deg, #E2493B 0%, #C13A2E 100%);
```

### Depth Gradient — "Pine"
The deep teal surface from the mockup.
```css
--riada-gradient-pine: linear-gradient(135deg, #17403E 0%, #0E2B29 100%);
```

### Blush Wash — "Petal"
A subtle warm tint for light backgrounds behind text.
```css
--riada-gradient-petal: linear-gradient(180deg, #FBEFEA 0%, #F4CDC6 100%);
```

### Gradient usage rules
- Reserve Ember and Pine for covers and large brand surfaces — never behind body text.
- For text legibility, use flat teal or charcoal with white/cream text.
- Keep generous whitespace; the premium feel depends on restraint.
- 135° diagonal is the house default direction.

---

## 7. Typography

Recommendation — adjust to your licensed fonts.

- **Arabic (primary):** the wordmark is a refined custom Arabic display — keep it as artwork, not live text. For supporting Arabic copy, pair with an elegant light/regular naskh (e.g. *29LT Azer*, *Greta Arabic*, *TheSans Arabic Light*).
- **Latin (secondary):** an elegant serif with wide letter-spacing matches the "RIADA" subtext (e.g. *Cormorant*, *Trajan*, *Optima*, or a refined spaced serif). For body, a clean light sans (e.g. *Inter Light*, *Aktiv Grotesk Light*).
- **Hierarchy:** lighter weights and airy spacing throughout — this is what carries the premium register.

| Level | Size (suggested) | Weight |
|---|---|---|
| Display | 48–64px | Light / Regular |
| H1 | 32px | Regular |
| H2 | 24px | Regular / Medium |
| Body | 16px | Light / Regular |
| Caption | 13px | Regular, letter-spaced |

---

## 8. Logo Rules

- Maintain clear space equal to the height of the Arabic ة on all sides.
- The coral dot accents are part of the mark — never remove or recolor them except in single-color versions.
- "RIADA" Latin serif sits beneath the Arabic, widely letter-spaced — preserve the spacing.
- Reversed (white + coral) on teal / charcoal / coral; full-color (teal + coral) on cream / white.
- Single-color (all-teal or all-white) only where two-tone printing isn't possible.
- Never recolor the teal, stretch, rotate, condense, or add effects.
- Protect the whitespace around the mark — the premium feel depends on it.

---

## 9. Logo Files

In `logos/` — each as SVG (scalable) + 2400px transparent PNG:

| File | Use |
|---|---|
| `riada3_primary` | Teal + coral — on cream / white. Default. |
| `riada3_reversed` | White + coral — on teal / charcoal / coral. |
| `riada3_white_solid` | All white — single-color on busy/dark backgrounds. |
| `riada3_teal_solid` | All teal — single-color on light backgrounds. |

Upload the **SVGs** to Claude Design; they stay crisp at any size.

> Note: these logos are vector reconstructions traced from the brand board screenshot. They're sharp and ready for digital, decks, proposal covers, and letterhead at normal sizes. For absolute print perfection at large scale, request the designer's original vector master. The coral dots are slightly squared in the trace — refine to true circles if using at very large size.

---

## 10. Application Surfaces to Build

- **Buttons** — primary (coral), secondary (teal outline), ghost
- **Cards** — practice lines, cream surfaces with coral accent and fine rules
- **Hero / cover** — Pine or Ember gradient with the reversed logo; lots of whitespace
- **Bilingual layout** — Arabic-first (RTL primary), elegant and airy
- **Proposal cover** — the signature use case: teal cover, centered reversed logo
- **Letterhead** — cream paper, teal logo top, fine coral rule, teal footer
- **The RIADA Report** — refined executive document template

---

*Colors and logo are locked. Everything else is adjustable as the brand matures.*
