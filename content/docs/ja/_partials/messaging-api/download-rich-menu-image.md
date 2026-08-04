---
title: Download Rich Menu Image
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/download-rich-menu-image
__hash__: '-kZUqmHdx-ZfQQBdxHKH72odEnkAq9X-LW3Z5tLOEH0'
seo:
  description: ''
---

### リッチメニューの画像をダウンロードする

:api-endpoint{protocol="get" endpoint="https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content"}::reference-with-code
  :::reference-content
    ::::admonition{title="他のエンドポイントとドメイン名が異なります" type="note"}
    このエンドポイントは、Messaging APIにおけるLINEプラットフォームへの大容量データ送受信用のドメイン名（`api-data.line.me`）です。他のエンドポイントのドメイン名（`api.line.me`）とは異なるため、利用時は注意してください。
    ::::

  リッチメニューの画像をダウンロードするAPIです。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content \
      -H 'Authorization: Bearer {channel access token}' \
      -o picture.jpg
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

  画像をダウンロードするリッチメニューのID
  :::
::

#### レスポンス

ステータスコード`200`とリッチメニュー画像のバイナリデータを返します。リクエストの例に示すように、画像をダウンロードできます。

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                              |
  | ----- | ------------------------------------------------------------------------------- |
  | `404` | 画像をダウンロードできませんでした。次のような理由が考えられます。- 存在しないリッチメニューが指定されている。 - リッチメニューに画像が設定されていない。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // リッチメニューが存在しない場合（404 Not Found）
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
