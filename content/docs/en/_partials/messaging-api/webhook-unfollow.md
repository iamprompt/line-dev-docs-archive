---
title: Webhook Unfollow
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-unfollow
__hash__: nVsdF1xRh80jH1J73bLwPd-mwP5a2nOB3CV2pzrDmDg
seo:
  description: ''
---

### Unfollow event

::reference-with-code
  :::reference-content
  Event object for when your LINE Official Account is blocked.

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

      `unfollow`
      :::::
    ::::
  :::

  :::reference-code
  *Unfollow event example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "type": "unfollow",
            "mode": "active",
            "timestamp": 1462629479859,
            "source": {
              "type": "user",
              "userId": "U4af4980629..."
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
