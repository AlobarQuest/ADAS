# Understanding ADAS Domains  
**Complete, Profile-Aware, Production-Ready Edition**

ADAS (AI Development Assistant System) is organized into **15 Domains**, each defining a distinct area of governance for AI helpers and project structure. Domains form the “mental architecture” that keeps AI-driven development consistent, predictable, and aligned with your long‑term goals.

This document explains each Domain, how Core and Profile layers interact, and how project-level overrides work.

---

# 1. How ADAS Domains Work

ADAS uses a **three‑layer model**:

## **Layer 1 — Core Domains**
Located at:
```
domains/core/
```
Core Domains apply to *all projects*. They define baseline reasoning patterns, architecture principles, workflows, and governance.

## **Layer 2 — Profile Domains**
Located at:
```
domains/profiles/<profile-name>/
```
Profiles specialize ADAS for different development types.  
Examples:

- `web-app` (stable)
- `desktop-app` (experimental)
- `mobile-ios` (planned)

Each profile may override or extend certain Core Domains:

- Domain 03 – Tech Stack & Constraints  
- Domain 04 – Architecture  
- Domain 06 – Testing & Quality  
- Domain 12 – Security & Secrets  

## **Layer 3 — Project `.local` Overlays**
Located in each project repo:
```
.ai/NN_filename.local.md
```
These files adapt ADAS rules to the specific project.

---

# 2. Domain Precedence

When AI helpers load ADAS, Domains apply in this order:

1. **User Request** (only if consistent with ADAS)  
2. **Project `.local` rules**  
3. **Active Profile rules** (web‑app, desktop‑app, etc.)  
4. **ADAS Core**  
5. **Model Defaults**

If a Domain is listed as **non‑overridable** in `adas-config.json`, `.local` overrides cannot change it.

---

# 3. Domain Summaries (Core + Profile-Aware)

Below is a complete, authoritative explanation of each Domain.

---

## **Domain 01 — AI Entry Point & Meta‑Rules**

**Purpose:**  
Define how AI helpers enter, interpret, and apply ADAS.

**Topics:**
- How context files load (`00 → 14`)  
- Definitions of “Core”, “Profile”, and “Local” governance layers  
- Non‑overridable behaviors (structured output, rationale, reasoning model)  
- Safety, determinism, and consistent behavior across sessions  

**Profile Impact:**  
None — always Core.

---

## **Domain 02 — Product Vision & Domain Language**

**Purpose:**  
Define how a project should communicate its goals, vocabulary, feature boundaries, and shared mental models.

**Topics:**
- Domain‑specific terminology  
- Project vision & North Star  
- Naming conventions  
- How AI helpers interpret ambiguous language  

**Profile Impact:**  
None — always Core.

---

## **Domain 03 — Tech Stack & Constraints**

**Purpose:**  
Define the preferred technologies and constraints the AI should follow.

**Core Topics:**
- Categories of acceptable tech  
- Dependency rules  
- Environment configuration  
- Avoiding unnecessary libraries  

**Profile Overlays Allowed:**  
✔ web‑app  
✔ desktop‑app  
✔ mobile‑ios  

**Example web‑app overrides:**
- Recommended frameworks (Next.js, React)  
- Backend platform (e.g., Supabase)  
- Build / bundler choices  

---

## **Domain 04 — Architecture & Code Organization**

**Purpose:**  
Define the structural principles of the codebase.

**Core Topics:**
- Separation of concerns  
- Domain vs infrastructure layers  
- File and folder segmentation  
- Avoiding business logic leakage into UI/API handlers  
- Modularity and composability  

**Profile Overlays Allowed:**  
✔ web‑app  
✔ desktop‑app  
✔ mobile‑ios  

**Example web‑app overrides:**
- Suggested folder layout  
- API handler patterns  
- Client/server separation rules  

---

## **Domain 05 — Coding Style, Patterns & Security Guardrails**

**Purpose:**  
Define implementation‑level expectations.

**Topics:**
- Coding patterns and anti‑patterns  
- Error handling  
- Performance considerations  
- Logging conventions  
- Basic security posture (never commit secrets, sanitize inputs, etc.)

**Profile Impact:**  
Mostly Core; minor profile extensions possible.

---

## **Domain 06 — Testing & Quality**

**Purpose:**  
Define testing expectations and quality gates.

**Core Topics:**
- Automated testing minimums  
- Unit vs integration tests  
- What must be tested before merging  
- Required test tooling presence  

