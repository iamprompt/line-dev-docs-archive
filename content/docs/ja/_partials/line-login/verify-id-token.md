---
title: Verify Id Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login/verify-id-token
__hash__: yWSe1mXjS3qon1Yn9BVcrwXTzv4xou22yGPUk5FNvww
seo:
  description: ''
---

### IDトークンを検証する

::reference-with-code
  :::reference-content
  IDトークンは、ユーザー情報を含むJSONウェブトークン（JWT）です。受信した[IDトークン](/docs/line-login/verify-id-token/#id-tokens)は、なりすましを狙った攻撃者が発行している可能性があります。受信したIDトークンが正規のものであることを確認し、ユーザーのプロフィール情報とメールアドレスを取得します。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST 'https://api.line.me/oauth2/v2.1/verify' \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'id_token=eyJraWQiOiIxNmUwNGQ0ZTU2NzgzYTc5MmRjYjQ2ODRkOD...' \
      --data-urlencode 'client_id=1234567890'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/oauth2/v2.1/verify`

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
  id_token

  #undefined
  String

  IDトークン
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_id

  #undefined
  String

  期待されるチャネルID。LINEプラットフォームが発行した、チャネル固有の識別子。[LINE Developersコンソール](/console/)で確認できます。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  nonce

  #undefined
  String

  期待されるnonceの値。認可リクエストに指定したnonceの値を指定します。認可リクエストでnonceの値を指定しなかった場合は省略します。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  user_id

  #undefined
  String

  期待されるユーザーID。ユーザーIDを取得する方法は、「[ユーザープロフィールを取得する](/reference/line-login/#get-user-profile)」を参照してください。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  IDトークンの検証に成功した場合は、IDトークンのペイロード部分が返されます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      iss

      #undefined
      String

      IDトークンの生成URL
      :::::

      :::::parameter-table-entry
      #undefined
      sub

      #undefined
      String

      IDトークンの対象ユーザーID
      :::::

      :::::parameter-table-entry
      #undefined
      aud

      #undefined
      String

      チャネルID
      :::::

      :::::parameter-table-entry
      #undefined
      exp

      #undefined
      Number

      IDトークンの有効期限。UNIX時間（秒）で返されます。
      :::::

      :::::parameter-table-entry
      #undefined
      iat

      #undefined
      Number

      IDトークンの生成時間。UNIX時間（秒）で返されます。
      :::::

      :::::parameter-table-entry
      #undefined
      auth_time

      #undefined
      Number

      ユーザー認証時間。UNIX時間（秒）で返されます。認可リクエストにmax_ageの値を指定しなかった場合は含まれません。
      :::::

      :::::parameter-table-entry
      #undefined
      nonce

      #undefined
      String

      認可URLに指定したnonceの値。認可リクエストにnonceの値を指定しなかった場合は含まれません。
      :::::

      :::::parameter-table-entry
      #undefined
      amr

      #undefined
      Array of strings

      ユーザーが使用した認証方法のリスト。特定の条件下ではペイロードに含まれません。

      以下のいずれかの値が含まれます。

      - `pwd`：メールアドレスとパスワードによるログイン
      - `lineautologin`：LINEによる自動ログイン（LINE SDKを使用した場合も含む）
      - `lineqr`：QRコードによるログイン
      - `linesso`：シングルサインオンによるログイン
      - `mfa`：2要素認証によるログイン
      :::::

      :::::parameter-table-entry
      #undefined
      name

      #undefined
      String

      ユーザーの表示名。認可リクエストに`profile`スコープを指定しなかった場合は含まれません。
      :::::

      :::::parameter-table-entry
      #undefined
      picture

      #undefined
      String

      ユーザープロフィールの画像URL。認可リクエストに`profile`スコープを指定しなかった場合は含まれません。
      :::::

      :::::parameter-table-entry
      #undefined
      email

      #undefined
      String

      ユーザーのメールアドレス。認可リクエストに`email`スコープを指定しなかった場合は含まれません。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "iss": "https://access.line.me",
        "sub": "U1234567890abcdef1234567890abcdef",
        "aud": "1234567890",
        "exp": 1504169092,
        "iat": 1504263657,
        "nonce": "0987654asdf",
        "amr": ["pwd"],
        "name": "Taro Line",
        "picture": "https://sample_line.me/aBcdefg123456",
        "email": "taro.line@example.com"
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  IDトークンの検証に失敗した場合は、JSONオブジェクトが返されます。

  | error_description                   | 説明                                                                                               |
  | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
  | Invalid IdToken.                    | IDトークンの形式が正しくないか、署名が無効です。                                                                        |
  | Invalid IdToken Issuer.             | IDトークンが "[https://access.line.me](https://access.line.me){rel="[\"nofollow\"]"}" 以外のサイトで生成されました。 |
  | IdToken expired.                    | IDトークンの有効期限が切れました。                                                                               |
  | Invalid IdToken Audience.           | IDトークンのAudienceが、リクエストで指定したclient_idと異なります。                                                      |
  | Invalid IdToken Nonce.              | IDトークンのNonceが、リクエストで指定したnonceと異なります。                                                             |
  | Invalid IdToken Subject Identifier. | IDトークンのSubjectIdentifierは、リクエストで指定したuser_idと異なります。                                               |
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "error": "invalid_request",
        "error_description": "Invalid IdToken."
      }
      ```
      :::::
    ::::
  :::
::
