---
title: '[Updated] Messaging API update for April 2020'
navigation: true
description: ''
meta: '{"date":"2020-04-14 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2020/2020-04-14-messaging-api-update-april-2020
__hash__: Py6coU_8c0lb20gEGN3WzW5LiS3LdnW6RK6b0PwuMDA
seo:
  title: '[Updated] Messaging API update for April 2020'
  description: ''
---

::admonition{title="Updated on April 16, 2020" type="note"}
We've changed the following property names, which were announced on April 14 2020.

| Before changes    | After changes    |
| ----------------- | ---------------- |
| `sticon`          | `emojis`         |
| `sticon.sticonId` | `emojis.emojiId` |
::

We made several improvements to the Messaging API.

### Use LINE emoji in messages

In addition to standard unicode emoji and (deprecated) LINE original emoji, you can now include LINE emoji when you send a [text message](/reference/messaging-api/#text-message) with the Messaging API.

LINE emoji are identified by a `productId` and `emojiId`:

```json
// Text message example with LINE emoji
{
    "type": "text",
    "text": "Look at this: $ It's a LINE emoji!",
    "emojis": [
        {
            "index": 14,
            "productId": "5ac1bfd5040ab15980c9b435",
            "emojiId": "001"
        }
    ]
}
```

For details, see the [Text message](/reference/messaging-api/#text-message) section in the Messaging API reference.

### Get user's language

The [Get profile](/reference/messaging-api/#get-profile) endpoint now returns a `language` property in addition to other user profile information, provided one of these situations applies:

- User has a LINE account created in Japan and has agreed to the Privacy Policy of LINE version 8.0.0 or later
- User has a LINE account created in Taiwan, Thailand, or Indonesia and has agreed to the Privacy Policy of LINE version 8.9.0 or later

### Multicast recipient limit removed

Previously, messages sent with the [Send multicast message](/reference/messaging-api/#send-multicast-message) endpoint were limited to a maximum number of recipients. This limit has been removed. Other rate limits remain in place. See this table for a comparison of the previous and current situation:

| Bot type                                    | Previous limitations                                                                       | Current limitations                                      |
| ------------------------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| Bots associated with LINE Official Accounts | 100,000 requests per minute   1,700 requests per second*   2,000,000 recipients per minute | 100,000 requests per minute   1,700 requests per second* |
| Bots associated with LINE@ accounts         | 10,000 requests per minute   170 requests per second*   200,000 recipients per minute      | 10,000 requests per minute   170 requests per second*    |

* The rate limit in seconds is a guideline for mass transmission.

In addition, you can now target up to 500 user IDs (increased from 150) with a single multicast message.

For more details, see the [Rate limits](/reference/messaging-api/#rate-limits) section of the Messaging API reference.
