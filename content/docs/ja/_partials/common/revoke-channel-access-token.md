---
title: Revoke Channel Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/common/revoke-channel-access-token
__hash__: oNCDXCA_h19xNbYLEt4rHWm7TIljrksfpTu4Cl2CIUw
seo:
  description: ''
---

### 短期または長期のチャネルアクセストークンを取り消す

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/oauth/revoke"}::reference-with-code
  :::reference-content
  短期または長期のチャネルアクセストークンを取り消すAPIです。

  以下のような場合に、チャネルアクセストークンを取り消します。

  - チャネルアクセストークンを再発行することで古いチャネルアクセストークンが不要になったとき
  - チャネルアクセストークンの漏洩が疑われたとき

  なお、すでに有効期限が切れているチャネルアクセストークンを取り消す必要はありません。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/oauth/revoke \
      -H "Content-Type: application/x-www-form-urlencoded" \
      --data-urlencode 'access_token={channel access token}'
      ```
      :::::
    ::::
  :::
::

#### APIプレイグラウンド

:api-playground{endpoint="/oauth/revoke"}#### リクエストヘッダー

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

  チャネルアクセストークン
  :::
::

#### レスポンス

ステータスコード`200`と空のレスポンスボディを返します。無効なチャネルアクセストークンを指定した場合はエラーが返りません。

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                               |
  | ----- | -------------------------------- |
  | `400` | 無効なフォーマットのチャネルアクセストークンが指定されています。 |
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なフォーマットのチャネルアクセストークンを指定した場合（400 Bad Request）
      {
        "error": "invalid_request"
      }
      ```
      :::::
    ::::
  :::
::
