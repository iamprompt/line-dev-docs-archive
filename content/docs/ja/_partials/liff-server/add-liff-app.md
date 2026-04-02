---
title: Add Liff App
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-server/add-liff-app
__hash__: IpzCmnK6JP6E5ItSxLIBss-IZV2QRDBCzqI2aO8Qn2I
seo:
  description: ''
---

### LIFFアプリをチャネルに追加する

::reference-with-code
  :::reference-content
  LIFFアプリをチャネルに追加します。チャネルごとに、最大30件のLIFFアプリを追加できます。

    ::::admonition{title="LINEミニアプリとしての作成を推奨します" type="tip"}
    今後、LIFFとLINEミニアプリは、ブランド統合を予定しています。この統合により、LIFFはLINEミニアプリに統合されます。そのため、LIFFアプリを新規作成する際は、LINEミニアプリとして作成することを推奨します。詳しくは、「[2025年2月12日のニュース](/news/2025/02/12/line-mini-app/)」を参照してください。
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X POST https://api.line.me/liff/v1/apps \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: application/json" \
      -d '{
          "view": {
              "type": "full",
              "url": "https://example.com/myservice"
          },
          "description": "Service Example",
          "features": {
              "qrCode": true
          },
          "permanentLinkPattern": "concat",
          "scope": ["profile", "chat_message.write"],
          "botPrompt": "none"
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/liff/v1/apps`

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`  

  詳しくは、「[チャネルアクセストークンを準備する](#preparing-channel-access-token)」を参照してください。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  view.type

  #undefined
  String

  LIFFアプリの画面サイズ。以下のいずれかの値を指定します。

  - `full`
  - `tall`
  - `compact`

  詳しくは、「[LIFFアプリの画面サイズ](/docs/liff/overview/#screen-size)」を参照してください。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  view.url

  #undefined
  String

  エンドポイントURL。LIFFアプリを実装したウェブアプリのURLです（例：`https://example.com`）。LIFF URLを利用してLIFFアプリを起動した際に、このURLが利用されます。

  URLスキームは**https**である必要があります。なお、URLフラグメント（#URL-fragment）は指定できません。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  view.moduleMode

  #undefined
  Boolean

  LIFFアプリをモジュールモードで使用する場合は、`true`。モジュールモードの場合は、ヘッダーのアクションボタンが非表示になります。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  description

  #undefined
  String

  LIFFアプリの名前。

  LIFFアプリ名には、「LINE」またはそれに類する文字列、不適切な文字列は含められません。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  features.qrCode

  #undefined
  Boolean

  LIFFアプリで二次元コードリーダーを使用する場合は`true`を指定します。使用しない場合は`false`を指定します。デフォルト値は`false`です。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  permanentLinkPattern

  #undefined
  String

  LIFF URLの追加情報の処理方法。`concat`を指定してください。

  詳しくは、『LIFFドキュメント』の「[LIFFアプリを開く](/docs/liff/opening-liff-app/)」を参照してください。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  scope

  #undefined
  Array of strings

  LIFF SDKの一部のメソッドを使用するために必要なスコープの配列。

  - `openid`
  - `email`
  - `profile`
  - `chat_message.write`

  デフォルト値は `["profile", "chat_message.write"]`です。各スコープについて詳しくは、『LIFFドキュメント』の「[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/#registering-liff-app)」を参照してください。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  botPrompt

  #undefined
  String

  [友だち追加オプション](/docs/line-login/link-a-bot/)の設定を、以下のいずれかの値で指定します。

  - `normal`：チャネル同意画面に、LINE公式アカウントを友だち追加するオプションを表示する。
  - `aggressive`：チャネル同意画面の後に、LINE公式アカウントを友だち追加するかどうかを確認する画面を表示する。
  - `none`：LINE公式アカウントを友だち追加するオプションを表示しない。

  デフォルト値は`none`です。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下のプロパティを含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      liffId

      #undefined
      String

      LIFFアプリID
      :::::
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "liffId": "{liffId}"
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

以下のいずれかのステータスコードを返します。

| ステータスコード | 説明                                                              |
| -------- | --------------------------------------------------------------- |
| 400      | 以下のどちらかです。- リクエストに無効な値が含まれています。 - チャネルに追加できるLIFFアプリ数の上限に達しています。 |
| 401      | 認証に失敗しました。                                                      |
