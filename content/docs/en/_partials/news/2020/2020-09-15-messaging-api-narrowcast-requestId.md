---
title: >-
  Redelivery object has been added to the criteria for narrowing down the
  narrowcast message target
navigation: true
description: >-
  Redelivery object has been added to the criteria for narrowing down the
  narrowcast message target in the Messaging API. Using the redelivery object,
  you can send a message conditioned on users who have previously received a
  narrowcast message.
meta: '{"date":"2020-09-15 01:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2020/2020-09-15-messaging-api-narrowcast-requestid
__hash__: IZYd-DmTytDhXezKbTmxecNFwRA3DiXrBkOeQKxFfJo
seo:
  title: >-
    Redelivery object has been added to the criteria for narrowing down the
    narrowcast message target
  description: >-
    Redelivery object has been added to the criteria for narrowing down the
    narrowcast message target in the Messaging API. Using the redelivery object,
    you can send a message conditioned on users who have previously received a
    narrowcast message.
---

Redelivery object has been added to the criteria for narrowing down the narrowcast message target in the Messaging API. Using the redelivery object, you can send a message conditioned on *users who have previously received a narrowcast message*.

- [Redelivery object was added](#redelivery-object)
- [Specify the target using the operator object (AND, OR, NOT)](#and-or-not)

### Redelivery object was added

Narrowcast messages are usually sent to all users who added a specific LINE Official Account as a friend. However, by specifying the [demographic filter object](/reference/messaging-api/#narrowcast-demographic-filter) when you [send a narrowcast message](/reference/messaging-api/#send-narrowcast-message), you can narrow down the target of your message based on certain conditions.

![narrowcast message](/media/messaging-api/narrowcast-message/narrow_cast.png){className="[\"w-fix-520\"]"}

To narrow down the target by a recipient object, in addition to the existing [audience object](/docs/messaging-api/sending-messages/#audience-object), you can now specify the [redelivery object](/docs/messaging-api/sending-messages/#audience-object).

By specifying the request ID in the redelivery object, you can send a message to *users who have previously received a narrowcast message*.

:interactive-svg{src="/media/news/redeliver-narrowcast-en.svg" border}::admonition{title="Conditions for specifying the request ID" type="note"}
The request ID specified in the `requestId` property must satisfy all of these conditions:

- The request ID was issued by the delivering a narrowcast message
- The narrowcast message was delivered within the past seven days
- The delivery process is completed (The value of the `phase` property is `succeeded` in the response of the [Get narrowcast message status](/reference/messaging-api/#get-narrowcast-progress-status) endpoint)
::

For more information on redelivery object, see:

- [Redelivery object](/docs/messaging-api/sending-messages/#redelivery-object)
- [Recipient object](/reference/messaging-api/#narrowcast-recipient) (Messaging API reference)

#### Specify the target using the operator object (AND, OR, NOT)

Similar to existing audience objects, you can specify the target based on complex conditions using operators (AND, OR, NOT) with the redelivery object.

Below is an example of a recipient object with *users with a specific chat tag* and (AND) *users who received a narrowcast message previously delivered* set as the target:

![send target](/media/news/send_target_en.png){className="[\"w-fix-320\"]"}

```json
"recipient": {
    "type": "operator",
    "and": [
        {
            "type": "audience",
            "audienceGroupId": 5614991017776
        },
        {
            "type": "redelivery",
            "requestId": "5b59509c-c57b-11e9-aa8c-2a2ae2dbcce4"
        }
    ]
}
```

For more information about narrowing down the narrowcast message target, see these:

- [Send messages to multiple users using attribute information and retargeting](/docs/messaging-api/sending-messages/#send-narrowcast-message)
- [Send narrowcast message](/reference/messaging-api/#send-narrowcast-message) (Messaging API Reference)
