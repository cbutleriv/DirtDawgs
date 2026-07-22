import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── Roster players ──────────────────────────────────────────────
// One file per player, grouped into a team on the team-detail pages.
// Headshots are optional — a player with no photo falls back to the
// placeholder (headshots get uploaded through the /admin CMS).
const players = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/players' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      number: z.string(),
      positions: z.array(z.string()).default([]),
      team: z.enum(['10u', '11u']),
      headshot: image().optional(),
      order: z.number().default(0),
    }),
});

// ── Gallery photos ──────────────────────────────────────────────
// One file per photo. `category` drives the filter chips; `tags` is
// optional freeform extra labeling.
const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      alt: z.string(),
      caption: z.string().default(''),
      category: z.enum(['GAMES', 'PRACTICE', 'TEAM', 'BTS']).default('GAMES'),
      tags: z.array(z.string()).default([]),
      order: z.number().default(0),
    }),
});

// ── Sponsors ────────────────────────────────────────────────────
// Tiered by donation size. `logo` is optional — individuals/donors
// without a logo render as a name card. `amount` is internal (drives
// ordering / not shown publicly).
const sponsors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sponsors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tier: z.enum(['lead', 'gold', 'silver', 'community']),
      amount: z.number().optional(),
      logo: image().optional(),
      url: z.string().url().optional(),
      order: z.number().default(0),
    }),
});

export const collections = { players, gallery, sponsors };
