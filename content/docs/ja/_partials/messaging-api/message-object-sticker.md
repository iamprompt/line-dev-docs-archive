---
title: Message Object Sticker
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/message-object-sticker
__hash__: JbAT86GyLX242OK0DIIJGh6CQwvYG9YOl3bIBax7lVo
seo:
  description: ''
---

### スタンプメッセージ

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `sticker`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      packageId

      #undefined
      String

      スタンプセットのパッケージID。パッケージIDについては、[スタンプ](/docs/messaging-api/sticker-list/)を参照してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      stickerId

      #undefined
      String

      スタンプID。Messaging APIで送信できるスタンプのスタンプIDについては、[スタンプ](/docs/messaging-api/sticker-list/)を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      quoteToken

      #undefined
      String

      引用したいメッセージの引用トークン。詳しくは、『Messaging APIドキュメント』の「[引用トークンを取得する](/docs/messaging-api/get-quote-tokens/)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *スタンプメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "sticker",
        "packageId": "446",
        "stickerId": "1988"
      }
      ```
      :::::
    ::::

  *過去のメッセージを引用したスタンプメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "sticker",
        "packageId": "789",
        "stickerId": "10855",
        "quoteToken": "yHAz4Ua2wx7..."
      }
      ```
      :::::
    ::::
  :::
::
