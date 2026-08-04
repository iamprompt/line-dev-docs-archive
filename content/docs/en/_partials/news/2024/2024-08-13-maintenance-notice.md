---
title: Maintenance notice for the LINE Platform
navigation: true
description: >-
  Maintenance is scheduled on the LINE Platform. We sincerely apologize for any
  inconvenience that this may cause and thank you for your understanding.
meta: >-
  {"date":"2024-08-13 00:00 UTC","tags":"maintenance, channel-access-token,
  messaging-api, line-login, liff, line-mini-app,
  options-for-corporate-customers, console","locale":"en"}
path: /en/_partials/news/2024/2024-08-13-maintenance-notice
__hash__: 4K_bRXbC_hzWjvpOpg2YdnBCcD_BH1hTPVN5qx3yDeE
seo:
  title: Maintenance notice for the LINE Platform
  description: >-
    Maintenance is scheduled on the LINE Platform. We sincerely apologize for
    any inconvenience that this may cause and thank you for your understanding.
---

Maintenance is scheduled on the LINE Platform. We sincerely apologize for any inconvenience that this may cause and thank you for your understanding.

### Date and time of maintenance

August 28, 2024 around 5:00 - around 6:00 (UTC+9)

Note that the date and time of maintenance are subject to change without notice.

### Impact

During the maintenance period, the system will be unavailable for several minutes multiple times, so the following operations may not be possible for each product. Note that operations other than those listed below can be operated even during maintenance.

- [Channel access token](#impact-channel-access-token-20240813)
- [Messaging API](#impact-messaging-api-20240813)
- [LINE Login / LIFF / LINE MINI App](#impact-liff-20240813)
- [Options for corporate customers](#impact-options-for-corporate-customers-20240813)
- [LINE Developers Console](#impact-console-20240813)

#### Channel access token

- Create a [channel access token](/docs/basics/channel-access-token/)

#### Messaging API

- Execution of the Messaging API endpoints (`api.line.me/v2/bot/*` and `api-data.line.me/v2/bot/*`)
- Receive webhook events  
Webhook events may be delayed or lost.

#### LINE Login / LIFF / LINE MINI App

- All login attempts
- Launch LIFF apps and LINE MINI Apps

#### Options for corporate customers

- [Send LINE notification message](/reference/partner-docs/#send-line-notification-message)
- [Get number of sent LINE notification messages](/reference/partner-docs/#get-number-of-sent-line-notification-messages)

#### LINE Developers Console

- Create a [channel](/docs/line-developers-console/overview/#channel), change settings and edit roles
