---
title: '[Resolved] Notice about service outage for the Messaging API'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the Messaging API.
  The issue has now been resolved.
meta: >-
  {"date":"2022-02-04 00:00 UTC","tags":"outage-report,
  messaging-api","locale":"en"}
path: /en/_partials/news/2022/2022-02-04-messaging-api-outage
__hash__: 8JCElM1wD8bberwr8ciWfBJbtTDyjcLV9LewWJAH-qM
seo:
  title: '[Resolved] Notice about service outage for the Messaging API'
  description: >-
    We'd like to inform you about a service outage regarding the Messaging API.
    The issue has now been resolved.
---

We'd like to inform you about a service outage regarding the Messaging API. The issue has now been resolved.

We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

February 3, 2022 around 9:24 - around 13:30 (UTC+9)

### Cause of the outage

Server failure

### Impact

- [Send reply message](/reference/messaging-api/#send-reply-message)
- [Send push message](/reference/messaging-api/#send-push-message)
- [Send multicast message](/reference/messaging-api/#send-multicast-message)
- [Send narrowcast message](/reference/messaging-api/#send-narrowcast-message)
- [Send broadcast message](/reference/messaging-api/#send-broadcast-message)
- [Create audience for uploading user IDs (by file)](/reference/messaging-api/#create-upload-audience-group-by-file)
- [Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file)](/reference/messaging-api/#update-upload-audience-group-by-file)

### Details

During the stated date and time, the following problem occurred:

- Some requests to send messages containing stickers or emojis may not have been processed properly, resulting in an error with status code 4xx, even though the request content was appropriate.

  - [Send reply message](/reference/messaging-api/#send-reply-message)
  - [Send push message](/reference/messaging-api/#send-push-message)
  - [Send multicast message](/reference/messaging-api/#send-multicast-message)
  - [Send broadcast message](/reference/messaging-api/#send-broadcast-message)
- Some requests may not have been processed properly, resulting in an error with status code 5xx.

  - [Create audience for uploading user IDs (by file)](/reference/messaging-api/#create-upload-audience-group-by-file)
  - [Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file)](/reference/messaging-api/#update-upload-audience-group-by-file)
- There were instances where sending messages was delayed.

  - [Send narrowcast message](/reference/messaging-api/#send-narrowcast-message)

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
