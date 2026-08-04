---
title: Refresh Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login-v2/refresh-access-token
__hash__: Wc7sojUzcKA8y2vzua2wyAkjkcRlHCJoiFjX6BT8msw
seo:
  description: ''
---

### アクセストークンを更新する

::reference-with-code
  :::reference-content
  リフレッシュトークンを使って新しいアクセストークンを取得できます。
  ユーザーの認証が終わったときに、アクセストークンと共にリフレッシュトークンが返されます。

    ::::admonition{title="注意" type="note"}
    - ここでは、LINEログイン v2.0のエンドポイントについて解説します。v2.1については、v2.1の「[アクセストークンを更新する](/reference/line-login/#refresh-access-token)」を参照してください。
    - Messaging APIで使用されるチャネルアクセストークンの更新には使用できません。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/oauth/accessToken \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'grant_type=refresh_token' \
      --data-urlencode 'client_id={channel ID}' \
      --data-urlencode 'client_secret={channel secret}' \
      --data-urlencode 'refresh_token={refresh token}'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/v2/oauth/accessToken`

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/x-www-form-urlencoded
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry
  #undefined
  grant_type

  #undefined
  String

  `refresh_token`
  :::

  :::parameter-table-entry
  #undefined
  refresh_token

  #undefined
  String

  再発行するアクセストークンに対応するリフレッシュトークン。アクセストークンの有効期限が切れてから最長10日間有効です。リフレッシュトークンの有効期限が切れた場合は、ユーザーに再度ログインを要求して新しいアクセストークンを生成する必要があります。
  :::

  :::parameter-table-entry
  #undefined
  client_id

  #undefined
  String

  チャネルID。[LINE Developersコンソール](/console/)で確認できます。
  :::

  :::parameter-table-entry
  #undefined
  client_secret

  #undefined
  String

  チャネルシークレット。[LINE Developersコンソール](/console/)で確認できます。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  アクセストークンの更新が成功すると、新しいアクセストークンとリフレッシュトークンが返されます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      token_type

      #undefined
      String

      `Bearer`
      :::::

      :::::parameter-table-entry
      #undefined
      scope

      #undefined
      String

      アクセストークンに付与されている権限

      - `P`：ユーザーのプロフィール情報にアクセスできます。
      :::::

      :::::parameter-table-entry
      #undefined
      access_token

      #undefined
      String

      アクセストークン
      :::::

      :::::parameter-table-entry
      #undefined
      expires_in

      #undefined
      Number

      アクセストークンの有効期限が切れるまでの秒数
      :::::

      :::::parameter-table-entry
      #undefined
      refresh_token

      #undefined
      String

      新しいアクセストークンを取得するためのトークン（リフレッシュトークン）。アクセストークンの有効期限が切れてから最長10日間有効です。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
         "token_type":"Bearer",
         "scope":"P",
         "access_token":"bNl4YEFPI/hjFWhTqexp4MuEw...",
         "expires_in":2591977,
         "refresh_token":"8iFFRdyxNVNLWYeteMMJ"
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  リフレッシュトークンの有効期限が切れている場合は、HTTPステータスコード `400 Bad Request` と、JSONオブジェクトが返されます。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
          "error": "invalid_grant",
          "error_description": "invalid refresh_token"
      }
      ```
      :::::
    ::::
  :::
::
