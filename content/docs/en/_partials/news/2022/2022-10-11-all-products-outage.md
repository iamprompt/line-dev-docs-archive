---
title: '[Resolved] Notice about service outage for the LINE Platform'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the LINE Platform.
  The issue has now been resolved. We sincerely apologize for any inconvenience
  that this may have caused.
meta: >-
  {"date":"2022-10-11 01:00 UTC","tags":"Outage report, LINE Platform, Messaging
  API, LINE Login, LIFF, LINE MINI App","locale":"en"}
path: /en/_partials/news/2022/2022-10-11-all-products-outage
__hash__: 6Nb3FTU8GtGvbCLt7xPKBPM3G9wGUH7zx8e-5QLQFt4
seo:
  title: '[Resolved] Notice about service outage for the LINE Platform'
  description: >-
    We'd like to inform you about a service outage regarding the LINE Platform.
    The issue has now been resolved. We sincerely apologize for any
    inconvenience that this may have caused.
---

We'd like to inform you about a service outage regarding the LINE Platform. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

October 8, 2022 around 5:51 - 6:45 (UTC+9)

### Cause of the outage

Server failure

### Impact

- Messaging API
- LINE Login
- LIFF/LINE MINI App
- LINE Developers Console

### Details

These are the main impacts per product:

- [Messaging API](#state-20221011-01)
- [LINE Login](#state-20221011-02)
- [LIFF/LINE MINI App](#state-20221011-03)
- [LINE Developers Console](#state-20221011-04)

#### Messaging API

- Some requests weren't processed properly, resulting in errors with status code 5xx.
- There were instances where sending webhook events was delayed or didn't work properly.
- Rich menus may not have been actually linked or unlinked to users in some requests to the endpoints that succeeded and returned a status code 202 when making a request to the following endpoints.

  - [Link rich menu to multiple users](/reference/messaging-api/#link-rich-menu-to-users)
  - [Unlink rich menus from multiple users](/reference/messaging-api/#unlink-rich-menu-from-users)
- Messages may not have been actually sent in some requests to the endpoints that succeeded and returned a status code 200 when making a request to the following endpoints.

  - [Send push message](/reference/messaging-api/#send-push-message)
  - [Send reply message](/reference/messaging-api/#send-reply-message)

Due to this outage, the messages that weren't properly sent even if the API requests succeeded, won't be counted as the LINE Official Account usage fees and the "number of sent messages" that can be confirmed in some way such as the [Get number of sent push messages](/reference/messaging-api/#get-number-of-push-messages) endpoint.

#### LINE Login

- There were instances where LINE Login didn't work per usual.

#### LIFF/LINE MINI App

- There were instances where LIFF/LINE MINI App couldn't be used per usual.

#### LINE Developers Console

- There were instances where some features of the LINE Developers Console couldn't be used per usual.

  
When an outage occurs, we post a preliminary report on the LINE API Status. For more information, see the news from April 5, 2021, [LINE API Status site for checking service availability opened](/news/2021/04/05/line-api-status/).

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
