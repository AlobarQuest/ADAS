---
title: ADAS Documentation Home
layout: default
nav_order: 1
description: Entry point for Devon's Global ADAS documentation.
---

# ADAS Documentation Home

Welcome to the documentation for **ADAS — the AI Development Assistant System**.

This site is the human-friendly and AI-friendly entry point for understanding how
Devon's Global ADAS works, how projects adopt it, and how AI helpers are expected
to behave across all repos.

---

## Start Here

If you're new to ADAS, read these first:

1. **Understanding ADAS Domains**  
   A high-level explanation of each ADAS Domain, what belongs in its Specification,
   and examples of project-specific content.  
   👉 [Understanding ADAS Domains](./understanding-adas-domains.md)

2. **ADAS File Specifications Overview**  
   A concise explanation of each Domain Specification file and how it is used.
   👉 [ADAS File Specifications Overview](./adas-file-specifications-overview.md)

---

## Additional Views

- **Wiki-Style Overview of Specifications**  
  A version of the file-spec overview formatted for use in a wiki or more narrative docs.  
  👉 [ADAS File Specifications Overview (Wiki Edition)](./adas-file-specifications-overview-wiki.md)

---

## How This Docs Folder Is Used

- Place this `docs/` folder in the root of your `ADAS` repository.
- In GitHub, enable **GitHub Pages** for this repo and set the source to:
  - **Branch:** `main` (or your default branch)  
  - **Folder:** `/docs`
- Optionally choose a theme that supports Jekyll front matter (e.g., *minimal* or *just-the-docs*).

Once enabled, your ADAS documentation site will open on this page by default,
with navigation links into the key explainer documents.

---

## For AI Helpers

When acting as an AI helper in a project that uses Global ADAS:

- Treat this site as the **narrative explanation** of the ADAS system.
- Treat the `/domains` directory in the repo as the **authoritative source of rules**.
- Use the examples here to better understand how to populate project-level overlays
  and how to interpret the intent behind each Domain.
