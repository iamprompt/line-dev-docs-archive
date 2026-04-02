---
title: Issue Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login/issue-access-token
__hash__: LGXvUPxGfUqECzmWMBbwYfthEpTZNfqGlUh2JAFOZ_Y
seo:
  description: ''
---

### アクセストークンを発行する

:api-endpoint{protocol="post" endpoint="https://api.line.me/oauth2/v2.1/token"}::reference-with-code
  :::reference-content
  アクセストークンを発行します。

  LINEログインAPIで管理するアクセストークンは、LINEプラットフォームに保存されているユーザー情報（例：ユーザーID、表示名、プロフィール画像、およびステータスメッセージ）を利用することを、アプリが許可されていることを示します。

  レスポンスに含まれるアクセストークンとリフレッシュトークンは、LINEログインAPIを呼び出す際に必要です。

    ::::admonition{title="注意" type="note"}
    - ここでは、LINEログイン v2.1のエンドポイントについて解説します。v2.0については、v2.0の「[アクセストークンを発行する](/reference/line-login-v2/#issue-access-token)」を参照してください。
    - LINEログイン機能に追加または変更があったときに、レスポンスやIDトークンのJSONオブジェクトの構造が変更される場合があります。この変更には、プロパティの追加、順序の変更、データの要素間の空白や改行の有無、データ長の変化が含まれます。将来、従来と異なる構造のペイロードを受信しても不具合が発生しないように、サーバーを実装してください。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/oauth2/v2.1/token \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -d 'grant_type=authorization_code' \
      -d 'code=1234567890abcde' \
      --data-urlencode 'redirect_uri=https://example.com/auth?key=value' \
      -d 'client_id=1234567890' \
      -d 'client_secret=1234567890abcdefghij1234567890ab' \
      -d 'code_verifier=wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1'
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

  `authorization_code`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  code

  #undefined
  String

  LINEプラットフォームから受け取った[認可コード](/docs/line-login/integrate-line-login/#receiving-the-authorization-code)
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  redirect_uri

  #undefined
  String

  [認可リクエスト](/docs/line-login/integrate-line-login/#making-an-authorization-request)時に指定した`redirect_uri`と同じ値
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

  :::parameter-table-entry{optional=""}
  #undefined
  code_verifier

  #undefined
  String

  半角英数字および記号からなる43〜128文字のランダムな文字列（例：`wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1`）。  
  LINEログインがPKCEを実装している場合、本パラメータを加えることで、LINEプラットフォーム側で`code_verifier`の有効性を検証したうえでアクセストークンを返却します。  
  PKCEの実装方法について詳しくは、『LINEログインドキュメント』の「[LINEログインにPKCEを実装する](/docs/line-login/integrate-pkce/#how-to-integrate-pkce)」を参照してください。
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

      アクセストークン。有効期間は30日です。
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
      id_token

      #undefined
      String

      ユーザー情報を含む[JSONウェブトークン（JWT）](https://datatracker.ietf.org/doc/html/rfc7519){rel="[\"nofollow\"]"}。このプロパティは、スコープに`openid`を指定した場合にのみ返されます。IDトークンについて詳しくは、「[IDトークンからプロフィール情報を取得する](/docs/line-login/verify-id-token/)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      refresh_token

      #undefined
      String

      新しいアクセストークンを取得するためのトークン（リフレッシュトークン）。アクセストークンが発行されてから90日間有効です。

      詳しくは、「[アクセストークンを更新する](#refresh-access-token)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      scope

      #undefined
      String

      アクセストークンに付与されている権限。スコープについて詳しくは、「[スコープ](/docs/line-login/integrate-line-login/#scopes)」を参照してください。

      注意：`email`スコープは権限が付与されていても`scope`プロパティの値としては返されません。
      :::::

      :::::parameter-table-entry
      #undefined
      token_type

      #undefined
      String

      `Bearer`
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "access_token": "bNl4YEFPI/hjFWhTqexp4MuEw5YPs...",
        "expires_in": 2592000,
        "id_token": "eyJhbGciOiJIUzI1NiJ9...",
        "refresh_token": "Aa1FdeggRhTnPNNpxr8p",
        "scope": "profile",
        "token_type": "Bearer"
      }
      ```
      :::::
    ::::
  :::
::
