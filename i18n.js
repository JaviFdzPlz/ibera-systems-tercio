(() => {
  const supported = ['en', 'es', 'fr', 'uk'];
  const labels = { en: 'EN', es: 'ES', fr: 'FR', uk: 'UK' };
  const names = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    uk: 'Українська'
  };

  const common = {
    es: {
      'Skip to content': 'Saltar al contenido',
      'ÍBERA Systems home': 'Inicio de ÍBERA Systems',
      'Menu': 'Menú',
      'Primary navigation': 'Navegación principal',
      'Language': 'Idioma',
      'Concept': 'Concepto',
      'MVP pathway': 'Itinerario del MVP',
      'MVP pathways': 'Itinerarios de MVP',
      'Development pathway': 'Itinerario de desarrollo',
      'Partners': 'Socios',
      'Start a conversation': 'Iniciar una conversación',
      'TRL 2 concept': 'Concepto TRL 2',
      'Structured co-development pathway': 'Itinerario estructurado de codesarrollo',
      'Modular co-development pathway': 'Itinerario modular de codesarrollo',
      'Co-development pathway': 'Itinerario de codesarrollo',
      'Roadmap capability': 'Capacidad de la hoja de ruta',
      'Public capability page': 'Página pública de la capacidad',
      '← Back to TERCIO architecture': '← Volver a la arquitectura TERCIO',
      'CAPABILITY': 'CAPACIDAD',
      'STATUS': 'ESTADO',
      'CONTACT': 'CONTACTO',
      'LOCATION': 'UBICACIÓN',
      'Public Concept Note': 'Nota de Concepto Pública',
      'Legal notice / privacy': 'Aviso legal / privacidad',
      'TERCIO architecture': 'Arquitectura TERCIO',
      'GADIR capability': 'Capacidad GADIR',
      'ATALA capability': 'Capacidad ATALA',
      'ALANO capability': 'Capacidad ALANO'
    },
    fr: {
      'Skip to content': 'Aller au contenu',
      'ÍBERA Systems home': 'Accueil ÍBERA Systems',
      'Menu': 'Menu',
      'Primary navigation': 'Navigation principale',
      'Language': 'Langue',
      'Concept': 'Concept',
      'MVP pathway': 'Parcours MVP',
      'MVP pathways': 'Parcours MVP',
      'Development pathway': 'Parcours de développement',
      'Partners': 'Partenaires',
      'Start a conversation': 'Engager la discussion',
      'TRL 2 concept': 'Concept de TRL 2',
      'Structured co-development pathway': 'Parcours structuré de codéveloppement',
      'Modular co-development pathway': 'Parcours modulaire de codéveloppement',
      'Co-development pathway': 'Parcours de codéveloppement',
      'Roadmap capability': 'Capacité de la feuille de route',
      'Public capability page': 'Page publique de la capacité',
      '← Back to TERCIO architecture': '← Retour à l’architecture TERCIO',
      'CAPABILITY': 'CAPACITÉ',
      'STATUS': 'STATUT',
      'CONTACT': 'CONTACT',
      'LOCATION': 'LOCALISATION',
      'Public Concept Note': 'Note de concept publique',
      'Legal notice / privacy': 'Mentions légales / confidentialité',
      'TERCIO architecture': 'Architecture TERCIO',
      'GADIR capability': 'Capacité GADIR',
      'ATALA capability': 'Capacité ATALA',
      'ALANO capability': 'Capacité ALANO'
    },
    uk: {
      'Skip to content': 'Перейти до вмісту',
      'ÍBERA Systems home': 'Головна ÍBERA Systems',
      'Menu': 'Меню',
      'Primary navigation': 'Головна навігація',
      'Language': 'Мова',
      'Concept': 'Концепція',
      'MVP pathway': 'Шлях MVP',
      'MVP pathways': 'Шляхи MVP',
      'Development pathway': 'Шлях розроблення',
      'Partners': 'Партнери',
      'Start a conversation': 'Розпочати розмову',
      'TRL 2 concept': 'Концепція TRL 2',
      'Structured co-development pathway': 'Структурований шлях спільного розроблення',
      'Modular co-development pathway': 'Модульний шлях спільного розроблення',
      'Co-development pathway': 'Шлях спільного розроблення',
      'Roadmap capability': 'Перспективна спроможність',
      'Public capability page': 'Публічна сторінка спроможності',
      '← Back to TERCIO architecture': '← Повернутися до архітектури TERCIO',
      'CAPABILITY': 'СПРОМОЖНІСТЬ',
      'STATUS': 'СТАТУС',
      'CONTACT': 'КОНТАКТ',
      'LOCATION': 'МІСЦЕ',
      'Public Concept Note': 'Публічна концептуальна записка',
      'Legal notice / privacy': 'Правова інформація / конфіденційність',
      'TERCIO architecture': 'Архітектура TERCIO',
      'GADIR capability': 'Спроможність GADIR',
      'ATALA capability': 'Спроможність ATALA',
      'ALANO capability': 'Спроможність ALANO'
    }
  };

  const page = window.IBERA_PAGE_TRANSLATIONS || {};
  const dictionaries = Object.fromEntries(
    supported.slice(1).map((lang) => [lang, { ...(common[lang] || {}), ...(page[lang] || {}) }])
  );
  const textRecords = [];
  const attributeRecords = [];
  const translatedAttributes = ['alt', 'aria-label', 'title'];

  const rememberText = (root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement?.closest('script, style, .language-switcher')) continue;
      const raw = node.nodeValue || '';
      const english = raw.trim();
      if (!english) continue;
      textRecords.push({
        node,
        english,
        prefix: raw.slice(0, raw.indexOf(english)),
        suffix: raw.slice(raw.indexOf(english) + english.length)
      });
    }

    document.querySelectorAll('*').forEach((element) => {
      translatedAttributes.forEach((attribute) => {
        const english = element.getAttribute(attribute);
        if (english) attributeRecords.push({ element, attribute, english });
      });
    });

    document.querySelectorAll('meta[name="description"], meta[property="og:description"]').forEach((element) => {
      const english = element.getAttribute('content');
      if (english) attributeRecords.push({ element, attribute: 'content', english });
    });
  };

  let currentLanguage = 'en';
  const translate = (english, language = currentLanguage) => {
    if (language === 'en') return english;
    return dictionaries[language]?.[english] || english;
  };

  const setLanguage = (language, updateUrl = true) => {
    currentLanguage = supported.includes(language) ? language : 'en';
    document.documentElement.lang = currentLanguage;

    textRecords.forEach(({ node, english, prefix, suffix }) => {
      node.nodeValue = `${prefix}${translate(english)}${suffix}`;
    });
    attributeRecords.forEach(({ element, attribute, english }) => {
      element.setAttribute(attribute, translate(english));
    });

    document.querySelectorAll('.language-switcher button').forEach((button) => {
      const active = button.dataset.lang === currentLanguage;
      button.setAttribute('aria-pressed', String(active));
    });

    try { localStorage.setItem('ibera-language', currentLanguage); } catch {}
    if (updateUrl) {
      const url = new URL(window.location.href);
      if (currentLanguage === 'en') url.searchParams.delete('lang');
      else url.searchParams.set('lang', currentLanguage);
      history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
    }
    document.dispatchEvent(new CustomEvent('ibera:languagechange', { detail: { language: currentLanguage } }));
  };

  const switcher = document.createElement('div');
  switcher.className = 'language-switcher';
  switcher.setAttribute('role', 'group');
  switcher.setAttribute('aria-label', 'Language');
  supported.forEach((language) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.lang = language;
    button.textContent = labels[language];
    button.title = names[language];
    button.setAttribute('aria-label', names[language]);
    button.addEventListener('click', () => setLanguage(language));
    switcher.append(button);
  });
  document.querySelector('.menu-toggle')?.before(switcher);

  rememberText(document);

  const requested = new URLSearchParams(window.location.search).get('lang');
  let stored = null;
  try { stored = localStorage.getItem('ibera-language'); } catch {}
  const initial = supported.includes(requested)
    ? requested
    : supported.includes(stored)
      ? stored
      : 'en';

  window.IBERA_I18N = {
    get language() { return currentLanguage; },
    setLanguage,
    translate
  };
  setLanguage(initial, Boolean(requested));
})();
