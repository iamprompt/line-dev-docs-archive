---
title: Custom features
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-mini-app/discover/custom-features
__hash__: A4Bm8mqdI2vxWke7UObSIFxp6_ZIj-56H6mtILyyQHg
seo:
  title: Custom features
  description: null
---

# :page-title

:markdown-controlsYou can add the following features to your LINE MINI App to further enhance the user experience. The features you can use depend on whether the LINE MINI App is an unverified MINI App or a verified MINI App.

| Feature                                                                                                         | Unverified MINI App | Verified MINI App |
| --------------------------------------------------------------------------------------------------------------- | ------------------- | ----------------- |
| [Service messages](#service-messages)                                                                           | ❌                   | ✅                 |
| [Custom Path](#custom-path)                                                                                     | ❌                   | ✅                 |
| [Add a shortcut to your LINE MINI App to the home screen of the user's device](#create-shortcut-on-home-screen) | ❌                   | ✅                 |
| [Common Profile Quick-fill](#quick-fill)                                                                        | ❌                   | ✅                 |
| [Display your LINE MINI App name in the header](#display-mini-app-name-in-header)                               | ❌                   | ✅                 |
| [Inducing users to add your Official Account as a friend](#OA-friend)                                           | ✅                   | ✅                 |
| [Custom action button](#custom-action-button)                                                                   | ✅                   | ✅                 |
| [Using payment systems](#using-payment-systems)                                                                 | ✅                   | ✅                 |
| [Place ads](#place-ads)                                                                                         | ✅                   | ✅                 |

For unverified MINI Apps, the domain name of the URL is displayed in the header, whereas for verified MINI Apps, the LINE MINI App name is displayed in the header instead of the domain name of the URL. For more information, see [LINE MINI App UI components](/docs/line-mini-app/discover/ui-components/#header).

## Service messages

Service messages can be used if you want to send users the confirmation of their restaurant or accommodation reservations.

Service messages is a feature whereby LINE MINI App notifies the user of information the user should know regarding the user's request.

Service messages sent from LINE MINI Apps are displayed in chat rooms determined for each region that provides the LINE MINI App, regardless of the type of LINE MINI App.

| Japan                                                                                                        | Thailand                                                                                                           | Taiwan                                                                                                         |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| LINEミニアプリ お知らせ                                                                                               | LINE MINI App Notice                                                                                               | LINE MINI App 通知                                                                                               |
| ![LINEミニアプリ お知らせ](/media/line-mini-app/mini_service_notifier_jp.png){className="[\"border\",\"w-fix-280\"]"} | ![LINE MINI App Notice](/media/line-mini-app/mini_service_notifier_th.png){className="[\"border\",\"w-fix-280\"]"} | ![LINE MINI App 通知](/media/line-mini-app/mini_service_notifier_tw.png){className="[\"border\",\"w-fix-280\"]"} |

To send a service message, use the service message API. For details, see [Sending service messages](/docs/line-mini-app/develop/service-messages/).

::admonition{title="Conditions to sending service messages" type="note"}
You are allowed to send service messages only as a confirmation or response to a user action on LINE MINI App. Advertisements and event notifications are prohibited, including information on discounts, shopping rewards, new products, discount coupons or promotions. For more information about the service message conditions, see [Conditions for service messages](/docs/line-mini-app/service/service-operation/#conditions-for-service-messages).
::

## Custom Path

Custom Path is a unique string that is set in the LIFF URL of the published channel. The Custom Path feature allows you to set your own string in the LIFF URL, as follows:

| Example URL with LIFF ID                 | Example of setting Custom Path        |
| ---------------------------------------- | ------------------------------------- |
| `https://miniapp.line.me/123456-abcdefg` | `https://miniapp.line.me/cony_coffee` |

For example, by setting a unique name as a Custom Path, users will be able to identify which brand or shop's LINE MINI App from the URL. For more information on Custom Path, see [Configuring Custom Path](/docs/line-mini-app/develop/custom-path/).

## Add a shortcut to your LINE MINI App to the home screen of the user's device

The user can add a shortcut to your LINE MINI App to the home screen of the user's device. This allows the user to access your LINE MINI App directly from the home screen of the user's device.

![](/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-en.png){className="[\"border\",\"w-fix-240\",\"inline-block\",\"mb-0-important\",\"mr-2\"]"}![](/media/line-mini-app/develop/add-to-home-screen/shortcut-ios-en.png){className="[\"w-fix-240\",\"inline-block\"]"}

Using this feature for services that users frequently use, such as membership cards and mobile ordering, can improve the user experience.

For more information, see [Add a shortcut to your LINE MINI App to the home screen of the user's device](/docs/line-mini-app/develop/add-to-home-screen/).

## Common Profile Quick-fill

Quick-fill is a feature that automatically fills in the necessary profile information when you tap **Auto-fill** in LINE MINI Apps. The information from the Common Profile set up in the Account Center can be easily used in LINE MINI Apps. For more information, see [Overview of Common Profile Quick-fill](/docs/line-mini-app/quick-fill/overview/).

![](/media/line-mini-app/quick-fill/quick-fill-3-steps.png){className="[\"bg-border\",\"w-fix-680\"]"}

By implementing Quick-fill in LINE MINI Apps, users can automatically fill in required information such as addresses and phone numbers with a single tap of a button. This eliminates the need for manual input, making it more convenient for users when making reservations at stores or placing orders on online stores.

## Display your LINE MINI App name in the header

The [header](/docs/line-mini-app/discover/ui-components/#header) of a verified MINI App displays the title, LINE MINI App name, and verified badge. For unverified MINI Apps, the title and the domain name of the endpoint URL are displayed.

![](/media/line-mini-app/line-mini-app-header-en.png){className="[\"bg-border\"]"}

For more information, see [Header](/docs/line-mini-app/discover/ui-components/#header) section in the [LINE MINI App UI components](/docs/line-mini-app/discover/ui-components/).

## Inducing users to add your Official Account as a friend

With LINE MINI App, you can induce users to add your Official Account as a friend from the [verification screen](/docs/line-mini-app/develop/configure-console/#verification-screen) or the [channel consent screen](/docs/line-mini-app/develop/configure-console/#consent-screen-settings), using the add friend option.

For more information, see [Add friend option](/docs/line-mini-app/service/line-mini-app-oa/#link-a-line-official-account-with-your-channel).

![bot link feature 1](/media/line-mini-app/miniguide-incremental-01-en.png){className="[\"border\",\"w-fix-280\",\"inline-block\",\"mb-0-important\",\"mr-2\"]"}![bot link feature 2](/media/line-mini-app/miniguide-incremental-02-en.png){className="[\"border\",\"w-fix-280\",\"inline-block\"]"}

You can also use the [`liff.requestFriendship()`](/reference/liff/#request-friendship) method to display a subwindow at any time, prompting users to add your LINE Official Account as a friend or unblock it.

## Custom action button

The [built-in action button](/docs/line-mini-app/discover/builtin-features/#action-button) is provided to enable users to easily share LINE MINI App among friends, but there is also the option of [implementing a custom action button](/docs/line-mini-app/develop/share-messages/).

![](/media/line-mini-app/mini_share_custom.png){className="[\"w-fix-800\"]"}

## Using payment systems

You can integrate payment methods such as LINE Pay into your LINE MINI App. Additionally, only in Japan, you can use the [LINE MINI App in-app purchase](/docs/line-mini-app/in-app-purchase/overview/) feature.

The payment systems available on LINE MINI Apps vary by country or region.

| Payment methods                       | Japan | Taiwan | Thailand |
| ------------------------------------- | ----- | ------ | -------- |
| LINE Pay                              | ❌     | ✅      | ✅        |
| In-app purchase for the LINE MINI App | ✅     | ❌      | ❌        |
| Other methods                         | ✅     | ✅      | ✅        |

For more information, see [Handling payments](/docs/line-mini-app/develop/payment/).

![mini intro linepay](/media/line-mini-app/mini_intro_linepay.png){className="[\"w-fix-520\"]"}

## Place ads

LINE MINI Apps can be monetized by displaying [LY Ads Network Display Ads (Web)](https://www.lycbiz.com/jp/partner/adnetwork/ly-ads/){rel="[\"nofollow\"]"} (only available in Japanese). Ads can be placed in both verified and unverified MINI Apps, but the service must be provided in Japan.

For more information, see [Place ads in LINE MINI Apps](/docs/line-mini-app/service/line-mini-app-ads/).
