---
title: >-
  Documentation correction announcement regarding webhooks when sending messages
  using liff.sendMessages()
navigation: true
description: >-
  There was an error in Receive messages (webhook) of the Messaging API
  documentation regarding the behavior of webhooks when messages are sent using
  liff.sendMessages(). We've already corrected the mistake and apologize for any
  inconvenience caused by this error.
meta: >-
  {"date":"2025-05-07 00:00 UTC","tags":"messaging-api, liff, line-mini-app,
  template-messages, flex-message","locale":"en"}
path: >-
  /en/_partials/news/2025/2025-05-07-correction-to-documentation-regarding-webhooks
__hash__: 3qJpbzFV1eFsvcnJqTGbh5KDKYtZMDqViGErrpKOhBs
seo:
  title: >-
    Documentation correction announcement regarding webhooks when sending
    messages using liff.sendMessages()
  description: >-
    There was an error in Receive messages (webhook) of the Messaging API
    documentation regarding the behavior of webhooks when messages are sent
    using liff.sendMessages(). We've already corrected the mistake and apologize
    for any inconvenience caused by this error.
---

There was an error in [Receive messages (webhook)](/docs/messaging-api/receiving-messages/) of the Messaging API documentation regarding the behavior of webhooks when messages are sent using `liff.sendMessages()`. We've already corrected the mistake and apologize for any inconvenience caused by this error.

See this table for the differences before and after the correction:

| Item                                                                                                       | Incorrect       | Correct             |
| ---------------------------------------------------------------------------------------------------------- | --------------- | ------------------- |
| Webhook behavior when a template message or a Flex Message is sent by the user using `liff.sendMessages()` | Webhook is sent | Webhook is not sent |

When a template message or a Flex Message is sent from the user using `liff.sendMessages()`, the webhook is not sent from the LINE Platform. For all other [message types](/docs/messaging-api/message-types/), the webhook is sent.

For more information, see [Webhooks when sending a message using liff.sendMessages()](/docs/messaging-api/receiving-messages/#webhook-template-and-flex-messages) in the Messaging API documentation.
