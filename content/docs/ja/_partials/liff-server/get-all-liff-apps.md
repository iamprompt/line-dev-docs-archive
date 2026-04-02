---
title: Get All Liff Apps
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-server/get-all-liff-apps
__hash__: WiajwtXcR2A3nx76v1qpZXMrnCyCaH8BKt3MKWdgt20
seo:
  description: ''
---

### すべてのLIFFアプリを取得する

::reference-with-code
  :::reference-content
  チャネルに追加されているすべてのLIFFアプリの情報を取得します。
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X GET https://api.line.me/liff/v1/apps \
      -H "Authorization: Bearer {channel access token}"
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`GET https://api.line.me/liff/v1/apps`

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`  

  詳しくは、「[チャネルアクセストークンを準備する](#preparing-channel-access-token)」を参照してください。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下のプロパティを含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      apps

      #undefined
      Array of objects

      LIFFアプリオブジェクトの配列
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].liffId

      #undefined
      String

      LIFFアプリID
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].view.type

      #undefined
      String

      LIFFアプリの画面サイズ。以下のいずれかの値が含まれます。

      - `full`
      - `tall`
      - `compact`

      詳しくは、「[LIFFアプリの画面サイズ](/docs/liff/overview/#screen-size)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].view.url

      #undefined
      String

      エンドポイントURL。LIFFアプリを実装したウェブアプリのURLです（例：`https://example.com`）。LIFF URLを利用してLIFFアプリを起動した際に、このURLが利用されます。
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].view.moduleMode

      #undefined
      Boolean

      LIFFアプリをモジュールモードで使用する場合は、`true`。モジュールモードの場合は、ヘッダーのアクションボタンが非表示になります。
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].description

      #undefined
      String

      LIFFアプリの名前
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].features.ble

      #undefined
      Boolean

      LINE ThingsのためにBluetooth® Low Energyに対応している場合は`true`。対応しない場合は`false`。
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].features.qrCode

      #undefined
      Boolean

      LIFFアプリで二次元コードリーダーを起動できる場合は`true`。起動できない場合は`false`。
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].permanentLinkPattern

      #undefined
      String

      LIFF URLの追加情報の処理方法。`concat`が返されます。

      詳しくは、『LIFFドキュメント』の「[LIFFアプリを開く](/docs/liff/opening-liff-app/)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].scope

      #undefined
      Array of strings

      LIFFアプリのスコープ。

      - `openid`
      - `email`
      - `profile`
      - `chat_message.write`

      各スコープについて詳しくは、『LIFFドキュメント』の「[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/#registering-liff-app)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      apps[].botPrompt

      #undefined
      String

      [友だち追加オプション](/docs/line-login/link-a-bot/)の設定。

      - `normal`：チャネル同意画面に、LINE公式アカウントを友だち追加するオプションを表示する。
      - `aggressive`：チャネル同意画面の後に、LINE公式アカウントを友だち追加するかどうかを確認する画面を表示する。
      - `none`：LINE公式アカウントを友だち追加するオプションを表示しない。
      :::::
    ::::
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "apps": [
          {
            "liffId": "{liffId}",
            "view": {
              "type": "full",
              "url": "https://example.com/myservice"
            },
            "description": "Happy New York",
            "permanentLinkPattern": "concat"
          },
          {
            "liffId": "{liffId}",
            "view": {
              "type": "tall",
              "url": "https://example.com/myservice2"
            },
            "features": {
              "ble": true,
              "qrCode": true
            },
            "permanentLinkPattern": "concat",
            "scope": ["profile", "chat_message.write"],
            "botPrompt": "none"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

以下のいずれかのステータスコードを返します。

| ステータスコード | 説明                  |
| -------- | ------------------- |
| 401      | 認証に失敗しました。          |
| 404      | チャネルにLIFFアプリがありません。 |
