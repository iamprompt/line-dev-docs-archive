---
title: Get statistics of LINE notification messages
navigation: true
description: >-
  Learn how to get statistics for LINE notification messages by assigning a unit
  name when sending a message.
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/partner-docs/line-notification-messages/statistics
__hash__: uHaiFMsHDao4Q2YFv81kxo1VveW5IYH0EbKMtLXd0FI
seo:
  title: Get statistics of LINE notification messages
  description: >-
    Learn how to get statistics for LINE notification messages by assigning a
    unit name when sending a message.
---

# :page-title

:markdown-controls::admonition
---
title: Use of optional functions requires an application
type: note
---
Only corporate users who have submitted the required applications can use the functions described in this document. To use these functions with your LINE Official Account, contact your sales representative or contact [our Sales partners](https://www.lycbiz.com/jp/partner/sales/){rel="[\"nofollow\"]"}.
::

## Overview

With LINE notification messages (template) and LINE notification messages (flexible), you can get statistics per unit by specifying a unit name when sending a message.

For more information about the statistics you can get, unit name limits, and how to get statistics, see [Get statistics of sent messages](/docs/messaging-api/unit-based-statistics-aggregation/) in the Messaging API documentation.

## Specify a unit name

When sending a LINE notification message, specify a unit name in the `customAggregationUnits` property. For more information about how to specify a unit name, see the following sections in the LINE notification messages API reference:

- [Send a LINE notification message (template)](/reference/line-notification-messages/#send-line-notification-message-template)
- [Send a LINE notification message (flexible)](/reference/line-notification-messages/#send-line-notification-message-flexible)

## Notes on specifying a unit name for LINE notification messages

When specifying a unit name for LINE notification messages, note the following two points:

- [Use the same unit name consistently for LINE notification messages with the same purpose](#use-the-same-unit-name-for-the-same-purpose)
- [Statistics are updated after the message is actually sent](#statistics-are-aggregated-when-the-message-is-sent)

### Use the same unit name consistently for LINE notification messages with the same purpose

To protect user privacy, statistics on individual user interactions are `null` in cases such as when the aggregated statistical value is less than 20. Because each LINE notification message is sent to one user, statistics are more likely to be `null` when messages with the same unit name are sent to only a small number of users or when the aggregation period is short.

Consider consistently using the same unit name for LINE notification messages with the same purpose and checking statistics over a longer period, such as weekly or monthly. For more information about the conditions under which statistics are `null`, see [Notes on aggregated statistics](/docs/messaging-api/unit-based-statistics-aggregation/#notes-about-message-statistics) in the Messaging API documentation.

### Statistics are updated after the message is actually sent

For LINE notification messages, statistics and unit name information are updated as follows when the message is actually sent to the user, rather than when the request to send the message is made using the API:

- Updates to statistics begin and continue for 14 days (1,209,600 seconds).
- The specified unit name is counted toward the number of unit name types assigned during the current month.
- The specified unit name is included in the list of unit names assigned during the current month.

For example, if the user's [LINE notification message reception settings are "not set"](/docs/partner-docs/line-notification-messages/flow-when-receiving-message/#user-consent-flow-for-receiving-line-notification-messages-1), the message is sent after the user agrees to receive LINE notification messages. In this case, the specified unit name isn't reflected in the results of the [Get the number of unit name types assigned during this month](/reference/messaging-api/#get-the-number-of-unit-name-types-assigned-during-this-month) and [Get a list of unit names assigned during this month](/reference/messaging-api/#get-a-list-of-unit-names-assigned-during-this-month) endpoints until the message is actually sent.
