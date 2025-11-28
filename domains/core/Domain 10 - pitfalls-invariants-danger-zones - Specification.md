# Domain 10 – Pitfalls, Invariants & Danger Zones — Specification

> **This Domain has an official Mode-Aware Addendum.**
> See: `Domain 10 - Mode-Aware Addendum.md`


## 1. Purpose
This Domain captures “hard-won knowledge”: things that have gone wrong in the past and must not go wrong again.
It encodes invariants and danger zones to prevent AI helpers from reintroducing critical bugs or destabilizing the system.

## 2. Scope & Responsibilities
- Covers:
  - Critical invariants that must always hold (data, behavior, performance, security).
  - Historical pitfalls and their lessons.
  - Dangerous or fragile areas of the codebase.
  - Known limitations and non-obvious constraints.
- Applies to all changes that touch areas listed in this Domain.

## 3. Core Principles & Rules
- **Invariants Have Teeth:** Invariants must be written so they can be tested or checked.
- **Document the Why:** Pitfalls should include their underlying cause, not only symptoms.
- **Prominent Warnings:** Danger zones should be clearly highlighted and referenced from relevant files.
- **Do Not Ignore:** AI helpers may not override or ignore invariants unless explicitly authorized.

## 4. Operational Guidelines for AI Helpers
- Before modifying a related area:
  - Check whether an invariant or pitfall entry applies.
  - If so, restate it in your rationale and explain how your change preserves it.
- When fixing a recurring bug:
  - Add or update a pitfall entry describing the pattern.
  - Link to tests that protect against the bug.
- When encountering unclear invariants:
  - Ask for clarification or propose a precise invariant in your output.

## 5. Interfaces with Other Domains
- Coordinates with:
  - Domain 06 (Testing) to ensure invariants have tests.
  - Domain 11 (Decisions) to record decisions about handling dangerous areas.
  - Domain 12 (Security) when security-related pitfalls are involved.
- Referenced by:
  - Domain 01 meta-rules as a mandatory consultation step before risky changes.

## 6. Change Management
- Invariants:
  - May only be changed with explicit ADRs and updated tests.
- Pitfalls:
  - Should be pruned occasionally when no longer relevant, but never silently deleted—mark them as “resolved” where appropriate.
