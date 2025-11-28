# ADAS Documentation Home

ADAS (AI Development Assistant System) is the governance and reasoning framework that keeps Devon’s AI helpers aligned, consistent, and safe across all projects.

ADAS gives you:

- Stable architectural and coding standards  
- Clear guidance for AI helpers  
- Safe evolution of rules and conventions  
- Multi-profile support (web-app now, others later)  
- Two usage modes for AI helpers: **Light Mode** and **Heavy Mode**

---

## 1. ADAS Layers

ADAS is structured into three main layers:

1. **Core Domains** – global rules for all projects  
2. **Profiles** – specialization per project type (e.g., `web-app`)  
3. **Project `.local`** – per-project overrides and metadata  

Core + Profiles + Local overlays are wired together via:

- `adas-config.json` — machine-readable configuration  
- `.ai/00_ai-entry-point-meta-rules.md` — per-project entrypoint for AI helpers  

Some Core Domains also have **Mode-Aware Addenda**, which explain how they behave in **Light Mode** vs **Heavy Mode**.

---

## 2. Usage Modes (Light vs Heavy)

AI helpers use two operational modes:

- **Light Mode** – for small, localized tasks  
  - Minimal ADAS load (summaries + relevant Domains)  
  - No architecture or security rewrites  
  - No ADR creation  

- **Heavy Mode** – for architecture, security, and system-level changes  
  - Full ADAS load (Core + Profiles + Local + ADRs)  
  - Strict governance enforcement  
  - ADRs and ADAS updates allowed when appropriate  

See:  
→ `adas-usage-modes.md` for details.

---

## 3. Key Documents

### Conceptual Overview

- **Understanding ADAS Domains**  
  → `understanding-adas-domains.md`

- **ADAS File Specifications**  
  → `ADAS-file-specifications-overview.md`

- **Wiki-Friendly Overview of Files**  
  → `ADAS-file-specification-overview-wiki.md`

### Operational Guides

- **Profiles & Config**  
  → `adas-profiles-and-config.md`

- **For AI Helpers: How to Load ADAS Context**  
  → `for-ai-helpers-how-to-load-adas-context.md`

- **Usage Modes**  
  → `adas-usage-modes.md`

---

## 4. Profiles

ADAS supports different Profiles for different project types.  
Current plan:

- `web-app` – implemented and stable  
- `desktop-app` – planned  
- `mobile-ios` – planned  

Each Profile has its own set of Domain overrides, e.g.:

- `domains/profiles/web-app/Domain 03 - Tech Stack & Constraints (web-app, Mode-Aware).md`

Profiles specialize:

- Tech stack choices  
- Architecture patterns  
- Testing conventions  
- Security posture  

See:  
→ `adas-profiles-and-config.md`

---

## 5. Project Starters

Each Profile can ship with a starter `.ai` folder for new projects.

Example:

```text
starters/web-app/.ai/
  00_ai-entry-point-meta-rules.md
  03_tech-stack-constraints.local.md
  04_architecture-code-organization.local.md
  06_testing-quality.local.md
  07_workflow-git-code-review.local.md
  08_project-status-current-work.local.md
  09_feature-ledger.local.md
  10_pitfalls-invariants.local.md
  11_decisions-adrs.local.md
  12_security-secrets.local.md
  14_adas-file-organization-naming.local.md
  15_adas-overview-maintenance.local.md
```

---

## 6. Versioning & Governance

ADAS uses semantic versioning:

- `MAJOR.MINOR` (e.g., `1.0`, `1.1`)  

Global governance is defined in **Domain 15** and implemented via:

- ADRs (Domain 11)  
- Core & Profile Domain updates  
- Starter template updates  
- `adas-config.json` updates  

---

## 7. Getting Started

If you’re an AI helper:

1. Read `.ai/00_ai-entry-point-meta-rules.md` in the project.  
2. Read `adas-profiles-and-config.md`.  
3. Read `adas-usage-modes.md`.  
4. Follow `for-ai-helpers-how-to-load-adas-context.md` exactly.

If you’re Devon:

- Use Light Mode for quick, local changes.  
- Use Heavy Mode when making system-level changes, new features, or security work.

ADAS is here to keep everything predictable, safe, and aligned with how you want to build software.
