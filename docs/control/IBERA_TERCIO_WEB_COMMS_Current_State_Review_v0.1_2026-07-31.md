# ÍBERA SYSTEMS / TERCIO — Web & Communications Current-State Review

**Document ID:** WEB-CTRL-CSR-001  
**Version:** v0.1  
**Status:** CURRENT — WORKING CHECKPOINT; NOT A RELEASE  
**Date:** 2026-07-31  
**Public implementation repository:** `JaviFdzPlz/ibera-systems-tercio`  
**Working branch:** `control/web-comms-checkpoint-2026-07-31`  
**Web base commit:** `3b8960fa47706c7e52b5c93bd13a42f391ce949b`  
**Technical/configuration authority repository:** `JaviFdzPlz/ibera-systems-workspace`  
**Technical checkpoint:** `3a3eb528ee1c222002ddea750dd68badb2798ee9`  
**Technical checkpoint tag:** `tercio-recovery-v1.0-2026-07-30`  
**Identity release commit:** `53c13d83b9ff525efcc6ae2f1be259d3f2b2a743`  
**Identity release tag:** `corporate-identity-v2.0`

## 1. Purpose and authority boundary

This checkpoint records the verified GitHub state for the public ÍBERA SYSTEMS / TERCIO website, the readability of governing files, the initial defect/claim/language registers, and the exact next controlled action.

It does not alter PB 2.3, approve new public claims, release a website configuration, or authorize publication of detailed effect definitions, engagement logic, BOMs, vulnerabilities or interfaces.

Authority order applied:

1. **BASELINE:** `TERCIO-PB-2.3`, released 2026-07-27.
2. **BASELINE / APPROVED CHANGE:** CID/ADARGA architecture change package and compatible approved decisions.
3. **BASELINE:** ÍBERA SYSTEMS Visual Identity v2.0.
4. **CURRENT / SUBORDINATE:** current working technical sources compatible with PB 2.3.
5. **CURRENT IMPLEMENTATION:** public website code at the web base commit.

The website is an implementation and communication surface. It is not a source of technical authority.

## 2. Current-state determination

### 2.1 Repository checkpoints

| ID | Classification | Repository/ref | Determination |
|---|---|---|---|
| CFG-WEB-001 | CURRENT | `ibera-systems-tercio/main@3b8960fa…` | Current public implementation checkpoint. Commit restores hero media, introduces EN/ES/FR/UK translation maps and replaces the provisional favicon. |
| CFG-TEC-001 | BASELINE/CURRENT | `ibera-systems-workspace@3a3eb528…` | Current technical/configuration checkpoint. Tag `tercio-recovery-v1.0-2026-07-30` resolves exactly to this commit. |
| CFG-ID-001 | BASELINE | `corporate-identity-v2.0@53c13d83…` | Released identity baseline. Tag resolves exactly to the release commit. |

### 2.2 Governing-source readability and LFS status

