---
title: Revoke Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login/revoke-access-token
__hash__: 5vReN8dbH4FILi0a5hIkLM85uMPxa3GHgTaV67AgjjQ
seo:
  description: ''
---

### アクセストークンを取り消す

::reference-with-code
  :::reference-content
  ユーザーのアクセストークンを無効にします。

    ::::admonition{title="注意" type="note"}
    - ここでは、LINEログイン v2.1のエンドポイントについて解説します。v2.0については、v2.0の「[アクセストークンを取り消す](/reference/line-login-v2/#revoke-access-token)」を参照してください。
    - Messaging APIで使用されるチャネルアクセストークンの無効化には使用できません。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/oauth2/v2.1/revoke \
      -H "Content-Type: application/x-www-form-urlencoded" \
      -d "client_id={channel id}&client_secret={channel secret}&access_token={access token}"
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/oauth2/v2.1/revoke`

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
  access_token

  #undefined
  String

  アクセストークン
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_id

  #undefined
  String

  チャネルID。[LINE Developersコンソール](/console/)で確認できます。
  :::

  :::parameter-table-entry{annotation="説明を参照"}
  #undefined
  client_secret

  #undefined
  String

  チャネルシークレット。[LINE Developersコンソール](/console/)で確認できます。

  - アプリタイプが［**ウェブアプリ**］のみのチャネルでは必須です。
  - アプリタイプが［**ネイティブアプリ**］かつ［**ウェブアプリ**］のチャネルでは無視されます。
  - アプリタイプが［**ネイティブアプリ**］のみのチャネルでは無視されます。
  :::
::

#### レスポンス

ステータスコード`200`と空のレスポンスボディを返します。
