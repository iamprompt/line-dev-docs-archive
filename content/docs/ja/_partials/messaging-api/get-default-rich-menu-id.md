---
title: Get Default Rich Menu Id
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-default-rich-menu-id
__hash__: P9p4dlYhMmvAbNrcboD3Zr_A-DFMVnIiD_vS6ZqZA_I
seo:
  description: ''
---

### デフォルトのリッチメニューのIDを取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/user/all/richmenu"}::reference-with-code
  :::reference-content
  Messaging APIで設定したデフォルトのリッチメニューのIDを取得するAPIです。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/user/all/richmenu \
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
  ステータスコード`200`と以下のプロパティを含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      richMenuId

      #undefined
      String

      リッチメニューのID
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "richMenuId": "{richMenuId}"
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

  | コード   | 説明                                                                                                                                                |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `403` | :glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"}など、別のチャネルによってデフォルトのリッチメニューが設定されています。 |
  | `404` | デフォルトのリッチメニューが設定されていません。                                                                                                                          |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 別のチャネルによってデフォルトのリッチメニューが設定されてる場合（403 Forbidden）
      {
        "message": "the richmenu is owned by another channel",
        "details": []
      }

      // デフォルトのリッチメニューが設定されていない場合（404 Not Found）
      {
        "message": "no default richmenu",
        "details": []
      }
      ```
      :::::
    ::::
  :::
::
