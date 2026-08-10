# MILLARES — House website

Public house website for MILLARES.

## Current public posture

MILLARES is presented as a defence research and engineering initiative focused on protecting **people, platforms, assets and infrastructure** against changing warfare threats.

Public narrative principles:

- start from the threat and protection required rather than a preselected product;
- inquiry and analysis serve a real engineering destination;
- reassess an engineering direction when the threat, evidence or operating conditions materially change;
- models, simulation and AI-assisted analysis are tools, not substitutes for evidence of physical effectiveness;
- no generic claim of superior performance, readiness or fielded capability is made.

Lead line:

> **Start with the threat. Engineer the response. Repeat.**

## Implementation

Static HTML/CSS/JavaScript with no build step and no analytics/tracking dependencies.

- `index.html` — complete house site and anchored information architecture
- `styles.css` — responsive V-C / Evolving Field visual system
- `script.js` — mobile navigation, evolving-field generation and progressive reveal
- `favicon.svg` — neutral MILLARES launch favicon
- `404.html` — public fallback page
- `robots.txt` / `sitemap.xml` — basic search-engine controls

Legacy TERCIO system routes are retained only as `noindex` return pages to the MILLARES home page. They are not part of the current house narrative.

## Hosting

GitHub Pages deploys from the `main` branch and repository root.

Production URL:

`https://javifdzplz.github.io/ibera-systems-tercio/`

## Release control

Same-day 2026-08-10 release is governed from the private canonical workspace by `MILLARES-OD-20260810-WEB-LAUNCH-01` and launch board #121.
