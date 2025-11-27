# ADAS File Specifications Overview

This document provides a concise explanation of each ADAS Domain Specification file.  
Each row explains **what the file is for** and **how a new contributor or AI helper should use it**.

---

## Overview Table

| Specification File | Description |
|--------------------|-------------|
| **Domain 01 – ai-entry-point-meta-rules** | Defines how every AI agent begins work, loads ADAS context, interprets instructions, and applies the mandatory 4‑section output structure. It establishes the “constitution” for AI behavior, ensuring consistency, predictability, and safety across all AI interactions. New users should read this first to understand how AI helpers make decisions and structure their responses. |
| **Domain 02 – product-vision-domain-language** | Describes what the product is, who it serves, and the shared language the project uses. It defines personas, goals, non‑goals, and canonical terminology. This file ensures all AIs and humans speak the same language and keep the project aligned with its purpose. |
| **Domain 03 – tech-stack-constraints** | Defines the allowed technologies, frameworks, versions, and libraries. Includes required/preferred/allowed/forbidden tech and rules for adding new dependencies. Ensures AI helpers generate code that actually runs in the real environment and remains maintainable. |
| **Domain 04 – architecture-code-organization** | Specifies the structural layout of the project: layers, modules, dependency directions, and folder organization. Ensures new features respect the architecture and prevents accidental coupling or structural drift. New contributors should check this before adding or moving files. |
| **Domain 05 – coding-style-patterns-security-guardrails** | Defines naming conventions, formatting rules, preferred patterns, anti‑patterns, and inline security guardrails. Ensures generated code is consistent, safe, and readable. AI helpers use this Domain every time they produce code. |
| **Domain 06 – testing-quality** | Establishes testing expectations: test types, naming conventions, coverage rules, and when tests must be added or updated. Ensures changes are always backed by tests and helps prevent regressions. AIs consult this before making code or test updates. |
| **Domain 07 – workflow-git-code-review** | Governs branch naming, commit message format, PR expectations, CI rules, and review requirements. Ensures that code changes—both AI‑generated and human‑generated—fit a clean, traceable workflow. |
| **Domain 08 – project-status-current-work** | Provides a living snapshot of what the project is doing right now: active tasks, blockers, stability zones, and recent changes. AI helpers consult it before making changes to avoid working in unstable or frozen areas. |
| **Domain 09 – feature-ledger** | Tracks every feature across its lifecycle (idea → shipped → deprecated). Includes IDs, states, tags, links to ADRs and PRs. Prevents duplicate features or resurrecting deprecated behaviors. AIs consult this when proposing or working on features. |
| **Domain 10 – pitfalls-invariants-danger-zones** | Documents critical invariants, historical pitfalls, fragile areas, and dangerous patterns. AI helpers must check this before touching risky areas, and update it when identifying or fixing recurring issues. Helps preserve hard‑won knowledge. |
| **Domain 11 – decisions-adrs** | Defines how major decisions are recorded using ADRs (Architecture Decision Records). Helps AI helpers understand why certain choices were made and prevents re‑deciding settled issues. All major changes require checking or updating ADRs. |
| **Domain 12 – security-secrets** | Specifies rules for handling secrets, auth, encryption, secure libraries, and vulnerability prevention. Ensures AI helpers never commit secrets or introduce insecure patterns. Required reading for any change touching auth, data flow, or external APIs. |
| **Domain 13 – templates-interaction-model** | Defines the 4‑section output model and all reusable templates for ADRs, feature specs, design docs, etc. Ensures AI helpers produce consistent, structured, predictable outputs. New users can see how to format complex work here. |
| **Domain 14 – adas-file-organization-naming** | Defines the `.ai/` directory, sequential file structure (`NN_name.md`), kebab‑case naming, and reference file conventions (e.g., `PITFALLS.md`). Ensures AI helpers load ADAS correctly and keep documents organized. |
| **Domain 15 – adas-overview-maintenance** | Provides the high‑level introduction to ADAS, versioning rules, governance updates, changelog, and how ADAS evolves. Serves as the onboarding entry point for new contributors and defines how ADAS itself is maintained. |

---

# How to Use This Overview

- New project members can read this file to quickly understand **what each ADAS file does**.  
- AI helpers can load this overview to determine which Domain applies to a task.  
- Maintainers can use this list when updating or adding new Domains.  
- This file can also serve as the index page inside the `.ai/` directory.

---

# End of Document
