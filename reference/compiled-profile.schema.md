<!--
Compiled Profile Metadata (filled by compiler script)

COMPILED_PROFILE:
  PROFILE: <profile-name>                 # e.g., web-app, desktop-app
  MODE: <light|heavy>
  ADAS_CORE_VERSION: <x.y.z>              # from adas-config.json
  GENERATED_AT: <ISO8601 timestamp>
  SOURCE_HASH:
    CORE_DOMAINS: "<sha256>"
    PROFILE_DOMAINS: "<sha256>"
    DOCS: "<sha256>"
-->

# ADAS — Compiled Profile  
## Profile: <profile-name>  
## Mode: <light|heavy>  

> This compiled profile is a **single-file, LLM-ready, mode-specific specification** synthesized from:
> - ADAS Core Domains  
> - ADAS Profile Overrides  
> - ADAS Documentation (usage modes, loading rules, domains overview, profiles & config)  
> - ADAS Invariants  
>
> It represents the **authoritative effective ADAS behavior** for AI helpers working in a project using this profile and mode.

---

# 1. Effective Behavior Summary (LLM-Readable)

Provide a **concise, authoritative description** of how AI helpers must behave in this profile + mode:

- Core responsibilities  
- What type of changes are allowed  
- What must never be changed  
- Any profile-specific expectations  
- High-level decision constraints  
- Light vs Heavy mode differences  

This section should be the **fastest possible summary** of ADAS for an AI helper.

---

# 2. Mode-Specific Expectations

Describe what the chosen **mode** (Light or Heavy) allows and forbids.

## 2.1 Light Mode (if MODE=light)
- Small, local changes only  
- No architecture or stack changes  
- No security posture changes  
- No new dependencies  
- No ADRs  
- Strict adherence to Domain 14 (organization)  
- Must match existing patterns and conventions  

## 2.2 Heavy Mode (if MODE=heavy)
- Architectural changes allowed  
- New dependencies allowed  
- ADRs may be created  
- Significant new features permitted  
- Must maintain security, invariants, and ADAS correctness  
- Must document reasoning and traceability  

---

# 3. Effective Domain Rules (Profile-Adjusted)

This section merges **Core Domains**, **Profile Overrides**, and **Docs** into the final form.

Each subsection must present the **project-relevant, mode-aware version** of the domain.

---

## 3.1 Domain 01 — AI Entry Point & Meta-Rules
- How AI helpers initialize  
- Where ADAS lives (global + local)  
- Precedence model  
- How profiles + modes override behavior  
- How project `.local` overlays apply  
- Rules for reading ADAS context  

---

## 3.2 Domain 02 — Product Vision & Domain Language (if applicable)

Summaries relevant to the profile.

---

## 3.3 Domain 03 — Tech Stack & Dependencies (profile-adjusted)

Summaries must include:

- Allowed tech stack  
- Required dependencies  
- Forbidden technologies  
- How stack decisions depend on mode  
- Rules for modifying dependencies  

If Light Mode: express restrictions.  
If Heavy Mode: express allowed changes.

---

## 3.4 Domain 04 — Architecture & Code Organization

Profile-adjusted architecture rules:

- Layers, boundaries, invariants  
- Folder structure  
- Allowed/forbidden reorganizations  
- Mode differences  

---

## 3.5 Domain 06 — Testing & Quality

Effective rules for:

- Unit tests  
- Integration tests  
- Regression tests  
- When tests are required  
- Test expectations by mode  

---

## 3.6 Domain 07 — Workflow, Git, Code Review

Summaries for:

- Structure of changes  
- PR size expectations  
- Review behavior  
- Commit strategy  
- Mode differences (small PRs vs large PRs)  

---

## 3.7 Domain 11 — Decisions & ADRs

Describe:

- When ADRs are required  
- ADR format expectations  
- ADR constraints  
- ADR storage  
- ADR review  

In Light Mode: ADRs forbidden.  
In Heavy Mode: ADRs encouraged when decisions matter.

---

## 3.8 Domain 12 — Security & Secrets (mode-aware)

Summaries for:

- Secrets handling  
- Auth requirements  
- External API constraints  
- RLS and permission models (if Supabase profile)  
- Forbidden actions (always)  
- Allowed actions (depending on mode)  

This section must be extremely precise.

---

## 3.9 Domain 14 — File Organization & Naming

Effective file layout rules:

- How to name files  
- Folder conventions  
- Placement of features, modules, tests  
- Rules AI must always respect  

---

## 3.10 Domain 15 — ADAS Overview & Maintenance

Summaries for:

- Versioning rules  
- Precedence model  
- How ADAS evolves  
- What the AI must do when encountering conflicts  
- Profile + mode selection  

---

# 4. Effective Invariants (Non-Negotiable Rules)

List all profile-adjusted invariants, such as:

- Security boundaries  
- Architectural boundaries  
- Naming/structure invariants  
- Core stack constraints  
- Things AI must never change  

These come from both **core domains** and **profile overrides**.

---

# 5. Profile Overlays — Effective Merged Rules

Provide the final result of merging:

- Core Domains  
- Profile Domains  
- ADAS Docs  
- Invariants  

This is the shortcut for AI helpers:  
**“Here is the final truth.”**

---

# 6. Mode-Specific Examples (LLM Training Aids)

Provide concrete examples of:

- Good ADAS-respecting changes  
- Bad ADAS-violating changes  

Adjust examples for the profile + mode.

---

# 7. How to Detect Conflicts

Provide instructions for the AI on:

- How to detect ADAS violations  
- How to surface conflicts to the user  
- What to do when rules are ambiguous  

---

# 8. Final Summary for AI Helpers

A short, powerful, one-paragraph summary:

> A direct instruction telling the AI how it must behave under this compiled profile and mode.

