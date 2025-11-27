# Domain 14 – ADAS File Organization & Naming — Specification

## 1. Purpose
This Domain defines **where ADAS lives**, **how it is structured across repos**, and **how ADAS files are named**.
It introduces a two-level model:

1. A **Global ADAS repo** (central source of truth for Devon + AI helpers).
2. A **Per-Project ADAS overlay** (local overrides and project-specific details).

The goal is to keep governance **centralized and consistent by default**, while allowing each project to apply **minimal, explicit overrides**.

---

## 2. Scope & Responsibilities

Domain 14 governs:

- The structure and naming of the **Global ADAS repository** (e.g., a GitHub repo named `ADAS`).
- The structure and naming of **per-project `.ai/` directories**.
- How projects **declare** which Global ADAS version they use.
- How **overrides** are organized and named at the project level.

It does **not** define the content of individual Domains (01–15); it defines **where they live and how they are wired together**.

---

## 3. Core Principles & Rules

### 3.1 Two-Level ADAS Structure

- **Global ADAS (Devon-level)**
  - Lives in a dedicated repo (e.g., `github.com/devon/ADAS`).
  - Holds:
    - Canonical Domain Specifications (01–15).
    - Canonical Skeleton files.
    - Example files for each skeleton (worked examples).
  - Represents the **default governance** for *all* of Devon’s projects and AI helpers.

- **Project ADAS Overlay**
  - Lives in each project repository under a `.ai/` directory.
  - Contains:
    - A small set of **project-specific meta files**.
    - Optional **Domain-level overrides** (e.g., project-specific Tech Stack, Architecture).
  - Declares which **Global ADAS version** it uses.

### 3.2 Naming & Layout Conventions

**Global ADAS repo** contains Domain files like:

- `Domain 01 - ai-entry-point-meta-rules - Specification.md`
- `Domain 01 - ai-entry-point-meta-rules - Skeleton.md`
- `Domain 01 - ai-entry-point-meta-rules - Example.md`
- …
- `Domain 15 - adas-overview-maintenance - Specification.md`

Each **project repo** contains a `.ai/` directory with:

- `00_ai-entry-point-meta-rules.md` (local meta-rules + link to Global ADAS)
- `15_adas-overview-maintenance.local.md` (optional local overlay)
- Optional `NN_domain-name.local.md` files that override or extend global Domains.

### 3.3 Inheritance & Precedence

For any rule or behavior, precedence is:

1. **User request**, if consistent with ADAS.
2. **Project-level override** (`.ai/NN_name.local.md`).
3. **Global ADAS Domain Specification** (from the `ADAS` repo).
4. Model defaults.

Some rules in Global ADAS may be explicitly marked as **non-overridable** (e.g., “never commit secrets”).
Local ADAS must not contradict those.

---

## 4. Operational Guidelines for AI Helpers

When working in a project repository:

1. **Locate the project `.ai/` directory.**
2. Load the **project meta file** (usually `00_ai-entry-point-meta-rules.md`) which:
   - Declares:
     - The Global ADAS repo reference.
     - The Global ADAS version (e.g., `v1.2`).
   - Explains how overrides are named in this project.
3. Load any **local overlay files**:
   - `NN_domain-name.local.md` files for Domains that have project-specific behavior.
4. Assume that:
   - If no `.local` file exists for a Domain, the **Global ADAS Domain Specification** applies as-is.
5. When resolving conflicts:
   - Obey project overrides, **except** where Global ADAS explicitly states a rule is non-overridable.
   - If unsure, surface the conflict in your “Rationale & Alignment” section and seek human input.

---

## 5. Interfaces with Other Domains

- **Domain 01 – AI Entry Point & Meta-Rules**
  - Uses Domain 14 to determine where ADAS is located and how to load it (Global + local overlay).
- **Domain 13 – Templates & Interaction Model**
  - Depends on the file organization to locate templates, skeletons, and examples.
- **Domain 15 – ADAS Overview & Maintenance**
  - Describes the versioning, evolution, and cross-repo impact of structural changes defined here.

---

## 6. Change Management

Changes to file organization or naming must:

1. Be made first in the **Global ADAS repo** (Domain 14 Specification).
2. Be reflected in:
   - The Global ADAS README / wiki.
   - Domain 15 (Overview & Maintenance) under “Structural Changes”.
3. Provide a **migration note** for existing projects:
   - How to rename or move local `.ai/` files.
   - How to update project meta files to the new structure.

Projects that adopt a new version of Domain 14 should:

- Update their `.ai/` structure to match.
- Record the change in their own ADRs (Domain 11), if it materially affects project behavior.
