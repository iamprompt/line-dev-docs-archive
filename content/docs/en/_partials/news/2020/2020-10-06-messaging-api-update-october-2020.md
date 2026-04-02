---
title: Messaging API update for October 2020
navigation: true
description: We added new endpoints to the Messaging API.
meta: '{"date":"2020-10-06 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2020/2020-10-06-messaging-api-update-october-2020
__hash__: mknYXBfejNAhtKjAuU-nJAE9iXujzOMFFGkCJWC_Ryo
seo:
  title: Messaging API update for October 2020
  description: We added new endpoints to the Messaging API.
---

We added new endpoints to the Messaging API.

- [Get bot info](#get-bot-info-news)
- [Get webhook endpoint information](#get-webhook-endpoint-information-news)
- [Set webhook endpoint URL](#set-webhook-endpoint-url-news)
- [Test webhook endpoint](#test-webhook-endpoint-news)

This is a summary of each new endpoint. For details, see each endpoint in the Messaging API reference.

### Get bot info

Gets basic information about the bot, such as:

- Bot's user ID
- Bot's basic ID
- Bot's premium ID
- Bot's display name
- Profile image URL
- Bot response mode ("Chat" or "Bot")
- If the bot is set to automatically read messages

For more information, see [Get bot info](/reference/messaging-api/#get-bot-info) in the Messaging API reference.

### Get webhook endpoint information

Gets this information about the webhook endpoint:

- Webhook URL
- Webhook usage status (enabled or disabled)

For more information, see [Get webhook endpoint information](/reference/messaging-api/#get-webhook-endpoint-information) in the Messaging API reference.

### Set webhook endpoint URL

Sets the webhook endpoint URL. It may take up to 1 minute for changes to take place due to caching.

For more information, see [Set webhook endpoint URL](/reference/messaging-api/#set-webhook-endpoint-url) in the Messaging API reference.

### Test webhook endpoint

Checks if the configured webhook endpoint can receive a test webhook event.

For more information, see [Test webhook endpoint](/reference/messaging-api/#test-webhook-endpoint) in the Messaging API reference.
