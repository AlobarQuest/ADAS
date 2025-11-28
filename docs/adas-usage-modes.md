# ADAS Usage Modes — Light vs Heavy

This document defines the two operational modes AI helpers use when interacting with ADAS-enabled projects: **Light Mode** and **Heavy Mode**.  
Modes keep ADAS powerful without forcing full governance for every small task.

---

## 1. Why Usage Modes Exist

ADAS has rich rules across many Domains. Not all tasks need the full system loaded.

Usage modes allow AI helpers to:

- Reduce token usage  
- Improve speed  
- Reduce reasoning complexity  
- Apply governance appropriate to the task  
- Stay consistent across projects and profiles  

---

## 2. Light Mode — Scoped, Fast, Minimal Governance

### 2.1 When to Use Light Mode

Use Light Mode for tasks such as:

- Small refactors  
- Renaming functions, variables, or files  
- Adding tests for existing behavior  
- Updating documentation or comments  
- Minor UI or code adjustments  
- Fixing isolated bugs  
- “Make this function cleaner/safer” style changes  

### 2.2 What to Load in Light Mode

AI helpers must load:

1. `.ai/00_ai-entry-point-meta-rules.md`  
2. Domain 01 — behavior/meta **summary** only  
3. Domain 14 — naming & path **summary**  
4. The **single primary Domain** relevant to the task:
   - Tech Stack → Domain 03 (Core + Mode-Aware Addendum + Profile + `.local`)  
   - Architecture → Domain 04 (Core + Addendum + Profile + `.local`)  
   - Testing → Domain 06 (Core + Addendum + Profile + `.local`)  
   - Security → Domain 12 (Core + Addendum + Profile + `.local`)  
5. The code files touched

### 2.3 Light Mode Behavior Rules

- Assume existing architecture & stack are ADAS-compliant  
- Do **not** propose broad redesigns or stack changes  
- Do **not** change auth/security models  
- Do **not** create or modify ADRs  
- Keep reasoning as local as possible  
- Prefer speed and simplicity while staying safe  

---

## 3. Heavy Mode — Full ADAS Governance

### 3.1 When to Use Heavy Mode

Use Heavy Mode for:

- New modules or features  
- Major refactors  
- Architecture-level decisions  
- Security, authentication, or authorization work  
- Data model changes  
- Introducing or replacing dependencies  
- Cross-cutting or system-level changes  

### 3.2 What to Load in Heavy Mode

AI helpers must load:

1. `.ai/00_ai-entry-point-meta-rules.md`  
2. **All Core Domains 01–15**, including any Mode-Aware Addenda  
3. All **Profile overrides** for the active Profile  
4. All relevant `.local` files, especially:
   - 03, 04, 06, 07, 10, 11, 12, 14, 15  
5. ADRs relevant to the task (Domain 11)  
6. Feature Ledger entries (Domain 09)  
7. All relevant code files

### 3.3 Heavy Mode Behavior Rules

- Enforce ADAS strictly  
- Call out conflicts between the request and ADAS rules  
- Suggest ADRs when changes alter architecture, stack, or security posture  
- Propose updates to `.local` files when project-level rules change  
- Prefer architectural and security correctness over minimal change  

---

## 4. Quick Mode Decision Guide

| Situation                                      | Mode    |
|-----------------------------------------------|---------|
| Rename a function                             | Light   |
| Add tests for an existing module              | Light   |
| Small UI tweak                                | Light   |
| Implement a brand new feature                 | Heavy   |
| Change authentication logic                    | Heavy   |
| Change data model or persistence strategy     | Heavy   |
| Introduce/replace major dependencies          | Heavy   |
| Reorganize folder structure / architecture    | Heavy   |

---

## 5. Integration with the Loading Process

Mode selection happens **before** loading Domains.

The loading process is defined in:

- `Domain 01 – AI Entry Point & Meta-Rules`  
- `for-ai-helpers-how-to-load-adas-context.md`

When a Core Domain has a **Mode-Aware Addendum**, AI helpers must:

- Load the addendum whenever they load that Domain  
- Interpret the Domain according to the current Mode  

---

## 6. Summary

- Light Mode → fast, local, minimal ADAS load  
- Heavy Mode → full governance, strict ADAS enforcement  

These modes are how ADAS balances **power** with **efficiency**.
