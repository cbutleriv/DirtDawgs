# Handoff: Bakersfield Dirt Dawgs — Marketing Website

## Overview

Build the full marketing website for the **Bakersfield Dirt Dawgs**, a youth travel-baseball program (USSSA circuit) based in Bakersfield, CA. The site has 8 pages: Home, About, Teams (landing), Team Detail, Schedule, Gallery, Sponsors, Tryouts, and Contact. The primary business goal is **tryout requests** — every primary CTA on every page funnels to the Tryouts page form.

The brand voice is **prep-school editorial**, intentionally restrained. References: Vanderbilt Baseball, IMG Academy, Stanford Athletics. *Not* loud travel-ball energy.

---

## About the design files

The HTML files in `wireframes/` are **design references**, not production code to copy. They are **low-fidelity wireframes** — grayscale boxes and placeholder text on a sketchy paper background — that establish layout, hierarchy, content placement, section ordering, and user flow.

Your job is **not** to ship the wireframe HTML. Your job is to **recreate these layouts in a real codebase**, styled with the brand's actual design system (`design_system/`).

If no codebase exists yet, the recommended stack is **Next.js (App Router) + Tailwind CSS**, deployed on Vercel — it's the path of least resistance for a content-led marketing site with one form. If a stack is already chosen, follow it.

---

## Fidelity

**Low-fidelity wireframes.** Use them as a guide for:

- Layout and grid structure
- Section ordering (numbered 01, 02, 03… in the wireframes — preserve this order)
- Content blocks and what goes in each
- Component types (cards, lists, accordions, forms)
- Annotations in red marker indicate interaction behavior

Use the **Dirt Dawgs Design System** (`design_system/`) for *all* visual styling — colors, typography, spacing, dividers, buttons, hover states. Do not invent visual values.

---

## Sitemap & routes

| Route                | Page                  | Notes                                                 |
|----------------------|-----------------------|-------------------------------------------------------|
| `/`                  | Home                  | Mobile layout also wireframed                         |
| `/about`             | About                 |                                                       |
| `/teams`             | Teams landing         |                                                       |
| `/teams/11u`         | Team Detail           | Template — repeat for `/teams/10u` etc.               |
| `/schedule`          | Schedule              | Filterable by team                                    |
| `/gallery`           | Gallery               | Masonry, filterable by category                       |
| `/sponsors`          | Sponsors              | Tiered                                                |
| `/tryouts`           | Tryouts               | **Primary CTA destination** — form is the main asset  |
| `/contact`           | Contact               |                                                       |

---

## Global elements (every page)

### Sticky top nav

- **Logo** far left — use `design_system/assets/logos/primary_logo.svg` (mascot + wordmark), or `dd_monogram.svg` for tight spaces
- **Center/right links** in Oswald all-caps, tracked +0.18em, 11–12px: HOME · ABOUT · TEAMS · SCHEDULE · GALLERY · SPONSORS · CONTACT
- **Primary CTA** far right: `REQUEST A TRYOUT` button (filled navy, off-white text, 2px radius) → links to `/tryouts`
- Solid navy on scroll — **do not** make it translucent or apply backdrop-blur
- Mobile: logo + tryout CTA + hamburger; full link list collapses into a drawer

### Footer

Four columns on desktop, two on mobile:

1. **Brand** — primary logo + short program description
2. **Explore** — repeat nav links
3. **Program** — secondary links (Coaches, History, FAQ if/when those exist)
4. **Contact** — phone, general email, social icons (Instagram, Facebook, YouTube)

Bottom row: scripture verse line in Playfair italic, off-white-on-navy, 13–14px:

> *"Whatever you do, work at it with all your heart." — Colossians 3:23*

Right side: `© 2026 BAKERSFIELD DIRT DAWGS` in Oswald all-caps, 10px tracked.

Background: navy. Dividers: hairline white at 14% opacity.

---

## Page-by-page structure

