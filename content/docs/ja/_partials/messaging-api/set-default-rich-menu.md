---
title: Set Default Rich Menu
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/set-default-rich-menu
__hash__: OcmYE6sm5iNknokcyZFUkbVCMNAqTz67kwTreRa2mOw
seo:
  description: ''
---

### デフォルトのリッチメニューを設定する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/user/all/richmenu/{richMenuId}"}::reference-with-code
  :::reference-content
  デフォルトのリッチメニューを設定するAPIです。デフォルトのリッチメニューは、LINE公式アカウントとのトーク画面を開いたすべてのユーザーに表示されます。すでにデフォルトのリッチメニューが設定されていた場合は、新しく指定したリッチメニューに置き換えられます。

  リッチメニューの表示優先順位は高い順に以下のとおりです。

  1. [Messaging APIで設定するユーザー単位のリッチメニュー](#link-rich-menu-to-user)
  2. Messaging APIで設定するデフォルトのリッチメニュー
  3. [LINE Official Account Managerで設定するデフォルトのリッチメニュー](/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-with-the-line-manager)
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/user/all/richmenu/{richMenuId} \
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

  | コード   | 説明                     |
  | ----- | ---------------------- |
  | `400` | リッチメニューに画像が設定されていません。  |
  | `404` | 存在しないリッチメニューが指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // リッチメニューに画像が設定されていない場合（400 Bad Request）
      {
        "message": "must upload richmenu image before applying it to user",
        "details": []
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
