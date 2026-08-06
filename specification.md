---
status: WORKING_DRAFT
---

# Johnny.Decimal specification

This document defines the structure and requirements for a Johnny.Decimal system.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [BCP 14](https://www.rfc-editor.org/info/bcp14) ([RFC 2119](https://www.rfc-editor.org/rfc/rfc2119), [RFC 8174](https://www.rfc-editor.org/rfc/rfc8174)) when, and only when, they appear in all capitals, as shown here.

# Conformance

## Conformance classes

Three things can conform to this specification:

| Class     | Definition                                                             |
| --------- | ---------------------------------------------------------------------- |
| System    | A collection of areas, categories, and IDs, independent of any medium. |
| Document  | A concrete artifact holding a system in one representation.            |
| Validator | Software that reads a document and reports violations.                 |

A system conforms when it satisfies every requirement in this document.

A document conforms when its system conforms and it satisfies every requirement of its representation.

A validator conforms when it reports as defined below.

## Reporting

- A validator MUST report a violation of a MUST or MUST NOT requirement as an **error**.
- A validator MUST report a violation of a SHOULD or SHOULD NOT requirement as a **warning**.
- A validator MUST NOT report an error or a warning for conformant content.

## Partial conformance

There is no partial conformance. A system, document, or validator conforms, or it does not.

# Terminology

- **Domain**: a group of systems that share one or more components. Systems in separate domains do not conflict.
- **Number**: every system, area, category, and ID has a number. Examples: `A01`, `10-19`, `11`, `11.01`.
- **Title**: the text that follows a number.
- **Representation**: a set of rules for writing a system in a medium. Each representation is specified in [representations/](representations/).

---

# Titles

Every system, area, category, and ID MUST have a title.

## Format

A title:

- MUST contain at least 1 character.
- MUST NOT be longer than 200 bytes when encoded as UTF-8.

## Characters

A title:

- MUST NOT contain these characters: `/ \ : * ? " < > | # ^ [ ]`
- MUST NOT contain control characters (Unicode category Cc). This forbids newlines and tabs.
- MUST NOT start or end with a space.
- MUST NOT end with a period.
- MAY contain all other Unicode characters. This includes emoji.

## Uniqueness

- Two items MAY have the same title.

## Rationale

- These rules make a title safe on macOS, Linux, and Windows, and in Obsidian. The rules come from the strictest of these targets.
- 200 bytes ensures this fits in the 255-byte filename limit with plenty of room to spare. You should prefer shorter titles.

# Systems

## Definition

A **system** is a contained collection of areas, categories, and IDs.

## System number

A system number is OPTIONAL.

If present, the system number:

- MUST match the pattern `[A-Z][0-9][0-9]`.
  - Valid range: `A00` through `Z99`.
- MUST be unique in its domain.

## Constraints

- A system without a number is valid.
- A system MAY contain zero or more areas.

# Areas

## Definition

An **area** is a high-level grouping of categories. Think of it as an 'area of your life'.

## Format

An area's number MUST be one of: `00-09`, `10-19`, `20-29`, `30-39`, `40-49`, `50-59`, `60-69`, `70-79`, `80-89`, `90-99`.

## Constraints

- An area's number MUST be unique within its system.
- An area contains zero or more categories.

# Categories

## Definition

A **category** is a grouping of related IDs.

## Format

A category's number MUST match the pattern `[0-9][0-9]`.

## Constraints

- A category's number MUST be unique within its system.
- A category MUST belong to exactly one area: the area whose first digit matches the category's first digit. Example: category `11` belongs to area `10-19`.
- A category contains zero or more IDs.

# IDs

## Definition

An **ID** is the fundamental unit of organisation in a Johnny.Decimal system. An ID represents a single project, topic, or collection of related items.

## Format

An ID's number MUST match the pattern `[0-9][0-9].[0-9][0-9]`.

The part before the `.` is the **category component**. The part after the `.` is the **ID component**.

## Constraints

- An ID's number MUST be unique within its system.
- An ID MUST belong to exactly one category: the category whose number matches the ID's category component. Example: ID `15.52` belongs to category `15`.

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
