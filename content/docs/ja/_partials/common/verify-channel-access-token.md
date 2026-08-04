---
title: Verify Channel Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/common/verify-channel-access-token
__hash__: 3hPn8LirBF4r3GEe9Av8NGYn7O_YsIu37MJxcB7I8SU
seo:
  description: ''
---

### 短期または長期のチャネルアクセストークンの有効性を検証する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/oauth/verify"}::reference-with-code
  :::reference-content
  [短期のチャネルアクセストークン](/docs/basics/channel-access-token/#short-lived-channel-access-token)または[長期のチャネルアクセストークン](/docs/basics/channel-access-token/#long-lived-channel-access-token)の有効性を検証できます。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/oauth/verify \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'access_token=bNl4YEFPI/hjFWhTqexp4MuEw5YPs7qhr6dJDXKwNPuLka...'
      ```
      :::::
    ::::
  :::
::

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

  短期または長期のチャネルアクセストークン。
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
        "client_id": "1350031035",
        "expires_in": 3138007490,
        "scope": "P CM"
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

  | コード   | 説明                                                                                                                   |
  | ----- | -------------------------------------------------------------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- 無効なチャネルアクセストークンが指定されている。 - 無効なフォーマットのチャネルアクセストークンが指定されている。 - チャネルアクセストークンの有効期限が切れている。 |
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なチャネルアクセストークンを指定した場合（400 Bad Request）
      {
          "error": "invalid_request",
          "error_description": "access_token invalid"
      }

      // 無効なフォーマットのチャネルアクセストークンを指定した場合（400 Bad Request）
      {
          "error": "invalid_request",
          "error_description": "access_token in invalid format"
      }
      ```
      :::::
    ::::
  :::
::
