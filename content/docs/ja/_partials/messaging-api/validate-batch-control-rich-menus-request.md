---
title: Validate Batch Control Rich Menus Request
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/validate-batch-control-rich-menus-request
__hash__: wQdII7GWL5f-84JfvOwaFbxmtSM5-2B5DV8o3AAdKb4
seo:
  description: ''
---

### リッチメニューの一括操作のリクエストを検証する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu/validate/batch"}::reference-with-code
  :::reference-content
  [リンク済みのリッチメニューを一括で置き換え・解除する](#batch-control-rich-menus-of-users)エンドポイントの[リクエストボディ](#batch-control-rich-menus-of-users-request-body)が有効かを検証します。

  このエンドポイントを利用することで、リンク済みのリッチメニューを一括で置き換え・解除するときと同様に、以下のようなエラーを検出できます。

  - 指定したリッチメニューが存在しない場合
  - 指定したリッチメニューに画像が設定されていない場合
  - `operations`プロパティに複数の操作を指定し、その内容が誤っている場合

    - `operations`プロパティに1,000件を超える配列を指定している
    - `type`プロパティに`unlinkAll`と、それ以外`type`を同時に指定している
    - 同じリッチメニューのIDを複数の`from`プロパティに指定している
  - `resumeRequestKey`プロパティに指定した文字列が無効な場合
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/richmenu/validate/batch \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: application/json" \
      -d '{
        "operations": [
          {
            "type": "link",
            "from": "{置き換える前のリッチメニューのID}",
            "to": "{置き換え先のリッチメニューのID}"
          },
          {
            "type": "unlink",
            "from": "{リンクを解除するリッチメニューのID}"
          }
        ],
        "resumeRequestKey": "{[0-9a-zA-Z-_]{1,100}の正規表現にマッチする任意の文字列}"
      }'
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

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  operations

  #undefined
  [リッチメニュー操作オブジェクト](#batch-control-rich-menus-of-users-operations)の配列

  リッチメニューへの一括操作の内容を定義します。  

  最大件数：1,000件
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  resumeRequestKey

  #undefined
  String

  リトライ用のキー。`[0-9a-zA-Z\-_]{1,100}`の正規表現にマッチする文字列。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と空のJSONオブジェクトを返します。
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {}
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                                                                                                                                                                    |
  | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | リクエストボディの検証に失敗しました。次のような理由が考えられます。- 無効なリッチメニューのIDが指定されている。 - 置き換え先のリッチメニューに画像が設定されていない。 - `operations`プロパティに1000件を超える操作が指定されている。 - `type`プロパティに`unlinkAll`と、それ以外の値が同時に指定されている。 - 同じリッチメニューのIDが複数の`from`プロパティに指定されている。 |
  | `404` | 存在しないリッチメニューが指定されています。                                                                                                                                                                                                |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 画像を設定していないリッチメニューを指定した場合（400 Bad Request）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "'to' richmenu (richmenu-0c757d...) must have image but it doesn't",
            "property": "operations[0].to"
          }
        ]
      }

      // 存在しないリッチメニューのIDを指定した場合（404 Not Found）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Richmenu (richmenu-d3385e...) is not found",
            "property": "operations[0].to"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
