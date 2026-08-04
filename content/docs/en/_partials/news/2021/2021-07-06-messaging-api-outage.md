---
title: '[Resolved] Notice about service outage for the Messaging API'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the Messaging API.
  The issue has now been resolved, but we sincerely apologize for any
  inconvenience that this may have caused.
meta: >-
  {"date":"2021-07-06 00:00 UTC","tags":"Outage report, Messaging
  API","locale":"en"}
path: /en/_partials/news/2021/2021-07-06-messaging-api-outage
__hash__: f9oSZHur4_3TM8VB0GoCVhi_z7eijpuHh_5W0vSeQ4Y
seo:
  title: '[Resolved] Notice about service outage for the Messaging API'
  description: >-
    We'd like to inform you about a service outage regarding the Messaging API.
    The issue has now been resolved, but we sincerely apologize for any
    inconvenience that this may have caused.
---

We'd like to inform you about a service outage regarding the Messaging API. The issue has now been resolved, but we sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

June 30, 2021 from around 12:00 - around 12:12 (UTC+9)

### Cause of the outage

Outage caused by server failures and software malfunctions

### Impact

- [Send push message](/reference/messaging-api/#send-push-message)
- [Send multicast message](/reference/messaging-api/#send-multicast-message)
- [Send reply message](/reference/messaging-api/#send-reply-message)

### Details

During the above time period, messages may not have been actually sent in some requests to the endpoints that succeeded and returned a status code `200`.

Due to this outage, the messages that weren't properly sent even if the API requests succeeded, won't be counted as the LINE Official Account usage fees and the "number of sent messages" that can be confirmed in some way such as the [Get number of sent push messages](/reference/messaging-api/#get-number-of-push-messages) endpoint.

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
