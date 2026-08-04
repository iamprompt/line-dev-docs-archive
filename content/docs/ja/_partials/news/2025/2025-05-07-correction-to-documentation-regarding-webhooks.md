---
title: liff.sendMessages()でメッセージが送信されたときのWebhookに関するドキュメント訂正のお知らせ
navigation: true
description: >-
  『Messaging
  APIドキュメント』の「メッセージ（Webhook）を受信する」において、liff.sendMessages()でメッセージが送信されたときのWebhookの挙動について誤った記載がありました。お詫びして訂正いたします。
meta: >-
  {"date":"2025-05-07 00:00 UTC","tags":"messaging-api, liff, line-mini-app,
  template-messages, flex-message","locale":"ja"}
path: >-
  /ja/_partials/news/2025/2025-05-07-correction-to-documentation-regarding-webhooks
__hash__: nK9wk-QeNL7-CicP0HgA6yU8UaMXMm2nlmQQldXlA4A
seo:
  title: liff.sendMessages()でメッセージが送信されたときのWebhookに関するドキュメント訂正のお知らせ
  description: >-
    『Messaging
    APIドキュメント』の「メッセージ（Webhook）を受信する」において、liff.sendMessages()でメッセージが送信されたときのWebhookの挙動について誤った記載がありました。お詫びして訂正いたします。
---

『Messaging APIドキュメント』の「[メッセージ（Webhook）を受信する](/docs/messaging-api/receiving-messages/)」において、`liff.sendMessages()`でメッセージが送信されたときのWebhookの挙動について誤った記載がありました。お詫びして訂正いたします。

正誤については、以下の表を参照してください。

| 項目                                                                           | 誤             | 正              |
| ---------------------------------------------------------------------------- | ------------- | -------------- |
| `liff.sendMessages()`によってユーザーからテンプレートメッセージまたはFlex Messageが送信されたときのWebhookの挙動 | Webhookが送信される | Webhookが送信されない |

`liff.sendMessages()`によってユーザーからテンプレートメッセージまたはFlex Messageが送信された場合、LINEプラットフォームからWebhookは送信されません。それ以外の[メッセージタイプ](/docs/messaging-api/message-types/)であれば、Webhookは送信されます。

詳しくは、『Messaging APIドキュメント』の「[liff.sendMessages()でメッセージが送信されたときのWebhook](/docs/messaging-api/receiving-messages/#webhook-template-and-flex-messages)」を参照してください。
