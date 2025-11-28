# Domain 13 — Mode-Aware Addendum

> Attach this to your existing Domain 13 specification.

---

## 1. Role of Domain 13

Domain 13’s specific topic depends on your existing ADAS design (e.g., logging, observability, performance, etc.).  
This addendum simply defines how **Modes** apply to whatever Domain 13 governs.

---

## 2. Light Mode Behavior

In **Light Mode**, AI helpers:

- Must respect Domain 13 rules as constraints.  
- Must not introduce new cross-cutting patterns in this Domain’s area (logging, metrics, etc.).  
- May:
  - Make small, localized changes that clearly align with existing patterns.
- Must not:
  - Redefine the broader approach governed by Domain 13.

---

## 3. Heavy Mode Behavior

In **Heavy Mode**, AI helpers:

- May:
  - Propose improvements to Domain 13 rules.
  - Introduce or reorganize infrastructure within this Domain’s scope.
- Must:
  - Keep changes consistent with security (Domain 12), architecture (Domain 04), and governance (Domain 15).
  - Use ADRs when changes are systemic.

---

## 4. Integration Notes

Domain 13 remains fully under your original design; this addendum only explains **how Light vs Heavy Mode** affect whether and how it may be changed.