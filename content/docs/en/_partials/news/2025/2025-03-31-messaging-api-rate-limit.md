---
title: >-
  As of April 23, 2025, in the Messaging API, the rate limit for the "Send
  multicast message" endpoint will change
navigation: true
description: >-
  In the Messaging API, rate limits are set for each endpoint. We'd like to
  inform you that we plan to change the rate limit for the Send multicast
  message endpoint as of April 23, 2025.
meta: '{"date":"2025-03-31 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2025/2025-03-31-messaging-api-rate-limit
__hash__: 6aVgev7RhjDbL6mcrvttfvnQR-Xr0dIfsP3kf-RvK8U
seo:
  title: >-
    As of April 23, 2025, in the Messaging API, the rate limit for the "Send
    multicast message" endpoint will change
  description: >-
    In the Messaging API, rate limits are set for each endpoint. We'd like to
    inform you that we plan to change the rate limit for the Send multicast
    message endpoint as of April 23, 2025.
---

In the Messaging API, [rate limits](/reference/messaging-api/#rate-limits) are set for each endpoint. We'd like to inform you that we plan to change the rate limit for the [Send multicast message](/reference/messaging-api/#send-multicast-message) endpoint as of April 23, 2025.

The rate limits before and after the change are as follows:

| Endpoint               | Before (current)          | After                       |
| ---------------------- | ------------------------- | --------------------------- |
| Send multicast message | 2,000 requests per second | **200 requests per second** |

There are no changes to the rate limits for endpoints other than those listed above.

### Scheduled date of specification change

April 23, 2025

The content and date of this specification change are subject to change.

::admonition
---
title: If you're sending to a single user, we recommend using push messages
type: tip
---
The "Send multicast message" endpoint is an API that allows you to efficiently send the same message to multiple users. You can also send a message to a single user using the multicast message, but if you're sending it to a single user, we recommend using the [push message](/reference/messaging-api/#send-push-message).

Push messages are suitable for sending messages with low latency, and can still be used at 2,000 requests per second.
::

We'll continue to work to further improve its service to our customers. Thank you for your understanding.
