---
title: Messaging API overview
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /en/docs/messaging-api/overview
__hash__: 5rU5_RjMIAHxghJ3A14FS-IK_c44OXskEakUKkzM7g0
seo:
  title: Messaging API overview
  description: null
---

# :page-title

:markdown-controlsUse the Messaging API to build bots to provide personalized experiences on LINE to your users.

::admonition{title="What is LINE Official Account" type="tip"}
If you are unfamiliar with LINE Official Account, visit the comprehensive learning platform, [LY Marketing Campus](https://lymcampus.jp/){rel="[\"nofollow\"]"} (only available in Japanese).
::

## How the Messaging API works

With the Messaging API, a bot server can send and receive data to and from the LINE Platform. Requests are sent over HTTPS in JSON. The communication flow between a bot server and the LINE Platform is as follows:

1. A user sends a message to a LINE Official Account.
2. The LINE Platform sends a webhook event to the webhook URL of the bot server.
3. The bot server checks the webhook event and responds to the user through the LINE Platform.

![](/media/messaging-api/overview/messaging-api-architecture.png)

## Try the demo

Try using the demo to experience Messaging API for yourself. You can view the demo on your smartphone. Scan the QR code to add the LINE Official Account for the demo as a friend.

![](/media/messaging-api/demo/messaging-api-demo-qr-code-en.png){className="[\"border\",\"w-fix-560\"]"}

::admonition{title="Data the Demo App Retrieves" type="note"}
The LINE Official Account for the demo has a function to send your device's location information. If you do not wish to send this information, turn off the location sharing function on your device before using the service. We will also collect some of your profile information (user ID) from your LINE account. However, this information isn't stored on the server. Please understand the above before using this service.
::

## What you can do with the Messaging API

Here are the things you can do with the Messaging API.

### Send reply messages

With the Messaging API, you can send reply messages to users who added your LINE Official Account as a friend. For more information, see [Sending messages](/docs/messaging-api/sending-messages/).

### Send messages at any time

With the Messaging API, you can send messages directly to users at all times. For more information, see [Sending messages](/docs/messaging-api/sending-messages/).

### Send different message types

With the Messaging API, you can send different types of messages to users as listed below. For more information about the specification of these messages, see [Message types](/docs/messaging-api/message-types/).

- [Text message](/docs/messaging-api/message-types/#text-messages)
- [Text message (v2)](/docs/messaging-api/message-types/#text-messages-v2)
- [Sticker message](/docs/messaging-api/message-types/#sticker-messages)
- [Image message](/docs/messaging-api/message-types/#image-messages)
- [Video message](/docs/messaging-api/message-types/#video-messages)
- [Audio message](/docs/messaging-api/message-types/#audio-messages)
- [Location message](/docs/messaging-api/message-types/#location-messages)
- [Coupon message](/docs/messaging-api/message-types/#coupon-messages)
- [Imagemap message](/docs/messaging-api/message-types/#imagemap-messages)
- [Template message](/docs/messaging-api/message-types/#template-messages)
- [Flex Message](/docs/messaging-api/message-types/#flex-messages)

### Get content sent by users

With the Messaging API, you can get images, videos, audio, and files sent by users. Content that users send is automatically deleted after a period of time. For more information, see [Get content](/reference/messaging-api/#get-content) in the Messaging API reference.

### Get user profiles

With the Messaging API, you can get profile information of a user who interacts with your LINE Official Account, in one-on-one and group chats. The types of profile information you can get are user's display name, language, profile image and status message. For more information, see [Get profile](/reference/messaging-api/#get-profile) in the Messaging API reference.

### Join group chats

With the Messaging API, you can send messages in group chats and get information of the group chat members. For more information, see [Group chats and multi-person chats](/docs/messaging-api/group-chats/).

### Use rich menus

With the Messaging API, you can set and customize a rich menu in a chat. Rich menus help users find how they can interact with your LINE Official Account. Users can use this menu from the chat at all times. For more information, see [Use rich menus](/docs/messaging-api/using-rich-menus/).

### Use beacons

With LINE Beacon, you can set your LINE Official Account to interact with the user who enters a beacon region. For more information, see [Use beacons with LINE](/docs/messaging-api/using-beacons/).

### Use account link

With the Messaging API, you can securely link user accounts in your service to their LINE accounts, if they friended your LINE Official Account. For more information, see [User account linking](/docs/messaging-api/linking-accounts/).

### Get the number of sent messages

With the Messaging API, you can get the number of messages you sent from your LINE Official Account. The API returns only the number of messages sent through the Messaging API, not LINE Official Account Manager. For more information, see the following references:

- [Get the target limit for sending messages this month](/reference/messaging-api/#get-quota)
- [Get number of messages sent this month](/reference/messaging-api/#get-consumption)
- [Get number of sent reply messages](/reference/messaging-api/#get-number-of-reply-messages)
- [Get number of sent push messages](/reference/messaging-api/#get-number-of-push-messages)
- [Get number of sent multicast messages](/reference/messaging-api/#get-number-of-multicast-messages)
- [Get number of sent broadcast messages](/reference/messaging-api/#get-number-of-broadcast-messages)

## Messaging API pricing

You can get started with the Messaging API for free. Anyone can use the Messaging API to send a message from a LINE Official Account.

You can send a certain number of messages each month for free. The number of free messages depends on the [subscription plan](https://www.lycbiz.com/jp/service/line-official-account/plan/){rel="[\"nofollow\"]"} (only available in Japanese) of your LINE Official Account. The subscription plan may vary by country or region. See your region's subscription plan for more information.

For more information on Messaging API pricing, see [Messaging API pricing](/docs/messaging-api/pricing/).

## Next steps

As the next step, [get started with the Messaging API](/docs/messaging-api/getting-started/) to create a bot. First, create a LINE Official Account. Once you've created a LINE Official Account, you can create a Messaging API channel for that LINE Official Account.

## Learn more

- [Messaging API development guidelines](/docs/messaging-api/development-guidelines/)
- [LINE Messaging API SDKs](/docs/messaging-api/line-bot-sdk/)
- [Messaging API reference](/reference/messaging-api/)
