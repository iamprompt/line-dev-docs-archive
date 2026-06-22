---
title: Opening a LIFF app
navigation: true
description: ''
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/liff/opening-liff-app
__hash__: BT6GIk0kTu-Wx8LgvPayIhi48yJ5sdKMlpcnxM73nrU
seo:
  title: Opening a LIFF app
  description: ''
---

# :page-title

:markdown-controlsThe LIFF app can be opened in a :glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"} or an :glossary-tooltip[[external browser](/glossary/#external-browser)]{glossary-id="external-browser"}.

This page describes how a user opens a LIFF app and how the LIFF app behaves when opened.

:toc## User actions when opening the LIFF app

This section describes user actions when opening the LIFF app.

1. The user accesses the ::glossary-tooltip{glossary-id="liff-url"}
[LIFF URL](/glossary/#liff-url)
::

.  
The LIFF URL is issued when [adding the LIFF app to your channel](/docs/liff/registering-liff-apps/).  

For example, send the LIFF URL to a chat in the LINE app and tap the LIFF URL displayed in the bubble.  
![](/media/liff/open-liff-app.png){className="[\"w-fix-320\"]"}
2. If authorization is required from the user, a channel consent screen will appear. The user agrees to grant the required permissions to the LIFF app on the consent screen.  
![Consent screen](/media/liff/opening-liff-app/channel-consent-screen-en.png){className="[\"border\",\"w-fix-280\"]"}
3. The LIFF app opens.  
![LIFF browser](/media/liff/overview/liffBrowser.png){className="[\"border\"]"}

### Environment where the LIFF app opens when a user access the LIFF URL

When users access the LIFF URL, the LIFF app will open in a :glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"} on the LINE app, or an :glossary-tooltip[[external browser](/glossary/#external-browser)]{glossary-id="external-browser"}.

LIFF URL is compatible with [universal links](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content/){rel="[\"nofollow\"]"} on iOS and [app links](https://developer.android.com/training/app-links){rel="[\"nofollow\"]"} on Android. So if you open a LIFF URL from outside the LINE app, the LIFF browser will open on the LINE app.

However, depending on the specifications of the user's OS, even on external browsers such as Safari or Chrome, universal links or app links may not work and the LIFF browser may not open on the LINE app. In addition, when accessing a LIFF URL on a native app other than the LINE app, whether the LIFF app is opened in the external browser or the LIFF browser depends on the WebView specifications of the native app.

For these reasons, we don't guarantee in which environment the LIFF app will open when the LIFF URL is accessed. Note that even if users access the LIFF URL, the LIFF browser may not open on the LINE app.

## Behaviors from accessing the LIFF URL to opening the LIFF app

The following describes how to set up two redirect destinations so that the LIFF app opens correctly when users access the LIFF URL, and when to execute the `liff.init()` method when users access the LIFF URL.

| Redirect to            | Description                                                                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Primary redirect URL   | The first time users access the LIFF URL, they are redirected from the LIFF server to this URL. When users are redirected to this URL, execute the `liff.init()` method. |
| Secondary redirect URL | When executing the `liff.init()` method, users are redirected to this URL. Once users are redirected to this URL, the LIFF app page is displayed.                        |

![Redirect flow](/media/liff/redirect-flow-en.png){className="[\"w-fix-680\",\"bg-border\"]"}

### Create a LIFF URL

The LIFF URL is a URL that indicates the LIFF server provided by LY Corporation. A LIFF URL is issued by [adding the LIFF app to your channel](/docs/liff/registering-liff-apps/).

Example of LIFF URL: `https://liff.line.me/1234567890-AbcdEfgh`

#### Supported LIFF URLs

The following LIFF URLs are supported:

- `https://liff.line.me/{liffId}`
- `https://miniapp.line.me/{liffId}` (only available in LINE MINI Apps)

::admonition
---
title: '"https://line.me/R/app/{liffId}" and "line://app/{liffId}" are deprecated'
type: note
---
The following LIFF URL formats used in [LIFF v1](/docs/liff/versioning-policy/#life-cycle-schedule) are :glossary-tooltip[[deprecated](/glossary/#deprecated)]{glossary-id="deprecated"}:

- `https://line.me/R/app/{liffId}`
- `line://app/{liffId}`
::

### Create a primary redirect URL

The primary redirect URL is always the URL specified in the **Endpoint URL** of the LINE Developers Console.

::admonition
---
title: Additional information specified in the LIFF URL
type: note
---
All additional information specified in the primary redirected URLs (e.g. `path_A/?key1=value1#URL-fragment`) is included in the `liff.state` query parameter.

e.g. `https://example.com/2020campaign/?key=value&liff.state=urlencoded(path_A/?key1=value1#URL-fragment)`

If you don't specify any additional information in the LIFF URL, the `liff.state` query parameter is omitted.
::

### Create a secondary redirect URL

The secondary redirect URL depends on the URL that users access.

The paths and query parameters (`/2020campaign/?key=value`) specified in the **Endpoint URL** of the LINE Developers Console are included in the secondary redirect URL.

| URL that users access                                                                                                     | Secondary redirect URL                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LIFF URL (1)   e.g. `https://liff.line.me/{liffId}`                                                                       | The URL specified in **Endpoint URL** of the LINE Developers Console.   e.g. `https://example.com/2020campaign/?key=value`                                                                                                                                                                                                                                                                                                                    |
| The LIFF URL including additional information (2)   e.g. `https://liff.line.me/{liffId}/path_A/?key1=value1#URL-fragment` | As shown in (2) of the below figure, the URL is a combination of 3 types of information.- The domain name specified in **Endpoint URL** (`https://example.com`) - The paths and query parameters (`/2020campaign/?key=value`) specified in **Endpoint URL**. - The additional information specified in the LIFF URL (`/path_A/?key1=value1#URL-fragment`)  e.g. `https://example.com/2020campaign/path_A/?key=value&key1=value1#URL-fragment` |

![Endpoint URL](/media/liff/endpoint-url.png){className="[\"bg-border\"]"}

## Opening a LIFF app from another LIFF app (LIFF-to-LIFF transition)

When a LIFF app is open in the LIFF Browser, you can click on the link to another LIFF app to display the other app while keeping the LIFF Browser open. Since the LIFF browser doesn't close during LIFF-to-LIFF transitions, you can click the return button on the LIFF browser to return to the LIFF app from which you transitioned.

- [The conditions that make LIFF-to-LIFF transitions possible](#conditions-liff-to-liff)
- [Behavior based on screen size of the LIFF app](#behavior-by-screen-size)
- [About the "chat_message.write" scope after transitioning between LIFF apps](#about-chat-message-write-scope)
- [Get URL from before LIFF-to-LIFF transition](#using-liff-referrer)
- [Message displayed when another LIFF app is opened](#messages-liff-to-liff)

![LIFF-apps-transition](/media/liff/liff_transition.png){className="[\"w-fix-640\"]"}

::admonition{title="Unexpected behaviors" type="note"}
If you are using an older version of the LIFF SDK, you may experience the following unexpected behaviors:

- Despite that you moved from a LIFF URL specified by Path (`/path`) to a different LIFF app, you still end up on the URL specified in the **Endpoint URL** of the LINE Developers Console.
- If you click **Cancel** on the [Consent screen](/docs/line-login/link-a-bot/) where you seek user authorization, you must close your LIFF browser once.
- If the destination is a LINE MINI App, the design of the LIFF browser header does not automatically change.

When designing to enable transitions between multiple LIFF apps, it is recommended that you use the latest version of the LIFF SDK.
::

### The conditions that make LIFF-to-LIFF transitions possible

LIFF-to-LIFF transitions are possible when all of the following conditions are met:

- LIFF SDK v2.4.1 or later
- The original LIFF app screen is set to `Full` display
- The LIFF app to which you are moving is correctly initialized by `liff.init()`

### Behavior based on screen size of the LIFF app

- If the screen size of the original LIFF app is set to `Tall` or `Compact`, the browser will initially close regardless of the screen size of the LIFF app to which you want to move, before the destination LIFF app is displayed.
- If the screen size of the original LIFF app is set to `Full`, the screen size of the destination LIFF app will be displayed in `Full`, regardless of the destination LIFF app screen size specification.
- If the screen size of the original LIFF app is set to `Full` and the screen size of the transition destination LIFF app is `Tall` or `Compact`, [the action button](/docs/liff/overview/#action-button) will not be displayed in the LIFF app after the transition.

### About the "chat_message.write" scope after transitioning between LIFF apps

The `chat_message.write` scope after a transitioning between LIFF apps is enabled or disabled depending on the transition destination URL.

| Transition destination URL                | Example URL                                                      | The `chat_message.write` scope after transition |
| ----------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------- |
| LIFF URL                                  | `https://liff.line.me/{liffId}`                                  | **Enabled**                                     |
| LIFF URL including additional information | `https://liff.line.me/{liffId}/path_A/?key1=value1#URL-fragment` | **Enabled**                                     |
| Endpoint URL                              | `https://example.com`                                            | **Disabled**                                    |

If the `chat_message.write` scope is enabled, the [`liff.sendMessages()`](/reference/liff/#send-messages) method is available in the transition destination LIFF app.

### Get URL from before LIFF-to-LIFF transition

When you open a LIFF app during a LIFF-to-LIFF transition, the query parameter, `liff.referrer`, will be added to the LIFF app URL after the transition. The value of `liff.referrer` will be set to the [percent-encoded](https://en.wikipedia.org/wiki/Percent-encoding){rel="[\"nofollow\"]"} URL of the address of the `Referer` request header received by the LIFF server during the LIFF-to-LIFF transition. By checking the value of the `liff.referrer`, you can get the URL before the transition.

::admonition
---
title: >-
  In LINE version 12.13.0 to 13.19.x, liff.referrer isn't added to the LIFF app
  URL after a LIFF-to-LIFF transition
type: note
---
For more information, see the news on November 30, 2023, [We've fixed a bug in LINE version 12.13.0 or later where liff.referrer wasn't added after a LIFF-to-LIFF transition](/news/2023/11/30/liff-update-line-13-20-0/).
::

The following is an example of how `liff.referrer` is given during LIFF-to-LIFF transition.

|               | LIFF app URL before transition | URL of the link                                 | LIFF app URL after transition (after executing `liff.init()` method)                |
| ------------- | ------------------------------ | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Given**     | `https://first.example.com/`   | `https://liff.line.me/{LIFF ID}`    (LIFF URL)  | `✅ https://second.example.com/?liff.referrer=https%3A%2F%2Ffirst.example.com%2F` *1 |
| **Not given** | `https://first.example.com/`   | `https://second.example.com/`    (Endpoint URL) | `❌ https://second.example.com/` *2                                                  |

*1 In addition to `liff.referrer`, other `liff.*` query parameters may be added to the LIFF app URL after the transition.  
*2 If the endpoint URL of the LIFF app is opened directly, `liff.referrer` won't be added.

### Message displayed when another LIFF app is opened

When you access another URL from a LIFF app, a message saying, "Switched to the {LIFF app name} app." may be displayed.

This message is displayed when you open a LIFF app with a different LIFF ID than LIFF app that was opened first (the LIFF app from which the transition is made). Whether or not this message is displayed has nothing to do with the success of LIFF-to-LIFF transitions.

![](/media/liff/switched-to-another-app-en.png){className="[\"w-fix-240\"]"}
