---
title: '[Resolved] Notice about service outage for the Messaging API'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the Messaging API.
  The issue has now been resolved. We sincerely apologize for any inconvenience
  that this may have caused.
meta: >-
  {"date":"2022-04-01 01:00 UTC","tags":"outage-report,
  messaging-api","locale":"en"}
path: /en/_partials/news/2022/2022-04-01-messaging-api-outage
__hash__: bV-7T-OwRiUEAO_I8k8vlSQ-YzQHGwaQbTXKfl471M0
seo:
  title: '[Resolved] Notice about service outage for the Messaging API'
  description: >-
    We'd like to inform you about a service outage regarding the Messaging API.
    The issue has now been resolved. We sincerely apologize for any
    inconvenience that this may have caused.
---

We'd like to inform you about a service outage regarding the Messaging API. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

March 30, 2022 around 14:47 - around 20:51 (UTC+9)

### Cause of the outage

Server failure

### Impact

[Get bot info](/reference/messaging-api/#get-bot-info)

### Details

If developers hasn't set a profile image for the bot, the profile image URL (`pictureUrl`) is not included in the response when you're using the target endpoint.

However, during the stated date and time, when you get a bot's basic information at the target endpoint, even if developers haven't set a profile image for the bot, the response was returning `https://profile.line-scdn.net` as the value of the profile image URL (`pictureUrl`).

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
