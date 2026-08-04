---
title: >-
  If I send a push message with multiple message objects (for example, 4) in a
  single request to a group chat or multi-person chat with multiple people (for
  example, 5 people), how many messages will be counted?
navigation: true
description: >-
  The number of messages is counted by the number of people to whom the message
  was sent. In this example, if there are five people in the group chat or
  multi-person chat where you sent the message, the number of messages counted
  is five. The number of message objects specified in a single request doesn't
  affect the number of messages sent.
meta: >-
  {"date":"2021-06-21 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"en"}
path: >-
  /en/_partials/faq/what-is-the-number-of-messages-sent-when-sending-a-message-to-a-group-or-room
__hash__: FWSYlid9cqZazPJit_tT91iKkiBAW_UdqZVLjKoTzqw
seo:
  title: >-
    If I send a push message with multiple message objects (for example, 4) in a
    single request to a group chat or multi-person chat with multiple people
    (for example, 5 people), how many messages will be counted?
  description: >-
    The number of messages is counted by the number of people to whom the
    message was sent. In this example, if there are five people in the group
    chat or multi-person chat where you sent the message, the number of messages
    counted is five. The number of message objects specified in a single request
    doesn't affect the number of messages sent.
---

The number of messages is counted by the number of people to whom the message was sent. In this example, if there are five people in the group chat or multi-person chat where you sent the message, the number of messages counted is five. The number of [message objects](/reference/messaging-api/#message-objects) specified in a single request doesn't affect the number of messages sent.

For message count when you send a message to a user who doesn't receive the message, see [If I send a message to a user who doesn't receive the message, is it still counted as one message?](#is-an-invalid-user-counted-to-the-number-of-messages-sent).

For more information on pricing, see [Messaging API pricing](/docs/messaging-api/pricing/).
