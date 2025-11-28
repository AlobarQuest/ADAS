# Domain 05 — Mode-Aware Addendum

> Attach this addendum to the existing **Domain 05** specification.  
> It introduces **Usage Modes** behavior without redefining Domain 05’s core purpose.

---

## 1. Role of Domain 05 in ADAS

Domain 05 typically governs cross-cutting rules (e.g., coding guidelines, non-functional constraints, or other project-wide rules as defined in your current spec).

---

## 2. Light Mode Behavior

In **Light Mode**, AI helpers:

- Must **respect existing Domain 05 rules** but:
  - Do not create or update Domain 05 content.
  - Do not broaden or weaken constraints.
- Use Domain 05 only to:
  - Validate that a local change does not obviously violate global rules.
  - Adjust style and conventions on a small scale (e.g., naming, formatting, minor patterns).

---

## 3. Heavy Mode Behavior

In **Heavy Mode**, AI helpers:

- May propose:
  - Updates to Domain 05 when project standards have evolved.
  - Clarifications, reorganizations, or additional guidance.
- Must:
  - Keep Domain 05 consistent with other Domains (especially 03, 04, 06, 12).
  - Use ADRs where changes represent a shift in global standards.
- Should:
  - Remove obsolete or contradictory guidance.
  - Prefer concise, rule-focused language.

---

## 4. Integration Notes

- Domain 05 is a **governance Domain** that strongly influences everyday development.
- **Light Mode:** reference-only, no content changes.  
- **Heavy Mode:** safe place for improving and tightening global standards.