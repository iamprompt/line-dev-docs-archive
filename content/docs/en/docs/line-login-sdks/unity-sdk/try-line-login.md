---
title: Trying the starter app
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-login-sdks/unity-sdk/try-line-login
__hash__: Q9fIv2PtkBMKILYDPN5gmMX129PqFyMnTpm28tJBFWQ
seo:
  title: Trying the starter app
  description: null
---

# :page-title

:markdown-controlsThe LINE Login starter app for Unity lets you quickly see how [LINE Login](/docs/line-login/overview/) works in a Unity game.

## Prerequisites

Before building and running the starter app, follow the [Setting up your project](/docs/line-login-sdks/unity-sdk/project-setup/) guide to set up your environment correctly for Unity, iOS, and Android.

## Trying the starter app with the predefined sample channel

To try the starter app with our sample channel, follow these steps:

1. Clone the [LINE SDK for Unity open-source repository](https://github.com/line/line-sdk-unity){rel="[\"nofollow\"]"}.```sh
$ git clone https://github.com/line/line-sdk-unity.git
```
2. In Unity, open the project in the folder `LINE_SDK_Unity`.
3. Build and export the scene under `Assets/LineSDK/Demo/Scenes/Main` to either iOS or Android.
4. Install the exported project/binary to your device.

::admonition{title="Note" type="note"}
You may need to modify the certification to install the sample app to an iOS device. If you do not have one, you can go to **Player Settings > Settings for iOS > Other Settings** and set **Target SDK** to **Simulator SDK**, then run the sample app on an iOS simulator.
::

### Trying the starter app with your own channel

You can also link the starter app to your own channel. If you don't have a channel yet, [create one now](/console/register/line-login/channel/). You'll also have to select or create a :glossary-tooltip[[provider](/glossary/#provider)]{glossary-id="provider"}.

To link the starter app with your channel, make the following changes in your Unity project:

1. Select **File** > **Build Settings**.
2. Click **Player Settings**.
3. Select ![iPhone, iPod Touch and iPad settings tab](/media/unity-sdk/ios-settings-tab.png) > **Other Settings**, and set **Bundle Identifier** to the same value as **iOS bundle ID** in the **LINE Login** tab of your LINE Login channel in the LINE Developers Console.  
![Bundle Identifier](/media/unity-sdk/bundle-identifier-settings.png)
4. In the next two fields, set the same value as Android **Package Name** in the **LINE Login** tab of your LINE Login channel in the LINE Developers Console.
  - **Product Name**
  - ![Android settings tab](/media/unity-sdk/android-settings-tab.png) > **Other Settings** > **Package Name**  
![Package Name](/media/unity-sdk/package-name-settings.png)
5. From the main page, select **LineSDK** object.
6. Enter your LINE Login channel ID in the **Channel ID** field under **Line SDK (Script)**.  
![Channel ID](/media/unity-sdk/channel-id-settings.png)

## Running the starter app

Run the starter app using an iOS/Android device or Simulator. When you first log in, you must agree to let the app access your profile information.

Tap **Log in with LINE** to log in using app-to-app login.

If LINE is installed on the device and you are logged in, you will be able to log in to the starter app automatically without entering your LINE credentials. Otherwise, you'll be asked to log in using the browser. In the second scenario, you'll need to enter your LINE credentials.

### Trying out the features available on the LINE SDK

Once you have logged in to the app, you can tap the menu items to try out the following features of the LINE SDK.

Features available to general users:

- Log out user
- Get user profile
- Verify access token
- Get the friendship status between a LINE Official Account linked to the channel and user

Any other features shown are available only to limited users.
