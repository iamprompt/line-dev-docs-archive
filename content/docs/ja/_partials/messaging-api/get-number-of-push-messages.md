---
title: Get Number Of Push Messages
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-number-of-push-messages
__hash__: '-FUbwz5sC9kwNWKl2e0xo_94nAlX8LtigGbVZ3ywMY4'
seo:
  description: ''
---

### 送信済みのプッシュメッセージの数を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/delivery/push"}::reference-with-code
  :::reference-content
  [`/bot/message/push`](#send-push-message)エンドポイントを使って送信されたメッセージの数を取得します。

  この操作により取得されるメッセージ数に、LINE Official Account Managerから送信されたメッセージの数は含まれません。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET "https://api.line.me/v2/bot/message/delivery/push?date={yyyyMMdd}" \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### APIプレイグラウンド

:api-playground{endpoint="/bot/message/delivery/push"}#### レート制限

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
  :::parameter-table-entry{required="true"}
  #undefined
  date

  メッセージが送信された日付

  - フォーマット：`yyyyMMdd`（例：`20191231`）
  - タイムゾーン：UTC+9
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      status

      #undefined
      String

      集計処理の状態。以下のいずれかの値です。

      - `ready`：メッセージ数を取得できます。
      - `unready`：`date`に指定した日付のメッセージ数の集計がまだ完了していません。しばらくしてからリクエストを再実行してください。通常、集計処理は翌日中に完了します。
      - `out_of_service`：`date`に指定した日付が、集計システムの稼働開始日（2018年3月31日）より前です。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      success

      #undefined
      Number

      `date`に指定した日付に、Messaging APIを使って送信されたメッセージの数。`status`の値が`ready`の場合にのみ、レスポンスに含まれます。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "status": "ready",
        "success": 10000
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

  | コード   | 説明                     |
  | ----- | ---------------------- |
  | `400` | 無効なフォーマットの日付が指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なフォーマットの日付を指定した場合（400 Bad Request）
      {
        "message": "The value for the 'date' parameter is invalid"
      }
      ```
      :::::
    ::::
  :::
::
