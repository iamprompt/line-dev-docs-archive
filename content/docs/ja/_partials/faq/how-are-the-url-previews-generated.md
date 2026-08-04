---
title: トークとLINE VOOM内のURLプレビューはどのようにして生成されますか？
navigation: true
description: LINEでは、ウェブサイトのOpen Graphタグを使用してURLプレビューが生成されます。
meta: >-
  {"date":"2017-07-24 00:00 UTC","tags":"line-app, line-official-account,
  messaging-api","priority":1000,"locale":"ja"}
path: /ja/_partials/faq/how-are-the-url-previews-generated
__hash__: MEEq3kacMKMSk5WFT4-Brm-cxan9z5n_6eBrVg04IEg
seo:
  title: トークとLINE VOOM内のURLプレビューはどのようにして生成されますか？
  description: LINEでは、ウェブサイトのOpen Graphタグを使用してURLプレビューが生成されます。
---

LINEでは、ウェブサイトのOpen Graphタグを使用してURLプレビューが生成されます。

LINEで使用される3つのOGPタグ：

| #   | Open Graph Protocol タグ | 例                                                                                 |
| --- | ---------------------- | --------------------------------------------------------------------------------- |
| 1   | og:title               | `<meta property="og:title" content="LINE : Free Calls & Messages">`               |
| 2   | og:description         | `<meta property="og:description" content="LINE is a new communication app">`      |
| 3   | og:image               | `<meta property="og:image" content="http://static.naver.jp/line_lp/img/ogp.png">` |

URLプレビューの例：

![URL preview in chat](/media/faq/chat-preview.png){className="[\"border\"]"}

::admonition{title="OGPの設定" type="note"}
OGPの設定をしていない場合でも、URL内の記載の任意の文言・画像などが自動取得され、URLプレビューが生成されます。

たとえば、Titleは、`og:title`の情報がなければ、titleタグ内テキストが読み込まれます。Summaryは、`og:description`の情報がなければ、descriptionタグ内テキストかbody内のテキストが読み込まれます（該当の情報がなければ、何も読み込まれないこともあります）。

なおLINEで使用されるのは上記の3つのOGPタグのみです。それ以外のOGPタグからの情報はURLプレビューに含まれません。
::