| Source ID | Classification | Path / object | GitHub readability at checkpoint | Control result |
|---|---|---|---|---|
| SRC-001 | BASELINE | `03_PROGRAMS/TERCIO/01_PROGRAMME/01_BASELINE/IBERA_TERCIO_Program_Baseline_v2.3_RELEASED_2026-07-27.docx` | **Git LFS pointer only** | Pointer OID `sha256:9c887b280118719313f026e33da9a134355f014621d194443ec36866e1dcb7e0`; size 329937 bytes. Do not reconstruct from memory. |
| SRC-002 | BASELINE / RELEASE EVIDENCE | `03_PROGRAMS/TERCIO/00_CONTROL/03_BASELINES/RELEASE_RECORDS/TERCIO_PB2.3_Corrective_Structure_Release_Note_2026-07-27.md` | **Readable text** | Confirms the corrective seven-system structure: URCE, GADIR, ATALA, ALANO, ARDID, CID and ADARGA; no change to TRL, HLOs, requirements, safety boundary or GADIR-TB priority. |
| SRC-003 | APPROVED CHANGE | `03_PROGRAMS/TERCIO/00_CONTROL/04_CHANGES/ACP/IBERA_TERCIO_Architecture_Change_Package_CID_ADARGA_v1.0_APPROVED_2026-07-27.docx` | **Git LFS pointer only** | Pointer OID `sha256:1beaa298fb4ccde841a64de8e30129e44209a12d7082804c66666221f8b2c6a8`; size 326955 bytes. |
| SRC-004 | CURRENT / WORKING CANDIDATE | `03_PROGRAMS/TERCIO/01_PROGRAMME/02_CD2S/IBERA_TERCIO_Concept_Description_and_Development_Specification_v2.2_WORKING_CANDIDATE_2026-07-27.docx` | **Git LFS pointer only** | Pointer OID `sha256:42a40fbeecec5461d9ca1ac1139f3a0b5be51913ce26022c9effdd3bcf62b206`; size 716959 bytes. Not a released public-claim authority. |
| SRC-005 | BASELINE / RELEASE EVIDENCE | PB 2.0–2.3 release notes and manifest under `03_PROGRAMS/TERCIO/00_CONTROL/03_BASELINES/RELEASE_RECORDS/` | **Readable text** | Provides controlled architecture, status, maturity and exclusion evidence when the LFS binaries are not readable through the connector. |
| SRC-006 | BASELINE | Visual Identity v2.0 SVG favicon | **Readable text asset** | Identity blob SHA `d04a5b9adf7f5ae97d6c40e7c0cc97013a1e6cb7`; exact same blob is present in the web repository as `assets/brand/v2/favicon-rodete-v2.svg`. |
| SRC-007 | BASELINE | Visual Identity v2.0 horizontal inverse lock-up | **Readable text asset** | Identity blob SHA `412a8ec078e31fbc57be025da8a3f8cf2254160b`; exact same blob is present in the web repository. |
| SRC-008 | CURRENT IMPLEMENTATION | Web HTML/CSS/JS/locale files | **Readable text** | Directly inspectable at `3b8960fa…`. |
| SRC-009 | CURRENT IMPLEMENTATION | `assets/visuals/ibera_hero_background_v2_web.mp4` | **Actual binary Git blob; not an LFS pointer** | Blob SHA `a2ac629268ec9a61f691fd08e7118fce664ef09a`. |
| SRC-010 | CURRENT IMPLEMENTATION | Rodete PNG/ICO favicon assets | **Actual binary Git blobs; not LFS pointers** | Binary favicon assets are present in the public implementation repository. |

## 3. Initial defect register

| Defect ID | Classification | Finding | Affected files | Status / disposition |
|---|---|---|---|---|
| WEB-DEF-001 | CURRENT | Browser bookmark/tab previously displayed the provisional column-like “Í” favicon. | `index.html`, capability pages, `assets/brand/v2/favicon-*`, root favicon files | **CODE CORRECTED / RUNTIME OPEN.** Current HTML references `favicon-rodete-v2.*`; provisional `favicon-browser.svg` was removed. Browser-cache and deployed-render verification remain open. |
| WEB-DEF-002 | CURRENT | Rodete/logo must be the released v2.0 asset in header, footer and About. | `index.html`, `urce.html`, `gadir.html`, `atala.html`, `alano.html`, `ardid.html`, `assets/brand/v2/` | **SOURCE MATCH VERIFIED.** Favicon and horizontal inverse SVG blob SHAs exactly match the identity baseline. Responsive visual verification remains open. |
| WEB-DEF-003 | CURRENT | Hero media cycle had disappeared. | `index.html`, `script.js`, `hero-v2.css`, hero MP4/poster | **CODE RESTORED / RUNTIME OPEN.** Video element, actual MP4 blob, timed text cues and corrected z-index stack are present. Autoplay, timing and fallback behaviour require browser verification. |
| WEB-DEF-004 | OPEN | System subtitles/capability hero secondary lines were reported as insufficiently legible. | `identity-v2.css`, `hero-v2.css`, all capability pages | **OPEN.** CSS changes are present, but no controlled viewport/contrast evidence has yet been recorded. |
| WEB-DEF-005 | OPEN | Header/footer/About identity and navigation consistency across all pages and languages. | All HTML pages, `i18n.js`, locale maps, identity CSS | **PARTIALLY VERIFIED.** Common released lock-up is referenced; full visual/responsive/navigation matrix remains open. |
| WEB-DEF-006 | CURRENT / MINOR | Ukrainian language uses correct BCP-47 code `uk`, but the visible selector label is `UK`, conflicting with the required public label `UA` and potentially suggesting United Kingdom. | `i18n.js` | **OPEN FOR SAFE IMPLEMENTATION FIX.** Change display label only; retain language code `uk` and name `Українська`. |
| WEB-DEF-007 | UNSUPPORTED / ESCALATION | Public site describes **five capabilities/layers** and omits CID and ADARGA. PB 2.3 is a corrective **seven-system** baseline. | `index.html`, `script.js`, `locales/index.js`, architecture graphics/copy, navigation | **BLOCKED — ESCALATE TO TERCIO — 00 Programme & SoS.** This is a public architecture/claim change and shall not be silently corrected by the web project. |
| WEB-DEF-008 | OPEN / DEPENDENCY | No public CID or ADARGA pages/locales exist. | Future `cid.html`, `adarga.html`, locale sources, navigation and architecture section | **BLOCKED BY WEB-DEF-007** and public-copy authorization. Do not present either system as built, tested, fielded or demonstrated. |
| WEB-DEF-009 | OPEN | Multilingual implementation uses English DOM text plus exact-string JS dictionaries rather than one structured canonical content source. | `i18n.js`, `locales/*.js`, all HTML pages | **CURRENT BUT FRAGILE.** Translation coverage exists for current pages, but copy drift is likely when English source strings change. Canonical content architecture remains the next implementation stage after priority defect stabilization. |

