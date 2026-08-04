---
title: >-
  If I send multiple messages to the same user with the Messaging API, in what
  order will the messages be displayed?
navigation: true
description: >-
  The order in which messages are displayed depends on how the messages are
  sent.
meta: >-
  {"date":"2023-01-05 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"en"}
path: /en/_partials/faq/what-order-are-messages-displayed
__hash__: bfAGZWuWOlTs0PCHHBxWYwDbZTzkKgbK01IYeH9wdZI
seo:
  title: >-
    If I send multiple messages to the same user with the Messaging API, in what
    order will the messages be displayed?
  description: >-
    The order in which messages are displayed depends on how the messages are
    sent.
---

The order in which messages are displayed depends on how the messages are sent.

If endpoints used for sending messages are executed multiple times, the order in which the endpoints are executed and the order in which the messages will be displayed won't be necessarily the same.

If an endpoint for sending messages is executed once and multiple messages are specified in the request body, the messages will be displayed in the order specified in the request body.
