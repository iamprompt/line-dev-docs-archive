---
title: Put Liff App
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-server/put-liff-app
__hash__: h2PJYN1C_CYBJc-UXnFAOlzw7u3OS3yTKi8EeWKxsI8
seo:
  description: ''
---

### LIFFアプリの設定を更新する

::reference-with-code
  :::reference-content
  LIFFアプリの設定を、部分的に更新します。
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X PUT https://api.line.me/liff/v1/apps/{liffId} \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: application/json" \
      -d '{
          "view": {
              "url": "https://new.example.com"
          }
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`PUT https://api.line.me/liff/v1/apps/{liffId}`

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

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  liffId

  更新するLIFFアプリのID
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{optional=""}
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

  :::parameter-table-entry{optional=""}
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

  LIFFアプリで二次元コードリーダーを使用する場合は`true`を指定します。使用しない場合は`false`を指定します。
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

  各スコープについて詳しくは、『LIFFドキュメント』の「[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/#registering-liff-app)」を参照してください。
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
  :::
::

::admonition{title="注意" type="note"}
リクエストボディに指定しなかったプロパティは変更されません。
::

#### レスポンス

ステータスコード`200`を返します。

#### エラーレスポンス

以下のいずれかのステータスコードを返します。

| ステータスコード | 説明                                                             |
| -------- | -------------------------------------------------------------- |
| 400      | リクエストに無効な値が含まれています。                                            |
| 401      | 認証に失敗しました。                                                     |
| 404      | 以下のどちらかです。- 指定したLIFFアプリは存在しません。 - 指定したLIFFアプリは別のチャネルに追加されています。 |
