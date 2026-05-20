# Bakersfield Dirt Dawgs — Design System

A premium prep-school editorial system for a youth travel-baseball program in Bakersfield, CA. The visual restraint is intentional: the brand has loud mascot assets, but the design system treats them as accents — the editorial typography does the work.

> **Tagline:** Built in the Dirt. Grounded in Faith.
> **Hero headline:** More Than a Game.
> **Primary CTA:** Request a Tryout

---

## About the program

**Bakersfield Dirt Dawgs** is a youth travel-baseball organization on the USSSA circuit, based in Bakersfield, CA.

- **11U team** (rising to 12U) — coached by program owner **Manny Guzman**
- **10U team** (forming) — coached by **Angel Montano**

The brand frames the team as a development program for kids as athletes *and* people. Faith is woven in subtly — a footer verse, a brief About-page mention — never with banners, badges, or crosses. The aesthetic reference set is **Vanderbilt Baseball, IMG Academy, Stanford Athletics** — editorial, polished, restrained — *not* the loud "travel-ball energy" template.

---

## Sources

| Source | Status | Notes |
|---|---|---|
| `cbutleriv/DirtDawgs` (GitHub) | **Empty repo** | Returned 409 on fetch — no existing code/content to mine. |
| `uploads/*.svg` / `*.png` (logos) | ✅ Imported | Five logo variants — see `assets/logos/`. |
| Brand brief (in conversation) | ✅ Captured | Colors, type, voice, tagline, CTAs, design rules. |

No Figma was provided. No existing site, deck, or copy file was provided. Content fundamentals below are derived from the brief plus reference programs.

---

## Index

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← Claude Code-compatible skill manifest
├── colors_and_type.css        ← CSS tokens (colors, type, spacing, motion)
├── assets/
│   └── logos/                 ← All 5 logo variants (PNG + SVG)
├── preview/                   ← Design-system preview cards (one per token group)
└── ui_kits/
    └── website/               ← Marketing site UI kit (React JSX + index.html)
```

---

## CONTENT FUNDAMENTALS

**Voice.** Confident, not loud. We speak like a coach who's been doing this for twenty years — clear, low-volume, plain language. Sentences are short. We respect the reader's time. Pride is shown by what we don't say.

**Person.** Mostly **we** ("We coach the fundamentals"). Direct address is reserved for CTAs and parents ("If your son loves the game…"). Never first person singular.

**Casing.**
- Headlines in **Title Case** for editorial titles ("More Than a Game.").
- Eyebrows / stats / nav / buttons use **ALL CAPS** Oswald with wide tracking ("PROGRAM 01", "REQUEST A TRYOUT").
- Body in **sentence case**. No exclamation points.
- Section numbers always two-digit ("01", "02", "03") — never "1.", "#1", or written out.

**Punctuation.** Periods at the end of marketing headlines ("More Than a Game.", "Built in the Dirt."). Em-dashes for breath. Avoid ellipses, parentheses inside body copy, and exclamation marks anywhere.

**Faith.** Present, never preached. A single verse in the footer (Colossians 3:23 style — "Whatever you do, work at it with all your heart"). One paragraph on the About page that mentions faith as part of the program's character. No crosses, no banners, no "Christian baseball" labels.

**Words we don't use.** *elite, next-level, grind, beast mode, dawg up, baseball IQ, locked in, hardware, ship 'em, savages, blue chip, exposure.* Anything that reads as recruiting-mill jargon.

**Words we lean on.** *develop, fundamentals, character, work, discipline, ground game, the dirt, the long season, the program, players, kids, families.*

**Examples.**

> ✅ "We're a development program first. Wins follow the work."
> ✅ "Tryouts run two Saturdays each fall. Bring a glove and a parent."
> ✅ "Manny has coached Bakersfield baseball for twelve years. Angel is in his fourth."
> ✅ Footer: *"Whatever you do, work at it with all your heart." — Colossians 3:23*
>
> ❌ "ELITE TRAVEL BASEBALL — DAWG UP! 🔥"
> ❌ "Take your son to the NEXT LEVEL with our world-class coaches!"
> ❌ "We're not just a team — we're a FAMILY."

**Emoji.** Never. Not in copy, not in nav, not in social. The dirt does the work.

**Numbers and stats.** Always editorially framed. "11U · USSSA · Bakersfield" set in Oswald all-caps with bullet separators. Never "🏆 #1 in CA" or stat block walls. If a stat doesn't earn its place, cut it.

---

## VISUAL FOUNDATIONS

### Color

A five-color palette. Navy carries the brand; gold is *accent only* — never a flood color. Cream is for sectioning, not decoration.

| Token | Hex | Role |
|---|---|---|
| `--color-navy`     | `#0B1B3B` | Primary surface + ink on light |
| `--color-gold`     | `#E8B53D` | Accent — buttons, section numbers, hairline emphasis |
| `--color-offwhite` | `#FAFAF7` | Page background |
| `--color-cream`    | `#F5EFE0` | Alternating section background |
| `--color-black`    | `#0A0A0A` | Photo backings, ultra-dark headers |

