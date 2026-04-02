---
title: Link Rich Menu
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/link-rich-menu
__hash__: fmQfsl1BEPtdRcGg3WTxhXESuMtmgGGuZcKjrNVQkaM
seo:
  description: ''
---

### リッチメニューとユーザーをリンクする

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/user/{userId}/richmenu/{richMenuId}"}::reference-with-code
  :::reference-content
  リッチメニューとユーザーをリンクするAPIです。複数のリッチメニューを1人のユーザーに同時にリンクすることはできません。ユーザーにすでにリッチメニューがリンクされていた場合は、新しく指定したリッチメニューに置き換えられます。

  リッチメニューの表示優先順位は高い順に以下のとおりです。

  1. Messaging APIで設定するユーザー単位のリッチメニュー
  2. [Messaging APIで設定するデフォルトのリッチメニュー](#set-default-rich-menu)
  3. [LINE Official Account Managerで設定するデフォルトのリッチメニュー](/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-with-the-line-manager)

  #### リッチメニューをリンクできる条件

  リッチメニューは、LINE公式アカウントを友だち追加しているユーザーに対してリンクできます。

  なお、以下のユーザーに対してリッチメニューをリンクしようとした場合、ステータスコード`200`が返されますが、実際にはリッチメニューはリンクされません。

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
      curl -v -X POST https://api.line.me/v2/bot/user/{userId}/richmenu/{richMenuId} \
      -H "Authorization: Bearer {channel access token}"
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

  :::parameter-table-entry{required="true"}
  #undefined
  userId

  ユーザーID。[Webhookイベントオブジェクト](#webhook-event-objects)の`source`オブジェクトで返されます。LINEに表示されるLINE IDは使用しないでください。
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

  | コード   | 説明                                                                             |
  | ----- | ------------------------------------------------------------------------------ |
  | `400` | リッチメニューをリンクできませんでした。次のような理由が考えられます。- 無効なユーザーIDが指定されている。 - リッチメニューに画像が設定されていない。 |
  | `404` | 存在しないリッチメニューが指定されています。                                                         |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。

  エラーが返された場合、リッチメニューはリンクされません。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なユーザーIDを指定した場合（400 Bad Request）
      {
        "message": "The value for the 'userId' parameter is invalid"
      }

      // リッチメニューが存在しない場合（404 Not Found）
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
