# Domain 01 – AI Entry Point & Meta-Rules (Project Overlay)

## Project Identification

- Project name: **PROJECT_NAME**
- Repo URL: **https://github.com/AlobarQuest/PROJECT_REPO**
- Owner: **Devon Watkins**

---

## Global ADAS Reference

- Global ADAS repo: https://github.com/AlobarQuest/ADAS  
- Global ADAS version to assume: **v1.0**

This project **inherits all rules** from Global ADAS v1.0, unless a `.local` overlay file in `.ai/` explicitly extends or overrides a Domain.

---

## Project-Level ADAS Overlays

The following Domains have **project-level overlays** in `.ai/`:

- Domain 02 – Product Vision & Domain Language  
  - File: `01_product-vision-domain-language.local.md`
- Domain 03 – Tech Stack & Constraints  
  - File: `03_tech-stack-constraints.local.md`
- Domain 04 – Architecture & Code Organization  
  - File: `04_architecture-code-organization.local.md`
- Domain 08 – Project Status & Current Work  
  - File: `08_project-status-current-work.local.md`
- Domain 09 – Feature Ledger  
  - File: `09_feature-ledger.local.md`
- Domain 10 – Pitfalls, Invariants & Danger Zones  
  - File: `10_pitfalls-invariants-danger-zones.local.md`
- Domain 11 – Decisions / ADRs  
  - File: `11_decisions-adrs.local.md`

If a Domain is **not** listed here, assume the Global ADAS Specification for that Domain applies as-is.

---

## Required Behavior for AI Helpers in This Project

When you (AI helper) work in this repository:

1. **Always load this file first.**
2. Assume Global ADAS **v1.0** is the baseline.
3. Then load any `.ai/*.local.md` files listed above and treat them as overlays.
4. Use the standard **4-section ADAS output format** for non-trivial work:
   1. Summary  
   2. Files Touched & Changes  
   3. Rationale & Alignment with ADAS  
   4. Tests  
5. If a user request conflicts with:
   - a Global ADAS rule, or  
   - a documented invariant / danger zone  
   then:
   - Explain the conflict.
   - Propose a safer alternative.
   - Ask for confirmation before proceeding.

---

## Notes & Conventions for This Project

- Domain 01 (AI Entry Point & Meta-Rules) is **not** overridden locally; Global rules apply.
- All `.local` files must follow the structure defined by their corresponding Global **Skeleton** files.
- When in doubt, defer to:
  1. Global ADAS  
  2. This project’s `.local` overlays  
  3. Human clarification
