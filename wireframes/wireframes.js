// Tab switching + shared nav/footer injection for Dirt Dawgs wireframes
(function () {
  const tabs = document.querySelectorAll('.tabs button');
  const pages = document.querySelectorAll('.page');

  function activate(id) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.target === id));
    pages.forEach(p => p.classList.toggle('active', p.id === id));
    window.scrollTo({ top: 0, behavior: 'instant' });
    history.replaceState(null, '', '#' + id);
  }
  tabs.forEach(t => t.addEventListener('click', () => activate(t.dataset.target)));

  const initial = (location.hash || '#home').slice(1);
  if (document.getElementById(initial)) activate(initial);

  // ---- Shared global nav (desktop) ----
  const desktopNav = `
    <nav class="gnav">
      <div class="logo">LOGO</div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>TEAMS</li>
        <li>SCHEDULE</li>
        <li>GALLERY</li>
        <li>SPONSORS</li>
        <li>CONTACT</li>
      </ul>
      <a class="cta">REQUEST A TRYOUT</a>
    </nav>`;

  const mobileNav = `
    <nav class="gnav mobile">
      <div class="logo">LOGO</div>
      <a class="cta">TRYOUT</a>
      <div class="ham"><i></i><i></i><i></i></div>
    </nav>`;

  const desktopFooter = `
    <footer class="gfooter">
      <div class="grid">
        <div class="col">
          <div class="logo" style="width:56px;height:56px;border:1.5px solid var(--ink);background:repeating-linear-gradient(135deg,var(--ph-ink) 0 1px,transparent 1px 5px),var(--ph);display:grid;place-items:center;font-family:var(--hand);font-size:11px;margin-bottom:14px;">LOGO</div>
          <div class="txt l"></div>
          <div class="txt m"></div>
          <div class="txt s" style="margin-top:14px"></div>
        </div>
        <div class="col">
          <h5>EXPLORE</h5>
          <div class="line short"></div>
          <div class="line short"></div>
          <div class="line short"></div>
          <div class="line short"></div>
        </div>
        <div class="col">
          <h5>PROGRAM</h5>
          <div class="line mid"></div>
          <div class="line short"></div>
          <div class="line mid"></div>
        </div>
        <div class="col">
          <h5>CONTACT</h5>
          <div class="line mid"></div>
          <div class="line"></div>
          <div class="socials" style="margin-top:14px"><i></i><i></i><i></i></div>
        </div>
      </div>
      <div class="bottom">
        <span class="verse">"Whatever you do, work at it with all your heart." — Col. 3:23</span>
        <span>© 2026 BAKERSFIELD DIRT DAWGS</span>
      </div>
    </footer>`;

  const mobileFooter = `
    <footer class="gfooter mobile">
      <div class="grid">
        <div class="col">
          <div class="logo" style="width:40px;height:40px;border:1.5px solid var(--ink);background:repeating-linear-gradient(135deg,var(--ph-ink) 0 1px,transparent 1px 5px),var(--ph);display:grid;place-items:center;font-family:var(--hand);font-size:9px;margin-bottom:10px;">LOGO</div>
          <div class="txt m"></div>
          <div class="txt s"></div>
        </div>
        <div class="col">
          <h5>NAV</h5>
          <div class="line short"></div>
          <div class="line short"></div>
          <div class="line short"></div>
        </div>
      </div>
      <div class="bottom" style="flex-direction:column;gap:8px;align-items:flex-start;">
        <span class="verse">"Whatever you do, work at it with all your heart." — Col. 3:23</span>
        <span>© 2026 DIRT DAWGS</span>
      </div>
    </footer>`;

  document.querySelectorAll('[data-slot="nav"]').forEach(el => el.outerHTML = desktopNav);
  document.querySelectorAll('[data-slot="nav-mobile"]').forEach(el => el.outerHTML = mobileNav);
  document.querySelectorAll('[data-slot="footer"]').forEach(el => el.outerHTML = desktopFooter);
  document.querySelectorAll('[data-slot="footer-mobile"]').forEach(el => el.outerHTML = mobileFooter);
})();
