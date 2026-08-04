---
title: Webhook Follow
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-follow
__hash__: AT71ccDRKeM56lixxKmAZI-SPpxB2hFVNX2EltApMp0
seo:
  description: ''
---

### フォローイベント

::reference-with-code
  :::reference-content
  LINE公式アカウントが友だち追加またはブロック解除されたことを示すイベントです。フォローイベントには応答できます。

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

      `follow`
      :::::

      :::::parameter-table-entry
      #undefined
      replyToken

      #undefined
      String

      このイベントに対して[応答メッセージを送る](#send-reply-message)際に使用する応答トークン
      :::::

      :::::parameter-table-entry
      #undefined
      follow.isUnblocked

      #undefined
      Boolean

      - `true`：ユーザーがLINE公式アカウントをブロック解除しました。
      - `false`：ユーザーがLINE公式アカウントを友だち追加しました。

        ::::::admonition{title="follow.isUnblockedの正確性について" type="note"}
        `follow.isUnblocked`プロパティは、「友だち追加」および「ブロック解除」の完全な正確性を保証するものではありません。
        ::::::
      :::::
    ::::
  :::

  :::reference-code
  *フォローイベントの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // LINE公式アカウントを友だち追加した場合
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

      // LINE公式アカウントをブロック解除した場合
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