For each page below, sections are numbered to match the wireframes. Preserve the numbering and order; the design system's "section number" motif (Oswald 13px in gold, e.g. `— 01`) is part of the editorial vocabulary.

### Home (`/`)

01. **Hero** — full-bleed B&W action photo with navy overlay (`rgba(11,27,59,0.45)`). Off-white type on top.
    - H1 (Playfair, `clamp(56px, 9vw, 144px)`): "More Than a Game."
    - Tagline: "Built in the Dirt. Grounded in Faith."
    - Primary CTA: `REQUEST A TRYOUT` → `/tryouts`
    - Secondary text link: `LEARN ABOUT US →` → `/about`
02. **Mission excerpt** — cream-background section, large pull-quote, link "Read full mission" → `/about`
03. **Two-team showcase** — side-by-side cards: 11U/12U and 10U. Each: team photo, coach name (Playfair italic), age label (Oswald), `VIEW TEAM →` link.
04. **Faith band** — dark navy section, single line of scripture in Playfair italic, centered, ~24px. No banners, no badges.
05. **Recent gallery teaser** — 4-image grid, `VIEW GALLERY →` link → `/gallery`
06. **Sponsors strip** — single row of logo placeholders, link `SEE ALL SPONSORS →` → `/sponsors`
07. Footer

**Mobile**: same content order, single-column. Hero photo shrinks to 9:12. Two-team cards stack.

### About (`/about`)

01. Page header — eyebrow "ABOUT THE PROGRAM" + H1 "Built in the Dirt."
02. Full mission — large editorial pull-quote on cream, gold left-rule
03. Five-pillar grid (5 cols desktop, 2 mobile): Faith / Discipline / Accountability / Confidence / Hard Work, numbered 01–05 in gold Oswald, each with a Playfair italic title and a short Inter paragraph
04. Coach bios — two cards side-by-side on cream: Manny Guzman (11U/12U) and Angel Montano (10U). Each: headshot (4:5), label, italic name, body paragraph
05. "Bigger Than the Game" — subtle faith section, two-column: italic headline left, scripture pull-quote right with gold left-rule
06. CTA band — dark navy, centered: "Ready to be a Dirt Dawg?" + `REQUEST A TRYOUT`
07. Footer

### Teams landing (`/teams`)

01. Header — "OUR TEAMS" eyebrow + "Two Teams. One Standard."
02. Two large team cards (50/50): 11U with `RISING TO 12U` pill badge, 10U with `TRYOUTS OPEN` pill badge. Each: team photo, coach line, age/circuit metadata in Oswald, `VIEW ROSTER →` button
03. Program standards band — cream, centered, single italic paragraph
04. Footer

### Team Detail (`/teams/11u`) — repeat template for each team

01. Hero band — team photo (B&W), gradient overlay, age label · circuit · location (Oswald bullet-separated), team name (Playfair), coach name (Playfair italic, smaller)
02. Stats row — 4 columns: Founded year, Circuit, Season record, Player count. Large Playfair italic stat (~48px), Oswald label (~10px tracked)
03. Coach card — cream background, headshot left (1/3), bio right (2/3): italic name, Oswald label, hairline divider, body paragraphs
04. Roster grid — 12 player cards in 3 columns: photo placeholder (4:5), jersey number in Playfair italic, name in Oswald, position in tracked Oswald 9px. Cards have hairline border, no rounding.
05. Season highlights — 3-column editorial: photo + date eyebrow + italic title + paragraph
06. CTA band — dark navy, tryout button
07. Footer

### Schedule (`/schedule`)

01. Header — "SCHEDULE" + "The Road Ahead."
02. Filter tabs — `ALL TEAMS` / `11U / 12U` / `10U`. Underline active tab in gold (2px). Tabs in Oswald 10px.
03. Upcoming tournaments — **editorial list view, not boxy cards.** Each row is a 5-column grid:
    - Date: large Playfair italic day number (~36px) + Oswald month abbreviation
    - Tournament name (Playfair italic ~22px) + location/format (Oswald label)
    - Circuit badge (pill: "USSSA")
    - Team (Oswald)
    - Status (outlined pill: CONFIRMED / TENTATIVE)
    - 1px bottom divider between rows