## 4. Public-claim register

| Claim ID | Classification | Current/public formulation | Authority/disposition |
|---|---|---|---|
| CLM-PUB-001 | BASELINE/CURRENT | TERCIO is at TRL 2. | Authorized high-level maturity statement. Preserve. |
| CLM-PUB-002 | BASELINE/CURRENT | Passive-first and modular architecture. | Authorized high-level architecture statement. Preserve without implying measured effectiveness. |
| CLM-PUB-003 | CURRENT / EXCLUSION | No prototype; not fielded, manufactured, validated or combat-proven. | Required maturity discipline. Preserve. |
| CLM-PUB-004 | UNSUPPORTED | “Five capabilities / five standalone-capable layers.” | Superseded by PB 2.3 seven-system structure. Requires SoS disposition and authorized replacement copy. |
| CLM-PUB-005 | REQUIREMENT | Seven systems: URCE, GADIR, ATALA, ALANO, ARDID, CID and ADARGA. | Baseline architecture. Public presentation and wording shall be approved through SoS because it changes architecture claims and page scope. |
| CLM-PUB-006 | BASELINE/CURRENT | GADIR-TB is the only committed Phase A demonstrator; other paths are candidate/roadmap work. | Preserve this boundary. Audit every translated formulation. |
| CLM-PUB-007 | OPEN | French–Ukrainian co-development/evidence pathway. | Partner-strategy/public-claim authorization not resolved from readable released evidence in this review. Escalate before strengthening or expanding. |
| CLM-PUB-008 | OPEN | Toulouse-based independent venture and founder biography/experience. | Business/biographical copy is present, but a canonical authorized-copy source has not yet been identified in the repositories. |
| CLM-PUB-009 | CURRENT | Concept images are labelled as concept illustrations and not test evidence. | Required public-image discipline; preserve on every visual and translation. |
| CLM-PUB-010 | EXCLUSION | No public effect definitions, engagement logic, BOMs, vulnerabilities, detailed interfaces, range/time/mass/cost/probability/efficacy claims without configuration-specific evidence. | Mandatory exclusion. |

## 5. Language-state register

| Language ID | Language | Current coverage | Status |
|---|---|---|---|
| LNG-EN-001 | English | `index.html` plus URCE, GADIR, ATALA, ALANO and ARDID pages | CURRENT; architecture content limited to five systems and therefore not baseline-aligned. |
| LNG-ES-001 | Spanish | Translation dictionaries for the same six current pages | CURRENT / UNVERIFIED; no CID/ADARGA coverage. |
| LNG-FR-001 | French | Translation dictionaries for the same six current pages | CURRENT / UNVERIFIED; no CID/ADARGA coverage. |
| LNG-UA-001 | Ukrainian (`uk`) | Translation dictionaries for the same six current pages | CURRENT / UNVERIFIED; selector displays `UK`; no CID/ADARGA coverage. |

Translation presence does not constitute linguistic approval. Technical claims must be authorized once in the canonical source and then translated without changing maturity, commitment, ownership or exclusions.

## 6. Initial file-impact register

