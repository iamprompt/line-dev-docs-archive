---
title: Create Rich Menu Alias
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/create-rich-menu-alias
__hash__: veK8tiixDF_bEnoP4sptpdC3-eTFUjYXxNlW_usWazE
seo:
  description: ''
---

### リッチメニューエイリアスを作成する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu/alias"}::reference-with-code
  :::reference-content
  リッチメニューエイリアスを作成するAPIです。

  リッチメニューエイリアスを作成するには、事前に以下の作業をしておく必要があります。詳しくは、『Messaging APIドキュメント』の「[リッチメニューでタブ切り替えを行う](/docs/messaging-api/switch-rich-menus/)」を参照してください。

  - [リッチメニューを作成する](#create-rich-menu)
  - [リッチメニューの画像をアップロードする](#upload-rich-menu-image)

  1つのLINE公式アカウントに対して、Messaging APIを使って最大で1000件のリッチメニューエイリアスを作成できます。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      # リッチメニューエイリアスAを作成したい場合の例
      curl -v -X POST https://api.line.me/v2/bot/richmenu/alias \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d \
      '{
          "richMenuAliasId": "richmenu-alias-a",
          "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4"
      }'

      # リッチメニューエイリアスBを作成したい場合の例
      curl -v -X POST https://api.line.me/v2/bot/richmenu/alias \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d \
      '{
          "richMenuAliasId":"richmenu-alias-b",
          "richMenuId":"richmenu-88c05ef6921ae53f8b58a25f3a65faf7"
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
  richMenuAliasId

  #undefined
  String

  リッチメニューエイリアスのID。チャネルごとに一意の、任意のIDを指定できます。

  - 最大文字数：32
  - 使用可能文字種：半角英数字（`a`〜`z`、`0`〜`9`）、アンダースコア（`_`）、ハイフン（`-`）
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  richMenuId

  #undefined
  String

  リッチメニューエイリアスと紐づけるリッチメニューのID。

    ::::admonition{title="紐づけられるリッチメニューについて" type="note"}
    リッチメニューエイリアスと紐づけられるのは、同じチャネルで作成されたリッチメニューのみです。
    ::::
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

  | コード   | 説明                                                                                                                                                                                                      |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | リッチメニューエイリアスを作成できませんでした。次のような理由が考えられます。- 画像を設定していないリッチメニューや、存在しないリッチメニューが指定されている。 - 無効なリッチメニューエイリアスIDが指定されている。 - 無効なリッチメニューIDが指定されている。 - リッチメニューエイリアスを作成できる上限に達している。 - 既に存在するリッチメニューエイリアスと同じIDが指定されている。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 画像を設定していないリッチメニューや、存在しないリッチメニューを指定した場合（400 Bad Request）
      {
          "message": "richmenu not found",
          "details": []
      }

      // 無効なリッチメニューIDを指定した場合（400 Bad Request）
      {
          "message": "The request body has 1 error(s)",
          "details": [
              {
                  "message": "invalid richMenuId",
                  "property": "richMenuId"
              }
          ]
      }

      // 既存のリッチメニューエイリアスと同じリッチメニューエイリアスIDを指定した場合（400 Bad Request）
      {
          "message": "conflict richmenu alias id",
          "details": []
      }
      ```
      :::::
    ::::
  :::
::
