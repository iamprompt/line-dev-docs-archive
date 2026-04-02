---
title: 2022年3月31日をもって、Messaging APIの「LINE独自のUnicode絵文字」を廃止します
navigation: true
description: 現在、Messaging APIで送信可能な絵文字として、次の3種類を提供しています。
meta: >-
  {"date":"2021-11-30 00:00 UTC","tags":"messaging-api, deprecated,
  end-of-life","locale":"ja"}
path: >-
  /ja/_partials/news/2021/2021-11-30-line-original-unicode-emojis-will-be-discontinued
__hash__: jd6CNCn9sVNI1TxMG6-5ilwZH-JlN1FFdAMjnlFyNZM
seo:
  title: 2022年3月31日をもって、Messaging APIの「LINE独自のUnicode絵文字」を廃止します
  description: 現在、Messaging APIで送信可能な絵文字として、次の3種類を提供しています。
---

現在、Messaging APIで送信可能な絵文字として、次の3種類を提供しています。

- LINE絵文字
- Unicode絵文字
- LINE独自のUnicode絵文字（非推奨）

このうち、以前より:glossary-tooltip[[非推奨](/glossary/#deprecated)]{glossary-id="deprecated"}となっていた、「LINE独自のUnicode絵文字」を2022年3月31日に:glossary-tooltip[[廃止](/glossary/#end-of-life)]{glossary-id="end-of-life"}します。

### 廃止日

2022年3月31日

### 影響

2022年3月31日以降、「LINE独自のUnicode絵文字」が順次表示されなくなります。なお、この変更は廃止前に送信済みの「LINE独自のUnicode絵文字」にも適用されます。

| 廃止前                                                                                                                          | 廃止後                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ![廃止前の「LINE独自のUnicode絵文字」](/media/news/line-original-unicode-emojis-before-discontinuation.png){className="[\"w-fix-280\"]"} | ![廃止後の「LINE独自のUnicode絵文字」](/media/news/line-original-unicode-emojis-after-discontinuation.png){className="[\"w-fix-280\"]"} |

### 代替方法

`emojis`プロパティを使った「LINE絵文字」を利用してください。詳しくは、『Messaging APIドキュメント』の「[送信可能なLINE絵文字リスト](/docs/messaging-api/emoji-list/)」を参照してください。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
