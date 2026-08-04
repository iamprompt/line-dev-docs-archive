---
title: '[Resolved] Notice about service outage for the Messaging API'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the Messaging API.
  The issue has now been resolved.
meta: >-
  {"date":"2021-06-09 01:00 UTC","tags":"Outage report, Messaging
  API","locale":"en"}
path: /en/_partials/news/2021/2021-06-09-messaging-api-outage
__hash__: XCYhtBrDIwAYJFgzf6g6KMamu4f71QA_mJhtLIWscgQ
seo:
  title: '[Resolved] Notice about service outage for the Messaging API'
  description: >-
    We'd like to inform you about a service outage regarding the Messaging API.
    The issue has now been resolved.
---

We'd like to inform you about a service outage regarding the Messaging API. The issue has now been resolved.

We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

June 9, 2021 around 16:05 - around 16:55 (UTC+9)

### Cause of the outage

Server failure

### Impact

Sending text messages that include LINE emojis (`emojis` property)

### Details

During the above time period, requests to send [text messages](/reference/messaging-api/#text-message) containing LINE emojis (`emojis` property) couldn't be processed correctly, resulting in an error with status code 40x.

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