| File group ID | Files | Expected controlled work |
|---|---|---|
| FILE-WEB-001 | `index.html`, `script.js`, `locales/index.js` | Architecture, hero, public claims and seven-system dependency. |
| FILE-WEB-002 | `hero-v2.css`, `identity-v2.css` | Subtitle legibility, stacking, contrast and responsive identity. |
| FILE-WEB-003 | `i18n.js`, `locales/*.js` | Language selector, canonical-source migration and translation parity. |
| FILE-WEB-004 | `urce.html`, `gadir.html`, `atala.html`, `alano.html`, `ardid.html` | Header/footer/About consistency, maturity labels, claim audit and subtitle legibility. |
| FILE-WEB-005 | `assets/brand/v2/*`, root favicon files | Released identity implementation and browser icon coverage. |
| FILE-WEB-006 | Future CID/ADARGA pages and locale entries | Blocked pending SoS public-copy disposition. |
| FILE-WEB-007 | Architecture/public visuals | Must show seven-system architecture when authorized and remain labelled `CONCEPT ILLUSTRATION — NOT TEST EVIDENCE`. |

## 7. Decision and escalation register deltas

| Register ID | Type | Delta |
|---|---|---|
| WEB-ISS-001 | Issue | Public implementation remains on the pre-PB-2.3 five-system architecture. |
| WEB-ESC-001 | Escalation | Request TERCIO — 00 Programme & SoS disposition of the seven-system public architecture, approved short descriptions for CID/ADARGA, navigation order and whether separate public pages are authorized. |
| WEB-RSK-001 | Risk | Publishing current five-system copy creates configuration divergence from PB 2.3. |
| WEB-RSK-002 | Risk | Exact-string translation maps can silently fall back to English after canonical copy edits. |
| WEB-RSK-003 | Risk | Code presence may be mistaken for visual/runtime verification; favicon caching, autoplay, contrast and mobile layout remain unverified. |
| WEB-DEC-001 | Working decision | Do not merge architecture/claim changes until WEB-ESC-001 is resolved. Continue non-authority-impacting visual and accessibility verification/fixes on the control branch. |

## 8. Cross-system impacts

- **TERCIO SoS:** seven-system architecture and public claim alignment require programme-level disposition.
- **CID / ADARGA:** public inclusion, descriptions, images and pages remain blocked pending approved bounded copy.
- **All seven systems:** common maturity, exclusions, interface language and concept-image marking must remain consistent.
- **Identity:** released v2.0 assets are correctly sourced; no identity baseline change is proposed.
- **Multilingual communications:** all approved claims must use one canonical source before translation.

## 9. Next exact action

1. Record WEB-ESC-001 in TERCIO — 00 Programme & SoS with the current five-system website extracts and PB 2.3 seven-system release-note evidence.
2. In parallel on this branch, execute the non-authority-impacting QA/fix sequence:
   - change the Ukrainian selector display label from `UK` to `UA` while retaining code `uk`;
   - verify favicon/bookmark behaviour with cache-busting and all icon formats;
   - verify hero video, timed cues and reduced-motion fallback;
   - measure subtitle and caption contrast at desktop/tablet/mobile widths;
   - verify header/footer/About identity and navigation parity across EN/ES/FR/UA.
3. Do not implement CID/ADARGA public copy or replace “five” with “seven” until SoS authorizes the public wording and presentation.

---

## Block closure

**Completed:** GitHub checkpoints resolved; governing-file readability/LFS status classified; identity asset provenance matched by blob SHA; current web implementation inspected; initial defect, claim, language, issue, risk and file-impact registers created; control branch established.  
**Authority/evidence basis:** PB 2.3 corrective-structure release note and release manifests at technical checkpoint `3a3eb528…`; LFS pointer OIDs for unreadable controlled binaries; Visual Identity v2.0 tag `corporate-identity-v2.0`; public implementation commit `3b8960fa…`.  
**Register deltas:** Added WEB-DEF-001–009, CLM-PUB-001–010, LNG-EN/ES/FR/UA-001, WEB-ISS-001, WEB-ESC-001, WEB-RSK-001–003 and WEB-DEC-001.  
**Cross-system impacts:** TERCIO SoS, CID, ADARGA, all current public system pages, identity implementation and multilingual communications.  
**Files/status/path:** This file is CURRENT / WORKING CHECKPOINT at `docs/control/IBERA_TERCIO_WEB_COMMS_Current_State_Review_v0.1_2026-07-31.md` on `control/web-comms-checkpoint-2026-07-31`; no baseline or `main` file changed.  
**Open items:** SoS public seven-system disposition; authorized claim source for partner strategy and About copy; visual/runtime QA; translation approval; canonical multilingual source design.  
**Next exact action:** Submit WEB-ESC-001 to TERCIO — 00 Programme & SoS and execute the safe QA/fix sequence on this branch.