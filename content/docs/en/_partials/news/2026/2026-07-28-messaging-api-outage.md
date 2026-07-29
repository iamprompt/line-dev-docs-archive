---
title: '[Resolved/Updated] Notice about service outage for the LINE Platform'
navigation: true
description: ''
meta: >-
  {"date":"2026-07-28 00:00 UTC","tags":"outage-report, line-platform,
  line-login, liff, line-mini-app, messaging-api, console","locale":"en"}
path: /en/_partials/news/2026/2026-07-28-messaging-api-outage
__hash__: vk4F9XU7JwgujXRohBNGQVnJnxWKLzW9arC8trMNimI
seo:
  title: '[Resolved/Updated] Notice about service outage for the LINE Platform'
  description: ''
---

::admonition{title="Updated on July 29, 2026" type="note"}
We've updated the [Date and time of outage](#messaging-api-outage-date-20260728) and [Details](#messaging-api-outage-details-20260728) following the resolution of the issue.
::

::admonition{title="Updated on July 28, 2026" type="note"}
We've updated the [Impact](#messaging-api-outage-impact-20260728) and [Details](#messaging-api-outage-details-20260728).
::

We'd like to inform you about a service outage regarding the LINE Platform. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

## Date and time of outage

July 28, 2026 around 16:46 - around 21:11 (UTC+9)

## Cause of the outage

Under investigation

We will provide an update on the cause of the outage once the investigation is complete.

## Impact

- Messaging API
- LINE Login
- LIFF/LINE MINI App
- LINE Developers Console

## Details

These are the main impacts per product:

- [Messaging API](#outage-state-20260728-01)
- [LINE Login](#outage-state-20260728-02)
- [LIFF/LINE MINI App](#outage-state-20260728-03)
- [LINE Developers Console](#outage-state-20260728-04)

### Messaging API

- There were instances where sending webhook events was delayed or didn't work properly.
- Some requests weren't processed properly, resulting in errors with status code 5xx.

### LINE Login

There were instances where adding a LINE Official Account as a friend or unblocking it using the [add friend option](/docs/line-login/link-a-bot/) didn't work properly.

### LIFF/LINE MINI App

- There were instances where adding a LINE Official Account as a friend or unblocking it using the [add friend option](/docs/line-login/link-a-bot/) or the [`liff.requestFriendship()`](/reference/liff/#request-friendship) method didn't work properly.
- There were instances where [service messages](/docs/line-mini-app/develop/service-messages/) were delayed or weren't sent properly.

### LINE Developers Console

There were instances where channel settings couldn't be changed properly.

  
When an outage occurs, we post a preliminary report on the LINE API Status. For more information, see [Check the availability of the LINE Platform (LINE API Status)](/docs/basics/line-api-status/) in the LINE Platform basics.

We will continue to improve the quality of our services to prevent future outages. Thank you for your understanding.
