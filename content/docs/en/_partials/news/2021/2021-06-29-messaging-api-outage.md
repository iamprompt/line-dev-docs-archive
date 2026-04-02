---
title: '[Resolved] Notice about service outage for the Messaging API'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the Messaging API.
  The issue has now been resolved.
meta: >-
  {"date":"2021-06-29 00:00 UTC","tags":"Outage report, Messaging
  API","locale":"en"}
path: /en/_partials/news/2021/2021-06-29-messaging-api-outage
__hash__: H5ce9aqj2MAl6NumftbTkr_NIAkhbvaHI_YL7hLFw3g
seo:
  title: '[Resolved] Notice about service outage for the Messaging API'
  description: >-
    We'd like to inform you about a service outage regarding the Messaging API.
    The issue has now been resolved.
---

We'd like to inform you about a service outage regarding the Messaging API. The issue has now been resolved.

We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

- June 28, 2021 around 18:07 - around 18:08 (UTC+9)
- June 28, 2021 around 20:32 (UTC+9)

### Cause of the outage

Server failure

### Impact

- [Send reply message](/reference/messaging-api/#send-reply-message)
- [Send push message](/reference/messaging-api/#send-push-message)
- [Send multicast message](/reference/messaging-api/#send-multicast-message)
- [Send broadcast message](/reference/messaging-api/#send-broadcast-message)
- [Get a list of users who added your LINE Official Account as a friend](/reference/messaging-api/#get-follower-ids)
- [Link rich menu to multiple users](/reference/messaging-api/#link-rich-menu-to-users)
- [Unlink rich menus from multiple users](/reference/messaging-api/#unlink-rich-menu-from-users)

### Details

During the stated date and time, some requests may not have been processed properly, resulting in an error with status code 5xx.

### Retrying a failed API request

In some APIs, you can safely retry a request while preventing the same request from being accepted in duplicate by using a retry key (`X-Line-Retry-Key`) when an error with status code 5xx occurs or when the request times out.

For more information, see [Retrying a failed API request](/docs/messaging-api/retrying-api-request/) and [APIs for which retry keys are available](/docs/messaging-api/retrying-api-request/#apis-with-available-retry-keys) in the LIFF documentation.

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
