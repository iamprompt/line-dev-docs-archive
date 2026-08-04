---
title: Get Number Of Units
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-number-of-units
__hash__: ofwYeMA_IK7qg6x0An5pwAdjFvbo0GIe5iirCGTG8oA
seo:
  description: ''
---

### 当月中に付与したユニット名の種類数を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/aggregation/info"}::reference-with-code
  :::reference-content
  当月中にメッセージに付与したユニット名の種類数を取得します。メッセージ送信時にユニット名を付与する際の制限については、『Messaging APIドキュメント』の「[ユニット名の種類数の上限](/docs/messaging-api/unit-based-statistics-aggregation/#limit-to-the-number-of-units)」を参照してください。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/message/aggregation/info \
      -H 'Authorization: Bearer {channel access token}'
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

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      numOfCustomAggregationUnits

      #undefined
      Number

      当月中にメッセージに付与したユニット名の種類数。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "numOfCustomAggregationUnits": 22
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
