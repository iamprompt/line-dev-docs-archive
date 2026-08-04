---
title: Webhook Membership
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-membership
__hash__: ZR4eZyVzFeXhFn2cu7BnHk_QsCVh6ZH7xKwcC7ktapU
seo:
  description: ''
---

### メンバーシップイベント

::reference-with-code
  :::reference-content
  ユーザーがLINE公式アカウントのメンバーシップに加入や継続課金、またはメンバーシップを退会したことを示すイベントです。

  LINE公式アカウントがメンバーシップで複数のプランを提供している場合において、あるプランに加入中のユーザーが当月中に別のプランに変更したときは、退会と加入に関するWebhookイベントが送信されます。なお、ユーザーがプロフィール情報の取得に同意していない場合は、Webhookイベントは送信されません。詳しくは、『Messaging APIドキュメント』の「[ユーザーのプロフィール情報取得の同意](/docs/messaging-api/user-consent/)」を参照してください。

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

      `membership`
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
      membership.type

      #undefined
      String

      メンバーシップイベントのタイプ。以下のいずれかの値です。

      - `joined`：ユーザーがメンバーシップに加入した。
      - `left`：ユーザーがメンバーシップを退会した。
      - `renewed`：ユーザーがメンバーシップに継続課金した。
      :::::

      :::::parameter-table-entry
      #undefined
      membership.membershipId

      #undefined
      Number

      ユーザーが加入、退会または継続課金したメンバーシップのID
      :::::
    ::::
  :::

  :::reference-code
  *メンバーシップイベントの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "type": "membership",
            "source": {
              "type": "user",
              "userId": "U4af4980629..."
            },
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "membership": {
              "type": "joined",
              "membershipId": 3189
            },
            "timestamp": 1462629479859,
            "mode": "active",
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
