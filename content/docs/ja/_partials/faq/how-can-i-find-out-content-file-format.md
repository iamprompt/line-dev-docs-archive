---
title: 取得したコンテンツのファイル形式はどのように確認できますか？
navigation: true
description: コンテンツを取得した際に、レスポンスで返されるバイナリデータのファイル形式は、レスポンスのContent-Typeヘッダーで示されます。
meta: >-
  {"date":"2023-03-23 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"ja"}
path: /ja/_partials/faq/how-can-i-find-out-content-file-format
__hash__: x568jppE40J5v99lkYsopFoDag1y-WzdsIbr_a33_KU
seo:
  title: 取得したコンテンツのファイル形式はどのように確認できますか？
  description: コンテンツを取得した際に、レスポンスで返されるバイナリデータのファイル形式は、レスポンスのContent-Typeヘッダーで示されます。
---

[コンテンツを取得](/reference/messaging-api/#get-content)した際に、レスポンスで返されるバイナリデータのファイル形式は、レスポンスの[`Content-Type`](https://developer.mozilla.org/ja/docs/Web/HTTP/Reference/Headers/Content-Type){rel="[\"nofollow\"]"}ヘッダーで示されます。

`Content-Type`ヘッダーの値を確認することで、コンテンツのファイル形式を確認できます。`Content-Type`ヘッダーで示される、ファイル形式の例は以下のとおりです。

| ユーザーが送信したコンテンツ                            | Content-Typeヘッダーの例 |
| ----------------------------------------- | ------------------ |
| [画像](/reference/messaging-api/#wh-image)  | image/jpeg         |
| [動画](/reference/messaging-api/#wh-video)  | video/mp4          |
| [音声](/reference/messaging-api/#wh-audio)  | audio/x-m4a        |
| [ファイル](/reference/messaging-api/#wh-file) | text/plain         |
