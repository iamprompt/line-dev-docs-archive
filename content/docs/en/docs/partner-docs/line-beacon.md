---
title: LINE Beacon
navigation: true
description: LINE Beacon
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/partner-docs/line-beacon
__hash__: AFfDEtUBK6x1YdwuGk_Z80Ly-WjyNIm5ptWImmnS8Sk
seo:
  title: LINE Beacon
  description: LINE Beacon
---

# :page-title

:markdown-controls::admonition
---
title: An application is required to use optional features
type: note
---
The features in this document are only available to corporate users who have submitted the required application. To use this service for your company's LINE Official Account, contact your sales representative or [our Sales partners](https://www.lycbiz.com/jp/partner/sales/){rel="[\"nofollow\"]"}.
::

## About user settings

To receive LINE Beacon, users must meet these conditions:

- The version of the OS that you use for LINE must meet the requirements.
- The smartphone's Bluetooth setting is on.
- You've agreed to use LINE Beacon on LINE. ("Settings" > **Privacy** > **Provide usage data** > **LINE Beacon**)

For more information, including OS version requirements, see [Using LINE Beacon](https://help.line.me/line/?contentId=50001493){rel="[\"nofollow\"]"} in the Help Center.

## About LINE Beacon reception conditions

LINE Beacon reception conditions are different for each OS type and LINE app running status.

Here are the meanings of "foreground" and "background" used in the reception conditions:

| Term       | Description                    |
| ---------- | ------------------------------ |
| Foreground | LINE is running and in use     |
| Background | LINE is running but not in use |

::admonition{title="Behavior when LINE isn't running" type="note"}
The behavior when LINE isn't running is undefined. It isn't included in the "background."
::

### LINE Beacon reception conditions (iOS)

The reception conditions for each LINE app running status on iOS are as follows:

| LINE app running status | Reception conditions                                                                                                                                                                                                                                                        |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Foreground              | The [user settings](#about-user-settings-for-line-beacon) meet the condition                                                                                                                                                                                                |
| Background              | All of the following conditions must be met:- The [user settings](#about-user-settings-for-line-beacon) meet the condition - **Location Services** (*1) is ON - LINE app's **ALLOW LOCATION ACCESS** (*2) is set to "Always" - LINE app's **Precise location** (*2*3) is ON |

*1 **Settings** > **Privacy & Security** > **Location Services**  

*2 **Settings** > **LINE** > **Location**  

*3 Displayed only when **ALLOW LOCATION ACCESS** is ON

### LINE Beacon reception conditions (Android)

The reception conditions for each LINE app running status on Android are as follows:

| LINE app running status | Reception conditions                                                                                                                                                                                                                                                                                                                                             |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Foreground              | All of the following conditions must be met:- The [user settings](#about-user-settings-for-line-beacon) meet the condition - **Use location** (*1) is ON - LINE app's **Location permission** (*2) is set to "Allow only while using the app" - LINE app's **Use precise location** (*2) is ON - LINE app's **Nearby devices permission** (*3) is set to "Allow" |
| Background              | Background receiving isn't available on Android.                                                                                                                                                                                                                                                                                                                 |

*1 **Settings** > **Location** > **Use location**  

*2 **Settings** > **Apps** > **LINE** > **Permissions** > **Location**  

*3 **Settings** > **Apps** > **LINE**

### Beacon banner display conditions

::admonition{title="Note" type="note"}
These conditions also apply to test accounts.
::

#### If your LINE Official Account is searchable

| LINE Official Account   and friends | Agree to LINE Beacon   Terms of Use | Beacon banner display |
| ----------------------------------- | ----------------------------------- | --------------------- |
| Friend added                        | Agreed                              | Hidden                |
| Friend added                        | Not agreed                          | Hidden                |
| Friend not added                    | Agreed                              | Display               |
| Friend not added                    | Not agreed                          | Hidden                |

#### If your LINE Official Account isn't searchable

Beacon banners won't be displayed regardless of whether you're friends with the LINE Official Account or agree to the LINE Beacon Terms of Use.
