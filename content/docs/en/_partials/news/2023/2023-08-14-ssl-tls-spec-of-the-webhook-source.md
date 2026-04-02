---
title: >-
  We've added several documents to the Messaging API documentation to help you
  troubleshoot webhook issues
navigation: true
description: >-
  We've added several documents related to webhooks to the Messaging API
  documentation.
meta: >-
  {"date":"2023-08-14 00:00 UTC","tags":"docs, messaging-api,
  ssl","locale":"en"}
path: /en/_partials/news/2023/2023-08-14-ssl-tls-spec-of-the-webhook-source
__hash__: 9jjoUIAKQdSFhz8g-EEa2AnKgG29gCxj8-CqgR_DMsg
seo:
  title: >-
    We've added several documents to the Messaging API documentation to help you
    troubleshoot webhook issues
  description: >-
    We've added several documents related to webhooks to the Messaging API
    documentation.
---

We've added several documents related to webhooks to the Messaging API documentation.

- [Verify webhook URL](/docs/messaging-api/verify-webhook-url/)
- [Check webhook error causes and statistics](/docs/messaging-api/check-webhook-error-statistics/)
- [SSL/TLS specification of the webhook source](/docs/messaging-api/ssl-tls-spec-of-the-webhook-source/)

These documents will help developers quickly identify and troubleshoot webhook issues as they arise.

### Background on adding the documents

If the user adds your LINE Official Account as a friend or sends a message to your LINE Official Account, the LINE Platform sends a webhook event to the URL (bot server) specified in the [LINE Developers Console](/console/) **Webhook URL**.

We've received feedback from developers that they have difficulty identifying the cause of problems when a webhook isn't properly received by the bot server.

The newly added documents include instructions on how to [verify webhook URL](/docs/messaging-api/verify-webhook-url/) and how to [check webhook error causes and statistics](/docs/messaging-api/check-webhook-error-statistics/).

In addition, [SSL/TLS specification of the webhook source](/docs/messaging-api/ssl-tls-spec-of-the-webhook-source/) is also available. This allows you to go a step further and investigate if there is a matching cipher suite between the webhook source and the bot server, in cases such as "the bot server has an appropriate SSL/TLS certificate and the protocol version is TLS 1.2, but for some reason the bot server can't receive the webhook".

We'll continue to improve the quality of the LINE Developers site and developer documentation to make it even easier for developers to develop services using the Messaging API.
