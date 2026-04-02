---
title: >-
  How many full-width characters, emojis, line breaks, and so on, are counted in
  the text character count?
navigation: true
description: >-
  Characters in a text are counted in UTF-16 code units (16-bit). Characters
  expressed in multiple code units, such as some kanji characters and Unicode
  emojis, are counted as multiple characters instead of one character.
meta: >-
  {"date":"2019-11-25 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"en"}
path: /en/_partials/faq/what-is-the-rule-to-count-the-number-of-character
__hash__: nYGQq0O_WORj0C7IOkfpH4avXI1dewIfsJMUKjGpExA
seo:
  title: >-
    How many full-width characters, emojis, line breaks, and so on, are counted
    in the text character count?
  description: >-
    Characters in a text are counted in UTF-16 code units (16-bit). Characters
    expressed in multiple code units, such as some kanji characters and Unicode
    emojis, are counted as multiple characters instead of one character.
---

Characters in a text are counted in UTF-16 code units (16-bit). Characters expressed in multiple code units, such as some kanji characters and Unicode emojis, are counted as multiple characters instead of one character.

However, some properties are counted in [grapheme cluster](https://unicode.org/reports/tr29/){rel="[\"nofollow\"]"} units rather than UTF-16 code units. For more information, see [Character counting in a text](/docs/messaging-api/text-character-count/) in the Messaging API documentation.

Also, unlike Unicode emojis, LINE emojis provided by LINE are internally converted to the alternative text (e.g., `(love)`), so they're counted by the number of characters in the alternative text.

Examples of counting the number of characters in UTF-16 code units are as follows:

| Character | UTF-16 encoded value | Number of code units | Number of characters |
| --------- | -------------------- | -------------------- | -------------------- |
| a         | 0061                 | 1                    | 1 character          |
| あ         | 3042                 | 1                    | 1 character          |
| \n        | 000A                 | 1                    | 1 character          |
| 邊         | 908A                 | 1                    | 1 character          |
| 𠀋        | D840 DC0B            | 2                    | 2 characters         |
| 👋        | D83D DC4B            | 2                    | 2 characters         |
| 👋🏻      | D83D DC4B D83C DFFB  | 4                    | 4 characters         |
