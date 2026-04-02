---
title: Validate Rich Menu Object
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/validate-rich-menu-object
__hash__: '-zE1zrIJBLx3TV8eCfN4Wrr4m4y8_G-yMEKGK2-wcYU'
seo:
  description: ''
---

### リッチメニューオブジェクトを検証する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu/validate"}::reference-with-code
  :::reference-content
  リッチメニューオブジェクトを検証するAPIです。

  [リッチメニューオブジェクト](#rich-menu-object)が、[リッチメニューの作成](#create-rich-menu)のリクエストボディとして有効かを検証できます。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/richmenu/validate \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d \
      '{
          "size": {
            "width": 2500,
            "height": 1686
          },
          "selected": false,
          "name": "Nice rich menu",
          "chatBarText": "Tap to open",
          "areas": [
            {
              "bounds": {
                "x": 0,
                "y": 0,
                "width": 2500,
                "height": 1686
              },
              "action": {
                "type": "postback",
                "data": "action=buy&itemid=123"
              }
            }
         ]
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

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::
::

#### リクエストボディ

検証したい[リッチメニューオブジェクト](#rich-menu-object)を指定します。

#### レスポンス

::reference-with-code
  :::reference-content
  リクエストボディがリッチメニューオブジェクトとして有効な場合、ステータスコード`200`と空のJSONオブジェクトを返します。
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

  | コード   | 説明                         |
  | ----- | -------------------------- |
  | `400` | 無効なリッチメニューオブジェクトが指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // リッチメニューオブジェクトのJSONで必須のキーが存在しない場合（400 Bad Request）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "must be specified",
            "property": "name"
          }
        ]
      }

      // URIアクションに無効なスキームを指定した場合（400 Bad Request）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "invalid uri",
            "property": "areas[0].action.uri"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
