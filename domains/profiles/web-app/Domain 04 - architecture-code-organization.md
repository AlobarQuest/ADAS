# Domain 04 — Architecture & Code Organization (Web‑App Profile, Stack‑Neutral)

## 1. Purpose
Defines **global architectural principles** and **recommended folder structures** for ADAS‑governed web applications.  
This domain is **stack‑neutral** and does **not** mandate any specific framework (e.g., Next.js, Vite, Remix).  
Concrete architecture decisions belong in the **Pattern Playbook** and **Project `.local` overlays**.

---

## 2. Mode Awareness

### 2.1 Light Mode
Used for small local changes or isolated refactors.

AI helpers must:
- Respect the existing architecture as-is  
- Avoid large reorganizations  
- Follow local conventions already present  
- Keep changes tightly scoped to the file/module touched  

Light Mode = “preserve architecture; improve locally.”

---

### 2.2 Heavy Mode
Used when:
- Adding new features  
- Modifying major modules  
- Introducing new architectural boundaries  
- Correcting violations of ADAS architecture rules  

AI helpers must:
- Load and enforce the full Domain 04 specification  
- Ensure boundaries are clear  
- Suggest refactors if boundaries are violated  
- Update `.local` when project-specific extensions are needed  
- Require ADRs for major architectural deviations  

Heavy Mode = “architecture governance.”

---

## 3. Recommended Folder Structure (Stack‑Neutral)

Projects may vary by framework, but MUST follow clear separation of concerns.  
A typical, framework‑agnostic baseline:

```
src/
  app/              # Routing / top-level pages/screens
  components/       # UI components (framework-specific)
  lib/              # Utilities, helpers, adapters
    validators/     # Input / schema validation
    server/         # Server-only utilities (if applicable)
  domain/           # Business logic, services, use cases
  data/             # Repositories, ORM, API clients
  hooks/            # UI or domain-specific hooks (React/Vue/Svelte/etc.)
  types/            # Shared types/interfaces
tests/
```

If a framework imposes a folder structure (e.g., Next.js, SvelteKit, Remix), that structure becomes the **Project-Level** version of this layout.

---

## 4. Architectural Principles (Global)

AI helpers MUST enforce these principles regardless of chosen stack:

### 4.1 Layered Architecture
- **UI / Presentation** → views, components, screens  
- **Domain / Services** → business rules, orchestration  
- **Data / Persistence** → repositories, ORM, API or BaaS clients  

Layers MUST NOT collapse without explicit ADR justification.

---

### 4.2 Clean Boundaries
- No DB or persistence logic in UI components  
- No business logic inside routing/modules  
- No cross-layer imports against architectural direction  
- No circular dependencies  

---

### 4.3 Validation & Safety
- All external input MUST be validated  
- Use schema validation (Zod, Pydantic, Valibot, etc.) or framework-native validators  
- Never assume trusted input or trusted clients  

---

### 4.4 Typed Contracts
- Public interfaces, API boundaries, and domain boundaries MUST be typed  
- Use framework-language idioms (TypeScript types, Python pydantic models, Go structs, etc.)

---

### 4.5 Client/Server Separation (When Applicable)
For frameworks that support both client and server execution:
- Server-only logic MUST stay server-only  
- Client bundles MUST NOT contain secrets or server logic  
- Project-specific `.local` determines how to enforce this for the stack chosen  

---

## 5. Component Rules (Framework‑Agnostic)

“Component” means UI component—React/Vue/Svelte/etc.

Components MUST:
- Be small, pure, and presentation-focused  
- Only manage UI state (no domain/business logic)  
- Call domain logic via well-defined interfaces  
- Use project-level conventions for client/server boundaries  

Components MUST NOT:
- Contain persistence or orchestration logic  
- Reach directly into low-level APIs  
- Introduce side effects unrelated to rendering  

---

## 6. Overrides

### Project MAY:
- Add additional folders  
- Adjust naming conventions  
- Expand or reorganize domain boundaries  
- Add platform-specific utilities  
- Define custom architectural rules in `.local`  

### Project MAY NOT:
- Collapse architectural layers without an ADR  
- Embed business logic in UI components  
- Mix client and server code incorrectly  
- Introduce global mutable state without strict justification  

---

## 7. Summary
Domain 04 defines a **stack-neutral architectural foundation** for web-app development under ADAS.  
Patterns and projects refine the structure; Mode dictates enforcement intensity.  
Heavy Mode ensures the architecture remains clean, layered, and maintainable.
