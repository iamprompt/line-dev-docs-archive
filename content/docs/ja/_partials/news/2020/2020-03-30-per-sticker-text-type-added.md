---
title: スタンプの送信を通知するWebhookイベントに新しいリソースタイプが追加されました
navigation: true
description: >-
  メッセージスタンプ（カスタマイズされたテキストを含むスタンプ）が発売されました。これに伴い、スタンプの送信を通知するWebhookイベントのstickerResourceTypeプロパティに
  PER_STICKER_TEXTが追加されました。
meta: '{"date":"2020-03-30 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2020/2020-03-30-per-sticker-text-type-added
__hash__: 9rdLH_V83lX-pRLK91_lDXT7Y2CuPTkgH428ZUZNcBU
seo:
  title: スタンプの送信を通知するWebhookイベントに新しいリソースタイプが追加されました
  description: >-
    メッセージスタンプ（カスタマイズされたテキストを含むスタンプ）が発売されました。これに伴い、スタンプの送信を通知するWebhookイベントのstickerResourceTypeプロパティに
    PER_STICKER_TEXTが追加されました。
---

メッセージスタンプ（カスタマイズされたテキストを含むスタンプ）が発売されました。これに伴い、スタンプの送信を通知するWebhookイベントの`stickerResourceType`プロパティに `PER_STICKER_TEXT`が追加されました。

ユーザーがLINE公式アカウントにメッセージスタンプを送信すると、`PER_STICKER_TEXT`の`stickerResourceType`を含むWebhookイベントオブジェクトが返されます。

詳しくは、『Messaging APIリファレンス』の「[スタンプ](/reference/messaging-api/#wh-sticker)」を参照してください。
