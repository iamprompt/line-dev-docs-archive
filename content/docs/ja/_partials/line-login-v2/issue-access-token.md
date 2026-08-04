---
title: Issue Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login-v2/issue-access-token
__hash__: H65bkKDwCWSh98LOU1-Uc5-1n1mPVv9Y4P4Xef46fdY
seo:
  description: ''
---

### アクセストークンを発行する

::reference-with-code
  :::reference-content
  アクセストークンを発行します。

  LINEログインAPIで管理するアクセストークンは、LINEプラットフォームに保存されているユーザー情報（例：ユーザーID、表示名、プロフィール画像、およびステータスメッセージ）を利用することを、アプリが許可されていることを示します。

  レスポンスに含まれるアクセストークンとリフレッシュトークンは、LINEログインAPIを呼び出す際に必要です。

    ::::admonition{title="注意" type="note"}
    ここでは、LINEログイン v2.0のエンドポイントについて解説します。v2.1については、v2.1の「[アクセストークンを発行する](/reference/line-login/#issue-access-token)」を参照してください。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/oauth/accessToken \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -d 'grant_type=authorization_code' \
      -d 'code=b5fd32eacc791df' \
      -d 'redirect_uri=https%3A%2F%2Fexample.com%2Fauth' \
      -d 'client_id=12345' \
      -d 'client_secret=d6524edacc8742aeedf98f'
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

  LINEプラットフォームから受け取った[認可コード](/docs/line-login/integrate-line-login-v2/#receiving-the-authorization-code)
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  redirect_uri

  #undefined
  String

  コールバックURL
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
      refresh_token

      #undefined
      String

      新しいアクセストークンを取得するためのトークン（リフレッシュトークン）。アクセストークンの有効期限が切れてから最長10日間有効です。

      詳しくは、「[アクセストークンを更新する](#refresh-access-token)」を参照してください。
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
          "access_token": "bNl4YEFPI/hjFWhTqexp4MuEw5YPs7qhr6dJDXKwNPuLka...",
          "expires_in": 2591977,
          "refresh_token": "8iFFRdyxNVNLWYeteMMJ",
          "scope": "P",
          "token_type": "Bearer"
      }
      ```
      :::::
    ::::
  :::
::
