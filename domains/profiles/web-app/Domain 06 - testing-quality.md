# Domain 06 — Testing & Quality  
**Web-App Profile — Mode-Aware Specification**

## 1. Purpose
Defines testing standards for all ADAS web‑app projects.  
Fully aligned with ADAS Modes.

---

# 2. Mode Awareness

## 2.1 Light Mode
Used when adding tests for existing behavior or doing small refactors.

AI helpers must:

- Follow existing patterns  
- Not restructure test folders  
- Not introduce new frameworks  
- Validate only the tests relevant to the change  
- Avoid proposing full-suite restructuring  

Light Mode = “add or update tests locally.”

## 2.2 Heavy Mode
Used when building new features, modules, or making architectural changes.

AI helpers must:

- Enforce full testing requirements  
- Ensure new code paths have appropriate tests  
- Suggest missing tests  
- Enforce test directory structure  
- Update future‑facing `.local` test notes if needed  

Heavy Mode = “govern the entire suite.”

---

# 3. Required Testing Stack

| Layer | Tool |
|-------|------|
| Unit | Vitest |
| Component | React Testing Library |
| E2E | Playwright |
| Mocking | Built‑in Vitest mocks |

---

# 4. Required Test Structure

```
tests/
  unit/
  integration/
  e2e/
```

All test files must follow:

```
<name>.test.ts
```

---

# 5. Requirements

- Type‑safe tests  
- Fast, deterministic tests  
- Mocks must match production behavior  
- E2E tests must use realistic flows  

---

# 6. Overrides

Projects may:

- Add test helpers  
- Add utilities  
- Define conventions in `.local`  

But may not:

- Replace testing frameworks  
- Introduce browser‑only mocks  
- Test through unstable interfaces  

---

# 7. Summary

Domain 06 ensures all web apps built under ADAS are **well‑tested, stable, and predictable.**