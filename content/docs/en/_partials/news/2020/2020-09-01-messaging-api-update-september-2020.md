---
title: Messaging API update for September 2020
navigation: true
description: We've added new features to the Messaging API.
meta: '{"date":"2020-09-01 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2020/2020-09-01-messaging-api-update-september-2020
__hash__: NH_HnEzCe_0C7pJb_D8qkxxkhHdiTAEw-Ky2kvI0OhE
seo:
  title: Messaging API update for September 2020
  description: We've added new features to the Messaging API.
---

We've added new features to the Messaging API.

These are the features added in this update:

- [Narrowcast messages can now be sent within the maximum number of messages that can be delivered](#september-upToRemainingQuota)
- [The maximum size of JSON data that defines a bubble is 30 KB](#september-bubble)

### Narrowcast messages can now be sent within the maximum number of messages that can be delivered

The `limit.upToRemainingQuota` property has been added to narrowcast messages.

By specifying this property when delivering a narrowcast message, you can send the message within the maximum number of messages that can be delivered.

::admonition
---
title: What is the benefit of using the limit.upToRemainingQuota property?
type: tip
---
If you try to send narrowcast messages that exceed the maximum number of messages that can be delivered, the delivery will fail.

For this reason, it was necessary to specify the maximum number of messages to send before sending narrowcast messages.

For example, if you can send up to 750 messages in a month, you'll send them with the `limit.max` property set to 750.

However, if you set the `limit.upToRemainingQuota` property to `true`, even if the number of messages to be sent exceeds the maximum number of messages that can be sent, the message won't fail and will automatically be sent within the limit.

The advantage of this property is that it automatically delivers within the maximum number of targets without having to check how many messages you can still send.

The distribution targets will be randomly selected.
::

For more information, see the `limit.upToRemainingQuota` property in the [Send narrowcast message](/reference/messaging-api/#send-narrowcast-message) section of the Messaging API reference.

For more information on the maximum number of messages that can be delivered, see [Messaging API pricing](/docs/messaging-api/overview/#line-official-account-plan).

### The maximum size of JSON data that defines a bubble is 30 KB

The maximum size of JSON data that defines a bubble in Flex Messages has changed.

| Subject      | Before change | After change |
| ------------ | ------------- | ------------ |
| Maximum size | 10KB          | 30KB         |

For more information about Flex Message bubble containers, see [Bubble](/reference/messaging-api/#bubble) in the Messaging API reference.
