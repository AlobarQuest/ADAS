# Domain 03 — Tech Stack & Dependencies (Global Web-App Profile)

## 1. Purpose

This domain defines **permitted technology stack families** (“stack groups”) and **global constraints** for ADAS-governed web applications.

It does **not** hard-code a single framework (e.g., Next.js, Vite, Supabase).  
Instead, each project MUST:

- Choose a concrete stack from the **Permissible Modern Stack Groups** below.
- Document that choice in its **Project AI Helper Playbook** and/or `.local` overlay.
- Ensure all AI helpers follow the chosen stack consistently.

Global ADAS rules live here; concrete technology selections live at the **Pattern** and **Project** layers.

---

## 2. Scope & Precedence

This domain applies to:

- All ADAS-governed **web applications** (“web-app” profile).
- All AI helpers performing architecture, implementation, testing, or infra work for web apps.

Precedence:

1. ADAS Core Meta-Rules
2. Domain 03 — Tech Stack & Dependencies (this file)
3. Pattern Playbook (A/B/C/etc.) for the project
4. Project AI Helper Playbook
5. `.local` project overrides

If a Pattern or Project file conflicts with this domain, this domain wins unless explicitly superseded by an ADAS-approved update.

---

## 3. Permissible Modern Stack Groups

Projects must choose one or more stack groups from the categories below. Each group defines an internally coherent set of technologies that ADAS considers compatible and supportable. Concrete selections are made in the project’s `.local` file or Project Playbook.

### Group A — SPA-First Stacks (Client-Heavy Web Apps)

**A1 — Vite + React SPA**  
- Vite  
- React  
- TypeScript  
- React Router or TanStack Router  
- TailwindCSS or CSS Modules  

**A2 — SvelteKit (SPA Mode)**  
- SvelteKit (SPA output)  
- TypeScript  
- Tailwind or UnoCSS  

**A3 — Vue 3 SPA**  
- Vite  
- Vue 3  
- Pinia  
- Vue Router  
- Tailwind or Vuetify  

---

### Group B — Fullstack React Frameworks

**B1 — Next.js (App Router)**  
- SSR / SSG / RSC  
- Server Actions  
- Tailwind or CSS Modules  

**B2 — Remix**  
- Server-first React  
- Loaders / Actions  
- Nested routing  

**B3 — RedwoodJS**  
- React  
- GraphQL  
- Prisma  

---

### Group C — Backend API Stacks

**C1 — Node (TypeScript)**  
- Express  
- Fastify  
- NestJS  
- Optional: tRPC or GraphQL  

**C2 — Python**  
- FastAPI  
- SQLModel or SQLAlchemy  
- Pydantic  
- Uvicorn  

**C3 — Go**  
- Gin  
- Echo  
- Fiber  
- GORM or sqlc  

---

### Group D — Serverless / Edge Runtimes

**D1 — Cloudflare Workers**  
- Durable Objects  
- KV / R2 / D1  

**D2 — Vercel Functions / Edge Runtime**  
- Integrated with fullstack frameworks  
- KV, Postgres, storage addons  

**D3 — AWS Serverless**  
- Lambda  
- API Gateway  
- DynamoDB  
- S3  
- Cognito (optional)  

---

### Group E — Backend-as-a-Service (BaaS)

**E1 — Supabase**  
- Postgres  
- Auth  
- Storage  
- Edge Functions  
- RLS  

**E2 — Firebase**  
- Firestore  
- Auth  
- Cloud Functions  
- Storage  

**E3 — Appwrite / PocketBase**  
- Collections  
- Auth  
- Storage  
- Optional self-hosting  

---

### Group F — Cross-Platform Native (paired with a web backend)

**F1 — React Native**  
- React Native or Expo  
- TypeScript  

**F2 — Flutter**  
- Dart  
- Cross-platform UI  

**F3 — Desktop (Electron / Tauri / Neutralino)**  
- Web tech for desktop apps  
- Optional backend API  

---

### Group G — Databases & Persistence

Projects may pair any application stack above with any of the following:

- PostgreSQL  
- MySQL / PlanetScale  
- Neon / Supabase Postgres  
- MongoDB Atlas  
- DynamoDB  
- SQLite / Turso  
- SurrealDB  
- Redis / Upstash Redis  

---

## 4. Global Tech-Stack Constraints (Stack-Neutral)

