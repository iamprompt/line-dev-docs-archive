---
title: Validate Message Objects Of Narrowcast Message
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/validate-message-objects-of-narrowcast-message
__hash__: GufwWvc8li-IOzzL0EfNeiOlHT4pdQxapMciOilipG4
seo:
  description: ''
---

### ナローキャストメッセージのメッセージオブジェクトを検証する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/message/validate/narrowcast"}::reference-with-code
  :::reference-content
  [メッセージオブジェクト](#message-objects)の配列が、[ナローキャストメッセージを送る](#send-narrowcast-message)エンドポイントの[リクエストボディ](#send-narrowcast-request-body)の`messages`プロパティの値として有効かを検証します。`messages`プロパティ以外のプロパティの値が有効かは検証しません。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/message/validate/narrowcast \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d \
      '{
        "messages": [
          {
            "type": "text",
            "text": "Hello, world"
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

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  messages

  #undefined
  Array of objects

  検証したい[メッセージオブジェクト](#message-objects)の配列
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

  | コード   | 説明                       |
  | ----- | ------------------------ |
  | `400` | 無効なメッセージオブジェクトが指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例（メッセージオブジェクトを最大件数より多く指定した場合）*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Size must be between 1 and 5",
            "property": "messages"
          }
        ]
      }
      ```
      :::::
    ::::

  *エラーレスポンスの例（テキストメッセージの文字数を最大文字数より多く指定した場合）*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Length must be between 0 and 5000",
            "property": "messages[0].text"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
