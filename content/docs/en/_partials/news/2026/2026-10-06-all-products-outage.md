---
title: '[Resolved] Notice about service outage for the LINE Platform'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the LINE Platform.
  The issue has now been resolved. We sincerely apologize for any inconvenience
  that this may have caused.
meta: >-
  {"date":"2026-10-06 00:00 UTC","tags":"outage-report, line-platform,
  line-login, liff, line-mini-app, messaging-api, console","locale":"en"}
path: /en/_partials/news/2026/2026-10-06-all-products-outage
__hash__: RWBR9NZfw_elvsStzJxTbdGwXUHteh9FygJZ9DnOrus
seo:
  title: '[Resolved] Notice about service outage for the LINE Platform'
  description: >-
    We'd like to inform you about a service outage regarding the LINE Platform.
    The issue has now been resolved. We sincerely apologize for any
    inconvenience that this may have caused.
---

We'd like to inform you about a service outage regarding the LINE Platform. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

October 6, 2026 around 17:22 - around 17:30 (UTC+9)

### Cause of the outage

Network failure

### Impact

- Messaging API
- LINE Login
- LIFF/LINE MINI App
- LINE Developers Console

### Details

These are the main impacts per product:

- [Messaging API](#state-20261006-01)
- [LINE Login](#state-20261006-02)
- [LIFF/LINE MINI App](#state-20261006-03)
- [LINE Developers Console](#state-20261006-04)

#### Messaging API

- There were instances where sending webhook events was delayed or didn't work properly.
- Some requests weren't processed properly, resulting in errors with status code 5xx.

Due to this outage, the messages that weren't properly sent even if the API requests succeeded, won't be counted as the LINE Official Account usage fees and the "number of sent messages" that can be confirmed in some way such as the [Get number of sent push messages](/reference/messaging-api/#get-number-of-push-messages) endpoint.

##### Retrying a failed API request

In some APIs, you can safely retry a request while preventing the same request from being accepted in duplicate by using a retry key (`X-Line-Retry-Key`) when an error with status code 5xx occurs or when the request times out.

For more information, see [Retry failed API requests](/docs/messaging-api/retrying-api-request/) and [Specify the retry key always](/docs/messaging-api/retrying-api-request/#apis-with-available-retry-keys) in the Messaging API documentation.

#### LINE Login

There were instances where LINE Login didn't work per usual.

#### LIFF/LINE MINI App

- There were instances where LIFF/LINE MINI App couldn't be used per usual.
- There were instances where service messages weren't sent per usual.

#### LINE Developers Console

There were instances where some features of the LINE Developers Console couldn't be used per usual.

  
When an outage occurs, we post a preliminary report on the LINE API Status. For more information, see [Check the availability of the LINE Platform (LINE API Status)](/docs/basics/line-api-status/) in the LINE Platform basics.

We will continue to improve the quality of our services to prevent future outages. Thank you for your understanding.
