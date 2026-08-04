---
title: Message Object Text
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/message-object-text
__hash__: M-JQD0a04gf3DyR5-LMg2lI_YYyCxnDLbwcxE7wNe3U
seo:
  description: ''
---

### テキストメッセージ

::admonition{title="文字数および絵文字の位置について" type="note"}
プロパティに指定するテキストの文字数、および絵文字の位置は、UTF-16でエンコーディングしたときの符号単位の数および位置です。たとえば、サロゲートペアを使用する文字や、UTF-16で表現できる絵文字など、文字によっては、1文字ではなく複数文字としてカウントする必要があります。

詳しくは、『Messaging APIドキュメント』の「[テキストの文字数のカウント](/docs/messaging-api/text-character-count/)」を参照してください。
::

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `text`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      text

      #undefined
      String

      メッセージのテキスト。以下の絵文字を含めることができます。

      - LINE絵文字。`$`をプレースホルダとして使用します。使用するLINE絵文字の`プロダクトID`と`絵文字ID`を、`emojis`プロパティに指定してください。詳しくは、「[LINE絵文字](/docs/messaging-api/emoji-list/)」を参照してください。
      - Unicode絵文字。

      最大文字数：5000

        ::::::admonition
        ---
        title: 「LINE独自のUnicode絵文字」は2022年3月31日をもって廃止されました
        type: warning
        ---
        「LINE独自のUnicode絵文字」の代わりに`emojis`プロパティを使った「LINE絵文字」を利用してください。

        詳しくは、2022年4月1日のニュース、「[2022年3月31日をもって、Messaging APIの「LINE独自のUnicode絵文字」を廃止しました](/news/2022/04/01/line-original-unicode-emojis-has-been-discontinued/)」と「[LINE絵文字](/docs/messaging-api/emoji-list/)」を参照してください。
        ::::::
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      emojis

      #undefined
      LINE絵文字オブジェクトの配列

      1個以上のLINE絵文字  

      最大個数：20
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      emojis.index

      #undefined
      Number

      テキストの先頭を`0`とした、`text`プロパティ内の`$`（LINE絵文字のプレースホルダ）の位置。詳しくは、「テキストメッセージの例」を参照してください。

        ::::::admonition{title="注意" type="note"}
        ここで指定した位置と、`$`の位置が一致しない場合は、`400 Bad request`が返されます。
        ::::::
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      emojis.productId

      #undefined
      String

      LINE絵文字の集合を示すプロダクトID。プロダクトIDについては、「[LINE絵文字](/docs/messaging-api/emoji-list/)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      emojis.emojiId

      #undefined
      String

      絵文字ID。Messaging APIで送信できるLINE絵文字の絵文字IDについては、「[LINE絵文字](/docs/messaging-api/emoji-list/)」を参照してください。
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
  *テキストメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
          "type": "text",
          "text": "Hello, world"
      }
      ```
      :::::
    ::::

  *LINE絵文字を含むテキストメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
          "type": "text",
          "text": "$ LINE emoji $",
          "emojis": [
            {
              "index": 0,
              "productId": "5ac1bfd5040ab15980c9b435",
              "emojiId": "001"
            },
            {
              "index": 13,
              "productId": "5ac1bfd5040ab15980c9b435",
              "emojiId": "002"
            }
          ]
      }
      ```
      :::::
    ::::

  *過去のメッセージを引用したテキストメッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
          "type": "text",
          "text": "Yes, you can.",
          "quoteToken": "yHAz4Ua2wx7..."
      }
      ```
      :::::
    ::::
  :::
::
