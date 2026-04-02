---
title: Leave Group
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/leave-group
__hash__: cglWEOedqLdQvhy0z4mW30ronDD6afSEYvJsqAiyB_s
seo:
  description: ''
---

### グループトークから退出する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/group/{groupId}/leave"}::reference-with-code
  :::reference-content
  [グループトーク](/docs/messaging-api/group-chats/#group)から退出するAPIです。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/group/{groupId}/leave \
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
  groupId

  グループID。[Webhookイベントオブジェクト](#webhook-event-objects)の`source`オブジェクトで返されます。
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

  | コード   | 説明                                          |
  | ----- | ------------------------------------------- |
  | `400` | 無効なグループIDが指定されています。                         |
  | `404` | 存在しないグループやLINE公式アカウントが参加していないグループが指定されています。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なグループIDを指定した場合（400 Bad Request）
      {
        "message": "The value for the 'groupId' parameter is invalid"
      }

      // 存在しないグループやLINE公式アカウントが参加していないグループを指定した場合（404 Not Found）
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
