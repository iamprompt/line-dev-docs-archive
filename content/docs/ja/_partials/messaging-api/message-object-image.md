---
title: Message Object Image
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/message-object-image
__hash__: 4wxqdjKkWubWVgRe2lBb_rCRDuiX8z7oxwbEzqpBR9c
seo:
  description: ''
---

### 画像メッセージ

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `image`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      originalContentUrl

      #undefined
      String

      画像のURL（最大文字数：2000）  

      プロトコル：HTTPS（TLS 1.2以降）  

      画像フォーマット：JPEGまたはPNG  

      最大ファイルサイズ：10MB

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

      なお、ユーザー端末の状況によっては、プレビュー画像として`originalContentUrl`プロパティの画像が使われる場合があります。
      :::::
    ::::
  :::

  :::reference-code
  *画像メッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "image",
        "originalContentUrl": "https://example.com/original.jpg",
        "previewImageUrl": "https://example.com/preview.jpg"
      }
      ```
      :::::
    ::::
  :::
::
