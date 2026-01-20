# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is the **specification repository** for the Johnny.Decimal system - a method for organizing files and information using a structured numbering scheme.

This repository contains:
- `specification.md` - The formal, implementation-agnostic specification (uses RFC 2119 keywords)
- `types/index.ts` - TypeScript type definitions for a Johnny.Decimal system
- `implementations/` - Documentation for specific implementations (e.g., plain-text index files)

## Johnny.Decimal structure

The hierarchy is: **System → Area → Category → ID**

| Type | Format | Example | Notes |
|------|--------|---------|-------|
| System | `[A-Z][0-9][0-9]` | `A01` | Optional identifier |
| Area | `X0-X9` | `10-19` | Groups categories by first digit |
| Category | `[0-9][0-9]` | `11` | Must belong to matching area |
| ID | `[0-9][0-9].[0-9][0-9]` | `11.01` | Must belong to matching category |

Key constraints:
- Categories must be contained within their area (category `11` must be in area `10-19`)
- IDs must be contained within their category (ID `11.01` must be in category `11`)
- Parents may be childless; orphans are disallowed
- All items require titles (1-255 characters)

## Working with this repository

This is a specification/documentation repository. There is no build system, tests, or runtime code. Changes should:
- Maintain RFC 2119 compliance in specification.md
- Keep TypeScript types in sync with the specification
- Follow the existing markdown formatting conventions
