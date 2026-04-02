---
title: Verify Channel Access Token V21
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/common/verify-channel-access-token-v2.1
__hash__: HNzcxhVfI7bRHio2dvzoLngYRL9EhE2RzId2wX9nSmI
seo:
  description: ''
---

### チャネルアクセストークンv2.1の有効性を検証する

:api-endpoint{protocol="get" endpoint="https://api.line.me/oauth2/v2.1/verify"}::reference-with-code
  :::reference-content
  [任意の有効期間を指定できるチャネルアクセストークン（チャネルアクセストークンv2.1）](/docs/basics/channel-access-token/#user-specified-expiration)の有効性を検証できます。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/oauth2/v2.1/verify \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'access_token=eyJhbGciOiJIUzI1NiJ9.UnQ_o-GP0VtnwDjbK0C8E_NvK...' \
      -G
      ```
      :::::
    ::::
  :::
::

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  access_token

  任意の有効期間を指定できるチャネルアクセストークン（チャネルアクセストークンv2.1）。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  チャネルアクセストークンが有効な場合は、ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      client_id

      #undefined
      String

      チャネルアクセストークンが発行されたチャネルID。
      :::::

      :::::parameter-table-entry
      #undefined
      expires_in

      #undefined
      Number

      チャネルアクセストークンの有効期限が切れるまでの秒数。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      scope

      #undefined
      String

      チャネルアクセストークンに付与されている権限。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "client_id": "1573163733",
        "expires_in": 2591659,
        "scope": "profile chat_message.write"
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                                                                     |
  | ----- | ---------------------------------------------------------------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- 無効なフォーマットのチャネルアクセストークンが指定されている。 - チャネルアクセストークンの有効期限が切れている。 - 存在しないチャネルアクセストークンが指定されている。 |
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // チャネルアクセストークンの有効期限が切れていた場合（400 Bad Request）
      {
          "error": "invalid_request",
          "error_description": "The access token expired"
      }

      // 無効なフォーマットのチャネルアクセストークンが指定された場合（400 Bad Request）
      {
          "error": "invalid_request",
          "error_description": "The access token not JWS"
      }
      ```
      :::::
    ::::
  :::
::
