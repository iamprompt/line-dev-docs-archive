---
title: Webhook Account Link
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-account-link
__hash__: _TijsQJ5A0Nfiuq-Nm1169qFWJq6WmEwnxvEu8LpVP0
seo:
  description: ''
---

### アカウント連携イベント

::reference-with-code
  :::reference-content
  ユーザーがLINEアカウントとプロバイダーが提供するサービスのアカウントを連携したことを示すイベントオブジェクトです。アカウント連携イベントには応答できます。

  連携トークンの期限が切れている、または使用済みの場合は、Webhookイベント自体が送信されず、ユーザーにエラーが表示されます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp、sourceなど

      「[共通プロパティ](#common-properties)」を参照してください。

      アカウントの連携に失敗した場合、`source`プロパティはアカウント連携イベントに含まれません。
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `accountLink`
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      replyToken

      #undefined
      String

      このイベントに対して[応答メッセージを送る](#send-reply-message)際に使用する応答トークン。アカウントの連携に失敗した場合、このプロパティは含まれません。
      :::::

      :::::parameter-table-entry
      #undefined
      link.result

      #undefined
      String

      アカウントの連携が成功したかどうかを示す値。以下のどちらかになります。

      - `ok`：アカウントの連携が成功したことを示します。
      - `failed`：ユーザーのすり替えなどが原因で、アカウントの連携が失敗したことを示します。
      :::::

      :::::parameter-table-entry
      #undefined
      link.nonce

      #undefined
      String

      ユーザーIDの検証時に指定したnonce（number used once）。詳しくは、『Messaging APIドキュメント』の「[nonceを生成してユーザーをLINEプラットフォームにリダイレクトする](/docs/messaging-api/linking-accounts/#step-four-verifying-user-id)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *アカウント連携イベントの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "b60d432864f44d079f6d8efe86cf404b",
            "type": "accountLink",
            "mode": "active",
            "source": {
              "userId": "U91eeaf62d...",
              "type": "user"
            },
            "timestamp": 1513669370317,
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            },
            "link": {
              "result": "ok",
              "nonce": "xxxxxxxxxxxxxxx"
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
