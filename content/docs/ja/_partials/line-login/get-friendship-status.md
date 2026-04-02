---
title: Get Friendship Status
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login/get-friendship-status
__hash__: Rj5gIHQj3AIMpHqsrO-PsRY4dTrgnNXdpRXCCKpYvzg
seo:
  description: ''
---

### LINE公式アカウントとの友だち関係を取得する

::reference-with-code
  :::reference-content
  LINEログインのチャネルにリンクされているLINE公式アカウントと、ユーザーの友だち関係を取得します。

  友だち追加オプションの使用方法について詳しくは、『LINEログインドキュメント』の「[LINEログインしたときにLINE公式アカウントを友だち追加する（友だち追加オプション）](/docs/line-login/link-a-bot/)」を参照してください。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/friendship/v1/status \
      -H 'Authorization: Bearer {access token}'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`GET https://api.line.me/friendship/v1/status`

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{access token}`
  :::
::

::admonition{title="注意" type="note"}
`profile`のスコープを持つアクセストークンが必要です。詳しくは、『LINEログインドキュメント』の「[ユーザーに認証と認可を要求する](/docs/line-login/integrate-line-login/#making-an-authorization-request)」と「[スコープ](/docs/line-login/integrate-line-login/#scopes)」を参照してください。
::

#### レスポンス

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      friendFlag

      #undefined
      Boolean

      - `true`：ユーザーがLINE公式アカウントを友だち追加済みで、ブロックしていない。
      - `false`：それ以外の場合。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "friendFlag": true
      }
      ```
      :::::
    ::::
  :::
::
