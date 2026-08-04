---
title: Update Rich Menu Alias
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/update-rich-menu-alias
__hash__: 6iuG7_QJy6gCpGSFbFRpQZni6-YpDC7NMNs-6MoHedQ
seo:
  description: ''
---

### リッチメニューエイリアスを更新する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu/alias/{richMenuAliasId}"}::reference-with-code
  :::reference-content
  リッチメニューエイリアスを更新するAPIです。既存のリッチメニューエイリアスを指定して、紐づくリッチメニューを変更できます。

    ::::admonition{title="更新が反映されるタイミングについて" type="note"}
    リッチメニューエイリアスの更新は、キャッシュデータの影響により、直ちに反映されない可能性があります。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      # リッチメニューエイリアスAを更新したい場合の例
      curl -v -X POST https://api.line.me/v2/bot/richmenu/alias/richmenu-alias-a \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d \
      '{
          "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4"
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

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  richMenuAliasId

  更新したいリッチメニューエイリアスのID
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  richMenuId

  #undefined
  String

  リッチメニューエイリアスと紐づけるリッチメニューのID

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

  | コード   | 説明                                                                                                                                     |
  | ----- | -------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | リッチメニューエイリアスを更新できませんでした。次のような理由が考えられます。- 画像を設定していないリッチメニューや、存在しないリッチメニューが指定されている。 - 無効なリッチメニューエイリアスIDが指定されている。 - 無効なリッチメニューIDが指定されている。 |
  | `404` | 存在しないリッチメニューエイリアスが指定されています。                                                                                                            |

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
      ```
      :::::
    ::::
  :::
::
