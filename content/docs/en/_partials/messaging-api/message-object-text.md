---
title: Message Object Text
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/message-object-text
__hash__: Znl9w3H3lqMebxSl7qopykTGNn9PIUJF_Jhyr3SM3xM
seo:
  description: ''
---

### Text message

::admonition
---
title: Number of characters and index position of emojis
type: note
---
The number of characters and index position of emojis in text set to the property must be the number and position of the code unit when encoded in UTF-16. For some characters, such as those that use surrogate pairs and emojis that can be expressed in UTF-16, count them as multiple characters instead of one.

For more information, see [Character counting in a text](/docs/messaging-api/text-character-count/) in the Messaging API documentation.
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

      Message text. You can include the following emoji:

      - LINE emojis. Use a `$` character as a placeholder and specify the `product ID` and `emoji ID` of the LINE emoji you want to use in the `emojis` property. For more information, see [LINE emoji](/docs/messaging-api/emoji-list/).
      - Unicode emojis

      Max character limit: 5000

        ::::::admonition
        ---
        title: '"LINE original unicode emojis" has been discontinued as of March 31, 2022'
        type: warning
        ---
        Use "LINE Emoji" with the `emojis` property instead of "LINE original unicode emojis".

        For more information, see the news from April 1, 2022, ["LINE original unicode emojis" of the Messaging API has been discontinued as of March 31, 2022](/news/2022/04/01/line-original-unicode-emojis-has-been-discontinued/) and [LINE emoji](/docs/messaging-api/emoji-list/).
        ::::::
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      emojis

      #undefined
      Array of LINE emoji objects

      One or more LINE emoji.  

      Max: 20 LINE emoji
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      emojis.index

      #undefined
      Number

      The index position for `$` indicating the placeholder for LINE emojis in `text`, with the first character being at position `0`. See the text message example for details.

        ::::::admonition{title="Note" type="note"}
        If you specify a position that doesn't match the position of `$`, the API returns HTTP `400 Bad request`.
        ::::::
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      emojis.productId

      #undefined
      String

      Product ID for a set of LINE emoji. For more information on product IDs, see [LINE emoji](/docs/messaging-api/emoji-list/).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      emojis.emojiId

      #undefined
      String

      Emoji ID. For more information on emoji IDs for LINE emojis that are sendable with the Messaging API, see [LINE emoji](/docs/messaging-api/emoji-list/).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      quoteToken

      #undefined
      String

      Quote token of the message you want to quote. For more information, see [Get quote tokens](/docs/messaging-api/get-quote-tokens/) in the Messaging API documentation.
      :::::
    ::::
  :::

  :::reference-code
  *Text message example*

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

  *Text message example with LINE emoji*

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

  *Example of a text message quoting a past message*

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
