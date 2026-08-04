---
title: Group chats and multi-person chats
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/group-chats
__hash__: pRjrXJHjfR5kavUQzdVxVqT9IvQdmXU2iWvkTYAsiTM
seo:
  title: Group chats and multi-person chats
  description: null
---

# :page-title

:markdown-controlsLINE Official Accounts can interact with users in group chats or multi-person chats using the Messaging API. Learn how you can use your LINE Official Account in a group chats and multi-person chats.

## Types of chats with multiple users

LINE has two types of chats with multiple users: **group chats** and **multi-person chats**. The users in a group chat or multi-person chat are called **members**.

::admonition{title="Multi-person chat is merged into group chat" type="tip"}
From LINE version 10.17.0, multi-person chat was merged into group chat. You can continue to use the multi-person chats that were opened before. But if you create a new chat with multiple friends on LINE version 10.17.0 or later, the chat becomes a group chat. See [Create and manage groups](https://guide.line.me/ja/friends-and-groups/create-groups.html){rel="[\"nofollow\"]"} (only available in Japanese) in the LINE user's guide.
::

### Group chats

Group chats are the chats designed for continuous use by multiple participants. A :glossary-tooltip[[group ID](/glossary/#group-id)]{glossary-id="group-id"} is generated to identify a group chat. LINE users can create group chats with a desired name. Group chats support features such as albums and notes.

::admonition{title="Tip" type="tip"}
When a user invites a third user to a one-to-one chat, a group chat is created. Users can set whether or not to have an approval flow for users invited to the group chat. For more information on how to set approval flow up, see [Create and manage groups](https://guide.line.me/ja/friends-and-groups/create-groups.html){rel="[\"nofollow\"]"} (only available in Japanese) in the LINE user's guide.
::

### Multi-person chats

Multi-person chats are the chats designed for temporary use by multiple people. A :glossary-tooltip[[room ID](/glossary/#room-id)]{glossary-id="room-id"} is generated to identify a multi-person chat. The name of the multi-person chat is automatically set to the names of the chat members. Multi-person chats don't support features such as albums and notes.

From LINE version 10.17.0, multi-person chat was merged into group chat. You can continue to use the multi-person chats that were opened before. But if you create a new chat with multiple friends on LINE version 10.17.0 or later, the chat becomes a group chat.

## Add LINE Official Account in group & multi-person chats

You can invite a LINE Official Account in a group chat or multi-person chat. To be invited, go to [LINE Developers Console](/console/) > **Messaging API** tab of your channel and enable **Allow bot to join group chats**. This setting is disabled by default. At any time, only one LINE Official Account can be in a group chat or multi-person chat.

## Receive webhook events

You'll receive webhook events for group and multi-person chats, like you do for one-on-one chats. For more information, see [Webhook events for chats](/docs/messaging-api/receiving-messages/#webhook-event-in-one-on-one-talk-or-group-chat) and [Webhook Event Objects](/reference/messaging-api/#webhook-event-objects) in the Messaging API reference.

### Tip for using message events

When a user send a message in a group or multi-person chat that your LINE Official Account is added, the LINE Platform sends the bot server a message event, like in one-on-one chats.

The [message event](/reference/messaging-api/#message-event) has a property `source` that specifies the ID of the group chat (`groupId`) or of the multi-person chat (`roomId`).

```json
"source": {
    "type": "group",
    "groupId": "Ca56f94637c...",
    "userId": "U4af4980629..."
}
```

For more information on group IDs and room IDs, see [What are the user ID, group ID, and room ID values?](/faq/#what-are-userid-groupid-and-roomid).

## Send a request to an endpoint

The following operations are specific to group chats and multi-person chats. For more information, see [Messaging API reference](/reference/messaging-api/).

- **Group chats**
  - [Get group chat summary](/reference/messaging-api/#get-group-summary)
  - [Get number of users in a group chat](/reference/messaging-api/#get-members-group-count)
  - [Get group chat member user IDs](/reference/messaging-api/#get-group-member-user-ids)
  - [Get group chat member profile](/reference/messaging-api/#get-group-member-profile)
  - [Leave group chat](/reference/messaging-api/#leave-group)
- **Multi-person chats**
  - [Get number of users in a multi-person chat](/reference/messaging-api/#get-members-room-count)
  - [Get multi-person chat member user IDs](/reference/messaging-api/#get-room-member-user-ids)
  - [Get multi-person chat member profile](/reference/messaging-api/#get-room-member-profile)
  - [Leave multi-person chat](/reference/messaging-api/#leave-room)

### Tip for sending messages

You can send [reply messages](/reference/messaging-api/#send-reply-message) and [push messages](/reference/messaging-api/#send-push-message) in group chats and multi-person chats, like in one-on-one chats.

When you send a push message, specify the recipient with the group ID or room ID in the `to` property of the request body. You can get the recipient ID in [webhook event objects](/reference/messaging-api/#webhook-event-objects). The messages you send in group chats and multi-person chats are displayed to all members of the chat.

::admonition{title="Tip" type="tip"}
You can't [send multicast messages](/reference/messaging-api/#send-multicast-message) to multiple users in group chats and multi-person chats.
::
