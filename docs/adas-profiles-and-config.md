# ADAS Profiles and Config  
**Complete, Authoritative Guide to Profiles & `adas-config.json`**

This document defines how **ADAS Profiles** work and explains the structure, purpose, and rules governing the machine‑readable configuration file **`adas-config.json`**.  
It is the canonical reference for tools, orchestrators, and AI helpers performing ADAS‑level tasks.

---

# 1. Purpose of Profiles

ADAS supports multiple **project types**.  
Each type may require different defaults for:

- Tech stacks  
- Architecture  
- Testing practices  
- Security models  
- Tooling  
- Starter templates  

Instead of putting all rules in Core, ADAS uses **Profiles** to specialize behavior for each development environment.

A Profile:

- Overrides or extends certain Core Domain rules  
- Provides specialized Domain files  
- Defines profile-specific recommended technologies  
- Defines profile-specific starter templates  
- Has its own version number (independent from Core)

---

# 2. Where Profiles Live

Profiles reside under:

```
domains/profiles/<profile-name>/
```

Each Profile folder contains overrides for a subset of Domains.

Allowed override Domains:

| Domain | Description |
|--------|-------------|
| 03 | Tech Stack & Constraints |
| 04 | Architecture & Code Organization |
| 06 | Testing & Quality |
| 12 | Security & Secrets |

Profiles may also contain additional documentation, examples, or templates.

---

# 3. Current ADAS Profiles

ADAS includes three Profiles (one fully implemented, two future-oriented):

| Profile | Status | Description |
|--------|--------|-------------|
| **web-app** | stable | Default profile for all web application development. Uses frameworks like React, Next.js, Supabase, REST/WebSocket API patterns, etc. |
| **desktop-app** | experimental | Profile for Electron, PyQt, or native desktop frameworks. Will include desktop security, packaging, and UI patterns. |
| **mobile-ios** | planned | Future profile for Swift/iOS development. Will include Xcode, bundle identifiers, signing rules, and mobile security. |

The **default profile** used for new projects is defined in `adas-config.json`.

---

# 4. The Role of `adas-config.json`

The file:

```
adas-config.json
```

is the **single machine‑readable source of truth** for:

- ADAS Core version  
- Profile list  
- Profile versions  
- Folder paths  
- Starter template definitions  
- Which Domains profiles override  
- Non-overridable Core Domains  
- Default profile  

It ensures that tools and AI helpers interpret ADAS consistently.

---

# 5. Structure of `adas-config.json`

Below is an expanded version of the recommended schema:

```json
{
  "adas_core": {
    "name": "AI Development Assistant System (ADAS)",
    "version": "1.0.0",
    "domains_root": "domains/core",
    "non_overridable_domains": ["01", "07", "11", "14", "15"],
    "description": "Core governance and behavior rules for all AI helpers in all projects."
  },

  "profiles": {
    "web-app": {
      "version": "1.0.0",
      "status": "stable",
      "description": "ADAS profile for web application projects.",
      "domains_overlay_root": "domains/profiles/web-app",
      "overrides_domains": ["03", "04", "06", "12"],
      "starter": {
        "name": "ADAS Web App Starter",
        "repo": "AlobarQuest/adas-web-starter",
        "branch": "main",
        "path": "/starters/web-app"
      }
    },

    "desktop-app": {
      "version": "0.1.0",
      "status": "experimental",
      "description": "ADAS profile for desktop application projects.",
      "domains_overlay_root": "domains/profiles/desktop-app",
      "overrides_domains": ["03", "04", "06", "12"],
      "starter": {
        "name": "ADAS Desktop App Starter",
        "repo": "AlobarQuest/adas-desktop-starter",
        "branch": "main",
        "path": "/starters/desktop-app"
      }
    },

    "mobile-ios": {
      "version": "0.1.0",
      "status": "planned",
      "description": "ADAS profile for iOS/mobile development.",
      "domains_overlay_root": "domains/profiles/mobile-ios",
      "overrides_domains": ["03", "04", "06", "12"],
      "starter": {
        "name": "ADAS iOS Starter",
        "repo": "AlobarQuest/adas-mobile-ios-starter",
        "branch": "main",
        "path": "/starters/mobile-ios"
      }
    }
  },

  "defaults": {
    "profile": "web-app"
  }
}
```

---

# 6. How AI Helpers Use Profiles

### **1. Identify the profile**

AI helpers read:

```
.ai/00_ai-entry-point-meta-rules.md
```

This file tells them:

- Which profile is active  
- Which version of ADAS Core to load  
- What `.local` overrides exist  

### **2. Load Core Domains**

All files under:

```
domains/core/
```

are loaded first.

### **3. Load Profile Domains**

The helper loads:

```
domains/profiles/<profile-name>/
```

**ONLY** for the Domains listed in:

```
profiles.<profile>.overrides_domains[]
```

### **4. Apply project `.local` files**

Project overrides apply last (unless forbidden).

### **5. Enforce non-overridable Domains**

Domains listed in:

```
non_overridable_domains[]
```

cannot be modified by Profiles or `.local` files.

---

# 7. When to Create a New Profile

You should add a new Profile when:

- A new development environment requires different tools  
- Architectural defaults diverge significantly from web-app  
- Security/Testing/Tech Stack changes are large enough to justify specialization  
- Starter templates are different enough to impact project bootstrapping  

Examples:

- If you begin creating **CLI tools**, you might add a `cli-tool` profile  
- If you begin doing **Unity game development**, you might add a `game-dev` profile  

Profiles ensure ADAS stays modular and clean.

---

# 8. Starter Templates

Every profile contains a starter folder:

```
/starters/<profile-name>/
```

This ensures that new projects:

- Have the correct `.ai/` folder  
- Start with the right Domain `.local` files  
- Follow profile-appropriate architecture and workflows  
- Include the right base dependencies  

Starter templates are defined in:

```
profiles.<profile>.starter
```

in `adas-config.json`.

---

# 9. Profile Versioning

Each profile has an independent version:

- Profile versions change when **profile-level files** change  
- Core version changes when **core-level files** change  
- Projects specify both versions in `00_ai-entry-point-meta-rules.md`  

This allows you to upgrade:

- Core without upgrading profiles  
- Profiles without upgrading Core  

Example:

```
ADAS Core:      1.0.0
web-app Profile: 1.2.0
```

---

# 10. Cross‑Document Links

- **ADAS Overview (Home):**  
  → [`index.md`](index.md)

- **Understanding Domains:**  
  → [`understanding-adas-domains.md`](understanding-adas-domains.md)

- **File Specifications Overview:**  
  → [`ADAS-file-specifications-overview.md`](ADAS-file-specifications-overview.md)

- **Wiki Edition Spec Index:**  
  → [`ADAS-file-specification-overview-wiki.md`](ADAS-file-specification-overview-wiki.md)

- **Loader Rules:**  
  → [`for-ai-helpers-how-to-load-adas-context.md`](for-ai-helpers-how-to-load-adas-context.md)

---

# 11. Summary

This document defines:

- What Profiles are  
- How profiles override Core Domains  
- How tools and AI helpers load profiles  
- How starter templates work  
- How profile versioning works  
- How `adas-config.json` governs the entire system  

Profiles allow ADAS to scale across multiple project environments while preserving consistency, clarity, and maintainability.

`adas-config.json` ensures ADAS is machine-readable, automatable, and predictable for all AI helpers.