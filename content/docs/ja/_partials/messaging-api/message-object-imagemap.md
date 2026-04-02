---
title: Message Object Imagemap
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/message-object-imagemap
__hash__: C6PN0Std9PAMfFpyGZUYlJzXSLJF-xt5WmPoqMMbaUk
seo:
  description: ''
---

### イメージマップメッセージ

::reference-with-code
  :::reference-content
  イメージマップメッセージは、複数のタップ領域を設定した画像を送信できるメッセージです。画像全体に1つのタップ領域を割り当てることも、画像を区切って複数のタップ領域を設定することもできます。

  また、画像の上で動画を再生したり、動画再生後にリンク先を設定したラベルを表示したりできます。

    ::::admonition{title="動画が正しく再生できない" type="note"}
    動画を含むメッセージの送信に成功したとしても、ユーザーの端末上で動画を正しく再生できない場合があります。詳しくは、FAQの「[メッセージとして送信した動画が再生できないのはなぜですか？](/faq/#why-cant-i-play-a-video-i-sent)」を参照してください。
    ::::

    ::::admonition{title="動画のアスペクト比" type="note"}
    `originalContentUrl`で指定する動画と、`previewImageUrl`で指定するプレビュー画像のアスペクト比は一致させてください。アスペクト比が異なると、動画の背面にプレビュー画像が表示されることがあります。

    ![LINEのトークルームの動画メッセージ。アスペクト比16:9の映像の背面に、アスペクト比1:1のプレビュー映像が表示されています。](/media/messaging-api/messages/image-overlapping-ja.png){className="[\"w-fix-440\"]"}
    ::::

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `imagemap`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      baseUrl

      #undefined
      String

      画像のベースURL（最大文字数：2000）  

      プロトコル：HTTPS（TLS 1.2以降）  

      イメージマップメッセージで使える画像について詳しくは、「[画像の設定方法](#base-url)」を参照してください。

      URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      altText

      #undefined
      String

      代替テキスト。ユーザーがメッセージを受信した際に、端末の通知やトークリストで画像の代替として表示されます。  

      Unicode絵文字を含めることができます。  

      最大文字数：1500
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      baseSize.width

      #undefined
      Number

      基本画像の幅（px単位）。1040を指定します。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      baseSize.height

      #undefined
      Number

      基本画像の幅を1040pxとした場合の高さ
      :::::

      :::::parameter-table-entry{annotation="※1"}
      #undefined
      video.originalContentUrl

      #undefined
      String

      動画ファイルのURL（最大文字数：2000）  

      プロトコル：HTTPS（TLS 1.2以降）  

      動画フォーマット：mp4  

      最大ファイルサイズ：200MB

      URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。

        ::::::admonition{title="注意" type="note"}
        一定以上に縦長・横長の動画を送信した場合、一部の環境では動画の一部が欠けて表示される場合があります。
        ::::::
      :::::

      :::::parameter-table-entry{annotation="※1"}
      #undefined
      video.previewImageUrl

      #undefined
      String

      プレビュー画像のURL（最大文字数：2000）  

      プロトコル：HTTPS（TLS 1.2以降）  

      画像フォーマット：JPEGまたはPNG  

      最大ファイルサイズ：1MB

      URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="※1"}
      #undefined
      video.area.x

      #undefined
      Number

      イメージマップ領域の左端を基準とした動画領域の位置（横方向の相対位置）。`0`以上の値を設定してください。
      :::::

      :::::parameter-table-entry{annotation="※1"}
      #undefined
      video.area.y

      #undefined
      Number

      イメージマップ領域の上端を基準とした動画領域の位置（縦方向の相対位置）。`0`以上の値を設定してください。
      :::::

      :::::parameter-table-entry{annotation="※1"}
      #undefined
      video.area.width

      #undefined
      Number

      動画領域の幅
      :::::

      :::::parameter-table-entry{annotation="※1"}
      #undefined
      video.area.height

      #undefined
      Number

      動画領域の高さ
      :::::

      :::::parameter-table-entry{annotation="※2"}
      #undefined
      video.externalLink.linkUri

      #undefined
      String

      ウェブページのURL。動画再生後に表示されるラベルをタップしたときに呼び出されます。  

      最大文字数：1000  

      使用できるスキームは、`http`、`https`、`line`、および`tel`です。 LINE URLスキームについて詳しくは、「[LINE URLスキームでLINEの機能を使う](/docs/messaging-api/using-line-url-scheme/)」を参照してください。

      URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="※2"}
      #undefined
      video.externalLink.label

      #undefined
      String

      ラベル。動画の再生が終了した後に表示されます。  

      最大文字数：30
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      actions

      #undefined
      [イメージマップアクションオブジェクト](#imagemap-action-objects)の配列

      画像がタップされたときのアクション  

      最大件数：50
      :::::
    ::::

  ※1 イメージマップで動画を再生する場合は必須です。  

  ※2 イメージマップで動画を再生し、動画再生後にラベルを表示する場合は必須です。
  :::

  :::reference-code
  *2つのタップ領域を持つイメージマップメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "imagemap",
        "baseUrl": "https://example.com/bot/images/rm001",
        "altText": "This is an imagemap",
        "baseSize": {
          "width": 1040,
          "height": 1040
        },
        "video": {
          "originalContentUrl": "https://example.com/video.mp4",
          "previewImageUrl": "https://example.com/video_preview.jpg",
          "area": {
            "x": 0,
            "y": 0,
            "width": 1040,
            "height": 585
          },
          "externalLink": {
            "linkUri": "https://example.com/see_more.html",
            "label": "See More"
          }
        },
        "actions": [
          {
            "type": "uri",
            "linkUri": "https://example.com/",
            "area": {
              "x": 0,
              "y": 586,
              "width": 520,
              "height": 454
            }
          },
          {
            "type": "message",
            "text": "Hello",
            "area": {
              "x": 520,
              "y": 586,
              "width": 520,
              "height": 454
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### 画像の設定方法

イメージマップメッセージで使用する画像は、以下の要件を満たす必要があります。

- 画像フォーマット： JPEGまたはPNG
- 画像の幅：240px、300px、460px、700px、および1040px
- 最大ファイルサイズ：10MB

::admonition{title="透過PNGの使用について" type="tip"}
イメージマップメッセージに、透過PNGを使用できます。
::

「`baseUrl/{image width}`」というURL形式で、5つの異なるサイズの画像にアクセスできるようにしてください。LINEはユーザーのデバイスに応じて、適切な解像度の画像を取得します。

たとえば、画像のベースURLが「`https://example.com/images/cats`」だった場合、幅が700pxの画像のURLは「`https://example.com/images/cats/700`」になります。すべての画像のURLにアクセスして、画像が表示されることを確認してください。

| 画像の幅   | URLの例                                       |
| ------ | ------------------------------------------- |
| 240px  | `https://example.com/bot/images/rm001/240`  |
| 300px  | `https://example.com/bot/images/rm001/300`  |
| 460px  | `https://example.com/bot/images/rm001/460`  |
| 700px  | `https://example.com/bot/images/rm001/700`  |
| 1040px | `https://example.com/bot/images/rm001/1040` |

::admonition{title="注意" type="note"}
画像のURLには拡張子を含めないでください。「`https://example.com/bot/images/rm001/700.png`」のように、URLに拡張子が含まれている場合、イメージマップメッセージでは画像が表示されません。
::

#### イメージマップアクションオブジェクト

イメージマップに設定するアクションとタップ領域を表すオブジェクトです。領域がタップされると、アクションのタイプごとにそれぞれ以下のアクションが実行されます。

- `uri`：指定するURIにユーザーがリダイレクトされます。
- `message`：指定するメッセージが送信されます。
- `clipboard`：指定する文字列がユーザーの端末のクリップボードにコピーされます。

##### イメージマップURIアクションオブジェクト

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `uri`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      label

      #undefined
      String

      アクションのラベル。ユーザーデバイスのアクセシビリティ機能が有効な場合に読み上げられます。  

      最大文字数：100
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      linkUri

      #undefined
      String

      ウェブページのURL  

      最大文字数：1000  

      使用できるスキームは、`http`、`https`、`line`、および`tel`です。 LINE URLスキームについて詳しくは、「[LINE URLスキームでLINEの機能を使う](/docs/messaging-api/using-line-url-scheme/)」を参照してください。

      URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      area

      #undefined
      [イメージマップ領域オブジェクト](#imagemap-area-object)

      タップ領域の定義
      :::::
    ::::
  :::

  :::reference-code
  *イメージマップURIアクションオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "uri",
        "label": "https://example.com/",
        "linkUri": "https://example.com/",
        "area": {
          "x": 0,
          "y": 0,
          "width": 520,
          "height": 1040
        }
      }
      ```
      :::::
    ::::
  :::
::

##### イメージマップメッセージアクションオブジェクト

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `message`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      label

      #undefined
      String

      アクションのラベル。ユーザーデバイスのアクセシビリティ機能が有効な場合に読み上げられます。  

      最大文字数：100
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      text

      #undefined
      String

      送信するメッセージ  

      最大文字数：400
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      area

      #undefined
      [イメージマップ領域オブジェクト](#imagemap-area-object)

      タップ領域の定義
      :::::
    ::::
  :::

  :::reference-code
  *イメージマップメッセージアクションオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "message",
        "label": "hello",
        "text": "hello",
        "area": {
          "x": 520,
          "y": 0,
          "width": 520,
          "height": 1040
        }
      }
      ```
      :::::
    ::::
  :::
::

##### イメージマップクリップボードアクションオブジェクト

::reference-with-code
  :::reference-content
  iOS版LINEまたはAndroid版LINEのバージョン`14.0.0`以降で動作します。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `clipboard`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      label

      #undefined
      String

      アクションのラベル。ユーザーデバイスのアクセシビリティ機能が有効な場合に読み上げられます。  

      最大文字数：100
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      clipboardText

      #undefined
      String

      クリップボードにコピーされる文字列

      - 最大文字数：1000
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      area

      #undefined
      [イメージマップ領域オブジェクト](#imagemap-area-object)

      タップ領域の定義
      :::::
    ::::
  :::

  :::reference-code
  *イメージマップクリップボードアクションオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "clipboard",
        "label": "Copy",
        "clipboardText": "3B48740B",
        "area": {
          "x": 520,
          "y": 0,
          "width": 520,
          "height": 1040
        }
      }
      ```
      :::::
    ::::
  :::
::

###### イメージマップ領域オブジェクト

::reference-with-code
  :::reference-content
  タップ領域のサイズを表すオブジェクトです。画像の左上が座標の原点です。`baseSize.width`プロパティと`baseSize.height`プロパティに基づいて指定します。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      x

      #undefined
      Number

      領域の左端を基準としたタップ領域の位置（横方向の相対位置）。`0`以上の値を設定してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      y

      #undefined
      Number

      領域の上端を基準としたタップ領域の位置（縦方向の相対位置）。`0`以上の値を設定してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      width

      #undefined
      Number

      タップ領域の幅
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      height

      #undefined
      Number

      タップ領域の高さ
      :::::
    ::::
  :::

  :::reference-code
  *イメージマップ領域オブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "x": 520,
        "y": 0,
        "width": 520,
        "height": 1040
      }
      ```
      :::::
    ::::
  :::
::
