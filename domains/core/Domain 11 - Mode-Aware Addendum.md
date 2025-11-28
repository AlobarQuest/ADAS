# Domain 11 — Decisions & ADRs  
**Mode-Aware Addendum**

> Attach this to the existing Domain 11 specification.

---

## 1. Role of Domain 11

Domain 11 governs:

- Architecture Decision Records (ADRs)
- System-level decisions
- Long-lived technical and product tradeoffs

It is the **memory of why** certain rules exist.

---

## 2. Light Mode Behavior

In **Light Mode**, AI helpers:

- Must:
  - Read ADRs for context where necessary.
- Must **not**:
  - Create new ADRs.
  - Modify existing ADR content.
  - Reinterpret ADR intent.

Light Mode treats ADRs as **fixed background context**, not something to edit.

---

## 3. Heavy Mode Behavior

In **Heavy Mode**, AI helpers:

- May:
  - Propose new ADRs when:
    - Architecture changes.
    - New major tradeoffs are introduced.
    - Security posture or stack defaults change.
  - Draft ADRs in a consistent template.
- Must:
  - Not silently contradict existing ADRs.
  - Explicitly note when a new ADR supersedes an older one.
  - Align ADR records with Domains 03, 04, 06, 12, 14, 15 as needed.

---

## 4. Integration Notes

- ADRs are the backbone for ADAS evolution (see Domain 15).  
- **Light Mode:** consume but do not change.  
- **Heavy Mode:** create/update ADRs as first-class governance operations.