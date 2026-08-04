---
title: Get Group Member Profile
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-group-member-profile
__hash__: sU-enfpWWaREhyxMHUaVbjJzO7uKLQbfNV9ErZ9Vy50
seo:
  description: ''
---

### グループトークのメンバーのプロフィール情報を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/group/{groupId}/member/{userId}"}::reference-with-code
  :::reference-content
  LINE公式アカウントが参加しているグループトークのメンバーのユーザーIDが既知である場合に、そのメンバーのプロフィール情報を取得するAPIです。

    ::::admonition{title="ヒント" type="tip"}
    LINE公式アカウントを友だちとして追加しているかどうかや、LINE公式アカウントをブロックしているかどうかに関わらず、そのグループトークに参加しているユーザーであればプロフィール情報を取得できます。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/group/{groupId}/member/{userId} \
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

  :::parameter-table-entry{required="true"}
  #undefined
  userId

  ユーザーID。[Webhookイベントオブジェクト](#webhook-event-objects)の`source`オブジェクトで返されます。LINEに表示されるLINE IDは使用しないでください。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      displayName

      #undefined
      String

      表示名
      :::::

      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      ユーザーID
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      pictureUrl

      #undefined
      String

      プロフィール画像のURL。ユーザーがプロフィール画像を設定していない場合はレスポンスに含まれません。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "displayName": "LINE taro",
        "userId": "U4af4980629...",
        "pictureUrl": "https://sprofile.line-scdn.net/0hHkIRkHJF..."
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

  | コード   | 説明                                                                                                                      |
  | ----- | ----------------------------------------------------------------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- 無効なグループIDを指定している。 - 無効なユーザーIDを指定している。                                                    |
  | `404` | プロフィール情報を取得できませんでした。次のような理由が考えられます。- 存在しないグループやLINE公式アカウントが参加していないグループが指定されています。 - 存在しないユーザーやグループに参加していないユーザーが指定されています。 |

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

      // 存在しないグループやユーザー、LINE公式アカウントが参加していないグループなどを指定した場合（404 Not Found）
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
