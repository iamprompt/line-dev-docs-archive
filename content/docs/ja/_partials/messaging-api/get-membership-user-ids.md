---
title: Get Membership User Ids
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-membership-user-ids
__hash__: lKpjw8XGSFQJdCp352EsgUM-Ht3ZTh0LqqtOBnCmW6s
seo:
  description: ''
---

### メンバーシップに加入しているユーザーの一覧を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/membership/{membershipId}/users/ids"}::reference-with-code
  :::reference-content
  LINE公式アカウントのメンバーシップに加入しているユーザーのユーザーIDの一覧を取得できます。

  #### 取得できるユーザーIDに関する制限

  ユーザーがメンバーシップに加入している場合でも、以下のいずれかの条件を満たす場合は、そのユーザーのユーザーIDは一覧に含まれません。

  - ユーザーがLINEアカウントを削除している。
  - ユーザーがLINE公式アカウントをブロックしている。
  - ユーザーがLINE公式アカウントを友だち追加していない。
  - ユーザーがプロフィール情報の取得に同意していない。詳しくは、『Messaging APIドキュメント』の「[ユーザーのプロフィール情報取得の同意](/docs/messaging-api/user-consent/)」を参照してください。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/membership/{membershipId}/users/ids \
      -H 'Authorization: Bearer {channel access token}' \
      -d 'limit={limit}' \
      -d 'start={start}' \
      -G
      ```
      :::::
    ::::
  :::
::

#### レート制限

200リクエスト/秒

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
  membershipId

  メンバーシップのID。
  :::
::

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  limit

  #undefined
  Number

  1回のリクエストで取得するユーザーIDの最大数。デフォルト値は`300`です。  

  最大値：`1000`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  start

  継続トークンの値。[レスポンス](#get-membership-user-ids-response)で返されるJSONオブジェクトの`next`プロパティに含まれます。1回のリクエストでユーザーIDをすべて取得できない場合は、このパラメータを指定して残りの配列を取得できます。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下のプロパティを含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      userIds

      #undefined
      Array of strings

      メンバーシップに加入しているユーザーのユーザーIDの配列。ユーザーの状況によってユーザーIDを取得できるかどうかが変わるため、`userIds`プロパティに含まれるユーザーIDの数は、`next`プロパティが返される場合でも、必ず`limit`クエリパラメータで指定した数になるとは限りません。詳しくは、「[取得できるユーザーIDに関する制限](#get-membership-user-ids-restrictions)」を参照してください。  

      ユーザーIDの最大数：`limit`クエリパラメータで指定した数
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      next

      #undefined
      String

      継続トークン。次のユーザーIDの一覧を取得するために使用します。このプロパティは、前回までのレスポンスの`userIds`プロパティで取得しきれなかったユーザーIDがある場合にのみ返されます。

      継続トークンの有効期限は24時間（86,400秒間）です。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "userIds": ["U4af4980629...", "U0c229f96c4...", "U95afb1d4df..."],
        "next": "yANU9IA..."
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

  | コード   | 説明                                                                           |
  | ----- | ---------------------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- 無効な継続トークンを指定している。 - `limit`プロパティに不正な値を指定している。 |
  | `404` | `membershipId`パスパラメータに存在しないメンバーシップIDを指定しています。                                |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // membershipIdパスパラメータに存在しないメンバーシップIDを指定した場合（404 Not Found）
      {
        "message": "Membership ID is not found"
      }
      ```
      :::::
    ::::
  :::
::
