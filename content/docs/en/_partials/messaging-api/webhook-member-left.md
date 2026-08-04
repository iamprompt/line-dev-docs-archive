---
title: Webhook Member Left
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-member-left
__hash__: r_mdbZk_Dc7_8e6RREx80KydDtKQI9YQ-r2sywJTlbU
seo:
  description: ''
---

### Member leave event

::reference-with-code
  :::reference-content
  Event object for when a user leaves a [group chat](/docs/messaging-api/group-chats/#group) or [multi-person chat](/docs/messaging-api/group-chats/#room) that the LINE Official Account is in.

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

      `memberLeft`
      :::::

      :::::parameter-table-entry
      #undefined
      left.members

      #undefined
      Array

      Users who left. Array of [source user](#source-user) objects.
      :::::
    ::::
  :::

  :::reference-code
  *Member leave event example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "type": "memberLeft",
            "mode": "active",
            "timestamp": 1462629479960,
            "source": {
              "type": "group",
              "groupId": "C4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            },
            "left": {
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
