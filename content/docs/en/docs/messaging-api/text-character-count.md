---
title: Character counting in a text
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/text-character-count
__hash__: OGM8KH4sD6TxWb8JzjdDv_RdnCiVKf9dKLGiqXvVUeM
seo:
  title: Character counting in a text
  description: null
---

# :page-title

:markdown-controlsThe Messaging API counts text characters in UTF-16 code units (16-bit). Characters made up of multiple code units (e.g. some Kanji characters, Unicode emojis) are counted as more than one character. For example, a Unicode emoji 🍎 is expressed in two code units. Thus 🍎 is two characters long, not one.

When the Messaging API counts a text that has a [LINE emoji](/docs/messaging-api/emoji-list/), the emoji placeholder (`$`) is replaced with the emoji's alternative text. Alternative text is the text displayed instead of the emoji on devices that can't display LINE emojis. Therefore, when sending a text message that has a LINE emoji, the text length may unintentionally exceed the maximum length and sending the message may fail. Note that LINE doesn't disclose the alternative text for LINE emojis.

However, the properties listed below are counted in [grapheme cluster](https://unicode.org/reports/tr29/){rel="[\"nofollow\"]"} units, not in UTF-16 code units:

| Type                                                                 | Property                                          |
| -------------------------------------------------------------------- | ------------------------------------------------- |
| All [action objects](/reference/messaging-api/#action-objects)       | - `label`                                         |
| [Postback action objects](/reference/messaging-api/#postback-action) | - `displayText` - `fillInText` - `label` - `text` |
| [Message action objects](/reference/messaging-api/#message-action)   | - `label` - `text`                                |
| [Buttons template messages](/reference/messaging-api/#buttons)       | - `text` - `title`                                |
| [Confirm template messages](/reference/messaging-api/#confirm)       | - `text`                                          |
| [Carousel template messages](/reference/messaging-api/#carousel)     | - `text` - `title`                                |
| [Rich menu objects](/reference/messaging-api/#rich-menu-object)      | - `chatBarText` - `name`                          |
