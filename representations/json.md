---
status: WORKING_DRAFT
---

# JSON implementation

This document defines the JSON serialization format for a Johnny.Decimal system.

This implementation conforms to the [Johnny.Decimal specification](../specification.md).

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

---

## File format

### Extension

JSON files SHOULD use the extension `.jd.json`.

### Encoding

Files MUST be encoded as UTF-8.

### Structure

A JSON file MUST contain a single JSON object where:

- Each key is an identifier (system, area, category, or ID).
- Each value is a record object.

---

## Identifiers as keys

Unlike the base specification, JSON files MUST include a system identifier.

| Type     | Key format              | Example   |
| -------- | ----------------------- | --------- |
| System   | `[A-Z][0-9][0-9]`       | `"A01"`   |
| Area     | `[0-9]0-[0-9]9`         | `"10-19"` |
| Category | `[0-9][0-9]`            | `"11"`    |
| ID       | `[0-9][0-9].[0-9][0-9]` | `"11.01"` |

---

## Record objects

### System record

```json
{
  "type": "system",
  "title": "string"
}
```

| Field   | Required | Description                     |
| ------- | -------- | ------------------------------- |
| `type`  | REQUIRED | MUST be `"system"`              |
| `title` | REQUIRED | System title (1-255 characters) |

### Area record

```json
{
  "type": "area",
  "title": "string"
}
```

| Field   | Required | Description                   |
| ------- | -------- | ----------------------------- |
| `type`  | REQUIRED | MUST be `"area"`              |
| `title` | REQUIRED | Area title (1-255 characters) |

### Category record

```json
{
  "type": "category",
  "title": "string"
}
```

| Field   | Required | Description                       |
| ------- | -------- | --------------------------------- |
| `type`  | REQUIRED | MUST be `"category"`              |
| `title` | REQUIRED | Category title (1-255 characters) |

### ID record

```json
{
  "type": "id",
  "title": "string",
  "metadata": {}
}
```

| Field      | Required | Description                              |
| ---------- | -------- | ---------------------------------------- |
| `type`     | REQUIRED | MUST be `"id"`                           |
| `title`    | REQUIRED | ID title (1-255 characters)              |
| `metadata` | OPTIONAL | Metadata object (see base specification) |

---

## Constraints

### One system per file

A JSON file MUST contain exactly one system record.

### Containment

All containment rules from the base specification apply:

- Areas MUST belong to the system.
- Categories MUST belong to their corresponding area.
- IDs MUST belong to their corresponding category.

### Orphans

- A category MUST NOT exist without its parent area present in the file.
- An ID MUST NOT exist without its parent category present in the file.

### Empty parents

Systems MAY contain zero areas. Areas MAY contain zero categories. Categories MAY contain zero IDs.

---

## Example

```json
{
  "A01": { "type": "system", "title": "My life" },
  "10-19": { "type": "area", "title": "Life admin" },
  "11": { "type": "category", "title": "Me" },
  "11.01": { "type": "id", "title": "Birth certificate" },
  "11.02": {
    "type": "id",
    "title": "Passport",
    "metadata": {
      "relatesTo": ["11.01"],
      "expiryDate": "2028-04-15"
    }
  },
  "12": { "type": "category", "title": "Household" },
  "12.01": {
    "type": "id",
    "title": "Insurance policies",
    "metadata": {
      "url": ["https://example.com/policy"]
    }
  }
}
```

---

## Ordering

JSON objects are technically unordered. However, implementations SHOULD preserve logical ordering when writing files:

1. System record first.
2. Areas in numeric order (`10-19` before `20-29`).
3. Categories in numeric order, grouped after their parent area.
4. IDs in numeric order, grouped after their parent category.

This ordering is not required for validity but improves human readability.

---

## Validation

A valid `.jd.json` file MUST:

1. Be valid JSON.
2. Contain exactly one system record.
3. Have all keys match their expected identifier patterns.
4. Have all `type` fields match the key format.
5. Have all titles between 1 and 255 characters.
6. Have no orphaned categories or IDs.
7. Have all containment rules satisfied.
8. Have all metadata conform to the base specification.
