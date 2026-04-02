---
title: '[Resolved] Notice about service outage for the LINE Platform'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the LINE Platform.
  The issue has now been resolved. We sincerely apologize for any inconvenience
  that this may have caused.
meta: >-
  {"date":"2024-11-12 02:00 UTC","tags":"outage-report, line-platform,
  line-login, liff, line-mini-app, messaging-api","locale":"en"}
path: /en/_partials/news/2024/2024-11-12-line-platform-outage
__hash__: BYBDF91VfEy_BZRzLIlTRwWQpOPHqFfw4LDbzvpjh9A
seo:
  title: '[Resolved] Notice about service outage for the LINE Platform'
  description: >-
    We'd like to inform you about a service outage regarding the LINE Platform.
    The issue has now been resolved. We sincerely apologize for any
    inconvenience that this may have caused.
---

We'd like to inform you about a service outage regarding the LINE Platform. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

November 12, 2024 around 10:23 - around 10:26 (UTC+9)

### Cause of the outage

Server failure

### Impact

- Messaging API
- LINE Login
- LIFF/LINE MINI App

### Details

These are the main impacts per product:

- [Messaging API](#outage-state-20241112-01)
- [LINE Login](#outage-state-20241112-02)
- [LIFF/LINE MINI App](#outage-state-20241112-03)

#### Messaging API

Some requests to each endpoint weren't processed properly, resulting in errors such as status code 5xx.

Due to this outage, the messages that weren't properly sent even if the API requests succeeded, won't be counted as the LINE Official Account usage fees and the "number of sent messages" that can be confirmed in some way such as the [Get number of sent push messages](/reference/messaging-api/#get-number-of-push-messages) endpoint.

#### LINE Login

- There were instances where the LINE Login didn't work per usual.
- Some requests to each endpoint weren't processed properly, resulting in errors such as status code 5xx.

#### LIFF/LINE MINI App

- There were instances where LIFF/LINE MINI App couldn't be used per usual.
- Some requests to each endpoint weren't processed properly, resulting in errors such as status code 5xx.

  
We will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
