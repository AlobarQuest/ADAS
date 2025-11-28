# ADAS Specification Index (Wiki Edition)  
**Human-Friendly, Core + Profiles, Fully Updated Edition**

This page provides a **narrative, wiki-style overview** of all ADAS files, Domains, layers, and behaviors.  
It is less formal than the “File Specifications Overview” and focuses on providing a clear mental map of how ADAS works as a system.

This document is ideal for:

- Humans learning ADAS structure for the first time  
- AI assistants needing high-level orientation  
- Tools or bots navigating the ADAS repo  
- Anyone maintaining or extending ADAS  

---

# 1. What ADAS Is (High-Level)

ADAS is a **governance and reasoning framework** for AI-assisted software development.  
It defines how AI helpers:

- Reason about your projects  
- Understand architecture  
- Use domain language  
- Make decisions  
- Maintain consistency  
- Avoid drift  
- Produce structured, predictable work  

ADAS is intentionally **modular**. All rules fall under 15 Domains, each a slice of development governance.

---

# 2. The Three-Layer Model (Core → Profile → Project)

To support multiple development types, ADAS now uses a **three-layer system**:

---

## **Layer 1 — Core (Global Rules)**  
Path:  
```
domains/core/
```

- Applies to *all* projects  
- Contains the 15 canonical Domain Specifications  
- Defines global governance, workflows, and architectural standards  
- Cannot be overridden in certain Domains (as defined in `adas-config.json`)

---

## **Layer 2 — Profiles (Specialization Rules)**  
Path:  
```
domains/profiles/<profile-name>/
```

Profiles represent different development environments.

Current profile set:

| Profile name | Status | Description |
|--------------|--------|-------------|
| **web-app** | stable | Primary profile for all web-based and Supabase-oriented development |
| **desktop-app** | experimental | Desktop-based projects (Electron, PyQt, etc.) |
| **mobile-ios** | planned | Swift/iOS development |

Profiles override or extend certain Core Domains:

- **Domain 03 — Tech Stack & Constraints**  
- **Domain 04 — Architecture & Code Organization**  
- **Domain 06 — Testing & Quality**  
- **Domain 12 — Security & Secrets**

All Profile information is declared in:  
→ **`adas-config.json`**

---

## **Layer 3 — Project `.local` Files**  
Path inside each project:  
```
.ai/
```

Each `.local.md` file adds project-level overrides or context.

Example:
```
.ai/03_tech-stack-constraints.local.md
```

Overrides reflect decisions unique to each project (e.g., React vs Next.js, or which backend APIs are active).

Load order:
1. User request  
2. Project `.local`  
3. Profile overlay  
4. Core  
5. Model defaults  

---

# 3. What AI Helpers Load (and in What Order)

AI helpers always begin with:

```
.ai/00_ai-entry-point-meta-rules.md
```

This file declares:

- ADAS **core version**  
- ADAS **profile name**  
- List of project `.local` overrides  
- Any project-specific info AI helpers must understand  
- The ADAS repo reference  

Then helpers load:

1. ADAS core specification  
2. Active profile overlays  
3. All project `.local` files  
4. Apply non-overridable constraints from `adas-config.json`  
5. Operate under the merged rule set  

Detailed loader instructions:  
→ **[for-ai-helpers-how-to-load-adas-context.md](for-ai-helpers-how-to-load-adas-context.md)**

---

# 4. `adas-config.json` — The System's “Source of Truth”

Path:
```
/adas-config.json
```

This JSON file is a machine-readable description of:

- Core version  
- Profiles and their versions  
- Which Domains profiles override  
- Starter template paths  
- Non-overridable Domains  
- Folder paths for Core and Profiles  
- Default profile for new projects  

It ensures:

- Consistency  
- Automation  
- Predictability  
- Multi-profile clarity  

For full details:  
→ **[adas-profiles-and-config.md](adas-profiles-and-config.md)**

---

# 5. Domain Overview (Human-Friendly Summary)

There are **15 Domains**.  
Each Domain has:

- **Specification** — authoritative rules  
- **Skeleton** — template for project `.local` files  

Below is the wiki-style summary.

---

