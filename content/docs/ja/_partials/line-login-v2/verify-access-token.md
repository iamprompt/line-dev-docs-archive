---
title: Verify Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login-v2/verify-access-token
__hash__: uQc9Pyh1ssRgR8zlGYxYag6IYwLaRHfd05-FuFXB3F8
seo:
  description: ''
---

### アクセストークンの有効性を検証する

::reference-with-code
  :::reference-content
  アクセストークンの有効性を検証します。

  アクセストークンを利用して、安全にユーザー登録およびログインを処理する方法については、『LINEログインドキュメント』の「[アクセストークンを検証する](/docs/line-login/managing-access-tokens-v2/#verify-access-token)」を参照してください。

    ::::admonition{title="注意" type="note"}
    ここでは、LINEログイン v2.0のエンドポイントについて解説します。v2.1については、v2.1の「[アクセストークンの有効性を検証する](/reference/line-login/#verify-access-token)」を参照してください。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/oauth/verify \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'access_token=bNl4YEFPI/hjFWhTqexp4MuEw5YPs7qhr6dJDXKwNPuLka...'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/v2/oauth/verify`

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
  access_token

  #undefined
  String

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

      アクセストークンに付与されている権限

      - `P`：ユーザーのプロフィール情報にアクセスできます。
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
         "scope":"P",
         "client_id":"1350031035",
         "expires_in":2591965
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
          "error_description": "access_token invalid"
      }
      ```
      :::::
    ::::
  :::
::
