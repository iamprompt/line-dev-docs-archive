---
title: Message Object Video
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/message-object-video
__hash__: GnqAlH9rU1PndmiEJiDlLv24D2P8xBLzR40-Mj6ySxY
seo:
  description: ''
---

### 動画メッセージ

::admonition{title="動画が正しく再生できない" type="note"}
動画を含むメッセージの送信に成功したとしても、ユーザーの端末上で動画を正しく再生できない場合があります。詳しくは、FAQの「[メッセージとして送信した動画が再生できないのはなぜですか？](/faq/#why-cant-i-play-a-video-i-sent)」を参照してください。
::

::admonition{title="動画のアスペクト比" type="note"}
- 一定以上に縦長・横長の動画を送信した場合、一部の環境では動画の一部が欠けて表示される場合があります。
- `originalContentUrl`で指定する動画と、`previewImageUrl`で指定するプレビュー画像のアスペクト比は一致させてください。アスペクト比が異なると、動画の背面にプレビュー画像が表示されることがあります。

![LINEのトークルームの動画メッセージ。アスペクト比16:9の映像の背面に、アスペクト比1:1のプレビュー映像が表示されています。](/media/messaging-api/messages/image-overlapping-ja.png){className="[\"w-fix-440\"]"}
::

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `video`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      originalContentUrl

      #undefined
      String

      動画ファイルのURL（最大文字数：2000）  

      プロトコル：HTTPS（TLS 1.2以降）  

      動画フォーマット：mp4  

      最大ファイルサイズ：200MB

      URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      previewImageUrl

      #undefined
      String

      プレビュー画像のURL（最大文字数：2000）  

      プロトコル：HTTPS（TLS 1.2以降）  

      画像フォーマット：JPEGまたはPNG  

      最大ファイルサイズ：1MB

      URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      trackingId

      #undefined
      String

      [動画視聴完了イベント](#video-viewing-complete)が発生したときに、動画を識別するためのID。`trackingId`を付与した動画メッセージを送信した場合に限り、ユーザーが動画の視聴を完了すると動画視聴完了イベントが発生します。

      複数のメッセージで同じIDを使用することができます。

      - 最大文字数：100
      - 使用可能文字種：半角英数字（`a`〜`z`、`A`～`Z`、`0`～`9`）、記号（`-.=,+*()%$&;:@{}!?<>[]`）

        ::::::admonition{title="注意" type="note"}
        `trackingId`プロパティは、グループトークや複数人トーク宛てのメッセージでは使用できません。
        ::::::
      :::::
    ::::
  :::

  :::reference-code
  *動画メッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "video",
        "originalContentUrl": "https://example.com/original.mp4",
        "previewImageUrl": "https://example.com/preview.jpg",
        "trackingId": "track-id"
      }
      ```
      :::::
    ::::
  :::
::
