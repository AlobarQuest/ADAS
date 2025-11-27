# ADR-0001: ADAS Adopted

**Status:** Accepted  
**Date:** 11/27/2025  
**Version:** ADAS v1.0  

---

## Context

Devon works across multiple software projects and relies heavily on AI helpers and agents.  
Without a consistent governance model, AI behavior can drift, causing:

- inconsistent coding styles  
- architectural contradictions  
- duplicated or conflicting decisions  
- regressions and unstable output  

A unified system was needed to provide:
- alignment across projects  
- predictable and deterministic AI behavior  
- clear architecture and workflow rules  
- traceability and long-term continuity  

---

## Decision

We adopt **ADAS — the AI Development Assistant System** — as the authoritative framework governing how AI helpers think, behave, decide, generate code, and coordinate work.

This includes:

- A **Global ADAS repository** that holds the canonical Sources of Truth:
  - Domain Specifications (01–15)
  - Skeleton templates
  - Example files
  - Global ADRs
  - Changelog
  - Docs / wiki

- A **two-level architecture**:
  1. **Global ADAS:** shared across all projects; default rules  
  2. **Project ADAS Overlay:** local `.ai/` folder with optional overrides  

Projects inherit all Global ADAS rules unless explicitly overridden in `.local` files.

---

## Consequences

### Positive
- Centralized rule changes require no per-project duplication  
- AI helpers behave consistently across all repos  
- Projects can apply local overrides when necessary  
- Domain model becomes extensible and maintainable  
- Version control enables safe, traceable evolution  

### Considerations
- Projects must declare their ADAS version  
- Global updates require communication + migration notes  
- Example files must be maintained in parallel with specs  

---

## Notes

This ADR formalizes the ADAS system and establishes it as a permanent part of Devon’s development ecosystem.

Future ADRs will refine rules, add Domains, or evolve the architecture.  
