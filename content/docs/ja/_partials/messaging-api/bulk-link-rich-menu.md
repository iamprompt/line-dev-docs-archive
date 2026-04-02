---
title: Bulk Link Rich Menu
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/bulk-link-rich-menu
__hash__: Tj7QW2deuKXkiM8cHOqqidYkMA9cYckQGhsGzxBQJdo
seo:
  description: ''
---

### リッチメニューと複数のユーザーをリンクする

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu/bulk/link"}::reference-with-code
  :::reference-content
  リッチメニューと複数のユーザーをリンクします。

  リッチメニューの表示優先順位は高い順に以下のとおりです。

  1. Messaging APIで設定するユーザー単位のリッチメニュー
  2. [Messaging APIで設定するデフォルトのリッチメニュー](#set-default-rich-menu)
  3. [LINE Official Accountで設定するデフォルトのリッチメニュー](/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-with-the-line-manager)

  [リッチメニューと1人のユーザーをリンクする](#link-rich-menu-to-user)場合と異なり、このエンドポイントのリクエストはバックグラウンドで非同期に処理されます。通常、処理は数秒で完了します。

  ステータスコード`202`が返されたとしても、リッチメニューがリンクされていない場合があります。リクエストの処理が成功したかどうかを検証するには、[ユーザーのリッチメニューのIDを取得](/reference/messaging-api/#get-rich-menu-id-of-user)して、リッチメニューがユーザーにリンクされていることを確認します。

  なお、[エラーレスポンス](#bulk-link-rich-menu-error-response)が返された場合は、リッチメニューはどのユーザーにもリンクされません。

  #### リッチメニューをリンクできる条件

  リッチメニューは、LINE公式アカウントを友だち追加しているユーザーに対してリンクできます。レスポンスでステータスコード`202`が返された場合、リクエストで指定したユーザーにはリッチメニューがリンクされます。

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
      curl -v -X POST https://api.line.me/v2/bot/richmenu/bulk/link \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: application/json" \
      -d '{
        "richMenuId":"{richMenuId}",
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
  richMenuId

  #undefined
  String

  リッチメニューのID
  :::

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

  | コード   | 説明                                                                                                      |
  | ----- | ------------------------------------------------------------------------------------------------------- |
  | `400` | リッチメニューをリンクできませんでした。次のような理由が考えられます。- 無効なユーザーIDが指定されている。 - 無効なリッチメニューのIDが指定されている。 - リッチメニューに画像が設定されていない。 |
  | `404` | 存在しないリッチメニューが指定されています。                                                                                  |

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

      // 無効なリッチメニューのIDを指定した場合（400 Bad Request）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "invalid richMenuId",
            "property": "richMenuId"
          }
        ]
      }

      // リッチメニューが存在しない場合（404 Not Found）
      {
          "message": "richmenu not found",
          "details": []
      }
      ```
      :::::
    ::::
  :::
::
