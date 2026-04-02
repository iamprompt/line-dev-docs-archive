---
title: Get Insight Followers
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-insight-followers
__hash__: YQ2aIvEENdhRDLFJKvNK4P6oB6c4LUyq7U0ZGic9gKY
seo:
  description: ''
---

### 友だち数を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/insight/followers?date={date}"}::reference-with-code
  :::reference-content
  LINE公式アカウントの友だち数を確認できます。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET 'https://api.line.me/v2/bot/insight/followers?date=20190418' \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### レート制限

60リクエスト/時

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

  友だち数を確認する日付

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

      - `ready`：数値を取得できます。
      - `unready`：`date`に指定した日付の友だち数の集計がまだ完了していません。しばらくしてからリクエストを再実行してください。通常、集計処理は翌日中に完了します。
      - `out_of_service`：`date`に指定した日付が、集計システムの稼働開始日（2016年11月1日）より前です。
      :::::

      :::::parameter-table-entry
      #undefined
      followers

      #undefined
      Number

      `date`に指定した日付までに、アカウントが友だち追加された回数。アカウントがブロックされたり、あなたを友だち追加したユーザーがLINEアカウントを削除したりしても、この値は減少しません。

      `status`の値が`ready`以外の場合、`null`になります。
      :::::

      :::::parameter-table-entry
      #undefined
      targetedReaches

      #undefined
      Number

      `date`に指定した日付時点の、性別や年齢、地域で絞り込んだターゲティングメッセージの配信先となりうる友だちの総数。LINEおよびその他のLINEサービスの利用頻度が高く、属性の高精度な推定が可能な友だちが含まれます。

      `status`の値が`ready`以外の場合、`null`になります。
      :::::

      :::::parameter-table-entry
      #undefined
      blocks

      #undefined
      Number

      `date`に指定した日付時点で、アカウントをブロックしているユーザーの数。ブロックが解除されると、この値は減少します。

      `status`の値が`ready`以外の場合、`null`になります。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 集計が完了していた場合
      {
        "status": "ready",
        "followers": 7620,
        "targetedReaches": 5848,
        "blocks": 237
      }

      // まだ集計が完了していなかった場合
      {
        "status": "unready",
        "followers": null,
        "targetedReaches": null,
        "blocks": null
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

  | コード   | 説明                              |
  | ----- | ------------------------------- |
  | `400` | 日付が指定されていない、もしくは無効な日付が指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 日付を指定しなかった場合（400 Bad Request）
      {
        "message": "date is required"
      }

      // 無効な日付を指定した場合（400 Bad Request）
      {
        "message": "Bad Request"
      }
      ```
      :::::
    ::::
  :::
::
