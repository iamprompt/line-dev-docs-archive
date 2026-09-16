---
title: '[Resolved] Notice about service outage for the Messaging API'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the Messaging API.
  The issue has now been resolved. We sincerely apologize for any inconvenience
  that this may have caused.
meta: >-
  {"date":"2026-09-16 00:00 UTC","tags":"outage-report, messaging-api,
  options-for-corporate-customers","locale":"en"}
path: /en/_partials/news/2026/2026-09-16-messaging-api-outage
__hash__: iosc-La3M_GVenwZGqDsfDtiIO59CgoO9I8mvDT70Aw
seo:
  title: '[Resolved] Notice about service outage for the Messaging API'
  description: >-
    We'd like to inform you about a service outage regarding the Messaging API.
    The issue has now been resolved. We sincerely apologize for any
    inconvenience that this may have caused.
---

We'd like to inform you about a service outage regarding the Messaging API. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

September 15, 2026 around 23:58 - September 16, 2026 around 3:43 (UTC+9)

### Cause of the outage

Network failure

### Impact

- [All Messaging API endpoints](/reference/messaging-api/)
- [Send a LINE notification message (flexible)](/reference/line-notification-messages/#send-line-notification-message-flexible) (Options for corporate customers)
- [Send a LINE notification message (template)](/reference/line-notification-messages/#send-line-notification-message-template) (Options for corporate customers)

### Details

During the stated date and time, some requests weren't processed properly, resulting in errors with status code 5xx.

#### Retrying a failed API request

In some APIs, you can safely retry a request while preventing the same request from being accepted in duplicate by using a retry key (`X-Line-Retry-Key`) when an error with status code 5xx occurs or when the request times out.

For more information, see [Retry failed API requests](/docs/messaging-api/retrying-api-request/) and [Specify the retry key always](/docs/messaging-api/retrying-api-request/#apis-with-available-retry-keys) in the Messaging API documentation.

We'll continue to improve the quality of our services to prevent future outages. Thank you for your understanding.
