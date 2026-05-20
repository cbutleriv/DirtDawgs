import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'What age groups do tryouts cover?',
    a: "We evaluate players for our 10U and 11U/12U rosters. Age eligibility follows USSSA birth-year guidelines — players turning 10, 11, or 12 during the current calendar year are welcome to attend. If you're unsure which group fits your player, include a note in the request form and a coach will confirm before tryout day.",
  },
  {
    q: 'What should my player bring to the tryout?',
    a: 'Full baseball gear: cleats, batting helmet, bat (legal USSSA stamp), glove, and batting and fielding attire. Catchers should bring their own gear if they have it. Water and sunscreen — tryouts are held outdoors. A positive attitude is non-negotiable.',
  },
  {
    q: 'Is there a tryout fee?',
    a: 'There is no fee to attend a tryout. If your player is selected and accepts a roster spot, seasonal dues will be outlined during the player/parent meeting that follows.',
  },
  {
    q: 'How will we find out the tryout date and location?',
    a: 'After submitting your request, Coach Manny or Coach Angel will contact you within 24 hours with the exact date, time, and field address. Tryouts are typically held at local Bakersfield-area fields on weekends.',
  },
  {
    q: "What if my player can't make the scheduled date?",
    a: "Let us know when you submit your request or reply to our follow-up. We schedule tryouts in small groups and can often arrange an alternate session. We don't want scheduling conflicts to be the reason a great player misses out.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  function toggle(i: number) {
    setOpen((prev) => (prev === i ? null : i));
  }

  return (
    <div className="faq-list" role="list">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`faq-item${isOpen ? ' faq-item--open' : ''}`} role="listitem">
            <button
              type="button"
              className="faq-trigger"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              id={`faq-btn-${i}`}
              onClick={() => toggle(i)}
            >
              <span className="faq-q">{item.q}</span>
              <span className="faq-icon" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className="faq-panel"
            >
              <div className="faq-panel-inner">
                <p className="faq-a">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
