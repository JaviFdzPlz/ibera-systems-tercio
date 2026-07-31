# ÍBERA SYSTEMS / TERCIO — Web & Communications Register Delta 001

**Delta ID:** WEB-DELTA-001  
**Status:** CURRENT — WORKING; NOT A RELEASE  
**Date:** 2026-07-31  
**Parent checkpoint:** `WEB-CTRL-CSR-001` / v0.1  
**Branch:** `control/web-comms-checkpoint-2026-07-31`  
**Implementation commit:** `93fc70a2ccc873e5b4a35f9849ed45a0b1a65eea`

## Change

- `WEB-DEF-006` changed from **OPEN FOR SAFE IMPLEMENTATION FIX** to **CORRECTED ON WORKING BRANCH / DEPLOYMENT OPEN**.
- The visible Ukrainian language selector label changed from `UK` to `UA`.
- The BCP-47/HTML language code remains `uk`.
- The accessible language name remains `Українська`.
- No technical claim, architecture, baseline, translation text or public maturity statement changed.

## Verification

`i18n.js` on the working branch now contains:

```javascript
const supported = ['en', 'es', 'fr', 'uk'];
const labels = { en: 'EN', es: 'ES', fr: 'FR', uk: 'UA' };
```

Updated blob SHA: `e6b6fbe166df61bada65ad6ba582fd4bf88133a9`.

## Block closure

**Completed:** Ukrainian selector display label corrected and repository state verified.  
**Authority/evidence basis:** Project language requirement EN/ES/FR/UA; current implementation uses valid language code `uk`.  
**Register deltas:** WEB-DEF-006 corrected on working branch; deployment/runtime verification remains open.  
**Cross-system impacts:** None; UI label only.  
**Files/status/path:** `i18n.js` modified on `control/web-comms-checkpoint-2026-07-31`; this delta recorded at `docs/control/IBERA_TERCIO_WEB_COMMS_Register_Delta_001_UA_Label_Fix_2026-07-31.md`.  
**Open items:** Browser QA, deployment, and merge/release disposition; WEB-ESC-001 remains unresolved.  
**Next exact action:** Execute browser/runtime QA for favicon, hero cycling, subtitles and header/footer/About parity without altering architecture claims.