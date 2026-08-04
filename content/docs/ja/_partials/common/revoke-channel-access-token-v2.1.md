---
title: Revoke Channel Access Token V21
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/common/revoke-channel-access-token-v2.1
__hash__: rzrFpUZasY8VGBMTuafXByFbPKoddGV9dKs9yXMXySA
seo:
  description: ''
---

### チャネルアクセストークンv2.1を取り消す

:api-endpoint{protocol="post" endpoint="https://api.line.me/oauth2/v2.1/revoke"}::reference-with-code
  :::reference-content
  チャネルアクセストークンv2.1を取り消します。

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
      curl -X POST https://api.line.me/oauth2/v2.1/revoke \
      --data-urlencode 'client_id={channel ID}' \
      --data-urlencode 'client_secret={channel secret}' \
      --data-urlencode 'access_token={access token}'
      ```
      :::::
    ::::
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  client_id

  #undefined
  String

  チャネルID
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_secret

  #undefined
  String

  チャネルシークレット
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  access_token

  #undefined
  String

  チャネルアクセストークン
  :::
::

#### レスポンス

ステータスコード`200`と空のレスポンスボディを返します。

::admonition{title="注意" type="note"}
無効なチャネルアクセストークンを指定した場合も、エラーレスポンスは発生しません。
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                                                                     |
  | ----- | ---------------------------------------------------------------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- 無効なフォーマットのチャネルアクセストークンが指定されている。 - 存在しないチャネルアクセストークンが指定されている。 - 不正なチャネルアクセストークンが指定されている。 |
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なフォーマットのチャネルアクセストークンが指定された場合（400 Bad Request）
      {
        "error": "invalid_request",
        "error_description": "The access token not JWS"
      }

      // 不正なチャネルアクセストークンが指定された場合（400 Bad Request）
      {
        "error": "invalid_request",
        "error_description": "The access token malformed"
      }
      ```
      :::::
    ::::
  :::
::
