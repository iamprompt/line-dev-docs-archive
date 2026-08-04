---
title: In the Messaging API, you can now mark messages from users as read
navigation: true
description: >-
  The Messaging API now allows you to mark messages as read. Previously, only
  corporate users who had submitted the required applications could mark
  messages as read using the Mark as read API (old). With this release, anyone
  can now mark messages as read.
meta: >-
  {"date":"2025-11-05 00:00 UTC","tags":"messaging-api,
  line-official-account","locale":"en"}
path: /en/_partials/news/2025/2025-11-05-mark-as-read
__hash__: IUhotIRy0ECzYT_XCY9snxfaednHyqt7gpsTmRtk2LM
seo:
  title: In the Messaging API, you can now mark messages from users as read
  description: >-
    The Messaging API now allows you to mark messages as read. Previously, only
    corporate users who had submitted the required applications could mark
    messages as read using the Mark as read API (old). With this release, anyone
    can now mark messages as read.
---

The Messaging API now allows you to mark messages as read. Previously, only corporate users who had submitted the required applications could mark messages as read using the [Mark as read API (old)](/docs/partner-docs/mark-as-read/). With this release, anyone can now mark messages as read.

### How to mark messages as read

To mark messages as read that were sent by a user, follow these steps:

1. [Get the read token of the message](#get-token-20251105)
2. [Use the "Mark messages as read" endpoint](#use-endpoint-20251105)

Each step is explained below.

### 1. Get the read token of the message

When a user sends a message to a LINE Official Account, the LINE Platform sends a webhook [message event](/reference/messaging-api/#message-event) to the bot server. This event object contains the `markAsReadToken` property (read token) used to mark messages as read.

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "message",
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "message": {
        "id": "444573844083572737",
        "type": "text",
        "quoteToken": "q3Plxr4AgKd...",
        "markAsReadToken": "30yhdy232...", // Read token
        "text": "Hello, world!"
      },
      // omitted
    }
  ]
}
```

### 2. Use the "Mark messages as read" endpoint

To mark messages as read, use the read token obtained in step 1 with the [Mark messages as read](/reference/messaging-api/#mark-as-read) endpoint. You can mark all messages prior to the specified message as read by executing a request like the following:

```sh
curl -v -X POST https://api.line.me/v2/bot/chat/markAsRead \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
  "markAsReadToken": "{mark as read token}"
}'
```

For more information on how to mark messages as read, see [Mark messages as read](/docs/messaging-api/mark-as-read/) in the Messaging API documentation.

::admonition
---
title: Use the new endpoint to mark as read instead of the Mark as read API (old)
type: tip
---
The Mark as read API (old) provided for corporate users remains available for use. However, if you're implementing functionality to mark messages as read from users going forward, use the Messaging API's [Mark messages as read](/reference/messaging-api/#mark-as-read) endpoint. The "Mark messages as read" endpoint requires no application and can be used in conjunction with chat feature.
::

### LINE Messaging API SDK updates

For more information about the update status of each SDK release in line with the addition of these new features, see the [LINE Messaging API SDKs](/docs/messaging-api/line-bot-sdk/) release notes.
