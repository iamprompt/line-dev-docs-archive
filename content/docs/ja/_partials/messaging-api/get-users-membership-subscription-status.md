---
title: Get Users Membership Subscription Status
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-users-membership-subscription-status
__hash__: NE8Azf51L6-l9uUe2bWyJvvbAE8kir6TOvL_NaQ2EUA
seo:
  description: ''
---

### ユーザーのメンバーシップ加入状況を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/membership/subscription/{userId}"}::reference-with-code
  :::reference-content
  ユーザーが加入しているメンバーシップの情報を取得できます。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/membership/subscription/{userId} \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### レート制限

200リクエスト/秒

レート制限について詳しくは、「[レート制限](#rate-limits)」を参照してください。

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  userId

  メンバーシップ加入状況を確認したいユーザーのユーザーID。

  ユーザーIDの取得方法については、『Messaging APIドキュメント』の「[ユーザーIDを取得する](/docs/messaging-api/getting-user-ids/)」を参照してください。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ユーザーがメンバーシップに加入している場合、ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      subscriptions

      #undefined
      Array

      メンバーシップの配列。
      :::::

      :::::parameter-table-entry
      #undefined
      membership

      #undefined
      Object

      メンバーシッププランの情報を含むオブジェクト。
      :::::

      :::::parameter-table-entry
      #undefined
      membership.membershipId

      #undefined
      Number

      メンバーシッププランのID。
      :::::

      :::::parameter-table-entry
      #undefined
      membership.title

      #undefined
      String

      メンバーシッププランのプラン名。
      :::::

      :::::parameter-table-entry
      #undefined
      membership.description

      #undefined
      String

      メンバーシッププランの説明。
      :::::

      :::::parameter-table-entry
      #undefined
      membership.benefits

      #undefined
      Array of strings

      メンバーシッププランの特典のリスト。  

      特典の最大数：5
      :::::

      :::::parameter-table-entry
      #undefined
      membership.price

      #undefined
      Number

      メンバーシッププランの月額。（例：`1500.00`）
      :::::

      :::::parameter-table-entry
      #undefined
      membership.currency

      #undefined
      String

      `membership.price`の通貨。以下のいずれかの値です。

      - `JPY`：日本円
      - `TWD`：台湾ドル
      - `THB`：タイバーツ
      :::::

      :::::parameter-table-entry
      #undefined
      user

      #undefined
      Object

      ユーザーのメンバーシップ加入情報を含むオブジェクト。
      :::::

      :::::parameter-table-entry
      #undefined
      user.membershipNo

      #undefined
      Number

      メンバーシッププランにおけるユーザーのメンバー番号。
      :::::

      :::::parameter-table-entry
      #undefined
      user.joinedTime

      #undefined
      Number

      ユーザーがメンバーシップに加入した時刻。UNIX時間（秒）で返されます。
      :::::

      :::::parameter-table-entry
      #undefined
      user.nextBillingDate

      #undefined
      String

      メンバーシッププランの次回更新日。

      - フォーマット：`yyyy-MM-dd`（例：`2024-02-08`）
      - タイムゾーン：UTC+9
      :::::

      :::::parameter-table-entry
      #undefined
      user.totalSubscriptionMonths

      #undefined
      Number

      メンバーシッププランに加入している月単位の期間。ユーザーが過去に同一のメンバーシッププランを解約して、再加入した場合、再加入後の期間のみがカウントされます。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "subscriptions": [
          {
            "membership": {
              "membershipId": 3189,
              "title": "ベーシックプラン",
              "description": "毎週土曜にメッセージとフォトが届きます。",
              "benefits": ["メンバー限定メッセージ", "メンバー限定フォト"],
              "price": 500.00,
              "currency": "JPY"
            },
            "user": {
              "membershipNo": 1,
              "joinedTime": 1707214784,
              "nextBillingDate": "2024-02-08",
              "totalSubscriptionMonths": 1
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                                         |
  | ----- | ------------------------------------------------------------------------------------------ |
  | `400` | 無効なユーザーIDが指定されています。                                                                        |
  | `404` | ユーザーが加入しているメンバーシップの情報が取得できませんでした。次のような理由が考えられます。- ユーザーがメンバーシップに加入していない - 対象のユーザーIDが存在していない |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なユーザーIDが指定されていた場合（400 Bad Request）
      {
        "message": "The value for the 'userId' parameter is invalid"
      }

      // ユーザーがメンバーシップに加入していなかった場合（404 Not Found）
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
