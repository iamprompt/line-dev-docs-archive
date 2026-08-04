---
title: Get Rich Menu Id
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-rich-menu-id
__hash__: hQTQdct5-ncEPktLfhSzGz_5PBBmJCdHoQI9d4U5pGE
seo:
  description: ''
---

### ユーザーのリッチメニューのIDを取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/user/{userId}/richmenu"}::reference-with-code
  :::reference-content
  ユーザーにリンクされたリッチメニューのIDを取得するAPIです。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/user/{userId}/richmenu \
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
  userId

  ユーザーID。[Webhookイベントオブジェクト](#webhook-event-objects)の`source`オブジェクトで返されます。LINEに表示されるLINE IDは使用しないでください。
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

  | コード   | 説明                                                                                                                   |
  | ----- | -------------------------------------------------------------------------------------------------------------------- |
  | `400` | 無効なユーザーIDが指定されています。                                                                                                  |
  | `404` | リッチメニューのIDを取得できませんでした。次のような理由が考えられます。- ユーザーにリッチメニューがリンクされていない。 - 存在しないユーザーが指定されている。 - ユーザーが対象のLINE公式アカウントを友だち追加していない |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
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

      // リッチメニューがリンクされていないユーザーを指定した場合（404 Not Found）
      {
        "message": "the user has no richmenu",
        "details": []
      }
      ```
      :::::
    ::::
  :::
::
