---
title: Webhook Unsend
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-unsend
__hash__: bHZT2l1hYjj1Hwy73hcNzLV_khY7bxDUu4hfGUqdyIY
seo:
  description: ''
---

### 送信取消イベント

::reference-with-code
  :::reference-content
  ユーザーがメッセージの送信を取り消したことを示すイベントです。

  ユーザーがメッセージの送信を取り消すと、ボットサーバーに送信取消イベントが届きます。送信取消イベントを受け取った場合、サービス提供者はユーザーがメッセージの送信を取り消した意図を尊重し、以降は対象のメッセージを見たり利用したりできないよう、最大限の配慮を持って対象のメッセージを適切に扱うことを推奨します。詳しくは、『Messaging APIドキュメント』の「[送信取消イベント受信時の処理](/docs/messaging-api/receiving-messages/#webhook-unsend-message)」を参照してください。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp、sourceなど

      「[共通プロパティ](#common-properties)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `unsend`
      :::::

      :::::parameter-table-entry
      #undefined
      unsend.messageId

      #undefined
      String

      送信を取り消したメッセージのID
      :::::
    ::::
  :::

  :::reference-code
  *送信取消イベントの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "type": "unsend",
            "mode": "active",
            "timestamp": 1462629479859,
            "source": {
              "type": "group",
              "groupId": "Ca56f94637c...",
              "userId": "U4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            },
            "unsend": {
              "messageId": "325708"
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
