# Domain 03 — Tech Stack & Constraints  
**Web-App Profile — Mode-Aware Specification**

## 1. Purpose
Defines the **default technology stack, constraints, and required tools** for all ADAS web‑app projects.  
This version is fully **Profile-aware** and **Usage Mode-aware** (Light vs Heavy).

---

# 2. Mode Awareness

## 2.1 Light Mode
Used when performing small, scoped operations.  
AI helpers must:

- Load only a summary of stack constraints  
- Assume the existing project follows these rules  
- Not propose switching frameworks or libraries  
- Avoid suggesting new dependencies  
- Enforce only *local correctness*  
- Reference profile defaults without revalidating the entire stack  

**In Light Mode, this Domain acts as a guardrail**, not a decision-maker.

## 2.2 Heavy Mode
Used for architecture, new modules, major features, or structural changes.  
AI helpers must:

- Load the full Domain 03 spec  
- Evaluate whether stack decisions align with ADAS  
- Enforce all stack constraints strictly  
- Identify violations and propose ADRs or compliant alternatives  
- Update `.local` notes when project-specific deviations are required  

**In Heavy Mode, Domain 03 is authoritative.**

---

# 3. Web-App Default Stack

| Area | Default |
|------|---------|
| Framework | **Next.js (App Router)** |
| Language | **TypeScript** |
| UI | **TailwindCSS** |
| Backend | **Supabase** |
| Auth | **Supabase Auth** |
| Database | **Postgres** |
| Testing | **Vitest + Testing Library + Playwright** |
| Styling | **Tailwind, no CSS-in-JS** |

---

# 4. Constraints

### Required
- TypeScript only  
- Strong typing at all boundaries  
- RSC-first Next.js patterns  
- Server Actions preferred over API routes  
- Secure database access via Supabase client or server SDK  
- Tailwind for styling  
- No global mutable state  

### Allowed with justification (Heavy Mode only)
- Alternative UI kits  
- Optional server frameworks for special tasks  
- Additional libraries that do not violate architecture/security  

### Forbidden
- Raw SQL without RLS  
- Direct Postgres connections from the client  
- Next.js pages router  
- CSS-in-JS libraries  
- Any untyped JavaScript  

---

# 5. Override Rules

### Core → Profile → Local
Project `.local` overrides must:

- Document any deviations  
- Provide a reason  
- Maintain ADAS security & architecture rules  

---

# 6. Summary

Domain 03 defines a **stable, opinionated, mode-aware tech stack** for all ADAS web apps.  
Light Mode uses it as a reference; Heavy Mode enforces it strictly.