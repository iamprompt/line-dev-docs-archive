---
title: LINE Login overview
navigation: true
description: >-
  LINE Login lets people easily create an account for your web app or native app
  using their LINE accounts. You can integrate LINE Login into your iOS,
  Android, or web app.
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-login/overview
__hash__: MFdbtOAt7eHFz8JvHjlVXCSOH7Bz9S50NTt9w3xvY0s
seo:
  title: LINE Login overview
  description: >-
    LINE Login lets people easily create an account for your web app or native
    app using their LINE accounts. You can integrate LINE Login into your iOS,
    Android, or web app.
---

# :page-title

:markdown-controls::admonition{title="Developer documentation" type="tip"}
You're reading the LINE Developer documentation. If you're looking for help using the LINE app or how to log in, see the [Help Center](https://help.line.me/){rel="[\"nofollow\"]"}.
::

## What is LINE Login

LINE Login is a social login service that allows users to use their LINE accounts. LINE Login is free of charge.

By integrating LINE Login into your website or app, users will be able to register and log in easily as follows:

- When a user registers as a member, the ::glossary-tooltip{glossary-id="profile-information"}
[profile information](/glossary/#profile-information)
::

 registered in advance on LINE is automatically entered, saving the user the trouble of entering the information.
- Users can easily log in using the LINE Login button without having to remember their email address and password for each site.

LINE Login not only works with native iOS and Android apps but also with web apps (websites) and Unity games.

::admonition{title="Example of a website with LINE Login" type="tip"}
For example, the e-book store [BOOK WALKER](https://bookwalker.jp/top/){rel="[\"nofollow\"]"} (Japanese site) integrates various social logins, including LINE Login, so that users can easily register the membership and continue using the site.

![E-bookstore login screen](/media/line-login/overview/line-login-bookwalker-01-ja.png){className="[\"border\",\"w-fix-560\"]"}
::

## Experience LINE Login on the demo site

Try using the demo to experience LINE Login for yourself. You can view the demo on your smartphone by scanning the QR code to access the demo site.

![](/media/line-login/demo/login-demo-qr-code-en.png){className="[\"border\",\"w-fix-560\"]"}

::admonition{title="Data the demo site retrieves" type="note"}
Before using, please note that the LINE Login demo app will retrieve the profile information (display name, profile image URL, and user ID) from the LINE accounts of users who use the demo. Of the retrieved information, only the user ID is stored on the server, and the stored data is deleted daily.
::

## Start development to integrate LINE Login

To start development to integrate LINE Login, you'll first need to create a LINE Login channel. To learn more, see [Getting started with LINE Login](/docs/line-login/getting-started/).

### Integrating with web apps

Integrate LINE Login into your web app (website) to make it easier for people to create an account and log in. With LINE Login, your users can automatically log in to your web app if they're already logged in to LINE on their device. The authentication and authorization process is based on the [OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749){rel="[\"nofollow\"]"} and [OpenID® Connect](https://openid.net/specs/openid-connect-core-1_0.html){rel="[\"nofollow\"]"} protocols. For more information, see [Integrating LINE Login with your web app](/docs/line-login/integrate-line-login/).

For an example of how LINE Login can provide users with an improved experience, see the [LINE STORE](https://store.line.me/){rel="[\"nofollow\"]"} website.

![LINE Login](/media/line-login/overview/line-login-web.png)

### Integrating with native apps

Use our SDKs to add LINE Login to your app and let LINE handle user authentication. When users are logged in to LINE on their mobile device, they're able to log in to your app without entering their email address and password. We offer SDKs for Android, iOS, and Unity:

- [LINE SDK for iOS Swift overview](/docs/line-login-sdks/ios-sdk/swift/overview/)
- [LINE SDK for Android overview](/docs/line-login-sdks/android-sdk/overview/)
- [LINE SDK for Unity overview](/docs/line-login-sdks/unity-sdk/overview/)
- [LINE SDK for Flutter](/docs/line-login-sdks/flutter-sdk/)

The LINE Rangers game, for example, uses LINE Login to let users easily create an account for the game with their LINE accounts.

![LINE Rangers 1](/media/line-login/overview/line-login-rangers-1.png){className="[\"border\"]"}![LINE Rangers 3](/media/line-login/overview/line-login-rangers-3.png){className="[\"border\"]"}

## LINE Login authentication methods

For web app integrated LINE Login, users can use one of the following authentication methods:

| Authentication method                                                                    | Description                                                                                                              |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [Auto login](/docs/line-login/integrate-line-login/#line-auto-login)                     | Log in without user operation. The LINE Login screen or the confirmation screen is not displayed                         |
| [Log in with email address](/docs/line-login/integrate-line-login/#mail-or-qrcode-login) | Log in by entering an email address and password on the LINE Login screen                                                |
| [Log in with QR code](/docs/line-login/integrate-line-login/#mail-or-qrcode-login)       | Log in by scanning a QR code displayed on the LINE Login screen using the QR code reader on the LINE app for smartphones |
| [Single Sign On (SSO) login](/docs/line-login/integrate-line-login/#line-sso-login)      | Log in by clicking the login button on the confirmation screen showing "Continue as"                                     |

To learn more about which screens are actually shown and the conditions under which they appear for each of the authentication methods, see [User authentication](/docs/line-login/integrate-line-login/#authentication-process).

## Identifying users

Once a user has logged in to your app through LINE Login and your app has retrieved an access token for the user, the app can get the profile information that the user has registered with LINE.

You can get the user's ID, display name, profile image URL, and status message.

To learn more, see [Getting user profiles](/docs/line-login/managing-users/#get-profile).

## LINE Login versions

LINE Login supports [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html){rel="[\"nofollow\"]"}. For information about the OpenID provider, see [OpenID Provider Configuration Document](https://access.line.me/.well-known/openid-configuration){rel="[\"nofollow\"]"}.

These versions of LINE Login have been released. Each version supports a different set of features.

| Version         | Status                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LINE Login v2.1 | :glossary-tooltip[[Active](/glossary/#active)]{glossary-id="active"}                       | This version can handle login requests based on the [OAuth 2.0 authorization code flow](https://datatracker.ietf.org/doc/html/rfc6749){rel="[\"nofollow\"]"}. It also supports the [OpenID Connect](https://openid.net/developers/how-connect-works/){rel="[\"nofollow\"]"} protocol and allows you to get user data with ID tokens.    It was released on September 28, 2017. To learn more, see [LINE Login v2.1 released](/news/2017/09/28/line-login-v21/). |
| LINE Login v2.0 | :glossary-tooltip[[Deprecated](/glossary/#deprecated)]{glossary-id="deprecated"}           | This version was released on January 24, 2017 and has been :glossary-tooltip[[deprecated](/glossary/#deprecated)]{glossary-id="deprecated"}, with the :glossary-tooltip[[end-of-life](/glossary/#end-of-life)]{glossary-id="end-of-life"} date to be determined. We recommend that you use the current version (LINE Login v2.1). There will be a certain grace period between the end-of-life announcement and the actual end-of-life.                         |
| LINE Login v1   | ::glossary-tooltip{glossary-id="end-of-life"}   [End-of-life](/glossary/#end-of-life)   :: | **All features were discontinued on June 30, 2018 and are no longer available.** For more information, see [LINE Login v1 to be discontinued](/news/2018/02/28/line-login-v1-notice/).                                                                                                                                                                                                                                                                          |

## Require two-factor authentication

A user with the Admin role can configure the channel to require two-factor authentication when a user logs in to the channel.

By using two-factor authentication, you're more likely to reduce the risk of unauthorized logins, such as list-based attacks.

From a user protection perspective, we recommend that you require two-factor authentication. However, please note that this may cause restrictions for users, such as requiring a smartphone with the LINE app installed.

### What is two-factor authentication?

Two-factor authentication is a method to authenticate a user using two elements: knowledge known only to the user (such as a password), the user's property (such as an IC card or a smartphone), and biometric information (such as a fingerprint or a face). Two-factor authentication increases the possibility of preventing unauthorized logins even if a password is known to a third party.

LINE Login performs two-factor authentication by password authentication for the LINE account and entering the verification code displayed on the screen into the smartphone's LINE screen.

If the user logs in to the service for the first time, or if the device or browser changes, the user is prompted to enter the verification code after entering the password.

![](/media/news/2023/login-flow-with-2fa-en.png){className="[\"w-fix-760\"]"}

Unless the user switch accounts or delete browser's cookies, they'll remain trusted for 365 days and they won't be asked to enter a verification code.

Also, if they're already logged in with the same browser, two-factor authentication will be skipped.

::admonition{title="LINE Login v2.1 is recommended" type="tip"}
Two-factor authentication is available with LINE Login v2.1. If you use LINE Login v1.0 (:glossary-tooltip[[end-of-life](/glossary/#end-of-life)]{glossary-id="end-of-life"}) or LINE Login v2.0 (:glossary-tooltip[[deprecated](/glossary/#deprecated)]{glossary-id="deprecated"}), we recommend updating to LINE Login v2.1.

For more information about the differences between the versions, see [LINE Login versions](/docs/line-login/overview/#versions).
::

### Require two-factor authentication setting on the LINE Developers Console

Require two-factor authentication can be set when creating a new channel and when editing an existing channel on the [LINE Developers Console](/console/).

| Channel type       | When creating | When editing |
| ------------------ | ------------- | ------------ |
| LINE Login         | ✅             | ✅            |
| Blockchain Service | ✅             | ✅            |
| Messaging API      | - *1          | ✅ *2         |
| LINE MINI App      | ❌             | ❌            |

*1 You can't create a Messaging API channel on the LINE Developers Console

*2 Only if a previously created channel holds LIFF

#### Set when creating a channel

When creating a new channel on the LINE Developers Console, you can enable the setting by toggling the **Require two-factor authentication** switch to "on" (right). The default setting is "on".

![](/media/news/2023/2fa-on-a-channel-en.png){className="[\"bg-border\"]"}

#### Set when editing an existing channel

When editing an existing channel on the LINE Developers Console, you can turn on/off the **Require two-factor authentication** setting.

Only members with the Admin role for the channel can edit the setting. In the case of the Member role, the setting field isn't displayed when editing the channel.

**Require two-factor authentication** setting is located in the tabs below for each channel type:

| Channel type       | Tab name   |
| ------------------ | ---------- |
| LINE Login         | LINE Login |
| Blockchain Service | LINE Login |
| Messaging API      | LIFF       |

### Priority with the Two-factor Authentication Switch function

[Two-factor Authentication Switch](/news/2022/04/26/2fa-switch-function/) of the LINE app is a function that provides two-factor authentication when logging into services that use LINE Login v2.1 if the toggle switch for **Home** > **Settings** > **Accounts** > **Two-factor authentication** is "ON" (right) on the user's device.

Require two-factor authentication in a channel overrides the user's device setting. In other words, if you enable **Require two-factor authentication** on a channel, the users will be required to authenticate with two-factor authentication even if the Two-factor Authentication Switch is turned off on the user's device.

The relationship between the Two-factor Authentication Switch on the user's device and the channel setting is as follows:

|                               | Setting on the user's device    OFF   | Setting on the user's device   ON    |
| ----------------------------- | ------------------------------------- | ------------------------------------ |
| **Channel setting**   **OFF** | Two-factor authentication is disabled | Two-factor authentication is enabled |
| **Channel setting**   **ON**  | Two-factor authentication is enabled  | Two-factor authentication is enabled |

### Differences in LINE Login behavior depending on authentication method

Depending on the [LINE Login authentication methods](#auth-method), a user might not be prompted to enter a verification code even if you have turned on **Require two-factor authentication**:

| Authentication method      | Two-factor authentication |
| -------------------------- | ------------------------- |
| Log in with email address  | Required                  |
| Log in with QR code        | Required                  |
| Auto login                 | Not required              |
| Single Sign On (SSO) login | Not required              |

## Related pages

- [LINE Login development guidelines](/docs/line-login/development-guidelines/)
- [LINE Login security checklist](/docs/line-login/security-checklist/)
- [LINE Login v2.1 API reference](/reference/line-login/)
