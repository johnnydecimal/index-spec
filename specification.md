---
status: WORKING_DRAFT
---

# Johnny.Decimal specification

This document defines the structure and requirements for a Johnny.Decimal system.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

---

# Types

Each record in a Johnny.Decimal system has a type. Implementations that expose type information MUST use the following canonical values:

| Type     | Value      |
| -------- | ---------- |
| System   | `system`   |
| Area     | `area`     |
| Category | `category` |
| ID       | `id`       |

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

---

# Metadata

## Definition

**Metadata** is a collection of key/value pairs attached to an ID.

## Applicability

- Metadata MAY be attached to IDs.
- Metadata MUST NOT be attached to systems, areas, or categories.

### Rationale

IDs are the leaf nodes of a Johnny.Decimal system and the only place where data exists. Metadata about higher-level structures is stored using **standard zeros**:

| Structure     | Standard zero |
| ------------- | ------------- |
| System        | `00.00`       |
| Area `20-29`  | `20.00`       |
| Category `21` | `21.00`       |

To store metadata about category `21`, attach it to ID `21.00`. To store metadata about area `20-29`, attach it to ID `20.00`. To store metadata about the system itself, attach it to ID `00.00`.

## Keys

A metadata key:

- MUST contain at least 1 character.
- MUST match the pattern `[a-zA-Z][a-zA-Z0-9_]*`.
- MUST be unique within the metadata of a single ID.

### Reserved keys

The following keys are reserved and have defined semantics:

| Key           | Type                   | Description                                |
| ------------- | ---------------------- | ------------------------------------------ |
| `description` | string                 | A human-readable description of the ID     |
| `relatesTo`   | array of ID references | References to other IDs in the same system |
| `url`         | array of URIs          | External resources associated with this ID |

Implementations MUST validate reserved keys according to their type definitions.

Implementations SHOULD warn if a user attempts to use a reserved key with an invalid value.

### User-defined keys

Keys not listed as reserved MAY be used freely by users.

User-defined keys SHOULD use camelCase for consistency with reserved keys.

## Values

A metadata value:

- MUST be a valid JSON value (string, number, boolean, array, or object).
- MUST NOT be null.

### description

The `description` value:

- MUST be a string.
- MAY be of arbitrary length.
- Is interpreted as GitHub-Flavored Markdown (GFM). Plain text without formatting is valid.
- Implementations that do not support Markdown rendering SHOULD display the raw text.

### relatesTo

The `relatesTo` value:

- MUST be an array.
- Each element MUST be a string matching the ID format (`[0-9][0-9].[0-9][0-9]`).
- Each referenced ID SHOULD exist in the same system.
- Relationships are one-way; implementations MAY derive backlinks.

### url

The `url` value:

- MUST be an array.
- Each element MUST be a valid URI (per RFC 3986).
