---
title: Webhook Member Left
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-member-left
__hash__: 9aGGHAoANVWCHrs4CdXPO9wPlS_fN1o99FhLLQPXrzU
seo:
  description: ''
---

### メンバー退出イベント

::reference-with-code
  :::reference-content
  LINE公式アカウントがメンバーになっている[グループトーク](/docs/messaging-api/group-chats/#group)または[複数人トーク](/docs/messaging-api/group-chats/#room)からユーザーが退出したことを示すイベントです。

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

      `memberLeft`
      :::::

      :::::parameter-table-entry
      #undefined
      left.members

      #undefined
      Array

      退出したユーザー。[送信元ユーザー](#source-user)オブジェクトの配列です。
      :::::
    ::::
  :::

  :::reference-code
  *メンバー退出イベントの例*

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
