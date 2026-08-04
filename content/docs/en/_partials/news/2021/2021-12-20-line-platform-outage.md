---
title: '[Resolved] Notice about service outage of the LINE Platform'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the LINE Platform.
  The issue has now been resolved.
meta: >-
  {"date":"2021-12-20 00:00 UTC","tags":"Outage report, LINE Platform, Messaging
  API, LINE Login, LIFF, LINE MINI App","locale":"en"}
path: /en/_partials/news/2021/2021-12-20-line-platform-outage
__hash__: sVXXZumzR1QbdWKJ776MxSeHhzMq0r5hBIQ7zoIRyGY
seo:
  title: '[Resolved] Notice about service outage of the LINE Platform'
  description: >-
    We'd like to inform you about a service outage regarding the LINE Platform.
    The issue has now been resolved.
---

We'd like to inform you about a service outage regarding the LINE Platform. The issue has now been resolved.

We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

1. December 19, 2021 around 18:00 - 18:46 (UTC+9)
2. December 19, 2021 around 21:20 - 22:26 (UTC+9)

### Cause of the outage

Server failure

### Impact

- Messaging API
- LINE Login
- LIFF/LINE MINI App

### Details

In some LINE Official Accounts, adding and unblocking friends using the [bot link](/docs/line-login/link-a-bot/) feature didn't work properly.

Also, some requests for getting friendship status with the LINE Official Account weren't being processed properly and caused errors with status code 5xx.

These are the main impacts per product:

- [Messaging API](#state-20211220-01)
- [LINE Login](#state-20211220-02)
- [LIFF/LINE MINI App](#state-20211220-03)

#### Messaging API

- Some requests weren't processed properly, resulting in errors with status code 5xx.

#### LINE Login

- [Add a LINE Official Account as a friend when logged in (bot link)](/docs/line-login/link-a-bot/)
- [Get friendship status](/reference/line-login/#get-friendship-status)

#### LIFF/LINE MINI App

- [liff.getFriendship()](/reference/liff/#get-friendship)

  
LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
