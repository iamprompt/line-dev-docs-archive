---
title: >-
  Changes associated with the integration of LINE@ accounts into LINE Official
  Accounts
navigation: true
description: >-
  With the consolidation of LINE@ account plans into LINE official plans, we
  changed the functionality of the LINE Developers Console and the Messaging API
  as follows:
meta: '{"date":"2019-04-18 00:00 UTC","tags":"Messaging API, Console","locale":"en"}'
path: /en/_partials/news/2019/2019-04-18-bot-redesign
__hash__: x9FvhdUD2Gaf8Wn8wBqW4BtEfswO44TKQWj3qvvjcJY
seo:
  title: >-
    Changes associated with the integration of LINE@ accounts into LINE Official
    Accounts
  description: >-
    With the consolidation of LINE@ account plans into LINE official plans, we
    changed the functionality of the LINE Developers Console and the Messaging
    API as follows:
---

With the [consolidation of LINE@ account plans into LINE official plans](https://linecorp.com/en/pr/news/en/2018/2550){rel="[\"nofollow\"]"}, we changed the functionality of the [LINE Developers Console](/console/) and the Messaging API as follows:

## Changes in the LINE Developers Console

### Type of created accounts

When you create a Messaging API channel in the LINE Developers Console, a LINE Official Account is created instead of a LINE@ account.

For more information, see [Migration of LINE@ accounts](/docs/messaging-api/migrating-line-at/). Existing LINE@ accounts will be migrated to LINE Official Accounts sequentially.

### Privacy policy and terms of use

Now you can set your own privacy policy and terms of use for your app in your LINE Login and Messaging API channels.

In the future, we will add links to your privacy policy and terms of use for your app in the user consent screen of LINE Login or your LINE Official Account.

## Enhanced Messaging API features

Bots associated with new or migrated LINE Official Accounts can use the following features regardless of applied plans:

- [Get the target limit for additional messages](/reference/messaging-api/#get-quota)
- [Get number of messages sent this month](/reference/messaging-api/#get-consumption)
- [Send push message](/reference/messaging-api/#send-push-message)
- [Send multicast message](/reference/messaging-api/#send-multicast-message)
- [Send broadcast message](/reference/messaging-api/#send-broadcast-message)
- [Get number of sent broadcast messages](/reference/messaging-api/#get-number-of-broadcast-messages)

Bots associated with LINE@ accounts cannot use these features depending on applied plans.

For more information, see the [Messaging API reference](/reference/messaging-api/).
