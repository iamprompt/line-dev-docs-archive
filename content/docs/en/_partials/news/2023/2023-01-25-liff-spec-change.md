---
title: >-
  Providing company internal identifiers of chat rooms to LIFF apps will be
  discontinued on February 6, 2023
navigation: true
description: >-
  As announced on December 27, 2022, we'll discontinue providing company
  internal identifiers of chat rooms (one-on-one chat ID, group ID, and room ID)
  to LIFF apps on February 6, 2023.
meta: >-
  {"date":"2023-01-25 00:00 UTC","tags":"liff, line-mini-app,
  line-login","locale":"en"}
path: /en/_partials/news/2023/2023-01-25-liff-spec-change
__hash__: gEhYNp_1Lsv19Q2egvgTL0rjKNo10tSxoDJ7qezCACQ
seo:
  title: >-
    Providing company internal identifiers of chat rooms to LIFF apps will be
    discontinued on February 6, 2023
  description: >-
    As announced on December 27, 2022, we'll discontinue providing company
    internal identifiers of chat rooms (one-on-one chat ID, group ID, and room
    ID) to LIFF apps on February 6, 2023.
---

As announced on [December 27, 2022](/news/2022/12/27/liff-spec-change/), we'll discontinue providing company internal identifiers of chat rooms (one-on-one chat ID, group ID, and room ID) to LIFF apps on February 6, 2023.

After reviewing the functions of LIFF apps, we decided to discontinue providing company internal identifiers of chat rooms to LIFF apps. This change applies to all LIFF SDK versions, regardless of the LIFF [versioning policy](/docs/liff/versioning-policy/). This also applies to LINE MINI App since it is based on the LIFF system.

### Scheduled date of change

February 6, 2023

The content and date of this specification change are subject to change.

### Impact of discontinuing

Discontinuing the provision of company internal identifiers of chat rooms to LIFF apps will have the following impacts:

- [Impact 1: Return value of `liff.getContext()`](#impact-20230125-01)
- [Impact 2: Return values of APIs that issue, refresh, or verify the validity of LINE Login access tokens](#impact-20230125-02)

#### Impact 1: Return value of liff.getContext()

[`liff.getContext()`](/reference/liff/#get-context) is the method to get the screen type (1-on-1 chat, group chat, multi-person chat, or external browser) from which the LIFF app is launched.

After the specification change, the return value of `liff.getContext()` will return random strings instead of the following company internal identifiers. These random strings will change each time the user opens the LIFF app.

- One-on-one chat ID (`utouId`)
- Group ID (`groupId`)
- Room ID (`roomId`)

For more information, see [`liff.getContext()`](/reference/liff/#get-context) in the LIFF API reference.

#### Impact 2: Return values of APIs that issue, refresh, or verify the validity of LINE Login access tokens

If `chat_message.write` was selected as the LIFF app's required scope, company internal identifiers of chat rooms (one-on-one chat ID, group ID, and room ID) would be included in the response's scope (`scope`) of the following endpoints:

- [Issue access token](/reference/line-login/#issue-access-token)
- [Refresh access token](/reference/line-login/#refresh-access-token)
- [Verify access token validity](/reference/line-login/#verify-access-token)

After the specification change, company internal identifiers of chat rooms will no longer be included in the scope.

| Before the change (as-is)                 | After the change     |
| ----------------------------------------- | -------------------- |
| `chat_message.write:UU29e6eb36812f484...` | `chat_message.write` |

For more information, see [Issue access token](/reference/line-login/#issue-access-token), [Refresh access token](/reference/line-login/#refresh-access-token), and [Verify access token validity](/reference/line-login/#verify-access-token) in the LINE Login v2.1 API reference.

### Alternatives

If you're currently providing LIFF apps that rely on the company internal identifiers described in the [Impact of discontinuing](#impact-20230125) section above, you should consider the following alternatives:

- [Issue unique ID by your service instead of using the chat room identifiers](#alternatives-20230125-01)
- [Use group ID / room ID included in webhook events](#alternatives-20230125-02)

#### Issue unique ID by your service instead of using the chat room identifiers

Your service should issue a unique ID for each chat room and assign it to the LIFF URL (`https://liff.line.me/{liffId}`) that the user accesses, so that your service can identify the chat room.

E.g., `https://liff.line.me/{liffId}/?talk_id={ID issued by your service}`

| Example of current implementation                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Alternative method                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. A user opens a LIFF app. 2. The user performs an action such as "create a game space", "share", etc. on the LIFF app. 3. The user shares the app’s LIFF URL (`https://liff.line.me/{liffId}`) to a chat room using [`liff.shareTargetPicker()`](/reference/liff/#share-target-picker) or [`liff.sendMessages()`](/reference/liff/#send-messages). 4. Your service generates a session based on the company internal identifier of the chat room contained in the return value of `liff.getContext()`. | 1. A user opens a LIFF app. 2. The user performs an action such as "create a game space", "share", etc. on the LIFF app. 3. Your service issues a URL with its own unique ID (`https://liff.line.me/{liffId}/?talk_id={ID issued by your service}`). 4. The user shares that URL to a chat room using [`liff.shareTargetPicker()`](/reference/liff/#share-target-picker) or [`liff.sendMessages()`](/reference/liff/#send-messages). 5. Your service generates a session based on your uniquely issued ID that will be provided by the secondary redirect URL. |

For the handling of LIFF URLs, developers should follow the [LIFF app development guidelines](/docs/liff/development-guidelines/).

For more information, see [Create a secondary redirect URL](/docs/liff/opening-liff-app/#setting-second-redirect) in the LIFF documentation.

#### Use group ID / room ID included in webhook events

If you're currently retrieving the group ID or room ID from the return value of [`liff.getContext()`](/reference/liff/#get-context) of your LIFF app, you can retrieve them from the Messaging API's webhook event instead.

| Example of current implementation                                                                                                                                                                                                                                                                                                                                                                                                                 | Alternative method                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. A LINE Official Account participates in a group chat / multi-person chat. 2. The LINE Official Account shares a LIFF URL to the chat room. 3. A user opens a LIFF app from that LIFF URL. 4. Retrieve the group ID / room ID from the return value of `liff.getContext()` of your LIFF app. 5. [Send push messages](/reference/messaging-api/#send-push-message) to the group chat / multi-person chat using the retrieved group ID / room ID. | 1. A LINE Official Account participates in a group chat / multi-person chat. 2. Retrieve the group ID / room ID using Messaging API webhook events. 3. [Send push messages](/reference/messaging-api/#send-push-message) to the group chat / multi-person chat using the retrieved group ID / room ID. |

For more information, see [Webhook events for one-on-one chats or group chats and multi-person chats](/docs/messaging-api/receiving-messages/#webhook-event-in-one-on-one-talk-or-group-chat) in the Messaging API documentation and [Webhook Event Objects](/reference/messaging-api/#webhook-event-objects) in the Messaging API reference.

LINE will continue to work on further improving our services to our customers. Thank you for your understanding and cooperation.
