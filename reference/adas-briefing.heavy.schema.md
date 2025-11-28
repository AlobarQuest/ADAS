<!--
ADAS_SESSION_BRIEFING:
  PROFILE: <profile-name>           # e.g. web-app, desktop-app, mobile-ios
  MODE: heavy
  ADAS_CORE_VERSION: <x.y.z>        # e.g. 1.1.0
  GENERATED_AT: <ISO8601 timestamp> # e.g. 2025-11-28T20:15:00Z
  SOURCE_HASH:
    COMPILED_PROFILE: "<hash-of-global-compiled-profile>"
    LOCAL_FILES: "<hash-of-local-.ai-files>"
-->

# ADAS Session Briefing — <profile-name> — Heavy Mode (Project: <project-name>)

> This file is a **per-project, per-mode compiled briefing** for ADAS.
> It is generated from:
> - Global ADAS Compiled Profile for this profile+mode
> - Project-local `.ai/*.local.md` overlays
> It is intended to be the **primary ADAS reference** for Heavy Mode in this project.

---

## 1. Effective Behavior Summary

Briefly describe how ADAS shapes behavior for **Heavy Mode** in this project.

- Scope of allowed changes (architecture, features, dependencies)
- Scope of forbidden changes (hard invariants)
- Any important project-specific nuances

Example bullets (to be replaced by the compiler):

- “In Heavy Mode, you may propose and implement architectural and feature-level changes.”
- “You must still respect security, invariants, and cross-domain constraints.”
- “Significant changes should be captured in ADRs and the feature ledger.”

---

## 2. Effective Domain Rules (Project-Adjusted)

Summarize the key Domains that matter for this project in Heavy Mode, **after** applying `.local` overlays.

### 2.1 Domain 01 — AI Entry Point & Meta-Rules

- How AI helpers should initialize in this project
- Where to find ADAS (global + local)
- How modes and ADR workflows are interpreted here

### 2.2 Domain 03 — Tech Stack & Dependencies

- Allowed tech stack (frontend, backend, data)
- Rules for adding/removing dependencies in Heavy Mode
- Local constraints from `.ai/03_tech-stack-constraints.local.md`

### 2.3 Domain 04 — Architecture & Code Organization

- Architectural boundaries and layering
- Rules for introducing new modules, layers, or services
- Requirements for documenting non-trivial changes (e.g., ADRs)

### 2.4 Domain 06 — Testing & Quality

- Expectations for tests when adding new features or refactoring in Heavy Mode
- Requirements for regression and integration tests

### 2.5 Domain 07 — Workflow, Git, Code Review

- How to structure larger changes and PRs
- Requirements for splitting work into reviewable chunks

### 2.6 Domain 11 — Decisions / ADRs

- When an ADR is required vs optional
- Required structure/format of ADRs
- Where ADRs live (global vs project-level)

### 2.7 Domain 12 — Security & Secrets

- Security posture rules that must **never** be violated
- Requirements for new external integrations, auth flows, or secrets handling

### 2.8 Domain 14 — File Organization & Naming

- Constraints on reorganizing files or modules
- Expectations for adding new areas of the codebase

### 2.9 Domain 15 — ADAS Overview & Maintenance

- How this project participates in the ADAS ecosystem
- Rules for updating ADAS_CORE_VERSION or ADAS_PROFILE

(Add or remove subsections for other Domains as needed.)

---

## 3. Project-Specific Overlays

List and summarize how each `.ai/*.local.md` file modifies behavior for this project in Heavy Mode.

Example structure:

- `.ai/01_product-vision-domain-language.local.md`
  - Project vision and domain language constraints for new features
- `.ai/03_tech-stack-constraints.local.md`
  - Constraints on adding/removing dependencies and services
- `.ai/04_architecture-code-organization.local.md`
  - Local architectural patterns and allowed refactors
- `.ai/06_testing-quality.local.md`
  - Test coverage expectations for significant changes
- `.ai/09_feature-ledger.local.md`
  - How to record features and changes
- `.ai/11_decisions-adrs.local.md`
  - Local ADR expectations and process
- `.ai/12_security-secrets.local.md`
  - Security posture, sensitive modules, and red lines
- `.ai/14_adas-file-organization-naming.local.md`
  - Local file organization and naming choices

---

## 4. Heavy Mode Capabilities (What You May / Must Do)

### 4.1 Allowed (and expected) in Heavy Mode

- Introduce new features, flows, or modules
- Perform architectural refactors within ADAS constraints
- Add new dependencies consistent with Domain 03 and `.local` constraints
- Propose and update ADRs when making non-trivial decisions
- Extend tests: unit, integration, and regression coverage

### 4.2 Forbidden in Heavy Mode

Even in Heavy Mode, some things are **never** allowed. For example:

- Violating core security rules (Domain 12)
- Bypassing secrets management or introducing plaintext secrets
- Breaking invariants documented in `.ai/10_pitfalls-invariants.local.md`
- Making silent, undocumented changes to critical behavior

---

## 5. ADRs, Feature Ledger, and Traceability

Describe how work in Heavy Mode must be recorded.

- When to update `.ai/09_feature-ledger.local.md`:
  - New feature, major behavior change, or significant refactor
- When to propose or update ADRs:
  - New architectural pattern
  - New external integration
  - Major change to data model or security posture

Provide a suggested minimal structure for feature ledger entries and ADR references.

---

## 6. When to Consult Full ADAS

Describe when an AI helper **must go back** to the global ADAS repo or raw specs in Heavy Mode.

Examples:

- New architectural pattern → consult Domain 04 in full.
- New dependency or service → consult Domain 03 and 12.
- New security-sensitive behavior → consult Domain 12 in depth.
- Cross-cutting changes → consult Domain 15 for governance implications.

---

## 7. Example ADAS-Respecting Behaviors (Heavy Mode)

Provide a few examples of **good** and **bad** Heavy Mode behaviors.

- Good:
  - “Design and implement a new feature with an ADR and feature-ledger entry, aligned with Domain 03/04/06/12.”
  - “Refactor a subsystem into clearer layers, updating tests and documenting the decision.”
- Bad:
  - “Replace the auth subsystem without an ADR or security review.”
  - “Introduce a new third-party service without checking Domain 03/12 or updating overlays.”
  - “Massively restructure the project without leaving a trace in the feature ledger.”

---

## 8. Summary for AI Helpers

A short, final paragraph that AI helpers can keep in mind during Heavy Mode sessions.

Example:

> “In this project, Heavy Mode means you are allowed to design and implement significant changes—new features, architecture adjustments, and integrations—as long as you strictly follow ADAS Domains, local overlays, and traceability rules. Always document important decisions (ADRs, feature ledger) and never compromise on security or core invariants.”
