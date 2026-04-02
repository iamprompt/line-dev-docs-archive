---
title: >-
  Early September 2023, the response when you send a message using the Messaging
  API will change
navigation: true
description: >-
  In early September 2023, we'll change the response when you send a reply or
  push message using the Messaging API.
meta: '{"date":"2023-07-31 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: >-
  /en/_partials/news/2023/2023-07-31-change-the-response-when-sending-a-message-using-the-messaging-api
__hash__: 5etfwfQQmV8p5PqGznojDd5r8Q6j3wHP3Q80GXPkTBg
seo:
  title: >-
    Early September 2023, the response when you send a message using the
    Messaging API will change
  description: >-
    In early September 2023, we'll change the response when you send a reply or
    push message using the Messaging API.
---

In early September 2023, we'll change the response when you send a reply or push message using the Messaging API.

### Scheduled date of change

Early September 2023

The details and date of this specification change are subject to change without notice.

### Changes

Currently, with the Messaging API, when you request to send a reply or push message, an empty JSON object is returned as the response on success.

**Before change (current)**

```json
{}
```

After the specification change, a JSON object containing the `sentMessages` property will be returned. However, depending on the message object sent, `sentMessages[].quoteToken` may not be included.

**After change**

```json
{
  "sentMessages": [
    {
      "id": "461230966842064897",
      "quoteToken": "IStG5h1Tz7bsH6xinEQtKQ9IdtcN5wLE15-LwtIDCEYAqDkV741O-XkOhZo1GYxw2UCURKnpHujpZuZaBaeQZVOVpKiaEeAz1Ye3-3ZYbPQVjuXZ4x8ZpISG7WhJDCE8o-hhHh8uMBRyp3b0L_Cxlg"
    }
  ]
}
```

### Impact

- [Send reply message](/reference/messaging-api/#send-reply-message)
- [Send push message](/reference/messaging-api/#send-push-message)

### Important points about the specification change

After the specification change, implement your requester to successfully receive JSON objects with the new structure.

As with this specification change, the structure of the JSON object in the response may change in the future when the Messaging API feature is updated. Such changes may include adding properties, changing the order of properties, adding or deleting spaces and newlines between data elements, and so on.

LINE will continue to work to further improve its service to our customers. Thank you for your understanding.
