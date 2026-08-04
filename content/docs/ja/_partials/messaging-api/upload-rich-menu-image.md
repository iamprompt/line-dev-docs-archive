---
title: Upload Rich Menu Image
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/upload-rich-menu-image
__hash__: fI2diZi-5pjkC1I8-WzlvxN_q0ytNi4zXDkJV_21H7I
seo:
  description: ''
---

### リッチメニューの画像をアップロードする

:api-endpoint{protocol="post" endpoint="https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content"}::reference-with-code
  :::reference-content
    ::::admonition{title="他のエンドポイントとドメイン名が異なります" type="note"}
    このエンドポイントは、Messaging APIにおけるLINEプラットフォームへの大容量データ送受信用のドメイン名（`api-data.line.me`）です。他のエンドポイントのドメイン名（`api.line.me`）とは異なるため、利用時は注意してください。
    ::::

  画像をアップロードしてリッチメニューに設定するAPIです。

  #### リッチメニューの画像の要件

  リッチメニューの画像は以下の要件を満たす必要があります。

  - 画像フォーマット：JPEGまたはPNG
  - 画像の幅サイズ：800ピクセル以上、2500ピクセル以下
  - 画像の高さサイズ：250ピクセル以上
  - 画像のアスペクト比（幅÷高さ）：1.45以上
  - 最大ファイルサイズ：1MB

    ::::admonition{title="注意" type="note"}
    リッチメニューに設定された画像を置き換えることはできません。リッチメニューの画像を更新するには、新しいリッチメニューオブジェクトを作成して、新しい画像をアップロードします。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: image/jpeg" \
      -T image.jpg
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

  `image/jpeg`または`image/png`
  :::
::

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  richMenuId

  画像を設定するリッチメニューのID
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

  | コード   | 説明                                                                                                                    |
  | ----- | --------------------------------------------------------------------------------------------------------------------- |
  | `400` | リッチメニューに画像を設定できませんでした。次のような理由が考えられます。- 画像が[要件](#upload-rich-menu-image-requirements)を満たしていない。 - リッチメニューに既に画像が設定されている。 |
  | `404` | 存在しないリッチメニューが指定されています。                                                                                                |
  | `415` | `Content-Type`にサポートされていないメディア形式が指定されています（`image/jpeg`および`image/png`以外）。                                               |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 画像のサイズが要件を満たしていない場合（400 Bad Request）
      {
        "message": "The image size is not allowed for richmenu"
      }

      // リッチメニューに既に画像が設定されている場合（400 Bad Request）
      {
        "message": "An image has already been uploaded to the richmenu"
      }
      ```
      :::::
    ::::
  :::
::
