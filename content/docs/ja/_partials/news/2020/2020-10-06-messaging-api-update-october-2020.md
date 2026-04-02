---
title: Messaging APIアップデート（2020年10月）
navigation: true
description: Messaging APIに新たにエンドポイントが追加されました。
meta: '{"date":"2020-10-06 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2020/2020-10-06-messaging-api-update-october-2020
__hash__: dcci9OukQGTY8YqiBuX2RSLfS6mAVhHIyhkRmvFh5_Q
seo:
  title: Messaging APIアップデート（2020年10月）
  description: Messaging APIに新たにエンドポイントが追加されました。
---

Messaging APIに新たにエンドポイントが追加されました。

- [ボットの情報を取得する](#get-bot-info-news)
- [Webhookエンドポイントの情報を取得する](#get-webhook-endpoint-information-news)
- [WebhookエンドポイントのURLを設定する](#set-webhook-endpoint-url-news)
- [Webhookエンドポイントを検証する](#test-webhook-endpoint-news)

以下は、新しいエンドポイントの概要です。詳しくは、『Messaging APIリファレンス』の各エンドポイントの説明を参照してください。

### ボットの情報を取得する

以下のようなボットの基本情報を取得します。

- ボットのユーザーID
- ボットのベーシックID
- ボットのプレミアムID
- ボットの表示名
- プロフィール画像のURL
- ボットの応答モード（「チャット」もしくは「Bot」）
- メッセージに自動的に既読が付く設定になっているか

詳しくは、『Messaging APIリファレンス』の「[ボットの情報を取得する](/reference/messaging-api/#get-bot-info)」を参照してください。

### Webhookエンドポイントの情報を取得する

Webhookエンドポイントに関する以下の情報を取得します。

- Webhook URL
- Webhookの利用ステータス（有効もしくは無効）

詳しくは、『Messaging APIリファレンス』の「[Webhookエンドポイントの情報を取得する](/reference/messaging-api/#get-webhook-endpoint-information)」を参照してください。

### WebhookエンドポイントのURLを設定する

WebhookエンドポイントのURLを設定します。キャッシュデータの影響により、URLの更新に1分ほどかかる場合があります。

詳しくは、『Messaging APIリファレンス』の「[WebhookエンドポイントのURLを設定する](/reference/messaging-api/#set-webhook-endpoint-url)」を参照してください。

### Webhookエンドポイントを検証する

設定したWebhookエンドポイントがWebhookの検証イベントを受信できるかを確認します。

詳しくは、『Messaging APIリファレンス』の「[Webhookエンドポイントを検証する](/reference/messaging-api/#test-webhook-endpoint)」を参照してください。
