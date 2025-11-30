# AGENTS.md — Project Governance for AI Helpers (ADAS Web-App Profile)

This repository uses **Devon’s AI Development Assistant System (ADAS)** to control and constrain how AI helpers behave in this project.

Any AI helper (Codex, Claude, etc.) must follow **everything in this file** whenever working in this repo.

---

## 1. What ADAS Is (for this project)

ADAS is **Devon’s governance framework** for AI coding helpers.  
It defines how AI must:

- Read and interpret project + global rules  
- Decide what changes are allowed  
- Modify and structure code  
- Handle architecture, dependencies, security, and testing

ADAS is **not**:

- Your runtime sandbox, approval system, or filesystem/network limits  
- Automotive ADAS  
- A generic coding guideline pack

In this project, ADAS is the **authoritative rulebook**.

---

## 2. Where ADAS Lives

This project uses the **web-app ADAS profile**.

- **Global ADAS (Core + Profile) preferred load path:**  
  - Use the **compiled profile** when present (Core + web-app profile merged):  
    `../ADAS/domains/profiles/web-app/Compiled Profile - light.md`  
    `../ADAS/domains/profiles/web-app/Compiled Profile - heavy.md`  
  - If the compiled profile is missing, load **Core** (`../ADAS/domains/core/*`) then the **web-app profile overrides** (`../ADAS/domains/profiles/web-app/*`).
- **Project-local rules (overlays):**  
  `.ai/` folder in this repository  
  - `.ai/00_ai-entry-point-meta-rules.md`  
  - `.ai/*.local.md`
- **Per-project compiled briefings (preferred):**  
  `.ai/adas-briefing.light.md`  
  `.ai/adas-briefing.heavy.md`  
  These embed the compiled profile plus the local overlays for the given mode. If missing, read the `.local` files directly.
- **Global configuration:**  
  `../ADAS/adas-config.json`

---

## 3. Modes: Light vs Heavy

This project works in two modes:

- **Light Mode**
  - Small, local changes
  - No architecture/stack/security posture changes
  - No new major dependencies
  - No ADR creation/modification

- **Heavy Mode**
  - Architecture/stack changes allowed (with ADAS rules)
  - ADRs may be proposed/modified
  - New features/modules/services allowed, with proper design

The mode is chosen by **Devon**, not by you.

---

## 4. Startup Ritual for Every Session

Follow this exact sequence when you start working in this repo.

### Step 1 — Identify mode

Ask Devon:

> “Should I operate in Light Mode or Heavy Mode for this session?”

Do not assume a mode yourself.

Let `MODE` be `light` or `heavy` based on Devon’s answer.

### Step 2 — Load compiled briefing if present

Check for `.ai/adas-briefing.<MODE>.md`:

- If it **exists**:
  - Read it fully.
  - Treat it as the **primary ADAS summary** for this project and mode.
  - It already includes the compiled profile (Core + web-app) **plus** the project `.local` overlays for that mode.

- If it **does not exist**:
  - Fall back to the global **compiled profile** (Core + web-app) for the mode if present:
    - `../ADAS/domains/profiles/web-app/Compiled Profile - <MODE>.md`
  - If the compiled profile is missing, load Core then profile overrides:
    - `../ADAS/domains/core/*` (all Domains + Mode-Aware addenda)
    - `../ADAS/domains/profiles/web-app/*` (overrides for 03/04/06/12)
  - Then load project overlays:
    - `.ai/00_ai-entry-point-meta-rules.md`
    - `.ai/*.local.md`
  - Optionally, ask Devon if they want you to regenerate the per-project briefing.

### Step 3 — Always load project overlays

Regardless of briefing:

- Read `.ai/00_ai-entry-point-meta-rules.md`
- Read all `.ai/*.local.md`

Treat `.local` files as **hard overlays** over global/profile rules.

### Step 4 — Optionally consult full ADAS (only when needed)

Only read full ADAS sources (`../ADAS/domains/core/*.md`, `../ADAS/docs/*.md`) when:

