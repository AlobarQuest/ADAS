# Domain 04 – Architecture & Code Organization (Project Overlay)

## Project Identification

- Project name: **PROJECT_NAME**
- Repo URL: **https://github.com/AlobarQuest/PROJECT_REPO**
- Owner: **Devon Watkins**

## Relationship to Global ADAS

This file **extends** Global ADAS Domain 04 – Architecture & Code Organization.  
Global ADAS defines general layering principles.  
This file describes the **concrete architecture for this project**.

---

## Layers & Responsibilities

(Define the layers in this project, e.g., UI, application, domain, infrastructure, etc.)

- **UI Layer** – components, pages, routing.  
- **Application Layer** – use-cases, orchestration logic.  
- **Domain Layer** – entities, value objects, domain services.  
- **Infrastructure Layer** – DB, external APIs, messaging, etc.  

---

## Module & Folder Layout

(Document key folders and what belongs in each.)

Example placeholder:

- `/src/app` – app-level bootstrapping, routing, providers.  
- `/src/domain` – domain models and core business rules.  
- `/src/infrastructure` – adapters, repositories, external services.  
- `/src/ui` – React components, pages, hooks.  

---

## Dependency Rules

(Describe allowed dependency directions between layers/modules.)

- UI → Application → Domain  
- UI → Infrastructure (only through well-defined adapters, if allowed)  
- Infrastructure must **not** depend on UI.  
- Domain must **not** depend on Infrastructure or UI.  

---

## Cross-Cutting Concerns

(Describe how logging, auth, error handling, etc., are handled.)

- Logging: central logger + interceptors.  
- Auth: handled in `infrastructure/auth` + app-level guards.  
- Error handling: domain errors vs infrastructure errors; mapping rules.  

---

## AI Helper Guidance

- Before adding or moving code, identify the correct layer and folder.
- Do not create cross-layer shortcuts that violate dependency rules.
- If you need to change the architecture, propose an ADR first (Domain 11) and note it in `11_decisions-adrs.local.md`.
