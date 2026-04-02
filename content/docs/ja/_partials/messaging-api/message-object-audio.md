---
title: Message Object Audio
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/message-object-audio
__hash__: uD_57o1iP-hUC3oSOb8vSkq2hmXMBYBvRFPzo05SEeQ
seo:
  description: ''
---

### 音声メッセージ

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `audio`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      originalContentUrl

      #undefined
      String

      音声ファイルのURL（最大文字数：2000）  

      プロトコル：HTTPS（TLS 1.2以降）  

      音声フォーマット：mp3またはm4a  

      最大ファイルサイズ：200MB

      URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      duration

      #undefined
      Number

      音声ファイルの長さ（ミリ秒）
      :::::
    ::::
  :::

  :::reference-code
  *音声メッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "audio",
        "originalContentUrl": "https://example.com/original.m4a",
        "duration": 60000
      }
      ```
      :::::
    ::::
  :::
::
