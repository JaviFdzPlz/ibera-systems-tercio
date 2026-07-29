const identityStyles = document.createElement('link');
identityStyles.rel = 'stylesheet';
identityStyles.href = 'identity-v2.css?v=20260730-1';
document.head.append(identityStyles);

const brandStyles = document.createElement('link');
brandStyles.rel = 'stylesheet';
brandStyles.href = 'brand-hotfix.css?v=20260730-1';
document.head.append(brandStyles);

const soraPreconnect = document.createElement('link');
soraPreconnect.rel = 'preconnect';
soraPreconnect.href = 'https://fonts.googleapis.com';
document.head.append(soraPreconnect);

const soraFonts = document.createElement('link');
soraFonts.rel = 'stylesheet';
soraFonts.href = 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap';
document.head.append(soraFonts);

document.documentElement.classList.add('identity-v2');

const BRAND_ASSETS = {
  mark: 'assets/brand/v2/favicon.svg?v=20260730-1',
  wordmark: 'assets/brand/v2/IBERA_Horizontal_Inverse_v1.0.svg?v=20260730-1'
};

const faviconLinks = document.querySelectorAll('link[rel~="icon"]');
if (faviconLinks.length) {
  faviconLinks.forEach((link) => {
    link.type = 'image/svg+xml';
    link.href = BRAND_ASSETS.mark;
    link.setAttribute('sizes', 'any');
  });
} else {
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.href = BRAND_ASSETS.mark;
  favicon.setAttribute('sizes', 'any');
  document.head.append(favicon);
}

const brandMarkup = (modifier = '') => `
  <span class="brand-lockup${modifier ? ` ${modifier}` : ''}">
    <img class="brand-lockup__mark" src="${BRAND_ASSETS.mark}" alt="" aria-hidden="true">
    <img class="brand-lockup__wordmark" src="${BRAND_ASSETS.wordmark}" alt="ÍBERA Systems">
  </span>`;

document.querySelectorAll('.site-header .brand').forEach((brand) => {
  brand.innerHTML = brandMarkup();
  brand.setAttribute('aria-label', 'ÍBERA Systems home');
});

document.querySelectorAll('.footer-brand').forEach((brand) => {
  brand.innerHTML = brandMarkup();
});

const aboutBrandImage = document.querySelector('.about-grid > div:first-child img');
if (aboutBrandImage) {
  const aboutBrand = document.createElement('div');
  aboutBrand.innerHTML = brandMarkup('brand-lockup--about');
  aboutBrandImage.replaceWith(aboutBrand.firstElementChild);
}

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const hero = document.querySelector('.hero');
if (hero && !hero.querySelector('.hero-video')) {
  const video = document.createElement('video');
  video.className = 'hero-video';
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'metadata';
  video.poster = 'assets/visuals/ibera_hero_background_v2_poster.jpg?v=20260724-1';
  video.setAttribute('aria-hidden', 'true');
  video.innerHTML = '<source src="assets/visuals/ibera_hero_background_v2_web.mp4?v=20260724-1" type="video/mp4">';
  hero.prepend(video);

  const rotatingLine = hero.querySelector('h1 em');
  const cues = [
    { start: 0, end: 3.4, text: 'Before detection.' },
    { start: 3.4, end: 6.6, text: 'Before targeting.' },
    { start: 6.6, end: 9.7, text: 'Before commitment.' },
    { start: 9.7, end: 13.5, text: 'Preserve the mission.' }
  ];
  let activeText = '';

  const updateCue = () => {
    if (!rotatingLine) return;
    const time = video.currentTime || 0;
    const cue = cues.find((item) => time >= item.start && time < item.end) || cues[0];
    if (cue.text === activeText) return;
    activeText = cue.text;
    rotatingLine.classList.remove('is-visible');
    window.setTimeout(() => {
      rotatingLine.textContent = cue.text;
      rotatingLine.classList.add('is-visible');
    }, 120);
  };

  video.addEventListener('loadedmetadata', updateCue);
  video.addEventListener('timeupdate', updateCue);
  video.play().catch(() => hero.classList.add('hero-video-paused'));

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const applyMotionPreference = () => {
    if (reducedMotion.matches) {
      video.pause();
      video.removeAttribute('autoplay');
      if (rotatingLine) {
        rotatingLine.textContent = 'Before it closes.';
        rotatingLine.classList.add('is-visible');
      }
    } else {
      video.play().catch(() => {});
    }
  };

  applyMotionPreference();
  reducedMotion.addEventListener?.('change', applyMotionPreference);
}

const tercioSection = document.querySelector('#tercio');
if (tercioSection && !document.querySelector('.operational-context-visual')) {
  const transition = document.createElement('section');
  transition.className = 'operational-context-transition';
  transition.setAttribute('aria-label', 'Representative operational context');
  transition.innerHTML = '<figure class="container operational-context-visual"><img src="assets/visuals/gadir-operational-context.jpg" alt="Conceptual passive position-survivability architecture in a representative wooded environment" width="1439" height="810" loading="lazy"><figcaption><span>Operational context concept — not test evidence</span><small>Passive position-survivability architecture in a representative wooded environment.</small></figcaption></figure>';
  tercioSection.before(transition);
}

if (tercioSection) {
  const layerGrid = tercioSection.querySelector('.layers-grid');

  if (layerGrid && !tercioSection.querySelector('.tercio-umbrella-card')) {
    const umbrella = document.createElement('a');
    umbrella.className = 'container tercio-umbrella-card';
    umbrella.href = '#demonstrators';
    umbrella.innerHTML = '<div><span>TERCIO / SYSTEM OF SYSTEMS</span><h3>Five standalone-capable layers.<br>One evidence-gated architecture.</h3><p>Condition · Conceal · Detect · Extend · React · Deceive · Protect</p></div><strong>Explore the architecture →</strong>';
    layerGrid.before(umbrella);
  }

  const routes = {
    URCE: 'urce.html',
    GADIR: 'gadir.html',
    ATALA: 'atala.html',
    ALANO: 'alano.html',
    ARDID: 'ardid.html'
  };
  const descriptions = {
    ALANO: 'Attritable forward, remote or mobile nodes that extend sensing, cueing, relay and selected local non-kinetic response functions.',
    ARDID: 'Coordinated deception and perception shaping that creates false signatures, alternate cues and ambiguity before target commitment.'
  };

  tercioSection.querySelectorAll('.layer-card').forEach((card) => {
    const name = card.querySelector('h3')?.textContent?.trim();
    if (!name || card.closest('a')) return;

    const description = card.querySelector('p');
    if (description && descriptions[name]) description.textContent = descriptions[name];

    const link = document.createElement('a');
    link.className = 'layer-card-link';
    link.href = routes[name] || '#demonstrators';
    card.replaceWith(link);
    link.append(card);

    const hint = document.createElement('span');
    hint.className = 'card-explore';
    hint.textContent = 'Explore system →';
    card.append(hint);
  });

  if (!document.querySelector('.system-concept-visual')) {
    const figure = document.createElement('figure');
    figure.className = 'container system-concept-visual';
    figure.innerHTML = '<img src="assets/visuals/tercio-integrated-concept.jpg" alt="Concept render illustrating the interaction of TERCIO survivability capabilities" width="1439" height="810" loading="lazy"><figcaption class="concept-caption">Integrated architecture concept — not a fielded configuration<span>Illustrative interaction of signature management, warning, distributed geometry, local response and deception.</span></figcaption>';
    layerGrid?.after(figure);
  }
}
