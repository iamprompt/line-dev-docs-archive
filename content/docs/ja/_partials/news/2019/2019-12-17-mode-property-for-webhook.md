---
title: Webhookイベントにmodeプロパティが追加されました
navigation: true
description: Messaging APIのWebhookイベントにmodeプロパティが追加されました。
meta: '{"date":"2019-12-17 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2019/2019-12-17-mode-property-for-webhook
__hash__: vO3RDCwRGQXuTZ7F6apAAWlzNxX2DxWGWxsBYm_5PmY
seo:
  title: Webhookイベントにmodeプロパティが追加されました
  description: Messaging APIのWebhookイベントにmodeプロパティが追加されました。
---

Messaging APIのWebhookイベントに`mode`プロパティが追加されました。

`mode`プロパティは、LINEで進行している「チャネルの多重化」（実装予定）に必要なプロパティです。既存のWebhookイベントには、すべて`"mode": "active"`が追加されます。

`mode`プロパティは、チャネルの管理者が「チャネルの多重化」を行うと、`standby`に切り替わります。`mode`プロパティが自動的に`standby`になることはありません。

`mode`プロパティについて詳しくは、Messaging APIリファレンスのWebhookイベントの「[共通プロパティ](/reference/messaging-api/#common-properties)」を参照してください。
