---
title: Leave Room
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/leave-room
__hash__: INFh2nl9VFYQ0y0WoRcHUnoPz7dHRQb5CAoFE5c3gSI
seo:
  description: ''
---

### 複数人トークから退出する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/room/{roomId}/leave"}::reference-with-code
  :::reference-content
  [複数人トーク](/docs/messaging-api/group-chats/#room)から退出するAPIです。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/room/{roomId}/leave \
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
  roomId

  トークルームID。[Webhookイベントオブジェクト](#webhook-event-objects)の`source`オブジェクトで返されます。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と空のJSONオブジェクトを返します。

  LINE公式アカウントが参加していない複数人トークを指定した場合も、ステータスコード`200`を返します。
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

  | コード   | 説明                    |
  | ----- | --------------------- |
  | `400` | 無効なトークルームIDが指定されています。 |
  | `404` | 存在しない複数人トークが指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なトークルームIDを指定した場合（400 Bad Request）
      {
        "message": "The value for the 'roomId' parameter is invalid"
      }

      // 存在しない複数人トークを指定した場合（404 Not Found）
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