**Gold rule of thumb.** If gold appears on more than ~5% of any given screen, it's too much. Gold goes on: primary CTA, section numbers ("01"), one hairline accent per section max.

### Type

Three families, strict pairing:

- **Playfair Display** (serif) — display, H1–H4. Italic used as an editorial accent.
- **Oswald** (condensed sans) — ALL CAPS labels, stats, nav, button text, section numbers. Tracked +0.18em.
- **Inter** — body, captions, forms.

Display sizes are large and bold (`clamp(56px, 9vw, 144px)`). Body holds at a comfortable 17px on desktop. We do not have a monospace family — none of the surfaces need one.

### Spacing & layout

8-point base, with editorial macro-steps: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192. **Whitespace is the premium signal** — sections breathe at 96–128px vertical padding, never less than 64px. Containers cap at 1200px; gutters fluid 20–64px.

### Backgrounds

No gradients. No patterns. No textures. Backgrounds alternate between three flat fields: off-white → cream → navy. Hero sections use a desaturated B&W photo with a slight darkening overlay (`rgba(11,27,59,0.45)`); typography sits on top in off-white.

### Imagery

- **Heroes:** desaturated black-and-white action photos. Cinematic, slight grain acceptable.
- **Galleries:** full color, but warm-leaning. Slight contrast lift.
- **Crops:** tight on hands, dirt, faces, gear — not full-field overviews.
- **People:** kids in motion preferred over posed shots. No team-photo grid energy.

### Borders & dividers

**Hairline only.** All dividers are 1px. Three divider tokens, by background:
- `--divider` (`#d8d4c7`) on cream
- `--divider-w` (`#e6e6e1`) on off-white
- `--divider-d` (rgba white .14) on navy

Heavy borders are reserved for primary buttons (`1.5px solid navy`) — and only in the outline variant.

### Shadows

Functionally absent. Cards use a near-imperceptible 1px shadow (`0 1px 0 rgba(11,27,59,0.06)`) for depth without volume. Hover adds a single 8px-blur shadow. **No glows, no double shadows, no inner shadows, no colored shadows.**

### Corner radii

Restrained. The system has four radii: `0` (default), `2px`, `4px`, and `999px` (for pill labels). **Cards default to 0 radius** — they are framed by hairlines, not rounded.

### Buttons

- **Primary:** filled navy, off-white text, Oswald all-caps tracked, 14px font, 14px × 28px padding, 2px radius. No shadow.
- **Secondary:** off-white fill, 1.5px navy border, navy text, otherwise identical.
- **Tertiary / link:** Oswald all-caps with a 1px navy underline, +0.18em tracking.

### Hover states

