---
title: '[Resolved] Notice about service outage for the Messaging API'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the Messaging API.
  The issue has now been resolved. We sincerely apologize for any inconvenience
  that this may have caused.
meta: >-
  {"date":"2022-03-01 00:00 UTC","tags":"outage-report, messaging-api,
  options-for-corporate-customers","locale":"en"}
path: /en/_partials/news/2022/2022-03-01-messaging-api-outage
__hash__: yn29FOzsTr-rVHW0cHobVZ9F5wlTbcwagv_mDZjw2rE
seo:
  title: '[Resolved] Notice about service outage for the Messaging API'
  description: >-
    We'd like to inform you about a service outage regarding the Messaging API.
    The issue has now been resolved. We sincerely apologize for any
    inconvenience that this may have caused.
---

We'd like to inform you about a service outage regarding the Messaging API. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

February 28, 2022 around 14:24 - around 14:27 (UTC+9)

### Cause of the outage

Server failure

### Impact

- [Send push message](/reference/messaging-api/#send-push-message)
- [Send reply message](/reference/messaging-api/#send-reply-message)
- [Send multicast message](/reference/messaging-api/#send-multicast-message)
- [Send broadcast message](/reference/messaging-api/#send-broadcast-message)
- [LINE notification messages](/docs/partner-docs/line-notification-messages/)

### Details

During the stated date and time, some requests may not have been processed properly, resulting in an error with status code 5xx.

In addition, due to this outage, the number of deliverable messages in February was temporarily consumed more. As a result, the following API requests would fail when the maximum number of deliverable messages was reached:

- [Send push message](/reference/messaging-api/#send-push-message)
- [Send multicast message](/reference/messaging-api/#send-multicast-message)
- [Send broadcast message](/reference/messaging-api/#send-broadcast-message)

There will be no impact on usage fees due to this outage.

### Retrying a failed API request

In some APIs, you can safely retry a request while preventing the same request from being accepted in duplicate by using a retry key (`X-Line-Retry-Key`) when an error with status code 5xx occurs or when the request times out.

For more information, see [Retrying a failed API request](/docs/messaging-api/retrying-api-request/) and [APIs for which retry keys are available](/docs/messaging-api/retrying-api-request/#apis-with-available-retry-keys) in the LIFF documentation.

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
