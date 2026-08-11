(() => {
  // R9 remains a reversible non-production refinement layered over the production stylesheet.
  const ensureSheet = (href, datasetKey) => {
    if (document.querySelector(`link[data-${datasetKey}]`)) return;
    const sheet = document.createElement('link');
    sheet.rel = 'stylesheet';
    sheet.href = href;
    sheet.setAttribute(`data-${datasetKey}`, 'true');
    document.head.appendChild(sheet);
  };

  ensureSheet('r8.css?v=20260811-1', 'millares-r8');
  ensureSheet('r9.css?v=20260811-1', 'millares-r9');

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
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  // R9 hard anti-theatre rule: TRT topology is authored in HTML/SVG and never generated
  // from pointer, cursor, hover or scroll input. Motion may only reveal fixed document blocks.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll('.split-intro, .constraint-stack, .commit-lag, .response-rail, .engineering-destination, .evidence-band, .bounded-evidence, .repeat-panel, .collaboration-row, .work-grid');
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
