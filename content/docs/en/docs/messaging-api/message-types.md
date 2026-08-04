---
title: Message types
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/message-types
__hash__: 7ZyAiRsxxS-7FFtDa8WZojabV9wfznmVt9xF1k_0-LI
seo:
  title: Message types
  description: null
---

# :page-title

:markdown-controlsWith the Messaging API, you can make your bot send these types of messages. To make a message interactive, you can specify an action on a message for users to trigger. For the specification of each message type, see [Message objects](/reference/messaging-api/#message-objects) in the Messaging API reference.

- [Text message](#text-messages)
- [Text message (v2)](#text-messages-v2)
- [Sticker message](#sticker-messages)
- [Image message](#image-messages)
- [Video message](#video-messages)
- [Audio message](#audio-messages)
- [Location message](#location-messages)
- [Coupon message](#coupon-messages)
- [Imagemap message](#imagemap-messages)
- [Template message](#template-messages)
- [Flex Message](#flex-messages)

## Text message

Text messages contain text, including emojis. To send a text message, add the text in the [message object](/reference/messaging-api/#message-objects) you send with the Messaging API. For more information, see [Text message](/reference/messaging-api/#text-message) in the Messaging API reference.

![Text message](/media/messaging-api/messages/text.png){className="[\"border\",\"w-fix-240\"]"}

You can use LINE emojis and Unicode emojis in text messages. Check a list of [LINE emojis](/docs/messaging-api/emoji-list/) you can send with the Messaging API.

![Emoji](/media/messaging-api/messages/emoji.png){className="[\"border\",\"w-fix-240\"]"}

::admonition{title="Text decoration and resizing" type="tip"}
To decorate or resize your text, use [Flex Messages](/reference/messaging-api/#flex-message).
::

## Text message (v2)

You can send text by using text messages (v2). Unlike [text messages](#text-messages), you can substitute strings enclosed in `{` and `}` with mentions and emojis. For more information, see [Text message (v2)](/reference/messaging-api/#text-message-v2) in the Messaging API reference.

![](/media/messaging-api/messages/text-v2.png){className="[\"border\",\"w-fix-320\"]"}

You can continue to use text messages that we've been providing up until now. However, we may only add new features to text messages (v2) from now on.

## Sticker message

Stickers help you to make your bot more appealing and enjoyable to users. To send a sticker with the Messaging API, specify the sticker's package ID and sticker ID in the [message object](/reference/messaging-api/#message-objects). Check a list of available [stickers](/docs/messaging-api/sticker-list/) you can send. For more information, see the [Sticker message](/reference/messaging-api/#sticker-message) in the Messaging API reference.

![Sticker message](/media/messaging-api/messages/sticker.png){className="[\"border\",\"w-fix-240\"]"}

## Image message

Image messages deliver a single image file to users. When you send an image, specify two URLs in the [message object](/reference/messaging-api/#message-objects). One is for the original image and one is for preview. The preview image is the image displayed in a chat, so specify an image smaller than the original image.

When the user taps the preview image, the full image is displayed as shown below. Make sure the URLs have the HTTPS (TLS 1.2 or later) protocol. For more information, see the [Image message](/reference/messaging-api/#image-message) in the Messaging API reference.

![Image message](/media/messaging-api/messages/image.png){className="[\"border\",\"w-fix-240\"]"} ![Full image message](/media/messaging-api/messages/image-full.png){className="[\"border\",\"w-fix-240\"]"}

## Video message

Video messages deliver a single video file to users. When you send a video message, specify two URLs in the [message object](/reference/messaging-api/#message-objects), one for the video file and one for the preview.

LINE plays the video when the user taps the preview. Make sure the URLs have the HTTPS (TLS 1.2 or later) protocol. For more information, see the [Video message](/reference/messaging-api/#video-message) in the Messaging API reference.

![Video message](/media/messaging-api/messages/video.png){className="[\"border\",\"w-fix-240\"]"}

## Audio message

Audio messages deliver a single audio file to users. To send an audio file, specify a URL to the file and the duration in the [message object](/reference/messaging-api/#message-objects).

Make sure the URL has the HTTPS (TLS 1.2 or later) protocol. For more information, see [Audio message](/reference/messaging-api/#audio-message) in the Messaging API reference.

![Audio message](/media/messaging-api/messages/audio.png){className="[\"border\",\"w-fix-240\"]"}

## Location message

Location messages deliver location information to users. Specify in the [message object](/reference/messaging-api/#message-objects) the title, address, latitude coordinate, and longitude coordinate. For more information, see [Location message](/reference/messaging-api/#location-message) in the Messaging API reference.

![Location message](/media/messaging-api/messages/location-en.png){className="[\"border\",\"w-fix-240\"]"}

## Coupon message

Coupon messages deliver coupons to users by specifying a coupon ID.

![](/media/messaging-api/coupon/several-coupons.jpg)

For more information, see [Coupon message](/reference/messaging-api/#coupon-message) in the Messaging API reference.

## Imagemap message

Imagemap messages are messages with an image that has multiple tappable areas. You can set a tappable area to open a webpage or send a message on the user's behalf. You can also set to play a video over the image and display a link text when the playback is finished. For more information, see [Imagemap message](/reference/messaging-api/#imagemap-message) in the Messaging API reference.

![Imagemap message](/media/messaging-api/messages/imagemap.png){className="[\"border\",\"w-fix-240\"]"}

## Template message

Template messages have predefined layouts that help you create richer experiences for your users. Use [actions](/docs/messaging-api/actions/) to make users to interact with your bot. A tap is all that is required for users to trigger an action. This is much simpler than having to type in a message.

Available templates are:

- [Buttons](#buttons-template)
- [Confirm](#confirm-template)
- [Carousel](#carousel-template)
- [Image carousel](#image-carousel-template)

For more information about template messages, see [Template messages](/reference/messaging-api/#template-messages) in the Messaging API reference. In addition, if you want to send messages with more flexible layouts, use [Flex Message](#flex-messages).

### Buttons template

Buttons templates contain slots for an image, title, text and [action](/docs/messaging-api/actions/) buttons. In addition to buttons, you can set an action also on image, title, or text area. An action is triggered when a user taps the entity set with an action. For more information, see [Buttons template](/reference/messaging-api/#buttons) in the Messaging API reference.

![Buttons template message](/media/messaging-api/messages/buttons.png){className="[\"border\",\"w-fix-240\"]"}

### Confirm template

Confirm templates contain slots for text and two buttons. For more information, see [Confirm template](/reference/messaging-api/#confirm) in the Messaging API reference.

![Confirm template message](/media/messaging-api/messages/confirm.png){className="[\"border\",\"w-fix-240\"]"}

### Carousel template

Carousel templates contain multiple columns that users can cycle through. In addition to buttons, you can set an [action](/docs/messaging-api/actions/) in each column object.

An action is triggered when a user taps anywhere in the image, title, or text area of a column object. For more information, see [Carousel template](/reference/messaging-api/#carousel) in the Messaging API reference.

![Carousel template message](/media/messaging-api/messages/carousel.png){className="[\"border\",\"w-fix-240\"]"}

### Image carousel template

Image carousel templates contain multiple images that users can cycle through. For more information, see [Image carousel template](/reference/messaging-api/#image-carousel) in the Messaging API reference.

![Image carousel template message](/media/messaging-api/messages/image-carousel.png){className="[\"border\",\"w-fix-240\"]"}

## Flex Message

Flex Messages are messages with a customizable layout. You can customize the layout within the boundary of the [CSS Flexible Box (CSS Flexbox)](https://www.w3.org/TR/css-flexbox-1/){rel="[\"nofollow\"]"} specification. For more information, see [Send Flex Messages](/docs/messaging-api/using-flex-messages/) and [Flex Message](/reference/messaging-api/#flex-message) in the Messaging API reference.

![Flex Message examples](/media/messaging-api/using-flex-messages/bubbleSamples-Update1.png)

## Common features

This feature is applicable on all message types.

### Quick reply

Quick reply buttons are available on all message types and displayed at the bottom of a chat. Users can tap one of the buttons to reply to your bot. For more information, see [Use quick replies](/docs/messaging-api/using-quick-reply/), and [Quick reply](/reference/messaging-api/#quick-reply) in the Messaging API reference.

![Quick reply sample](/media/messaging-api/using-quick-reply/quickReplySample.png){className="[\"border\",\"w-fix-240\"]"}

## Related pages

Learn more about the Messaging API:

- [Sending messages](/docs/messaging-api/sending-messages/)
- [Message objects](/reference/messaging-api/#message-objects)
- [Actions](/docs/messaging-api/actions/)
