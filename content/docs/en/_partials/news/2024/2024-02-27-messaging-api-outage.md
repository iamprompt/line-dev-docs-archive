---
title: '[Resolved] Notice about service outage for the Messaging API'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the Messaging API.
  The issue has now been resolved.
meta: >-
  {"date":"2024-02-27 00:00 UTC","tags":"outage-report,
  messaging-api","locale":"en"}
path: /en/_partials/news/2024/2024-02-27-messaging-api-outage
__hash__: biv2SyYG6VbCK2pyn0vqedPXH-CdlFOTU6tli2ekl58
seo:
  title: '[Resolved] Notice about service outage for the Messaging API'
  description: >-
    We'd like to inform you about a service outage regarding the Messaging API.
    The issue has now been resolved.
---

We'd like to inform you about a service outage regarding the Messaging API. The issue has now been resolved.

We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

February 27, 2024 around 12:37 - around 13:17 (UTC+9)

### Cause of the outage

Server failure

### Impact

- [Send reply message](/reference/messaging-api/#send-reply-message)
- [Send push message](/reference/messaging-api/#send-push-message)
- [Send multicast message](/reference/messaging-api/#send-multicast-message)
- [Send broadcast message](/reference/messaging-api/#send-broadcast-message)
- [Validate message objects of a push message](/reference/messaging-api/#validate-message-objects-of-push-message)
- [Validate message objects of a broadcast message](/reference/messaging-api/#validate-message-objects-of-broadcast-message)

### Details

During the stated date and time, some requests for messages containing stickers or LINE emoji may not have been processed properly, resulting in an error with status code 5xx.

We will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
