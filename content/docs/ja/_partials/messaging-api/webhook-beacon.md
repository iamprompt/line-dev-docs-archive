---
title: Webhook Beacon
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-beacon
__hash__: TSwIsjmkudZ6_SALDAaGirN7IdyD-LB59HmXNKTmKO4
seo:
  description: ''
---

### ビーコンイベント

::reference-with-code
  :::reference-content
  [ビーコン](/docs/messaging-api/using-beacons/)の電波の受信圏にユーザーが入ったことを示すイベントオブジェクトです。ビーコンイベントには応答できます。

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

      `beacon`
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
      beacon.hwid

      #undefined
      String

      検出されたビーコンのハードウェアID
      :::::

      :::::parameter-table-entry
      #undefined
      beacon.type

      #undefined
      String

      ビーコンイベントのタイプ。「[ビーコンイベントのタイプ](#beacon-event-types)」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      beacon.dm

      #undefined
      String

      検出されたビーコンのデバイスメッセージ。このメッセージは、ボットサーバーへの通知を目的としてビーコンにより生成されるデータです。Device messageプロパティをサポートするデバイスからのWebhookイベントにのみ含まれます。  

      詳しくは、[LINE Simple Beaconの仕様](https://github.com/line/line-simple-beacon/blob/master/README.ja.md#line-simple-beacon-frame){rel="[\"nofollow\"]"}を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *ビーコンイベントの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "beacon",
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
            "beacon": {
              "hwid": "d41d8cd98f",
              "type": "enter"
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### ビーコンイベントのタイプ

| beacon.type | 説明                                                                        |
| ----------- | ------------------------------------------------------------------------- |
| `enter`     | ユーザーがビーコンの電波の受信圏に入りました。                                                   |
| `banner`    | ユーザーが[ビーコンバナー](/docs/messaging-api/using-beacons/#beacon-banner)をタップしました。 |
| `stay`      | ユーザーがビーコンの電波の受信圏に滞在しています。   このイベントは、最短10秒間隔で繰り返し送信されます。                   |

::admonition{title="日本では利用受付は停止しています" type="note"}
2021年1月現在、日本では`banner`および`stay`イベントの新規利用受付は停止していますが、それ以外の地域では継続しています。
::
