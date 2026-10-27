---
title: Revoke Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login/revoke-access-token
__hash__: g_NIeXJmE-Ds9IBCFfM-viyN-zZExtZAXWRrmOjaL4A
seo:
  description: ''
---

### アクセストークンを取り消す

::reference-with-code
  :::reference-content
  ユーザーのアクセストークンを無効にします。

  このエンドポイントを使用するには、以下のいずれかの方法でクライアントを認証する必要があります。

  | 認証方法          | 概要                                                                                                                                       |
  | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
  | ヘッダーによる認証     | `Authorization`ヘッダーに、`Basic {client_id:client_secretをBase64エンコードした文字列}`を指定する                                                             |
  | リクエストボディによる認証 | リクエストボディのパラメータに`client_id`と`client_secret`を指定する。`client_secret`の要否はアプリタイプによって異なるため、詳細は「[リクエストボディ](#revoke-token-request-body)」を参照してください。 |

    ::::admonition{title="注意" type="note"}
    - ここでは、LINEログイン v2.1のエンドポイントについて解説します。v2.0については、v2.0の「[アクセストークンを取り消す](/reference/line-login-v2/#revoke-access-token)」を参照してください。
    - Messaging APIで使用されるチャネルアクセストークンの無効化には使用できません。
    ::::
  :::

  :::reference-code
  *リクエストの例（ヘッダーによる認証）*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/oauth2/v2.1/revoke \
      -H "Authorization: Basic {client_id:client_secretをBase64エンコードした文字列}" \
      -H "Content-Type: application/x-www-form-urlencoded" \
      -d "access_token={access token}"
      ```
      :::::
    ::::

  *リクエストの例（リクエストボディによる認証）*

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

  :::parameter-table-entry{annotation="説明を参照"}
  #undefined
  Authorization

  Basic `{client_id:client_secretをBase64エンコードした文字列}`

  ヘッダーによる認証を行う場合は必須です。
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

  :::parameter-table-entry{annotation="説明を参照"}
  #undefined
  client_id

  #undefined
  String

  チャネルID。[LINE Developersコンソール](/console/)で確認できます。

  リクエストボディによる認証を行う場合は必須です。
  :::

  :::parameter-table-entry{annotation="説明を参照"}
  #undefined
  client_secret

  #undefined
  String

  チャネルシークレット。[LINE Developersコンソール](/console/)で確認できます。

  - アプリタイプが［**ウェブアプリ**］のみのチャネルで、リクエストボディによる認証を行う場合は必須です。
  - アプリタイプが［**ネイティブアプリ**］かつ［**ウェブアプリ**］のチャネルでは無視されます。
  - アプリタイプが［**ネイティブアプリ**］のみのチャネルでは無視されます。
  :::
::

#### レスポンス

ステータスコード`200`と空のレスポンスボディを返します。
