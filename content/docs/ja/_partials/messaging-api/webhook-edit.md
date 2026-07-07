---
title: Webhook Edit
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-edit
__hash__: aHoEICi-btu0UojZNs5RoaFS2njj3712BQI7rSTcIDQ
seo:
  description: ''
---

### 編集イベント

::reference-with-code
  :::reference-content
  ユーザーがテキストメッセージを編集したことを示すイベントです。編集後のメッセージの内容は、`message`プロパティに含まれます。編集イベントには応答できます。

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

      `messageEdited`
      :::::

      :::::parameter-table-entry
      #undefined
      replyToken

      #undefined
      String

      このイベントに対して[応答メッセージを送る](#send-reply-message)際に使用する応答トークン。

      編集イベントの応答トークンは、メッセージイベントの応答トークンとは異なる値になります。
      :::::

      :::::parameter-table-entry
      #undefined
      message

      #undefined
      Object

      メッセージの内容を含むオブジェクト。メッセージには以下のタイプがあります。

      - [テキスト](#wh-text)
      :::::
    ::::
  :::

  :::reference-code
  *編集イベントの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "type": "messageEdited",
            "replyToken": "950e63e8f46542ab89f645b4c2a1180a",
            "message": {
              "type": "text",
              "id": "610830548529053697",
              "quoteToken": "XyiyoB3R1BA...",
              "text": "編集後のメッセージ"
            },
            "webhookEventId": "01KPW6071XGPXPAF4XCN96XEAN",
            "deliveryContext": {
              "isRedelivery": false
            },
            "timestamp": 1776914799524,
            "source": {
              "type": "group",
              "groupId": "Ca56f94637c...",
              "userId": "U4af4980629..."
            },
            "mode": "active"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
