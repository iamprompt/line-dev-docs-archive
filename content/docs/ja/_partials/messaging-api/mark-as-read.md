---
title: Mark As Read
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/mark-as-read
__hash__: mKT0Wlj93k7ylm_jd4Bx5EPApbRugYcsiGsYK1PTr28
seo:
  description: ''
---

### メッセージに既読をつける

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/chat/markAsRead"}::reference-with-code
  :::reference-content
  指定したメッセージと、それ以前に送られたすべてのメッセージに既読をつけます。詳しくは、『Messaging APIドキュメント』の「[メッセージに既読をつける](/docs/messaging-api/mark-as-read/)」を参照してください。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/chat/markAsRead \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -d '{
        "markAsReadToken": "{mark as read token}"
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
  markAsReadToken

  #undefined
  String

  既読トークン。Webhookの[メッセージイベントオブジェクト](#message-event)の`markAsReadToken`プロパティに含まれます。
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
  | `400` | 無効な既読トークンが指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効な既読トークンを指定した場合（400 Bad Request）
      {
        "message": "Invalid markAsReadToken. Tokens must be used by the bot that received them via Webhook."
      }
      ```
      :::::
    ::::
  :::
::
