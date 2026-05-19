---
title: Managing LINE MINI App settings on LINE Developers Console
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-mini-app/develop/configure-console
__hash__: 7a4JIGWbW8NI1qdbziUctYOZ4-hjcmbHPxhie--Ws-c
seo:
  title: Managing LINE MINI App settings on LINE Developers Console
  description: null
---

# :page-title

:markdown-controlsSome information registered on the [LINE Developers Console](/console/) will be displayed to LINE MINI App users.

## Provider settings

The following settings information of the LINE MINI App channel provider is displayed to the users:

### **Settings** tab

| Items             | Display                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| **Provider name** | - [Verification screen](#verification-screen) - [Channel consent screen](#consent-screen-settings) |

## Channel settings

The following information on the LINE MINI App channel settings is displayed to the users:

### **Basic settings** tab

| Items                                     | Display Screen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Channel icon**                          | - [Action button](#built-in-share-settings) - [Multi-tab view](#multi-tab-view-settings) - [Verification screen](#verification-screen) - [Channel consent screen](#consent-screen-settings) - [Footer section of service message](#footer-section-of-service-message) - [Add Shortcut screen](#add-shortcut-screen)  Users recognize this image as the Channel icon of the LINE MINI App.                                                                                                                                                                                                                                          |
| **Channel name**                          | - [Action button](#built-in-share-settings) - [Multi-tab view](#multi-tab-view-settings) - [Verification screen](#verification-screen) - [Channel consent screen](#consent-screen-settings) - [Footer section of service message](#footer-section-of-service-message) - [Add Shortcut screen](#add-shortcut-screen)  Users recognize this text as the LINE MINI App name. **Channel name** is copied to the **LIFF app name** under the **Web app settings** tab.  Enter in English. To enter the channel name in any other languages such as Japanese, see [Multi-language support of the Channel consent screen](#localization). |
| **Channel description**                   | - [Verification screen](#verification-screen) - [Channel consent screen](#consent-screen-settings)  Enter in English. To enter the channel description in any other languages such as Japanese, see [Multi-language support of the Channel consent screen](#localization).                                                                                                                                                                                                                                                                                                                                                         |
| **Privacy policy URL**                    | [Channel consent screen](#consent-screen-settings)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Localization (multi-language support)** | [Channel consent screen](#consent-screen-settings)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

::admonition
---
title: Information that must be included in the channel description
type: note
---
If you have outsourced the development of your service's LINE MINI App, and the company that provides service through the LINE MINI App differs from the company that developed the said LINE MINI App, the **Channel description** must contain a statement indicating the following information:

- The service company name
- The development company name
- The actual company name(s) to whom you provide user data obtained through the LINE MINI App
::

### **Web app settings** tab

| Items            | Display Screen                              |
| ---------------- | ------------------------------------------- |
| **Endpoint URL** | [Add Shortcut screen](#add-shortcut-screen) |

## Action button

When a user shares a LINE MINI App page from the [action button](/docs/line-mini-app/discover/builtin-features/#action-button), the following information registered on the [LINE Developers Console](/console/) is displayed in the chat room to which the page is shared.

![Action button](/media/line-mini-app/mini_share_builtin_share.png){className="[\"w-fix-320\"]"}

| Information        | Settings                                  |
| ------------------ | ----------------------------------------- |
| LINE MINI App name | **Basic settings** tab > **Channel name** |
| LINE MINI App icon | **Basic settings** tab > **Channel icon** |

## Multi-tab view

When a user taps the [action button](/docs/line-mini-app/discover/builtin-features/#action-button), the following information registered on the [LINE Developers Console](/console/) is displayed in the [multi-tab view](/docs/line-mini-app/discover/builtin-features/#multi-tab-view).

![](/media/line-mini-app/discover/mini-multi-tab-view-en.png){className="[\"border\",\"w-fix-320\",\"border\"]"}

| Information        | Settings                                  |
| ------------------ | ----------------------------------------- |
| LINE MINI App name | **Basic settings** tab > **Channel name** |
| LINE MINI App icon | **Basic settings** tab > **Channel icon** |

## Verification screen

The following information registered on the [LINE Developers Console](/console/) is displayed on the [verification screen](/docs/line-mini-app/develop/channel-consent-simplification/#request-permissions-other-than-openid).

![](/media/line-mini-app/line-mini-app-playground-verification-screen-en.png){className="[\"border\",\"w-fix-320\"]"}

| Information        | Settings                                                                                        |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| LINE MINI App icon | **Basic settings** tab > **Channel icon**                                                       |
| LINE MINI App name | **Basic settings** tab > **Channel name**                                                       |
| Provider name      | **Settings** tab > **Provider name** of the provider to which the LINE MINI App channel belongs |
| Description        | **Basic settings** tab > **Channel description**                                                |

## Channel consent screen

The following information registered on the [LINE Developers Console](/console/) is displayed on the [channel consent screen](/docs/line-mini-app/develop/channel-consent-simplification/#authorization-flow-disabled).

![Channel consent screen](/media/line-mini-app/mini-permission-request-en.png){className="[\"border\",\"w-fix-320\"]"}

| Information        | Settings                                                                                        |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| LINE MINI App icon | **Basic settings** tab > **Channel icon**                                                       |
| LINE MINI App name | **Basic settings** tab > **Channel name**                                                       |
| Provider name      | **Settings** tab > **Provider name** of the provider to which the LINE MINI App channel belongs |
| Description        | **Basic settings** tab > **Channel description**                                                |
| Privacy policy URL | **Basic settings** tab > **Privacy policy URL**                                                 |

If the LINE MINI App is a verified MINI App, a verified badge will be displayed next to the LINE MINI App name. If the LINE MINI App provider isn't a certified provider, a note saying "LY Corporation hasn't verified this service provider." will be displayed.

### Multi-language support of the Channel consent screen

The LINE MINI App name and description on the Channel consent screen are displayed in the language set in the user's LINE settings. For example, if the user has the language of LINE set to Japanese, the Japanese channel name and channel description will be displayed.

| Information        | Settings                                                                                      |
| ------------------ | --------------------------------------------------------------------------------------------- |
| LINE MINI App name | **Channel basic settings** tab > **Localization (multi-language support)** > **Channel name** |
| Description        | **Basic settings** tab > **Localization (multi-language support)** > **Channel description**  |

::admonition{title="Note" type="note"}
- Be sure to localize in the major language(s) used in the countries to which you provide services through your LINE MINI App.
- All information pertaining to **Channel name** and **Channel description** is displayed in Englsih, unless **Localization (multi-language support)** has been enabled to support the language set in the user's LINE settings.
::

## Footer section of service message

From the footer section of the service message, the following information registered on the [LINE Developers Console](/console/) is used. For more information on service messages, see [Sending service messages](/docs/line-mini-app/develop/service-messages/).

![Service messages](/media/line-mini-app/mini_service_notifier.png){className="[\"border\",\"w-fix-320\"]"}

| Information        | Settings                                  |
| ------------------ | ----------------------------------------- |
| LINE MINI App name | **Basic settings** tab > **Channel name** |
| Image              | **Basic settings** tab > **Channel icon** |

## Add Shortcut screen

The following information registered on the [LINE Developers Console](/console/) is displayed on the Add Shortcut screen. For more information about the Add Shortcut screen, see [Add a shortcut to your LINE MINI App to the home screen of the user's device](/docs/line-mini-app/develop/add-to-home-screen/).

![](/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-en.png){className="[\"border\",\"w-fix-320\"]"}

| Information                | Settings                                    |
| -------------------------- | ------------------------------------------- |
| LINE MINI App name         | **Basic settings** tab > **Channel name**   |
| LINE MINI App icon         | **Basic settings** tab > **Channel icon**   |
| LINE MINI App endpoint URL | **Web app settings** tab > **Endpoint URL** |
