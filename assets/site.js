(function () {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const menuButton = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const year = document.getElementById('copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());

  function preferredTheme() {
    try {
      const stored = localStorage.getItem('dhruv-site-theme');
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (_) { /* Local storage may be unavailable. */ }
    return 'dark';
  }
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeButton) themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#171b25' : '#f8f9f9');
  }
  applyTheme(preferredTheme());
  if (themeButton) themeButton.addEventListener('click', function () {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('dhruv-site-theme', next); } catch (_) { /* Safe fallback. */ }
  });
  if (menuButton && mobileNav) {
    function closeMenu() {
      mobileNav.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }
    menuButton.addEventListener('click', function () {
      const opening = mobileNav.hidden;
      mobileNav.hidden = !opening;
      menuButton.setAttribute('aria-expanded', String(opening));
      menuButton.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
    });
    mobileNav.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape') closeMenu(); });
  }
})();
