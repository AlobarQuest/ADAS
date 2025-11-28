
# Domain 01 – AI Entry Point & Meta-Rules (Core Specification, Profile- & Mode-Aware)

## 1. Purpose
Domain 01 defines **how AI helpers must behave** when operating inside any ADAS‑enabled project.  
It establishes the rules for:

- Loading ADAS (Core → Profile → Project Local)
- Selecting **Usage Mode** (Light vs Heavy)
- Enforcing ADAS precedence
- Ensuring consistent reasoning, output, and governance

This is the **first and most important Domain** every AI helper loads.

---

## 2. Behavioral Contract for AI Helpers

AI helpers must always:

1. **Operate deterministically**  
   Follow rules strictly, avoid improvisation that contradicts ADAS.

2. **Stay within the scope of the task**  
   Light Mode means narrow reasoning; Heavy Mode means full-system governance.

3. **Respect all precedence layers**  
   ```
   Core Domains → Profile Domains → Project .local → User Request
   ```

4. **Fail safely**  
   If required ADAS content is missing or malformed, warn the user and halt or fall back safely.

5. **Be transparent**  
   Explain reasoning when decisions involve architecture, security, or ADAS compliance.

---

## 3. ADAS Loading Workflow

AI helpers must load ADAS in this order:

### **Step 1 — Load the project entry file**
```
.ai/00_ai-entry-point-meta-rules.md
```
Extract:

- ADAS_CORE_VERSION  
- ADAS_PROFILE  
- LOCAL_OVERRIDES[]  
- ADAS repo reference  
- Any project-specific flags or metadata  

### **Step 2 — Load `adas-config.json`**
This file defines:

- Core domains root  
- Profile domains root(s)  
- Override sets for each profile  
- Non‑overridable domains  
- Starter templates  
- Additional metadata  

### **Step 3 — Determine Usage Mode**
AI helpers must classify the task as **Light** or **Heavy** using:

- Task keywords  
- Scope of change  
- Impact on architecture/security  
- Required comprehension depth  

→ See `docs/adas-usage-modes.md`

### **Step 4 — Load domains according to usage mode**

When a Core Domain has a Mode-Aware Addendum, AI helpers must treat that addendum as part of the Domain and load it whenever the Domain is loaded.

#### Light Mode loads:
- Domain 01 summary (this file)
- Domain 14 summary  
- Relevant Domain (03/04/06/12)
- Core Specification + Mode-Aware Addendum (if present) + Profile + Project \.local'  
- Only the affected code files

#### Heavy Mode loads:
- All Core Domains (their Specifications **plus any Mode-Aware Addenda**)s  
- All Profile overrides for active profile  
- Relevant `.local` files  
- ADRs + feature ledger entries  
- All relevant code files

---

## 4. Precedence Rules (Critical)

AI helpers must enforce this strict precedence:

```
1. Core Domains  (global rules for all ADAS projects)
2. Profile Domains  (web-app, desktop-app, mobile-ios)
3. Project .local overrides  (fine-tuning per project)
4. User request (only if it does not violate higher layers)
```

### Non‑Overridable Domains
Defined in `adas-config.json`.

If a `.local` file or user request contradicts a non‑overridable Domain:

- AI helper must flag it  
- Provide compliant alternatives  
- Suggest creating an ADR  

---

## 5. ADAS Expectations for All AI Helpers

### 5.1 Output Requirements
AI helpers must:

- Use consistent naming from Domain 14  
- Produce typed, validated, secure code  
- Favor clarity over cleverness  
- Use the stack defaults defined in Profile 03  
- Follow architecture rules in Profile 04  
- Follow testing structure in Profile 06  
- Follow security rules in Profile 12  

### 5.2 Reasoning Expectations
AI helpers must:

- Validate user requests against ADAS  
- Identify ADAS violations  
- Suggest safest compliant paths  
- Explain decisions clearly when in Heavy Mode  
- Skip deep reasoning when in Light Mode  

### 5.3 Safety Expectations
AI helpers must:

- Protect secrets  
- Avoid insecure patterns  
- Avoid violating architectural boundaries  
- Default to server‑side execution unless profile rules say otherwise  

---

## 6. Mode Behavior Rules (Integrated)

From `adas-usage-modes.md`, summarized:

### Light Mode Rules:
- Minimal ADAS load  
- No architecture rewrites  
- No security model changes  
- No ADR creation  
- No new dependencies  
- Stay strictly scoped to the files involved  

### Heavy Mode Rules:
- Full ADAS governance  
- Re-architect when necessary  
- Suggest ADRs as needed  
- Update `.local` metadata  
- Reconcile Core/Profile/Local conflicts  

---

## 7. Handling Errors & Missing Data

### If `.ai/00...` missing →  
Stop, warn, request correction.

### If `adas-config.json` missing →  
Load Core Domains only; warn.

### If profile invalid →  
Fallback to default profile; warn.

### If `.local` malformed →  
Ignore invalid rules; warn.

### If ADAS version mismatch →  
Warn user with suggested upgrade path.

---

## 8. Summary

Domain 01 defines *how* AI helpers must think, act, and load ADAS.  
It ensures:

- Deterministic behavior  
- Mode‑appropriate governance  
- Full utilization of ADAS architecture  
- Safe and consistent development  

This file is **always** loaded first and governs all subsequent reasoning.
