// Accessibility check via axe-core across all pages (desktop viewport).
// Fails the run on any "serious" or "critical" impact violation.
const { chromium } = require('@playwright/test');
const { AxeBuilder } = require('@axe-core/playwright');

const PAGES = ['index.html', 'urce.html', 'gadir.html', 'atala.html', 'alano.html', 'ardid.html', 'cid.html', 'adarga.html'];
const BASE_URL = process.env.QA_BASE_URL || 'http://localhost:8080';
const FAIL_ON_IMPACT = ['serious', 'critical'];

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  let hasFailure = false;
  const summary = [];

  for (const page of PAGES) {
    await ctx.goto(`${BASE_URL}/${page}`, { waitUntil: 'networkidle', timeout: 30000 });
    const results = await new AxeBuilder({ page: ctx }).analyze();
    const blocking = results.violations.filter((v) => FAIL_ON_IMPACT.includes(v.impact));
    summary.push({
      page,
      totalViolations: results.violations.length,
      blockingViolations: blocking.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length })),
    });
    if (blocking.length > 0) hasFailure = true;
  }

  await browser.close();
  console.log(JSON.stringify(summary, null, 2));

  if (hasFailure) {
    console.error('One or more pages have serious/critical accessibility violations.');
    process.exit(1);
  }
})();
