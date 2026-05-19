---
title: Add a shortcut to your LINE MINI App to the home screen of the user's device
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-mini-app/develop/add-to-home-screen
__hash__: O7lVn_Mvt6UJj-wIMO7SG4DvO1SQ4cNGqiZGTIi1rMM
seo:
  title: Add a shortcut to your LINE MINI App to the home screen of the user's device
  description: null
---

# :page-title

:markdown-controls::admonition
---
title: This feature can only be used for verified MINI Apps
type: tip
---
This feature is only available for verified MINI Apps. For unverified MINI Apps, you can test the feature on the internal channel for Developing, but you can't use the feature on the internal channel for Published.
::

The user can add a shortcut to your LINE MINI App to the home screen of the user's device.

Tapping **Add to Home** option after opening the dropdown menu from the [action button](/docs/line-mini-app/discover/builtin-features/#action-button) or using the [`liff.createShortcutOnHomeScreen()`](/reference/liff/#create-shortcut-on-home-screen) method will display the Add Shortcut screen. The user can add a shortcut to your LINE MINI App to the home screen of the user's device by following the instructions on the screen. This allows the user to access your LINE MINI App directly from the home screen of the user's device.

**Display on Android device**

::admonition
---
title: On some Android devices, the existing shortcuts may be removed
type: note
---
On some Android devices, if a user changes the icon from **Settings** > **App icon** of the LINE app, the existing shortcuts may be removed. For more information, see [[Android] If you have problems with the LINE shortcut after changing the LINE app icon](https://help.line.me/line/smartphone/pc?lang=ja&contentId=200000315){rel="[\"nofollow\"]"} (only available in Japanese) in the LINE Help Center.
::

![](/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-android-en.png){className="[\"border\",\"w-fix-240\",\"inline-block\",\"mb-0-important\",\"mr-2\"]"}![](/media/line-mini-app/develop/add-to-home-screen/shortcut-android.png){className="[\"w-fix-240\",\"inline-block\"]"}

**Display on iOS device**

![](/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-en.png){className="[\"border\",\"h-fix-400\",\"inline-block\",\"mb-0-important\",\"mr-2\"]"}![](/media/line-mini-app/develop/add-to-home-screen/shortcut-ios-en.png){className="[\"h-fix-400\",\"inline-block\"]"}

Using this feature for services that users frequently use, such as membership cards and mobile ordering, can improve the user experience.

## Operating conditions

If the OS of the user's device is iOS, the conditions for **Add to Home** and the `liff.createShortcutOnHomeScreen()` method to work are as follows. If **Add to Home** is tapped or the `liff.createShortcutOnHomeScreen()` method is executed in a non-working environment, an error page will be displayed.

| Default browser                       | iOS version       | Whether it works or not |
| ------------------------------------- | ----------------- | ----------------------- |
| Safari                                | All versions      | Works                   |
| Chrome                                | 16.4 or later     | Works                   |
| Browsers other than Safari and Chrome | 16.4 or later     | Not guaranteed to work  |
| Browsers other than Safari            | Earlier than 16.4 | Doesn't work            |

For example, if you execute the `liff.createShortcutOnHomeScreen()` method in Chrome on earlier than iOS 16.4, the following error page will be displayed:

![](/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-error-en.png){className="[\"border\",\"w-fix-240\"]"}
