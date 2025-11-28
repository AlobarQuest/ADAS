# For AI Helpers: How to Load ADAS Context  
**Updated to Support Usage Modes + Multi-Profile Architecture**

This document defines the exact steps AI helpers must follow to load ADAS in either **Light Mode** or **Heavy Mode**.

---

# 1. Determine Usage Mode

Before loading ADAS, AI helpers must classify the task as:

- **Light Mode** — minimal ADAS, scoped, fast  
- **Heavy Mode** — full ADAS governance, architectural integrity

Task classification rules:  
→ See `adas-usage-modes.md`

Mode affects *how much* ADAS is loaded.

---

# 2. Load the Project Entry File

Load:

```
.ai/00_ai-entry-point-meta-rules.md
```

Extract:

- ADAS_CORE_VERSION  
- ADAS_PROFILE  
- LOCAL_OVERRIDES[]  
- ADAS repo reference  

This file always loads first.

---

# 3. Use `adas-config.json` to Determine Structure

AI helpers must read:

- core domain root  
- profile domain root  
- profile override domains  
- non-overridable domains  
- default profile  
- starter template metadata

This file tells the helper **where** to load ADAS content from.

---

# 4. Loading Rules — Light Mode

In Light Mode, AI helpers must load **only the minimal subset** necessary:

1. `.ai/00_ai-entry-point-meta-rules.md`  
2. Domain 01 — only summary  
3. Domain 14 — naming/path summary  
4. Primary Domain(s) relevant to the task:  
   - Core + Profile + Local version of that Domain  
5. Relevant code files  

Do **not** load:

- All 15 Domains  
- Full profile specs  
- ADR history  
- Full feature ledger  

Light Mode → speed, small scope, minimal governance.

---

# 5. Loading Rules — Heavy Mode

In Heavy Mode, AI helpers must load:

1. `.ai/00_ai-entry-point-meta-rules.md`  
2. **All Core Domains 01–15**  
3. **All Profile overrides** for active profile  
4. All relevant `.local` files:
   - Always: 03, 04, 06, 07, 10, 11, 12, 14, 15  
5. ADRs relevant to the task  
6. Feature ledger entries  
7. All code files involved

Heavy Mode enforces full ADAS governance.

---

# 6. Precedence Rules

Regardless of mode, ADAS layers load in this order:

```
1. Core Domains
2. Profile Domains
3. Project .local files
4. User request (if allowed)
```

Non-overridable domains **always** enforce Core rules.

---

# 7. Handling Missing or Invalid Files

Same as before:  
- Missing meta file → cannot proceed  
- Missing config file → fallback to core-only mode  
- Malformed `.local` → ignore invalid rules, warn  
- Unknown profile → fallback to default profile  

---

# 8. Summary

AI helpers must:

- Choose Light vs Heavy mode  
- Load the appropriate ADAS layers  
- Respect non-overridable domains  
- Apply Profile and `.local` overrides  
- Validate all outputs against loaded rules  

See:  
→ `adas-usage-modes.md`  
for full mode classification and rules.