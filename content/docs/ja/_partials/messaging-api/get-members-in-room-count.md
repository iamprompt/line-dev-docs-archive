---
title: Get Members In Room Count
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-members-in-room-count
__hash__: n-abKuhqyBdyBTOIMlWWDQgBvHVS_C-3K2_hdv5_FUg
seo:
  description: ''
---

### 複数人トークに参加しているユーザーの人数を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/room/{roomId}/members/count"}::reference-with-code
  :::reference-content
  複数人トークに参加しているユーザーの人数を取得します。参加しているユーザーが、LINE公式アカウントを友だち追加していない場合や、LINE公式アカウントをブロックしている場合でも、人数に含まれます。

  人数に、LINE公式アカウントは含まれません。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/room/{roomId}/members/count \
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

#### Path parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  roomId

  トークルームID。[Webhookイベントオブジェクト](/reference/messaging-api/#webhook-event-objects)の`source`オブジェクトで確認できます。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      count

      #undefined
      Number

      複数人トークに参加しているユーザーの人数。人数に、LINE公式アカウントは含まれません。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "count": 3
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

  | コード   | 説明                                              |
  | ----- | ----------------------------------------------- |
  | `400` | 無効なトークルームIDが指定されています。                           |
  | `404` | 存在しない複数人トークやLINE公式アカウントが参加していない複数人トークが指定されています。 |

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

      // 存在しない複数人トークやLINE公式アカウントが参加していない複数人トークを指定した場合（404 Not Found）
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
