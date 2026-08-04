---
title: Send Broadcast
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/send-broadcast
__hash__: F_PyGuUjrQopzLyHVOnPTJjBecCYXKBzzC035ruL6eA
seo:
  description: ''
---

### ブロードキャストメッセージを送る

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/message/broadcast"}::reference-with-code
  :::reference-content
  LINE公式アカウントと友だちになっているすべてのユーザーに、任意のタイミングでメッセージを送信します。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/message/broadcast \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'X-Line-Retry-Key: {UUID}' \
      -d '{
          "messages":[
              {
                  "type":"text",
                  "text":"Hello, world1"
              },
              {
                  "type":"text",
                  "text":"Hello, world2"
              }
          ]
      }'
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
  Content-Type

  application/json
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  X-Line-Retry-Key

  リトライキー。任意の方法で生成した16進表記のUUID（例：123e4567-e89b-12d3-a456-426614174000）を指定します。リトライキーはLINEから提供されません。開発者自身が一意のリトライキーを生成する必要があります。詳しくは、『Messaging APIドキュメント』の「[失敗したAPIリクエストを再試行する](/docs/messaging-api/retrying-api-request/)」を参照してください。
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  messages

  #undefined
  [メッセージオブジェクト](#message-objects)の配列

  送信するメッセージ  

  最大件数：5

  [ブロードキャストメッセージのメッセージオブジェクトを検証する](#validate-message-objects-of-broadcast-message)エンドポイントを使用すると、メッセージオブジェクトが有効かを検証できます。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  notificationDisabled

  #undefined
  Boolean

  - `true`：メッセージ送信時に、ユーザーに通知されない。
  - `false`：メッセージ送信時に、ユーザーに通知される。ただし、LINEで通知をオフにしている場合は通知されません。

  デフォルト値は`false`です。
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

  | コード   | 説明                                                                                                                                                                                                                                      |
  | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | 無効なメッセージオブジェクトが指定されています。                                                                                                                                                                                                                |
  | `409` | 同じリトライキーを含むリクエストがすでに受理されています。詳しくは、「APIリクエストを再試行する」の「[すでにリクエストが受理されていた場合のレスポンス](#retry-api-request-response)」を参照してください。                                                                                                                  |
  | `429` | リクエスト数が上限を超過しました。次のような理由が考えられます。- このエンドポイントの[レート制限](#send-broadcast-rate-limit)を超過した。 - [当月に送信できるメッセージ数の上限目安](#get-quota)を超過した。  メッセージ数の上限目安について詳しくは、『Messaging APIドキュメント』の「[Messaging APIの料金](/docs/messaging-api/pricing/)」を参照してください。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。

  エラーが返された場合、メッセージは送信されません。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // リクエストに無効なパラメータが含まれていた場合（400 Bad Request）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "May not be empty",
            "property": "messages[0].type"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
