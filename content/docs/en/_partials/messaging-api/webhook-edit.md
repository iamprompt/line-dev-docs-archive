---
title: Webhook Edit
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-edit
__hash__: zxpB3y_IuDqqR5p97mZl8cHcUxuC4LkZ-JMRWpbDGiQ
seo:
  description: ''
---

### Edit event

::reference-with-code
  :::reference-content
  Event object for when the user has edited a message. The `message` property contains the edited message. You can reply to edit events.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp, source, etc.

      See [Common properties](#common-properties).
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `messageEdited`
      :::::

      :::::parameter-table-entry
      #undefined
      replyToken

      #undefined
      String

      Reply token used to [send reply message](#send-reply-message) to this event.

      The reply token in an edit event has a different value from the reply token in the original message event.
      :::::

      :::::parameter-table-entry
      #undefined
      message

      #undefined
      Object

      Object containing the contents of the message. Message types include:

      - [Text](#wh-text)
      :::::
    ::::
  :::

  :::reference-code
  *Edit event example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "type": "messageEdited",
            "replyToken": "950e63e8f46542ab89f645b4c2a1180a",
            "message": {
              "type": "text",
              "id": "610830548529053697",
              "quoteToken": "XyiyoB3R1BA...",
              "text": "Edited message"
            },
            "webhookEventId": "01KPW6071XGPXPAF4XCN96XEAN",
            "deliveryContext": {
              "isRedelivery": false
            },
            "timestamp": 1776914799524,
            "source": {
              "type": "group",
              "groupId": "Ca56f94637c...",
              "userId": "U4af4980629..."
            },
            "mode": "active"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
