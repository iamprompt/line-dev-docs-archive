---
title: >-
  In the Messaging API, you can now determine whether a user has added your LINE
  Official Account as a friend or unblocked by a webhook follow event
navigation: true
description: >-
  In the Messaging API, you can now determine whether a user has added your LINE
  Official Account as a friend or unblocked by a webhook follow event.
meta: '{"date":"2024-02-06 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: >-
  /en/_partials/news/2024/2024-02-06-add-friends-and-unblock-friends-can-now-be-determined-by-webhook
__hash__: VtRyxM54XoXz5IC82IQj8X8rmkxOA06BIi-ItQdOeIY
seo:
  title: >-
    In the Messaging API, you can now determine whether a user has added your
    LINE Official Account as a friend or unblocked by a webhook follow event
  description: >-
    In the Messaging API, you can now determine whether a user has added your
    LINE Official Account as a friend or unblocked by a webhook follow event.
---

In the Messaging API, you can now determine whether a user has added your LINE Official Account as a friend or unblocked by a webhook follow event.

When a user adds a LINE Official Account as a friend or unblocked, a [follow event](/reference/messaging-api/#follow-event) is sent by webhook. Previously, it was not possible to determine whether "add friend" or "unblock" based on this follow event alone.

With the addition of the `follow.isUnblocked` property to the follow event, it is now possible to determine whether a user has friended a LINE Official Account for the first time or if the user has previously friended and blocked the account and then unblocked.

This allows you to send special coupons to users only when they add your LINE Official Account as a friend for the first time, or change the content of the [reply message](/docs/messaging-api/sending-messages/#reply-messages) between "add friend" and "unblock".

**Example of a follow event when a user has unblocked the LINE Official Account:**

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "follow",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "follow": {
        "isUnblocked": true // User has unblocked the LINE Official Account
      }
    }
  ]
}
```

For more information, see [Follow event](/reference/messaging-api/#follow-event) in the Messaging API reference.

### LINE Messaging API SDK Updates

For more information about the update status of each SDK release related to the above, see the [LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/) release notes.
