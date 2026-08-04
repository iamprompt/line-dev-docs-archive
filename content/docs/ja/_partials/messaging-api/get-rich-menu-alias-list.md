---
title: Get Rich Menu Alias List
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-rich-menu-alias-list
__hash__: nU462yNVf1XnZdc_I8d4HBmSpGHJCOpUpCmGdSE2Mn4
seo:
  description: ''
---

### リッチメニューエイリアスの一覧を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/richmenu/alias/list"}::reference-with-code
  :::reference-content
  リッチメニューエイリアスの一覧を取得するAPIです。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/richmenu/alias/list \
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

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      aliases[].richMenuAliasId

      #undefined
      String

      リッチメニューエイリアスのID。
      :::::

      :::::parameter-table-entry
      #undefined
      aliases[].richMenuId

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
      // リッチメニューエイリアスが2件の場合
      {
          "aliases": [
              {
                  "richMenuAliasId": "richmenu-alias-a",
                  "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4"
              },
              {
                  "richMenuAliasId": "richmenu-alias-b",
                  "richMenuId": "richmenu-88c05ef6921ae53f8b58a25f3a65faf7"
              }
          ]
      }

      // リッチメニューエイリアスが0件の場合
      {
          "aliases": []
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
