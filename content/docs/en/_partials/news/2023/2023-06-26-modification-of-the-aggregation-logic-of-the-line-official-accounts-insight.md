---
title: We'll modify the aggregation logic of the LINE Official Accounts insight
navigation: true
description: >-
  We'll modify the aggregation logic of the LINE Official Accounts insight. This
  modification will affect the values that can be retrieved from the Insight
  endpoints of the Messaging API.
meta: >-
  {"date":"2023-06-26 00:00 UTC","tags":"messaging-api,
  line-official-account","locale":"en"}
path: >-
  /en/_partials/news/2023/2023-06-26-modification-of-the-aggregation-logic-of-the-line-official-accounts-insight
__hash__: DDwjirxRFiwezZL1R-NwkxAiBKJ9n-o6431OcgkC1m0
seo:
  title: We'll modify the aggregation logic of the LINE Official Accounts insight
  description: >-
    We'll modify the aggregation logic of the LINE Official Accounts insight.
    This modification will affect the values that can be retrieved from the
    Insight endpoints of the Messaging API.
---

We'll modify the aggregation logic of the LINE Official Accounts insight. This modification will affect the values that can be retrieved from the [Insight](/reference/messaging-api/#get-insight) endpoints of the Messaging API.

### Scheduled date of modification

July 10, 2023 - July 28, 2023

The change will be applied to each LINE Official Account on one of the above dates. Values aggregated prior to the modification date won't be affected by this modification.

The content and date of this modification may be subject to change.

### Impact

The change in aggregation logic will affect a value of `blocks` (the number of users blocking the LINE Official Account) that can be retrieved from the following endpoint:

- [Get number of followers](/reference/messaging-api/#get-number-of-followers)

For more information, see [[Notice] Modification of Aggregation Logic of Insight](https://manager.line.biz/announce/20222149?country=JP){rel="[\"nofollow\"]"} (only available in Japanese) in LINE Official Account Manager.
