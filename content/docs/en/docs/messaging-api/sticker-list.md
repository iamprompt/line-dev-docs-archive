---
title: Stickers
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/sticker-list
__hash__: p1G8oL9Pf2TrVv5ac91J7LMGIuWZRRy0NLZQmPp1VtE
seo:
  title: Stickers
  description: null
---

# :page-title

Using the Messaging API, you can send the stickers as [sticker messages](/docs/messaging-api/message-types/#sticker-messages), but only the ones listed in [Sticker definitions](#sticker-definitions). For instructions to send sticker messages, see [Sending messages](/docs/messaging-api/sending-messages/).

::admonition
---
title: To send a sticker that isn't listed in Sticker definitions
type: tip
---
- You can send stickers that you own with your LINE account. To send your own stickers, go to "Chats" in the [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"} or the LINE Official Account Manager App. For more information, see [Chats](https://www.lycbiz.com/jp/manual/OfficialAccountManager/chats/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.
- Only corporate users who have submitted the required applications can send promotional stickers owned by the company such as sponsored stickers. To send these stickers from your LINE Official Account, contact your sales representative or contact [our Sales partners](https://www.lycbiz.com/jp/partner/sales/){rel="[\"nofollow\"]"}.
::

## Send a sticker

To send a sticker, specify the package ID and sticker ID of the sticker in a [sticker message](/reference/messaging-api/#sticker-message) object. As shown below, specify the `packageId` and `stickerId` properties.

![](/media/messaging-api/sticker-message/sticker-message-object-en.png){className="[\"w-fix-960\",\"border\",\"rounded-sm\",\"p-2\"]"}

## Sticker definitions

The number attached to each sticker is the sticker's sticker ID.

:messaging-api-stickers
