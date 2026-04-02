---
title: Webhook Member Joined
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-member-joined
__hash__: QddAIEiuQhtjrqoEo8xRoSVXx4FCaFUya0hnqC3rVTw
seo:
  description: ''
---

### Member join event

::reference-with-code
  :::reference-content
  Event object for when a user joins a [group chat](/docs/messaging-api/group-chats/#group) or [multi-person chat](/docs/messaging-api/group-chats/#room) that the LINE Official Account is in.

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

      `memberJoined`
      :::::

      :::::parameter-table-entry
      #undefined
      joined.members

      #undefined
      Array

      Users who joined. Array of [source user](#source-user) objects.
      :::::

      :::::parameter-table-entry
      #undefined
      replyToken

      #undefined
      String

      Reply token used to [send reply message](#send-reply-message) to this event
      :::::
    ::::
  :::

  :::reference-code
  *Member join event example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "0f3779fba3b349968c5d07db31eabf65",
            "type": "memberJoined",
            "mode": "active",
            "timestamp": 1462629479859,
            "source": {
              "type": "group",
              "groupId": "C4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            },
            "joined": {
              "members": [
                {
                  "type": "user",
                  "userId": "U4af4980629..."
                },
                {
                  "type": "user",
                  "userId": "U91eeaf62d9..."
                }
              ]
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
