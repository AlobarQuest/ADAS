# ADAS Usage Modes — Light vs Heavy

This document defines the two operational modes AI helpers use when interacting with ADAS-enabled projects: **Light Mode** and **Heavy Mode**.  
Modes allow ADAS to stay powerful without requiring full governance for every small task.

---

# 1. Purpose of Usage Modes

ADAS contains a rich set of rules, domains, and overlays. Not all tasks require the entire system to be loaded.  
Usage modes allow AI helpers to:

- Reduce token cost  
- Improve speed  
- Reduce reasoning complexity  
- Apply appropriate levels of governance  
- Maintain consistency across small vs large tasks  

---

# 2. Light Mode — Scoped, Fast, Minimal Governance

## 2.1 When to Use Light Mode

Use Light Mode for tasks such as:

- Small refactors  
- Renaming functions, variables, files  
- Adding tests for existing behavior  
- Updating documentation or comments  
- Minor UI or code adjustments  
- Fixing isolated bugs  
- “Make this cleaner/safer” style tasks

## 2.2 What to Load in Light Mode

AI helpers must load:

1. `.ai/00_ai-entry-point-meta-rules.md`  
2. Domain 01 — behavior/meta summary **only**  
3. Domain 14 — file naming & path rules summary  
4. The **single Domain** relevant to the task:
   - Tech Stack → Domain 03 (core + profile + local)
   - Architecture → Domain 04 (core + profile + local)
   - Testing → Domain 06 (core + profile + local)
   - Security → Domain 12 (core + profile + local)
5. The code files touched

## 2.3 Light Mode Behavior Rules

- Assume the existing architecture and stack are ADAS‑compliant  
- Do not propose large redesigns  
- Do not modify security models  
- Do not create or modify ADRs  
- Confine reasoning to the smallest possible scope  
- Prefer speed over depth, so long as safety is maintained  

---

# 3. Heavy Mode — Full ADAS Governance

## 3.1 When to Use Heavy Mode

Use Heavy Mode for:

- New modules or features  
- Major refactors  
- Architecture-level decisions  
- Security, authentication, or authorization changes  
- Data model changes  
- Introducing or replacing dependencies  
- Anything cross-cutting or system-level  

## 3.2 What to Load in Heavy Mode

AI helpers must load:

1. `.ai/00_ai-entry-point-meta-rules.md`  
2. **All Core Domains** (01–15)  
3. **All Profile overrides** (e.g., web-app 03, 04, 06, 12)  
4. **All relevant `.local` files**, especially:
   - 03, 04, 06, 07, 10, 11, 12, 14, 15  
5. Any ADRs related to the task  
6. Any feature ledger entries related to the task  
7. All code files impacted

## 3.3 Heavy Mode Behavior Rules

- Enforce ADAS strictly  
- Identify and call out conflicts between user request and ADAS rules  
- Suggest ADRs if the change requires altering ADAS itself  
- Update or request updates to `.local` files when needed  
- Err toward architectural consistency and security correctness  

---

# 4. Quick Mode Decision Guide

| Situation | Mode |
|----------|------|
| Rename/refactor small function | **Light** |
| Add tests for one module | **Light** |
| Update component UI | **Light** |
| Implement new feature | **Heavy** |
| Modify auth/security/data access | **Heavy** |
| Create new folder/module/service | **Heavy** |
| Change tech stack or framework | **Heavy** |
| Fix security vulnerability | **Heavy** |

---

# 5. Integration with AI Helper Loading Process

AI helpers must determine mode **before** loading ADAS.  
See: `for-ai-helpers-how-to-load-adas-context.md` for loading rules.

---

# 6. Summary

Usage modes keep ADAS:

- Efficient  
- Scalable  
- Easy to use  
- Governed when needed  
- Lightweight when appropriate  

Light Mode = fast, scoped work.  
Heavy Mode = full governance and architectural safety.