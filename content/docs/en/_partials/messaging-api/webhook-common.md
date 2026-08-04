---
title: Webhook Common
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-common
__hash__: 1TAc99CpIsSin3pvEn_0ptPWfzrGq84XJmIpu8qIc9Q
seo:
  description: ''
---

### Common properties

The following properties are common properties in webhook event objects.

::parameter-table
  :::parameter-table-entry
  #undefined
  type

  #undefined
  String

  Identifier for the type of event
  :::

  :::parameter-table-entry
  #undefined
  mode

  #undefined
  String

  Channel state.

  - `active`: The channel is active. You can send a reply message or push message, etc. from the bot server that received this webhook event.
  - `standby`: The channel is waiting. When the channel state is `standby`, the webhook event won't contain a reply token to [send reply message](#send-reply-message). For more information about the timing of the channel state set to `standby`, see [Get webhook event](/docs/partner-docs/module/#bot-module-channel-receive-webhook) in the module documentation.

    ::::admonition
    ---
    title: When the channel state is standby, the bot server shouldn't send any messages
    type: note
    ---
    When the channel state is `standby`, the [module](/docs/partner-docs/module/) may be replying or otherwise reacting to the content of the received webhook event. Sending messages from the bot while the user and the module are interacting will confuse the user. Therefore, the bot server that received a Webhook event with a `mode` property of `standby` shouldn't send any messages.
    ::::
  :::

  :::parameter-table-entry
  #undefined
  timestamp

  #undefined
  Number

  UNIX time of the event occurred (in milliseconds). Even in the case of a redelivered webhook, it represents the time the event occurred, not the time it was redelivered.

    ::::admonition
    ---
    title: Check timestamp if webhook redelivery is enabled
    type: note
    ---
    If [webhook redelivery](/docs/messaging-api/receiving-messages/#webhook-redelivery) is enabled, the order in which webhook events occur and the order in which they reach the bot server can be different significantly. If this is an issue, check the context by looking at the `timestamp`.
    ::::
  :::

  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  source

  #undefined
  Object

  Source [user](#source-user), [group chat](#source-group), or [multi-person chat](#source-room) object with information about the source of the event.

  This property won't be included in the [account link event](#account-link-event) if linking the account has failed.
  :::

  :::parameter-table-entry
  #undefined
  webhookEventId

  #undefined
  String

  Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.
  :::

  :::parameter-table-entry
  #undefined
  deliveryContext.isRedelivery

  #undefined
  Boolean

  Whether the webhook event is a redelivered one or not. For more information, see [Redelivered webhooks](/docs/messaging-api/receiving-messages/#redelivered-webhooks).

  - `true`: Redelivered webhook event.
  - `false`: First webhook event sent.
  :::
::

#### Source user

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `user`
      :::::

      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      ID of the source user
      :::::
    ::::
  :::

  :::reference-code
  *Source user example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      "source": {
          "type": "user",
          "userId": "U4af4980629..."
        }
      ```
      :::::
    ::::
  :::
::

#### Source group chat

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `group`
      :::::

      :::::parameter-table-entry
      #undefined
      groupId

      #undefined
      String

      Group ID of the source group chat
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      userId

      #undefined
      String

      ID of the source user. Only included in [message events](#message-event). Only users of LINE for iOS and LINE for Android are included in `userId`. For more information, see [Consent on getting user profile information](/docs/messaging-api/user-consent/).
      :::::
    ::::
  :::

  :::reference-code
  *Source group chat example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      "source": {
          "type": "group",
          "groupId": "Ca56f94637c...",
          "userId": "U4af4980629..."
        }
      ```
      :::::
    ::::
  :::
::

#### Source multi-person chat

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `room`
      :::::

      :::::parameter-table-entry
      #undefined
      roomId

      #undefined
      String

      Room ID of the source multi-person chat
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      userId

      #undefined
      String

      ID of the source user. Only included in [message events](#message-event). Only users of LINE for iOS and LINE for Android are included in `userId`. For more information, see [Consent on getting user profile information](/docs/messaging-api/user-consent/).
      :::::
    ::::
  :::

  :::reference-code
  *Source multi-person chat example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      "source": {
          "type": "room",
          "roomId": "Ra8dbf4673c...",
          "userId": "U4af4980629..."
        }
      ```
      :::::
    ::::
  :::
::
