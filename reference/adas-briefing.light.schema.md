<!--
ADAS_SESSION_BRIEFING:
  PROFILE: <profile-name>           # e.g. web-app, desktop-app, mobile-ios
  MODE: light
  ADAS_CORE_VERSION: <x.y.z>        # e.g. 1.1.0
  GENERATED_AT: <ISO8601 timestamp> # e.g. 2025-11-28T20:15:00Z
  SOURCE_HASH:
    COMPILED_PROFILE: "<hash-of-global-compiled-profile>"
    LOCAL_FILES: "<hash-of-local-.ai-files>"
-->

# ADAS Session Briefing — <profile-name> — Light Mode (Project: <project-name>)

> This file is a **per-project, per-mode compiled briefing** for ADAS.
> It is generated from:
> - Global ADAS Compiled Profile for this profile+mode
> - Project-local `.ai/*.local.md` overlays
> It is intended to be the **primary ADAS reference** for Light Mode in this project.

---

## 1. Effective Behavior Summary

Briefly describe how ADAS shapes behavior for **Light Mode** in this project.

- Scope of allowed changes (small/local)
- Scope of forbidden changes (architecture/stack/security/ADRs)
- Any important project-specific nuances

Example bullets (to be replaced by the compiler):

- “In Light Mode, changes must be local in scope and low risk.”
- “Do not modify architectural boundaries, tech stack, or security posture.”
- “Follow existing patterns for tests, layout, and naming.”

---

## 2. Effective Domain Rules (Project-Adjusted)

Summarize the key Domains that matter for this project in Light Mode, **after** applying `.local` overlays.

### 2.1 Domain 01 — AI Entry Point & Meta-Rules

- How AI helpers should initialize in this project
- Where to find ADAS (global + local)
- How modes are interpreted here

### 2.2 Domain 03 — Tech Stack & Dependencies

- Allowed tech stack (frontend, backend, data)
- Local constraints from `.ai/03_tech-stack-constraints.local.md`
- What Light Mode permits vs forbids for dependencies

### 2.3 Domain 04 — Architecture & Code Organization

- Architectural layers and boundaries
- Folder and module structure patterns
- What Light Mode permits (local edits) vs forbids (large reorganizations)

### 2.4 Domain 06 — Testing & Quality

- Minimum expectations for tests in Light Mode
- What to do when fixing bugs vs adding small behavior

### 2.5 Domain 07 — Workflow, Git, Code Review

- Expectations around change size, PRs, and review in Light Mode

### 2.6 Domain 12 — Security & Secrets

- Security posture that must **not** be changed in Light Mode
- Handling of secrets, tokens, and sensitive data

### 2.7 Domain 14 — File Organization & Naming

- Key naming/layout rules that Light Mode must respect

### 2.8 Domain 15 — ADAS Overview & Maintenance

- How this project anchors into the ADAS ecosystem
- Any project-specific notes relevant to Light Mode

(Add or remove subsections for other Domains as needed.)

---

## 3. Project-Specific Overlays

List and summarize how each `.ai/*.local.md` file modifies behavior for this project.

Example structure:

- `.ai/01_product-vision-domain-language.local.md`
  - Key project vision and domain language
- `.ai/03_tech-stack-constraints.local.md`
  - Local tech stack decisions and constraints
- `.ai/04_architecture-code-organization.local.md`
  - Local architectural patterns or deviations
- `.ai/06_testing-quality.local.md`
  - Local testing approaches and expectations
- `.ai/12_security-secrets.local.md`
  - Local secrets management, auth, and sensitive areas
- `.ai/14_adas-file-organization-naming.local.md`
  - Local file organization choices

---

## 4. Light Mode Constraints (What You May / May Not Do)

### 4.1 Allowed in Light Mode

- Small, local refactors in individual modules
- Minor UI/UX adjustments
- Copy changes and basic validation tweaks
- Small test additions/updates that fit existing patterns
- Performance micro-optimizations that do not alter contracts

### 4.2 Forbidden in Light Mode

- Changing core dependencies or frameworks
- Modifying overall architecture or adding new layers
- Adjusting security posture (auth, encryption, secrets, PII handling)
- Creating or editing ADRs
- Large-scale project restructuring

---

## 5. When to Consult Full ADAS

Describe when an AI helper **must go back** to the global ADAS repo or raw specs.

For example:

- If a change touches auth, secrets, or external boundaries → read Domain 12 in full.
- If a change touches architecture, boundaries, or layering → read Domain 04 in full.
- If unsure whether Light Mode is sufficient → ask Devon and/or consult global ADAS docs.

---

## 6. Example ADAS-Respecting Behaviors (Light Mode)

Provide a few concrete examples of **good** and **bad** Light Mode behaviors.

- Good:
  - “Rename an internal function and update its unit tests.”
  - “Fix a bug in a single component and add a regression test.”
- Bad:
  - “Replace the auth library.”
  - “Move all business logic into React components.”
  - “Introduce a new external API call without checking Domain 03/12.”

---

## 7. Summary for AI Helpers

A short, final paragraph that AI helpers can keep in mind during Light Mode sessions.

Example:

> “In this project, Light Mode means you operate surgically: small, local, low-risk changes that improve behavior, clarity, or maintainability, without changing architecture, tech stack, or security posture. When in doubt, stop and ask Devon or propose a Heavy Mode design instead.”
