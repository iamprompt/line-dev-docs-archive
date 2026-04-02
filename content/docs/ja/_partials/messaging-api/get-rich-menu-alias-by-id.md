---
title: Get Rich Menu Alias By Id
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-rich-menu-alias-by-id
__hash__: Tq7v88yAVfgDJSlqbhbXdciCjxPeenu7xJg5K0iOgc4
seo:
  description: ''
---

### リッチメニューエイリアスの情報を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/richmenu/alias/{richMenuAliasId}"}::reference-with-code
  :::reference-content
  リッチメニューエイリアスのIDを指定して、リッチメニューエイリアスの情報を取得するAPIです。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      # リッチメニューエイリアスAの情報を取得したい場合の例
      curl -v -X GET https://api.line.me/v2/bot/richmenu/alias/richmenu-alias-a \
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
  richMenuAliasId

  情報を取得したいリッチメニューエイリアスのID。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      richMenuAliasId

      #undefined
      String

      リッチメニューエイリアスのID。
      :::::

      :::::parameter-table-entry
      #undefined
      richMenuId

      #undefined
      String

      リッチメニューエイリアスと紐づくリッチメニューのID。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "richMenuAliasId": "richmenu-alias-a",
        "richMenuId": "richmenu-88c05ef6921ae53f8b58a25f3a65faf7"
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
