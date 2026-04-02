---
title: Get Membership Plans
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-membership-plans
__hash__: yCTxMA2ENEoKz90gS-8RE41wt1YqqHE3Madk8WJ7-co
seo:
  description: ''
---

### 提供中のメンバーシッププランを取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/membership/list"}::reference-with-code
  :::reference-content
  LINE公式アカウントのメンバーシップで提供中の、メンバーシッププランを取得できます。

  審査中のプランや終了後のプランは含まれません。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/membership/list \
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

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下のプロパティを含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      memberships

      #undefined
      Array

      提供中のメンバーシッププランの配列です。  

      プランの最大数：5
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].membershipId

      #undefined
      Number

      メンバーシッププランのID。
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].title

      #undefined
      String

      メンバーシッププランのプラン名。
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].description

      #undefined
      String

      メンバーシッププランの説明。
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].benefits

      #undefined
      Array of strings

      メンバーシッププランの特典のリスト。  

      特典の最大数：5
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].price

      #undefined
      Number

      メンバーシッププランの月額。（例：`1500.00`）
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].currency

      #undefined
      String

      `memberships[].price`の通貨。以下のいずれかの値です。

      - `JPY`：日本円
      - `TWD`：台湾ドル
      - `THB`：タイバーツ
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].memberCount

      #undefined
      Number

      加入しているメンバー数。
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].memberLimit

      #undefined
      Number

      加入できるメンバー数の上限。上限を設定していない場合は`null`になります。
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].isInAppPurchase

      #undefined
      Boolean

      加入ユーザーの支払い方法。

      - `true`：App内課金
      - `false`：Web決済
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].isPublished

      #undefined
      Boolean

      メンバーシッププランのステータス。

      - `true`：公開中
      - `false`：非公開（終了手続きを行い、プランが非公開になったが、まだ特典の提供は終了していない状態）
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "memberships": [
          {
            "membershipId": 3189,
            "title": "ベーシックプラン",
            "description": "毎週土曜にメッセージとフォトが届きます。",
            "benefits": ["メンバー限定メッセージ", "メンバー限定フォト"],
            "price": 500.00,
            "currency": "JPY",
            "memberCount": 1,
            "memberLimit": null,
            "isInAppPurchase": true,
            "isPublished": true
          },
          {
            "membershipId": 3213,
            "title": "プレミアムプラン",
            "description": "特別なパーティにご招待します。",
            "benefits": ["メンバー限定パーティー"],
            "price": 1500.00,
            "currency": "JPY",
            "memberCount": 0,
            "memberLimit": null,
            "isInAppPurchase": false,
            "isPublished": true
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

  | コード   | 説明                    |
  | ----- | --------------------- |
  | `404` | 提供中のメンバーシッププランがありません。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 提供中のメンバーシッププランがない場合（404 Not Found）
      {
        "message": "Membership plan not found"
      }
      ```
      :::::
    ::::
  :::
::
