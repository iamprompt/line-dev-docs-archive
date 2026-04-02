---
title: >-
  "Feature for getting statistics per aggregation unit" is now available in the
  Messaging API
navigation: true
description: >-
  "Feature for getting statistics per aggregation unit," which was previously an
  option for corporate customers, is now a feature of the Messaging API and can
  be used by anyone.
meta: '{"date":"2022-09-28 01:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2022/2022-09-28-messaging-api-updated
__hash__: SQ77xSMB4hz-VZBksoYvU3JvWGjBTYB6ilBtI9CzRYw
seo:
  title: >-
    "Feature for getting statistics per aggregation unit" is now available in
    the Messaging API
  description: >-
    "Feature for getting statistics per aggregation unit," which was previously
    an option for corporate customers, is now a feature of the Messaging API and
    can be used by anyone.
---

"Feature for getting statistics per aggregation unit," which was previously an option for corporate customers, is now a feature of the Messaging API and can be used by anyone.

### Overview

This feature enables you to aggregate statistics per unit when sending push messages and multicast messages with the same content to multiple end users.

Previously, [user interaction statistics](/reference/messaging-api/#get-message-event) per request ID have been available for broadcast and narrowcast messages, but statistics hadn't been available for push messages or multicast messages. From now on, by assigning a unit name to the `customAggregationUnits` property when sending the message with push messages or multicast messages, you can get statistics on a per-unit basis.

![Aggregating statistics per unit](/media/news/new_statistics_en.png){className="[\"w-fix-440\"]"}

For more information, see [Get statistics per aggregation unit](/docs/messaging-api/unit-based-statistics-aggregation/) in the Messaging API documentation.

### Available endpoints

The following endpoints are now available in the Messaging API:

- [Get statistics per unit](/reference/messaging-api/#get-statistics-per-unit)
- [Get number of units used this month](/reference/messaging-api/#get-the-number-of-unit-name-types-assigned-during-this-month)
- [Get name list of units used this month](/reference/messaging-api/#get-a-list-of-unit-names-assigned-during-this-month)
