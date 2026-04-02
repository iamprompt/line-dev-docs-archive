---
title: Webhook Join
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-join
__hash__: BpTo5Jlw9IOjQj6dNZEdMsxZSMraqqSpnNIT-u4dvUY
seo:
  description: ''
---

### 参加イベント

::reference-with-code
  :::reference-content
  LINE公式アカウントが[グループトーク](/docs/messaging-api/group-chats/#group)や[複数人トーク](/docs/messaging-api/group-chats/#room)に参加したことを示すイベントです。参加イベントには応答できます。

  参加イベントが送信されるタイミングはグループトークと複数人トークで異なります。

  - グループトークの場合：ユーザーがLINE公式アカウントを招待したときに送信されます。
  - 複数人トークの場合：LINE公式アカウントが複数人トークに追加された後で、最初に何らかのイベントが発生したときに送信されます。たとえば、ユーザーがメッセージを送ったり、ユーザーが複数人トークに追加されたりしたときです。

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

      `join`
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
  *参加イベントの例*

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
