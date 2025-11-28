# Domain 08 — Project Status & Current Work  
**Mode-Aware Addendum**

> Attach to existing Domain 08 spec.

---

## 1. Role of Domain 08

Domain 08 tracks:

- Current focus and active work
- Short-term goals
- Known blockers
- High-level progress markers

It helps AI helpers understand “what we’re doing right now.”

---

## 2. Light Mode Behavior

In **Light Mode**, AI helpers:

- Read Domain 08 as *context only*:
  - Understand which feature or bug is currently in focus.
  - Avoid using stale sections if obviously outdated.
- May:
  - Add a short, localized note to reflect work just completed (if that is part of your workflow).
- Should **not**:
  - Reorganize the document.
  - Reset or reprioritize tasks.
  - Rewrite status sections broadly.

---

## 3. Heavy Mode Behavior

In **Heavy Mode**, AI helpers:

- May:
  - Update the entire Domain 08 status section after large milestones.
  - Reorganize status into clearer sections (e.g., Now / Next / Later).
- Must:
  - Keep Domain 08 consistent with the Feature Ledger (Domain 09) and ADRs (Domain 11).
  - Avoid “inventing” progress or features that do not exist.
- Should:
  - Propose simple, reliable status formats that are easy to maintain.

---

## 4. Integration Notes

- Domain 08 is **live context**, not long-term history.  
- **Light Mode:** minor, incremental updates only (if your workflow expects that).  
- **Heavy Mode:** allowed to clean up and synchronize status with the broader ADAS picture.