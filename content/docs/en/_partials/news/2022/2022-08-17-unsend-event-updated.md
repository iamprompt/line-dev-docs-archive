---
title: >-
  Users can now cancel sending messages in one-on-one chats with LINE Official
  Accounts
navigation: true
description: >-
  In one-on-one chats between users and LINE Official Accounts, users (excluding
  users in Thailand and Taiwan) can now cancel sending messages.
meta: '{"date":"2022-08-17 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2022/2022-08-17-unsend-event-updated
__hash__: eOxzdaEHJxr4AlkSg0AZujSrOz_MyBQjub__2p3Qejg
seo:
  title: >-
    Users can now cancel sending messages in one-on-one chats with LINE Official
    Accounts
  description: >-
    In one-on-one chats between users and LINE Official Accounts, users
    (excluding users in Thailand and Taiwan) can now cancel sending messages.
---

In one-on-one chats between users and LINE Official Accounts, users (excluding users in Thailand and Taiwan) can now cancel sending messages.

Accordingly, in the Messaging API webhooks, the object included in the source of unsend events (the [`source` property](/reference/messaging-api/#common-properties)) will change to include users, in addition to the existing group chats and multi-person chats.

See this table for the differences before and after the change:

| Item                                                                                                                                    | Before change                                                                                                         | After change                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source of [unsend event](/reference/messaging-api/#unsend-event) (the [`source` property](/reference/messaging-api/#common-properties)) | - [Group chats](/reference/messaging-api/#source-group) - [Multi-person chats](/reference/messaging-api/#source-room) | - [Users](/reference/messaging-api/#source-user) (one-on-one chats) - [Group chats](/reference/messaging-api/#source-group) - [Multi-person chats](/reference/messaging-api/#source-room) |

If you've displayed the message on your own management screen after a [message event](/reference/messaging-api/#message-event) is received by the bot server, we recommend that you cancel displaying the message when the bot server receives the unsend event.

For more information, see [Unsend event](/reference/messaging-api/#unsend-event) in the Messaging API reference.
