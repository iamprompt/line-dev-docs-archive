---
title: Messaging API now includes @All in the mention property of the webhooks
navigation: true
description: >-
  In the Messaging API, the mention for the entire group using @All is now
  included in the mention property of the webhooks.
meta: '{"date":"2023-03-08 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2023/2023-03-08-messaging-api-updated
__hash__: pyL6QhWvR3smhTNwB0crxB5Ud4oInVIcM2x3LwV_5wk
seo:
  title: Messaging API now includes @All in the mention property of the webhooks
  description: >-
    In the Messaging API, the mention for the entire group using @All is now
    included in the mention property of the webhooks.
---

In the Messaging API, the mention for the entire group using `@All` is now included in the `mention` property of the webhooks.

![User sends @All mentions](/media/news/2023/at-all-mention.png){className="[\"border\",\"w-fix-480\"]"}

In group chats and multi-person chats that LINE Official Accounts are in, when a user sends a message containing a mention for the entire group using `@All` as shown above, a webhook event containing mention information is sent to the bot server.

The following is an example of a webhook sent to the bot server when a user sends a message containing a mention for all with `@All`.

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "message": {
        "id": "444562148736892931",
        "type": "text",
        "text": "@All Good morning!!", // User sends text message containing a mention for all with @All
        "mention": {
          "mentionees": [
            {
              "index": 0,
              "length": 4,
              "type": "all" // Mentions for all because mention.mentionees[].type is all
            }
          ]
        }
      },
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "message",
      "mode": "active",
      "timestamp": 1677837030859,
      "source": {
        "type": "group",
        "groupId": "Ca56f94637c...",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      }
    }
  ]
}
```

For more information about `mention` property, see the [Text](/reference/messaging-api/#wh-text) section of [Message event](/reference/messaging-api/#message-event) in the Messaging API reference.

For more information on the All Mentions function that specifies the entire group, see [How to use the Chat Mentions function](https://guide.line.me/ja/chats-calls-notifications/chats/chat-mention.html){rel="[\"nofollow\"]"} (only available in Japanese) in the LINE user's guide.
