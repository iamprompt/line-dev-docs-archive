---
title: Message Common
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/message-common
__hash__: HlI9VOM0-cgqDvjdAPI473T2Npg4x7f-q4xz8TxBRXg
seo:
  description: ''
---

### メッセージ共通プロパティ

以下のプロパティはすべてのメッセージオブジェクトに指定できます。

#### クイックリプライ

クイックリプライ機能で使用するプロパティです。詳しくは、「[クイックリプライを使う](/docs/messaging-api/using-quick-reply/)」を参照してください。

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  quickReply

  #undefined
  Object

  [itemsオブジェクト](#items-object)
  :::
::

複数の[メッセージオブジェクト](#message-objects)を受信したユーザーには、最後のメッセージオブジェクトの`quickReply`プロパティが表示されます。

##### itemsオブジェクト

::reference-with-code
  :::reference-content
  [クイックリプライボタン](#quick-reply-button-object)のコンテナです。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      items

      #undefined
      Array of objects

      [クイックリプライボタンオブジェクト](#quick-reply-button-object)。  

      最大オブジェクト数：13
      :::::
    ::::
  :::

  :::reference-code
  *itemsオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      "quickReply": {
        "items": [
          {
            "type": "action",
            "action": {
              "type": "cameraRoll",
              "label": "Send photo"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "camera",
              "label": "Open camera"
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

##### クイックリプライボタンオブジェクト

ボタン形式で表示される、クイックリプライの選択肢です。

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  type

  #undefined
  String

  `action`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  imageUrl

  #undefined
  String

  ボタンの先頭に表示するアイコンのURL（最大文字数：2000）  

  プロトコル：HTTPS（TLS 1.2以降）  

  画像フォーマット：PNG  

  アスペクト比：1:1（幅：高さ）  

  最大ファイルサイズ：1MB

  画像サイズに制限はありません。  
  `action`プロパティに指定するアクションが[カメラアクション](#camera-action)、[カメラロールアクション](#camera-roll-action)、または[位置情報アクション](#location-action)で、`imageUrl`プロパティが未指定の場合、デフォルトのアイコンが表示されます。

  URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  action

  #undefined
  Object

  タップされたときのアクション。[アクションオブジェクト](#action-objects)を指定します。指定できるアクションの種類は以下のとおりです。

  - [ポストバックアクション](#postback-action)
  - [メッセージアクション](#message-action)
  - [URIアクション](#uri-action)
  - [日時選択アクション](#datetime-picker-action)
  - [カメラアクション](#camera-action)
  - [カメラロールアクション](#camera-roll-action)
  - [位置情報アクション](#location-action)
  - [クリップボードアクション](#clipboard-action)
  :::
::

クイックリプライボタンが設定されたメッセージを未対応のLINEで受信すると、メッセージ本体のみが表示されます。

#### アイコンと表示名のカスタマイズ

::reference-with-code
  :::reference-content
  LINE公式アカウントからメッセージを送る際に、[メッセージオブジェクト](/reference/messaging-api/#message-objects)に、`sender.name`プロパティと`sender.iconUrl`プロパティを指定できます。

    ::::parameter-table
      :::::parameter-table-entry{optional=""}
      #undefined
      sender.name

      #undefined
      String

      表示名。`LINE`など弊社のサービスと誤認される可能性があるワードは使用できません。  

      最大文字数：20
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      sender.iconUrl

      #undefined
      String

      メッセージ送信時にアイコンとして表示する画像のURL（最大文字数：2000）  

      プロトコル：HTTPS（TLS 1.2以降）  

      画像フォーマット：PNG  

      アスペクト比：1:1（幅：高さ）  

      最大ファイルサイズ：1MB

      URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *アイコンと表示名をカスタマイズするテキストメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "text",
        "text": "Hello, I am Cony!!",
        "sender": {
          "name": "Cony",
          "iconUrl": "https://line.me/conyprof"
        }
      }
      ```
      :::::
    ::::
  :::
::
