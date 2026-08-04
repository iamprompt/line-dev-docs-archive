---
title: Webhook Unsend
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-unsend
__hash__: _E0BWr4yQPHrLdWlqA686272bYiCdXymyfNeHYO1M9U
seo:
  description: ''
---

### Unsend event

::reference-with-code
  :::reference-content
  Event object for when the user unsends a message.

  When a user unsends a sent message, an unsend event is sent to the bot server. When the unsend event is received, we recommend that service providers respect the user's intent to unsend a sent message and handle the message appropriately with the utmost care so that the target message can't be seen or used in the future. For more information, see [Processing on receipt of unsend event](/docs/messaging-api/receiving-messages/#webhook-unsend-message) in the Messaging API documentation.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp, source, etc.

      See [Common Properties](#common-properties).
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `unsend`
      :::::

      :::::parameter-table-entry
      #undefined
      unsend.messageId

      #undefined
      String

      The message ID of the unsent message
      :::::
    ::::
  :::

  :::reference-code
  *Unsend event example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "type": "unsend",
            "mode": "active",
            "timestamp": 1462629479859,
            "source": {
              "type": "group",
              "groupId": "Ca56f94637c...",
              "userId": "U4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            },
            "unsend": {
              "messageId": "325708"
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
