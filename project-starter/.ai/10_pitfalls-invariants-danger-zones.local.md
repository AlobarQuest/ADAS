# Domain 10 – Pitfalls, Invariants & Danger Zones (Project Overlay)

## Project Identification

- Project name: **PROJECT_NAME**
- Repo URL: **https://github.com/AlobarQuest/PROJECT_REPO**
- Owner: **Devon Watkins**

This file captures **project-specific** invariants and danger zones.

---

## Invariants

(List critical invariants that must always hold, e.g., data, behavior, performance.)

Example placeholder:

- INV-001: "User IDs are UUIDv4; never assume sequential integers."  
- INV-002: "A user may not have more than one active subscription at a time."  

---

## Pitfalls

(List recurring issues or easy-to-make mistakes in this project.)

- PITFALL-001: "Auth middleware must be applied in ROUTE_GROUP_X, or routes are public."  
- PITFALL-002: "Do not mutate SHARED_CONFIG at runtime."  

---

## Danger Zones

(List fragile areas of the codebase that require extra care.)

- DZ-001: `/src/infrastructure/payments` – fragile integration with external gateway.  
- DZ-002: `/src/domain/billing` – complex business rules.  

---

## AI Helper Guidance

- Before touching related areas, re-read relevant invariants and pitfalls.
- When fixing a bug that might recur, add or update an entry here.
- If you discover a new invariant or danger zone, propose adding it with clear ID and rationale.
