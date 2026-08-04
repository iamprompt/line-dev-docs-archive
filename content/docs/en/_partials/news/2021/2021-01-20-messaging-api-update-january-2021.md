---
title: Messaging API update for January 2021
navigation: true
description: >-
  We added new properties to the Get narrowcast message status API endpoint and
  the Text message type of the Message webhook event object of the Messaging
  API.
meta: '{"date":"2021-01-20 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2021/2021-01-20-messaging-api-update-january-2021
__hash__: VsjcAOzST0PxGDpnXeYR21DYnZUkolJf5r5qtQzWDac
seo:
  title: Messaging API update for January 2021
  description: >-
    We added new properties to the Get narrowcast message status API endpoint
    and the Text message type of the Message webhook event object of the
    Messaging API.
---

We added new properties to the [Get narrowcast message status](/reference/messaging-api/#get-narrowcast-progress-status) API endpoint and the [Text](/reference/messaging-api/#wh-text) message type of the [Message webhook event object](/reference/messaging-api/#message-event) of the Messaging API.

- [Get narrowcast message status properties](#narrowcast-message-status-properties-news)
- [Text message type properties](#text-message-type-properties-news)

### Get narrowcast message status properties

We've added these properties to the Get narrowcast message status API endpoint. With these new properties, you can now know when the narrowcast message request was accepted and when processing was completed.

- `acceptedTime`: The accepted time (in milliseconds) of the narrowcast message request.
- `completedTime`: The completed time (in milliseconds) of the processing of the narrowcast message request. Returned when the `phase` property is `succeeded` or `failed`.

For more information, see [Get narrowcast message status](/reference/messaging-api/#get-narrowcast-progress-status) in the Messaging API reference.

### Text message type properties

Before, when a user was mentioned in a group or room, it wasn't possible to capture any information about the mention. Now, with the new properties we've added to the Text message type of the Message webhook event object, you can.

These are the newly added properties.

- `mention`: Object containing the contents of the mentioned user.
- `mention.mentionees[]`: Mentioned user information.
- `mention.mentionees[].index`: Index position of the user mention for a character in `text`, with the first character being at position `0`.
- `mention.mentionees[].length`: The length of the text of the mentioned user. For a mention `(@example)`, 8 is the length.
- `mention.mentionees[].userId`: User ID of the mentioned user.

For more information, see the [Text](/reference/messaging-api/#wh-text) message type in the Messaging API reference.
