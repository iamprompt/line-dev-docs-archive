---
title: Trying the sample app
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-login-sdks/android-sdk/try-line-login
__hash__: A-92prc6KNlF_WAY-c8YESGbY3BY_H2SsL-JUDInI6A
seo:
  title: Trying the sample app
  description: null
---

# :page-title

:markdown-controlsThe LINE Login sample app for Android lets you quickly see how [LINE Login](/docs/line-login/overview/) works on an Android app.

## Prerequisites

To build and run the sample app, you need:

- [Android Studio](https://developer.android.com/studio){rel="[\"nofollow\"]"} installed

## Trying the sample app

To try the sample app with our sample channel, follow the steps below.

1. Clone the [LINE SDK for Android open-source repository](https://github.com/line/line-sdk-android){rel="[\"nofollow\"]"}.```sh
$ git clone https://github.com/line/line-sdk-android.git
```
2. Open the LINE SDK project in Android Studio.
3. Build the project and run the app using an Android device or Android Emulator.

::admonition{title="Tip" type="tip"}
The sample app has already defined its own sample channel id, and its value is `1620019587`, you don't need to set it again.
::

## Running the sample app

Run the sample app using an Android device or Android Emulator. When you first log in, you must agree to let the app access your profile information.

![LINE SDK Sample App Main screen](/media/line-login/try-line-login/line-sdk-sample-app-home-screen.jpg){className="[\"border\",\"w-fix-200\"]"}

### Using the "Log in with LINE" button

Tap the green **Log in with LINE** button to log in using app-to-app login. This is the LINE SDK's built-in login button.

If LINE is installed on the device, and you are logged in, you will be able to log in to the sample app automatically without entering your LINE credentials. Otherwise, you'll be requested to log in by using your device's browser. In this scenario, you'll need to enter your LINE credentials.

### Using the "login" button

If you aren't currently logged in, the **login** button will be available.
Tap the **login** button, the LINE app-to-app login process will be triggered.
The login method and process is just like the built-in login button from the SDK, but it provides some options to adjust, such as `Scopes`.
You may refer to the `getLoginIntent` method of the `LineLoginApi` class provided by LINE SDK.

::admonition{title="Note" type="note"}
The default Scopes it use are `PROFILE` and `OPENID_CONNECT`.
::

### Using the "web login" button

If you aren't currently logged in, the **web login** button will be available.
Tap the **web login** button, a LINE login webpage will be opened by browser.

### Using the "logout" button

After you are logged in, the **logout** button will be available.
Tap the **logout** button to log out current user.

For more information, see [Logging out users](/docs/line-login-sdks/android-sdk/managing-users/#logout).

### Trying out the features available on the LINE SDK

![LINE SDK Sample App Api List screen](/media/line-login/try-line-login/line-sdk-sample-app-api-list-screen.jpg){className="[\"border\",\"w-fix-200\"]"}

Once you've logged in to the app, you can tap the **API List Page** button to try out the following features of the LINE SDK.

- [Getting user profiles](/docs/line-login-sdks/android-sdk/managing-users/#get-profile)
- [Getting the current access token](/docs/line-login-sdks/android-sdk/managing-access-tokens/#get-current-token)
- [Refreshing access tokens](/docs/line-login-sdks/android-sdk/managing-access-tokens/#refresh-token)
- [Verifying access tokens](/docs/line-login-sdks/android-sdk/managing-access-tokens/#verify-access-token)
- [Use LINE Login to get friendship status](/docs/line-login-sdks/android-sdk/link-a-bot/#use-line-login-api)

You can view the response from the top half of the page after clicking on each SDK API Button.
