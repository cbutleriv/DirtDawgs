/* global React */
const { useState } = React;

/* ============================================================
   Dirt Dawgs Marketing — components (single file UI kit demo).
   All components exported to window so other scripts can use.
   ============================================================ */

function Eyebrow({ num, children }) {
  return (
    <div className="eyebrow">
      {num && <span className="num">{num}</span>}
      <span className="line"></span>
      <span className="label">{children}</span>
    </div>
  );
}

function Header({ active, onNav }) {
  const nav = [
    { id: "home",     label: "Program" },
    { id: "coaches",  label: "Coaches" },
    { id: "stats",    label: "Teams" },
    { id: "tryouts",  label: "Tryouts" },
  ];
  return (
    <header className="site-header" data-screen-label="01 Site header">
      <div className="container inner">
        <a className="site-brand" href="#" onClick={(e) => { e.preventDefault(); onNav("home"); }}>
          <img className="mark" src="../../assets/logos/dd_monogram.png" alt="" />
          <span className="wordmark">Dirt Dawgs</span>
        </a>
        <nav className="site-nav">
          {nav.map((n) => (
            <a
              key={n.id}
              href={"#" + n.id}
              className={active === n.id ? "active" : ""}
              onClick={(e) => { e.preventDefault(); onNav(n.id); }}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button className="btn gold" onClick={() => onNav("tryouts")}>
          Request a Tryout
        </button>
      </div>
    </header>
  );
}

function Hero({ onNav }) {
  return (
    <section className="hero" data-screen-label="02 Hero">
      <div className="photo"></div>
      <div className="veil"></div>
      <div className="container">
        <div className="meta">
          <span>BAKERSFIELD DIRT DAWGS</span>
          <span className="dot"></span>
          <span>USSSA</span>
          <span className="dot"></span>
          <span>EST. 2022</span>
        </div>
        <h1 className="h-display title">More Than<br />a Game.</h1>
        <p className="tagline">
          Built in the dirt. Grounded in faith. A youth travel-baseball program
          developing players — and people — in Bakersfield, California.
        </p>
        <div className="cta-row">
          <button className="btn gold" onClick={() => onNav("tryouts")}>
            Request a Tryout
          </button>
          <button className="btn secondary on-dark" onClick={() => onNav("coaches")}>
            Meet the Coaches
          </button>
        </div>
      </div>
    </section>
  );
}

function ProgramIntro() {
  return (
    <section className="section" id="program" data-screen-label="03 Program intro">
      <div className="container">
        <Eyebrow num="01">The Program</Eyebrow>
        <div className="intro" style={{ marginTop: 48 }}>
          <p className="lead">
            We're a development program first. We coach the fundamentals
            — footwork, throws, plate discipline — and we let the wins
            <em> follow the work.</em>
          </p>
          <div className="copy body">
            <p>
              The Bakersfield Dirt Dawgs run year-round on the USSSA circuit.
              Our 11U team — rising to 12U — has been together since 2022.
              A 10U team is forming for the next season.
            </p>
            <p>
              Practice is in the dirt, not the marketing copy. We don't sell
              showcases or hardware. We coach baseball, and we coach the
              kind of players parents are glad to bring home.
            </p>
            <a href="#coaches" className="btn-link" style={{ marginTop: 12 }}>
              Meet the Coaches →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Coaches() {
  const data = [
    {
      num: "01", team: "11U TEAM · COACH",
      name: "Manny Guzman",
      bio: "Program founder. Twelve years coaching Bakersfield baseball, with a focus on infield mechanics and approach at the plate.",
    },
    {
      num: "02", team: "10U TEAM · FORMING",
      name: "Angel Montano",
      bio: "Fourth season in travel ball. Builds practices around catch quality, base running, and the kind of small habits that win one-run games.",
    },
  ];
  return (
    <section className="section cream" id="coaches" data-screen-label="04 Coaches">
      <div className="container">
        <Eyebrow num="02">The Coaches</Eyebrow>
        <h2 className="h1" style={{ marginTop: 24, maxWidth: 720 }}>
          Two coaches.<br />
          <span className="italic">A long view.</span>
        </h2>
        <div className="coaches">
          {data.map((c, i) => (
            <article className="coach" key={i}>
              <div className="role">
                <span className="num">{c.num}</span>
                <span className="team">{c.team}</span>
              </div>
              <hr className="hr" />
              <div style={{ paddingTop: 18 }}>
                <h3 className="name">{c.name}</h3>
                <p className="bio">{c.bio}</p>
              </div>
              <div className="photo" role="img" aria-label="Coach portrait placeholder"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NumbersAndQuote() {
  return (
    <section className="section navy" id="stats" data-screen-label="05 Numbers + quote">
      <div className="container">
        <Eyebrow num="03">The Long Season</Eyebrow>
        <div className="stats">
          <div className="stat"><div className="num">28</div><div className="label">Games played</div></div>
          <div className="stat"><div className="num">12</div><div className="label">Tournaments</div></div>
          <div className="stat"><div className="num">2</div><div className="label">Teams</div></div>
          <div className="stat"><div className="num">04</div><div className="label">Practice days / wk</div></div>
        </div>
        <div className="pullquote">
          <div className="rule"></div>
          <div>
            <p className="body">
              We coach the fundamentals. We let the wins follow the work.
              The kids who stay with the program leave it knowing how to
              show up — for a teammate, for a coach, for themselves.
            </p>
            <div className="attr">MANNY GUZMAN · HEAD COACH, 11U</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TryoutForm() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section" id="tryouts" data-screen-label="06 Tryouts">
      <div className="container">
        <Eyebrow num="04">Tryouts</Eyebrow>
        <h2 className="h1" style={{ marginTop: 24, maxWidth: 720 }}>
          Request a tryout for the<br />
          <span className="italic">2026 season.</span>
        </h2>
        <div className="tryout">
          {sent ? (
            <div style={{ padding: "48px 0" }}>
              <div className="lbl" style={{ color: "var(--gold)" }}>Received</div>
              <h3 className="h2" style={{ marginTop: 14, color: "var(--navy)" }}>Thanks — we'll be in touch.</h3>
              <p className="body" style={{ marginTop: 14, maxWidth: 460 }}>
                Coach Manny or Coach Angel will reach out within a week
                with tryout dates and what to bring.
              </p>
              <button
                className="btn-link"
                style={{ marginTop: 24, background: "none", border: 0, padding: 0, borderBottom: "1px solid var(--navy)", paddingBottom: 2 }}
                onClick={() => setSent(false)}
              >
                Submit another →
              </button>
            </div>
          ) : (
            <form className="tryout-form" onSubmit={submit}>
              <div className="row">
                <label className="field">
                  <label>Player name</label>
                  <input type="text" required placeholder="Jaime Guzman" />
                </label>
                <label className="field">
                  <label>Age group</label>
                  <select defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option>9U / 10U</option>
                    <option>11U / 12U</option>
                    <option>Not sure</option>
                  </select>
                </label>
              </div>
              <div className="row">
                <label className="field">
                  <label>Parent / guardian name</label>
                  <input type="text" required />
                </label>
                <label className="field">
                  <label>Phone</label>
                  <input type="tel" required placeholder="(661) 555-0119" />
                </label>
              </div>
              <label className="field">
                <label>Email</label>
                <input type="email" required />
              </label>
              <label className="field">
                <label>Anything we should know?</label>
                <textarea rows="3" placeholder="Position, prior teams, travel constraints, etc."></textarea>
              </label>
              <div>
                <button type="submit" className="btn">Submit Request</button>
              </div>
            </form>
          )}

          <aside className="tryout-side">
            <Eyebrow>What to bring</Eyebrow>
            <ul style={{ marginTop: 24 }}>
              <li>
                <div>
                  <div className="meta-label">When</div>
                  <div className="meta-value">Two Saturdays each fall</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="meta-label">Where</div>
                  <div className="meta-value">Beach Park, Bakersfield · field 3</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="meta-label">Gear</div>
                  <div className="meta-value">Glove · cleats · bat (if owned) · water</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="meta-label">Cost</div>
                  <div className="meta-value">No fee to try out</div>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" data-screen-label="07 Footer">
      <div className="container">
        <div className="top">
          <div className="brand-col">
            <img src="../../assets/logos/dark_bg_logo.png" alt="Dirt Dawgs" />
            <p>Bakersfield, CA · USSSA</p>
          </div>
          <div>
            <h4>Program</h4>
            <ul>
              <li><a href="#program">About</a></li>
              <li><a href="#coaches">Coaches</a></li>
              <li><a href="#stats">Season</a></li>
            </ul>
          </div>
          <div>
            <h4>Teams</h4>
            <ul>
              <li><a href="#stats">11U / 12U</a></li>
              <li><a href="#stats">10U (forming)</a></li>
              <li><a href="#tryouts">Tryouts</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:program@dirtdawgs.example">program@dirtdawgs.example</a></li>
              <li><a href="tel:6615550119">(661) 555-0119</a></li>
            </ul>
          </div>
        </div>
        <div className="verse">
          <div>
            <blockquote>
              "Whatever you do, work at it with all your heart,
              as working for the Lord, not for human masters."
            </blockquote>
            <span className="cite">COLOSSIANS 3:23</span>
          </div>
          <div className="copy">© 2026 BAKERSFIELD DIRT DAWGS</div>
        </div>
      </div>
    </footer>
  );
}

/* ----- App ----- */
function App() {
  const [active, setActive] = useState("home");

  const onNav = (id) => {
    setActive(id);
    const target = id === "home" ? document.body : document.getElementById(id);
    if (target) {
      window.scrollTo({ top: id === "home" ? 0 : target.offsetTop - 72, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header active={active} onNav={onNav} />
      <Hero onNav={onNav} />
      <ProgramIntro />
      <Coaches />
      <NumbersAndQuote />
      <TryoutForm />
      <Footer />
    </div>
  );
}

Object.assign(window, { App, Header, Hero, Footer, ProgramIntro, Coaches, NumbersAndQuote, TryoutForm, Eyebrow });
