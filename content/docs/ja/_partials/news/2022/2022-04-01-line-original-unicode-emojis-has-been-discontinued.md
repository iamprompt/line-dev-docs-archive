---
title: 2022年3月31日をもって、Messaging APIの「LINE独自のUnicode絵文字」を廃止しました
navigation: true
description: 2021年11月30日および2022年2月28日にお知らせしたとおり、2022年3月31日をもって、「LINE独自のUnicode絵文字」を廃止しました。
meta: >-
  {"date":"2022-04-01 00:00 UTC","tags":"messaging-api,
  end-of-life","locale":"ja"}
path: >-
  /ja/_partials/news/2022/2022-04-01-line-original-unicode-emojis-has-been-discontinued
__hash__: bteq_E7POP_8ViMygQEnOMfb2fgwAnWDLCrHZD-NT5w
seo:
  title: 2022年3月31日をもって、Messaging APIの「LINE独自のUnicode絵文字」を廃止しました
  description: >-
    2021年11月30日および2022年2月28日にお知らせしたとおり、2022年3月31日をもって、「LINE独自のUnicode絵文字」を廃止しました。
---

[2021年11月30日](/news/2021/11/30/line-original-unicode-emojis-will-be-discontinued/)および[2022年2月28日](/news/2022/02/28/line-original-unicode-emojis-will-be-discontinued/)にお知らせしたとおり、2022年3月31日をもって、「LINE独自のUnicode絵文字」を:glossary-tooltip[[廃止](/glossary/#end-of-life)]{glossary-id="end-of-life"}しました。

### 廃止日

2022年3月31日

### 影響

「LINE独自のUnicode絵文字」が順次表示されなくなります。この変更は、2022年3月31日以降、予告なく行われますが、時期は未定です。また、この変更は廃止前に送信済みの「LINE独自のUnicode絵文字」にも適用されます。

| 廃止前                                                                                                                          | 廃止後                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ![廃止前の「LINE独自のUnicode絵文字」](/media/news/line-original-unicode-emojis-before-discontinuation.png){className="[\"w-fix-280\"]"} | ![廃止後の「LINE独自のUnicode絵文字」](/media/news/line-original-unicode-emojis-after-discontinuation.png){className="[\"w-fix-280\"]"} |

なお、廃止後の見た目は予告なく変更される可能性があります。

### 代替方法

`emojis`プロパティを使った「LINE絵文字」を利用してください。詳しくは、『Messaging APIドキュメント』の「[送信可能なLINE絵文字リスト](/docs/messaging-api/emoji-list/)」を参照してください。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
