---
title: Revoke Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login-v2/revoke-access-token
__hash__: AYPw8YZ6yK0gp2IMOW484YoEwezJJUcLB8SKwYL11Bc
seo:
  description: ''
---

### アクセストークンを取り消す

::reference-with-code
  :::reference-content
  ユーザーのアクセストークンを無効にします。

    ::::admonition{title="注意" type="note"}
    - ここでは、LINEログイン v2.0のエンドポイントについて解説します。v2.1については、v2.1の「[アクセストークンを取り消す](/reference/line-login/#revoke-access-token)」を参照してください。
    - Messaging APIで使用されるチャネルアクセストークンの無効化には使用できません。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/oauth/revoke \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'refresh_token={refresh token}'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/v2/oauth/revoke`

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/x-www-form-urlencoded
  :::
::

#### Request body

Request body は form-urlencoded フォーマットになります。

::parameter-table
  :::parameter-table-entry
  #undefined
  refresh_token

  #undefined
  String

  無効化するアクセストークンのリフレッシュトークン
  :::
::

#### Response

ステータスコード`200`と空のレスポンスボディを返します。
