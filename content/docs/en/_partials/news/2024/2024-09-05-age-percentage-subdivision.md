---
title: >-
  Messaging API now provides statistics on the percentage of friends between the
  ages of 50 and 70
navigation: true
description: >-
  In the Messaging API, we've added the following values as the percentage of
  each age group of your LINE Official Account's friends that you can get by
  using the Get friend demographics endpoint:
meta: '{"date":"2024-09-05 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2024/2024-09-05-age-percentage-subdivision
__hash__: paNgTz9-VUVI0joquoSurkCoRlcEW-g2UYubkqi1YpA
seo:
  title: >-
    Messaging API now provides statistics on the percentage of friends between
    the ages of 50 and 70
  description: >-
    In the Messaging API, we've added the following values as the percentage of
    each age group of your LINE Official Account's friends that you can get by
    using the Get friend demographics endpoint:
---

In the Messaging API, we've added the following values as the percentage of each age group of your LINE Official Account's friends that you can get by using the [Get friend demographics](/reference/messaging-api/#get-demographic) endpoint:

- `from50to54`
- `from55to59`
- `from60to64`
- `from65to69`
- `from70`

Previously, we've aggregated the percentage of friends who are 50 and older as a single value, `from50`. With this change, you can now get statistics on the percentage of friends between the ages of 50 and 70.

We'll continue to include `from50` in the response as a value that aggregates the percentage of friends who are 50 and older.

### LINE Messaging API SDK updates

For more information about the update status of each SDK release related to the above, see the [LINE Messaging API SDKs](/docs/messaging-api/line-bot-sdk/) release notes.
