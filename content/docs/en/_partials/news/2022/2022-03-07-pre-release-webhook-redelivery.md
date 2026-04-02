---
title: Webhook redelivery feature will be added to Messaging API in early April 2022
navigation: true
description: >-
  When a user sends a message to the LINE Official Account, a webhook is sent to
  the bot server according to the event. This webhook is only sent once, but we
  are planning to add a feature to redeliver it.
meta: '{"date":"2022-03-07 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2022/2022-03-07-pre-release-webhook-redelivery
__hash__: cU6nUbVLuAamAp1Dna6a3V3vIrhnx9SafcXe2GFPCJk
seo:
  title: >-
    Webhook redelivery feature will be added to Messaging API in early April
    2022
  description: >-
    When a user sends a message to the LINE Official Account, a webhook is sent
    to the bot server according to the event. This webhook is only sent once,
    but we are planning to add a feature to redeliver it.
---

When a user sends a message to the LINE Official Account, a webhook is sent to the bot server according to the event. This webhook is only sent once, but we are planning to add a feature to redeliver it.

The webhook event objects will be changed accordingly, so please be informed in advance.

### Expected date of feature addition

Early April 2022

The details and date of this feature are subject to change without notice.

### Overview

This release adds the following two main features. The detailed specifications of each feature will be announced at the time of release.

1. [Add Webhook redelivery feature](#add-redelivery-feature-2022-03-07)
2. [Add common properties to Webhook event objects](#add-common-properties-2022-03-07)

#### 1. Add Webhook redelivery feature

If the bot server does not return a status code in the `2xx` for a webhook sent from the LINE Platform, the webhook will be redeliver from the LINE Platform after a period of time.

This feature is disabled by default and can be enabled from the [LINE Developers Console](/console/). It is available for all Messaging API channels.

#### 2. Add common properties to webhook event objects

The following two properties will be added as [common properties of the webhook event objects](/reference/messaging-api/#common-properties). These properties will be included in the webhook event objects regardless of whether the webhook redelivery feature is enabled or not.

::admonition
---
title: If you are using SDK, need to wait for SDK update
type: note
---
In order to use the common properties added in this release, support on [Messaging API SDKs](/docs/messaging-api/line-bot-sdk/) is needed. If you are using the SDK to operate the Messaging API, you will not be able to use these properties until the SDK is supported.
::

##### Common properties to be added

The property names are tentative and may change when the feature is added.

| Property name                | Type    | Summary                                                 |
| ---------------------------- | ------- | ------------------------------------------------------- |
| webhookId                    | String  | An identifier to uniquely define a webhook              |
| deliveryContext              | Object  | An object containing information about webhook delivery |
| deliveryContext.isRedelivery | Boolean | Whether the webhook event is a redelivered one or not   |

### Background

The main purpose of this release is to make it possible to receive webhooks again even if there is a temporary problem with the bot server.

When a bot server returns an error in response to a webhook due to temporary over-access or other reasons, there has been no way to reacquire the failed webhook until now. With the addition of this new feature, even if a problem occurs with the bot server, you will be able to receive the redelivered webhook after the bot server is recovered.

Since webhooks that were not processed correctly will not be lost, users will be able to use the Messaging API with more confidence.

### Others

In conjunction with this release, we may stop sending webhooks to bot servers that have been failing to receive webhooks for a long time.

LINE will continue to work on further improving our services to our customers. Thank you for your understanding and cooperation.
