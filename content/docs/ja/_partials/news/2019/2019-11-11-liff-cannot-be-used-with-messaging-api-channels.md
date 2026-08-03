---
title: Messaging APIのチャネルにはLIFFアプリを追加できなくなります
navigation: true
description: >-
  LIFF
  v2では、LINEログインを中核とした機能拡張を予定しています。そのため、LINEログインチャネルにLIFFアプリを追加することを推奨します。それに伴い、現在サポートしているMessaging
  APIチャネルにLIFFアプリを追加できなくなる仕様変更が予定されています。
meta: '{"date":"2019-11-11 00:00 UTC","tags":"LIFF","locale":"ja"}'
path: >-
  /ja/_partials/news/2019/2019-11-11-liff-cannot-be-used-with-messaging-api-channels
__hash__: 2wO4Hd7IT_EStuAqUW3PNSR6mlC0yqWhsttBh2-VPIs
seo:
  title: Messaging APIのチャネルにはLIFFアプリを追加できなくなります
  description: >-
    LIFF
    v2では、LINEログインを中核とした機能拡張を予定しています。そのため、LINEログインチャネルにLIFFアプリを追加することを推奨します。それに伴い、現在サポートしているMessaging
    APIチャネルにLIFFアプリを追加できなくなる仕様変更が予定されています。
---

LIFF v2では、LINEログインを中核とした機能拡張を予定しています。そのため、LINEログインチャネルにLIFFアプリを追加することを推奨します。それに伴い、現在サポートしているMessaging APIチャネルにLIFFアプリを追加できなくなる仕様変更が予定されています。

### 仕様変更時期

2020年2月上旬

### 影響

| チャネル種別            | 影響                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| LINEログインチャネル      | 仕様変更の影響を受けません。                                                                                    |
| Messaging APIチャネル | 仕様変更以降は、Messaging APIチャネルにはLIFFアプリを**追加できません**。仕様変更時点でMessaging APIチャネルに追加済みのLIFFアプリは、引き続き使用できます。 |

::admonition{title="Messaging APIチャネルにLIFFアプリを追加しないでください" type="note"}
現時点では、Messaging APIチャネルにLIFFアプリを追加することもできますが、追加しないでください。Messaging APIチャネルに追加したLIFFアプリには、以下の制限があります。

- ボットリンク機能は利用できません。
- LIFFの機能拡張に対応できない可能性があります。
- LIFFアプリが使用できなくなる可能性があります。

なお、LINEログインチャネルに追加したLIFFアプリには制限がなく、LIFF v2のすべての機能を利用できます。
::

### LINEログインチャネルへの移行

Messaging APIチャネルに追加したLIFFアプリを継続して使用するには、LINEログインチャネルにLIFFアプリを追加し直してください。

LIFFアプリを追加し直すと、LIFFアプリIDが再発行されるため、以下の点に注意してください。

- LIFF v2を利用している場合は、`liff.init()`に指定するLIFFアプリIDを変更してください。
- LIFFを起動するためのLIFF URL（例：line://app/1234567890-AbcdEfgh）が変更されます。

::admonition{title="Messaging APIチャネルに追加したLIFFアプリは削除してください" type="note"}
混乱を避けるために、LIFFアプリをLINEログインチャネルへ追加したあとで、Messaging APIチャネルに追加したLIFFアプリを削除してください。
::
