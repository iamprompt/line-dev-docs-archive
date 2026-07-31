---
title: Share Target Picker
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/share-target-picker
__hash__: ZV0EGI6Ji7oj73-JCa5anCMqhJv-AXikf3ly5xxPuYE
seo:
  description: ''
---

### liff.shareTargetPicker()

::reference-with-code
  :::reference-content
  Displays the target picker (a screen for selecting a recipient) and sends a message created by the developer to the selected target. The message appears to each selected recipient as if it were sent by the user.

  In the target picker, users can select recipients from groups, friends, and chats. OpenChat isn't included.

  For more information about selectable recipients, see [Recipients that can be selected in the share target picker](/docs/liff/developing-liff-apps/#share-target-picker-displayed-targets) in the LIFF documentation.

  #### Conditions for using the liff.shareTargetPicker() method

  To use the `liff.shareTargetPicker()` method, all of the following conditions must be met:

  - The user is logged in.
  - The share target picker is enabled in the [LINE Developers Console](/console/). For more information, see [Using the share target picker](/docs/liff/developing-liff-apps/#using-share-target-picker) in the LIFF documentation.

    ::::admonition
    ---
    title: >-
      The email address login screen may be displayed when executing the
      liff.shareTargetPicker() method in a smartphone's external browser
    type: note
    ---
    To display the target picker in an :glossary-tooltip[[external browser](/glossary/#external-browser)]{glossary-id="external-browser"}, a [Single Sign On (SSO) login](/docs/line-login/integrate-line-login/#line-sso-login) session is required.

    In the login process using [auto login](/docs/line-login/integrate-line-login/#line-auto-login), an SSO login session isn't issued. As a result, when the `liff.shareTargetPicker()` method is executed, the target picker may not be displayed, and the [email address login](/docs/line-login/integrate-line-login/#mail-or-qrcode-login) screen may be displayed instead.

    After the user logs in by entering their email address and password, an SSO login session is issued, and the target picker will be displayed properly.
    ::::

    ::::admonition
    ---
    title: >-
      We don't retrieve the number of people to whom a user has sent a message using
      the share target picker
    type: note
    ---
    In order to protect user privacy, we neither collect nor provide information on how many people received a message from a user through the share target picker.
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff
        .shareTargetPicker(
          [
            {
              type: "text",
              text: "Hello, World!",
            },
          ],
          {
            isMultiple: true,
          },
        )
        .then(function (res) {
          if (res) {
            // succeeded in sending a message through TargetPicker
            console.log(`[${res.status}] Message sent!`);
          } else {
            // sending message canceled
            console.log("TargetPicker was closed!");
          }
        })
        .catch(function (error) {
          // something went wrong before sending a message
          console.log("something wrong happen");
        });
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.shareTargetPicker(messages, options);
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
  - [Image message](/docs/messaging-api/message-types/#image-messages).
  - [Video message](/docs/messaging-api/message-types/#video-messages). However, the `trackingId` property isn't available.
  - [Audio message](/docs/messaging-api/message-types/#audio-messages).
  - [Location message](/docs/messaging-api/message-types/#location-messages).
  - [Template message](/docs/messaging-api/message-types/#template-messages). However, only a [URI action](/docs/messaging-api/actions/#uri-action) can be set as an action.
  - [Flex Message](/docs/messaging-api/message-types/#flex-messages). However, only a [URI action](/docs/messaging-api/actions/#uri-action) can be set as an action.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  options

  #undefined
  Object

  Share target picker options
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  options.isMultiple

  #undefined
  Boolean

  Specifies whether or not to allow users to select multiple message recipients through the target picker, using either of these values. The default value is `true`.

  - `true`: Users can select multiple recipients from their groups, friends, and chats.
  - `false`: Users can select only one of their friends as the recipient.
  :::
::

::admonition
---
title: >-
  Setting isMultiple to false doesn't guarantee that the message will be sent to
  only one friend
type: note
---
Even if you set the `isMultiple` property to `false`, you can still send a message to multiple users by calling the share target picker multiple times, or by re-sharing the same message to different recipients. To strictly allow a user to send a message to one friend only once, add a restriction when implementing the LIFF app.

Here's an example of sending a message containing a URL and restricting access to the URL.

1. Give the URL a unique token and send the message.
2. When the URL in the message is accessed, the server side verifies the token and restricts access by multiple users.
::

#### Return value

Returns a `Promise` object.

- If the message is sent correctly, `Promise` is resolved and an object with these properties will be passed.
  ::parameter-table

  :parameter-table-entry[#undefined
status

#undefined
String

`success`]
::
- If the user cancels and closes the target picker before sending the message, `Promise` is resolved but the object isn't passed.
- If a problem occurs before the target picker is displayed, `Promise` is rejected and `LiffError` is passed. For more information on the LiffError object, see [LIFF SDK errors](#liff-errors).

::admonition{title="Note" type="note"}
In the callback function where `Promise` has been resolved and rejected, the LIFF app won't work on some devices if the developer uses `alert()`.
::