04. Past results — collapsed accordion grouped by season; expanding inlines the result list (no modal)
05. CTA band — dark navy, centered: "Follow us on Instagram for live updates" + handle button
06. Footer

### Gallery (`/gallery`)

01. Header — "GALLERY" + "Moments in the Dirt."
02. Filter chips — `ALL` / `GAMES` / `PRACTICE` / `TEAM` / `BEHIND THE SCENES`. Active chip = filled navy. Chips in Oswald 10px, hairline border, no rounding past 0.
03. Masonry grid — CSS columns or library like react-masonry-css. Photos full color, slight warm contrast lift. Hover: 1px navy border + caption fades in.
04. `LOAD MORE` button — secondary variant (off-white fill, 1.5px navy border)
05. Footer

### Sponsors (`/sponsors`)

01. Header — "SPONSORS" + "Partners in the Program."
02. **Lead Partners** (formerly "Gold Tier") — 2 large logo cards, 16:9
03. **Program Supporters** (formerly "Silver Tier") — 4 medium logo cards, cream background, 5:3
04. **Community** — 6 small logos in a row, 3:2
05. "Become a Sponsor" CTA — dark navy section, two-column: left has italic headline + paragraph; right has 3 numbered benefits + `CONTACT US` button
06. Footer

> Tier names are placeholders. Confirm with stakeholder before shipping.

### Tryouts (`/tryouts`) — **PRIMARY CTA DESTINATION**

01. Hero — eyebrow `TRYOUTS OPEN` (in gold), H1 "Request a Tryout.", subhead in Playfair italic ("Two Saturdays this fall. Bring a glove and a parent.")
02. Two tryout info cards (cream section, hairline-bordered): each shows Date (Playfair italic), Time, Location, What to Bring, Coach name. Use a definition-list pattern (key in Oswald label / value in Inter)
03. **Registration form** — the conversion event. Two-column field grid:

    | Field         | Type     | Required |
    |---------------|----------|----------|
    | Player Name   | text     | ✓        |
    | Date of Birth | date     | ✓        |
    | Position(s)   | multi-select (up to 3) | ✓ |
    | Current Team  | text     |          |
    | Parent Name   | text     | ✓        |
    | Phone         | tel      | ✓        |
    | Email         | email (full-width) | ✓ |
    | Message       | textarea (full-width, ~96px min) | |

    Submit button: filled navy primary, Oswald `SUBMIT REQUEST`. On success: replace form DOM with thank-you state ("We'll be in touch within 24h."). Email both coaches via server action / API route.

    Field styling: 1px hairline border, no radius (or 2px max), Inter 14px. Labels in Oswald 9–10px tracked above each field. Error state: 1.5px marker-red border + Inter 12px error message below.

04. "What to Expect" — cream, 3-step section: STEP 01 / 02 / 03, each with italic title + paragraph
05. FAQ accordion — 4–5 questions. Only one open at a time; smooth height transition (220ms `cubic-bezier(0.2, 0.7, 0.2, 1)`). Plus glyph rotates/morphs to minus.
06. Footer

### Contact (`/contact`)

01. Header — "CONTACT" + "Get in Touch."
02. Two-column layout:
    - **Left — Directory** (definition-list style): coach emails by team, sponsorship email, general email, phone, social pills
    - **Right — Inquiry form**: Name, Email, Reason (select: General / Sponsorship / Press / Other), Message, `SEND MESSAGE` button. Helper text directs tryout requests to the tryout form.
03. Map placeholder — full-bleed wide aspect ratio (~24:7). Use Google Maps embed or Mapbox static image of Centennial Park, Bakersfield. Desaturate to match B&W hero aesthetic if possible.
04. Footer

---

