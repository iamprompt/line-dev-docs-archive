---
title: Get Batch Control Rich Menus
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-batch-control-rich-menus
__hash__: '-RbVt2fiR-X13MWuG6kyPri_QNDCm3i3WXQqH2tnxhA'
seo:
  description: ''
---

### リッチメニューの一括操作の進行状況を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/richmenu/progress/batch"}::reference-with-code
  :::reference-content
  [リンク済みのリッチメニューを一括で置き換え・解除](#batch-control-rich-menus-of-users)したときの進行状況を取得します。

  進行状況を取得できる期間は、`acceptedTime`プロパティの値（タイムスタンプ）から14日間（336時間）です。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET 'https://api.line.me/v2/bot/richmenu/progress/batch?requestId={request_id}' \
      -H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}'
      ```
      :::::
    ::::
  :::
::

#### レート制限

100リクエスト/時

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
  requestId

  ユーザーにリンク済みのリッチメニューを一括で操作したときのリクエストID。リクエストIDは、Messaging APIのリクエストごとに発行されるIDです。[レスポンスヘッダー](#response-headers)に含まれます。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  HTTPステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      phase

      #undefined
      String

      進行状況。以下のいずれかの値です。

      - `ongoing`：リッチメニューの一括操作が進行中です。
      - `succeeded`：リッチメニューの一括操作が完了しました。
      - `failed`：リッチメニューの一括操作に失敗しました。これは、1人以上のユーザーのリッチメニューを操作できなかったことを意味します。また、操作が正常に完了したユーザーも存在する可能性があります。  
        
      初回のリクエスト時にリトライ用のキーを指定することで、失敗した操作を安全にリトライできます。詳しくは、「[リトライ時に意図しない操作を避けるための方法](#batch-control-rich-menus-of-users-retry-key)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      acceptedTime

      #undefined
      String

      リッチメニューの一括操作のリクエストを受け付けた時間をミリ秒で表します。

      - フォーマット：[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){rel="[\"nofollow\"]"}（例：`2020-12-03T10:15:30.121Z`）
      - タイムゾーン：UTC
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      completedTime

      #undefined
      String

      リッチメニューの一括操作が完了した時間をミリ秒で表します。`phase`プロパティが`succeeded`または`failed`の場合にのみ返されます。

      - フォーマット：[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){rel="[\"nofollow\"]"}（例：`2020-12-03T10:15:30.121Z`）
      - タイムゾーン：UTC
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "phase": "succeeded",
        "acceptedTime": "2023-06-26T07:37:21.083Z",
        "completedTime": "2023-06-26T09:12:12.197Z"
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
  | `400` | 無効なリクエストIDが指定されています。                                                         |
  | `404` | 進行状況を所得できませんでした。次のような理由が考えられます。- 存在しないリクエストIDが指定されている。 - 進行状況を取得できる期間を超えている。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 存在しないリクエストIDを指定した場合（404 Not Found）
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
