---
title: Get Rich Menu
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-rich-menu
__hash__: 6DB6AJ40uHTSULoEcTOnVwAZiUcmx7_yP2IStqnXxFo
seo:
  description: ''
---

### リッチメニューを取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/richmenu/{richMenuId}"}::reference-with-code
  :::reference-content
  IDを指定してリッチメニューを取得するAPIです。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/richmenu/{richMenuId} \
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

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  richMenuId

  リッチメニューのID
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と、[リッチメニューレスポンスオブジェクト](#rich-menu-response-object)を含むJSONレスポンスが返されます。
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "richMenuId": "{richMenuId}",
        "name": "Nice rich menu",
        "size": {
          "width": 2500,
          "height": 1686
        },
        "chatBarText": "Tap to open",
        "selected": false,
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
  | `404` | 存在しないリッチメニューが指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 存在しないリッチメニューを指定した場合（404 Not Found）
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
