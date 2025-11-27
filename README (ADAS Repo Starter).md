# ADAS — AI Development Assistant System (Global Repository)

This repository contains the **Global ADAS**, the authoritative governance system that defines how Devon’s AI helpers think, behave, decide, generate code, and coordinate work across all projects.

Global ADAS provides:
- A single source of truth for AI governance  
- Consistent behavior across multiple codebases  
- Project-level overlays for customization  
- Versioning, changelogs, and ADRs for long-term evolution  

Each project that uses ADAS references a specific Global ADAS version and may define **local overrides** for Domains that differ from global defaults.

---

# 📚 Repository Structure

```
ADAS/
├── README.md                ← this file
├── CHANGELOG.md             ← version history for ADAS
├── adrs/                    ← architecture decision records for ADAS itself
│   └── ADR-0001-adas-adopted.md
├── domains/                 ← canonical Domain Specifications, Skeletons, and Examples
│   ├── Domain 01 - ... - Specification.md
│   ├── Domain 01 - ... - Skeleton.md
│   ├── Domain 01 - ... - Example.md
│   └── …
└── docs/
    ├── ADAS File Specifications Overview.md
    └── ADAS File Specifications Overview (Wiki Edition).md
```

---

# 🧠 What Global ADAS Is

Global ADAS defines:
- Standard architecture
- Coding style and security guardrails
- Output formats and reasoning style
- Test expectations
- Workflow, git, and review rules
- Governance (ADRs, changelog, versioning)
- Templates and examples  
- Pitfalls, invariants, and danger zones  
- Domain language and product thinking

This allows **all AI helpers** across *all* of Devon’s projects to behave like a coordinated engineering team instead of isolated assistants.

---

# 🏗️ How Project ADAS Works

Each project repository contains a `.ai/` directory with:

- A project-level meta file declaring:
  - Global ADAS repo URL  
  - Global ADAS version  
  - Local overrides (if any)

- Optional `.local` overlays:
  - `NN_domain-name.local.md`

Projects inherit all Global ADAS rules unless they locally override them.

---

# 🔄 Versioning

Global ADAS uses semantic-style versions:

- **MAJOR.MINOR**
- Breaking changes → MAJOR  
- Additive / clarifying changes → MINOR  

Projects choose when to upgrade.

See `CHANGELOG.md` for details.

---

# 📘 Documentation

Human-friendly docs live in:

- `/docs` in this repo
- The GitHub Wiki (optional)
- GitHub Pages (optional)

---

# 🛠️ Contributing to ADAS

Changes to ADAS itself require:

1. Opening or updating an ADR in `/adrs`
2. Updating relevant Domain files in `/domains`
3. Bumping version in `CHANGELOG.md`
4. Updating Domain 15 (Overview & Maintenance)
5. Updating this README if structure changes

---

# 🌐 Scope

ADAS governs:
- Devon
- Devon’s AI helpers
- Devon’s code repositories that explicitly adopt Global ADAS

It does **not** attempt to define global standards for other teams or people.

---

# 🚀 Getting Started

To use ADAS in a project:

1. Create a `.ai/` folder in the project repo.
2. Add a project-level `00_ai-entry-point-meta-rules.md` pointing to:
   - The Global ADAS repo URL
   - The version to use
3. Add `.local` overrides only when the project needs different behavior.

---