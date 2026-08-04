---
title: >-
  New &quot;message sticker&quot; resource type added to sticker message webhook
  event
navigation: true
description: >-
  Following the release of message stickers (stickers with a customizable text),
  we have added PER_STICKER_TEXT to the stickerResourceType property of the
  webhook event that notifies you when a sticker message is sent.
meta: '{"date":"2020-03-30 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2020/2020-03-30-per-sticker-text-type-added
__hash__: AEFR01PV6-2T8h57XZs1cSisOrZdWy2UCx0GDe_uGao
seo:
  title: >-
    New &quot;message sticker&quot; resource type added to sticker message
    webhook event
  description: >-
    Following the release of message stickers (stickers with a customizable
    text), we have added PER_STICKER_TEXT to the stickerResourceType property of
    the webhook event that notifies you when a sticker message is sent.
---

Following the release of message stickers (stickers with a customizable text), we have added `PER_STICKER_TEXT` to the `stickerResourceType` property of the webhook event that notifies you when a sticker message is sent.

If a LINE user sends a message sticker to your LINE Official Account, you will receive a webhook event object containing `stickerResourceType` of `PER_STICKER_TEXT`.

For more information, see the [Sticker](/reference/messaging-api/#wh-sticker) section of the Messaging API reference.
