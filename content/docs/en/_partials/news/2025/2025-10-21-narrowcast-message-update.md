---
title: >-
  In the Messaging API, a property to prevent partial delivery of narrowcast
  messages has been added
navigation: true
description: >-
  In the Messaging API, we've added the limit.forbidPartialDelivery property to
  the limit object to prevent partial delivery of narrowcast messages.
meta: '{"date":"2025-10-21 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2025/2025-10-21-narrowcast-message-update
__hash__: bTb7frEq2zgcdFa1-B2ohYZEF4G6Asr1-r7e74R8M7g
seo:
  title: >-
    In the Messaging API, a property to prevent partial delivery of narrowcast
    messages has been added
  description: >-
    In the Messaging API, we've added the limit.forbidPartialDelivery property
    to the limit object to prevent partial delivery of narrowcast messages.
---

In the Messaging API, we've added the `limit.forbidPartialDelivery` property to the [limit object](/reference/messaging-api/#send-narrowcast-limit) to prevent partial delivery of [narrowcast messages](/reference/messaging-api/#send-narrowcast-message).

Enabling the `limit.forbidPartialDelivery` property prevents messages from being delivered to only a subset of the target audience when sending narrowcast messages.

### Specification

When you set the `upToRemainingQuota` property to `true` and also set the `forbidPartialDelivery` property to `true`, the message will not be delivered if the number of recipients exceeds the maximum number of sending.

You can check whether message delivery was canceled by [retrieving the narrowcast message progress](/reference/messaging-api/#get-narrowcast-progress-status). If delivery is canceled, the `phase` property in the response will be `failed`, and the `errorCode` property will be `5`.

### Controlling the maximum number of messages to send with limit objects

The [Limit Object](/reference/messaging-api/#send-narrowcast-limit) is configured to restrict the maximum number of narrowcast messages that can be sent. The following are examples of controlling the maximum number of transmissions using a limit object, including the newly added `forbidPartialDelivery` property:

| Condition *                                                                        | Target reach: 100   Monthly limit: 90   Target recipients: 80 | Target reach: 100   Monthly limit: 50   Target recipients: 80 |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| No limit object specified                                                          | ❌ Request error   (Target reach exceeds monthly limit)        | ❌ Request error   (Target reach exceeds monthly limit)        |
| No `max` specified   `upToRemainingQuota`=`true`   `forbidPartialDelivery`=`false` | ✅ Sent to all recipients                                      | ✅ Sent to 50 recipients, which is within the monthly limit    |
| No `max` specified   `upToRemainingQuota`=`true`   `forbidPartialDelivery`=`true`  | ✅ Sent to all recipients                                      | ❌ Delivery will be canceled due to partial delivery           |
| `max`=30   `upToRemainingQuota`=`true`   `forbidPartialDelivery`=`false`           | ✅ Sent to 30 recipients, which equals the `max` value         | ✅ Sent to 30 recipients, which equals the `max` value         |
| `max`=30   `upToRemainingQuota`=`true`   `forbidPartialDelivery`=`true`            | ❌ Delivery will be canceled due to partial delivery           | ❌ Delivery will be canceled due to partial delivery           |

* Explanations for terms used in conditions are as follows:

- Target reach: The number of users you can reach through the messages.
- Monthly limit: The estimated upper limit for sending messages in the current month. For more information, see [Get the target limit for sending messages this month](/reference/messaging-api/#get-quota) in the Messaging API reference.
- Target recipients: Recipients filtered by attributes (such as age, gender, OS, and region) or by retargeting (audiences).
