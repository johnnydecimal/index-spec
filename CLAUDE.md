# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is the **specification repository** for the Johnny.Decimal system - a method for organizing files and information using a structured numbering scheme.

This repository contains:
- `specification.md` - The formal, implementation-agnostic specification (uses RFC 2119 keywords)
- `representations/` - Documentation for specific representations (e.g., plain-text index files)
- `tests/` - Test cases, one folder per representation

## Johnny.Decimal structure

The hierarchy is: **System → Area → Category → ID**. Work packages belong to the system and reference one ID. Children attach to IDs and work packages.

| Type | Format | Example | Notes |
|------|--------|---------|-------|
| System | `[A-Z][0-9][0-9]` | `A01` | Optional identifier |
| Area | `[0-9]0-[0-9]9` | `10-19` | Groups categories by first digit |
| Category | `[0-9][0-9]` | `11` | Must belong to matching area |
| ID | `[0-9][0-9].[0-9][0-9]` | `11.01` | Must belong to matching category |
| Work package | `W[0-9][0-9][0-9][0-9]` | `W0011~11.14` | Always written with `~` parent reference; unique per system |
| Child | parent, marker, title | `11.14+ Belinda` | `+` extension or `)` sub-note; no grandchildren |

Key constraints:
- Categories must be contained within their area (category `11` must be in area `10-19`)
- IDs must be contained within their category (ID `11.01` must be in category `11`)
- Work packages belong to exactly one ID; `W0000`-`W0010` are reserved
- Children attach to IDs and work packages only
- Parents may be childless; orphans are disallowed
- All items require titles (1 character minimum, 200 bytes UTF-8 maximum)

## Working with this repository

This is a specification/documentation repository. There is no build system or runtime code. Changes should:
- Maintain RFC 2119 compliance in specification.md
- Follow the existing markdown formatting conventions

John writes all English prose in this repository himself. Claude writes only formal artifacts: statecharts, schemas, type definitions, test cases.
