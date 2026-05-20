# Website UI Kit — Bakersfield Dirt Dawgs

Marketing site recreation. One-page, click-through prototype demonstrating the brand applied at full fidelity.

## Files

```
ui_kits/website/
├── index.html          ← entry — renders <App />
├── components.jsx      ← all components + page composition
├── styles.css          ← UI-kit-scoped styles (mirrors root tokens)
├── hero-placeholder.svg
└── player-placeholder.svg
```

## What's in it

Single landing page composed of seven sections:

| # | Section | Component |
|---|---|---|
| 01 | Site header (sticky navy) | `<Header />` |
| 02 | Hero (typography over B&W photo) | `<Hero />` |
| 03 | The Program (intro) | `<ProgramIntro />` |
| 04 | The Coaches | `<Coaches />` |
| 05 | The Long Season (stats + pull quote) | `<NumbersAndQuote />` |
| 06 | Tryouts (form, working submit/success) | `<TryoutForm />` |
| 07 | Footer with verse | `<Footer />` |

Smaller atoms also exported:

- `<Eyebrow num="01">Label</Eyebrow>` — editorial section header pattern with hairline.

## Interactions

- **Sticky nav** — header stays pinned on scroll; nav items smooth-scroll to anchors.
- **Tryout form** — fills, validates required fields, submits to an inline success state. Reset button returns to the form.
- **CTAs** — `Request a Tryout` (gold) and `Meet the Coaches` (outline on dark) both wired to nav.

## Placeholders

- **Hero photo** is a stylized SVG placeholder. In production this is a desaturated B&W action shot, full-bleed, with `rgba(11,27,59,0.45)` overlay.
- **Coach photo blocks** are gray-toned silhouettes. Replace with grayscale portrait crops.

## Not recreated

- About page (full body content)
- Schedule / calendar page (would pull USSSA tournament feed)
- Player roster page

The kit demonstrates components and patterns — not a complete site information architecture. Add pages by composing the same atoms.
