---
title: Using ADAS in a Project
layout: default
nav_order: 5
description: Step-by-step guide for adopting Global ADAS in a specific code project.
---

# Using ADAS in a Project

This page explains how to adopt **Global ADAS** in a specific project repository using the
project-level `.ai/` overlay files.

ADAS gives you:

- Consistent AI behavior across all your repos  
- Centralized governance with local flexibility  
- Clear expectations for how AI helpers read and respect project rules  

---

## 1. Prerequisites

To use ADAS in a project, you need:

- The **Global ADAS repository** set up (with `domains/`, `adrs/`, `docs/`, and `project-starter/`).  
- Access to the `project-starter/.ai` folder in that repo.  
- A code project repo where you want to enable ADAS.

---

## 2. Add the `.ai` Folder to Your Project

In your project repo:

1. Copy the starter `.ai` folder from the Global ADAS repo:

   ```bash
   # From your project root
   mkdir -p .ai

   # Example if ADAS is cloned next to this project
   cp -r ../ADAS/project-starter/.ai/* .ai/
   ```

2. After copying, your project should contain:

   ```text
   .ai/
     00_ai-entry-point-meta-rules.md
     01_product-vision-domain-language.local.md
     03_tech-stack-constraints.local.md
     04_architecture-code-organization.local.md
     08_project-status-current-work.local.md
     09_feature-ledger.local.md
     10_pitfalls-invariants-danger-zones.local.md
     11_decisions-adrs.local.md
   ```

---

## 3. Configure `00_ai-entry-point-meta-rules.md`

Open `.ai/00_ai-entry-point-meta-rules.md` and fill in:

- The **Global ADAS repo URL**, for example:

  ```markdown
  - Global ADAS repo: https://github.com/AlobarQuest/ADAS
  - Global ADAS version: v1.0
  ```

- A short summary of how this project uses ADAS (optional but helpful).

This file tells AI helpers:

- Where the Global ADAS rules come from.  
- Which version they should assume.  
- Which local overlays exist in this project.

---

## 4. Fill in the Local Overlay Files

Each `.local` file customizes ADAS for this **specific project**.

Recommended minimum:

1. **Product Vision & Domain Language**  
   `.ai/01_product-vision-domain-language.local.md`

   Fill in:
   - Project name, URL, owner  
   - Vision and personas  
   - Domain terms and definitions  
   - Goals and non-goals  

2. **Tech Stack & Constraints**  
   `.ai/03_tech-stack-constraints.local.md`

   Fill in:
   - Required stack (language, frameworks, database, test tools)  
   - Preferred tools  
   - Forbidden tools and why  
   - Version constraints  

3. **Architecture & Code Organization**  
   `.ai/04_architecture-code-organization.local.md`

   Fill in:
   - Layers and their responsibilities  
   - Folder layout  
   - Dependency rules  
   - Cross-cutting concerns (logging, auth, error handling, etc.)  

4. (Optional but recommended) **Status, Features, Pitfalls, Decisions**

   - `.ai/08_project-status-current-work.local.md`  
   - `.ai/09_feature-ledger.local.md`  
   - `.ai/10_pitfalls-invariants-danger-zones.local.md`  
   - `.ai/11_decisions-adrs.local.md`  

These files will grow over time as you work on the project.

---

## 5. Commit ADAS to the Project

Once the `.ai` folder is in place and minimally filled out:

```bash
git add .ai
git commit -m "Adopt Global ADAS v1.0 with project overlay"
git push
```

From this point on, the project is **ADAS-enabled**.

---

## 6. Using ADAS with AI Tools

When you use an AI helper on this project, your prompt should include instructions like:

> - Load `.ai/00_ai-entry-point-meta-rules.md` first.  
> - Assume Global ADAS v1.0 from `https://github.com/AlobarQuest/ADAS`.  
> - Load any `.ai/*.local.md` files and treat them as this project’s overlay.  
> - Follow ADAS rules when generating or modifying code.  
> - Use the 4-section ADAS output format.

You can bake this into:

- Your editor’s AI integration prompt.  
- A reusable “project prompt” file.  
- Future `adas` CLI tooling.

---

## 7. Upgrading ADAS in a Project

When Global ADAS is updated (e.g., v1.1), you can upgrade a project by:

1. Reviewing the Global ADAS `CHANGELOG.md`.  
2. Updating the version in `.ai/00_ai-entry-point-meta-rules.md`:

   ```diff
   - Global ADAS version: v1.0
   + Global ADAS version: v1.1
   ```

3. Adjusting `.local` files if needed (for example, if coding standards changed).  
4. Optionally recording the upgrade in a project-level ADR.

---

## 8. Summary

- The **Global ADAS repo** defines shared rules and templates.  
- Each project adds a `.ai/` overlay that binds to a specific ADAS version.  
- AI helpers read `.ai/` plus Global ADAS to behave consistently and safely.  

Once your project uses this pattern, you can treat AI helpers as part of a
disciplined, versioned engineering system rather than ad-hoc tools.
