---
title: '[Resolved] Notice about service outage for the Messaging API'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the Messaging API.
  The issue has now been resolved.
meta: >-
  {"date":"2020-12-22 00:00 UTC","tags":"Outage report, Messaging
  API","locale":"en"}
path: /en/_partials/news/2020/2020-12-22-messaging-api-outage
__hash__: A81RXUX7ScN3jA7kQvQQDqrd1417HPySL3-8uwAsEp0
seo:
  title: '[Resolved] Notice about service outage for the Messaging API'
  description: >-
    We'd like to inform you about a service outage regarding the Messaging API.
    The issue has now been resolved.
---

We'd like to inform you about a service outage regarding the Messaging API. The issue has now been resolved.

We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

December 22, 2020 12:16 - December 22, 2020 13:31 (UTC+9)

### Cause

Server failure.

### Details

Some Messaging API requests weren't being processed properly.

### Affected service

Some of [Send narrowcast message](/reference/messaging-api/#send-narrowcast-message) requests (when the target is specified by audience) weren't being processed properly.

If you use [Get narrowcast message status](/reference/messaging-api/#get-narrowcast-progress-status) to get the status of a narrowcast message, requests may have failed if the "phase" property is `failed` and the "errorCode" property is `1`.

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
