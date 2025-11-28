# Domain 13 – Templates & Interaction Model — Specification

> **This Domain has an official Mode-Aware Addendum.**
> See: `Domain 13 - Mode-Aware Addendum.md`

## 1. Purpose
This Domain governs how AI helpers structure their responses and when they use document templates.
Its purpose is to balance consistency and speed: heavy templates for complex work, lightweight interaction for everyday tasks.

## 2. Scope & Responsibilities
- Covers:
  - Global interaction model (the 4-section response format).
  - Specific task templates (e.g., ADRs, feature specs, design docs, test plans).
  - Guidance on when to use which template.
- Applies to all AI-generated outputs that fall under ADAS governance.

## 3. Core Principles & Rules
- **Always Use the 4-Section Output Format** (Summary, Files Touched & Changes, Rationale & Alignment, Tests).
- **Template Where It Matters:** Use formal templates for decisions, designs, and complex changes.
- **Lightweight for Exploration:** For exploratory reasoning or small tasks, rely primarily on the 4-section format.
- **Consistency:** Outputs of the same type should have the same shape.

## 4. Operational Guidelines for AI Helpers
- For small tasks (e.g., minor refactors, small bug fixes):
  - Use the standard 4-section response.
- For complex tasks (e.g., new feature, large refactor, architectural change, ADR proposal):
  - Use the appropriate template from this Domain and still wrap the work in the 4-section output.
- When unsure:
  - Default to using a template; being over-structured is safer than under-structured.
- Keep templates updated:
  - If a template is missing a crucial section, propose an updated version in your output.

## 5. Interfaces with Other Domains
- Provides templates for:
  - Domain 02 (Vision docs).
  - Domain 06 (Test plans).
  - Domain 09 (Feature entries).
  - Domain 11 (ADRs).
- Enforced by:
  - Domain 01’s meta-rules on output format.

## 6. Change Management
- Template changes:
  - Should be versioned and documented.
  - Must be clearly described so AI helpers know which version to use.
- Deprecated templates:
  - Keep as reference with a note pointing to the new template.
