---
title: Message Object Sticker
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/message-object-sticker
__hash__: xF18DMDcNRBNUocrKiZPQDUYSF7UMvuBEzdZRuU5bBA
seo:
  description: ''
---

### Sticker message

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

      Package ID for a set of stickers. For information on package IDs, see the [Stickers](/docs/messaging-api/sticker-list/).
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      stickerId

      #undefined
      String

      Sticker ID. For a list of sticker IDs for stickers that can be sent with the Messaging API, see the [Stickers](/docs/messaging-api/sticker-list/).
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
  *Sticker message example*

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

  *Example of a sticker message quoting a past message*

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
