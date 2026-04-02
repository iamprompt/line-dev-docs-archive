---
title: Get quote tokens
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/get-quote-tokens
__hash__: qYaXZ65YEghwOfpMjjK-6PURrm37J-yPgEMDW3WcwKw
seo:
  title: Get quote tokens
  description: null
---

# :page-title

:markdown-controlsWhen you want to send a message quoting a past message with the Messaging API, you use quote tokens. This page explains how to get quote tokens.

:toc## What is a quote token

A quote token is a string like `IStG5h1Tz7bsH6xinEQtKQ9IdtcN5wLE15-LwtIDCEYAqDkV741O-XkOhZo1GYxw2UCURKnpHujpZuZaBaeQZVOVpKiaEeAz1Ye3-3ZYbPQVjuXZ4x8ZpISG7WhJDCE8o-hhHh8uMBRyp3b0L_Cxlg`. Quote tokens are required to [send quote messages](/docs/messaging-api/sending-messages/#send-quote-messages).

Quote tokens can only be used in one-on-one chats, group chats, and multi-person chats where the message to be quoted was sent. Quote tokens have no expiration date and the same quote token can be used multiple times.

## Get quote tokens

There are two ways to get quote tokens:

1. [Get quote tokens via webhook](#get-quote-tokens-via-webhook)
2. [Get quote tokens in the response when sending a message](#get-quote-tokens-in-the-response)

### Get quote tokens via webhook

When a user sends a message in a one-on-one chat, group chat, or multi-person chat where your LINE Official Account is added, a [message event](/reference/messaging-api/#message-event) of webhook is sent to your bot server. In this message event, the following message objects include the quote tokens (`quoteToken`):

- [Text](/reference/messaging-api/#wh-text)
- [Sticker](/reference/messaging-api/#wh-sticker)
- [Image](/reference/messaging-api/#wh-image)
- [Video](/reference/messaging-api/#wh-video)

```json
"message": {
  "type": "text",
  "id": "468789577898262530",
  "quoteToken": "q3Plxr4AgKd...", // Quote token
  "text": "Can I reserve a table for dinner tonight?"
}
```

For more information about webhook, see [Receive messages (webhook)](/docs/messaging-api/receiving-messages/).

### Get quote tokens in the response when sending a message

When you send a [reply message](/reference/messaging-api/#send-reply-message) or a [push message](/reference/messaging-api/#send-push-message) with the Messaging API, a JSON object containing the `sentMessages` property is returned as a response.

```json
{
  "sentMessages": [
    {
      "id": "461230966842064897",
      "quoteToken": "IStG5h1Tz7b..."
    }
  ]
}
```

However, quote tokens (`sentMessages[].quoteToken`) are included in the response only when the following message objects that can be specified as quote targets are sent:

- [Text message](/docs/messaging-api/message-types/#text-messages)
- [Text message (v2)](/docs/messaging-api/message-types/#text-messages-v2)
- [Sticker message](/docs/messaging-api/message-types/#sticker-messages)
- [Image message](/docs/messaging-api/message-types/#image-messages)
- [Video message](/docs/messaging-api/message-types/#video-messages)
- [Template message](/docs/messaging-api/message-types/#template-messages) (only `altText` is displayed when quoted)
- [Flex Message](/docs/messaging-api/message-types/#flex-messages) (only `altText` is displayed when quoted)

If you send a message specifying multiple of the above message objects, you will receive the same number of quote tokens. In this case, the order of the elements in the `sentMessages` array is guaranteed to be the same as the order of the message objects when they were sent.

```json
{
  "sentMessages": [
    {
      "id": "471875397094211585",
      "quoteToken": "YKPDqjc2jmW..."
    },
    {
      "id": "471875397127766017",
      "quoteToken": "eG5SfLhgiFX..."
    }
  ]
}
```
