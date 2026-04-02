---
title: You can now send test messages from Flex Message Simulator
navigation: true
description: >-
  Messaging API has a feature called Flex Message that can be written in JSON
  format to customize the layout. To make it easier for developers to try out
  Flex Messages, we introduced a new feature to send test messages with Flex
  Message Simulator.
meta: >-
  {"date":"2021-05-20 00:00 UTC","tags":"Flex Message Simulator, Messaging
  API","locale":"en"}
path: /en/_partials/news/2021/2021-05-20-send-test-message-flex-message-simulator
__hash__: n2-90s9mXNVrFDLW-AnTv0dJrosZpHxP3qVgykTC8po
seo:
  title: You can now send test messages from Flex Message Simulator
  description: >-
    Messaging API has a feature called Flex Message that can be written in JSON
    format to customize the layout. To make it easier for developers to try out
    Flex Messages, we introduced a new feature to send test messages with Flex
    Message Simulator.
---

Messaging API has a feature called Flex Message that can be written in JSON format to customize the layout. To make it easier for developers to try out Flex Messages, we introduced a new feature to send test messages with Flex Message Simulator.

To send a test message, go to [Flex Message Simulator](/flex-simulator/). Log in to Flex Message Simulator with the same LINE account that you have logged in to the LINE Developers Console.

On the top right corner, click the **Send...** button.

![Send button shown on the top right corner of Flex Message Simulator](/media/news/fms-buttons-en.png){className="[\"border\",\"w-fix-360\"]"}

You'll see a "Send Message" popup, listing the LINE account you've logged in with as a destination by default.

::admonition
---
title: About the account to log in to Flex Message Simulator
type: note
---
If the account you're logged in to the LINE Developers Console is a business account and it's not linked to a LINE account, the account won't be shown as a destination.

You also need to be friends with the [Flex Message Simulator Official Account](https://line.me/R/ti/p/@flexmessagesim?from=page){rel="[\"nofollow\"]"} before you can receive test messages.
::

![Popup showing the destination and a send button](/media/news/fms-select-destination-en.png){className="[\"border\",\"w-fix-360\"]"}

To send a test Flex Message to this account, select the account and click the **Send** button. You should receive a sample Flex Message and a message indicating that it's a sample message in your LINE Account.

![Test Flex Message](/media/news/fms-test-message-en.png){className="[\"border\",\"w-fix-360\"]"}

You can also add alternative destinations by clicking **Register destination** in the popup.

![Popup showing the register destination button](/media/news/fms-register-destination-en.png){className="[\"border\",\"w-fix-360\"]"}

Scan the displayed QR code with the LINE app of an account you'd like to register as a destination. You'll receive a verification code on your LINE app.

![Popup display QR code](/media/news/fms-qr-code-en.png){className="[\"border\",\"w-fix-360\"]"}

Once you enter and confirm the verification code in the Flex Message Simulator, your alternative destination will be registered.

::admonition
---
title: Number of alternative destinations you can register
type: tip
---
You can only register 1 alternative destination at a time. If you have already registered an alternative destination and register another one, the previous destination will be unregistered.
::

There are no special applications that developers need to submit to use this feature.
