(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const colorMeta = document.querySelector('meta[name="theme-color"]');

  function setTheme(theme, remember = true) {
    root.dataset.theme = theme;
    if (colorMeta) colorMeta.content = theme === 'dark' ? '#090e15' : '#f3f6fa';
    if (button) {
      const next = theme === 'dark' ? 'light' : 'dark';
      button.setAttribute('aria-label', `Switch to ${next} mode`);
      button.querySelector('.theme-label').textContent = next.toUpperCase();
      button.querySelector('.theme-icon').textContent = theme === 'dark' ? '☼' : '◐';
    }
    if (remember) {
      try { localStorage.setItem('portfolio-theme', theme); } catch (_) { /* Keep this page usable when storage is unavailable. */ }
    }
  }

  let saved = 'dark';
  try { saved = localStorage.getItem('portfolio-theme') || 'dark'; } catch (_) { /* Dark remains the default. */ }
  setTheme(saved, false);
  button?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
})();
