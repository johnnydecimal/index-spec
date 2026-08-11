# Plain-text index representation

This document defines the plain-text index representation of a Johnny.Decimal system. The index is one plain-text file that a person can read.

The [Johnny.Decimal specification](../specification.md) is the core specification. A document in this representation conforms when its system conforms and it satisfies every MUST-level requirement that applies to a document, in the core specification and in this representation.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [BCP 14](https://www.rfc-editor.org/info/bcp14) ([RFC 2119](https://www.rfc-editor.org/rfc/rfc2119), [RFC 8174](https://www.rfc-editor.org/rfc/rfc8174)) when, and only when, they appear in all capitals, as shown here.

# Overview

This is an example index. The RECOMMENDED filename is `00.00 JDex.txt`.

```text
10-19 Your first area's title
   11 Your first category's title
      11.01 Your first ID's title
      11.01) A sub-note of that ID
      11.01+ An extension of that ID
      11.02 The second ID in category 11
   12 Category twelve
20-29 Your second area
   21 Category twenty-one
      21.01 ...and so on
W0011~21.01 A work package belonging to 21.01
W0011~21.01) A sub-note of that work package
W0012~11.02 Work packages sort by W-number
```

# Specification

## Encoding

- An index MUST use UTF-8 encoding.
- An index SHOULD NOT start with a byte order mark. A parser MUST ignore a byte order mark at the start of the file.
- A line break is a line feed (U+000A) or a carriage return and line feed (U+000D U+000A). A parser MUST accept both forms.

## Lines

An index is a sequence of lines. A parser classifies a line by its first non-whitespace characters:

| Starts with     | Kind          |
| --------------- | ------------- |
| `//`            | Comment line  |
| `- `            | Metadata line |
| nothing (empty) | Blank line    |
| anything else   | Item line     |

An **item line** holds exactly one item, in the written form that the core specification's Titles section defines: the number, then the title. For a work package, the parent reference comes between the number and the title. For a child, the parent's number and the marker replace the number.

- An item MUST NOT span more than one line.
- An item line MUST parse as a valid item. A parser MUST NOT skip a line that it cannot parse.

The core specification defines the number formats, containment, uniqueness, and title rules. This document does not add to them and does not repeat them.

### Rationale

A parser classifies every line. A mistyped number is an error, not a dropped line. Error detection is the purpose of a formal index.

## Systems

A system's number is optional in the core specification. This representation records the number only when the number exists:

- If the system has a number, the index MUST contain a **system line**: the system's number, then the system's title. The system line MUST come before all other item lines.
- If the system has no number, the index MUST NOT contain a system line. This representation does not record an unnumbered system's title.

```text
A01 The title of this system
10-19 The first area
```

### Rationale

A parser cannot tell a title-only system line from a malformed area, category, or ID line. To permit that line would defeat error detection.

## Areas, categories, and IDs

An area, a category, or an ID appears as one item line.

The document holds the whole system, so an item's parent MUST appear in the index. An area with no categories is valid. A category with no IDs is valid. Orphans are not permitted.

This index conforms.

```text
10-19 An area with no categories
20-29 Another area
   21 A category with no IDs
```

This index does not conform.

```text
11 A category without a parent area
21.01 An ID without a parent category
```

## Work packages

A work package appears as one item line: the number with the parent reference, then the title. Example: `W0011~11.14 Renew driver licence`.

Work packages form a single block at the end of the index, after every area, category, and ID (see Order).

### Rationale

A work-package number is system-wide, not per-category, so work packages do not fit the area hierarchy. A single block at the end of the index matches the dedicated work-package folder that filesystems use.

## Children

A child appears as one item line: the parent's number, the marker, then the title.

- A child's line MUST appear after its parent's item line and before the next area, category, ID, or work-package line.
- Children of one parent MUST appear in ascending order of their marker, then their title, compared by Unicode code point. Sub-notes thus come before extensions: `)` is U+0029, `+` is U+002B.
- A child has no metadata (see Metadata).

### Rationale

A child has no number, so this document must define the order. Code-point order is what a filesystem listing shows and what a byte sort produces. One canonical order makes two documents of one system byte-identical (see Order).

## Order

Item lines MUST appear in this order:

1. The system line, if the system has a number.
2. Areas, in ascending numeric order.
3. A category's line comes after its area's line and before the next area's line. Categories of one area appear in ascending numeric order.
4. An ID's line comes after its category's line and before the next category or area line. IDs of one category appear in ascending numeric order.
5. Work packages come after every area, category, and ID line, in ascending numeric order.

Metadata lines and child lines follow the item that they belong to. See Metadata and Children.

This index does not conform.

```text
20-29 Second area
10-19 First area
```

### Rationale

Every item has exactly one position. Every metadata value has exactly one written form, keys have exactly one order (see Metadata), and children have exactly one order (see Children). Thus two documents that hold the same system differ only in layout: whitespace, blank lines, comments, line-break form, and the byte order mark. Remove the layout and the documents are byte-identical. A diff then shows a change in the system, never a change in style.

JSON shows the cost of the opposite choice. A JSON object has no defined key order, so two writes of equal data can differ byte for byte. Synchronisation tools then report conflicts between files that hold the same data. This representation does not permit that failure.

## White space

Whitespace is the space (U+0020) and the tab (U+0009).

- A parser MUST ignore leading whitespace on a line.
- A parser MUST ignore trailing whitespace on a line. Content ends at the last character that is not whitespace.
- A blank line MAY appear anywhere. A parser MUST ignore a blank line.
- Indentation that shows the hierarchy is encouraged, but it confers no meaning.

This index is ugly, but conforms.

```text
 10-19 Your first area's title

11 Your first category's title
               11.01 The title of your first ID
```

## Comments

- A line whose first non-whitespace characters are `//` is a comment line. A parser MUST ignore a comment line.
- On an item line, a comment starts at the first `//` and continues to the end of the line. A parser MUST ignore the comment and the whitespace before it.
- On a metadata line, comments are not recognised: `//` is part of the value.

```text
10-19 My area     // This is a comment
   11 My category     // This title ends with "category"
      // A comment can fill a full line.
      // Multiple comment lines can follow each other.
      11.01 My ID
      - url: https://example.com/renewal
      // 11.02 This line is a comment, not an ID
```

In the example, the value of `url` is `https://example.com/renewal`. A `//` in that value would not start a comment.

### Rationale

A title cannot contain `/`. Thus, on an item line, `//` is always a comment. A metadata value can contain `//`, for example in a URL. Thus, on a metadata line, `//` is never a comment.

## Metadata

The core specification defines metadata: the key rules, the value types, and the items that can have metadata. This section defines only the written form of a key/value pair.

### Format

A metadata line MUST have this form: a dash, a single space, the key, a colon, a single space, the value.

```text
      11.02 Passport
      - expires: 2028-04-15
```

- A metadata line MUST have an item line above it. It belongs to the nearest item line above it. That item MUST be an ID or a work package.
- Thus an item's metadata lines come before its child lines. A metadata line below a child's line would belong to the child, and a child has no metadata.
- An item's metadata lines MUST appear in ascending order of their keys, compared by Unicode code point.
- A value MUST NOT span more than one line.

### Values

The value starts after the colon and space and ends at the end of the line. A parser MUST ignore trailing whitespace. The first rule that matches gives the type:

1. If the value is exactly `true` or `false`, the value is a boolean.
2. If the value matches the pattern `-?[0-9]+`, the value MUST be a valid [JSON](https://www.rfc-editor.org/rfc/rfc8259) number and is an integer. Thus a value with a leading zero, for example `042`, is an error, not text. The value `-0` is also an error: write `0`.
3. If the value's first character is `"`, `[`, or `{`, the whole value MUST be a single valid JSON value: a string is text, an array is a list, an object is a map. The value MUST use the canonical form of [RFC 8785](https://www.rfc-editor.org/rfc/rfc8785): no insignificant whitespace, object keys in sorted order, shortest string escapes.
4. If no rule above matches, the value is text, exactly as written.

Within any JSON value:

- A number MUST be an integer within the core specification's range: no fraction, no exponent.
- An object's keys MUST follow the core specification's key rules and MUST be unique within that object.
- `null` MUST NOT appear. The core specification has no null: to clear a value, remove its key.
- String escapes are the only way to write a line break or a tab in a value.

Text MUST use the bare form (rule 4) when the bare form is possible. Text MUST use the JSON string form when the text:

- is exactly `true` or `false`, or matches the pattern `-?[0-9]+`,
- starts with `"`, `[`, or `{`,
- starts or ends with whitespace,
- contains a control character,
- or is empty.

```text
      11.02 Passport
      - biometric: true
      - expires: 2028-04-15
      - issuer: {"country":"AU","office":"Sydney"}
      - motto: "true"
      - pages: 34
      - relates-to: ["11.01","16.11"]
      - url: https://example.com/renewal
```

In the example: `expires` and `url` are text. `pages` is an integer. `biometric` is a boolean. `relates-to` is a list of two texts. `issuer` is a map. `motto` is the text `true`.

### Rationale

- Bare text is the common case in a file that people write by hand. To require quotes there would add cost with no gain.
- Structured values use JSON, not an invented syntax. JSON is prior art, has a precise grammar, and has a parser in every language.
- Each value has exactly one written form, and an item's keys have exactly one order, so equal metadata is byte-identical, and a text search finds each occurrence. The core specification gives the same rationale for extensions.

# AI disclosure

Some of this text was drafted with Claude, an AI model, working under my constant supervision. The design decisions in this document are mine. I reviewed every line.

I commit to notifying you if words generated by an AI appear in my published work. This is that notice.
