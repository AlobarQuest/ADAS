# Domain 04 — Architecture & Code Organization  
**Web-App Profile — Mode-Aware Specification**

## 1. Purpose
Defines the **required architectural patterns and folder structures** for ADAS web‑app projects.  
Fully **Profile-aware** and **Usage Mode-aware**.

---

# 2. Mode Awareness

## 2.1 Light Mode
Used for small refactors or isolated changes.

AI helpers must:

- Load only architectural summaries  
- Assume the existing architecture is valid  
- Avoid proposing reorganizing folders  
- Only enforce local architectural correctness  
- Not move files unless required for correctness  

Light Mode = “respect the architecture, don’t redesign it.”

## 2.2 Heavy Mode
Used when architecture, modules, or major functionality changes.

AI helpers must:

- Load the full Domain 04 specification  
- Enforce strict folder & pattern rules  
- Propose refactors if code violates ADAS standards  
- Require ADRs for architectural deviations  
- Ensure new modules follow correct structure  
- Update `.local` overrides if project-specific additions are needed  

Heavy Mode = “architecture governance.”

---

# 3. Required Folder Structure

```
src/
  app/
    (routes)/
    layout.tsx
    globals.css
  components/
  lib/
    validators/
    server/
  types/
  hooks/
  styles/
tests/
```

---

# 4. Architectural Principles

- Server‑first architecture  
- No business logic in components  
- All external calls validated  
- RSC for defaults; client components only when needed  
- Centralized validation in `lib/validators`  
- No cross‑layer imports  
- No circular dependencies  

---

# 5. Component Rules

- Components must be small and pure  
- No random side effects  
- Client components must be explicit with `"use client"`  

---

# 6. Overrides

Projects may:

- Add additional folders  
- Adjust naming conventions  
- Add platform-specific utilities  

But may not:

- Break RSC/client boundaries  
- Move business logic into components  
- Introduce untyped global state  

---

# 7. Summary

Domain 04 gives the **shape** of all ADAS web apps.  
Light Mode obeys it; Heavy Mode enforces it.