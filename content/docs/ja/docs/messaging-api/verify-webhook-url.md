---
title: Webhook URLを検証する
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /ja/docs/messaging-api/verify-webhook-url
__hash__: 8y_9KimuExk-4N_fsMoBB_n0OdUObCMazHBFscjmtkU
seo:
  title: Webhook URLを検証する
  description: null
---

# :page-title

:markdown-controlsMessaging APIのWebhookを利用する場合、LINEプラットフォームからWebhook URL（ボットサーバー）へ疎通できることを、以下のいずれかの方法で検証してください。

- [検証方法1. Webhook URL検証用のエンドポイントで検証する](#verify-method-01)
- [検証方法2. LINE DevelopersコンソールからWebhook URLの［検証］ボタンで検証する](#verify-method-02)

::admonition{title="疎通確認のリクエストにはステータスコード200を返してください" type="tip"}
疎通確認の際は、Webhookイベントが含まれないHTTP POSTリクエストが送信されます。この場合も、ステータスコード`200`を返してください。

Webhookイベントが含まれないHTTP POSTリクエストの例：

```json
{
  "destination": "xxxxxxxxxx",
  "events": []
}
```
::

Webhook URLを検証した結果、ボットサーバーがWebhookを受信できていない場合は、[Webhookの受信に失敗する原因を調査](#investigate-webhook-reception-failure)してください。

## 検証方法1. Webhook URL検証用のエンドポイントで検証する

Webhook URL検証用のエンドポイントで検証してください。

- [Webhookエンドポイントを検証する](/reference/messaging-api/#test-webhook-endpoint)

## 検証方法2. LINE DevelopersコンソールからWebhook URLの［検証］ボタンで検証する

[LINE Developersコンソール](/console/)からWebhook URLの［**検証**］ボタンで検証してください。

![send target](/media/news/webhook-url.png){className="[\"border\",\"w-fix-320\"]"}

## Webhookの受信に失敗する原因を調査する

Webhook URLを検証した結果、ボットサーバーがWebhookを受信できていない場合は、以下の方法で原因を調査してください。

- Webhook URL検証用のエンドポイントから返ってきた[レスポンス](/reference/messaging-api/#test-webhook-endpoint-response)や[エラーレスポンス](/reference/messaging-api/#test-webhook-endpoint-error-response)を確認する
- [Webhookのエラーの原因と統計情報を確認する](/docs/messaging-api/check-webhook-error-statistics/)
- [Webhook送信元のSSL/TLS仕様](/docs/messaging-api/ssl-tls-spec-of-the-webhook-source/)を確認する
