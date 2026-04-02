---
title: Get Name List Of Units
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-name-list-of-units
__hash__: 9GOhHpdRBN8WrXnVjA7YpwPo0KsqkikCMtDXHJhYic4
seo:
  description: ''
---

### 当月中に付与したユニット名のリストを取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/aggregation/list"}::reference-with-code
  :::reference-content
  当月中にメッセージに付与したユニット名の、一意なリストを取得します。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/message/aggregation/list \
      -H 'Authorization: Bearer {channel access token}' \
      --data-urlencode 'limit=30' \
      -G
      ```
      :::::
    ::::
  :::
::

#### レート制限

2,000リクエスト/秒

レート制限について詳しくは、「[レート制限](#rate-limits)」を参照してください。

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  limit

  #undefined
  String

  1回のリクエストで取得するユニット名の最大数です。デフォルト値は`100`です。  

  最大値：`100`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  start

  #undefined
  String

  継続トークンの値。[レスポンス](#get-a-list-of-unit-names-assigned-during-this-month-response)で返されるJSONオブジェクトの`next`プロパティに含まれます。1回のリクエストでユニット名をすべて取得できない場合は、このパラメータを指定して残りの配列を取得します。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      customAggregationUnits

      #undefined
      Array of strings

      ユニット名を表す文字列の配列です。配列には、当月中にメッセージに付与したユニット名が一意に含まれています。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      next

      #undefined
      String

      継続トークン。ユニット名の次の配列を取得するために使用します。このプロパティは、前回までのレスポンスの`customAggregationUnits`プロパティで取得しきれなかったユニット名がある場合にのみ返されます。

      継続トークンの有効期間は24時間（86,400秒間）です。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "customAggregationUnits": ["promotion_a", "promotion_b"],
        "next": "jxEWCEEP..."
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

  | コード   | 説明                                                                           |
  | ----- | ---------------------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- 無効な継続トークンを指定している。 - `limit`プロパティに不正な値を指定している。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 有効期限切れなどの無効な継続トークンを指定した場合（400 Bad Request）
      {
        "message": "Invalid start param"
      }
      ```
      :::::
    ::::
  :::
::