**Profile Overlays Allowed:**  
✔ web‑app  
✔ desktop‑app  
✔ mobile‑ios  

**Example web‑app overrides:**
- Test runner defaults  
- Component testing guidance  
- Supabase mocking strategies  

---

## **Domain 07 — Workflow, Git, and Code Review**

**Purpose:**  
Define how work is organized and merged.

**Topics:**
- Branch naming patterns  
- PR rules  
- Commit conventions  
- Review process (AI‑assisted reviews, structured summaries)  
- Conflict resolution behaviors  

**Profile Impact:**  
None — always Core.

---

## **Domain 08 — Project Status / Current Work**

**Purpose:**  
Describe how AI helpers track current work, tasks, and project status.

**Topics:**
- Status file structure  
- “Current task” tracking  
- In‑progress work rules  

**Profile Impact:**  
None — always Core.

---

## **Domain 09 — Feature Ledger**

**Purpose:**  
Track features: proposed, planned, active, completed.

**Topics:**
- Feature metadata  
- Requirements tracking  
- Linking features to ADRs and code regions  

**Profile Impact:**  
None — always Core.

---

## **Domain 10 — Pitfalls, Invariants & Danger Zones**

**Purpose:**  
Document major project risks and areas prone to errors.

**Topics:**
- Architectural invariants  
- Known failure modes  
- Danger zones requiring special caution  
- Cross‑cutting concerns  

**Profile Impact:**  
Profiles may append platform‑specific pitfalls.

---

## **Domain 11 — Decisions / ADRs**

**Purpose:**  
Document important decisions in an architectural decision record (ADR) format.

**Topics:**
- Decision template  
- How to justify and document decisions  
- How prior decisions shape future reasoning  
- How to reference ADRs inside PRs  

**Profile Impact:**  
None — always Core.

---

## **Domain 12 — Security & Secrets**

**Purpose:**  
Define required security posture and secret‑handling rules.

**Core Topics:**
- Never commit secrets  
- Env‑based configuration  
- Role‑based access expectations  
- Authorization & authentication patterns  

**Profile Overlays Allowed:**  
✔ web‑app  
✔ desktop‑app  
✔ mobile‑ios  

**Example web‑app overrides:**
- Supabase key handling  
- Token/session storage methods  

---

## **Domain 13 — Templates & Interaction Model**

**Purpose:**  
Define templates AI helpers use to produce consistent outputs.

**Topics:**
- Output formats  
- Engineering proposal templates  
- PR templates  
- Summary structures  
- Test plan templates  

**Profile Impact:**  
Mostly Core, but profiles may extend templates.

---

## **Domain 14 — ADAS File Organization & Naming**

**Purpose:**  
Define how ADAS files are structured and named.

**Now Includes (after multi‑profile upgrade):**
- Core domain location (`domains/core/`)  
- Profile overlays (`domains/profiles/<profile>/`)  
- Project `.ai/` structure  
- Skeleton file naming rules  
- Integration with `adas-config.json`  

**Profile Impact:**  
None in structure; profiles live under designated subfolders.

---

## **Domain 15 — ADAS Overview & Maintenance**

**Purpose:**  
Define how ADAS evolves.

**Now Includes:**
- Core + profile versioning  
- `adas-config.json` governance  
- How tools/AI helpers must read configuration  
- Upgrade paths for projects  
- Rules for maintaining consistency across ADAS domains  

**Profile Impact:**  
Profiles affect versioning but not Domain structure.

---

# 4. Links to Related Documentation

- **ADAS Profiles & Config (critical for multi‑profile ADAS):**  
  → [`adas-profiles-and-config.md`](adas-profiles-and-config.md)

- **ADAS File Specifications Overview:**  
  → [`ADAS-file-specifications-overview.md`](ADAS-file-specifications-overview.md)

- **Wiki Edition Specification Index:**  
  → [`ADAS-file-specification-overview-wiki.md`](ADAS-file-specification-overview-wiki.md)

- **How AI Helpers Load ADAS Context:**  
  → [`for-ai-helpers-how-to-load-adas-context.md`](for-ai-helpers-how-to-load-adas-context.md)

---

# 5. Summary

This document provides the complete mental model of ADAS Domains:

- Clear Core vs Profile boundaries  
- Explicit override rules  
- Project `.local` behavior  
- Domain purposes and responsibilities  
- How to navigate and maintain the system across project types  

Every ADAS rule, profile, and decision ultimately attaches to one of these Domains.

Understanding this hierarchy is essential for both humans and AI helpers interacting with ADAS at any level.