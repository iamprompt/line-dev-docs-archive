---
title: Webhook Follow
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-follow
__hash__: 26zJ0BOmaxc0OoA0XkwtDPBd-WXDgLcBThzJ1mC_FiM
seo:
  description: ''
---

### Follow event

::reference-with-code
  :::reference-content
  Event object for when your LINE Official Account is added as a friend (or unblocked). You can reply to follow events.

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

      `follow`
      :::::

      :::::parameter-table-entry
      #undefined
      replyToken

      #undefined
      String

      Reply token used to [send reply message](#send-reply-message) to this event
      :::::

      :::::parameter-table-entry
      #undefined
      follow.isUnblocked

      #undefined
      Boolean

      - `true`: The user has unblocked the LINE Official Account.
      - `false`: The user has added the LINE Official Account as a friend.

        ::::::admonition{title="Accuracy of follow.isUnblocked" type="note"}
        The `follow.isUnblocked` property doesn't guarantee the complete accuracy of "add friend" and "unblock".
        ::::::
      :::::
    ::::
  :::

  :::reference-code
  *Follow event example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // When the user has added the LINE Official Account as a friend
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "85cbe770fa8b4f45bbe077b1d4be4a36",
            "type": "follow",
            "mode": "active",
            "timestamp": 1705891467176,
            "source": {
              "type": "user",
              "userId": "U3d3edab4f36c6292e6d8a8131f141b8b"
            },
            "webhookEventId": "01HMQGW40RZJPJM3RAJP7BHC2Q",
            "deliveryContext": {
              "isRedelivery": false
            },
            "follow": {
              "isUnblocked": false
            }
          }
        ]
      }

      // When the user has unblocked the LINE Official Account
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "follow",
            "mode": "active",
            "timestamp": 1462629479859,
            "source": {
              "type": "user",
              "userId": "U4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            },
            "follow": {
              "isUnblocked": true
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
