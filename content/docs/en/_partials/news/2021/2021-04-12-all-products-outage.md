---
title: '[Resolved/Updated] Notice about service outage for LINE Platform'
navigation: true
description: ''
meta: >-
  {"date":"2021-04-12 00:00 UTC","tags":"Outage report, LINE
  Platform","locale":"en"}
path: /en/_partials/news/2021/2021-04-12-all-products-outage
__hash__: ZOroq0z_iOyQhpqJmKj5hmAP50m8mIUFxsWKITm1mso
seo:
  title: '[Resolved/Updated] Notice about service outage for LINE Platform'
  description: ''
---

::admonition{title="Updated on April 13, 2021" type="note"}
We've updated the main impacts per product under [Details](#state).
::

We'd like to inform you about a service outage regarding the LINE Platform. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

April 12, 2021 around 15:10 - 16:01 (UTC+9)

### Cause of the outage

Facility failure

### Impact

- Messaging API
- LINE Login
- LIFF
- Other general functions provided by the LINE Platform

### Details

Due to a facility failure, all products provided by LINE Developers may not have been available during the above period.

These are the main impacts per product:

- [Messaging API](#state-01)
- [LINE Login](#state-02)
- [LIFF/LINE MINI App](#state-03)
- [LINE Developers Console](#state-04)

#### Messaging API

- API request succeeded (HTTP status code 200 returned), but messages sent via the Messaging API were significantly delayed or didn't send per usual.
- Webhook event was significantly delayed or didn't send per usual.

Due to this outage, messages that weren't properly sent, even if the API request was successful, won't count towards the "number of sent messages" that can be confirmed in some way such as the [Get number of sent push messages](/reference/messaging-api/#get-number-of-push-messages) endpoint, nor will there be any LINE Official Account usage fees.

#### LINE Login

- There were instances where LINE Login didn't work per usual.

#### LIFF/LINE MINI App

- There were instances where LIFF/LINE MINI App couldn't be used per usual.
- There were instances where `liff.shareTargetPicker()`couldn't be used per usual.
- There were instances where service messages weren't sent per usual.

#### LINE Developers Console

- There were instances where Messaging API channels couldn't be created.

  
LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
