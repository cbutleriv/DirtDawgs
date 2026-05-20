import { useState } from 'react';

interface Pillar {
  num: string;
  title: string;
  teaser: string;
  body: string;
}

interface Props {
  pillars: readonly Pillar[];
}

export default function PillarsAccordion({ pillars }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  function toggle(i: number) {
    setOpen((prev) => (prev === i ? null : i));
  }

  return (
    <div className="pillars-grid">
      {pillars.map((pillar, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`pillar${isOpen ? ' pillar--open' : ''}`}>
            <button
              type="button"
              className="pillar-trigger"
              aria-expanded={isOpen}
              aria-controls={`pillar-panel-${i}`}
              id={`pillar-btn-${i}`}
              onClick={() => toggle(i)}
            >
              <span className="pillar-num">{pillar.num}</span>
              <span className="pillar-title">{pillar.title}</span>
              <span className="pillar-indicator" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <p className="pillar-teaser">{pillar.teaser}</p>
            <div
              id={`pillar-panel-${i}`}
              role="region"
              aria-labelledby={`pillar-btn-${i}`}
              className="pillar-panel"
            >
              <div className="pillar-panel-inner">
                <p className="pillar-body">{pillar.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
