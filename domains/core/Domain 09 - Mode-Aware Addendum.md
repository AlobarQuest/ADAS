# Domain 09 — Feature Ledger  
**Mode-Aware Addendum**

> Extend this onto your existing Domain 09 specification.

---

## 1. Role of Domain 09

Domain 09 maintains a **high-level feature ledger**:

- Planned features
- In-progress features
- Delivered features
- Links to ADRs, tickets, or specs

It is the canonical “what features exist” view.

---

## 2. Light Mode Behavior

In **Light Mode**, AI helpers:

- Consult the Feature Ledger to:
  - Understand whether a feature is new or existing.
  - Avoid duplicating existing work.
- May:
  - Add a line item for a small feature or bug fix if that is part of your workflow.
- Must **not**:
  - Reorganize entire sections.
  - Change feature statuses in bulk.
  - Rename features unless explicitly instructed.

---

## 3. Heavy Mode Behavior

In **Heavy Mode**, AI helpers:

- May:
  - Add new features with clear descriptions.
  - Update statuses across many features after milestones.
  - Link features to ADRs and project-level decisions.
- Must:
  - Keep Feature Ledger consistent with Domain 08 (status) and Domain 11 (ADRs).
- Should:
  - Propose better structure (grouping, tags, etc.) when ledger becomes unwieldy.

---

## 4. Integration Notes

- **Light Mode:** small, incremental ledger updates only.  
- **Heavy Mode:** safe to perform larger cleanups, restructuring, and backfills.