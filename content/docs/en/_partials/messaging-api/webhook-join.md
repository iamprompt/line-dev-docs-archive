---
title: Webhook Join
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-join
__hash__: hd1HOYwo57u8e1gbeXEnKOmjEF_xwee8h5CJpICwUOs
seo:
  description: ''
---

### Join event

::reference-with-code
  :::reference-content
  Event object for when your LINE Official Account joins a [group chat](/docs/messaging-api/group-chats/#group) or [multi-person chat](/docs/messaging-api/group-chats/#room). You can reply to join events.

  A join event is triggered at different times for group chats and multi-person chats.

  - For group chats: A join event is sent when a user invites your LINE Official Account.
  - For multi-person chats: A join event is sent when the first event (for example when a user sends a message or is added to the multi-person chat) occurs after your LINE Official Account is added.

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

      `join`
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
  *Join event example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "join",
            "mode": "active",
            "timestamp": 1462629479859,
            "source": {
              "type": "group",
              "groupId": "C4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
