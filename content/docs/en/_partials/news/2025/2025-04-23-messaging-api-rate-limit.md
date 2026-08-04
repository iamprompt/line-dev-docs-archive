---
title: >-
  As of April 23, 2025, in the Messaging API, the rate limit for the "Send
  multicast message" endpoint changed
navigation: true
description: >-
  As announced on March 31, 2025, we've changed the rate limit for the Send
  multicast message endpoint as of April 23, 2025.
meta: '{"date":"2025-04-23 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2025/2025-04-23-messaging-api-rate-limit
__hash__: UfJXkfsMmaxna6dIIfqiZ4OjqfmHOOLE3LGznPbVuJM
seo:
  title: >-
    As of April 23, 2025, in the Messaging API, the rate limit for the "Send
    multicast message" endpoint changed
  description: >-
    As announced on March 31, 2025, we've changed the rate limit for the Send
    multicast message endpoint as of April 23, 2025.
---

As announced on [March 31, 2025](/news/2025/03/31/messaging-api-rate-limit/), we've changed the rate limit for the [Send multicast message](/reference/messaging-api/#send-multicast-message) endpoint as of April 23, 2025.

The rate limits before and after the change are as follows:

| Endpoint               | Before                    | After (current)             |
| ---------------------- | ------------------------- | --------------------------- |
| Send multicast message | 2,000 requests per second | **200 requests per second** |

There are no changes to the rate limits for endpoints other than those listed above.

### Date of specification change

April 23, 2025

::admonition
---
title: If you're sending to a single user, we recommend using push messages
type: tip
---
The "Send multicast message" endpoint is an API that allows you to efficiently send the same message to multiple users. You can also send a message to a single user using the multicast message, but if you're sending it to a single user, we recommend using the [push message](/reference/messaging-api/#send-push-message).

Push messages are suitable for sending messages with low latency, and can still be used at 2,000 requests per second.
::

We'll continue to work to further improve its service to our customers. Thank you for your understanding.
