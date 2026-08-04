---
title: Userinfo
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login/userinfo
__hash__: ehsjf3kaCciBgEzZsq2UNsLs69gIdWdN0uYRH0mtVJg
seo:
  description: ''
---

### ユーザー情報を取得する

::reference-with-code
  :::reference-content
  ユーザーのユーザーID、表示名、プロフィール画像を取得します。「[ユーザープロフィールを取得する](#get-user-profile)」エンドポイントとは、アクセストークンに必要なスコープが異なります。

  なお取得できる情報はメインプロフィールのみです。ユーザーの:glossary-tooltip[[サブプロフィール](/glossary/#subprofile)]{glossary-id="subprofile"}は取得できません。

    ::::admonition{title="注意" type="note"}
    `openid`のスコープを持つアクセストークンが必要です。詳しくは、『LINEログインドキュメント』の「[ユーザーに認証と認可を要求する](/docs/line-login/integrate-line-login/#making-an-authorization-request)」と「[スコープ](/docs/line-login/integrate-line-login/#scopes)」を参照してください。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/oauth2/v2.1/userinfo \
      -H 'Authorization: Bearer {access token}'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`GET https://api.line.me/oauth2/v2.1/userinfo`

`POST https://api.line.me/oauth2/v2.1/userinfo`

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{access token}`
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      sub

      #undefined
      String

      ユーザーID
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
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "sub": "U1234567890abcdef1234567890abcdef",
        "name": "Taro Line",
        "picture": "https://profile.line-scdn.net/0h8pWWElvzZ19qLk3ywQYYCFZraTIdAGEXEhx9ak56MDxDHiUIVEEsPBspMG1EGSEPAk4uP01t0m5G"
      }
      ```
      :::::
    ::::
  :::
::
