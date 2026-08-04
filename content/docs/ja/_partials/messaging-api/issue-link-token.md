---
title: Issue Link Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/issue-link-token
__hash__: pInXqPDrou3huqNwp5mPeu92REcBCkuska8rdNmauxY
seo:
  description: ''
---

### 連携トークンを発行する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/user/{userId}/linkToken"}::reference-with-code
  :::reference-content
  [アカウント連携](/docs/messaging-api/linking-accounts/)で使用する連携トークンを発行するAPIです。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X POST https://api.line.me/v2/bot/user/{userId}/linkToken \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  userId

  連携対象のLINEアカウントのユーザーID。[アカウント連携イベント](#account-link-event)オブジェクトの`source`オブジェクトで返されます。LINEに表示されるLINE IDは使用しないでください。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下のプロパティを含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      linkToken

      #undefined
      String

      連携トークン。連携トークンの有効期間は10分で、1回のみ使用できます。

        ::::::admonition{title="注意" type="note"}
        有効期間は予告なく変わる可能性があります。
        ::::::
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "linkToken": "NMZTNuVrPTqlr2IF8Bnymkb7rXfYv5EY"
      }
      ```
      :::::
    ::::
  :::
::
