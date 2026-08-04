---
title: Issue Channel Access Token
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/common/issue-channel-access-token
__hash__: dRmIi89SAdxI9m-U-Jdn-4oKfSsOLO7e5Zu80k9EJls
seo:
  description: ''
---

### 短期のチャネルアクセストークンを発行する

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/oauth/accessToken"}::reference-with-code
  :::reference-content
  30日間有効な短期のチャネルアクセストークンを発行します。

  短期のチャネルアクセストークンは、チャネルごとに30件まで発行できます。上限を超過した場合は、最も古いチャネルアクセストークンが取り消されます。なお、有効期限が切れたチャネルアクセストークンは、発行数としてカウントされません。

    ::::admonition{title="ヒント" type="tip"}
    - Messaging APIのチャネルの場合は、長期のチャネルアクセストークンや任意の有効期間を指定できるチャネルアクセストークンv2.1、ステートレスチャネルアクセストークンを発行できます。詳しくは、『LINEプラットフォームの基礎知識』の「[チャネルアクセストークン](/docs/basics/channel-access-token/)」を参照してください。
    - LINEログインのチャネルのチャネルアクセストークンも、このAPIで発行できます。LINEログインのチャネルのチャネルアクセストークンは、[LIFFのサーバーAPI](/reference/liff-server/)で利用します。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/oauth/accessToken \
      -H "Content-Type: application/x-www-form-urlencoded" \
      --data-urlencode 'grant_type=client_credentials' \
      --data-urlencode 'client_id={channel ID}' \
      --data-urlencode 'client_secret={channel secret}'
      ```
      :::::
    ::::
  :::
::

#### APIプレイグラウンド

:api-playground{endpoint="/oauth/accessToken"}#### レート制限

370リクエスト/秒

レート制限について詳しくは、「[レート制限](#rate-limits)」を参照してください。

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
  grant_type

  #undefined
  String

  `client_credentials`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_id

  #undefined
  String

  チャネルID。[LINE Developersコンソール](/console/)で確認できます。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_secret

  #undefined
  String

  チャネルシークレット。[LINE Developersコンソール](/console/)で確認できます。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  HTTPステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      access_token

      #undefined
      String

      短期のチャネルアクセストークン。有効期間は30日です。

        ::::::admonition{title="注意" type="note"}
        チャネルアクセストークンは更新できません。
        ::::::
      :::::

      :::::parameter-table-entry
      #undefined
      expires_in

      #undefined
      Number

      チャネルアクセストークンが発行されてから有効期限が切れるまでの秒数
      :::::

      :::::parameter-table-entry
      #undefined
      token_type

      #undefined
      String

      `Bearer`
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "access_token": "W1TeHCgfH2Liwa.....",
        "expires_in": 2592000,
        "token_type": "Bearer"
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

  | コード   | 説明                                                                                                         |
  | ----- | ---------------------------------------------------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- 無効なチャネルIDが指定されている。 - 無効なチャネルシークレットが指定されている。 - リクエストパラメータが誤ったフォーマットで指定されている。 |
  | `429` | [レート制限](#issue-channel-access-token-rate-limit)を超過しました。                                                    |
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効なチャネルIDを指定した場合（400 Bad Request）
      {
        "error": "invalid_client",
        "error_description": "invalid client_id"
      }

      // 無効なチャネルシークレットを指定した場合（400 Bad Request）
      {
        "error": "invalid_client",
        "error_description": "invalid client_secret"
      }
      ```
      :::::
    ::::
  :::
::
