# Domain 03 – Tech Stack & Constraints (Project Overlay)

## Project Identification

- Project name: **PROJECT_NAME**
- Repo URL: **https://github.com/AlobarQuest/PROJECT_REPO**
- Owner: **Devon Watkins**

## Relationship to Global ADAS

This file **extends** Global ADAS Domain 03 – Tech Stack & Constraints.  
Global ADAS defines how stacks are categorized (required, preferred, allowed, forbidden).  
This file defines the **actual stack** for this project.

---

## Required Stack

(Technologies that MUST be used when applicable.)

- Language: **e.g., TypeScript**
- Backend framework: **e.g., FastAPI**
- Frontend framework: **e.g., React 18**
- Database: **e.g., PostgreSQL**
- Testing framework: **e.g., pytest, Playwright**

---

## Preferred Stack

(Strong defaults when multiple options exist.)

- State management: **e.g., Zustand**
- Data fetching: **e.g., TanStack Query**
- Styling: **e.g., Tailwind CSS**

---

## Allowed Stack

(Tools that are permitted but not preferred.)

- Tool A – short rationale.  
- Tool B – short rationale.  

---

## Forbidden Stack

(Technologies that must NOT be introduced into this project, and why.)

- Tech A – why it’s forbidden (e.g., performance, maintenance, security).  
- Tech B – why it’s forbidden.  

---

## Version Constraints

(Specify version ranges for critical dependencies.)

- React: `^18.x`  
- FastAPI: `^0.11x`  
- PostgreSQL: `>=14`  

---

## AI Helper Guidance

- Use Required/Preferred tools by default.
- Never introduce Forbidden tools without an explicit ADR and human confirmation.
- When suggesting a new dependency, explain:
  - Why existing tools are insufficient.
  - How it fits the allowed stack and ADAS constraints.
