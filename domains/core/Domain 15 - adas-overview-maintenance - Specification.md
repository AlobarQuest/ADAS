# Domain 15 – ADAS Overview & Maintenance  
**Core Specification — Profile- & Mode-Aware**

## 1. Purpose
Domain 15 defines the **high-level governance, versioning, and maintenance** model for ADAS.  
It explains how Core, Profile, and Project-level ADAS evolve over time across multiple development types.

---

# 2. Scope & Responsibilities
Domain 15 governs:
- The **purpose** and **scope** of ADAS  
- Global ADAS versioning  
- How Profiles extend ADAS  
- How project overlays work  
- How ADAS evolves through ADRs  
- How AI helpers should react to changes  
- How Light/Heavy Modes integrate with governance  

---

# 3. Profile Awareness
ADAS is a **multi-profile system**, supporting:
- web-app (stable)  
- desktop-app (planned)  
- mobile-ios (planned)

Profiles override specific domains and exist under:
```
/domains/profiles/<profile>/
```

Projects declare their active profile in:
```
.ai/00_ai-entry-point-meta-rules.md
```

---

# 4. Mode Awareness
### 4.1 Light Mode
Used for small, local edits.
AI helpers:
- Do not alter ADAS  
- Do not update `.local` files automatically  
- Must not propose ADRs  
- Treat ADAS as frozen for the task  
- Load minimal ADAS subset  

### 4.2 Heavy Mode
Used for architectural or system-level changes.
AI helpers:
- Load full ADAS  
- May propose ADRs  
- May propose Core/Profile updates  
- May propose starter template updates  
- May propose `.local` updates  
- Must enforce versioning rules  

---

# 5. ADAS Versioning (Semantic)
ADAS uses semantic versioning:
- **MAJOR** — breaking changes  
- **MINOR** — additive, non-breaking  

Every version bump requires updating:
- Domain 15  
- `CHANGELOG.md`  
- `adas-config.json`  
- Starter templates  
- Relevant Core/Profile Domains  
- Documentation (`docs/*.md`)  

Projects may lag behind intentionally; helpers must respect pinned versions.

---

# 6. ADAS Evolution Workflow
### 6.1 Proposing Changes
All substantive changes to ADAS require an ADR (see Domain 11).

### 6.2 Updating ADAS
When ADRs are accepted, helpers must update:
- Affected Core Domains  
- Affected Profile Domains  
- Starter `.ai` folders  
- Documentation  
- Version fields  

### 6.3 Project Notification
AI helpers must notice and respond to:
- Version mismatches  
- Deprecated rules  
- New constraints  

Heavy Mode helpers should propose project upgrades.

---

# 7. Maintenance Responsibilities
ADAS must maintain:
- Clear Core documentation  
- Accurate Profile definitions  
- Clean `.local` files  
- Updated starter templates  
- Predictable versioning  
- Minimal project drift  

AI helpers must:
- Warn about version mismatches  
- Respect pinned versions  
- Propose ADRs for governance-level changes  

---

# 8. Summary
Domain 15 defines the **governance and lifecycle** of ADAS:
- Multi-profile  
- Mode-aware  
- Versioned  
- Predictable  
- Evolvable  

It ensures ADAS remains coherent across Devon’s entire software ecosystem.
