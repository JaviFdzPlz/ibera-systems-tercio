(() => {
  // MILLARES R9 reversible prototype.
  // TRT geometry is fixed editorial structure: this script must never generate,
  // detect, track or change semantic threat/response topology.

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

  // Ordinary document/navigation state only. This updates the same section state
  // already represented by the navigation; it is not system status or telemetry.
  const indexedSections = ['about', 'why', 'what', 'approach', 'work'];
  const indexMarks = new Map(
    [...document.querySelectorAll('[data-index-section]')].map((node) => [node.dataset.indexSection, node])
  );
  const navLinks = new Map(
    [...document.querySelectorAll('.primary-nav a[href^="#"]')].map((link) => [link.getAttribute('href').slice(1), link])
  );

  const setCurrentSection = (id) => {
    indexedSections.forEach((sectionId) => {
      indexMarks.get(sectionId)?.classList.toggle('is-current', sectionId === id);
      const link = navLinks.get(sectionId);
      if (!link) return;
      if (sectionId === id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]?.target?.id) setCurrentSection(visible[0].target.id);
    }, {
      threshold: [0.18, 0.35, 0.55],
      rootMargin: '-18% 0px -58% 0px'
    });

    indexedSections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // General editorial content reveal only. The fixed TRT topology itself is never
  // generated or semantically changed by scroll position.
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll(
      '.r9-section-grid, .constraint-stack, .commit-lag, .response-rail, .r9-engineering-climax, .scope-cells, .evidence-rail, .evidence-frame, .r9-reassess-panel, .collaboration-transition, .work-grid'
    );
    targets.forEach((target) => target.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });

    targets.forEach((target) => revealObserver.observe(target));
  }
})();
