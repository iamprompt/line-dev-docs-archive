---
title: Refresh Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login/refresh-access-token
__hash__: EekN-Y5kLyOHFNq8dC1-k482LdxHjfGxNyJCcuhfFPk
seo:
  description: ''
---

### アクセストークンを更新する

::reference-with-code
  :::reference-content
  リフレッシュトークンを使って新しいアクセストークンを取得できます。

  ユーザーの認証が終わったときに、アクセストークンと共にリフレッシュトークンが返されます。

    ::::admonition{title="注意" type="note"}
    - ここでは、LINEログイン v2.1のエンドポイントについて解説します。v2.0については、v2.0の「[アクセストークンを更新する](/reference/line-login-v2/#refresh-access-token)」を参照してください。
    - Messaging APIで使用されるチャネルアクセストークンの更新には使用できません。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/oauth2/v2.1/token \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -d 'grant_type=refresh_token&refresh_token={your_refresh_token}&client_id={your_channel_id}&client_secret={your_channel_secret}'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/oauth2/v2.1/token`

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
  :::parameter-table-entry{required="true"}
  #undefined
  grant_type

  #undefined
  String

  `refresh_token`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  refresh_token

  #undefined
  String

  再発行するアクセストークンに対応するリフレッシュトークン。アクセストークンが発行されてから最長90日間有効です。リフレッシュトークンの有効期限が切れた場合は、ユーザーに再度ログインを要求して新しいアクセストークンを生成する必要があります。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_id

  #undefined
  String

  チャネルID。[LINE Developersコンソール](/console/)で確認できます。
  :::

  :::parameter-table-entry{annotation="説明を参照"}
  #undefined
  client_secret

  #undefined
  String

  チャネルシークレット。[LINE Developersコンソール](/console/)で確認できます。

  - アプリタイプが［**ウェブアプリ**］のみのチャネルでは必須です。
  - アプリタイプが［**ネイティブアプリ**］かつ［**ウェブアプリ**］のチャネルでは無視されます。
  - アプリタイプが［**ネイティブアプリ**］のみのチャネルでは無視されます。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  アクセストークンの更新が成功すると、新しいアクセストークンとリフレッシュトークンが返されます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      access_token

      #undefined
      String

      アクセストークン。有効期間は30日です。
      :::::

      :::::parameter-table-entry
      #undefined
      token_type

      #undefined
      String

      `Bearer`
      :::::

      :::::parameter-table-entry
      #undefined
      refresh_token

      #undefined
      String

      リクエスト時に`refresh_token`プロパティで指定したリフレッシュトークン。新しいアクセストークンを取得しても、リフレッシュトークンの有効期間は延長されません。
      :::::

      :::::parameter-table-entry
      #undefined
      expires_in

      #undefined
      Number

      アクセストークンの有効期間。APIが呼び出された時点から期限切れまでの残り秒数で表されます。
      :::::

      :::::parameter-table-entry
      #undefined
      scope

      #undefined
      String

      アクセストークンに付与されている権限。スコープについて詳しくは、「[スコープ](/docs/line-login/integrate-line-login/#scopes)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "token_type": "Bearer",
        "scope": "profile",
        "access_token": "bNl4YEFPI/hjFWhTqexp4MuEw...",
        "expires_in": 2591977,
        "refresh_token": "8iFFRdyxNVNLWYeteMMJ"
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
        "error_description": "invalid refresh token"
      }
      ```
      :::::
    ::::
  :::
::
