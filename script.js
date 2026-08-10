(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');

  if (menuButton && nav) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    };

    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });

    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  const field = document.querySelector('.evolving-field');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (field) {
    const renderField = () => {
      field.replaceChildren();
      const width = field.clientWidth || window.innerWidth * 0.55;
      const height = field.clientHeight || window.innerHeight;
      const compact = window.innerWidth < 760;
      const cols = compact ? 10 : 15;
      const rows = compact ? 10 : 12;
      const cx = compact ? 72 : 58;
      const cy = 55;

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const x = 4 + (col / Math.max(1, cols - 1)) * 92;
          const y = 4 + (row / Math.max(1, rows - 1)) * 92;
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * 180 / Math.PI + 92 + dist * 0.78;
          const falloff = Math.max(0.12, 1 - dist / 82);
          const ripple = 0.76 + 0.34 * Math.sin((row + col) * 0.72);

          const unit = document.createElement('span');
          unit.className = 'field-unit';
          unit.style.setProperty('--x', `${x.toFixed(2)}%`);
          unit.style.setProperty('--y', `${y.toFixed(2)}%`);
          unit.style.setProperty('--r', `${angle.toFixed(2)}deg`);
          unit.style.setProperty('--s', `${(0.58 + falloff * 0.78).toFixed(2)}`);
          unit.style.setProperty('--o', `${Math.min(0.78, 0.16 + falloff * 0.62 * ripple).toFixed(2)}`);
          unit.style.setProperty('--d', `${(-((row * cols + col) % 23) * 0.17).toFixed(2)}s`);
          field.appendChild(unit);
        }
      }

      field.dataset.geometry = `${Math.round(width)}x${Math.round(height)}`;
    };

    renderField();
    let resizeTimer;
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(renderField, 160);
    });
  }

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll('.split-intro, .tempo-strip, .response-loop, .engineering-destination, .repeat-panel, .section-heading-wide, .protection-grid, .evidence-grid, .open-questions, .about-grid, .principles, .work-grid');
    targets.forEach((target) => target.classList.add('reveal'));

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    targets.forEach((target) => observer.observe(target));
  }
})();
