---
title: LIFF browser can now be minimized on LINE for iOS version 12.8.0 or later
navigation: true
description: >-
  A LIFF browser opened in a chat room can now be minimized on LINE for iOS
  version 12.8.0 or later.
meta: '{"date":"2022-06-02 00:00 UTC","tags":"liff, line-mini-app","locale":"en"}'
path: /en/_partials/news/2022/2022-06-02-liff-minimize-for-iphone
__hash__: 2Gt7ID1FG7aFY-k5wpwDwXwuB7PKj_qeTEPLL7p_l-Q
seo:
  title: LIFF browser can now be minimized on LINE for iOS version 12.8.0 or later
  description: >-
    A LIFF browser opened in a chat room can now be minimized on LINE for iOS
    version 12.8.0 or later.
---

A :glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"} opened in a chat room can now be minimized on LINE for iOS version 12.8.0 or later.

![LIFF browser minimization](/media/liff/minimizing-liff-app/liff-minimize-en.png)

Previously, when viewing a LIFF browser in a chat room, the user had to close the LIFF browser to perform another action, such as sending a message to the chat room. To return to the LIFF browser after performing the action, the user had to reopen the LIFF browser.

On LINE for iOS version 12.8.0 or later, the user no longer need to close a LIFF browser to perform another action. By minimizing the LIFF browser, the user can suspend viewing the LIFF browser and perform the action. After performing the action, the user can resume viewing the LIFF browser by maximizing the LIFF browser.

### Conditions of use for LIFF browser minimization

To minimize a LIFF browser, the following conditions must be met:

- LINE for iOS version 12.8.0 or later
- `Full` is specified as the [screen size](/docs/liff/overview/#screen-size) for your LIFF app
- [`chat_message.write` scope](/docs/liff/registering-liff-apps/#registering-liff-app) is off for your LIFF app
- The LIFF browser isn't overlapping on another modal

::admonition
---
title: The LIFF app after LIFF-to-LIFF transition must meet the conditions of use
type: note
---
To minimize the LIFF browser after [LIFF-to-LIFF transition](/docs/liff/opening-liff-app/#move-liff-to-liff), the LIFF app after transition must meet the conditions of use.

For example, as described in [Behavior based on screen size of the LIFF app](/docs/liff/opening-liff-app/#behavior-by-screen-size) in the LIFF documentation, the LIFF app after transition will be displayed in `Full`, regardless of the screen size specified. However, if `Tall` or `Compact` is specified as the screen size for the LIFF app after transition, the LIFF app after transition won't satisfy the conditions of use for LIFF browser minimization.
::

LIFF browser minimization will be available on LINE for iPadOS and Android, but the date is yet to be determined.

For more information on minimizing LIFF browser, see [Minimizing LIFF browser](/docs/liff/minimizing-liff-browser/) in the LIFF documentation.
