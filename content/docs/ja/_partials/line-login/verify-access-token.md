---
title: Verify Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login/verify-access-token
__hash__: '-HTSKQxJVWh04rT7wvs1f9zfM79Af83uLGmoKzAhoKQ'
seo:
  description: ''
---

### アクセストークンの有効性を検証する

::reference-with-code
  :::reference-content
  アクセストークンの有効性を検証します。

  アクセストークンを利用して、安全にユーザー登録およびログインを処理する方法については、『LINEログインドキュメント』の「[アプリとサーバーの間で安全なログインプロセスを構築する](/docs/line-login/secure-login-process/)」を参照してください。

    ::::admonition{title="注意" type="note"}
    ここでは、LINEログイン v2.1のエンドポイントについて解説します。v2.0については、v2.0の「[アクセストークンの有効性を検証する](/reference/line-login-v2/#verify-access-token)」を参照してください。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET \
      'https://api.line.me/oauth2/v2.1/verify?access_token=eyJhbGciOiJIUzI1NiJ9.UnQ_o-GP0VtnwDjbK0C8E_NvK...'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`GET https://api.line.me/oauth2/v2.1/verify`

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  access_token

  アクセストークン
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  アクセストークンが有効である場合は、HTTPステータスコード `200 OK` と、以下の情報を含むJSONオブジェクトが返されます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      scope

      #undefined
      String

      アクセストークンに付与されている権限。スコープについて詳しくは、「[スコープ](/docs/line-login/integrate-line-login/#scopes)」を参照してください。

      なお、`email`の権限が付与されている場合でも、`scope`プロパティに`email`は含まれません。
      :::::

      :::::parameter-table-entry
      #undefined
      client_id

      #undefined
      String

      アクセストークンが発行されたチャネルID
      :::::

      :::::parameter-table-entry
      #undefined
      expires_in

      #undefined
      Number

      アクセストークンの有効期限が切れるまでの秒数
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "scope": "profile",
        "client_id": "1440057261",
        "expires_in": 2591659
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  アクセストークンの有効期限が切れている場合は、HTTPステータスコード `400 Bad Request` と、JSONオブジェクトが返されます。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "error": "invalid_request",
        "error_description": "access token expired"
      }
      ```
      :::::
    ::::
  :::
::
