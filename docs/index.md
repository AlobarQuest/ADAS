# ADAS Documentation Home

Welcome to the documentation for the **AI Development Assistant System (ADAS)** — a governance, reasoning, and consistency framework that empowers Devon and Devon’s AI helpers to collaborate predictably across all software projects.

ADAS enables:

- Stable, consistent architectural decisions  
- Clear expectations for code quality  
- Predictable behavior across all AI helpers  
- Safe, structured evolution of software systems  
- Reduced drift and reduced “AI chaos”  
- Multi‑profile support (web-app, desktop-app, mobile-ios)

---

# 1. About ADAS

ADAS is structured into three layers:

1. **Core** — global rules for all projects  
2. **Profiles** — specialization per project type (e.g., web-app)  
3. **Project `.local`** — project-level overrides and metadata  

A single machine-readable configuration file (`adas-config.json`) defines:

- core version  
- active profiles  
- override domains  
- starter templates  
- non-overridable rules  

---

# 2. Key Documents

### Core Learning Path

- **Understanding ADAS Domains**  
  → `understanding-adas-domains.md`

- **ADAS File Structure and Specifications**  
  → `ADAS-file-specifications-overview.md`

- **Wiki Overview (Human-friendly Map)**  
  → `ADAS-file-specification-overview-wiki.md`

- **How to Load ADAS as an AI Helper**  
  → `for-ai-helpers-how-to-load-adas-context.md`

- **Profile & Config Guide**  
  → `adas-profiles-and-config.md`

- **Usage Modes: Light vs Heavy**  
  → `adas-usage-modes.md`

---

# 3. Profiles

ADAS supports different Profiles for different project types.  
Current Profile set:

- **web-app** (stable)  
- desktop-app (experimental)  
- mobile-ios (planned)  

Each Profile overrides specific Domains.

See:  
→ `domains/profiles/<profile>/`

---

# 4. ADAS Starter Templates

Each profile includes a starter `.ai` folder for new projects.

Example:  
```
starters/web-app/.ai/
```

---

# 5. Versioning and Maintenance

ADAS supports semantic versioning:

- MAJOR — breaking changes  
- MINOR — additive, non-breaking changes  

All changes must be recorded via ADRs and must update:

- Domain 15  
- relevant Domains  
- starter templates  
- adas-config.json  
- docs pages  

---

# 6. How to Use ADAS Day-to-Day

AI helpers use two modes:

- **Light Mode** — small scoped tasks, minimal ADAS loading  
- **Heavy Mode** — architecture, security, and large changes

See:  
→ `adas-usage-modes.md`

---

# 7. Contributing / Evolving ADAS

ADAS evolves through structured processes:

- Write an ADR (Domain 11)  
- Update Profile or Core Domains  
- Update Skeletons  
- Update Starter Templates  
- Bump Versions  
- Update Documentation  

---

# 8. Summary

ADAS is a powerful, structured operational framework for AI-assisted development.  
It reduces chaos, improves predictability, and enforces the standards Devon wants across all projects.

Start exploring by reading:

- `adas-usage-modes.md`  
- `for-ai-helpers-how-to-load-adas-context.md`