- The briefing explicitly tells you to consult a specific Domain for details, or  
- You encounter ambiguity that cannot be resolved from:
  - `.ai/adas-briefing.<MODE>.md`
  - `.ai/*.local.md`
  - global Compiled Profile

In security-sensitive tasks, you **should** consult Domain 12 in the global ADAS repo even if the briefing seems sufficient.

### Step 5 — Produce ADAS_SESSION_SUMMARY

After reading the briefing + `.local` overlays, respond in this exact format:

```
ADAS_SESSION_SUMMARY:
- ADAS definition (per this repo): <1–3 bullets>
- Active profile: web-app
- Usage mode: <light|heavy>
- Primary source: <adas-briefing.<MODE>.md | Compiled Profile + overlays>
- In-scope Domains: <Domain numbers + names that matter for this session>
- Project overlays: <list .ai/*.local.md>
- Conflicts detected: <none or explanation>
```

Then ask:

> “Confirm ADAS_SESSION_SUMMARY?”

Wait for Devon’s confirmation before making changes.

---

## 5. Precedence Model (Always Use This Order)

When ADAS rules conflict, apply them in this order:

1. **Core ADAS Domains** (conceptually)  
2. **Compiled Profile** for this profile+mode  
3. **Per-project briefing** (`.ai/adas-briefing.<MODE>.md`)  
4. **Project `.local` overlays** (`.ai/*.local.md`)  
5. **User request** (only if consistent with 1–4)

If Devon’s request conflicts with ADAS, you must:

1. Explain the conflict.  
2. Suggest an ADAS-compliant alternative.

---

## 6. How to Answer “Constraints” Questions

When Devon asks:

> “What constraints are you under?”  
> “Which ADAS rules apply?”  
> “Does this violate ADAS?”

You must **not** answer in terms of your generic sandbox or approval limits.

Instead, answer based on:

- The **Mode** (`light` or `heavy`)  
- The **Compiled Profile** behavior (web-app, mode-specific)  
- The **per-project briefing** (if present)  
- The **Domain rules** you’re using (03 tech stack, 04 architecture, 06 testing, 12 security, 14 organization, etc.)  
- The **`.local` overlays** that tighten or adjust those rules

Example response shape:

```
I’m constrained by:
- Domain 03 (tech stack) as summarized in the briefing
- Domain 04 (architecture) for web-app projects
- Domain 12 (security) regarding secrets and auth
- The .ai/03_tech-stack-constraints.local.md overlay
- Light Mode, which forbids stack/architecture/security changes
```

---

## 7. Behavioral Expectations

You must:

- Make decisions that are architecturally correct for web-app projects  
- Respect the tech stack and architecture defined by the profile and `.local` files  
- Avoid unnecessary changes and large rewrites, especially in Light Mode  
- Not introduce new dependencies without explicit ADAS permission  
- Not modify security posture or secrets handling without aligning with Domain 12  
- Keep naming and file structure consistent with Domain 14 and project conventions  
- Surface ADAS Domains explicitly when they drive your decisions

---

## 8. Feature Ledger & ADR Behavior

In **Heavy Mode**, when adding meaningful features or changing behavior:

- Update `.ai/09_feature-ledger.local.md` with:
  - Short description of the feature/change
  - Affected Domains (e.g., 03, 04, 06, 12)
  - Any notable invariants introduced

If you believe a change should be captured as an ADR:

- Propose the ADR content instead of unilaterally making deep changes.
- Ask Devon how to proceed.

---

## 9. When Unsure

If you are uncertain how ADAS applies, you must not guess.

Instead, say something like:

> “This action appears to touch Domain X and Y. Under the current mode and overlays, I am not confident this is ADAS-compliant. Do you want me to:
>  - stay in Light Mode and limit this to a smaller change,  
>  - switch to Heavy Mode and propose a design (and possibly an ADR), or  
>  - revisit the ADAS rules/briefing for this area first?”

---

## 10. Final Rule

If there is any conflict between:

- speed vs correctness, or  
- convenience vs ADAS,

you must choose:

> **ADAS integrity over convenience.**
