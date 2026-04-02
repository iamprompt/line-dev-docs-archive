---
title: Messaging API update for December 2020
navigation: true
description: >-
  We added a new property to the Sticker message type of the Message webhook
  event object of the Messaging API.
meta: '{"date":"2020-12-02 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2020/2020-12-02-messaging-api-update-december-2020
__hash__: cD-7M9gGhpE5thtD6S0yHcXIbGKAoRmvmClVKBtsYKk
seo:
  title: Messaging API update for December 2020
  description: >-
    We added a new property to the Sticker message type of the Message webhook
    event object of the Messaging API.
---

We added a new property to the [Sticker](/reference/messaging-api/#wh-sticker) message type of the [Message webhook event object](/reference/messaging-api/#message-event) of the Messaging API.

- [keywords property](#keywords-news)

### keywords property

Previously, developers were unable to understand the context of the stickers sent to the LINE Official Account by looking at the returned webhook event object. Now, with the `keywords` property, you can.

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "message",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "message": {
        "type": "sticker",
        "id": "1501597916",
        "stickerId": "52002738",
        "packageId": "11537",
        "stickerResourceType": "ANIMATION",
        "keywords": ["cony","sally","Staring","hi","whatsup","line","howdy","HEY","Peeking","wave","peek","Hello","yo","greetings"]
      }
    }
  ]
}
```

::admonition{title="Keywords experimental phase" type="note"}
The `keywords` property is currently in an experimental phase and discontinuation or spec changes may occur in the future.
::

For more information, see the [Sticker](/reference/messaging-api/#wh-sticker) message type in the Messaging API reference.
