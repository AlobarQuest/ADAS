# ADAS File Specifications Overview  
**Core + Profile-Aware, Production-Ready Edition**

This document provides a complete overview of every file type used in the **AI Development Assistant System (ADAS)** across Core, Profiles, and Project layers.

It explains:

- Where each ADAS file lives  
- What it controls  
- How AI helpers use it  
- How Core, Profiles, and project overlays interact  
- How tools interpret ADAS through `adas-config.json`

This is the authoritative reference for navigating the ADAS file structure.

---

# 1. ADAS Directory Structure (Global ADAS Repo)

The Global ADAS repository contains three major groups of files:

```
/adas-config.json
/domains/core/
/domains/profiles/<profile-name>/
/starters/<profile-name>/
```

### **adas-config.json**
Machine-readable configuration defining:

- Core ADAS version  
- Profile list + versions  
- Non-overridable domains  
- Domain root folders  
- Starter repository mappings  
- Default profile for new projects  

Full explanation:  
➡️ **[adas-profiles-and-config.md](adas-profiles-and-config.md)**

---

# 2. Core ADAS Files  
Located under:

```
domains/core/
```

Each Domain has:

- **Specification** – authoritative rules  
- **Skeleton** – template file used by projects  

## **Core File Types**

### **Domain NN – <Name> – Specification.md**
Defines the rules, constraints, principles, and intentions for a Domain.

Used by:

- AI helpers  
- Project initialization tools  
- Profile overlays  

### **Domain NN – <Name> – Skeleton.md**
Provides the base template projects use when generating `.local` overrides.

Used by:

- Project starters  
- AI helpers creating new `.local` files  
- Code generation tools  

### **README.md, CHANGELOG.md**  
(Optional)  
Provides human-readable documentation and change history.

---

# 3. Profile Files  
Located under:

```
domains/profiles/<profile-name>/
```

Profiles override or extend Core Domains for specific development types.

### Allowed override Domains:
- **Domain 03 – Tech Stack & Constraints**  
- **Domain 04 – Architecture & Code Organization**  
- **Domain 06 – Testing & Quality**  
- **Domain 12 – Security & Secrets**

### Example:
```
domains/profiles/web-app/Domain 03 - Tech Stack & Constraints (web-app).md
```

Contents include:

- Profile-specific rules  
- Technology defaults  
- Architecture patterns  
- Testing frameworks  
- Security posture  

AI helpers load Profile files *after* Core files but *before* project `.local` files.

---

# 4. Project-Level ADAS Files  
Located in each project repo’s `.ai/` directory:

```
.ai/
  00_ai-entry-point-meta-rules.md
  01_* 
  02_*
  ...
  14_*
  15_*
  NN_filename.local.md
```

These files define how ADAS applies to *that specific project*.

---

## 4.1. Numbered ADAS Files (`00` → `15`)

Each corresponds to one of the 15 Domains.

Example:

```
.ai/03_tech-stack-constraints.local.md
```

### Purpose:
- Provide project-specific overrides to Core + Profile rules  
- Add project-specific context  
- Document deviations and exceptions  

### Load order:
AI helpers load files numerically:

```
00 → 01 → … → 14 → 15
```

### Precedence:
Project files override Profile files, except domains marked **non-overridable** in `adas-config.json`.

---

## 4.2. ai-entry-point-meta-rules.md (00)
The most important project file.

Defines:

- ADAS repo reference  
- ADAS **core version**  
- ADAS **profile**  
- Active Domain overrides  
- Special project metadata  
- Any unique instructions for AI helpers  

AI helpers always load this file first.

---

# 5. Skeleton Files (Global ADAS)

Skeleton files define *how project-level ADAS files should look*.  
Projects copy these and optionally modify them into `.local` files.

Used for:

- New project initialization  
- Resetting domain guidance  
- Ensuring consistency across repos  

Skeletons live under:

```
domains/core/
/domains/profiles/<profile-name>/
```

---

# 6. Starter Project Templates

Starter files connect ADAS to real-world project bootstrapping.

Located under:

```
/starters/<profile-name>/
```

Starters include:

- Pre-configured `.ai/` directory  
- Recommended folder structure  
- Basic code skeletons  
- Example configuration files  
- First ADR or feature ledger examples  

Mapped in `adas-config.json` for tools and orchestrators.

---

# 7. Additional Documentation Files

## **docs/index.md**
Primary documentation landing page.

## **docs/understanding-adas-domains.md**
Detailed explanation of all Domains.

## **docs/adas-profiles-and-config.md**
Detailed explanation of:

- Profiles  
- Overlays  
- Version management  
- adas-config.json schema  

## **docs/for-ai-helpers-how-to-load-adas-context.md**
Strict instructions for AI helpers to load ADAS properly.

## **docs/ADAS-file-specification-overview-wiki.md**
Wiki-style version of this file with additional human commentary.

---

# 8. How AI Helpers Use These Files

AI helpers follow a strict loading process:

1. **Load project entry file:**  
   `.ai/00_ai-entry-point-meta-rules.md`

2. **Resolve ADAS core + profile via:**  
   `adas-config.json`

3. **Load Core Domain specs**

4. **Load Profile Domain overlays**  
   (web-app, desktop-app, mobile-ios)

5. **Apply project `.local` overrides**

6. **Respect non-overridable domains**

7. **Operate using the resulting merged specification**

This guarantees consistent behavior across all projects.

---

# 9. Summary

This overview provides a complete map of every file involved in ADAS:

- Core Domain files  
- Profile overlays  
- Project `.local` overrides  
- Skeleton templates  
- Starter templates  
- Machine-readable configuration  

Together, these files ensure ADAS remains:

- Predictable  
- Versioned  
- Profile-aware  
- Extensible  
- AI-friendly  

For deeper detail on profiles and config, see:  
➡️ **[adas-profiles-and-config.md](adas-profiles-and-config.md)**