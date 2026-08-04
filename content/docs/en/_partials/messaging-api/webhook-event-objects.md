---
title: Webhook Event Objects
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-event-objects
__hash__: QZsHWn93070mHabdtjguaN9gHzHxB71axolkEXNIb0E
seo:
  description: ''
---

::reference-with-code
  :::reference-content
  Some properties of these event objects may lack a value. Generated event objects don't contain properties without any value.

    ::::admonition
    ---
    title: A single webhook may contain multiple webhook event objects
    type: tip
    ---
    A webhook sent from the LINE Platform may contain multiple webhook event objects. There is not necessarily one user per webhook. A [message event](/reference/messaging-api/#message-event) from person A and a [follow event](/reference/messaging-api/#follow-event) from person B may be in the same webhook.

    Even when you receive a webhook containing multiple event objects, implement it so that the bot server can process it appropriately according to its contents. For more information, see [request body](/reference/messaging-api/#request-body) under Webhook.
    ::::
  :::

  :::reference-code
  *Example webhook event object*

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
