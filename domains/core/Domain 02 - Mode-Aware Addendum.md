# Domain 02 — Mode-Aware Addendum

> Use this addendum alongside the existing **Domain 02** specification.  
> It does not redefine Domain 02’s purpose; it makes it **Mode-aware** (Light vs Heavy).

---

## 1. Role of Domain 02 in ADAS

Domain 02 provides project-level context and framing (requirements, constraints, or other high-level information as defined in your existing spec).  
Its rules influence *how* other Domains are interpreted and applied.

---

## 2. Light Mode Behavior

When the AI helper is in **Light Mode**:

- Treat Domain 02 as **read-only context**.
- Do not change Domain 02 content.
- Use it only to better interpret:
  - Localized code changes
  - Naming choices
  - Minor refactors
- Do not add new sections or restructure the document.
- If Domain 02 appears inconsistent with the code, note it briefly in the helper’s reasoning, but do not attempt to “fix” the Domain in Light Mode.

---

## 3. Heavy Mode Behavior

When the AI helper is in **Heavy Mode**:

- May propose updates to Domain 02 if:
  - The core product context or constraints have shifted.
  - New requirements or non-functional constraints have been introduced.
- Must:
  - Align Domain 02 with ADRs (Domain 11).
  - Ensure Domain 02 and the Feature Ledger (Domain 09) do not contradict each other.
  - Suggest ADRs if Domain 02 changes represent governance decisions.
- Should:
  - Clarify outdated or ambiguous language.
  - Propose reorganizing the document only when it improves long-term clarity.

---

## 4. Integration Notes

- **Light Mode:** interpret-only, no structural changes.
- **Heavy Mode:** may evolve Domain 02 in line with ADRs and real project direction.
- Domain 02 is a *source-of-truth context*, not a free-form notes document.