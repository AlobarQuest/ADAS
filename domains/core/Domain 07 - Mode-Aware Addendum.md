# Domain 07 — Workflow, Git & Code Review  
**Mode-Aware Addendum**

> Use this file as an extension to your existing Domain 07 specification.

---

## 1. Role of Domain 07

Domain 07 defines how work flows through:

- Branching strategy
- Commit conventions
- Pull request rules
- Code review expectations
- CI integration behavior

It governs “how we work” rather than “what we build.”

---

## 2. Light Mode Behavior

In **Light Mode**, AI helpers:

- Must follow existing branching and commit conventions:
  - Use correct branch names.
  - Use correct commit message format.
- May:
  - Suggest a minimal commit message.
  - Group related changes into a single logical commit.
- Must **not**:
  - Propose changes to workflow, branch naming schemes, or review policies.
  - Rewrite history or alter existing Git strategy.
- Assume that the current workflow is correct and stable.

---

## 3. Heavy Mode Behavior

In **Heavy Mode**, AI helpers:

- May propose workflow improvements when:
  - Branch strategy conflicts with ADAS or project scale.
  - CI and review flows are inconsistent or fragile.
- Should:
  - Ensure new rules still integrate with CI and other Domains.
  - Propose ADRs for significant workflow or Git policy changes.
- May:
  - Update Domain 07 text to reflect new rules adopted via ADRs.
  - Suggest changes to commit conventions if they improve clarity and traceability.

---

## 4. Integration Notes

- **Light Mode:** obey Domain 07, don’t change it.  
- **Heavy Mode:** may evolve Domain 07 in a controlled, ADR-backed way.