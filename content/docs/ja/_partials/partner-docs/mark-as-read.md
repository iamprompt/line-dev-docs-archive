---
title: Mark As Read
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/partner-docs/mark-as-read
__hash__: rxn5B1uKc6Zxo_KNajzyhiZ3-0WxcTIMRhUJ8IMS9mk
seo:
  description: ''
---

## 既読API（旧）

### ユーザーからのメッセージに既読を付ける

::reference-with-code
  :::reference-content
  特定のユーザーから送信されたすべてのメッセージに「既読」を表示できます。

    ::::admonition{title="既読をつける新しいエンドポイントを使用してください" type="tip"}
    既読API（旧）は引き続き使用できますが、ユーザーからのメッセージに既読をつける処理をこれから実装する場合は、Messaging APIの「[メッセージに既読をつける](/reference/messaging-api/#mark-as-read)」エンドポイントを使用してください。「メッセージに既読をつける」エンドポイントは申請なしに使用でき、またチャット機能との併用も可能です。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/message/markAsRead \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer {channel_access_token}' \
      -d '{
          "chat": {
              "userId": "Uxxxxxxxxxxxxxxxxxx"
          }
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/v2/bot/message/markAsRead`

#### レート制限

2,000リクエスト/秒

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::

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
  chat.userId

  #undefined
  String

  対象のユーザーID。
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

  | コード   | 説明                  |
  | ----- | ------------------- |
  | `400` | 無効なユーザーIDが指定されています。 |

  詳しくは、『Messaging APIリファレンス』の「[ステータスコード](/reference/messaging-api/#status-codes)」および「[エラーレスポンス](/reference/messaging-api/#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なユーザーIDを指定した場合（400 Bad Request）
      {
        "message": "The property, 'chat.chatId', in the request body is invalid (line: -, column: -)"
      }
      ```
      :::::
    ::::
  :::
::