## Interactions & behavior

### Navigation
- Logo in nav links to `/`
- All primary CTAs (`REQUEST A TRYOUT`) link to `/tryouts`
- Mobile nav: hamburger opens full-screen drawer with same links + CTA at bottom
- Active route: 1px gold underline under current nav item (subtle, not loud)

### Buttons
- **Primary**: filled navy → darkens to `--color-navy-90` on hover. 60ms color flicker to `--color-navy-80` on press. **No scale, no shadow growth.**
- **Secondary**: 1.5px navy border, off-white fill → background goes to cream on hover
- **Tertiary/link**: Oswald all-caps with 1px navy underline → opacity 0.7 on hover (no underline change)

### Cards (clickable team cards, sponsor cards)
- Hairline border darkens to navy on hover
- Tiny shadow appears: `0 1px 8px rgba(11,27,59,0.08)`

### Forms
- Field focus: 1.5px navy border (was 1px), no glow
- Inline validation on blur. Submit-time validation surfaces error messages under each invalid field.
- Required fields marked with `*` in the label, not a red asterisk

### Animations
Three durations only: **140ms / 220ms / 420ms**. Easing: `cubic-bezier(0.2, 0.7, 0.2, 1)`. Quiet entrance animations on scroll (fade + 12px translate-up) are acceptable but optional — the editorial style is mostly still. **No parallax, no bounces, no springs.**

### Schedule filters
- Client-side filtering (no route change). Update tab underline + visible rows.
- Empty state: italic "No upcoming tournaments for this team." in Playfair, centered.

### Gallery
- Filter chips client-side
- Click a photo → lightbox overlay (navy 95% with backdrop-blur, arrow nav, ESC closes, body scroll lock)
- `LOAD MORE` paginates ~12 images per click

### FAQ accordion (Tryouts)
- Only one row open at a time
- Height transition 220ms
- Plus → minus glyph transition

---

## State management

Lightweight. Most pages are static. The only real state surfaces:

- **Schedule** — active filter (`'all' | '11u-12u' | '10u'`)
- **Gallery** — active filter chip + loaded-image-count
- **Tryouts FAQ** — currently-open accordion index
- **Tryouts form** — react-hook-form or Conform + Zod for validation; submission state (`idle | submitting | success | error`)
- **Contact form** — same pattern as tryouts form
- **Mobile nav** — open/closed boolean

No client-side data fetching is required for v1. The roster, schedule, and sponsor data can be flat content (MDX, JSON, or hard-coded TS objects) until a CMS is needed.

---

## Form submission (backend)

The tryout form is the only mission-critical conversion surface. Recommended:

- **Next.js Server Action** that:
    1. Validates the payload (Zod)
    2. Sends an email to both coaches via Resend / Postmark / SendGrid
    3. Optionally writes to a Google Sheet or Airtable for backup
    4. Returns success/error to the client
- Add a honeypot field + basic rate limit (e.g. Upstash) to keep spam out
- The contact form can route through the same handler with a different `reason` field

---

## Design tokens

All tokens live in `design_system/colors_and_type.css`. The high-impact ones:

### Colors

| Token              | Hex       | Role                                              |
|--------------------|-----------|---------------------------------------------------|
| `--color-navy`     | `#0B1B3B` | Primary surface, ink on light                     |
| `--color-gold`     | `#E8B53D` | Accent **only** — CTA, section numbers, hairlines |
| `--color-offwhite` | `#FAFAF7` | Page background                                   |
| `--color-cream`    | `#F5EFE0` | Alternating section background                    |
| `--color-black`    | `#0A0A0A` | Photo backings, ultra-dark headers                |
| `--divider`        | `#D8D4C7` | 1px hairline on cream                             |
| `--divider-w`      | `#E6E6E1` | 1px hairline on off-white                         |
| `--divider-d`      | `rgba(255,255,255,0.14)` | Hairline on navy                   |

