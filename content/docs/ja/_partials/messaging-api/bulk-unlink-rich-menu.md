---
title: Bulk Unlink Rich Menu
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/bulk-unlink-rich-menu
__hash__: QKRtoIU2G92-sUBkLP_Und6IlH-tcpnUB6L3Wwps3n8
seo:
  description: ''
---

### 複数のユーザーのリッチメニューのリンクを解除する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu/bulk/unlink"}::reference-with-code
  :::reference-content
  複数のユーザーのリッチメニューのリンクを解除します。

  [リッチメニューと1人のユーザーのリンクを解除する](#unlink-rich-menu-from-user)場合と異なり、このエンドポイントのリクエストはバックグラウンドで非同期に処理されます。通常、処理は数秒で完了します。

  ステータスコード`202`が返されたとしても、リッチメニューのリンクが解除されていない場合があります。リクエストの処理が成功したかどうかを検証するには、[ユーザーのリッチメニューのIDを取得](/reference/messaging-api/#get-rich-menu-id-of-user)して、リンクを解除したはずのリッチメニューがユーザーにリンクされていないことを確認します。

  なお、[エラーレスポンス](#bulk-unlink-rich-menu-error-response)が返された場合は、どのユーザーのリッチメニューのリンクも解除されません。

  #### リッチメニューのリンクを解除できる条件

  リッチメニューのリンクの解除は、LINE公式アカウントを友だち追加しているユーザーに対して可能です。レスポンスでステータスコード`202`が返された場合、リクエストで指定したユーザーのリッチメニューのリンクが解除されます。

  ステータスコード`202`が返されたとしても、以下のユーザーは対象のLINE公式アカウントと友だちではないため、処理の対象となりません。

  - LINEアカウントを削除したユーザー
  - LINE公式アカウントをブロックしているユーザー
  - LINE公式アカウントを友だち追加していないユーザー
  - 他のプロバイダー配下のチャネルで取得したユーザーIDなど、チャネルにユーザーIDが存在しないユーザー
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/richmenu/bulk/unlink \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: application/json" \
      -d '{
        "userIds":["{userId1}","{userId2}"]
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
  userIds

  #undefined
  Array of strings

  ユーザーIDの配列。[Webhookイベントオブジェクト](#webhook-event-objects)の`source`オブジェクトで返されます。LINEに表示されるLINE IDは使用しないでください。  

  最大ユーザーID数：500
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`202`と空のJSONオブジェクトを返します。
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

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なユーザーIDが含まれていた場合（400 Bad Request）
      {
        "message": "The property, 'userIds[0]', in the request body is invalid (line: -, column: -)"
      }
      ```
      :::::
    ::::
  :::
::
