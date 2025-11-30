# ADAS Specification Index (Canonical Wiki Edition)  
**Core + Profiles + Project Overlays — Compiled-aware**

This is the single, wiki-style landing page for ADAS file structure and Domains. It favors compiled artifacts (cheaper, faster) but keeps the Core → Profile → Local precedence and the extend-only rule for security (Domain 12).

Use this page when:
- Onboarding to ADAS or explaining it to others  
- Giving AI helpers a fast orientation to which Domain applies  
- Linking from GitHub Pages/wiki as the canonical spec index  

---

# How ADAS Layers Load (Compiled-First)
- **Core + Profile (Global):** Prefer the **compiled profile** for the active profile/mode (Core merged with profile overrides). If missing, load Core specs (01–15 + Mode-Aware addenda) then Profile overrides.  
- **Project (.local):** Prefer the **compiled project briefing** (compiled profile + project `.local` overlays for the mode). If missing, load `.ai/00_ai-entry-point-meta-rules.md` and all `.ai/*.local.md`.  
- **Precedence:** Core → Profile → Local → User. Security (Domain 12) may be tightened by profiles/locals but never weakened. Non-overridable domains per `adas-config.json`: 01, 07, 11, 14, 15.

---

# 📘 Table of Contents (Domain Summaries)
- [Domain 01 – AI Entry Point & Meta-Rules](#domain-01--ai-entry-point--meta-rules)
- [Domain 02 – Product Vision & Domain Language](#domain-02--product-vision--domain-language)
- [Domain 03 – Tech Stack & Constraints](#domain-03--tech-stack--constraints)
- [Domain 04 – Architecture & Code Organization](#domain-04--architecture--code-organization)
- [Domain 05 – Coding Style, Patterns & Security Guardrails](#domain-05--coding-style-patterns--security-guardrails)
- [Domain 06 – Testing & Quality](#domain-06--testing--quality)
- [Domain 07 – Workflow, Git & Code Review](#domain-07--workflow-git--code-review)
- [Domain 08 – Project Status / Current Work](#domain-08--project-status--current-work)
- [Domain 09 – Feature Ledger](#domain-09--feature-ledger)
- [Domain 10 – Pitfalls, Invariants & Danger Zones](#domain-10--pitfalls-invariants--danger-zones)
- [Domain 11 – Decisions / ADRs](#domain-11--decisions--adrs)
- [Domain 12 – Security & Secrets](#domain-12--security--secrets)
- [Domain 13 – Templates & Interaction Model](#domain-13--templates--interaction-model)
- [Domain 14 – ADAS File Organization & Naming](#domain-14--adas-file-organization--naming)
- [Domain 15 – ADAS Overview & Maintenance](#domain-15--adas-overview--maintenance)

---

# Domain 01 – AI Entry Point & Meta-Rules
Defines how AI helpers start, what to load first, the authority order, and mandatory output format.

# Domain 02 – Product Vision & Domain Language
Product purpose, personas, goals/non-goals, and canonical terminology; keeps naming and feature intent aligned.

# Domain 03 – Tech Stack & Constraints
Allowed/forbidden technologies and dependency rules; profile overrides specialize stacks.

# Domain 04 – Architecture & Code Organization
Layering, folder layout, dependency direction, and boundaries; protects architectural integrity.

# Domain 05 – Coding Style, Patterns & Security Guardrails
Naming, formatting, preferred patterns, and inline security rules; keeps code consistent and safe.

# Domain 06 – Testing & Quality
Testing strategy, structure, tooling, and quality gates; guides when and how to add or update tests.

# Domain 07 – Workflow, Git & Code Review
Branching, commit format, PR expectations, and CI gates; ensures traceable, reviewable work.

# Domain 08 – Project Status / Current Work
Live snapshot of active work, blockers, and stability markers; avoids collisions and unstable areas.

# Domain 09 – Feature Ledger
Lifecycle of features (idea → planned → in progress → shipped → deprecated); prevents duplicates and untracked changes.

# Domain 10 – Pitfalls, Invariants & Danger Zones
Critical invariants, sharp edges, and historical pitfalls; must be honored to avoid regressions.

# Domain 11 – Decisions / ADRs
How to record long-lived decisions with ADRs, including structure, status, and superseding rules.

# Domain 12 – Security & Secrets
Security posture, auth patterns, secret handling, and forbidden practices. **Extend-only:** profiles/locals may tighten, never relax.

# Domain 13 – Templates & Interaction Model
Output format and templates (ADRs, design docs, tests, features); when to use lightweight vs full templates.

# Domain 14 – ADAS File Organization & Naming
Where ADAS files live (`domains/core`, `domains/profiles/<profile>`, `.ai/`), naming patterns, and skeleton conventions; keeps ADAS discoverable.

# Domain 15 – ADAS Overview & Maintenance
Versioning, governance, profile/version management, and how ADAS evolves via ADRs.

---

# Starters & Skeletons
- Starters: `/starters/<profile>/.ai` provides a ready `.ai` folder per profile.  
- Skeletons: `domains/core/` (and profile overrides) define how project `.local` files should look.

---

# Related Documentation
- **ADAS Landing Page:** [`index.md`](index.md)  
- **Understanding ADAS Domains:** [`understanding-adas-domains.md`](understanding-adas-domains.md)  
- **ADAS File Specifications Overview (formal):** [`ADAS-file-specifications-overview.md`](ADAS-file-specifications-overview.md)  
- **Profiles & Config:** [`adas-profiles-and-config.md`](adas-profiles-and-config.md)  
- **How to Load ADAS Context:** [`for-ai-helpers-how-to-load-adas-context.md`](for-ai-helpers-how-to-load-adas-context.md)  

---

# Summary
This canonical wiki index gives the fastest path to understand ADAS structure, precedence, compiled artifacts, and what each Domain governs—so humans and AI helpers can navigate and apply ADAS correctly.
