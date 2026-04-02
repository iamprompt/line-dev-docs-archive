---
title: >-
  Why do I get a 429 Too Many Requests error (You have reached your monthly
  limit.) even though I still have messages available to send for the current
  month?
navigation: true
description: >-
  Even if you have enough messages available to send in the current month, you
  may receive a 429 Too Many Requests error with the message You have reached
  your monthly limit. when you try to send a message while another message is
  being delivered.
meta: >-
  {"date":"2026-01-22 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"en"}
path: /en/_partials/faq/why-do-i-get-429-error-during-message-delivery
__hash__: e7GE4sLdyfLrp6a8N6k8LUmd5tV79P0mtIjYXQH4Z8k
seo:
  title: >-
    Why do I get a 429 Too Many Requests error (You have reached your monthly
    limit.) even though I still have messages available to send for the current
    month?
  description: >-
    Even if you have enough messages available to send in the current month, you
    may receive a 429 Too Many Requests error with the message You have reached
    your monthly limit. when you try to send a message while another message is
    being delivered.
---

Even if you have enough messages available to send in the current month, you may receive a `429 Too Many Requests` error with the message `You have reached your monthly limit.` when you try to send a message while another message is being delivered.

This occurs because, when sending messages via the LINE Official Account Manager or the Messaging API, the number of messages scheduled for delivery is temporarily reserved from the start of the sending process until the actual number of messages is determined. Depending on your message delivery settings, the number of reserved messages may be based on the :glossary-tooltip[[target reach](/glossary/#target-reach)]{glossary-id="target-reach"}, regardless of the actual number of recipients. This can temporarily exhaust your remaining message count.

If your remaining message count for the current month is temporarily depleted due to this reservation, sending another message may fail. Once the delivery in progress is complete and the number of messages sent is confirmed, you can try sending the message again if you still have messages available for the current month.

For more information, see [Note regarding the number of remaining messages to be sent during the current month](/reference/messaging-api/#send-narrowcast-message-cautions) in the Messaging API reference.
