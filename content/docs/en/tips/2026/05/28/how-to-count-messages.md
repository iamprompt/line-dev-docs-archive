---
title: How message counts are calculated in the Messaging API
navigation: true
description: >-
  Running a LINE Official Account means thinking about message delivery costs.
  Each pricing plan comes with a set number of free messages. You may wonder how
  one message is actually counted. This article gives a quick overview.
meta: >-
  {"date":"2026-05-28 00:00
  UTC","tags":"messaging-api","locale":"en","sidebar":false}
path: /en/tips/2026/05/28/how-to-count-messages
__hash__: GTHxT_5RjslNBEKQkLAT6evmcL7HBpRfN4XvNbcSQFY
seo:
  title: How message counts are calculated in the Messaging API
  description: >-
    Running a LINE Official Account means thinking about message delivery costs.
    Each pricing plan comes with a set number of free messages. You may wonder
    how one message is actually counted. This article gives a quick overview.
---

::Tips
# :page-title

  :::display-date{date="2026/05/28" .!mb-20}

  :::

Running a LINE Official Account means thinking about message delivery costs. Each pricing plan comes with a set number of free messages. You may wonder how one message is actually counted. This article gives a quick overview.

## One bubble does NOT equal one message

One common misunderstanding about Messaging API pricing is how message counts are calculated. The number of messages is not based on the number of bubbles or message objects. It is based on the number of requests multiplied by the number of recipients.

With the Messaging API, you can send up to five message objects in a single request. For example, suppose you send a message made up of three bubbles to five users. The figure below shows this case.

![](/media/messaging-api/measure-impressions/message-and-bubbles-en.png){className="[\"bg-border\",\"w-fix-600\"]"}

The count is NOT calculated as "3 bubbles x 5 users = 15 messages". It is calculated as "1 request x 5 users = 5 messages". In other words, using multiple message objects doesn't increase the cost per message.

For reference, [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"} allows up to three bubbles in a single send.

## Points to keep in mind when managing costs

Here are a few things that are useful to know if you're keeping an eye on message costs.

### Only deliverable messages are counted

If you send a message to a user who blocked your LINE Official Account, that message is not counted. The same applies to a user ID that doesn't exist. In other words, only messages that can actually be delivered are counted.

### Reply messages are not counted

Reply messages are not included in the message count for your pricing plan.

## Understand the rules and send smarter

For more information about Messaging API pricing, see [Messaging API pricing](/docs/messaging-api/pricing/) and [LINE Official Account pricing plans](https://www.lycbiz.com/jp/service/line-official-account/plan/){rel="[\"nofollow\"]"} (Only available in Japanese).

By understanding that "sending multiple message objects in a single request does not increase the message count" and that "undelivered messages and reply messages are not counted", you can create richer communication experiences while keeping costs under control. Use these rules together with your pricing plan to choose the best way to send messages.

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
