---
title: For AI Helpers: How to Load ADAS Context
layout: default
nav_order: 6
description: Operational guide for AI helpers on how to load and apply Global ADAS and project overlays.
---

# For AI Helpers: How to Load ADAS Context

This page is written directly for **AI helpers** working in a project that uses
Devon's Global ADAS system.

Your job is to:

- Load the correct ADAS context (Global + project overlay)  
- Understand which Domains apply to the task  
- Obey ADAS rules while generating or modifying code  

---

## 1. Locate the Project `.ai` Directory

In any ADAS-enabled project, there is a `.ai/` folder at the repo root.

Typical structure:

```text
.ai/
  00_ai-entry-point-meta-rules.md
  01_product-vision-domain-language.local.md
  03_tech-stack-constraints.local.md
  04_architecture-code-organization.local.md
  08_project-status-current-work.local.md
  09_feature-ledger.local.md
  10_pitfalls-invariants-danger-zones.local.md
  11_decisions-adrs.local.md
```

You must treat this directory as the **entry point** to ADAS for that repo.

---

## 2. Read `00_ai-entry-point-meta-rules.md` First

This file tells you:

- The **Global ADAS repo URL**  
- The **Global ADAS version** to assume (e.g., `v1.0`)  
- Which Domains have project-level overlays  

From this file you learn:

- That Global ADAS defines the **baseline rules**  
- That `.local` files extend or override certain Domains for this project  

You should parse this file and treat it as your **meta-configuration**.

---

## 3. Understand Global vs Local ADAS

Global ADAS lives in its own repository (for example `https://github.com/AlobarQuest/ADAS`) and contains:

- `domains/Domain NN - <name> - Specification.md` (Global rules)  
- `domains/Domain NN - <name> - Skeleton.md` (Templates)  

Projects do **not** directly fetch these files at runtime, but they are written
with the assumption that you (AI helper) are operating under their rules.

You must:

- Assume the Global Spec for each Domain is the **source of truth**.  
- Treat project `.local` files as overlays that specialize those rules.

---

## 4. Determine Which Domains Are Relevant to the Task

For any given request, decide which Domains matter. For example:

- Changing core business logic?  
  - Domain 02 (Vision & Language)  
  - Domain 04 (Architecture)  
  - Domain 09 (Feature Ledger)  
  - Domain 10 (Invariants)  

- Adding a new endpoint?  
  - Domain 03 (Tech Stack & Constraints)  
  - Domain 04 (Architecture)  
  - Domain 05 (Coding Standards)  
  - Domain 07 (Testing)  
  - Domain 12 (Documentation)  

- Changing branching/merge behavior?  
  - Domain 06 (Workflow & CI/CD)  

Always reason about **which Domains apply** before taking action.

---

## 5. Apply Precedence Rules

When you encounter rules that might conflict, use this order:

1. **User request**, if consistent with ADAS  
2. **Project-level `.local` overlay**  
3. **Global ADAS Specification**  
4. Model defaults  

If a user request conflicts with ADAS:

- Explain the conflict  
- Suggest a safe alternative  
- Ask for confirmation before performing a risky action  

If a `.local` overlay conflicts with a Global rule that is explicitly marked
non-overridable (for example, security invariants), defer to the Global rule
and surface the inconsistency.

---

## 6. Use the ADAS 4-Section Output Format

When responding to any non-trivial request, use the standard structure:

1. **Summary**  
   - What you did or propose to do in 2–5 bullet points.
2. **Files Touched & Changes**  
   - List files, functions, and key edits (or planned edits).
3. **Rationale & Alignment with ADAS**  
   - Explain how your work aligns with relevant Domains (02, 03, 04, 05, 06, 07, 08, 09, 10, 11, etc.).
4. **Tests**  
   - Which tests you added or updated, or what tests should be run.

This format is part of the Global ADAS meta-rules and must be used consistently.

---

## 7. Respect Project Status, Features, and Danger Zones

Before making changes, consult the relevant `.local` overlays:

- `08_project-status-current-work.local.md`
  - Look for active work, blockers, and stability zones.

- `09_feature-ledger.local.md`
  - Check if the feature already exists, is planned, or deprecated.

- `10_pitfalls-invariants-danger-zones.local.md`
  - Re-read invariants and danger zones before touching related code.

- `11_decisions-adrs.local.md`
  - Check for existing project-level decisions that affect your task.

Use this information to avoid:

- Stepping on in-progress changes  
- Reintroducing known bugs  
- Violating invariants  

---

## 8. When to Suggest ADRs or Updates

You should propose:

- An **ADR** (Domain 11) when:
  - A change affects architecture, stack, or long-term behavior.

- **Updates to `.local` files** when:
  - You introduce a new feature (update Feature Ledger).  
  - You change an invariant or discover a new danger zone.  
  - Project status meaningfully changes.

Use the **Skeleton** files in the Global ADAS repo as templates when preparing
new ADRs or updates.

---

## 9. Summary for AI Helpers

When working in an ADAS-enabled project:

1. Load `.ai/00_ai-entry-point-meta-rules.md` first.  
2. Assume the declared Global ADAS version as your baseline.  
3. Apply project `.local` overlays for relevant Domains.  
4. Use the ADAS 4-section output format.  
5. Check Status, Feature Ledger, Pitfalls, and ADRs before major changes.  
6. Surface conflicts instead of silently ignoring ADAS rules.

If you follow this process, you will behave like a disciplined member of a
well-governed engineering team, not an isolated code generator.
