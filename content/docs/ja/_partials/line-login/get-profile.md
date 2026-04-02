---
title: Get Profile
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login/get-profile
__hash__: ytzf025U-U6p6eY_ysfcRQkh-EL8DJ2YzPesaLqQHkY
seo:
  description: ''
---

### ユーザープロフィールを取得する

::reference-with-code
  :::reference-content
  ユーザーのユーザーID、表示名、プロフィール画像、およびステータスメッセージを取得します。「[ユーザー情報を取得する](#userinfo)」エンドポイントとは、アクセストークンに必要なスコープが異なります。

  なお取得できる情報はメインプロフィールのみです。ユーザーの:glossary-tooltip[[サブプロフィール](/glossary/#subprofile)]{glossary-id="subprofile"}は取得できません。

    ::::admonition{title="注意" type="note"}
    `profile`のスコープを持つアクセストークンが必要です。詳しくは、『LINEログインドキュメント』の「[ユーザーに認証と認可を要求する](/docs/line-login/integrate-line-login/#making-an-authorization-request)」と「[スコープ](/docs/line-login/integrate-line-login/#scopes)」を参照してください。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/profile \
      -H 'Authorization: Bearer {access token}'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`GET https://api.line.me/v2/profile`

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
      userId

      #undefined
      String

      ユーザーID
      :::::

      :::::parameter-table-entry
      #undefined
      displayName

      #undefined
      String

      ユーザーの表示名
      :::::

      :::::parameter-table-entry
      #undefined
      pictureUrl

      #undefined
      String

      プロフィール画像のURL。スキームはhttpsです。ユーザーがプロフィール画像を設定していない場合はレスポンスに含まれません。

      プロフィール画像のサムネイル：

      プロフィール画像のURLに、以下のサフィックスを付加すると、プロフィール画像のサムネイルを取得できます。

      | サフィックス   | サムネイルサイズ  |
      | -------- | --------- |
      | `/large` | 200 x 200 |
      | `/small` | 51 x 51   |

      例：`https://profile.line-scdn.net/abcdefghijklmn/large`
      :::::

      :::::parameter-table-entry
      #undefined
      statusMessage

      #undefined
      String

      ユーザーのステータスメッセージ。ユーザーがステータスメッセージを設定していない場合はレスポンスに含まれません。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "userId": "U4af4980629...",
        "displayName": "Brown",
        "pictureUrl": "https://profile.line-scdn.net/abcdefghijklmn",
        "statusMessage": "Hello, LINE!"
      }
      ```
      :::::
    ::::
  :::
::
