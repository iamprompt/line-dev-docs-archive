---
title: Webhook Unfollow
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-unfollow
__hash__: 2QmW-yl1kFd2HWj_HQY7kzst0geYLJlBzLTRJ7ewmKc
seo:
  description: ''
---

### フォロー解除イベント

::reference-with-code
  :::reference-content
  LINE公式アカウントがブロックされたことを示すイベントです。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp、sourceなど

      「[共通プロパティ](#common-properties)」を参照してください。
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
  *フォロー解除イベントの例*

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
