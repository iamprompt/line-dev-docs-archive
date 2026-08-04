---
title: Auto login will take precedence over SSO login for LINE Login
navigation: true
description: >-
  From July 15, 2021, auto login will take precedence in an environment where
  both auto login and Single Sign On login (hereafter called SSO login) are
  enabled for LINE Login.
meta: '{"date":"2021-07-12 00:00 UTC","tags":"LINE Login","locale":"en"}'
path: /en/_partials/news/2021/2021-07-12-auto-login-takes-precedence-over-sso
__hash__: RT2pln6oRuYXg5xob-f0kYvkF8LgAgzrp9U4IYNtCLc
seo:
  title: Auto login will take precedence over SSO login for LINE Login
  description: >-
    From July 15, 2021, auto login will take precedence in an environment where
    both auto login and Single Sign On login (hereafter called SSO login) are
    enabled for LINE Login.
---

From July 15, 2021, auto login will take precedence in an environment where both auto login and Single Sign On login (hereafter called SSO login) are enabled for LINE Login.

### Prioritization of LINE Login authentication methods

For web app integrated LINE Login, users can use one of the following authentication methods:

| Authentication method                                                                    | Description                                                                                                              |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [Auto login](/docs/line-login/integrate-line-login/#line-auto-login)                     | Log in without user operation. The LINE Login screen or the confirmation screen is not displayed                         |
| [Log in with email address](/docs/line-login/integrate-line-login/#mail-or-qrcode-login) | Log in by entering an email address and password on the LINE Login screen                                                |
| [Log in with QR code](/docs/line-login/integrate-line-login/#mail-or-qrcode-login)       | Log in by scanning a QR code displayed on the LINE Login screen using the QR code reader on the LINE app for smartphones |
| [Single Sign On (SSO) login](/docs/line-login/integrate-line-login/#line-sso-login)      | Log in by clicking the login button on the confirmation screen with the message "Log in with the following account"      |

In the past, when users tried to login via LINE Login using LINE's smartphone app, in an environment where both auto login and SSO login were enabled, SSO login took precedence over auto login.

Since it has been confirmed that SSO login fails on some smartphone devices in case an auto login cookie is present, the prioritization of LINE Login authentication methods will be changed as follows:

| Item           | Before change              | After change                |
| -------------- | -------------------------- | --------------------------- |
| Prioritization | SSO login takes precedence | Auto login takes precedence |

From now on, auto login will take precedence in an environment where both auto login and SSO login are enabled.

### Impact

As a result of this change, when users try to log in via LINE Login using LINE's smartphone app, in an environment where both auto login and SSO login are enabled, the following SSO confirmation screen will not be displayed and users will not be able to select the login user.

![SSO confirmation screen will not be displayed and users will not be able to select the login user](/media/line-login/integrate-login-web/sso.png){className="[\"w-fix-360\"]"}

If you want to allow users to log in via SSO login instead of auto login, you can disable auto login in iOS by adding a specific query parameter (`disable_ios_auto_login`) to the authorization URL when [Authenticating users and making authorization requests](/docs/line-login/integrate-line-login/#making-an-authorization-request). We are planning to provide the same query parameter for Android in the future. The timing of the provision of this feature will be announced as soon as it is decided.

For more information, see [LINE Login authentication methods](/docs/line-login/overview/#auth-method) and [User authentication](/docs/line-login/integrate-line-login/#authentication-process).

### Scheduled date of specification change

July 15, 2021

The content and date of the specification change is subject to change without notice.

LINE will continue to improve the quality of its services for its customers. Thank you for your understanding.
