---
title: mode property added to Messaging API webhook events
navigation: true
description: We've added the mode property to all Messaging API webhook events.
meta: '{"date":"2019-12-17 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2019/2019-12-17-mode-property-for-webhook
__hash__: SnXky79_9qZF6Bn4zPhJZBTODcyolRxO0jQjLUxA7-c
seo:
  title: mode property added to Messaging API webhook events
  description: We've added the mode property to all Messaging API webhook events.
---

We've added the `mode` property to all Messaging API webhook events.

The `mode` property is necessary for the *channel multiplexing* feature (under development). Now, all existing webhook events contain `"mode": "active"`.

The `mode` property's value can change to `standby` if the channel administrator starts using *channel multiplexing*. The value of `mode` never automatically changes to `standby`.

Learn more about the `mode` property by reading about the [Common properties](/reference/messaging-api/#common-properties) of webhook events in the Messaging API reference.