## **01 — AI Entry Point & Meta-Rules**
Defines how AI helpers read and interpret ADAS.  
Covers core reasoning behavior, safety, formatting requirements, determinism rules.

Never overridden.

---

## **02 — Product Vision & Domain Language**
Defines the project’s conceptual language.  
Ensures AI helpers use consistent terminology and understand project purpose.

---

## **03 — Tech Stack & Constraints**
Defines which technologies should—and shouldn’t—be used.

Has profile overlays.  
Examples:  
Web-app may specify Supabase, Next.js, JWT flow, etc.

---

## **04 — Architecture & Code Organization**
Defines folder structures, layering, separation of concerns.

Has profile overlays.

---

## **05 — Coding Style, Patterns & Guardrails**
Defines best practices for implementation-level work.

---

## **06 — Testing & Quality**
Defines testing expectations, testing tools, and quality gates.

Has profile overlays.

---

## **07 — Workflow, Git & Code Review**
Defines branching, PR rules, commit structure, and AI-assisted review policies.

---

## **08 — Project Status / Work-in-Progress**
Defines how AI helpers recognize the current task and status of the project.

---

## **09 — Feature Ledger**
Defines how features are tracked: planned, active, done.

---

## **10 — Pitfalls & Invariants**
Defines architectural invariants, pitfalls, and danger zones.

---

## **11 — Decisions (ADRs)**
Defines the ADR template and rules for logging decisions.

---

## **12 — Security & Secrets**
Defines security posture and secret management.

Has profile overlays.

---

## **13 — Templates & Interaction Model**
Defines output templates, engineering proposal structures, and PR templates.

---

## **14 — ADAS File Organization & Naming**
Defines how ADAS is structured:

- Core folder  
- Profile folders  
- Project `.ai` structure  
- Skeleton files  
- Interaction with `adas-config.json`  

Updated for multi-profile ADAS.

---

## **15 — ADAS Overview & Maintenance**
Defines how ADAS evolves over time:

- Versioning rules  
- Profile versioning  
- Upgrade steps  
- Consistency checks  
- How `adas-config.json` must stay in sync  

Updated to support multi-profile ADAS governance.

---

# 6. Starter Templates

Each profile includes a starter folder:

```
/starters/<profile-name>/
```

Contains:

- Pre-configured `.ai/` directory  
- Recommended folder structure  
- Example code  
- First ADR  
- Recommended tooling setup  

Starter paths are defined in:  
→ **adas-config.json**

---

# 7. When to Create `.local` Overrides

A `.local` override should exist when:

- A project deviates from the Profile defaults  
- You choose different tech (e.g., switching from Supabase to Firebase)  
- A specific architectural constraint exists  
- You need exceptions to testing rules  
- You need additional profile-level guardrails  

The override must:

- Be concise  
- Explain *why*  
- Not violate non-overridable domains  

---

# 8. How to Evolve ADAS

All changes follow this path:

1. Propose an ADR  
2. Update Core or Profile Domains  
3. Update skeletons  
4. Update starter templates  
5. Sync version + metadata in `adas-config.json`  
6. Update documentation pages  
7. Bump ADAS and/or profile version  

This keeps ADAS coherent and healthy.

---

# 9. Related Documentation

- **ADAS Landing Page:**  
  → [`index.md`](index.md)

- **Understanding ADAS Domains:**  
  → [`understanding-adas-domains.md`](understanding-adas-domains.md)

- **ADAS File Specifications Overview:**  
  → [`ADAS-file-specifications-overview.md`](ADAS-file-specifications-overview.md)

- **ADAS Profiles and Config (Detailed):**  
  → [`adas-profiles-and-config.md`](adas-profiles-and-config.md)

- **How AI Helpers Load ADAS Context:**  
  → [`for-ai-helpers-how-to-load-adas-context.md`](for-ai-helpers-how-to-load-adas-context.md)

---

# 10. Summary

This wiki-style overview provides the big-picture mental map of ADAS:

- Core → Profile → Project layering  
- What each Domain does  
- How files are organized  
- Where overrides live  
- How AI helpers reason about ADAS  
- How versioning works  
- How ADAS evolves  

It is the best entry point for understanding the “shape” of the entire ADAS system.