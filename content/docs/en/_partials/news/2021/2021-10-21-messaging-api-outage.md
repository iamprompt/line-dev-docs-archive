---
title: '[Resolved] Notice about service outage for the Messaging API'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the Messaging API.
  The issue has now been resolved.
meta: >-
  {"date":"2021-10-21 01:00 UTC","tags":"outage-report, messaging-api,
  options-for-corporate-customers","locale":"en"}
path: /en/_partials/news/2021/2021-10-21-messaging-api-outage
__hash__: QeYuPqISvOHpUKtiI_vpPSZOL7WZe3SUK74LyW5f8C4
seo:
  title: '[Resolved] Notice about service outage for the Messaging API'
  description: >-
    We'd like to inform you about a service outage regarding the Messaging API.
    The issue has now been resolved.
---

We'd like to inform you about a service outage regarding the Messaging API. The issue has now been resolved.

We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

October 20, 2021 around 17:29 - around 17:41 (UTC+9)

### Cause of the outage

Server failure

### Impact

- [Send reply message](/reference/messaging-api/#send-reply-message)
- [Send push message](/reference/messaging-api/#send-push-message)
- [Send multicast message](/reference/messaging-api/#send-multicast-message)
- [Send narrowcast message](/reference/messaging-api/#send-narrowcast-message)
- [Send broadcast message](/reference/messaging-api/#send-broadcast-message)
- [LINE notification messages](/docs/partner-docs/line-notification-messages/)

### Details

During the stated date and time, some requests may not have been processed properly, resulting in an error with status code 5xx.

### Retrying a failed API request

In some APIs, you can safely retry a request while preventing the same request from being accepted in duplicate by using a retry key (`X-Line-Retry-Key`) when an error with status code 5xx occurs or when the request times out.

For more information, see [Retrying a failed API request](/docs/messaging-api/retrying-api-request/) and [APIs for which retry keys are available](/docs/messaging-api/retrying-api-request/#apis-with-available-retry-keys) in the LIFF documentation.

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
