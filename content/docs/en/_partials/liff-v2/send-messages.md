---
title: Send Messages
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/send-messages
__hash__: ejtQ84rGh-TbGWEQZ7UkOza7R1hQbKaMo0bntq8VrxA
seo:
  description: ''
---

### liff.sendMessages()

::reference-with-code
  :::reference-content
  Sends messages on behalf of the user to the chat room where the LIFF app is opened.

  To use this feature, the following conditions must be met:

  - Within the LIFF browser for a LIFF app launched from a one-on-one chat, ::::glossary-tooltip{glossary-id="group"}
  [group chat](/glossary/#group)
  ::::

  , or ::::glossary-tooltip{glossary-id="room"}
  [multi-person chat](/glossary/#room)
  ::::
  - The [`chat_message.write` scope](/docs/liff/registering-liff-apps/#registering-liff-app) is enabled
  - The LIFF app hasn't been reloaded from the [recently used services](/docs/liff/overview/#multi-tab-view-recent-service) section

  If the conditions aren't met, the `liff.sendMessages()` method isn't available and `user doesn't grant required permissions yet` error with error code `403` will occur. The following are examples of cases that cause the error:

  - When accessing the LIFF app using the [Keep Memo](https://help.line.me/line/smartphone/pc?lang=en&contentId=20017696){rel="[\"nofollow\"]"} feature.
  - When accessing a URL scheme for [opening a LIFF app](/docs/line-login/using-line-url-scheme/#opening-a-liff-app) through a website redirection process, etc.
  - When the `chat_message.write` scope is disabled after the LIFF-to-LIFF transition. For more information, see [About the "chat_message.write" scope after transitioning between LIFF apps](/docs/liff/opening-liff-app/#about-chat-message-write-scope) in the LIFF documentation.
  - When the user doesn't grant the `chat_message.write` scope.

  You can get the screen type from which the LIFF app is launched using the [`liff.getContext()`](#get-context) method.
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff
        .sendMessages([
          {
            type: "text",
            text: "Hello, World!",
          },
        ])
        .then(() => {
          console.log("message sent");
        })
        .catch((err) => {
          console.log("error", err);
        });
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.sendMessages(messages);
```

#### Arguments

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  messages

  #undefined
  Array of objects

  [Message objects](/reference/messaging-api/#message-objects)  

  Max: 5  

  You can send the following types of Messaging API messages:

  - [Text message](/docs/messaging-api/message-types/#text-messages). However, the `emojis` property and the `quoteToken` property aren't available.
  - [Sticker message](/docs/messaging-api/message-types/#sticker-messages). However, the `quoteToken` property isn't available.
  - [Image message](/docs/messaging-api/message-types/#image-messages).
  - [Video message](/docs/messaging-api/message-types/#video-messages). However, the `trackingId` property isn't available.
  - [Audio message](/docs/messaging-api/message-types/#audio-messages).
  - [Location message](/docs/messaging-api/message-types/#location-messages).
  - [Template message](/docs/messaging-api/message-types/#template-messages). However, only a [URI action](/docs/messaging-api/actions/#uri-action) can be set as an action.
  - [Flex Message](/docs/messaging-api/message-types/#flex-messages). However, only a [URI action](/docs/messaging-api/actions/#uri-action) can be set as an action.
  :::
::

When a template message or a Flex Message is sent from the user using the `liff.sendMessages()` method, no webhook is sent from the LINE Platform. For all other [message types](/docs/messaging-api/message-types/), a webhook is sent. When image, video, and audio messages are sent using the `liff.sendMessages()` method, resulting webhook events contain the `contentProvider.type` property whose value is `external`. For more information, see [Message event](/reference/messaging-api/#message-event) in the Messaging API reference.

#### Return value

Returns a `Promise` object.

- If the message is sent successfully, the `Promise` is resolved. No value is passed.
- If you fail to send the message, the `Promise` is rejected and [`LiffError`](#liff-errors) is passed.
