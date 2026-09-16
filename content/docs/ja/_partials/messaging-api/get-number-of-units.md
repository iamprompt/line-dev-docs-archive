---
title: Get Number Of Units
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-number-of-units
__hash__: tW9XuuPNWfGe1aa0Rp5MtfmFyBiFJlELGkHl4K3sZmY
seo:
  description: ''
---

### 当月中に付与したユニット名の種類数を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/aggregation/info"}::reference-with-code
  :::reference-content
  当月中にプッシュメッセージ、マルチキャストメッセージ、またはLINE通知メッセージに付与したユニット名の種類数を取得します。メッセージ送信時にユニット名を付与する際の制限については、『Messaging APIドキュメント』の「[ユニット名の種類数の上限](/docs/messaging-api/unit-based-statistics-aggregation/#limit-to-the-number-of-units)」を参照してください。

    ::::admonition{title="LINE通知メッセージのユニット名が反映されるタイミング" type="tip"}
    LINE通知メッセージの場合、APIリクエストが受け付けられても、メッセージが実際に送信されるまでは、指定したユニット名は種類数にカウントされません。詳しくは、『LINE通知メッセージドキュメント』の「[統計情報は実際にメッセージが送信されてから更新される](/docs/partner-docs/line-notification-messages/statistics/#statistics-are-aggregated-when-the-message-is-sent)」を参照してください。
    ::::
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

      当月中にプッシュメッセージ、マルチキャストメッセージ、またはLINE通知メッセージに付与したユニット名の種類数。
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
