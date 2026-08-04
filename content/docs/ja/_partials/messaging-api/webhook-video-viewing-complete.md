---
title: Webhook Video Viewing Complete
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-video-viewing-complete
__hash__: EoofDXtB64Dh31i4HJoMRZHnYwvub5fiRU80Ge9IxFI
seo:
  description: ''
---

### 動画視聴完了イベント

::reference-with-code
  :::reference-content
  LINE公式アカウントから送信された`trackingId`が指定された動画の視聴を、ユーザーが少なくとも一回最後まで視聴したことを示すイベントです。

    ::::admonition{title="動画の視聴回数について" type="note"}
    動画視聴完了イベントは、ユーザーの動画視聴回数を示すものではありません。

    トークルーム上で複数回動画を視聴しても、重複してイベントが発生することはありません。ただし、一度トークルームを閉じた後で再度開き動画を視聴すると、再びイベントが発生する場合があります。
    ::::

    ::::admonition
    ---
    title: イメージマップメッセージおよびFlex Messageの動画は動画視聴完了イベントの対象外です
    type: note
    ---
    [イメージマップメッセージ](#imagemap-message)および[Flex Message](#flex-message)の動画に`trackingId`を指定することはできません。
    ::::

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

      `videoPlayComplete`
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
      videoPlayComplete.trackingId

      #undefined
      String

      動画を識別するためのID。[動画メッセージ](#video-message)に付与した`trackingId`と同じ値を返します。
      :::::
    ::::
  :::

  :::reference-code
  *動画視聴完了イベントの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "videoPlayComplete",
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
            "videoPlayComplete": {
              "trackingId": "track-id"
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
