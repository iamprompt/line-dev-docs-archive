---
title: Deauthorize
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-login/deauthorize
__hash__: Fcef71XzRKa07LajMOYPMMUfBhbxPyNHc-2N-RistqA
seo:
  description: ''
---

### 連動アプリに認可した権限を取り消す

::reference-with-code
  :::reference-content
  ユーザーが連動アプリに対して認可した権限を、ユーザーの代わりに取り消します。詳しくは、[LINEログイン開発ガイドライン](/docs/line-login/development-guidelines/)の必須事項である「[ユーザー退会時の連動アプリに対する権限取消](/docs/line-login/development-guidelines/#deauthorize)」を参照してください。

  なお、LIFFアプリやLINEミニアプリもこのエンドポイントで権限を取り消すことができます。

  連動アプリに対して認可した権限をユーザー自身が取り消す方法については、『LINEログインドキュメント』の「[ユーザーによる連動アプリの管理について](/docs/line-login/managing-authorized-apps/)」を参照してください。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/user/v1/deauthorize \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d '{
          "userAccessToken": "{user access token}"
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/user/v1/deauthorize`

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`

  利用できるチャネルアクセストークンの種類は、以下のとおりです。

  - [任意の有効期間を指定できるチャネルアクセストークン（チャネルアクセストークンv2.1）](/docs/basics/channel-access-token/#user-specified-expiration)
  - [ステートレスチャネルアクセストークン](/docs/basics/channel-access-token/#stateless-channel-access-token)

  チャネルアクセストークンの発行方法について詳しくは、『LINEプラットフォームの基礎知識』の「[チャネルアクセストークン](/docs/basics/channel-access-token/)」を参照してください。
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  userAccessToken

  #undefined
  String

  対象ユーザーのアクセストークン
  :::
::

#### レスポンス

ステータスコード`204`と空のレスポンスボディを返します。

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                                                   |
  | ----- | ---------------------------------------------------------------------------------------------------- |
  | `400` | 対象ユーザーのアクセストークンが無効です。次のような理由が考えられます。- ユーザーがアプリに対する権限を既に取り消している。 - ユーザーに代わって、既にAPIでアプリに対する権限を取り消している。 |
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 対象ユーザーのアクセストークンが無効な場合（400 Bad Request）
      {
        "message": "invalid token"
      }
      ```
      :::::
    ::::
  :::
::
