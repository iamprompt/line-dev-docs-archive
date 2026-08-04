---
title: Webhook Leave
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-leave
__hash__: DJ_H79fAVhk8xtAUaLvWt7w6PVVQQtJTtsDAB4cRwtM
seo:
  description: ''
---

### 退出イベント

::reference-with-code
  :::reference-content
  ユーザーが[グループトーク](/docs/messaging-api/group-chats/#group)からLINE公式アカウントを削除したか、LINE公式アカウントが[グループトーク](/docs/messaging-api/group-chats/#group)または[複数人トーク](/docs/messaging-api/group-chats/#room)から退出したことを示すイベントです。

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

      `leave`
      :::::
    ::::
  :::

  :::reference-code
  *退出イベントの例*

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
