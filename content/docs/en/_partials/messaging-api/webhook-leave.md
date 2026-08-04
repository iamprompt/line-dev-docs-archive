---
title: Webhook Leave
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-leave
__hash__: '-KvFNkovlVLrUyc_YNDx5RK1LLvTjBlSkv8byJl7hJw'
seo:
  description: ''
---

### Leave event

::reference-with-code
  :::reference-content
  Event object for when a user removes your LINE Official Account from a [group chat](/docs/messaging-api/group-chats/#group) or when your LINE Official Account leaves a [group chat](/docs/messaging-api/group-chats/#group) or [multi-person chat](/docs/messaging-api/group-chats/#room).

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

      `leave`
      :::::
    ::::
  :::

  :::reference-code
  *Leave event example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "type": "leave",
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
