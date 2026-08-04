---
title: '[Resolved/Updated] Notice about service outage of the Messaging API'
navigation: true
description: ''
meta: >-
  {"date":"2024-10-18 00:00 UTC","tags":"outage-report,
  messaging-api","locale":"en"}
path: /en/_partials/news/2024/2024-10-18-messaging-api-outage
__hash__: bZceARrvxuNoZc5H9WONSfIP5uhaYQMCFpXCstFSh6g
seo:
  title: '[Resolved/Updated] Notice about service outage of the Messaging API'
  description: ''
---

::admonition{title="Updated on October 28, 2024" type="note"}
We've updated the [Date](#date-20241018) and [Details](#details-20241018).
::

We'd like to inform you about a service outage regarding the Messaging API. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

### Date

October 4, 2024 - October 25, 2024

### Cause of the outage

Server failure

### Impact

- [Get number of messages sent this month](/reference/messaging-api/#get-consumption)
- [Get number of sent reply messages](/reference/messaging-api/#get-number-of-reply-messages)
- [Get number of sent push messages](/reference/messaging-api/#get-number-of-push-messages)
- [Get number of sent multicast messages](/reference/messaging-api/#get-number-of-multicast-messages)
- [Get number of sent broadcast messages](/reference/messaging-api/#get-number-of-broadcast-messages)
- [Get number of message deliveries](/reference/messaging-api/#get-number-of-delivery-messages)
- [Get number of sent LINE notification messages](/reference/partner-docs/#get-number-of-sent-line-notification-messages) (Options for corporate customers)

### Details

For the endpoints related to retrieving the number of messages shown in the above impact, an issue was occurred in which the number of messages from October 4, 2024 to October 15, 2024 is doubled for some messages sent from some accounts. The data has been fixed and the correct number of messages can now be retrieved.

For accounts affected by this issue, the number of messages sent was also affected, so the maximum number of messages that could be sent may be reached and messages couldn't be sent. In this case, the `429 Too Many Requests` error occured when sending a message.

This issue won't cause in excessive charges for LINE Official Accounts.

We'll continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
