# Domain 15 – ADAS Overview & Maintenance — Specification

## 1. Purpose
This Domain provides the **high-level overview and governance model** for ADAS as a whole.
It explains:

- What ADAS is and who it applies to.
- How the **Global ADAS repo** and **per-project overlays** work together.
- How ADAS versions are defined, updated, and adopted by projects.
- How changes are communicated to both humans and AI helpers.

The scope of ADAS is explicitly **Devon + Devon’s AI helpers and projects**.  
It does not attempt to govern code or projects outside that boundary.

---

## 2. Scope & Responsibilities

Domain 15 is responsible for:

- Defining the **canonical description** of ADAS.
- Describing the **Global ADAS repository** structure (and its wiki / docs).
- Defining the **versioning scheme** for ADAS.
- Defining how **projects declare and upgrade** their ADAS version.
- Providing guidance for **maintenance and evolution** of the system.

It applies to:

- The **`ADAS` GitHub repository** (Global ADAS).
- Every project repo that opts into ADAS by referencing it in `.ai/`.

---

## 3. Core Principles & Rules

### 3.1 Scope of Authority

- ADAS governs:
  - Repos and projects that explicitly declare:  
    “This project uses Devon’s Global ADAS vX.Y.”
  - AI helpers acting within those repos.
- ADAS does **not** claim authority beyond Devon’s own ecosystem.

### 3.2 Versioning

- Global ADAS uses a semantic-style version: `MAJOR.MINOR` (e.g., `1.0`, `1.1`, `2.0`).
- **MAJOR** changes:
  - Break compatibility or significantly change behavior.
  - Require careful migration notes and ADRs.
- **MINOR** changes:
  - Add rules, clarify behavior, or add non-breaking improvements.

Each Global version is recorded in:

- `Domain 15 – adas-overview-maintenance – Specification`
- The **`ADAS` repo README**
- Optionally, a `CHANGELOG.md` in the Global ADAS repo

### 3.3 Project-Level Adoption

Each project that uses ADAS must declare in its `.ai/` meta file:

- `Global ADAS repo:` (e.g., `github.com/devon/ADAS`)
- `Global ADAS version:` (e.g., `v1.2`)
- `Local overrides:` (list of Domains with `.local` files)

Projects are free to:

- Stay pinned to an older version temporarily.
- Upgrade when convenient, following migration notes.

---

## 4. Operational Guidelines for AI Helpers

When starting work in a project:

1. Read the **project `.ai/` meta file** (often `00_ai-entry-point-meta-rules.md`).
2. Determine:
   - Which Global ADAS version applies.
   - Which Domains are overridden locally.
3. Adjust expectations accordingly:
   - Use Global ADAS as the baseline.
   - Apply project `.local` overlays where present.
4. If ADAS version seems outdated and behavior conflicts with Global ADAS:
   - Respect the project’s declared version.
   - Note potential drift in your “Rationale & Alignment” section if it matters.

When suggesting changes to ADAS:

- If it’s **project-specific**, propose editing local `.ai/` files.
- If it’s **globally applicable**, propose:
  - An ADR in the Global ADAS repo (Domain 11).
  - A version bump and changelog entry in Domain 15.

---

## 5. Interfaces with Other Domains

- **Domain 01 – AI Entry Point & Meta-Rules**
  - Uses Domain 15 to understand the current ADAS version and governance model.
- **Domain 14 – ADAS File Organization & Naming**
  - Defines where and how Global + local ADAS are stored; Domain 15 explains how they evolve.
- **Domain 11 – Decisions / ADRs**
  - Governs how ADAS-level decisions (global rule changes, new Domains, etc.) are recorded.

The Global ADAS repo should also expose:

- A **README** for high-level explanation.
- A **Wiki or GitHub Pages site** for human-friendly docs:
  - Domain summaries.
  - How-to guides.
  - Examples for each skeleton.

---

## 6. Change Management

### 6.1 Changing Global ADAS

When updating Global ADAS:

1. Propose the change via an ADR in the `ADAS` repo (Domain 11).
2. Update:
   - Relevant Domain Specification(s).
   - Any affected Skeletons and Examples.
3. Bump the Global ADAS version (MAJOR or MINOR).
4. Update:
   - Domain 15 (this file) with a short summary.
   - The Global ADAS `CHANGELOG.md` (if present).
   - The Global README and/or wiki.

### 6.2 Notifying Projects

For projects you actively maintain:

- Optionally keep a simple list (in the Global ADAS wiki or an internal doc) of:
  - Project name → ADAS version in use.
- When a new Global version is available:
  - Note recommended upgrade steps.
  - Call out breaking vs non-breaking changes.

### 6.3 Upgrading a Project

When a project chooses to upgrade:

1. Review the Global ADAS changelog and relevant ADRs.
2. Update the project’s `.ai/` meta file:
   - Set `Global ADAS version` to the new value.
3. Adjust local `.ai/*.local.md` overlays if needed.
4. Optionally record the upgrade in a project-level ADR.

---

## 7. Summary

Domain 15 ensures ADAS is:

- **Explicitly scoped** to Devon and Devon’s AI helpers.
- **Versioned and traceable** across time.
- **Usable across multiple projects** via a shared Global repo.
- **Flexible** through per-project overlays, without losing the benefits of central governance.

It is the “owner’s manual” for how ADAS is maintained and evolved.
