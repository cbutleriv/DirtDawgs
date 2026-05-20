import { useState } from 'react';

type Team = 'ALL' | '11U' | '10U';
type Status = 'CONFIRMED' | 'TENTATIVE';

interface Event {
  day: string;
  month: string;
  title: string;
  location: string;
  format: string;
  team: '11U' | '10U' | 'BOTH';
  status: Status;
}

interface PastSeason {
  label: string;
  count: number;
  results: string[];
}

const EVENTS: Event[] = [
  { day: '14', month: 'JUN', title: 'USSSA Summer Classic',      location: 'Fresno, CA',       format: '3-Day', team: '11U',  status: 'CONFIRMED' },
  { day: '28', month: 'JUN', title: 'Valley Open',               location: 'Bakersfield, CA',  format: '2-Day', team: 'BOTH', status: 'CONFIRMED' },
  { day: '12', month: 'JUL', title: 'SoCal Showdown',            location: 'Santa Clarita, CA',format: '3-Day', team: '10U',  status: 'TENTATIVE' },
  { day: '02', month: 'AUG', title: 'Central CA Cup',            location: 'Visalia, CA',      format: '3-Day', team: '11U',  status: 'CONFIRMED' },
  { day: '23', month: 'AUG', title: 'End-of-Summer Invitational',location: 'Bakersfield, CA',  format: '2-Day', team: 'BOTH', status: 'CONFIRMED' },
];

const PAST: PastSeason[] = [
  { label: 'Spring 2025', count: 6, results: ['USSSA Spring Kickoff — 11U Champions', 'Kern County Clash — 11U Runner-Up', 'Valley Open — 10U Champions', 'SoCal Classic — 11U 3rd Place', 'Central CA Showcase — 10U Runner-Up', 'Spring Finale — 11U 2nd Place'] },
  { label: 'Winter 2024', count: 4, results: ['Winter Warm-Up — 11U Champions', 'Desert Classic — 10U 3rd Place', 'New Year Open — 11U Runner-Up', 'MLK Tournament — Both Teams 1st Pool'] },
  { label: 'Fall 2024',   count: 5, results: ['Fall Kickoff — 11U Champions', 'October Classic — 10U Runner-Up', 'Halloween Open — Both Teams Top 4', 'Central Valley Fall — 11U 3rd Place', 'Season Finale — 10U Champions'] },
];

const TABS: { label: string; value: Team }[] = [
  { label: 'All Teams', value: 'ALL' },
  { label: '11U / 12U', value: '11U' },
  { label: '10U',       value: '10U' },
];

function matchesTab(team: Event['team'], tab: Team): boolean {
  if (tab === 'ALL') return true;
  if (team === 'BOTH') return true;
  return team === tab;
}

export default function ScheduleFilter() {
  const [activeTab, setActiveTab] = useState<Team>('ALL');
  const [openPast, setOpenPast] = useState<number | null>(null);

  const filtered = EVENTS.filter((e) => matchesTab(e.team, activeTab));

  function togglePast(i: number) {
    setOpenPast((prev) => (prev === i ? null : i));
  }

  return (
    <>
      {/* Filter tabs */}
      <div className="sched-tabs" role="tablist" aria-label="Filter by team">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.value}
            className={`sched-tab${activeTab === tab.value ? ' sched-tab--active' : ''}`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Upcoming events */}
      <div className="sched-list" role="list">
        {filtered.length === 0 && (
          <p className="sched-empty">No upcoming events for this team.</p>
        )}
        {filtered.map((event, i) => (
          <div key={i} className="sched-row" role="listitem">
            <div className="sched-date" aria-label={`${event.month} ${event.day}`}>
              <span className="sched-day">{event.day}</span>
              <span className="sched-month">{event.month}</span>
            </div>
            <div className="sched-info">
              <h3 className="sched-title">{event.title}</h3>
              <p className="sched-meta">{event.location} · {event.format}</p>
            </div>
            <div className="sched-team-label">{event.team}</div>
            <span className={`sched-status sched-status--${event.status.toLowerCase()}`}>
              {event.status}
            </span>
          </div>
        ))}
      </div>

      {/* Past results accordion */}
      <div className="past-results">
        <div className="past-list">
          {PAST.map((season, i) => {
            const isOpen = openPast === i;
            return (
              <div key={i} className={`past-item${isOpen ? ' past-item--open' : ''}`}>
                <button
                  type="button"
                  className="past-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`past-panel-${i}`}
                  onClick={() => togglePast(i)}
                >
                  <span className="past-label">{season.label} — {season.count} tournaments</span>
                  <span className="past-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div
                  id={`past-panel-${i}`}
                  className="past-panel"
                  role="region"
                >
                  <div className="past-panel-inner">
                    <ul className="past-results-list">
                      {season.results.map((r, j) => (
                        <li key={j} className="past-result-item">{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
