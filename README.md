# Index specification

This is the formal specification for the Johnny.Decimal index file.

(I need to properly formalise it but this is a good start.)

Discussion here (use Issues) and PRs are welcome.

## Why?

If you're keeping a single file as your index, it makes sense for them all to be formatted the same way.

One of the reasons you'd do this would be so that you could query it programmatically. That only works if the format is well-defined.

This file is that definition.

# Overview

The idea is that we keep one index file, as plain text, and that it is human readable. It looks like this. I recommend this file be saved as `00.00 Index.txt` in your system.

```text
10-19 Your first area's title
   11 Your first category's title
      11.01 Your first ID's title
      11.02 The second ID in category 11
   12 Category twelve
20-29 Your second area
   21 Category twenty-one
      21.01 ...and so on
```

# Specification

## Areas

Areas must start with an area number whose format is `a0-a9` where `a = [0..9]`.

The title follows the area, is mandatory, and is of arbitrary length.

## Categories

Categories must be 'contained' within their area: category `11` belongs to area `10-19`.

They must start with a category number whose format is `ac` where `ac = [00..99]`.

The title follows the category, is mandatory, and is of arbitrary length.

## IDs

IDs must be 'contained' within their category: ID `11.01` belongs to category `11`.

They must start with an ID number whose format is `ac.id` where `id = [00..99]`.

The full range of IDs is therefore `00.00` through `99.99` inclusive.

The title follows the ID, is mandatory, and is of arbitrary length.

## Order

The index file must appear in order. This is incorrect.

```text
20-29 Second area
10-19 First area
```

## Parents may be childless; orphans are disallowed

This is fine.

```text
10-19 An area with no children
20-29 Another area
   21 A category with no children
```

This is not.

```text
11 A category without a parent area
21.01 An ID without a parent category
```

## White space

While the examples shown above are indented for legibility, and such indentation is encouraged, white space should be ignored by a parser.

This is a legal, if ugly, index file.

```text
 10-19 Your first area's title

11 Your first category's title
               11.01 The title of your first ID
```

## Comments

JavaScript comments are allowed.

Multi-line comments may be used if they are the only text on the line.

```txt
10-19 My area     // which I can comment like this
   11 My category /* or like this */
   /* multiline comments
      are allowed on their own lines
    */
   11.01 Whereas this /* is not, as it breaks
                         the ID
                       */
```

## Metadata

Arbitrary metadata may be stored in key/value pairs directly below any item (area, category, ID) by entering:

- A dash.
- A space.
- The key name.
- A colon.
- A space.
- The value.

The value may not span a (hard) newline. All values are strings.

```text
10-19 Area
   11 Category
      11.01 ID
      - Location: work email.
```