- **Buttons:** primary darkens to `--color-navy-90`; secondary background goes to `--color-cream`. **No scale, no shadow growth.** Transition: 220ms `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- **Links:** opacity to 0.7, no underline change.
- **Cards (clickable):** hairline border darkens to navy; small `--shadow-hover` appears.

### Press / active

- **Buttons:** brief 60ms color flicker to `--color-navy-80`, no scale.
- **Links:** opacity 0.5 on `:active`.

### Motion

Quiet. Fades and small translates only. Three durations: 140ms (micro), 220ms (default), 420ms (entrance). Easing is `cubic-bezier(0.2, 0.7, 0.2, 1)` (out) for nearly everything. No bounces, no springs, no parallax.

### Transparency & blur

Used in one place only: hero overlay on photos (`rgba(11,27,59,0.45)` flat — no backdrop-blur). The navy header does not become translucent on scroll; it stays solid.

### Fixed elements

Header is sticky-solid on scroll. No floating chat bubbles, no scroll progress bar, no announcement bar (use sparingly if needed: full-bleed navy strip with single Oswald sentence, dismissible).

### Editorial motifs

- **Section numbers.** "01 / 02 / 03" set in Oswald, gold-colored, tracked. Sit above section headlines as eyebrows.
- **Hairline dividers.** 1px lines below each section's eyebrow row, and between footer columns.
- **Stat strips.** Oswald all-caps with vertical pipe separators: `11U  ·  USSSA  ·  BAKERSFIELD, CA`.
- **Pull quotes.** Playfair italic, large, with a gold left-rule on the longer pulls only.
- **Caption convention.** Photo captions are Inter 13px italic, indented to align with image left edge.

---

## ICONOGRAPHY

**No custom icon system shipped with the brand.** The codebase reference (`cbutleriv/DirtDawgs`) was empty. We do not use emoji or unicode glyphs as decoration.

**Substitution (flagged):** When icons are needed (form affordances, social links, small UI cues), use **Lucide** via CDN — its 1.5px stroke, geometric construction, and editorial neutrality match the prep-school aesthetic better than alternatives like Material Icons or Heroicons (too round) or Feather (too thin). Pinned: `lucide@0.453.0`.

```html
<script src="https://unpkg.com/lucide@0.453.0/dist/umd/lucide.min.js"></script>
<script>lucide.createIcons();</script>
<i data-lucide="arrow-right"></i>
```

**Icon usage rules.**
- Stroke 1.5px, color `currentColor`, size 16 / 20 / 24 only.
- Never gold (icons are utility, not accent).
- Never inside a colored circle. No icon "badges."
- Pair with an Oswald label whenever possible. Never icon-only nav.

**Logos as iconography.** The DD monogram (`assets/logos/dd_monogram.*`) doubles as the favicon and small-space brand mark. The mascot+wordmark (`primary_logo.*`) appears in the footer and on swag, never in the hero or repeated in-page. **Hero treatments use typography, not the logo.**

> **🚩 Open question — please confirm:** Lucide is a substitution. If the program has owned icon assets (or wants Heroicons / Feather / a custom set), let me know and I'll swap.

---

## Font availability

Local font files were **not provided**. The system pulls Playfair Display, Oswald, and Inter from **Google Fonts**. All three are open-source, hosted, and identical to what a self-hosted setup would render.

> **🚩 If you have licensed/owned font files**, drop them in `fonts/` and I'll switch `colors_and_type.css` from `@import` to `@font-face`.

---

## UI Kits

- **`ui_kits/website/`** — Marketing site (homepage, About, Tryouts, Coaches, Footer). Hero typography, section numbering, stat strips, pull quotes, primary CTA, sticky header, footer with verse.

(One product surface. The program does not currently have a mobile app, internal tool, or docs site. If/when those exist, they'd land here as sibling folders.)

---

## How to use this system

If you're a designer or developer working on a Dirt Dawgs surface:

1. Pull `colors_and_type.css` into the page — it sets up all tokens.
2. Reach for the Oswald all-caps label and a Playfair headline first; let body Inter fill in around them.
3. Whitespace is the brand. When in doubt, double the padding.
4. Gold is accent. The moment you flood a section with gold, you've left the brand.
5. Mascot logos belong in the footer and on apparel, not in the hero.

The companion **SKILL.md** lets this folder be loaded as a Claude/Claude Code skill — see that file for invocation.
