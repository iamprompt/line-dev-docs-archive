---
title: Delete Rich Menu Alias
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/delete-rich-menu-alias
__hash__: snLcuhk-HJgPsAYK8Uj4Fsq-AV3pVAaFw6Cyg52DyvY
seo:
  description: ''
---

### リッチメニューエイリアスを削除する

:api-endpoint{protocol="delete" endpoint="https://api.line.me/v2/bot/richmenu/alias/{richMenuAliasId}"}::reference-with-code
  :::reference-content
  リッチメニューエイリアスを削除するAPIです。

    ::::admonition{title="リッチメニューエイリアス数の上限について" type="note"}
    Messaging APIで作成できるリッチメニューエイリアスの数の上限は、LINE公式アカウントあたり1,000件です。この上限を超過した場合は、新しいリッチメニューエイリアスを作成する前に既存のリッチメニューエイリアスを削除する必要があります。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      # リッチメニューエイリアスAを削除する場合の例
      curl -v -X DELETE https://api.line.me/v2/bot/richmenu/alias/richmenu-alias-a \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### レート制限

100リクエスト/時

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
  richMenuAliasId

  削除したいリッチメニューエイリアスのID。
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

  | コード   | 説明                          |
  | ----- | --------------------------- |
  | `400` | 無効なリッチメニューエイリアスIDが指定されています。 |
  | `404` | 存在しないリッチメニューエイリアスが指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 存在しないリッチメニューエイリアスを指定した場合（404 Not Found）
      {
        "message": "richmenu alias not found",
        "details": []
      }
      ```
      :::::
    ::::
  :::
::
