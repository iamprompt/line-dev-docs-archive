---
title: You can now send and receive quote messages using the Messaging API
navigation: true
description: >-
  You can now send quote messages from your LINE Official Account and receive
  quote messages sent by users via webhook.
meta: '{"date":"2023-09-14 00:00 UTC","tags":"messaging-api","locale":"EN"}'
path: >-
  /en/_partials/news/2023/2023-09-14-send-and-receive-quote-messages-using-the-messaging-api
__hash__: 3nQSgU7YOeGUpIZmjUdbBx1LrAlf7uS9jJqnPkE084g
seo:
  title: You can now send and receive quote messages using the Messaging API
  description: >-
    You can now send quote messages from your LINE Official Account and receive
    quote messages sent by users via webhook.
---

You can now send quote messages from your LINE Official Account and receive quote messages sent by users via webhook.

- [Send quote messages from your LINE Official Account](#update-20230914-01)
- [Receive quote messages via webhook](#update-20230914-02)
- [Get quote tokens](#update-20230914-03)

### Send quote messages from your LINE Official Account

When sending reply messages or push messages, you can quote past messages.

![](/media/news/2023/chat-reply-from-bot.png){className="[\"border\",\"w-fix-480\"]"}

To send a message quoting a past message, specify the quote token (`quoteToken`) of the message to be quoted.

**Example of a push message request quoting a past message**

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
  "to": "U4af4980629...",
  "messages": [
    {
      "type": "text",
      "text": "Yes, you can.",
      "quoteToken": "yHAz4Ua2wx7..." // Specify the quote token of the message to be quoted
    }
  ]
}'
```

For more information, see [Send quote messages](/docs/messaging-api/sending-messages/#send-quote-messages) in the Messaging API documentation.

### Receive quote messages via webhook

You can receive quote messages sent by users via webhook.

![](/media/messaging-api/receiving-messages/chat-reply.png){className="[\"border\",\"w-fix-480\"]"}

When a user sends a message quoting a past message, you can check the ID of the quoted message with the `quotedMessageId` property included in the `message` property of the webhook.

```json
"message": {
  "type": "text",
  "id": "468789577898262530", // ID of the received message
  "quotedMessageId": "468789532432007169", // ID of the quoted message
  "quoteToken": "q3Plxr4AgKd...",
  "text": "Chicken, please." // Text of the received message
}
```

For more information, see [Receive quote messages sent by users via webhook](/docs/messaging-api/receiving-messages/#receive-quote-messages-sent-by-user) in the Messaging API documentation.

### Get quote tokens

You can get the quote token (`quoteToken`) required to send a message quoting a past message in the webhook or in the response when sending a message.

For more information, see [Get quote tokens](/docs/messaging-api/get-quote-tokens/) in the Messaging API documentation.
