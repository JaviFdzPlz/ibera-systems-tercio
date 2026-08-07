// Browser render smoke test: loads every page at desktop and mobile viewports
// and fails the run if any page returns a non-200 status, throws a page error,
// or triggers horizontal overflow.
const { chromium } = require('@playwright/test');

const PAGES = ['index.html', 'urce.html', 'gadir.html', 'atala.html', 'alano.html', 'ardid.html', 'cid.html', 'adarga.html'];
const VIEWPORTS = [{ width: 1280, height: 800, name: 'desktop' }, { width: 390, height: 844, name: 'mobile' }];
const BASE_URL = process.env.QA_BASE_URL || 'http://localhost:8080';

(async () => {
  const browser = await chromium.launch();
  const results = [];
  let failures = 0;

  for (const page of PAGES) {
    for (const viewport of VIEWPORTS) {
      const ctx = await browser.newPage({ viewport });
      const errors = [];
      ctx.on('pageerror', (e) => errors.push(String(e)));

      let status = null;
      try {
        const resp = await ctx.goto(`${BASE_URL}/${page}`, { waitUntil: 'networkidle', timeout: 30000 });
        status = resp ? resp.status() : null;
      } catch (e) {
        status = `NAV_ERROR: ${e.message}`;
      }

      const scrollWidth = await ctx.evaluate(() => document.body.scrollWidth).catch(() => null);
      const innerWidth = await ctx.evaluate(() => window.innerWidth).catch(() => null);
      const overflow = typeof scrollWidth === 'number' && typeof innerWidth === 'number' && scrollWidth > innerWidth;

      const ok = status === 200 && errors.length === 0 && !overflow;
      if (!ok) failures++;

      results.push({ page, viewport: viewport.name, status, errors, overflow, scrollWidth, innerWidth, ok });
      await ctx.close();
    }
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
  console.log(`\n${results.length - failures}/${results.length} page x viewport loads passed.`);

  if (failures > 0) {
    console.error(`${failures} smoke check(s) failed.`);
    process.exit(1);
  }
})();
