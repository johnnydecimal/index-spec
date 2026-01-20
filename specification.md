---
status: DRAFT
---

# Johnny.Decimal specification

This document defines the structure and requirements for a Johnny.Decimal system.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

---

# Types

Each record in a Johnny.Decimal system has a type. Implementations that expose type information MUST use the following canonical values:

| Type | Value |
|------|-------|
| System | `system` |
| Area | `area` |
| Category | `category` |
| ID | `id` |

Type values MUST be lowercase.

---

# Titles

Systems, areas, categories, and IDs MUST each have a title.

## Format

A title:

- MUST contain at least 1 character.
- MUST NOT exceed 255 characters.

## Constraints

- A title MAY contain any printable Unicode characters.

---

# Systems

## Definition

A **system** is a contained collection of areas, categories, and IDs.

## System identifier

A system identifier is OPTIONAL.

If present, the system identifier:

- MUST match the pattern `[A-Z][0-9][0-9]`.
  - Valid range: `A00` through `Z99`.
- MUST be unique across all systems in scope.

## Constraints

- A system without an identifier is valid.
- A system MAY contain zero or more areas.

---

# Areas

## Definition

An **area** is a high-level grouping of categories. Areas represent broad domains within a system.

## Format

An area identifier:

- MUST match the pattern `[0-9]0-[0-9]9` where both digits are identical.
  - Valid values: `00-09`, `10-19`, `20-29`, `30-39`, `40-49`, `50-59`, `60-69`, `70-79`, `80-89`, `90-99`.

## Constraints

- An area MUST be unique within its system.
- An area MAY contain zero or more categories.
- An area MUST only contain categories whose first digit matches the area's first digit.
  - Area `10-19` MAY contain categories `10` through `19`.
  - Area `10-19` MUST NOT contain category `20`.

---

# Categories

## Definition

A **category** is a grouping of IDs. Categories represent a specific domain of work or collection of related items.

## Format

A category identifier:

- MUST match the pattern `[0-9][0-9]`.
  - Valid range: `00` through `99`.

## Constraints

- A category MUST be unique within its system.
- A category MUST belong to exactly one area.
- A category MUST be contained within the area whose range includes the category number.
  - Category `11` MUST belong to area `10-19`.
  - Category `11` MUST NOT belong to area `20-29`.
- A category MAY contain zero or more IDs.
- A category MUST NOT exist without a parent area.

---

# IDs

## Definition

An **ID** is the fundamental unit of organisation in a Johnny.Decimal system. An ID represents a single project, topic, or collection of related items.

## Format

An ID:

- MUST match the pattern `[0-9][0-9].[0-9][0-9]`.
  - Valid range: `00.00` through `99.99`.

The portion before the decimal is the **category component**. The portion after the decimal is the **ID component**.

## Constraints

- An ID MUST be unique within its system.
- An ID MUST belong to exactly one category.
- An ID MUST be contained within the category matching its category component.
  - ID `15.52` MUST belong to category `15`.
  - ID `15.52` MUST NOT belong to category `16`.
- An ID MUST NOT exist without a parent category.

