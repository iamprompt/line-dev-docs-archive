---
title: LINE emoji
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/emoji-list
__hash__: KfmxuR3MuLYzXYSRiRw5MydheYwJ4hJx1t8LvvneiKU
seo:
  title: LINE emoji
  description: null
---

# :page-title

Using the Messaging API, you can use LINE emoji in text messages. For instructions to send text messages, see [Send messages](/docs/messaging-api/sending-messages/).

::admonition
---
title: '"LINE original unicode emojis" is discontinued as of March 31, 2022'
type: warning
---
Instead of "LINE original unicode emojis", use LINE emoji with the `emojis` property. For more information, see the news from April 1, 2022, ["LINE original unicode emojis" of the Messaging API has been discontinued as of March 31, 2022](/news/2022/04/01/line-original-unicode-emojis-has-been-discontinued/).
::

::admonition{title="Supported emoji types in text messages" type="note"}
In [text messages](/reference/messaging-api/#text-message) and [text messages (v2)](/reference/messaging-api/#text-message-v2), you can use Unicode emoji in addition to LINE emoji.

| Emoji type    | Object type                        | How to use                                                                                                                 |
| ------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| LINE emoji    | Text message                       | Specify the emoji's product ID and emoji ID in the `emojis` property.                                                      |
| LINE emoji    | Text message (v2)                  | Specify the emoji's product ID and emoji ID in the [emoji object](/reference/messaging-api/#text-message-v2-emoji-object). |
| Unicode emoji | - Text message - Text message (v2) | Enter emoji as they are or enter Unicode code points in the `text` property.                                               |
::

## Specify LINE emojis in message objects

To send an emoji, specify the product ID and emoji ID of the emoji in a [text message](/reference/messaging-api/#text-message) object or [text message (v2)](/reference/messaging-api/#text-message-v2) object. For example, when using a text message, specify the `emojis.productId` and `emojis.emojiId` properties as shown in the figure below:

![](/media/messaging-api/emojis-object/emojis-object-en.png){className="[\"w-fix-960\",\"border\",\"rounded-sm\",\"p-2\"]"}

## LINE emoji definitions

The number attached to each LINE emoji is the emoji's emoji ID.

:messaging-api-emojis
