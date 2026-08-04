---
title: '[Resolved] Notice about service outage for the LINE Platform'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the LINE Platform.
  The issue has now been resolved. We sincerely apologize for any inconvenience
  that this may have caused.
meta: >-
  {"date":"2024-02-16 00:00 UTC","tags":"outage-report, line-platform,
  line-login, liff, line-mini-app, messaging-api","locale":"en"}
path: /en/_partials/news/2024/2024-02-16-all-products-outage
__hash__: Dy-jyymey2J-ciLM5eaRW5Ni0IwMQVJBbk3RM671WXY
seo:
  title: '[Resolved] Notice about service outage for the LINE Platform'
  description: >-
    We'd like to inform you about a service outage regarding the LINE Platform.
    The issue has now been resolved. We sincerely apologize for any
    inconvenience that this may have caused.
---

We'd like to inform you about a service outage regarding the LINE Platform. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

February 14, 2024 around 17:00 - around 17:10 (UTC+9)

### Cause of the outage

Server failure

### Impact

- Messaging API
- LINE Login
- LIFF/LINE MINI App
- LINE Developers Console
- Other LINE Platform services corresponding to the following domain names

  - api.line.me
  - access.line.me

### Details

These are the main impacts per product:

- [Messaging API](#state-20240216-01)
- [LINE Login](#state-20240216-02)
- [LIFF/LINE MINI App](#state-20240216-03)
- [LINE Developers Console](#state-20240216-04)

#### Messaging API

Some requests weren't processed properly.

Due to this outage, the messages that weren't properly sent even if the API requests succeeded, won't be counted as the LINE Official Account usage fees and the "number of sent messages" that can be confirmed in some way such as the [Get number of sent push messages](/reference/messaging-api/#get-number-of-push-messages) endpoint.

#### LINE Login

There were instances where LINE Login didn't work per usual.

#### LIFF/LINE MINI App

There were instances where LIFF/LINE MINI App couldn't be used per usual.

#### LINE Developers Console

There were instances where some features of the LINE Developers Console couldn't be used per usual.

  
When an outage occurs, we post a preliminary report on the LINE API Status. For more information, see the news from April 5, 2021, [LINE API Status site for checking service availability opened](/news/2021/04/05/line-api-status/).

We will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
