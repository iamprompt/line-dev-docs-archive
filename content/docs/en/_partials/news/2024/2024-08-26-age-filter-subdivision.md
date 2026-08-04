---
title: >-
  In the Messaging API, you can now use narrowcast messages to filter the
  detailed age range of 50 to 70
navigation: true
description: >-
  In the Messaging API, we've added the following values as conditions for
  filtering the age range of recipients in the demographic filter objects of
  narrowcast messages:
meta: '{"date":"2024-08-26 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2024/2024-08-26-age-filter-subdivision
__hash__: 4UVqNuC8i4M56JeFBmaVrO15ILteJHbTkeauDlPRYQs
seo:
  title: >-
    In the Messaging API, you can now use narrowcast messages to filter the
    detailed age range of 50 to 70
  description: >-
    In the Messaging API, we've added the following values as conditions for
    filtering the age range of recipients in the demographic filter objects of
    narrowcast messages:
---

In the Messaging API, we've added the following values as conditions for filtering the age range of recipients in the [demographic filter objects](/reference/messaging-api/#narrowcast-demographic-filter) of [narrowcast messages](/reference/messaging-api/#send-narrowcast-message):

- `age_55`
- `age_60`
- `age_65`
- `age_70`

Until now, the upper limit was `age_50`, so it wasn't possible to filter ages over 50 in detail. By specifying the added age ranges, you can now filter recipients more flexibly than before.

For example, the following is a demographic filter object that filters by age 50 and older but less than 60:

```json
{
  "type": "age",
  "gte": "age_50",
  "lt": "age_60"
}
```

### LINE Messaging API SDK updates

For more information about the update status of each SDK release related to the above, see the [LINE Messaging API SDKs](/docs/messaging-api/line-bot-sdk/) release notes.
