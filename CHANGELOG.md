# ADAS Changelog

This file documents all notable changes to the **Global ADAS** system.

Semantic-style versioning: **MAJOR.MINOR**

- **MAJOR** → Breaking changes, structural shifts, or rule changes that affect all projects.
- **MINOR** → Additions, clarifications, or backwards-compatible improvements.

---

## v1.0 – Initial Release
**Date:** 11/27/2025

### Added
- Initial Global ADAS governance model  
- Domains 01–15 (Specifications only)  
- Skeleton files for each Domain  
- Repository README + structure  
- ADR system added (`adrs/` directory)  

### Notes
This version establishes the baseline architecture for the two-level ADAS system:
- Global ADAS  
- Project-level overlays  

---

## v1.1 – Clarifications & Starter Path Updates
**Date:** 11/30/2025

### Changed
- Clarified Domain 12 as extend-only (Profiles/locals may tighten security but not weaken it); aligned non-overridable list accordingly.
- Added compiled-first loading guidance to Domain 01 and helper docs; clarified precedence with compiled profiles/briefings.
- Updated starter paths to point to `starters/<profile>/.ai`.
- Regenerated compiled profile metadata (web-app) and refreshed canonical wiki index.

### Notes
Version bump reflects governance/doc updates that affect how ADAS is loaded and interpreted; no breaking architectural changes.
