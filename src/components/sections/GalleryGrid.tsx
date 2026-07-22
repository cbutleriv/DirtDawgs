import { useState } from 'react';

type Category = 'ALL' | 'GAMES' | 'PRACTICE' | 'TEAM' | 'BTS';

export interface Photo {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<Category, 'ALL'>;
}

const CHIPS: { label: string; value: Category }[] = [
  { label: 'All',               value: 'ALL'      },
  { label: 'Games',             value: 'GAMES'    },
  { label: 'Practice',          value: 'PRACTICE' },
  { label: 'Team',              value: 'TEAM'     },
  { label: 'Behind the Scenes', value: 'BTS'      },
];

const PAGE_SIZE = 12;

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<Category>('ALL');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'ALL' ? photos : photos.filter((p) => p.category === active);
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

      {/* Photo count */}
      <p className="gallery-stat">{photos.length} Photos · Season 2026</p>

      {/* Masonry grid */}
      <div className="gallery-masonry" role="list">
        {shown.map((photo, i) => (
          <button
            key={`${photo.alt}-${i}`}
            type="button"
            className="gallery-item"
            onClick={() => openLightbox(i)}
            aria-label={`Open photo: ${photo.alt}`}
            role="listitem"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="gallery-img"
            />
            <div className="gallery-caption" aria-hidden="true">
              <p className="gallery-caption-text">{photo.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Empty state */}
      {shown.length === 0 && (
        <div className="gallery-empty">
          <p className="gallery-empty-text">More photos coming soon.</p>
        </div>
      )}

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
