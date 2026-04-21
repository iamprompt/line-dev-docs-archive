---
title: 複数のユーザーに宛ててメッセージを送信したらエラーになりました。エラーの原因となった宛先以外のユーザーにはメッセージは届いていますか？
navigation: true
description: いいえ。メッセージは誰にも届いていません。
meta: >-
  {"date":"2026-04-21 00:00 UTC","tags":"line-app, line-official-account,
  messaging-api","priority":1000,"locale":"ja"}
path: /ja/_partials/faq/are-messages-not-being-delivered-to-anyone
__hash__: lI0zS3viyXFXr1k07V4K4afWpseWeUx4_ogM37-tMp0
seo:
  title: 複数のユーザーに宛ててメッセージを送信したらエラーになりました。エラーの原因となった宛先以外のユーザーにはメッセージは届いていますか？
  description: いいえ。メッセージは誰にも届いていません。
---

いいえ。メッセージは誰にも届いていません。

Messaging APIで[マルチキャストメッセージ](/reference/messaging-api/#send-multicast-message)、[ナローキャストメッセージ](/reference/messaging-api/#send-narrowcast-message)、[ブロードキャストメッセージ](/reference/messaging-api/#send-broadcast-message)を送信してエラーが返ってきた場合、宛先のどのユーザーに対してもメッセージは送信されません。
