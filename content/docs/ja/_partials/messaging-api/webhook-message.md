---
title: Webhook Message
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-message
__hash__: ZgPWrDDcISsRBBENfmEthLYUFjfWDa3EftGp3AK_9aA
seo:
  description: ''
---

### メッセージイベント

ユーザーから送信されたメッセージを含むWebhookイベントオブジェクトです。メッセージのタイプに対応するメッセージオブジェクトが、`message`プロパティに含まれます。メッセージイベントには応答できます。

::parameter-table
  :::parameter-table-entry
  #undefined
  timestamp、sourceなど

  「[共通プロパティ](#common-properties)」を参照してください。
  :::

  :::parameter-table-entry
  #undefined
  type

  #undefined
  String

  `message`
  :::

  :::parameter-table-entry
  #undefined
  replyToken

  #undefined
  String

  このイベントに対して[応答メッセージを送る](#send-reply-message)際に使用する応答トークン
  :::

  :::parameter-table-entry
  #undefined
  message

  #undefined
  Object

  メッセージの内容を含むオブジェクト。メッセージには以下のタイプがあります。

  - [テキスト](#wh-text)
  - [画像](#wh-image)
  - [動画](#wh-video)
  - [音声](#wh-audio)
  - [ファイル](#wh-file)
  - [位置情報](#wh-location)
  - [スタンプ](#wh-sticker)
  :::
::

#### テキスト

::reference-with-code
  :::reference-content
  送信元から送られたテキストを含むメッセージオブジェクトです。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      id

      #undefined
      String

      メッセージID
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `text`
      :::::

      :::::parameter-table-entry
      #undefined
      quoteToken

      #undefined
      String

      メッセージの引用トークン。詳しくは、『Messaging APIドキュメント』の「[引用トークンを取得する](/docs/messaging-api/get-quote-tokens/)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadToken

      #undefined
      String

      既読トークン。このトークンを使用することで、メッセージに既読をつけることができます。有効期限はありません。詳しくは、『Messaging APIドキュメント』の「[メッセージに既読をつける](/docs/messaging-api/mark-as-read/)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      text

      #undefined
      String

      メッセージのテキスト

      - エンドユーザーがLINE絵文字を送信した場合は、`(hello)`や`(love)`のように、LINE絵文字が文字列で含まれます。LINE絵文字の詳細は、`emojis`プロパティで確認できます。
      - エンドユーザーがメンションした場合は、`@example`のように、送信相手のLINEアカウントの表示名が文字列で含まれます。メンションの詳細は、`mention`プロパティで確認できます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      emojis

      #undefined
      Array

      1個以上のLINE絵文字オブジェクトの配列。`text`プロパティにLINE絵文字が含まれる場合のみ、メッセージイベントに含まれます。

        ::::::admonition{title="送信されたLINE絵文字がemojisプロパティに含まれないことがあります" type="note"}
        - Android版LINEから送信されたデフォルトのLINE絵文字は、含まれません。
        - Unicodeで定義された絵文字や古いバージョンのLINE絵文字は、含まれないことがあります。
        ::::::
      :::::

      :::::parameter-table-entry
      #undefined
      emojis[].index

      #undefined
      Number

      テキストの先頭を`0`とした、`text`プロパティ内の絵文字の開始位置。
      :::::

      :::::parameter-table-entry
      #undefined
      emojis[].length

      #undefined
      Number

      LINE絵文字の文字列の長さ。LINE絵文字`(hello)`であれば、`7`が長さになります。
      :::::

      :::::parameter-table-entry
      #undefined
      emojis[].productId

      #undefined
      String

      LINE絵文字の集合を示すプロダクトID。プロダクトIDの例として、「[LINE絵文字](/docs/messaging-api/emoji-list/)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      emojis[].emojiId

      #undefined
      String

      プロダクトID内のLINE絵文字のID。LINE絵文字のIDの例として、「[LINE絵文字](/docs/messaging-api/emoji-list/)」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      mention

      #undefined
      Object

      メンションの情報を含むオブジェクト。`text`プロパティにメンションが含まれる場合のみ、メッセージイベントに含まれます。
      :::::

      :::::parameter-table-entry
      #undefined
      mention.mentionees[]

      #undefined
      Array of objects

      1個以上のメンションオブジェクトの配列。

      最大メンション数：20
      :::::

      :::::parameter-table-entry
      #undefined
      mention.mentionees[].index

      #undefined
      Number

      テキストの先頭を`0`とした、`text`プロパティ内のメンションの開始位置。
      :::::

      :::::parameter-table-entry
      #undefined
      mention.mentionees[].length

      #undefined
      Number

      メンションの長さ。`@example`であれば、`8`が長さになります。
      :::::

      :::::parameter-table-entry
      #undefined
      mention.mentionees[].type

      #undefined
      String

      メンションの対象。

      - `user`：ユーザーまたはボット
      - `all`：グループ全体
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      mention.mentionees[].userId

      #undefined
      String

      メンションされたユーザーまたはボットのユーザーID。`mention.mentionees[].type`が`user`の場合にのみ含まれます。メンションされたのがユーザーの場合は、LINE公式アカウントがプロフィール情報を取得することに、[ユーザーが同意](/docs/messaging-api/user-consent/)しているときにのみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      mention.mentionees[].isSelf

      #undefined
      Boolean

      Webhookイベントを受信したボット（`destination`）に対するメンションかどうか。`mention.mentionees[].type`プロパティの値が`user`のときのみ含まれます。

      - `true`：Webhookイベントを受信したボットに対するメンションである。
      - `false`：他のユーザーに対するメンションである。

      詳しくは、『Messaging APIドキュメント』の「[ボットへのメンションを含むメッセージが送信されたときのWebhook](/docs/messaging-api/receiving-messages/#webhook-message-with-mention-to-bot)」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      quotedMessageId

      #undefined
      String

      引用されたメッセージのメッセージID。過去のメッセージを引用している場合にのみ含まれます。
      :::::
    ::::
  :::

  :::reference-code
  *テキストメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // グループトークでユーザーからメンションと絵文字を含むテキストメッセージが送られた場合
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "message",
            "mode": "active",
            "timestamp": 1462629479859,
            "source": {
              "type": "group",
              "groupId": "Ca56f94637c...",
              "userId": "U4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            },
            "message": {
              "id": "444573844083572737",
              "type": "text",
              "quoteToken": "q3Plxr4AgKd...",
              "markAsReadToken": "30yhdy232...",
              "text": "@All @example Good Morning!! (love)",
              "emojis": [
                {
                  "index": 29,
                  "length": 6,
                  "productId": "5ac1bfd5040ab15980c9b435",
                  "emojiId": "001"
                }
              ],
              "mention": {
                "mentionees": [
                  {
                    "index": 0,
                    "length": 4,
                    "type": "all"
                  },
                  {
                    "index": 5,
                    "length": 8,
                    "userId": "U49585cd0d5...",
                    "type": "user",
                    "isSelf": false
                  }
                ]
              }
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### 画像

::reference-with-code
  :::reference-content
  送信元から送られた画像を含むメッセージオブジェクトです。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      id

      #undefined
      String

      メッセージID
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `image`
      :::::

      :::::parameter-table-entry
      #undefined
      quoteToken

      #undefined
      String

      メッセージの引用トークン。詳しくは、『Messaging APIドキュメント』の「[引用トークンを取得する](/docs/messaging-api/get-quote-tokens/)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadToken

      #undefined
      String

      既読トークン。このトークンを使用することで、メッセージに既読をつけることができます。有効期限はありません。詳しくは、『Messaging APIドキュメント』の「[メッセージに既読をつける](/docs/messaging-api/mark-as-read/)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      contentProvider.type

      #undefined
      String

      画像ファイルの提供元。

      - `line`：LINEユーザーが画像ファイルを送信しました。画像ファイルのバイナリデータは、メッセージIDを指定して[コンテンツを取得する](#get-content)エンドポイントを使用することで取得できます。
      - `external`：画像ファイルのURLは`contentProvider.originalContentUrl`プロパティに含まれます。なお、画像ファイルの提供元が`external`の場合、画像ファイルのバイナリデータは[コンテンツを取得する](#get-content)エンドポイントで取得できません。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      contentProvider.originalContentUrl

      #undefined
      String

      画像ファイルのURL。`contentProvider.type`が`external`の場合にのみ含まれます。画像ファイルが置かれているサーバーは、LINEヤフー株式会社が提供しているものではありません。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      contentProvider.previewImageUrl

      #undefined
      String

      プレビュー画像のURL。`contentProvider.type`が`external`の場合にのみ含まれます。プレビュー画像が置かれているサーバーは、LINEヤフー株式会社が提供しているものではありません。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      imageSet.id

      #undefined
      String

      画像セットID。複数の画像を同時に送信した場合のみ含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      imageSet.index

      #undefined
      Number

      同時に送信した画像セットの中で、何番目の画像かを示す`1`から始まるインデックス。複数の画像を同時に送信した場合のみ含まれます。ただし送信元がAndroid版LINE 11.15以前の場合は含まれません。

        ::::::admonition{title="Webhookが届く順序は不定です" type="tip"}
        ユーザーが複数の画像を同時に送信すると、LINEプラットフォームからボットサーバーにWebhookイベントが複数送られてきます。このときWebhookの順序は不定ですので、`imageSet.index`の値の順序で届くとは限りません。
        ::::::
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      imageSet.total

      #undefined
      Number

      同時に送信した画像の総数。同時に2つの画像を送信した場合は`2`です。複数の画像を同時に送信した場合のみ含まれます。ただし送信元がAndroid版LINE 11.15以前の場合は含まれません。
      :::::
    ::::
  :::

  :::reference-code
  *画像メッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 2つの画像を同時に送った場合（1番目の画像）
      {
          "destination": "xxxxxxxxxx",
          "events": [
              {
                  "type": "message",
                  "message": {
                      "type": "image",
                      "id": "354718705033693859",
                      "quoteToken": "q3Plxr4AgKd...",
                      "markAsReadToken": "30yhdy232...",
                      "contentProvider": {
                          "type": "line"
                      },
                      "imageSet": {
                          "id": "E005D41A7288F41B65593ED38FF6E9834B046AB36A37921A56BC236F13A91855",
                          "index": 1,
                          "total": 2
                      }
                  },
                  "timestamp": 1627356924513,
                  "source": {
                      "type": "user",
                      "userId": "U4af4980629..."
                  },
                  "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
                  "deliveryContext": {
                      "isRedelivery": false
                  },
                  "replyToken": "7840b71058e24a5d91f9b5726c7512c9",
                  "mode": "active"
              }
          ]
      }

      // 2つの画像を同時に送った場合（2番目の画像）
      {
          "destination": "xxxxxxxxxx",
          "events": [
              {
                  "type": "message",
                  "message": {
                      "type": "image",
                      "id": "354718705033693861",
                      "quoteToken": "yHAz4Ua2wx7...",
                      "markAsReadToken": "30yhdy232...",
                      "contentProvider": {
                          "type": "line"
                      },
                      "imageSet": {
                          "id": "E005D41A7288F41B65593ED38FF6E9834B046AB36A37921A56BC236F13A91855",
                          "index": 2,
                          "total": 2
                      }
                  },
                  "timestamp": 1627356924722,
                  "source": {
                      "type": "user",
                      "userId": "U4af4980629..."
                  },
                  "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
                  "deliveryContext": {
                      "isRedelivery": false
                  },
                  "replyToken": "fbf94e269485410da6b7e3a5e33283e8",
                  "mode": "active"
              }
          ]
      }
      ```
      :::::
    ::::
  :::
::

#### 動画

::reference-with-code
  :::reference-content
  送信元から送られた動画を含むメッセージオブジェクトです。トーク画面に表示されている画像はプレビュー画像で、画像をタップすると動画が表示されます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      id

      #undefined
      String

      メッセージID
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `video`
      :::::

      :::::parameter-table-entry
      #undefined
      quoteToken

      #undefined
      String

      メッセージの引用トークン。詳しくは、『Messaging APIドキュメント』の「[引用トークンを取得する](/docs/messaging-api/get-quote-tokens/)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadToken

      #undefined
      String

      既読トークン。このトークンを使用することで、メッセージに既読をつけることができます。有効期限はありません。詳しくは、『Messaging APIドキュメント』の「[メッセージに既読をつける](/docs/messaging-api/mark-as-read/)」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      duration

      #undefined
      Number

      動画ファイルの長さ（ミリ秒）
      :::::

      :::::parameter-table-entry
      #undefined
      contentProvider.type

      #undefined
      String

      動画ファイルの提供元。

      - `line`：LINEユーザーが動画ファイルを送信しました。動画ファイルのバイナリデータは、メッセージIDを指定して[コンテンツを取得する](#get-content)エンドポイントを使用することで取得できます。
      - `external`：動画ファイルのURLは`contentProvider.originalContentUrl`プロパティに含まれます。なお、動画ファイルの提供元が`external`の場合、動画ファイルのバイナリデータは[コンテンツを取得する](#get-content)エンドポイントで取得できません。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      contentProvider.originalContentUrl

      #undefined
      String

      動画ファイルのURL。`contentProvider.type`が`external`の場合にのみ含まれます。動画ファイルが置かれているサーバーは、LINEヤフー株式会社が提供しているものではありません。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      contentProvider.previewImageUrl

      #undefined
      String

      プレビュー画像のURL。`contentProvider.type`が`external`の場合にのみ含まれます。プレビュー画像が置かれているサーバーは、LINEヤフー株式会社が提供しているものではありません。
      :::::
    ::::
  :::

  :::reference-code
  *動画メッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "message",
            "mode": "active",
            "timestamp": 1462629479859,
            "source": {
              "type": "user",
              "userId": "U4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            },
            "message": {
              "id": "325708",
              "type": "video",
              "quoteToken": "q3Plxr4AgKd...",
              "markAsReadToken": "30yhdy232...",
              "duration": 60000,
              "contentProvider": {
                "type": "external",
                "originalContentUrl": "https://example.com/original.mp4",
                "previewImageUrl": "https://example.com/preview.jpg"
              }
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### 音声

::reference-with-code
  :::reference-content
  送信元から送られた音声を含むメッセージオブジェクトです。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      id

      #undefined
      String

      メッセージID
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `audio`
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadToken

      #undefined
      String

      既読トークン。このトークンを使用することで、メッセージに既読をつけることができます。有効期限はありません。詳しくは、『Messaging APIドキュメント』の「[メッセージに既読をつける](/docs/messaging-api/mark-as-read/)」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      duration

      #undefined
      Number

      音声ファイルの長さ（ミリ秒）
      :::::

      :::::parameter-table-entry
      #undefined
      contentProvider.type

      #undefined
      String

      音声ファイルの提供元

      - `line`：LINEユーザーが音声ファイルを送信しました。音声ファイルのバイナリデータは、メッセージIDを指定して[コンテンツを取得する](#get-content)エンドポイントを使用することで取得できます。
      - `external`：音声ファイルのURLは`contentProvider.originalContentUrl`プロパティに含まれます。なお、音声ファイルの提供元が`external`の場合、音声ファイルのバイナリデータは[コンテンツを取得する](#get-content)エンドポイントで取得できません。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      contentProvider.originalContentUrl

      #undefined
      String

      音声ファイルのURL。`contentProvider.type`が`external`の場合にのみ含まれます。音声ファイルが置かれているサーバーは、LINEヤフー株式会社が提供しているものではありません。
      :::::
    ::::
  :::

  :::reference-code
  *音声メッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "message",
            "mode": "active",
            "timestamp": 1462629479859,
            "source": {
              "type": "user",
              "userId": "U4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            },
            "message": {
              "id": "325708",
              "type": "audio",
              "markAsReadToken": "30yhdy232...",
              "duration": 60000,
              "contentProvider": {
                "type": "line"
              }
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### ファイル

::reference-with-code
  :::reference-content
  送信元から送られたファイルを含むメッセージオブジェクトです。ファイルのバイナリデータは、メッセージIDを指定してAPIを呼び出すことで取得できます。詳しくは、「[コンテンツを取得する](#get-content)」を参照してください。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      id

      #undefined
      String

      メッセージID
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `file`
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadToken

      #undefined
      String

      既読トークン。このトークンを使用することで、メッセージに既読をつけることができます。有効期限はありません。詳しくは、『Messaging APIドキュメント』の「[メッセージに既読をつける](/docs/messaging-api/mark-as-read/)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      fileName

      #undefined
      String

      ファイル名
      :::::

      :::::parameter-table-entry
      #undefined
      fileSize

      #undefined
      Number

      ファイルサイズ（バイト）
      :::::
    ::::
  :::

  :::reference-code
  *ファイルメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "message",
            "mode": "active",
            "timestamp": 1462629479859,
            "source": {
              "type": "user",
              "userId": "U4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            },
            "message": {
              "id": "325708",
              "type": "file",
              "markAsReadToken": "30yhdy232...",
              "fileName": "file.txt",
              "fileSize": 2138
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### 位置情報

::reference-with-code
  :::reference-content
  送信元から送られた位置情報データを含むメッセージオブジェクトです。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      id

      #undefined
      String

      メッセージID
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `location`
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadToken

      #undefined
      String

      既読トークン。このトークンを使用することで、メッセージに既読をつけることができます。有効期限はありません。詳しくは、『Messaging APIドキュメント』の「[メッセージに既読をつける](/docs/messaging-api/mark-as-read/)」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      title

      #undefined
      String

      タイトル
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      address

      #undefined
      String

      住所
      :::::

      :::::parameter-table-entry
      #undefined
      latitude

      #undefined
      Decimal

      緯度
      :::::

      :::::parameter-table-entry
      #undefined
      longitude

      #undefined
      Decimal

      経度
      :::::
    ::::
  :::

  :::reference-code
  *位置情報メッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "message",
            "mode": "active",
            "timestamp": 1462629479859,
            "source": {
              "type": "user",
              "userId": "U4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            },
            "message": {
              "id": "325708",
              "type": "location",
              "markAsReadToken": "30yhdy232...",
              "title": "my location",
              "address": "日本、〒102-8282 東京都千代田区紀尾井町1番3号",
              "latitude": 35.67966,
              "longitude": 139.73669
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### スタンプ

::reference-with-code
  :::reference-content
  送信元から送られたスタンプデータを含むメッセージオブジェクトです。LINEの基本的なスタンプとスタンプIDについては、[スタンプ](/docs/messaging-api/sticker-list/)を参照してください。

    ::::admonition{title="スタンプ画像は取得できません" type="tip"}
    ユーザーが送信したスタンプのパッケージIDやスタンプIDなどはWebhookで取得できますが、スタンプ画像そのものを取得することはできません。
    ::::

    ::::admonition{title="スタンプアレンジ機能には対応していません" type="tip"}
    Messaging APIは、現時点ではスタンプアレンジ機能に対応していないため、どんなスタンプを組み合わせたかという情報は取得できません。ユーザーがスタンプアレンジ機能を用いてスタンプメッセージを送った場合、Webhookでは一律で以下のスタンプ情報が届きます。

    - パッケージID：`30563`
    - スタンプID：`651698630`
    - スタンプのリソースタイプ：`STATIC`
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      id

      #undefined
      String

      メッセージID
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `sticker`
      :::::

      :::::parameter-table-entry
      #undefined
      quoteToken

      #undefined
      String

      メッセージの引用トークン。詳しくは、『Messaging APIドキュメント』の「[引用トークンを取得する](/docs/messaging-api/get-quote-tokens/)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      markAsReadToken

      #undefined
      String

      既読トークン。このトークンを使用することで、メッセージに既読をつけることができます。有効期限はありません。詳しくは、『Messaging APIドキュメント』の「[メッセージに既読をつける](/docs/messaging-api/mark-as-read/)」を参照してください。
      :::::

      :::::parameter-table-entry
      #undefined
      packageId

      #undefined
      String

      パッケージID
      :::::

      :::::parameter-table-entry
      #undefined
      stickerId

      #undefined
      String

      スタンプID
      :::::

      :::::parameter-table-entry
      #undefined
      stickerResourceType

      #undefined
      String

      スタンプのリソースタイプ。以下のいずれかの値です。

      - `STATIC`：静止画スタンプ
      - `ANIMATION`：アニメーションスタンプ
      - `SOUND`：サウンドスタンプ
      - `ANIMATION_SOUND`：アニメーション＋サウンドスタンプ
      - `POPUP`：ポップアップスタンプまたはエフェクトスタンプ
      - `POPUP_SOUND`：ポップアップ＋サウンドスタンプまたはエフェクト＋サウンドスタンプ
      - `CUSTOM`：カスタムスタンプ。ユーザーが入力した任意のテキストは取得できません。
      - `MESSAGE`：メッセージスタンプ
      - `NAME_TEXT`：カスタムスタンプ（廃止）
      - `PER_STICKER_TEXT`：メッセージスタンプ（廃止）

        ::::::admonition{title="stickerResourceTypeについて" type="note"}
        今後、新しいリソースタイプが予告なく追加される可能性があります。将来、従来と異なるリソースタイプを受信しても不具合が発生しないように、サーバーを実装してください。
        ::::::
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      keywords

      #undefined
      Array of strings

      スタンプを表すキーワード。最大15個の文字列が含まれる配列です。16個以上のキーワードを持つスタンプの場合は、その中からランダムに15個のキーワードを返します。そのため同じスタンプでも、異なるキーワードが返ることがあります。

        ::::::admonition{title="keywordsについて" type="note"}
        `keywords`プロパティは、現在試験的に提供しています。そのため、今後予告なく仕様が変更されたり、提供を終了する可能性があります。
        ::::::
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      text

      #undefined
      String

      ユーザーが入力した任意のテキスト。このプロパティは、メッセージスタンプの場合のみ含まれます。  

      最大文字数：100

        ::::::admonition{title="カスタムスタンプの場合はテキストは取得できません" type="tip"}
        カスタムスタンプの場合は、ユーザーが入力した任意のテキストは取得できません。
        ::::::
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      quotedMessageId

      #undefined
      String

      引用されたメッセージのメッセージID。過去のメッセージを引用している場合にのみ含まれます。
      :::::
    ::::
  :::

  :::reference-code
  *スタンプメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // アニメーションスタンプの例
      {
          "destination": "xxxxxxxxxx",
          "events": [
              {
                  "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
                  "type": "message",
                  "mode": "active",
                  "timestamp": 1462629479859,
                  "source": {
                      "type": "user",
                      "userId": "U4af4980629..."
                  },
                  "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
                  "deliveryContext": {
                      "isRedelivery": false
                  },
                  "message": {
                      "type": "sticker",
                      "id": "1501597916",
                      "quoteToken": "q3Plxr4AgKd...",
                      "markAsReadToken": "30yhdy232...",
                      "stickerId": "52002738",
                      "packageId": "11537",
                      "stickerResourceType": "ANIMATION",
                      "keywords": [
                          "cony",
                          "sally",
                          "Staring",
                          "hi",
                          "whatsup",
                          "line",
                          "howdy",
                          "HEY",
                          "Peeking",
                          "wave",
                          "peek",
                          "Hello",
                          "yo",
                          "greetings"
                      ]
                  }
              }
          ]
      }

      // メッセージスタンプの例
      {
          "destination": "xxxxxxxxxx",
          "events": [
              {
                  "type": "message",
                  "message": {
                      "type": "sticker",
                      "id": "123456789012345678",
                      "quoteToken": "q3Plxr4AgKd...",
                      "markAsReadToken": "30yhdy232...",
                      "stickerId": "738839",
                      "packageId": "12287",
                      "stickerResourceType": "MESSAGE",
                      "keywords": [
                          "Anticipation",
                          "Sparkle",
                          "Straight face",
                          "Staring",
                          "Thinking"
                      ],
                      "text": "今週末\n一緒に\n遊ぼうよ！"
                  },
                  "timestamp": 1635756190879,
                  "source": {
                      "type": "group",
                      "groupId": "C99ae82bcd...",
                      "userId": "Ub82c8fd9b..."
                  },
                  "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
                  "deliveryContext": {
                      "isRedelivery": false
                  },
                  "replyToken": "ce8c57ec18374a4b94f40abab97145f8",
                  "mode": "active"
              }
          ]
      }
      ```
      :::::
    ::::
  :::
::
