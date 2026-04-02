---
title: '[Resolved/Updated] Notice about service outage for the Messaging API'
navigation: true
description: ''
meta: >-
  {"date":"2021-07-01 02:00 UTC","tags":"Outage report, Messaging
  API","locale":"en"}
path: /en/_partials/news/2021/2021-07-01-messaging-api-outage
__hash__: 9ovFhsQO01PCy8IF-OS2JV97LQ15aFbftv1OSz4QMrg
seo:
  title: '[Resolved/Updated] Notice about service outage for the Messaging API'
  description: ''
---

::admonition{title="Updated on August 11, 2021" type="note"}
We've updated the [Cause of the outage](#cause-20210701).
::

We'd like to inform you about a service outage regarding the Messaging API. The issue has now been resolved, but we sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

June 30, 2021 from around 12:00 - around 12:12 (UTC+9)

### Cause of the outage

Outage caused by a connection setting change on our cache server

For more information about details of the cause of the outage and measures to prevent recurrence, see [Notice regarding erroneously displayed messages on LINE Official Account](https://linecorp.com/en/security/article/381){rel="[\"nofollow\"]"} in Security & Privacy.

### Impact

- [Send push message](/reference/messaging-api/#send-push-message)
- [Send multicast message](/reference/messaging-api/#send-multicast-message)

::admonition
---
title: This outage affected the sending of only certain messages
type: note
---
Of the endpoints related to sending messages, [Send reply message](/reference/messaging-api/#send-reply-message), [Send narrowcast message](/reference/messaging-api/#send-narrowcast-message), and [Send broadcast message](/reference/messaging-api/#send-broadcast-message) weren't affected by the outage.

Messages sent from the [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"} and the chat function of the LINE Official Account weren't affected either.
::

### Details

During the above time period, a failure occurred in some requests where messages sent from a specific bot (bot A) were displayed in the chat room of another bot (bot B) of the recipient user's LINE app. The messages weren't sent to anyone other than the recipient user.

We have already unsent the messages that were displayed in error. Canceled messages will not be charged.

![unsend message](/media/news/message-unsend-en.png){className="[\"w-fix-320\",\"border\"]"}

The number of bots affected by this outage is very limited, and we will be contacting the administrators of the affected bots (bot A and bot B) individually.

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
