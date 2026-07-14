---
title: Verify Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login/verify-access-token
__hash__: eZv-1lKrR0YImu36-346kFZhHMH05hLCIAvlI0yoAb4
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
  [共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」に示す一般的なエラー以外に、発生する可能性があるエラーは以下のとおりです。

  | ステータスコード        | 説明                                                                                                                                                                   |
  | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | 400 Bad Request | リクエストに問題があります。次のような理由が考えられます。- 無効なフォーマットのアクセストークンが指定されています。 - アクセストークンの有効期限が切れています。 - アクセストークンが無効化されています（例：「[アクセストークンを取り消す](#revoke-access-token)」エンドポイントで取り消された場合）。 |
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なフォーマットのアクセストークンが指定されている場合
      {
        "error": "invalid_request",
        "error_description": "The access token not JWS"
      }

      // アクセストークンの有効期限が切れている場合
      {
        "error": "invalid_request",
        "error_description": "The access token expired"
      }

      // 「アクセストークンを取り消す」エンドポイントの利用などにより無効化されている場合
      {
        "error": "invalid_request",
        "error_description": "The access token revoked"
      }
      ```
      :::::
    ::::
  :::
::