**Gold budget: <5% of any screen.** It goes on the primary CTA, section numbers (`01`, `02`), and at most one hairline accent per section. Never as a flood color, never on icons.

### Typography

- **Playfair Display** (Google Fonts) — display, H1–H4. Italic for editorial accent.
- **Oswald** (Google Fonts) — ALL CAPS labels, stats, nav, buttons, section numbers. Always tracked `+0.18em`.
- **Inter** (Google Fonts) — body, captions, forms. 17px body on desktop, 15px mobile.

Display sizes: `clamp(56px, 9vw, 144px)`. **No monospace family** is in use.

### Spacing

8-point base with editorial macro-steps: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192`.

- Section vertical padding: **96px minimum, 128px ideal**, never less than 64px
- Container max-width: **1200px**
- Gutters: fluid 20–64px

### Radii

`0` (default) · `2px` · `4px` · `999px` (pill labels only). **Cards default to 0 radius** — framed by hairlines.

### Shadows

Functionally absent. Cards: `0 1px 0 rgba(11,27,59,0.06)`. Hover: `0 8px 16px rgba(11,27,59,0.08)`. **No glows, no double shadows, no inner shadows, no colored shadows.**

### Motion

`140ms` (micro) · `220ms` (default) · `420ms` (entrance). Easing: `cubic-bezier(0.2, 0.7, 0.2, 1)`.

---

## Imagery direction

- **Heroes**: desaturated B&W action photos, cinematic, slight grain ok. Apply navy overlay `rgba(11,27,59,0.45)` flat (no backdrop-blur).
- **Galleries**: full color, warm-leaning, slight contrast lift
- **Crops**: tight on hands, dirt, faces, gear — not full-field overviews
- **People**: kids in motion, not posed lineups

For v1, expect placeholder photos. The design system ships `hero-placeholder.svg` and `player-placeholder.svg` for development. Real photography will be supplied by the program.

---

## Iconography

Use **Lucide React** (`lucide-react`, pinned to `0.453.0`). Strokes: 1.5px, color: `currentColor`, sizes: 16 / 20 / 24 only. Never gold. Never inside a colored circle. Always paired with an Oswald label — never icon-only nav.

Social icons in footer: `Instagram`, `Facebook`, `Youtube` from Lucide, 20px, white at 60% opacity.

**No emoji. Anywhere. Ever.**

---

## Content & voice rules (binding)

These are not aesthetic preferences — they're brand. Hard-coded copy in the codebase must follow these:

### Casing
- Headlines: **Title Case** with period — "More Than a Game."
- Eyebrows/stats/nav/buttons: **ALL CAPS** Oswald, tracked +0.18em
- Body: sentence case
- Section numbers: two-digit ("01", never "1." or "#1")

### Punctuation
- Periods at end of marketing headlines
- Em-dashes for breath
- **No exclamation points, ever**
- No ellipses, no parens in body, no emoji

### Voice
- First-person plural ("we coach the fundamentals")
- Confident, low-volume — like a coach who's been doing this 20 years
- Short sentences

### Words we DON'T use
> elite · next-level · grind · beast mode · dawg up · baseball IQ · locked in · hardware · ship 'em · savages · blue chip · exposure

If any placeholder copy slips into the build with those words, replace it.

### Words we lean on
> develop · fundamentals · character · work · discipline · ground game · the dirt · the long season · the program · players · kids · families

### Faith
- One scripture line in the footer (Colossians 3:23)
- One paragraph on About page
- **No crosses, no banners, no "Christian baseball" labels anywhere else**

---

## Accessibility

- All interactive elements keyboard-reachable; visible 1.5px navy focus ring (or `2px solid currentColor` with `outline-offset: 2px`)
- Form labels associated with inputs (`<label for>` or wrapping)
- Color contrast: navy on off-white is 14.8:1 ✓ — well above AA. Gold on navy is 6.4:1 ✓. Do not use gold on cream (insufficient contrast for body text).
- Hero overlay ensures off-white text on hero photos meets AA against the darkened image
- Accordion: ARIA `aria-expanded` on triggers, `aria-controls` for panels
- Mobile nav drawer: trap focus, ESC to close

---

## Performance & SEO

- Next.js Image for all photography (AVIF/WebP, blur placeholder)
- Static generation for all 8 pages; ISR not needed at this scale
- Open Graph tags per page (use generated OG images with the brand logo + page title in Playfair)
- Per-page `<title>` and `<meta description>`. Format: `<Page> · Bakersfield Dirt Dawgs`
- `robots.txt` allow-all, sitemap from Next.js
- Lighthouse target: 95+ all four categories

---

## Files in this bundle

```
design_handoff_dirt_dawgs_website/
├── README.md                              ← this file
├── wireframes/
│   ├── Dirt Dawgs Wireframes.html         ← open this in a browser; sidebar
│   │                                        switches between all 8 pages
│   ├── wireframes.css
│   └── wireframes.js
└── design_system/
    ├── README.md                          ← full design system spec
    ├── colors_and_type.css                ← all tokens, CSS custom properties
    ├── assets/
    │   └── logos/                         ← 5 logo variants (PNG + SVG)
    │       ├── primary_logo.{svg,png}     ← mascot + wordmark (footer, apparel)
    │       ├── dd_monogram.{svg,png}      ← tight-space mark, favicon
    │       ├── dark_bg_logo.{svg,png}
    │       ├── black_bg_logo.{svg,png}
    │       └── splatter_logo.{svg,png}
    └── ui_kit_reference/                  ← HTML/JSX reference implementation
        ├── index.html                     ← marketing-site reference
        ├── styles.css
        ├── components.jsx
        ├── hero-placeholder.svg
        └── player-placeholder.svg
