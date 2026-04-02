---
title: Issue Channel Access Token V21
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/common/issue-channel-access-token-v2.1
__hash__: If4qTqUX43aIuguj5jQjf8PzBZUUX0r8f-mS0ebMcOg
seo:
  description: ''
---

### チャネルアクセストークンv2.1を発行する

:api-endpoint{protocol="post" endpoint="https://api.line.me/oauth2/v2.1/token"}::reference-with-code
  :::reference-content
  任意の有効期間を指定できるチャネルアクセストークンを発行します。このメソッドでは、認証にJWTアサーションを使用できます。

  チャネルアクセストークンv2.1は、チャネルごとに30件まで発行できます。上限に達した場合は、追加発行のリクエストは拒否されます。なお、有効期限が切れたチャネルアクセストークンは、発行数としてカウントされません。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/oauth2/v2.1/token \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'grant_type=client_credentials' \
      --data-urlencode 'client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer' \
      --data-urlencode 'client_assertion={JWT}'
      ```
      :::::
    ::::
  :::
::

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

  `client_credentials`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_assertion_type

  #undefined
  String

  `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`をURLエンコードした値
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_assertion

  #undefined
  String

  JSON Web Tokenアサーションを指定します。JWTアサーションは、クライアント側で生成した上で、アサーション署名キーの秘密鍵で署名する必要があります。

  JWTアサーションは、生成されてから30分以内に失効するように設定する必要があります。JWTアサーションの生成について詳しくは、「[JWTを生成する](/docs/messaging-api/generate-json-web-token/#generate-jwt)」を参照してください。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      access_token

      #undefined
      String

      チャネルアクセストークン
      :::::

      :::::parameter-table-entry
      #undefined
      expires_in

      #undefined
      Number

      チャネルアクセストークンが発行されてから有効期限が切れるまでの秒数
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
      key_id

      #undefined
      String

      チャネルアクセストークンを識別するための一意のキーID
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "access_token": "eyJhbGciOiJIUz.....",
        "token_type": "Bearer",
        "expires_in": 2592000,
        "key_id": "sDTOzw5wIfxxxxPEzcmeQA"
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

  | コード   | 説明                                                                                                      |
  | ----- | ------------------------------------------------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- JWTアサーションの検証に失敗した。 - JWTアサーションの有効期限が切れている。 - チャネルアクセストークンを発行できる上限に達している。 |
  | `404` | JWTアサーションと紐づく署名キーがチャネルに登録されていません。                                                                       |
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // チャネルアクセストークンを発行できる上限に達している場合（400 Bad Request）
      {
        "message": "The maximum number of access tokens has already been issued"
      }

      // JWTアサーションの検証に失敗した場合（400 Bad Request）
      {
        "error": "invalid_client",
        "error_description": "iss and clientId of key do not match"
      }

      // JWTアサーションと紐づく署名キーがチャネルに登録されていない場合（404 Not Found）
      {
        "message": "Cannot find channel key that satisfies the conditions"
      }
      ```
      :::::
    ::::
  :::
::
