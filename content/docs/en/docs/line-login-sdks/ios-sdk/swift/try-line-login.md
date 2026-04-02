---
title: Trying the starter app
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /en/docs/line-login-sdks/ios-sdk/swift/try-line-login
__hash__: 2NaK1OZd9cHGKxHJfWY9GCTH46uDze8EejC5nJSNdpk
seo:
  title: Trying the starter app
  description: null
---

# :page-title

:markdown-controlsThe LINE Login starter app for iOS lets you quickly see how [LINE Login](/docs/line-login/overview/) works on an iOS app.

## Prerequisites

To build and run the starter app, you need:

- Xcode 14.1 or later.

## Trying the starter app with the predefined sample channel

To try the starter app with our sample channel, follow the steps below.

1. Clone the [LINE SDK for iOS Swift open-source repository](https://github.com/line/line-sdk-ios-swift){rel="[\"nofollow\"]"}.```sh
$ git clone https://github.com/line/line-sdk-ios-swift.git
```
2. Open the `LineSDK.xcworkspace` file.
3. Build the `LineSDKSample` project. The starter app launches in Simulator.

### Trying the starter app with your own channel

You can also link the starter app to your own channel. If you don't have a channel, you can [create one](/console/register/line-login/channel/) in the LINE Developers Console. This also requires selecting or creating a :glossary-tooltip[[provider](/glossary/#provider)]{glossary-id="provider"}.

After creating a channel, link the starter app to it by making these changes in the project:

- In the LINE Developers Console, configure your channel as described in [Linking your app to your channel](/docs/line-login-sdks/ios-sdk/swift/setting-up-project/#linking-app-to-channel).
- Modify the app bundle ID to the ID configured in your channel.
- In the `Config.xcconfig` file, change the `LINE_CHANNEL_ID` value to your channel ID.

## Running the starter app

Run the starter app using an iOS device or Simulator. When you first log in, you must agree to let the app access your profile information.

Tap the **Log in with LINE** button to log in using app-to-app login.

If LINE is installed on the device and you are logged in, you will be able to log in to the starter app automatically without entering your LINE credentials. Otherwise, you'll be requested to log in by using your device's browser. In this scenario, you'll need to enter your LINE credentials.

### Trying out the features available on the LINE SDK

Once you have logged in to the app, you can tap the menu items to try out the following features of the LINE SDK.

The following features are available for general users.

- Log out the user
- Get the user profile
- Verify the access token
- Get the friendship status between a LINE Official Account linked to the channel and user

Other features in the screen are available only to limited users.
