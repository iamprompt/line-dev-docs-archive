---
title: Messaging APIでユーザーからのメッセージに既読をつけられるようになりました
navigation: true
description: >-
  Messaging
  APIにおいて、ユーザーからのメッセージに既読をつけられるようになりました。これまでは、所定の申請等を行った法人ユーザーのみが使用できる既読API（旧）でのみメッセージに既読をつけることができました。今回のリリースにより、どなたでもメッセージに既読をつけられるようになりました。
meta: >-
  {"date":"2025-11-05 00:00 UTC","tags":"messaging-api,
  line-official-account","locale":"ja"}
path: /ja/_partials/news/2025/2025-11-05-mark-as-read
__hash__: WKDvEtgEyisHeXJb3VaU2fgJAR9btKm7krIp-aqh4as
seo:
  title: Messaging APIでユーザーからのメッセージに既読をつけられるようになりました
  description: >-
    Messaging
    APIにおいて、ユーザーからのメッセージに既読をつけられるようになりました。これまでは、所定の申請等を行った法人ユーザーのみが使用できる既読API（旧）でのみメッセージに既読をつけることができました。今回のリリースにより、どなたでもメッセージに既読をつけられるようになりました。
---

Messaging APIにおいて、ユーザーからのメッセージに既読をつけられるようになりました。これまでは、所定の申請等を行った法人ユーザーのみが使用できる[既読API（旧）](/docs/partner-docs/mark-as-read/)でのみメッセージに既読をつけることができました。今回のリリースにより、どなたでもメッセージに既読をつけられるようになりました。

### メッセージに既読をつける方法

ユーザーから送られたメッセージに既読をつけるには、以下の手順に従ってください。

1. [メッセージの既読トークンを取得する](#get-token-20251105)
2. [「メッセージに既読をつける」エンドポイントを使用する](#use-endpoint-20251105)

それぞれの手順について説明します。

### 1. メッセージの既読トークンを取得する

ユーザーがLINE公式アカウントに対してメッセージを送ると、LINEプラットフォームからボットサーバーに対してWebhookの[メッセージイベント](/reference/messaging-api/#message-event)が送信されます。このイベントオブジェクトに、メッセージに既読をつけるための`markAsReadToken`プロパティ（既読トークン）が含まれています。

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "message",
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "message": {
        "id": "444573844083572737",
        "type": "text",
        "quoteToken": "q3Plxr4AgKd...",
        "markAsReadToken": "30yhdy232...", // 既読トークン
        "text": "Hello, world!"
      },
      // 省略
    }
  ]
}
```

### 2. 「メッセージに既読をつける」エンドポイントを使用する

メッセージに既読をつけるには、手順1で取得した既読トークンを用いて、「[メッセージに既読をつける](/reference/messaging-api/#mark-as-read)」エンドポイントを使用します。以下のようなリクエストを実行することで、指定したメッセージと、それ以前に送られたすべてのメッセージに既読をつけることができます。

```sh
curl -v -X POST https://api.line.me/v2/bot/chat/markAsRead \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
  "markAsReadToken": "{mark as read token}"
}'
```

メッセージに既読をつける方法について詳しくは、『Messaging APIドキュメント』の「[メッセージに既読をつける](/docs/messaging-api/mark-as-read/)」を参照してください。

::admonition{title="既読API（旧）ではなく新しいエンドポイントを使用してください" type="tip"}
法人ユーザー向けに提供している[既読API（旧）](/docs/partner-docs/mark-as-read/)は引き続き使用できますが、ユーザーからのメッセージに既読をつける処理をこれから実装する場合は、Messaging APIの「[メッセージに既読をつける](/reference/messaging-api/#mark-as-read)」エンドポイントを使用してください。「メッセージに既読をつける」エンドポイントは申請なしに使用でき、またチャット機能との併用も可能です。
::

### LINE Messaging API SDKの更新について

今回の機能追加に伴う[LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)の更新状況については、それぞれのSDKのリリースノートを参照してください。
