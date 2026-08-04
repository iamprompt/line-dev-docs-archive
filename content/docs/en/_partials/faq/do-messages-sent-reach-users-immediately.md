---
title: Do messages sent using the Messaging API reach users immediately?
navigation: true
description: Messages sent using the Messaging API may take some time to reach the user.
meta: >-
  {"date":"2023-06-15 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"en"}
path: /en/_partials/faq/do-messages-sent-reach-users-immediately
__hash__: 74HN1MHSVWGRTWrvXNXkQTKI7GbYa3DCtNeTG52BeDY
seo:
  title: Do messages sent using the Messaging API reach users immediately?
  description: Messages sent using the Messaging API may take some time to reach the user.
---

Messages sent using the Messaging API may take some time to reach the user.

Messaging requests to each endpoint of the Messaging API are processed asynchronously. For this reason, if a LINE Official Account has many friends, or if there are a large number of requests from other LINE Official Accounts at the same time, it may take some time for the message sending process to be completed.
