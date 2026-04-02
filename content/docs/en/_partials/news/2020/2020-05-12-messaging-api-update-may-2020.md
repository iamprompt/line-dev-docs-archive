---
title: '[Updated] Messaging API update for May 2020'
navigation: true
description: ''
meta: '{"date":"2020-05-12 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2020/2020-05-12-messaging-api-update-may-2020
__hash__: jFj28NC5yuBC0V1iKG_i2pznG4TP8sC03pH49HFVlOM
seo:
  title: '[Updated] Messaging API update for May 2020'
  description: ''
---

::admonition{title="Added on December 12, 2020" type="note"}
There was a mistake in the current file size of the **[Rich menu object (Image)](#rich-menu-object)**. We've corrected the mistake and apologize for any inconvenience caused by this error.

**Incorrect:**

800px or more x 2500px or less

**Correct:**

Width 800px or more to 2500px or less, Height 250px or more
::

We made several improvements to the Messaging API.

### Message character limit and media file usage conditions have been changed

The character limit for text messages and the conditions for media files that can be used have changed. See this table for a comparison of the previous and current situation:

- **[Text message](/reference/messaging-api/#text-message)**| Items               | Previous | Current |
| ------------------- | -------- | ------- |
| Max character limit | 2000     | 5000    |
- **[Rich menu object](/reference/messaging-api/#rich-menu-object) (Image)**{#rich-menu-object}| Items      | Previous                                                                                                              | Current                                                       |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Image size | 2500px × 1686px   2500px × 843px   1200px × 810px   1200px × 405px   800px × 540px   800px × 270px   (width x height) | Width 800px or more to 2500px or less, Height 250px or more * |

* The width/height aspect ratio should be at least 1.45.

- **[Image message](/reference/messaging-api/#image-message) (Image)**| Items          | Previous                           | Current   |
| -------------- | ---------------------------------- | --------- |
| File format    | JPEG                               | JPEG, PNG |
| Max image size | 4096px × 4096px   (width x height) | No limit  |
| Max file size  | 1MB                                | 10MB      |
- **[Video message](/reference/messaging-api/#video-message) (Video)**| Items         | Previous | Current  |
| ------------- | -------- | -------- |
| Max length    | 1 minute | No limit |
| Max file size | 10MB     | 200MB    |
- **[Audio message](/reference/messaging-api/#audio-message) (Audio)**| Items         | Previous | Current  |
| ------------- | -------- | -------- |
| Max length    | 1 minute | No limit |
| Max file size | 10MB     | 200MB    |
- **[Imagemap message](/reference/messaging-api/#imagemap-message) (Image)**| Items         | Previous | Current |
| ------------- | -------- | ------- |
| Max file size | 1MB      | 10MB    |
- **[Imagemap message](/reference/messaging-api/#imagemap-message) (Video)**| Items         | Previous | Current  |
| ------------- | -------- | -------- |
| Max length    | 1 minute | No limit |
| Max file size | 10MB     | 200MB    |
- **[Image message](/reference/messaging-api/#image-message) / [Video message](/reference/messaging-api/#video-message) / [Imagemap message](/reference/messaging-api/#imagemap-message) (Preview image)**| Items          | Previous                         | Current   |
| -------------- | -------------------------------- | --------- |
| File format    | JPEG                             | JPEG, PNG |
| Max image size | 240px x 240px   (width x height) | No limit  |

### Getting LINE emoji information from the text object of a webhook event

If the text sent by users contains a LINE emoji, the `emojis` property of the [text message object](/reference/messaging-api/#wh-text) received by webhook contains information about the used LINE emoji as a LINE Emoji object.

LINE emoji information has been added to the webhook message event object. If the text containing a LINE emoji is sent by users, the `emojis` property will contain information about the used LINE emoji as a LINE emoji object.

LINE emoji are identified by a `productId` and `emojiId`:

```json
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
    "id": "325708",
    "type": "text",
    "text": "Hello, world! (love)",
    "emojis": [
      {
        "index": 14,
        "length": 6,
        "productId": "5ac1bfd5040ab15980c9b435",
        "emojiId": "001"
      }
    ]
  }
}
```

For details, see the [Text](/reference/messaging-api/#wh-text) section in the Messaging API reference.

### Safely retrying a failed API request

If an error occurs when sending a message using the Messaging API, or if the request times out, you may not know if the message was correctly delivered to users. Executing the same request causes users to receive the same message twice if the first request was received correctly.

You can safely retry the same request by adding a retry key (`X-Line-Retry-Key`) to the HTTP request header.

An arbitrarily generated UUID in hexadecimal notation (e.g. 123e4567-e89b-12d3-a456-426614174000) is specified as the value of a retry key. No matter how many times the API request containing the same UUID value of a retry key is executed, it is always accepted only once, preventing the same process from being duplicated. The retry key can now be used to design a secure API request retry.

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
-H 'X-Line-Retry-Key: {UUID}' \
-d '{
    "messages": [
        {
            "type": "text",
            "text": "Hello, user"
        }
    ]
}'
```

For details, see [Retrying a failed API request](/docs/messaging-api/retrying-api-request/).
