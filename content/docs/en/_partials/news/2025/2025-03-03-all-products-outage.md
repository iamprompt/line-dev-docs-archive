---
title: '[Resolved] Notice about service outage for the LINE Platform'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the LINE Platform.
  The issue has now been resolved. We sincerely apologize for any inconvenience
  that this may have caused.
meta: >-
  {"date":"2025-03-03 00:00 UTC","tags":"outage-report, line-platform,
  line-login, liff, line-mini-app, messaging-api, console","locale":"en"}
path: /en/_partials/news/2025/2025-03-03-all-products-outage
__hash__: kI0PifR3iEW9FGB-X0XiVEDi2MMIFkBwrsNnNgMTT7M
seo:
  title: '[Resolved] Notice about service outage for the LINE Platform'
  description: >-
    We'd like to inform you about a service outage regarding the LINE Platform.
    The issue has now been resolved. We sincerely apologize for any
    inconvenience that this may have caused.
---

We'd like to inform you about a service outage regarding the LINE Platform. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

February 28, 2025 around 18:20 - around 19:24 (UTC+9)

### Cause of the outage

Server failure

### Impact

- Messaging API
- LINE Login
- LIFF/LINE MINI App
- LINE Developers Console

### Details

These are the main impacts per product:

- [Messaging API](#state-20250303-01)
- [LINE Login](#state-20250303-02)
- [LIFF/LINE MINI App](#state-20250303-03)
- [LINE Developers Console](#state-20250303-04)

#### Messaging API

- There were instances where sending webhook events was delayed or didn't work properly.
- Some requests weren't processed properly, resulting in errors with status code 5xx.

Due to this outage, the messages that weren't properly sent even if the API requests succeeded, won't be counted as the LINE Official Account usage fees and the "number of sent messages" that can be confirmed in some way such as the [Get number of sent push messages](/reference/messaging-api/#get-number-of-push-messages) endpoint.

#### LINE Login

- There were instances where LINE Login didn't work per usual.
- Some requests weren't processed properly, resulting in errors with status code 5xx.

#### LIFF/LINE MINI App

- There were instances where LIFF/LINE MINI App couldn't be used per usual.
- Some requests weren't processed properly, resulting in errors with status code 5xx.

#### LINE Developers Console

There were instances where some features of the LINE Developers Console couldn't be used per usual.

  
When an outage occurs, we post a preliminary report on the LINE API Status. For more information, see [Check the availability of the LINE Platform (LINE API Status)](/docs/basics/line-api-status/) in the LINE Platform basics.

We will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
