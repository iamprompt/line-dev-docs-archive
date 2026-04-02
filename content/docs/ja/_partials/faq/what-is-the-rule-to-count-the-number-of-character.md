---
title: テキストの文字数のカウントで、全角文字、改行文字、絵文字などは何文字としてカウントされますか？
navigation: true
description: >-
  テキストの文字数は、UTF-16の符号単位（16ビット）でカウントします。一部の漢字やUnicode絵文字など、複数の符号単位で表現する文字は、1文字ではなく、複数の文字としてカウントします。
meta: >-
  {"date":"2019-11-25 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"ja"}
path: /ja/_partials/faq/what-is-the-rule-to-count-the-number-of-character
__hash__: kmVNlQVOWz4syhKBmBUkXMrv7hkk58vnNNtR3u64-DI
seo:
  title: テキストの文字数のカウントで、全角文字、改行文字、絵文字などは何文字としてカウントされますか？
  description: >-
    テキストの文字数は、UTF-16の符号単位（16ビット）でカウントします。一部の漢字やUnicode絵文字など、複数の符号単位で表現する文字は、1文字ではなく、複数の文字としてカウントします。
---

テキストの文字数は、UTF-16の符号単位（16ビット）でカウントします。一部の漢字やUnicode絵文字など、複数の符号単位で表現する文字は、1文字ではなく、複数の文字としてカウントします。

ただし、一部のプロパティについては、UTF-16の符号単位ではなく、[書記素クラスタ](https://unicode.org/reports/tr29/){rel="[\"nofollow\"]"}単位でカウントします。詳しくは、『Messaging APIドキュメント』の「[テキストの文字数のカウント](/docs/messaging-api/text-character-count/)」を参照してください。

また、LINEが提供するLINE絵文字については、Unicode絵文字と異なり、内部的に代替テキスト（例：`(love)`）に変換されるため、代替テキストの文字数でカウントします。

UTF-16の符号単位による文字数のカウント例は以下のとおりです。

| 文字   | UTF-16エンコードした値      | 符号単位の数 | 文字数 |
| ---- | ------------------- | ------ | --- |
| a    | 0061                | 1      | 1文字 |
| あ    | 3042                | 1      | 1文字 |
| \n   | 000A                | 1      | 1文字 |
| 邊    | 908A                | 1      | 1文字 |
| 𠀋   | D840 DC0B           | 2      | 2文字 |
| 👋   | D83D DC4B           | 2      | 2文字 |
| 👋🏻 | D83D DC4B D83C DFFB | 4      | 4文字 |
