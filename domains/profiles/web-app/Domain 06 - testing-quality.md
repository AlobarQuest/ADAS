# Domain 06 — Testing & Quality (Web‑App Profile, Stack‑Neutral)

## 1. Purpose
Defines **global testing requirements** for ADAS‑governed web applications.  
This domain is **stack-neutral** and does NOT mandate specific tools (e.g., Vitest, Playwright).  
Concrete test toolchains are defined by Patterns and `.local` overlays.

---

## 2. Mode Awareness

### 2.1 Light Mode
Used for:
- Adding tests for existing behavior  
- Small refactors  
- Minor bug fixes  

AI helpers must:
- Follow existing test patterns  
- Avoid restructuring test directories  
- Avoid introducing new frameworks  
- Add tests only for touched or related behavior  
- Keep test changes minimal  

Light Mode = “test what changed.”

---

### 2.2 Heavy Mode
Used when:
- Adding new features or modules  
- Changing architecture boundaries  
- Introducing new services or data flows  
- Enforcing full test coverage expectations  

AI helpers must:
- Load full Domain 06 specification  
- Ensure new code paths are fully tested  
- Suggest missing tests  
- Enforce project-level test structure  
- Update `.local` testing rules if needed  
- Require ADR for major testing strategy changes  

Heavy Mode = “test governance.”

---

## 3. Required Testing Capabilities (Stack-Neutral)

All projects MUST support:

### 3.1 Unit Testing
- Tests MUST isolate business logic  
- Domain logic MUST be tested independently of UI  
- Pure functions MUST have deterministic tests  

### 3.2 Component Testing (When Applicable)
- UI frameworks (React/Vue/Svelte/etc.) MUST have a way to test components  
- Components MUST NOT depend on real infrastructure  
- Render logic MUST be testable  

### 3.3 Integration Testing
Projects MUST support integration tests that can validate:
- Data access  
- Service orchestration  
- API boundaries  
- Realistic execution flows  

### 3.4 End-to-End Testing
Projects MUST support at least minimal e2e capabilities for:
- Core user flows  
- Authentication (if relevant)  
- Critical CRUD paths  

### 3.5 Mocking & Test Isolation
- All external services MUST be mockable  
- Tests MUST remain deterministic  
- Mocks MUST reflect real production semantics  

---

## 4. Recommended Test Structure (Stack-Neutral)

A recommended, framework-agnostic baseline:

```
tests/
  unit/
  integration/
  e2e/
```

Projects MAY adjust this structure in their Project Playbook or `.local`.

Test file naming (recommended):

```
<name>.test.<ext>
```

(.ts, .tsx, .js, .py, etc. depending on stack)

---

## 5. Requirements (Global)

All projects MUST ensure:

- Tests are type-safe when applicable  
- Tests are deterministic and fast  
- CI runs all test layers appropriate for the project  
- Mock behavior matches real external behavior  
- No reliance on flakey or volatile external services  

---

## 6. Overrides

### Project MAY:
- Add helpers and utilities  
- Use alternative test runners or tooling  
- Modify directory layout  
- Define conventions in `.local`  

### Project MAY NOT:
- Replace the entire testing strategy without ADR  
- Introduce browser-only mocks that break CI  
- Skip tests for critical flows  
- Test through unstable or experimental interfaces without justification  

---

## 7. Summary
Domain 06 ensures all ADAS web applications are **testable, predictable, and verifiable**.  
Stack and tool choices come from Patterns and Projects;  
this domain defines the **required capabilities and global expectations** for testing and quality.