```

The `ui_kit_reference/` folder is a **reference build**, not a starter template. It shows the typography, hero, section numbering, stat strip, pull quote, primary CTA, sticky header, and footer-with-verse all working together in clean HTML/JSX. Read it to internalize the visual vocabulary; don't ship it.

---

## Suggested implementation order

1. **Scaffold** — Next.js App Router + Tailwind + lucide-react + react-hook-form + Zod. Set up Tailwind theme to mirror the tokens in `colors_and_type.css` (or import that file directly as a `@layer base`).
2. **Build globals** — `<Nav>`, `<Footer>`, layout wrapper, scripture line. Lift fonts via `next/font` (Playfair Display, Oswald, Inter).
3. **Build atoms** — `<Button>` (primary/secondary/link), `<Pill>`, `<SectionNumber>`, `<Eyebrow>`, `<PullQuote>`, `<StatStrip>`, `<HairlineDivider>`.
4. **Tryouts page first** — it's the conversion event. Get the form wired end-to-end with email delivery before building other pages.
5. **Home** — hero is the highest-leverage layout; nail it next.
6. **Remaining pages in any order**: About, Teams landing, Team Detail, Schedule, Gallery, Sponsors, Contact.
7. **Polish pass** — hover states, focus rings, animations, OG images, Lighthouse audit.

---

## Open questions for the stakeholder

These are unresolved from the wireframing phase. Confirm before shipping:

1. **Sponsor tier names** — wireframe uses "Lead Partners / Program Supporters / Community". Brief originally said "Gold / Silver / Community". Pick one direction.
2. **Real coach bios + headshots** — placeholders only in wireframes.
3. **Tournament data source** — hard-coded in code for v1? Or CMS (Sanity / Contentful)?
4. **Roster source** — same question. 12 players × 2 teams is small enough for hard-coded TS, but it'll change between seasons.
5. **Photography** — when does real B&W hero and color gallery photography arrive?
6. **Form submission target** — confirm email service (Resend recommended) and which addresses the tryout form should notify.
7. **Map embed** — Google Maps free tier or Mapbox? Either works.
8. **Analytics** — Plausible? GA4? Nothing?
#   D i r t D a w g s  
 