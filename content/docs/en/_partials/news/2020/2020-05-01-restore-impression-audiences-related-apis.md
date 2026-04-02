---
title: Notice about resumption of service for some APIs for 'Audience' and 'Insight'
navigation: true
description: >-
  We announced the outage of APIs for "Audience" and "Insight" on April 22,
  2020. The APIs are now available with a limit.
meta: >-
  {"date":"2020-05-01 00:01 UTC","tags":"Messaging
  API","new":"false","locale":"en"}
path: /en/_partials/news/2020/2020-05-01-restore-impression-audiences-related-apis
__hash__: OsAAvH0qeCSUpSoi3Hl0JdHDaHTR7jpxaLgd48J8Z3Q
seo:
  title: >-
    Notice about resumption of service for some APIs for 'Audience' and
    'Insight'
  description: >-
    We announced the outage of APIs for "Audience" and "Insight" on April 22,
    2020. The APIs are now available with a limit.
---

We [announced the outage of APIs for "Audience" and "Insight" on April 22, 2020](/news/2020/04/22/stop-using-impression-audiences/). The APIs are now available with a limit.

Please note that depending on the delivery date and time of the message, the creation of impression-based regargeting audience may be limited, and a reference value may be returned.

- **Delivery date of the message subject to the limit (JST) : Until March 29, 2020 23:59:59**  
There are no limits.
  - You can create an audience.
  - Normal statistics will be returned.
- **Delivery date of the message subject to the limit (JST) : Between March 30, 2020 00:00:00 and April 29, 2020 23:59:59**  
There are limits.
  - You can't create an audience.
  - Reference values will be returned for `overview.uniqueImpression` and `messages[].impression`.
- **Delivery date of the message subject to the limit (JST) : From April 30, 2020 00:00:00**  
There are limits.
  - You can create an audience. However, if a user opens a message during this time period in a LINE app with a version subject to this limit, the user will not receive a new message sent using the audience.
  - Normal statistics will be returned. However, the statistics will not include the number of times the user with a LINE version subject to the limit opened the messages sent during this period.

For more information, see the following pages:

- [Create audience for impression-based retargeting](/reference/messaging-api/#create-imp-audience-group)
- [Get user interaction statistics](/reference/messaging-api/#get-message-event)

We will continue to improve the quality of the services we provide to our developers and we greatly appreciate your understanding.
