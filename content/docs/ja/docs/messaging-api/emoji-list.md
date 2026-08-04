---
title: LINE絵文字
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/messaging-api/emoji-list
__hash__: dvDkQI3G7vrrxarI7N2AchGoPeyXokejA9kEi5masZo
seo:
  title: LINE絵文字
  description: null
---

# :page-title

Messaging APIを使うと、テキストのメッセージでLINE絵文字を使うことができます。テキストのメッセージの送信方法について詳しくは、「[メッセージを送信する](/docs/messaging-api/sending-messages/)」を参照してください。

::admonition
---
title: 「LINE独自のUnicode絵文字」は2022年3月31日をもって廃止されました
type: warning
---
「LINE独自のUnicode絵文字」の代わりに`emojis`プロパティを使ったLINE絵文字を利用してください。詳しくは、2022年4月1日のニュース、「[2022年3月31日をもって、Messaging APIの「LINE独自のUnicode絵文字」を廃止しました](/news/2022/04/01/line-original-unicode-emojis-has-been-discontinued/)」を参照してください。
::

::admonition{title="テキストメッセージに対応している絵文字の種類" type="note"}
[テキストメッセージ](/reference/messaging-api/#text-message)や[テキストメッセージ（v2）](/docs/messaging-api/message-types/#text-messages-v2)では、LINE絵文字に加えてUnicode絵文字も利用できます。

| 絵文字の種類     | オブジェクトの種類                   | 利用方法                                                                                        |
| ---------- | --------------------------- | ------------------------------------------------------------------------------------------- |
| LINE絵文字    | テキストメッセージ                   | `emojis`プロパティに、プロダクトIDおよび絵文字IDを指定します。                                                       |
| LINE絵文字    | テキストメッセージ（v2）               | [絵文字オブジェクト](/reference/messaging-api/#text-message-v2-emoji-object)に、プロダクトIDおよび絵文字IDを指定します。 |
| Unicode絵文字 | - テキストメッセージ - テキストメッセージ（v2） | `text`プロパティ内に、絵文字を直接入力するか、Unicodeコードポイントを入力します。                                             |
::

## メッセージオブジェクトにLINE絵文字を指定する

絵文字を送信するには、[テキストメッセージ](/reference/messaging-api/#text-message)オブジェクトや[テキストメッセージ（v2）](/reference/messaging-api/#text-message-v2)オブジェクトに絵文字のプロダクトIDと絵文字IDを指定します。たとえばテキストメッセージを使用する場合は、下図のように`emojis.productId`プロパティと`emojis.emojiId`プロパティを指定してください。

![](/media/messaging-api/emojis-object/emojis-object-ja.png){className="[\"w-fix-960\",\"bg-border\"]"}

## LINE絵文字定義

LINE絵文字に付いている番号は、その絵文字の絵文字IDです。

:messaging-api-emojis
