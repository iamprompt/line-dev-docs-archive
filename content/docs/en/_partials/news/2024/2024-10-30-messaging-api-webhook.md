---
title: The Messaging API now allows you to recognize mentions from a user to your bot
navigation: true
description: >-
  As announced in the September 30, 2024 news, we've been provided a feature
  that allows users to mention a bot in group chats on the LINE app. In the
  Messaging API, we'd like to inform you that a property has been added to the
  webhook event object sent to the bot server when a user sends a message
  containing a mention.
meta: '{"date":"2024-10-30 01:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2024/2024-10-30-messaging-api-webhook
__hash__: ICg29bbXz2wbIcyN_P94Qhti6RcTpZYkmcjF_CLGfMw
seo:
  title: >-
    The Messaging API now allows you to recognize mentions from a user to your
    bot
  description: >-
    As announced in the September 30, 2024 news, we've been provided a feature
    that allows users to mention a bot in group chats on the LINE app. In the
    Messaging API, we'd like to inform you that a property has been added to the
    webhook event object sent to the bot server when a user sends a message
    containing a mention.
---

As announced in the [September 30, 2024 news](/news/2024/09/30/messaging-api-webhook/), we've been provided a feature that allows users to mention a bot in group chats on the LINE app. In the Messaging API, we'd like to inform you that a property has been added to the webhook event object sent to the bot server when a user sends a message containing a mention.

This allows bots to recognize when they're mentioned by a user in group chats. If you already have implemented your own process for recognizing mentions to the bot, or if you want to implement a process on your bot server that responds to mentions by users, consider using the new specification for detection.

### Target version

LINE version 14.17.0 or later for iOS or Android.

### Added specifications

The following two specifications has been added with this release:

#### 1. Addition of mention.mentionees[].isSelf

When a user sends a message that includes a mention, the `mention` property has been included in the [text message object](/reference/messaging-api/#wh-text) in the webhook event sent to the bot server. With this new specification, when a mention is made of a user or bot, the `isSelf` property is added to `mentionees[]` in the `mention` property.

::parameter-table
  :::parameter-table-entry{annotation="Not always included"}
  #undefined
  mention.mentionees[].isSelf

  #undefined
  Boolean

  Whether the mention is to the bot (`destination`) that received the webhook event. This is only included when the value of the `mention.mentionees[].type` property is `user`.

  - `true`: This is a mention to the bot that received the webhook event.
  - `false`: This is a mention to another user.
  :::
::

#### 2. Setting values in the webhook event object when there is a mention to a bot

If a message sent by a user mentions your bot, the following values will be set in the text message object in the webhook event sent to the bot server:

- `mention.mentionees[].type` will be set to `user`.
- `mention.mentionees[].userId` will be set to the user ID of the bot.
- `mention.mentionees[].isSelf` is set to `true`.

You can check the user ID of the bot in the `destination` property in the [request body of the webhook](/reference/messaging-api/#request-body) and in the `userId` property which can be obtained using the [Get bot info](/reference/messaging-api/#get-bot-info) endpoint.

### Examples

The following are examples of the behavior when a user sends a message containing a mention, before and after the addition of the specification:

#### Before the specification was added

Users have been able to mention other users in the chat room for some time now. When a user sends a message that includes a mention, a webhook event object containing the following message event was sent to the bot server:

```json
"message": {
  "id": "444573844083572737",
  "type": "text",
  "quoteToken": "q3Plxr4AgKd...",
  "text": "@example Good Morning!!",
  "mention": {
    "mentionees": [
      {
        "index": 0,
        "length": 8,
        "userId": "U49585cd0d5...",
        "type": "user"
      }
    ]
  }
}
```

#### After the specification was added (current)

After the specification was added, if there is a mention of a bot in the message sent by a user, a webhook event object containing the following message event will be sent to the bot server. At this time, the `isSelf` property will be set to `true`.

```json
"message": {
  "id": "444573844083572737",
  "type": "text",
  "quoteToken": "q3Plxr4AgKd...",
  "text": "@example_bot Good Morning!!",
  "mention": {
    "mentionees": [
      {
        "index": 0,
        "length": 12,
        "userId": "{user ID of the bot}",
        "type": "user",
        "isSelf": true
      }
    ]
  }
}
```

If a message sent by a user mentions another user, the `isSelf` property is set to `false` as follows:

```json
"message": {
  "id": "444573844083572737",
  "type": "text",
  "quoteToken": "q3Plxr4AgKd...",
  "text": "@example Good Morning!!",
  "mention": {
    "mentionees": [
      {
        "index": 0,
        "length": 8,
        "userId": "U49585cd0d5...",
        "type": "user",
        "isSelf": false
      }
    ]
  }
}
```

The structure of the webhook event object may change, as in the case of this specification addition. Implement your bot server so that it doesn't malfunction when receiving objects with a different structure than before. For more information, see [Recommendation for implementation assuming non-breaking feature additions](/docs/messaging-api/development-guidelines/#assume-non-breaking-changes) section in the Messaging API documentation.

### LINE Messaging API SDK Updates

For more information about the update status of each SDK release related to the above, see the [LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/) release notes.
