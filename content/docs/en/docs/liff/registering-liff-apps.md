---
title: Adding a LIFF app to your channel
navigation: true
description: ''
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/liff/registering-liff-apps
__hash__: 6SkWn1p6vW0NUyOJGZtVw1LiVs_vf6e3SvKx3SxdIsQ
seo:
  title: Adding a LIFF app to your channel
  description: ''
---

# :page-title

:markdown-controlsWhen you add a LIFF app to a LINE Login channel on the [LINE Developers Console](/console/), the LIFF app can run either in LINE or in an external browser.

::admonition
---
title: We recommend creating a LIFF app as a LINE MINI App
type: tip
---
In the future, LIFF and the LINE MINI App will be integrated into a single brand. As a result of this integration, LIFF will be integrated into the LINE MINI App. For this reason, we recommend that you create a new LIFF app as a LINE MINI App. For more information, see the news from [February 12, 2025](/news/2025/02/12/line-mini-app/).
::

## Before you begin

Make sure you've done the following:

- [Created a channel](/docs/liff/getting-started/) for your app.
- Deployed the LIFF app on any server according to the instructions in [Trying a LIFF starter app](/docs/liff/trying-liff-app/) or [Developing a LIFF app](/docs/liff/developing-liff-apps/).

## Adding the LIFF app to your channel

You can add up to 30 LIFF apps to each channel.

1. On the [LINE Developers Console](/console/), select the LINE Login channel to which you want to add the LIFF app, then click the **LIFF** tab.
2. Click **Add**.
3. Concatenate the following items in the order listed. You can always change your settings later:  
**Basic information**| Item                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Location displayed to users                                                                                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LIFF app name        | Name of the LIFF app. The LIFF app name can't include "LINE" or similar strings, or inappropriate strings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | - [Message displayed when another LIFF app is opened](/docs/liff/opening-liff-app/#messages-liff-to-liff)   - [Multi-tab view](/docs/liff/overview/#multi-tab-view) |
| Size                 | Size of the LIFF app view. Select one of:   - `Compact`   - `Tall`   - `Full`   ![undefined](/media/liff/overview/viewTypes.png){width="375px"}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -                                                                                                                                                                   |
| Endpoint URL         | The URL of the LIFF web app (e.g. `https://example.com`). This URL will be used when the LIFF app is launched using the LIFF URL.   The URL scheme must be **https**. URL fragments (#URL-fragment) can't be specified.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [LIFF browser](/docs/liff/overview/#liff-browser) header (domain name only)                                                                                         |
| Scopes *1            | Scope required for some LIFF SDK methods to function.   - `openid`: Scope required to use [`liff.getIDToken()`](/reference/liff/#get-id-token) and [`liff.getDecodedIDToken()`](/reference/liff/#get-decoded-id-token).   - `email`: Scope required to get the user's email address using [`liff.getIDToken()`](/reference/liff/#get-id-token) or [`liff.getDecodedIDToken()`](/reference/liff/#get-decoded-id-token). *2   - `profile`: Scope required to use [`liff.getProfile()`](/reference/liff/#get-profile) or [`liff.getFriendship()`](/reference/liff/#get-friendship).   - `chat_message.write`: Scope required to use [`liff.sendMessages()`](/reference/liff/#send-messages). Depending on your account type, this option may appear under **View all**. *3 | Permission consent screen when launching LIFF app                                                                                                                   |
| Add friend option *4 | The setting for [add friend option](/docs/line-login/link-a-bot/)   - `On (normal)`: Adds the option of adding the LINE Official Account as a friend on the LIFF app permission consent screen.   - `On (aggressive)`: Displays a screen after the LIFF app permission consent screen to confirm whether the user wants to add the LINE Official Account as a friend.   - `Off`: Doesn't display the option of adding the LINE Official Account as a friend.                                                                                                                                                                                                                                                                                                            | Permission consent screen when launching LIFF app                                                                                                                   |

  
**Options**| Item        | Description                                                                                                                                                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scan QR     | Enable this setting when using [`liff.scanCodeV2()`](/reference/liff/#scan-code-v2) in the LIFF apps added to this channel.                                                                                                             |
| Module mode | Enable this setting when using the LIFF app in module mode. When **Module mode** is enabled, the action button in the header is hidden. This option will be displayed only if you have selected **Full** for size of the LIFF app view. |

  
*1 For more information on scopes displayed to corporate customers who are registered to use the scopes, see [LINE Profile+](/docs/partner-docs/line-profile-plus/) under the options for corporate customers documentation.  
 *2 Displayed only if you applied for OpenId Connect email permission in a LINE Login channel.  
 *3 The `chat_message.write` scope may be disabled in a LIFF app after the LIFF-to-LIFF transition. For more information, see [About the "chat_message.write" scope after transitioning between LIFF apps](/docs/liff/opening-liff-app/#about-chat-message-write-scope).  
 *4 Displayed only for LINE Login channels.
4. Click **Add**.  
When adding the LIFF app, a LIFF ID and LIFF URL are created.| Item     | Description                                                                                                                                                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LIFF ID  | LIFF app ID.   e.g. `1234567890-AbcdEfgh`                                                                                                                                                                                                                 |
| LIFF URL | The URL to access to LIFF apps. When users access the LIFF URL, they are redirected through the LIFF server provided by LY Corporation to the LIFF app server (endpoint URL) provided by the developer.   e.g. `https://liff.line.me/1234567890-AbcdEfgh` |

## The order of LIFF apps on the LIFF tab

On the **LIFF** tab of LINE Login channels, the LIFF apps will be displayed in the following order:

1. The LIFF apps added to the LINE Login channel on or after May 23, 2023 will be displayed in descending order of the date added
2. The LIFF apps added to the LINE Login channel before May 23, 2023 will be displayed in no particular order

![Examples of LIFF apps displayed on the LIFF tab](/media/liff/order-of-liff-apps-en.webp){className="[\"border\"]"}

## Other operations

You can also perform these operations from the **LIFF** tab of the LINE Developers Console.

- Edit LIFF app settings
- Delete the LIFF app from your channel

## Next steps

After adding the LIFF app to your channel, try opening it.

- [Open the LIFF app](/docs/liff/opening-liff-app/)
