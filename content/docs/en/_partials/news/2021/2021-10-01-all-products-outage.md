---
title: '[Resolved] Notice about service outage for LINE Platform'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the LINE Platform.
  The issue has now been resolved. We sincerely apologize for any inconvenience
  that this may have caused.
meta: >-
  {"date":"2021-10-01 01:00 UTC","tags":"Outage report, LINE Platform, Messaging
  API, LINE Login, LIFF, LINE MINI App","locale":"en"}
path: /en/_partials/news/2021/2021-10-01-all-products-outage
__hash__: CmWpVJTB2oA3pAyRByfHEZI__49WShkjR5yilOdb9Sc
seo:
  title: '[Resolved] Notice about service outage for LINE Platform'
  description: >-
    We'd like to inform you about a service outage regarding the LINE Platform.
    The issue has now been resolved. We sincerely apologize for any
    inconvenience that this may have caused.
---

We'd like to inform you about a service outage regarding the LINE Platform. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

October 1, 2021 around 9:45 - 9:49 (UTC+9)

### Cause of the outage

Network failure.

### Impact

- Messaging API
- LINE Login
- LIFF/LINE MINI App

### Details

These are the main impacts per product:

- [Messaging API](#state-20211001-01)
- [LINE Login](#state-20211001-02)
- [LIFF/LINE MINI App](#state-20211001-03)

#### Messaging API

- Some requests weren't processed properly, resulting in errors with status code 5xx.
- There were instances where sending webhook events was delayed or didn't work properly.
- Messages may not have been actually sent in some requests to the endpoints that succeeded and returned a status code 200 when making a request to the following endpoints.

  - [Send push message](/reference/messaging-api/#send-push-message)
  - [Send reply message](/reference/messaging-api/#send-reply-message)

Due to this outage, the messages that weren't properly sent even if the API requests succeeded, won't be counted as the LINE Official Account usage fees and the "number of sent messages" that can be confirmed in some way such as the [Get number of sent push messages](/reference/messaging-api/#get-number-of-push-messages) endpoint.

#### LINE Login

- There were instances where LINE Login didn't work per usual.

#### LIFF/LINE MINI App

- There were instances where LIFF/LINE MINI App couldn't be used per usual.
- There were instances where service messages weren't sent per usual.

  
LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
