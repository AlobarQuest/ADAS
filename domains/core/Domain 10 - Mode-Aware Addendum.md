# Domain 10 — Pitfalls & Invariants  
**Mode-Aware Addendum**

> Append to the existing Domain 10 specification.

---

## 1. Role of Domain 10

Domain 10 captures:

- Known project pitfalls (things that regularly go wrong)
- Invariants (things that must always be true)
- “Sharp edges” of the system

It helps both humans and AI avoid breaking core assumptions.

---

## 2. Light Mode Behavior

In **Light Mode**, AI helpers:

- Must:
  - Read and honor invariants when making local changes.
  - Avoid violating any invariant, even if it would “simplify” code.
- May:
  - Add a small note when a new pitfall is discovered while fixing a bug (if that is part of your workflow).
- Must **not**:
  - Rewrite or collapse many invariants.
  - Remove entries or relax constraints.

---

## 3. Heavy Mode Behavior

In **Heavy Mode**, AI helpers:

- May:
  - Reorganize invariants into clearer structures.
  - Merge duplicates and clarify wording.
  - Add new invariants for new architectural or security decisions.
- Must:
  - Confirm that invariants are consistent with current architecture (Domains 03 & 04) and security rules (Domain 12).
- Should:
  - Propose ADRs when new invariants are essentially system-level decisions.

---

## 4. Integration Notes

- Domain 10 is critical for **safety**.  
- **Light Mode:** use it as strong constraints; small additions only.  
- **Heavy Mode:** may refine and evolve the invariant set, but never weaken safety guarantees.