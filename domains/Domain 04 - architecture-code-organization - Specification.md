# Domain 04 – Architecture & Code Organization — Specification

## 1. Purpose
This Domain defines the high-level architecture, module boundaries, and code organization rules.
Its purpose is to ensure that AI helpers maintain a coherent structure, avoid accidental coupling, and respect established boundaries.

## 2. Scope & Responsibilities
- Covers:
  - Layered architecture (e.g., UI, application, domain, infrastructure).
  - Folder layout and responsibilities.
  - Allowed dependencies and direction of calls between layers.
  - Data flow patterns and cross-cutting concerns.
- Applies to:
  - All new code.
  - Any refactoring that moves or restructures existing modules.

## 3. Core Principles & Rules
- **Explicit Layers:** Define layers (e.g., `ui/`, `app/`, `domain/`, `infra/`) and their responsibilities.
- **Dependency Direction:** Higher layers may depend on lower layers, but not vice versa (e.g., `ui` → `app` → `domain` → `infra`).
- **Separation of Concerns:** Keep domain logic separate from UI and IO code.
- **Stable Interfaces:** Favor stable boundaries and well-defined interfaces between modules.
- **Locality:** Keep related code close together; avoid scattering related behavior.

## 4. Operational Guidelines for AI Helpers
- Before changing code:
  - Identify the current layer and module.
  - Confirm the intended change respects dependency rules.
- When adding a new feature:
  - Place new code in the appropriate layer and directory.
  - Avoid creating cross-layer shortcuts.
- When refactoring:
  - Do not move code across layers without checking and documenting architectural impact.
  - Update any relevant ADRs if architecture changes significantly.

## 5. Interfaces with Other Domains
- Constrained by:
  - Domain 03 (Tech Stack) for technology choices.
  - Domain 10 (Pitfalls & Invariants) for architecture-specific invariants.
- Informs:
  - Domain 05 (Coding Style) for patterns and anti-patterns.
  - Domain 09 (Feature Ledger) which may reference architectural components.

## 6. Change Management
- Architectural changes must:
  - Be proposed as ADRs with clear impact analysis.
  - Include diagrams or descriptions when helpful.
- Backwards incompatible changes:
  - Should be phased where possible, with interim compatibility layers.
