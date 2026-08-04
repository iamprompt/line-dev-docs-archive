---
title: Webhook Member Joined
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-member-joined
__hash__: oVEMZ0Coxf2zXZprm-stjbhc2r1AeAprIvSGKAaj8oU
seo:
  description: ''
---

### メンバー参加イベント

::reference-with-code
  :::reference-content
  LINE公式アカウントがメンバーになっている[グループトーク](/docs/messaging-api/group-chats/#group)または[複数人トーク](/docs/messaging-api/group-chats/#room)にユーザーが参加したことを示すイベントです。

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

      `memberJoined`
      :::::

      :::::parameter-table-entry
      #undefined
      joined.members

      #undefined
      Array

      参加したユーザー。[送信元ユーザー](#source-user)オブジェクトの配列です。
      :::::

      :::::parameter-table-entry
      #undefined
      replyToken

      #undefined
      String

      このイベントに対して[応答メッセージを送る](#send-reply-message)際に使用する応答トークン
      :::::
    ::::
  :::

  :::reference-code
  *メンバー参加イベントの例*

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