This section defines global constraints that apply **regardless of which stack group is chosen**. Patterns and projects may narrow these further, but MUST NOT violate them.

### 4.1 Required (Global)

Projects MUST:

1. **Select a Stack Group**
   - Choose one or more stack groups from Section 3.
   - Document the concrete choice (e.g., “A1 + C1 + G1”) in:
     - Project AI Helper Playbook, and/or  
     - `.local` overlay for Domain 03.

2. **Define Clear Boundaries**
   - Explicitly separate:
     - UI / presentation
     - Application / domain logic
     - Data access / persistence
   - No “god modules” that mix all layers without clear reason.

3. **Use Strong Typing at Boundaries**
   - External and domain boundaries MUST be strongly typed via:
     - Static types (TypeScript, etc.), and/or
     - Schemas (Zod, Pydantic, etc.).
   - Requests, responses, and DB models MUST be validated.

4. **Use an Explicit Data Access Layer**
   - Direct DB access from UI code is forbidden.
   - All persistence MUST go through:
     - A repository layer, OR
     - A well-defined ORM/Data access layer.
   - BaaS clients (Supabase/Firebase/etc.) are treated as data access layers and MUST be wrapped where appropriate.

5. **Protect Secrets & Sensitive Data**
   - Secrets MUST NEVER be committed to version control.
   - Secrets MUST NOT be exposed to client-side code.
   - Environment-specific configuration MUST be clearly separated (dev/staging/prod).

6. **Ensure Testability**
   - The chosen stack MUST support:
     - Unit testing of business logic.
     - At least minimal integration or e2e testing of critical flows.
   - Test commands and structure MUST be documented in the Project Playbook.

7. **Document the Stack**
   - Every project MUST maintain:
     - A short “Stack Profile” (which groups and concrete tools were chosen).
     - How to run the stack locally (dev environment).
     - How to run tests.

### 4.2 Allowed with Justification

The following are allowed **only with explicit justification** in the Project Playbook or ADR:

- Introducing new major frameworks or runtimes not covered in Section 3.
- Using highly experimental stacks or persistence layers.
- Diverging from default testing tools provided by Pattern Playbooks.
- Running multiple frameworks in the same app beyond clear migration scenarios.

AI helpers MUST NOT introduce these on their own; they may propose them, but require human approval.

### 4.3 Forbidden (Global)

Regardless of stack group, AI helpers MUST NOT:

- Use technologies that are not part of:
  - A defined stack group, AND  
  - The project’s documented Stack Profile.
- Commit secrets, tokens, keys, or connection strings to the repository.
- Access databases or BaaS directly from browser/client code in ways that:
  - Bypass security rules, or  
  - Expose sensitive credentials.
- Rely on unvalidated input at external boundaries (HTTP endpoints, message queues, webhooks).
- Introduce untyped or weakly typed “escape hatches” (`any`, unchecked JSON, etc.) at core domain boundaries without a clear, documented reason.

---

## 5. Responsibilities by Layer (Stack-Neutral)

To keep AI helpers aligned, this domain assumes the following **responsibility boundaries** across layers. Names may vary per project, but responsibilities MUST NOT collapse into a single layer without clear justification.

- **UI / Presentation Layer**
  - Components, pages, screens.
  - Purely presentational logic and simple state.
  - No direct DB or low-level infra calls.

- **Application / Domain Layer**
  - Business rules and orchestration.
  - Use-case / service modules.
  - Orchestrates data access and external services.

- **Data Access / Persistence Layer**
  - Repositories, ORM models, BaaS calls.
  - Encapsulates queries and storage semantics.
  - Enforces security and consistency assumptions.

Patterns and projects may add more layers (e.g., “API Layer”, “Edge Functions”), but MUST respect these minimum boundaries.

---

## 6. Summary

Domain 03 no longer defines a single “official” tech stack for all web apps.  
Instead, it defines:

- **Which stack families are permitted** (Section 3).  
- **Global, stack-neutral constraints** that every project MUST obey (Section 4).  
- **Layered responsibilities** that keep architecture clean (Section 5).

Concrete choices—such as “Next.js + Supabase + Tailwind” or “Vite + React + FastAPI + Postgres”—belong in:

- Pattern Playbooks, and  
- Project-level overlays (`Project AI Helper Playbook`, `.local` files).

All AI helpers must treat this domain as the global contract for selecting and using technology stacks in ADAS-governed web applications.
