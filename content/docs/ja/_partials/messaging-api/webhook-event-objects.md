---
title: Webhook Event Objects
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-event-objects
__hash__: m65vOD9_k4wkajYLOgkeG77KCf08bUz3Nwmx_8aRK8k
seo:
  description: ''
---

::reference-with-code
  :::reference-content
  これらのイベントオブジェクトのプロパティは、値が存在しない場合があります。値が存在しないプロパティは、生成されるイベントオブジェクトに含まれません。

    ::::admonition{title="1つのWebhookに複数のWebhookイベントオブジェクトが含まれる場合があります" type="tip"}
    LINEプラットフォームから送信されるWebhookには、複数のWebhookイベントオブジェクトが含まれる場合があります。また1つのWebhookにつき一人のユーザーとは限らず、Aさんからの[メッセージイベント](/reference/messaging-api/#message-event)と、Bさんからの[フォローイベント](/reference/messaging-api/#follow-event)が同じWebhookに入ることもあります。

    複数のWebhookイベントオブジェクトを含むWebhookを受信した場合も、ボットサーバーは適切な処理を行えるようにしてください。詳しくは、Webhookの[リクエストボディ](/reference/messaging-api/#request-body)を参照してください。
    ::::
  :::

  :::reference-code
  *Webhookイベントオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "type": "message",
            "message": {
              "type": "text",
              "id": "14353798921116",
              "text": "Hello, world"
            },
            "timestamp": 1625665242211,
            "source": {
              "type": "user",
              "userId": "U80696558e1aa831..."
            },
            "replyToken": "757913772c4646b784d4b7ce46d12671",
            "mode": "active",
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            }
          },
          {
            "type": "follow",
            "timestamp": 1625665242214,
            "source": {
              "type": "user",
              "userId": "Ufc729a925b3abef..."
            },
            "replyToken": "bb173f4d9cf64aed9d408ab4e36339ad",
            "mode": "active",
            "webhookEventId": "01FZ74ASS536FW97EX38NKCZQK",
            "deliveryContext": {
              "isRedelivery": false
            }
          },
          {
            "type": "unfollow",
            "timestamp": 1625665242215,
            "source": {
              "type": "user",
              "userId": "Ubbd4f124aee5113..."
            },
            "mode": "active",
            "webhookEventId": "01FZ74B5Y0F4TNKA5SCAVKPEDM",
            "deliveryContext": {
              "isRedelivery": false
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
