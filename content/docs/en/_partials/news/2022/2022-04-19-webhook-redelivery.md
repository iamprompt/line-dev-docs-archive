---
title: >-
  In the Messaging API, a feature to redeliver webhooks that fail to be received
  has been added
navigation: true
description: >-
  As announced on March 7, 2022, we've added the webhook redelivery feature to
  the Messaging API.
meta: '{"date":"2022-04-19 01:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2022/2022-04-19-webhook-redelivery
__hash__: FuoLvQ9GQ5lrgZv45QbKU1S_z_88XGHjG8TBINZzZCE
seo:
  title: >-
    In the Messaging API, a feature to redeliver webhooks that fail to be
    received has been added
  description: >-
    As announced on March 7, 2022, we've added the webhook redelivery feature to
    the Messaging API.
---

As announced on [March 7, 2022](/news/2022/03/07/pre-release-webhook-redelivery/), we've added the webhook redelivery feature to the Messaging API.

When a user sends a message to a LINE Official Account, the webhook is sent to the bot server according to the event. This webhook has only been sent once, but we've added a feature to redeliver it. In addition, common properties have been added to webhook event objects.

### Overview

We've added the following three main features.

1. [Add the webhook redelivery feature](#add-webhook-redelivery-2022-04-19)
2. [Add common properties to webhook event objects](#add-common-properties-2022-04-19)
3. [Publish error statistics aggregation](#publish-error-statistics-2022-04-19)

#### 1. Add the webhook redelivery feature

If the bot server does not return a status code in the `2xx` for a webhook sent from the LINE Platform, the webhook will redeliver from the LINE Platform after a period of time.

This feature is disabled by default and can be enabled from the [LINE Developers Console](/console/). It is available for all Messaging API channels.

::admonition{title="Note" type="note"}
Be sure to check [Notes](#notes-2022-04-19) before enabling the webhook redelivery feature.
::

For more information about the webhook redelivery feature, see [Redeliver a webhook that failed to be received](/docs/messaging-api/receiving-messages/#webhook-redelivery) in the Messaging API documentation.

#### 2. Add common properties to webhook event objects

The following two properties were added as [common properties of webhook event objects](/reference/messaging-api/#common-properties). These properties will be included in the webhook event objects regardless of whether the webhook redelivery feature is enabled or not.

##### Added common properties

| Property name                | Type    | Summary                                                          |
| ---------------------------- | ------- | ---------------------------------------------------------------- |
| webhookEventId               | String  | Webhook Event ID, an ID that uniquely identifies a webhook event |
| deliveryContext.isRedelivery | Boolean | Whether the webhook event is a redelivered one or not            |

#### 3. Publish error statistics aggregation

A feature to check the statistics of errors in webhooks sent has been published in the [LINE Developers Console](/console/).

In enabling the webhook redelivery feature, there may be a need to check the status of webhooks sent that were not received by the bot server. Error statistics aggregation was previously available only to corporate users, but with this release, they are now available for all Messaging API channels.

For more information about error statistics aggregation, see [Check error statistics for sending webhooks](/docs/messaging-api/receiving-messages/#error-statistics-aggregation) in the Messaging API documentation.

### Notes

Before enabling the webhook redelivery feature, check the following notes:

- Due to network routing problems and other factors, duplicate webhook events may be sent. If this is an issue, use `webhookEventId` in the webhook event objects to detect duplicates.
- If webhook events are redelivered, the order in which webhook events occur and the order in which they reach the bot server can be different significantly. If this is an issue, check the context by looking at the `timestamp` of webhook event objects.
- The webhook redelivery feature does not guarantee reliable redelivery of webhooks. In addition, if the number of webhook redeliveries increases significantly in a short period of time and it is determined that it will affect the operation of the LINE Platform, the webhook redelivery setting may be forcibly disabled.
- The number and interval of the webhook redelivery are not disclosed. In addition, the number of times and intervals are subject to change without notice.
- Webhook sending may be suspended for bot servers that have been failing to receive webhooks for a long period of time.
