import { useState } from 'react';

type Category = 'ALL' | 'GAMES' | 'PRACTICE' | 'TEAM' | 'BTS';

interface Photo {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<Category, 'ALL'>;
  height: number;
}

const PHOTOS: Photo[] = [
  { src: '/images/hero-placeholder.svg', alt: 'Dirt Dawgs infield play',           caption: 'Double play in the making — Valley Open, June 2025.',           category: 'GAMES',    height: 260 },
  { src: '/images/hero-placeholder.svg', alt: 'Pre-game warmup',                    caption: 'Morning warmup before the opener.',                             category: 'PRACTICE', height: 180 },
  { src: '/images/hero-placeholder.svg', alt: 'Team dugout',                        caption: 'The bench during the Spring Classic.',                          category: 'TEAM',     height: 320 },
  { src: '/images/hero-placeholder.svg', alt: 'Pitching delivery',                  caption: 'Starting pitcher, top of the third.',                          category: 'GAMES',    height: 220 },
  { src: '/images/hero-placeholder.svg', alt: 'Coach Manny with players',           caption: 'Coach Manny on the mound during practice.',                    category: 'PRACTICE', height: 240 },
  { src: '/images/hero-placeholder.svg', alt: 'Team photo — 11U',                   caption: 'Dirt Dawgs 11U — end of season portrait.',                     category: 'TEAM',     height: 300 },
  { src: '/images/hero-placeholder.svg', alt: 'Slide into home plate',              caption: 'Safe at home — Central CA Cup, August.',                       category: 'GAMES',    height: 180 },
  { src: '/images/hero-placeholder.svg', alt: 'Batting practice',                   caption: 'Taking cuts before the game.',                                 category: 'PRACTICE', height: 280 },
  { src: '/images/hero-placeholder.svg', alt: 'Parents and families in the stands', caption: 'The Dirt Dawgs family showing up.',                            category: 'BTS',      height: 220 },
  { src: '/images/hero-placeholder.svg', alt: 'Trophy after championship win',      caption: 'Valley Spring Classic — champions.',                           category: 'GAMES',    height: 340 },
  { src: '/images/hero-placeholder.svg', alt: 'Fielding drill',                     caption: 'Ground ball repetitions — early morning session.',             category: 'PRACTICE', height: 200 },
  { src: '/images/hero-placeholder.svg', alt: '10U team photo',                     caption: 'Dirt Dawgs 10U — Kern County Showcase.',                       category: 'TEAM',     height: 260 },
  { src: '/images/hero-placeholder.svg', alt: 'Coach Angel with player',            caption: 'One-on-one mechanics work with Coach Angel.',                  category: 'PRACTICE', height: 180 },
  { src: '/images/hero-placeholder.svg', alt: 'Post-game celebration',              caption: 'After the W — SoCal Showdown, July.',                         category: 'BTS',      height: 300 },
  { src: '/images/hero-placeholder.svg', alt: 'Batter at the plate',               caption: 'Clean swing — End-of-Summer Invitational.',                   category: 'GAMES',    height: 220 },
  { src: '/images/hero-placeholder.svg', alt: 'Team meal',                          caption: 'Dinner the night before a tournament. Part of the culture.',   category: 'BTS',      height: 260 },
];

const CHIPS: { label: string; value: Category }[] = [
  { label: 'All',               value: 'ALL'      },
  { label: 'Games',             value: 'GAMES'    },
  { label: 'Practice',          value: 'PRACTICE' },
  { label: 'Team',              value: 'TEAM'     },
  { label: 'Behind the Scenes', value: 'BTS'      },
];

const PAGE_SIZE = 12;

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>('ALL');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'ALL' ? PHOTOS : PHOTOS.filter((p) => p.category === active);
  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  function openLightbox(i: number) { setLightbox(i); }
  function closeLightbox() { setLightbox(null); }
  function prev() { setLightbox((n) => (n !== null ? Math.max(0, n - 1) : null)); }
  function next() { setLightbox((n) => (n !== null ? Math.min(shown.length - 1, n + 1) : null)); }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  }

  function loadMore() {
    setVisible((v) => Math.min(v + PAGE_SIZE, filtered.length));
  }

  return (
    <>
      {/* Filter chips */}
      <div className="gallery-chips" role="group" aria-label="Filter gallery by category">
        {CHIPS.map((chip) => (
          <button
            key={chip.value}
            type="button"
            className={`gallery-chip${active === chip.value ? ' gallery-chip--active' : ''}`}
            aria-pressed={active === chip.value}
            onClick={() => { setActive(chip.value); setVisible(PAGE_SIZE); }}
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="gallery-masonry" role="list">
        {shown.map((photo, i) => (
          <button
            key={`${photo.alt}-${i}`}
            type="button"
            className="gallery-item"
            style={{ '--img-height': `${photo.height}px` } as React.CSSProperties}
            onClick={() => openLightbox(i)}
            aria-label={`Open photo: ${photo.alt}`}
            role="listitem"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="gallery-img"
              style={{ height: photo.height }}
            />
            <div className="gallery-caption" aria-hidden="true">
              <p className="gallery-caption-text">{photo.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="gallery-load-wrap">
          <button type="button" className="gallery-load-btn" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          onClick={closeLightbox}
          onKeyDown={onKeyDown}
          tabIndex={-1}
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              aria-label="Close"
              onClick={closeLightbox}
            >
              ✕
            </button>
            <button
              type="button"
              className="lightbox-nav lightbox-nav--prev"
              aria-label="Previous photo"
              onClick={prev}
              disabled={lightbox === 0}
            >
              ‹
            </button>
            <img
              src={shown[lightbox].src}
              alt={shown[lightbox].alt}
              className="lightbox-img"
            />
            <button
              type="button"
              className="lightbox-nav lightbox-nav--next"
              aria-label="Next photo"
              onClick={next}
              disabled={lightbox === shown.length - 1}
            >
              ›
            </button>
            {shown[lightbox].caption && (
              <p className="lightbox-caption">{shown[lightbox].caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
