---
title: Get Group Summary
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-group-summary
__hash__: gjrYD-KiiOJ1ugIENJG06RMNa_vhAeHztX8Zcku2XyU
seo:
  description: ''
---

### グループトークの概要を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/group/{groupId}/summary"}::reference-with-code
  :::reference-content
  LINE公式アカウントが参加しているグループトークのグループID、グループ名、アイコンのURLを取得します。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/group/{groupId}/summary \
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

  グループID。[Webhookイベントオブジェクト](/reference/messaging-api/#webhook-event-objects)の`source`オブジェクトで確認できます。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      groupId

      #undefined
      String

      グループID
      :::::

      :::::parameter-table-entry
      #undefined
      groupName

      #undefined
      String

      グループ名
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      pictureUrl

      #undefined
      String

      グループのアイコンのURL。ユーザーがグループのプロフィール画像を設定していない場合はレスポンスに含まれません。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "groupId": "Ca56f94637c...",
        "groupName": "Group name",
        "pictureUrl": "https://profile.line-scdn.net/abcdefghijklmn"
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
