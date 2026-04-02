---
title: Messaging API Update (November 2021)
navigation: true
description: >-
  New features have been added to the Messaging API. These are the features that
  have been newly added or updated.
meta: '{"date":"2021-11-09 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2021/2021-11-09-messaging-api-update
__hash__: e_KQUyqBK8Vv4_iHl6gQlVtnhOFqjCkFx4vaKRkHWQg
seo:
  title: Messaging API Update (November 2021)
  description: >-
    New features have been added to the Messaging API. These are the features
    that have been newly added or updated.
---

New features have been added to the Messaging API. These are the features that have been newly added or updated.

- [You can now retrieve the text entered by the user in a message sticker](#messaging-api-202111-01)
- [You can now retrieve up to 1000 user IDs of friends](#messaging-api-202111-02)

### You can now retrieve the text entered by the user in a message sticker

![message sticker](/media/news/message-sticker-sample.png){className="[\"w-fix-320\"]"}

You can now retrieve the text entered by the user in a :glossary-tooltip[[Message sticker](/glossary/#message-sticker)]{glossary-id="message-sticker"}.

In the Messaging API, when a user sends a sticker to the LINE Official Account, a webhook event is sent from the LINE Platform to the bot server. For message stickers, a `text` field has been added to the message object of the sticker included in this webhook, allowing you to retrieve any text entered by the user.

```json
"message": {
    "type": "sticker",
    "id": "123456789012345678",
    "stickerId": "738839",
    "packageId": "12287",
    "stickerResourceType": "MESSAGE",
    "keywords": [
        "Anticipation",
        "Sparkle",
        "Straight face",
        "Staring",
        "Thinking"
    ],
    "text": "Let's\nhang out\nthis weekend!"
}
```

With this change, the value of the `stickerResourceType` field, which represents the resource type of the sticker, has also been changed as follows:

| Resource type                                                                                          | Before change      | After change (current) |
| ------------------------------------------------------------------------------------------------------ | ------------------ | ---------------------- |
| ::glossary-tooltip{glossary-id="message-sticker"}   [Message sticker](/glossary/#message-sticker)   :: | `PER_STICKER_TEXT` | `MESSAGE`              |
| ::glossary-tooltip{glossary-id="custom-sticker"}   [Custom sticker](/glossary/#custom-sticker)   ::    | `NAME_TEXT`        | `CUSTOM`               |

For more information, see [Sticker](/reference/messaging-api/#wh-sticker) in the Messaging API reference.

### You can now retrieve up to 1000 user IDs of friends

Previously when you attempted to [get a list of users who added your LINE Official Account as a friend](/reference/messaging-api/#get-follower-ids), only a maximum of 300 user IDs could be retrieved at a time. With this update, you can retrieve up to 1000 user IDs at a time by specifying the number to be retrieved with the `limit` property.

|                                                         | Before change | After change (current) |
| ------------------------------------------------------- | ------------- | ---------------------- |
| Max number of user IDs that can be obtained at one time | 300           | 1000                   |

For more information, see [Get a list of users who added your LINE Official Account as a friend](/reference/messaging-api/#get-follower-ids) in the Messaging API reference.
