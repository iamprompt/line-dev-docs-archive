---
title: '[Updated] Messaging API maintenance notice'
navigation: true
description: ''
meta: >-
  {"date":"2021-07-20 01:00 UTC","tags":"Maintenance, Messaging API, Options for
  corporate customers","locale":"en"}
path: /en/_partials/news/2021/2021-07-20-messaging-api-maintenance
__hash__: BvF_LKXFfCgD9oedzyXAS61ALy4jfG1xoO3wjBZPAYQ
seo:
  title: '[Updated] Messaging API maintenance notice'
  description: ''
---

::admonition{title="Updated on August 6, 2021" type="note"}
We've added a note under [Getting the number of messages sent on the previous day will be slower than usual](#impact-20210720-2).
::

Maintenance will be performed on the Messaging API. We sincerely apologize for any inconvenience that this may cause and thank you for your understanding.

### Date and time of maintenance

August 5, 2021 1:00 - 3:00 (UTC+9)

Note that the end time of maintenance may change without notice.

### Impact

::admonition{title="Updated on July 26, 2021" type="note"}
The following endpoint, which was originally mentioned as part of the scope of impact, won't be affected by the maintenance. You'll retrieve the narrowcast message status as usual during the maintenance.

- [Get narrowcast message status](/reference/messaging-api/#get-narrowcast-progress-status)
::

The maintenance will affect:

1. ~~Message status won't be updated during maintenance~~
2. [Getting the number of messages sent on the previous day will be slower than usual](#impact-20210720-2)

#### Getting the number of messages sent on the previous day will be slower than usual

::admonition{title="Updated on August 6, 2021" type="note"}
We've completed counting sent messages. Now you can also retrieve the number of sent messages from August 4, 2021 and August 5, 2021.
::

::admonition{title="Updated on August 5, 2021" type="note"}
As of 15:00, August 5, 2021, the "Number of messages sent on the previous day" is not yet available due to the time required for counting after the maintenance. We will notify you again after counting is complete.
::

The number of messages sent on the previous day will be counted after the maintenance is complete. Therefore, you won't be able to get the number of messages sent on the previous day until several hours after the end of the maintenance.

If the status of the counting process (`status` property) is `unready`,  message counting is still in progress. Wait a while before making a request again.

- [Get number of sent reply messages](/reference/messaging-api/#get-number-of-reply-messages)
- [Get number of sent push messages](/reference/messaging-api/#get-number-of-push-messages)
- [Get number of sent multicast messages](/reference/messaging-api/#get-number-of-multicast-messages)
- [Get number of sent broadcast messages](/reference/messaging-api/#get-number-of-broadcast-messages)
- [Get number of message deliveries](/reference/messaging-api/#get-number-of-delivery-messages)
- Get message delivery result using mobile advertising ID (Options for corporate customers)
- [Get result of message delivery using phone number](/reference/partner-docs/#get-phone-audience-match) (Options for corporate customers)
