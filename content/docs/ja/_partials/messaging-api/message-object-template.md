---
title: Message Object Template
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/message-object-template
__hash__: bC2EJEpn28BKhgJFjbNWJwuZkF3UfxTYpoHxAcrt-iQ
seo:
  description: ''
---

### テンプレートメッセージ

テンプレートメッセージは、あらかじめレイアウトが定義されたテンプレートをカスタマイズして構築するメッセージです。詳しくは、「[テンプレートメッセージ](/docs/messaging-api/message-types/#template-messages)」を参照してください。

以下のタイプのテンプレートを利用できます。

- [ボタン](#buttons)
- [確認](#confirm)
- [カルーセル](#carousel)
- [画像カルーセル](#image-carousel)

より柔軟なレイアウトでメッセージを送りたい場合は、[Flex Message](#flex-message)を使用してください。

#### テンプレートメッセージオブジェクトの共通プロパティ

以下のプロパティは、すべてのテンプレートメッセージオブジェクトで共通です。

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  type

  #undefined
  String

  `template`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  altText

  #undefined
  String

  代替テキスト。ユーザーがメッセージを受信した際に、端末の通知やトークリスト、[引用メッセージ](/docs/messaging-api/sending-messages/#send-quote-messages)でテンプレートメッセージの代替として表示されます。  

  Unicode絵文字を含めることができます。  

  最大文字数：1500
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  template

  #undefined
  Object

  [ボタン](#buttons)、[確認](#confirm)、[カルーセル](#carousel)、または[画像カルーセル](#image-carousel)オブジェクト
  :::
::

#### ボタンテンプレート

::reference-with-code
  :::reference-content
  画像、タイトル、テキストに加えて、複数のアクションボタンが含まれたテンプレートです。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `buttons`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      thumbnailImageUrl

      #undefined
      String

      画像のURL（最大文字数：2000）  

      プロトコル：HTTPS（TLS 1.2以降）  

      画像フォーマット：JPEGまたはPNG  

      最大横幅サイズ：1024px  

      最大ファイルサイズ：10MB

      URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。

        ::::::admonition{title="推奨ファイルサイズ" type="tip"}
        画像のファイルメッセージの表示が遅延することを防ぐために、個々の画像ファイルサイズを小さくしてください（1MB以下推奨）。
        ::::::
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      imageAspectRatio

      #undefined
      String

      画像のアスペクト比。以下のいずれかの値を指定します。

      - `rectangle`：1.51:1
      - `square`：1:1

      デフォルト値は`rectangle`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      imageSize

      #undefined
      String

      画像の表示形式。以下のいずれかの値を指定します。

      - `cover`：画像領域全体に画像を表示します。画像領域に収まらない部分は切り詰められます。
      - `contain`：画像領域に画像全体を表示します。縦長の画像では左右に、横長の画像では上下に余白が表示されます。

      デフォルト値は`cover`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      imageBackgroundColor

      #undefined
      String

      画像の背景色。RGB値で設定します。デフォルト値は`#FFFFFF`（白）です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      title

      #undefined
      String

      タイトル  

      最大文字数：40
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      text

      #undefined
      String

      メッセージテキスト  

      画像もタイトルも指定しない場合の最大文字数：160  

      画像またはタイトルを指定する場合の最大文字数：60
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      defaultAction

      #undefined
      [アクションオブジェクト](#action-objects)

      画像、タイトル、テキストの領域全体に対して設定できる、タップされたときのアクション
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      actions

      #undefined
      [アクションオブジェクト](#action-objects)の配列

      タップされたときのアクション  

      最大件数：4
      :::::
    ::::
  :::

  :::reference-code
  *ボタンテンプレートメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
          "type": "buttons",
          "thumbnailImageUrl": "https://example.com/bot/images/image.jpg",
          "imageAspectRatio": "rectangle",
          "imageSize": "cover",
          "imageBackgroundColor": "#FFFFFF",
          "title": "Menu",
          "text": "Please select",
          "defaultAction": {
            "type": "uri",
            "label": "View detail",
            "uri": "http://example.com/page/123"
          },
          "actions": [
            {
              "type": "postback",
              "label": "Buy",
              "data": "action=buy&itemid=123"
            },
            {
              "type": "postback",
              "label": "Add to cart",
              "data": "action=add&itemid=123"
            },
            {
              "type": "uri",
              "label": "View detail",
              "uri": "http://example.com/page/123"
            }
          ]
        }
      }
      ```
      :::::
    ::::
  :::
::

#### 確認テンプレート

::reference-with-code
  :::reference-content
  2つのアクションボタンを表示するテンプレートです。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `confirm`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      text

      #undefined
      String

      メッセージのテキスト  

      最大文字数：240
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      actions

      #undefined
      [アクションオブジェクト](#action-objects)の配列

      タップされたときのアクション  

      2つのボタンに1つずつアクションを設定します。
      :::::
    ::::
  :::

  :::reference-code
  *確認テンプレートメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "template",
        "altText": "this is a confirm template",
        "template": {
          "type": "confirm",
          "text": "Are you sure?",
          "actions": [
            {
              "type": "message",
              "label": "Yes",
              "text": "yes"
            },
            {
              "type": "message",
              "label": "No",
              "text": "no"
            }
          ]
        }
      }
      ```
      :::::
    ::::
  :::
::

#### カルーセルテンプレート

::reference-with-code
  :::reference-content
  複数のカラムを表示するテンプレートです。カラムは横にスクロールして順番に表示できます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `carousel`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      columns

      #undefined
      [カラムオブジェクト](#column-object-for-carousel)の配列

      カラムの配列  

      最大カラム数：10
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      imageAspectRatio

      #undefined
      String

      画像のアスペクト比。以下のいずれかの値を指定します。

      - `rectangle`：1.51:1
      - `square`：1:1

      すべてのカラムに適用されます。デフォルト値は`rectangle`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      imageSize

      #undefined
      String

      画像の表示形式。以下のいずれかの値を指定します。

      - `cover`：画像領域全体に画像を表示します。画像領域に収まらない部分は切り詰められます。
      - `contain`：画像領域に画像全体を表示します。縦長の画像では左右に、横長の画像では上下に余白が表示されます。

      すべてのカラムに適用されます。デフォルト値は`cover`です。
      :::::
    ::::
  :::

  :::reference-code
  *カルーセルテンプレートメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "template",
        "altText": "this is a carousel template",
        "template": {
          "type": "carousel",
          "columns": [
            {
              "thumbnailImageUrl": "https://example.com/bot/images/item1.jpg",
              "imageBackgroundColor": "#FFFFFF",
              "title": "this is menu",
              "text": "description",
              "defaultAction": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://example.com/page/123"
              },
              "actions": [
                {
                  "type": "postback",
                  "label": "Buy",
                  "data": "action=buy&itemid=111"
                },
                {
                  "type": "postback",
                  "label": "Add to cart",
                  "data": "action=add&itemid=111"
                },
                {
                  "type": "uri",
                  "label": "View detail",
                  "uri": "http://example.com/page/111"
                }
              ]
            },
            {
              "thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
              "imageBackgroundColor": "#000000",
              "title": "this is menu",
              "text": "description",
              "defaultAction": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://example.com/page/222"
              },
              "actions": [
                {
                  "type": "postback",
                  "label": "Buy",
                  "data": "action=buy&itemid=222"
                },
                {
                  "type": "postback",
                  "label": "Add to cart",
                  "data": "action=add&itemid=222"
                },
                {
                  "type": "uri",
                  "label": "View detail",
                  "uri": "http://example.com/page/222"
                }
              ]
            }
          ],
          "imageAspectRatio": "rectangle",
          "imageSize": "cover"
        }
      }
      ```
      :::::
    ::::
  :::
::

##### カルーセルのカラムオブジェクト

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  thumbnailImageUrl

  #undefined
  String

  画像のURL（最大文字数：2000）  

  プロトコル：HTTPS（TLS 1.2以降）  

  画像フォーマット：JPEGまたはPNG  

  アスペクト比：1.51:1（幅：高さ）  

  最大横幅サイズ：1024px  

  最大ファイルサイズ：10MB

  URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。

    ::::admonition{title="推奨ファイルサイズ" type="tip"}
    画像のファイルメッセージの表示が遅延することを防ぐために、個々の画像ファイルサイズを小さくしてください（1MB以下推奨）。
    ::::
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  imageBackgroundColor

  #undefined
  String

  画像の背景色。RGB値で設定します。デフォルト値は`#FFFFFF`（白）です。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  title

  #undefined
  String

  タイトル  

  最大文字数：40
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  text

  #undefined
  String

  メッセージテキスト  

  画像もタイトルも指定しない場合の最大文字数：120  

  画像またはタイトルを指定する場合の最大文字数：60
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  defaultAction

  #undefined
  [アクションオブジェクト](#action-objects)

  画像、タイトル、テキストの領域全体に対して設定できる、タップされたときのアクション
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  actions

  #undefined
  [アクションオブジェクト](#action-objects)の配列

  タップされたときのアクション  

  最大件数：3
  :::
::

::admonition{title="注意" type="note"}
各カラムのアクションの数は同じにします。画像またはタイトルの有無も、各カラムで統一してください。
::

#### 画像カルーセルテンプレート

::reference-with-code
  :::reference-content
  複数の画像を表示するテンプレートです。画像は横にスクロールして順番に表示できます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `image_carousel`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      columns

      #undefined
      [カラムオブジェクト](#column-object-for-image-carousel)の配列

      カラムの配列  

      最大カラム数：10
      :::::
    ::::
  :::

  :::reference-code
  *画像カルーセルテンプレートメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "template",
        "altText": "this is a image carousel template",
        "template": {
          "type": "image_carousel",
          "columns": [
            {
              "imageUrl": "https://example.com/bot/images/item1.jpg",
              "action": {
                "type": "postback",
                "label": "Buy",
                "data": "action=buy&itemid=111"
              }
            },
            {
              "imageUrl": "https://example.com/bot/images/item2.jpg",
              "action": {
                "type": "message",
                "label": "Yes",
                "text": "yes"
              }
            },
            {
              "imageUrl": "https://example.com/bot/images/item3.jpg",
              "action": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://example.com/page/222"
              }
            }
          ]
        }
      }
      ```
      :::::
    ::::
  :::
::

##### 画像カルーセルのカラムオブジェクト

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  imageUrl

  #undefined
  String

  画像のURL（最大文字数：2000）  

  プロトコル：HTTPS（TLS 1.2以降）  

  画像フォーマット：JPEGまたはPNG  

  アスペクト比：1:1（幅：高さ）  

  最大横幅サイズ：1024px  

  最大ファイルサイズ：10MB

  URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。

    ::::admonition{title="推奨ファイルサイズ" type="tip"}
    画像のファイルメッセージの表示が遅延することを防ぐために、個々の画像ファイルサイズを小さくしてください（1MB以下推奨）。
    ::::
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  action

  #undefined
  [アクションオブジェクト](#action-objects)

  画像がタップされたときのアクション
  :::
::
