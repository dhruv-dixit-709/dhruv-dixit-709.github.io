(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const copyrightYear = document.getElementById('copyright-year');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    root.dataset.theme = savedTheme;
  }

  const updateThemeLabel = () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    if (themeToggle) themeToggle.setAttribute('aria-label', `Switch to ${next} theme`);
  };
  updateThemeLabel();

  themeToggle?.addEventListener('click', () => {
    const current = root.dataset.theme === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
    updateThemeLabel();
  });

  const closeMenu = () => {
    if (!menuToggle || !mobileNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    mobileNav.hidden = true;
  };

  menuToggle?.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menuToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    if (mobileNav) mobileNav.hidden = expanded;
  });

  mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeMenu();
  });

  if (copyrightYear) copyrightYear.textContent = String(new Date().getFullYear());
})();
