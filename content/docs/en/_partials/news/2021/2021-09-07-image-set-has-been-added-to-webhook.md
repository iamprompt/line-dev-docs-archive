---
title: You can now confirm the number of images sent simultaneously through webhooks
navigation: true
description: >-
  With the Messaging API, when a user sends two images simultaneously, two
  webhook events are sent from the LINE Platform to the bot server. These fields
  have been added to the message object of images, which is included in the
  webhook:
meta: '{"date":"2021-09-07 01:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2021/2021-09-07-image-set-has-been-added-to-webhook
__hash__: tNIlnsdiTMoZR5i-L33N2sKXfmnP7Taej0ytQhbMz3s
seo:
  title: >-
    You can now confirm the number of images sent simultaneously through
    webhooks
  description: >-
    With the Messaging API, when a user sends two images simultaneously, two
    webhook events are sent from the LINE Platform to the bot server. These
    fields have been added to the message object of images, which is included in
    the webhook:
---

With the Messaging API, when a user sends two images simultaneously, two webhook events are sent from the LINE Platform to the bot server. These fields have been added to the message object of images, which is included in the webhook:

- `imageSet.id`: Image set ID
- `imageSet.index`: An index starting from `1`, indicating the image number in a set of images sent simultaneously
- `imageSet.total`: Total number of images sent simultaneously

Previously, there was no way to confirm whether two images were sent simultaneously or consecutively. However, with the addition of these fields, you can now confirm whether a user has sent multiple images simultaneously.

```json
// When two images are sent simultaneously (First image)
"message": {
    "type": "image",
    "id": "354718705033693859",
    "contentProvider": {
        "type": "line"
    },
    "imageSet": {
        "id": "E005D41A7288F41B65593ED38FF6E9834B046AB36A37921A56BC236F13A91855",
        "index": 1,
        "total": 2
    }
}

// When two images are sent simultaneously (Second image)
"message": {
    "type": "image",
    "id": "354718705033693861",
    "contentProvider": {
        "type": "line"
    },
    "imageSet": {
        "id": "E005D41A7288F41B65593ED38FF6E9834B046AB36A37921A56BC236F13A91855",
        "index": 2,
        "total": 2
    }
}
```

For more information, see [Image](/reference/messaging-api/#wh-image) in the Message event section of the Messaging API reference.
