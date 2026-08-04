---
title: '[Resolved] Notice about service outage for sending webhook events'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding LIFF. When a message
  was sent to a chat room using the liff.sendMessages() method of the LIFF SDK,
  the corresponding webhook event was not sent to the bot server. The issue has
  now been resolved but we sincerely apologize for the inconvenience caused to
  our customers.
meta: >-
  {"date":"2021-01-14 00:00 UTC","tags":"Outage report, LIFF, Messaging
  API","locale":"en"}
path: /en/_partials/news/2021/2021-01-14-webhook-outage
__hash__: WLRA5FJN3mXVwYWNcMi7YThYDi5Q-mElWBBcfpl9goA
seo:
  title: '[Resolved] Notice about service outage for sending webhook events'
  description: >-
    We'd like to inform you about a service outage regarding LIFF. When a
    message was sent to a chat room using the liff.sendMessages() method of the
    LIFF SDK, the corresponding webhook event was not sent to the bot server.
    The issue has now been resolved but we sincerely apologize for the
    inconvenience caused to our customers.
---

We'd like to inform you about a service outage regarding LIFF. When a message was sent to a chat room using the [`liff.sendMessages()`](/reference/liff/#send-messages) method of the LIFF SDK, the corresponding [webhook event](/reference/messaging-api/#message-event) was not sent to the bot server. The issue has now been resolved but we sincerely apologize for the inconvenience caused to our customers.

The impact of this failure is limited to sending webhook events. Messages sent using the `liff.sendMessages()` method were displayed correctly in the chat room.

### Date and time of outage

January 13, 2021 around 15:30 - 22:19 (UTC+9)

### Cause of the outage

Server failure

### Impact

Sending webhook events when messages were sent with the `liff.sendMessages()` method.

### Details

During the stated date and time, webhook events were not sent correctly. The issue has now been resolved and the webhook events are sent correctly.

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
