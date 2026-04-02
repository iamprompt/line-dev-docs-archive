---
title: Unlink Rich Menu
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/unlink-rich-menu
__hash__: HFD37-Ym28FBuhG7m-E147hY1f4uX2K8xkXHE-S9K6A
seo:
  description: ''
---

### リッチメニューとユーザーのリンクを解除する

:api-endpoint{protocol="delete" endpoint="https://api.line.me/v2/bot/user/{userId}/richmenu"}::reference-with-code
  :::reference-content
  指定したユーザーにリンクされたユーザー単位のリッチメニューを解除するAPIです。

  #### リッチメニューのリンクを解除できる条件

  リッチメニューのリンクの解除は、LINE公式アカウントを友だち追加しているユーザーに対して可能です。

  なお、以下のユーザーに対してリッチメニューのリンクを解除しようとした場合、ステータスコード`200`が返されますが、実際にはリッチメニューのリンクは解除されません。

  - LINEアカウントを削除したユーザー
  - LINE公式アカウントをブロックしているユーザー
  - LINE公式アカウントを友だち追加していないユーザー
  - 他のプロバイダー配下のチャネルで取得したユーザーIDなど、チャネルにユーザーIDが存在しないユーザー
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X DELETE https://api.line.me/v2/bot/user/{userId}/richmenu \
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

  | コード   | 説明                  |
  | ----- | ------------------- |
  | `400` | 無効なユーザーIDが指定されています。 |

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
      ```
      :::::
    ::::
  :::
::
