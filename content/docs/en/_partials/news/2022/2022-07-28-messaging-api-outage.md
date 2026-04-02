---
title: '[Resolved] Notice about service outage for the Messaging API'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the Messaging API.
  The issue has now been resolved.
meta: >-
  {"date":"2022-07-28 00:00 UTC","tags":"outage-report, messaging-api,
  options-for-corporate-customers","locale":"en"}
path: /en/_partials/news/2022/2022-07-28-messaging-api-outage
__hash__: bMakm77GZuUeR5TybLNsiJNsGHqd6YLw2y3nAvIFTf4
seo:
  title: '[Resolved] Notice about service outage for the Messaging API'
  description: >-
    We'd like to inform you about a service outage regarding the Messaging API.
    The issue has now been resolved.
---

We'd like to inform you about a service outage regarding the Messaging API. The issue has now been resolved.

We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

July 28, 2022 around 5:29 - around 5:49 (UTC+9)

### Cause of the outage

Server failure

### Impact

- [Send reply message](/reference/messaging-api/#send-reply-message)
- [Send push message](/reference/messaging-api/#send-push-message)
- [Send multicast message](/reference/messaging-api/#send-multicast-message)
- [Send narrowcast message](/reference/messaging-api/#send-narrowcast-message)
- [Send broadcast message](/reference/messaging-api/#send-broadcast-message)
- [Send LINE notification message](/docs/partner-docs/line-notification-messages/) (Options for corporate customers)
- [Mark messages from users as read](/reference/partner-docs/#mark-messages-from-users-as-read) (Options for corporate customers)
- [Get a list of users who added your LINE Official Account as a friend](/reference/messaging-api/#get-follower-ids)
- [Get content](/reference/messaging-api/#get-content)

### Details

During the stated date and time, the following problem occurred:

- Some requests weren't processed properly, resulting in errors with status code 5xx.
- Messages may not have been actually sent in some requests that succeeded and returned a status code 200 when making a request to the above endpoints.

Due to this outage, the messages that weren't properly sent even if the API requests succeeded, won't be counted as the LINE Official Account usage fees and the "number of sent messages" that can be confirmed in some way such as the [Get number of sent push messages](/reference/messaging-api/#get-number-of-push-messages) endpoint.

### Retrying a failed API request

In some APIs, you can safely retry a request while preventing the same request from being accepted in duplicate by using a retry key (`X-Line-Retry-Key`) when an error with status code 5xx occurs or when the request times out.

For more information, see [Retrying a failed API request](/docs/messaging-api/retrying-api-request/) and [APIs for which retry keys are available](/docs/messaging-api/retrying-api-request/#apis-with-available-retry-keys) in the LIFF documentation.

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
