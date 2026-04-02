---
title: Issue Stateless Channel Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/common/issue-stateless-channel-access-token
__hash__: 2W8reeVC32UbVW3jqf6Cc5bjByr_LUYWhk1IqnvHKAk
seo:
  description: ''
---

### ステートレスチャネルアクセストークンを発行する

:api-endpoint{protocol="post" endpoint="https://api.line.me/oauth2/v3/token"}::reference-with-code
  :::reference-content
  15分間だけ有効なチャネルアクセストークンを発行します。発行できる数に制限はありません。ステートレスチャネルアクセストークンを発行すると、取り消すことはできません。
  :::

  :::reference-code
  *チャネルIDとチャネルシークレットから発行するリクエストの例*

    ::::code-tabs
    ---
    className:
      - mb-8
    ---
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/oauth2/v3/token \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'grant_type=client_credentials' \
      --data-urlencode 'client_id={channel ID}' \
      --data-urlencode 'client_secret={channel secret}'
      ```
      :::::
    ::::

  *JWTアサーションから発行するリクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/oauth2/v3/token \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'grant_type=client_credentials' \
      --data-urlencode 'client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer' \
      --data-urlencode 'client_assertion={JWTアサーション}'
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

ステートレスチャネルアクセストークンを発行する方法には、次の2つがあります。どちらの方法で発行しても、レスポンスボディの形式は同じになります。

- [チャネルIDとチャネルシークレットから発行する](#issue-stateless-channel-access-token-request-body-channel-id)
- [JWTアサーションから発行する](#issue-stateless-channel-access-token-request-body-jwt)

##### チャネルIDとチャネルシークレットから発行する

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
  client_id

  #undefined
  String

  チャネルID。[LINE Developersコンソール](/console/)で確認できます。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_secret

  #undefined
  String

  チャネルシークレット。[LINE Developersコンソール](/console/)で確認できます。
  :::
::

##### JWTアサーションから発行する

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
  ステータスコード`200`と、以下の情報を含むJSONオブジェクトを返します。

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
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "token_type": "Bearer",
        "access_token": "ey....",
        "expires_in": 900
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
  | `400` | リクエストに問題があります。次のような理由が考えられます。- 無効なチャネルIDが指定されている。 - 無効なチャネルシークレットが指定されている。 - JWTアサーションの検証に失敗した。 - JWTアサーションの有効期限が切れている。 |
  | `404` | JWTアサーションと紐づく署名キーがチャネルに登録されていません。                                                                                       |
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なチャネルシークレットを指定した場合（400 Bad Request）
      {
        "error": "invalid_request",
        "error_description": "Invalid 'client_credentials'."
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
