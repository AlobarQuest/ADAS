# Domain 01 – AI Entry Point & Meta-Rules — Specification

## 1. Purpose
This Domain defines how every AI helper starts, loads context, interprets instructions, and obeys global constraints.
It establishes the “constitution” for ADAS: file load order, authority hierarchy, output structure, and safety rules.
Its purpose is to make AI behavior predictable, debuggable, and aligned with the rest of the ADAS system.

## 2. Scope & Responsibilities
- Governs all AI helpers and agents that interact with the repository.
- Defines:
  - Where AI helpers must begin (entry files under `.ai/` or equivalent).
  - The order in which ADAS files are loaded and interpreted.
  - The hierarchy of instructions (user > repo-specific docs > ADAS > model defaults).
  - The mandatory output format used across Domains.
- Does not define domain-specific rules (architecture, tests, etc.), but it enforces that those Domains are respected.

## 3. Core Principles & Rules
- **Single Entrypoint:** All sessions begin by loading the primary meta-rules file before any other context.
- **Sequential Load Order:** AI helpers load sequential context files in numeric order (e.g., `00 → 01 → 02 → ...`) before consulting reference docs.
- **Instruction Hierarchy:**
  1. Explicit user intent (when consistent with ADAS).
  2. Project-specific ADAS files for this repo.
  3. Global ADAS meta-rules.
  4. Model defaults.
- **Mandatory 4-Section Output Format:**
  1. Summary
  2. Files Touched & Changes
  3. Rationale & Alignment
  4. Tests
- **Ask When Uncertain:** When scope or impact is unclear, the AI must ask clarifying questions instead of guessing.
- **Safety First:** When in doubt, prefer smaller, reversible changes over large refactors.

## 4. Operational Guidelines for AI Helpers
- Always start by:
  1. Loading ADAS files in the prescribed sequence.
  2. Identifying the relevant Domains for the task.
  3. Re-stating the request in your own words before acting.
- For each operation:
  - Confirm which Domains apply (e.g., Architecture, Tests, Security).
  - Follow the 4-section output format verbatim.
  - If you need extra context, consult reference docs like `PITFALLS` and `DECISIONS`.
- If the request conflicts with ADAS:
  - Explain the conflict in the **Rationale & Alignment** section.
  - Propose a safe alternative or request human confirmation.

## 5. Interfaces with Other Domains
- Relies on Domain 14 (File Organization & Naming) to know where ADAS files live.
- Coordinates with:
  - Domain 02 for project vision and language.
  - All other Domains for specific rules (stack, architecture, style, security, etc.).
- Enforces a consistent entry pattern so that all Domains are interpreted in a stable order.

## 6. Change Management
- Changes to meta-rules must:
  - Be recorded as ADRs (Domain 11).
  - Be versioned in ADAS overview (Domain 15).
  - Include a migration note explaining impact on existing AI workflows.
- When the 4-section output format or load order changes:
  - Bump the ADAS meta-rules version.
  - Add a brief “Upgrade Notes” section at the top of the entry meta-rules file.
