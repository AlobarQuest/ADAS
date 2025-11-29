# Domain 14 – File Organization & Naming  
**Core Specification — Profile- & Mode-Aware**

## 1. Purpose
Domain 14 defines the **canonical file organization, naming conventions, and path rules** used across all ADAS-enabled projects.  
It ensures consistent structure so AI helpers can reliably load Core, Profile, and Local overrides—particularly important in **Light Mode** where only partial ADAS is loaded.

---

# 2. Role in Light vs Heavy Mode

## 2.1 Light Mode
AI helpers load **only the summary** of Domain 14:
- Where ADAS files live
- How `.local` overrides are named
- How Profile directories are structured
- Where to locate domain specifications and skeletons

Used to:
- Locate the correct Domain for a scoped task  
- Place new or updated files correctly  
- Ensure naming consistency for small refactors

## 2.2 Heavy Mode
AI helpers load the **full Domain 14 specification**, including:
- Complete directory conventions  
- Cross-project naming rules  
- Rules for generating new ADAS files  
- Rules for Profile-specific and project-specific folders  
- Enforcement of consistent naming across all Domains  

Used for:
- Creating new modules  
- Large structural changes  
- Profile-level or Core-level ADAS updates  
- Project template generation  

---

# 3. Core ADAS File Structure

All ADAS-controlled files must follow this structure:

```
/domains/
  /core/
    Domain <##> - <name> - Specification.md
    Domain <##> - <name> - Skeleton.md
  /profiles/
    /<profile>/
      Domain <##> - <name> (<profile>).md
  /projects/
    /<project-name>/
      .ai/
        00_ai-entry-point-meta-rules.md
        <domain>.local.md
```

Additional:
```
/docs/
  *.md  

adas-config.json
```

---

# 4. Naming Rules

### 4.1 Domain Specifications
```
Domain <##> - <title> - Specification.md
```

### 4.2 Domain Skeletons
```
Domain <##> - <title> - Skeleton.md
```

### 4.3 Profile Domain Overrides
```
Domain <##> - <title> (<profile>).md
```

### 4.4 Local Project Overrides
```
<##>_<short-name>.local.md
```

---

# 5. Placement Rules

- **Core Domain files** live in `/domains/core/`
- **Profile overrides** live in `/domains/profiles/<profile>/`
- **Project overrides** live in `/.ai/` with `.local.md` filenames
- **Docs files** live in `/docs/`
- **Starter templates** live in `/starters/<profile>/.ai/`
- **Config** lives in `adas-config.json` at repository root

## 5.1 Docs vs ADAS content ownership
- **ADAS/ADRs are authoritative** for rules, constraints, workflows, security posture, and architecture decisions. Any binding guidance belongs in Core/Profile/Local ADAS files or ADRs.
- **`/docs/` is informational**: product/user guides, external-facing API refs, diagrams, status reports, exports, and narrative onboarding. These must not define governance or security rules; they should point back to ADAS/ADRs when describing authoritative behavior.
- Avoid drift by keeping `/docs/` declarative and non-binding; when rules change, update ADAS/ADRs and let `/docs/` reference them.

These rules allow AI helpers to reliably find the correct files for both Light and Heavy modes.

---

# 6. Precedence Rules (Integrated)

```
1. Core directory
2. Profile directory
3. Project .local directory
4. User request (only if compliant)
```

Domain 14 defines the physical locations where each layer must live.

---

# 7. Mode Behavior Integration

### Light Mode
- Only load directory + naming summaries  
- Apply minimal placement validation  
- Avoid generating new skeletons or Domain files unless required  

### Heavy Mode
- Enforce the complete directory tree  
- Validate all Names, Paths, and Domain files  
- Ensure any new Domain, Profile, or Local file is correctly placed  
- Correct incorrect or inconsistent structures  

---

# 8. Summary

Domain 14 ensures all ADAS structure remains:
- Predictable  
- Machine-readable  
- AI-friendly  
- Profile-aware  
- Mode-aware  

This Domain is essential for both Light and Heavy operations, enabling AI helpers to function deterministically within ADAS projects.
