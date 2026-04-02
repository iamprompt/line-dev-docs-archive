---
title: >-
  [Updated] Service providers can now require two-factor authentication for LINE
  Login
navigation: true
description: ''
meta: '{"date":"2023-06-28 00:00 UTC","tags":"line-login, console","locale":"en"}'
path: /en/_partials/news/2023/2023-06-28-require-2fa-on-channels
__hash__: 3FBJUvFSB5knNvNq7byb46MGzDt8R9cFYPLpdlwfGIM
seo:
  title: >-
    [Updated] Service providers can now require two-factor authentication for
    LINE Login
  description: ''
---

::admonition{title="Added on June 29, 2023" type="note"}
There was an error in the explanation of the IP address change. We've corrected the mistake and apologize for any inconvenience caused by this error.

**Incorrect**: If the IP address changes, the user is prompted to enter the verification code.

**Correct**: If the IP address changes, the user is not prompted to enter the verification code.
::

We have added a function to LINE Login that allows service providers to require two-factor authentication (2FA).

If you set a LINE Login channel to require two-factor authentication, users will be required to authenticate with two-factor authentication when they log in to that channel. By using two-factor authentication, you're more likely to reduce the risk of unauthorized logins, such as list-based attacks.

From a user protection perspective, we recommend that you require two-factor authentication. However, please note that this may cause restrictions for users, such as requiring a smartphone with the LINE app installed.

::admonition
---
title: Default setting is scheduled to be changed in late July 2023
type: note
---
Currently, the default setting of **Require two-factor authentication** when creating a new channel is "OFF".

In late July 2023, we plan to change the default setting to "ON" when creating a new channel. If two-factor authentication is not required, you can turn off with a toggle switch.
::

- [What is two-factor authentication?](#what-is-two-factor-authentication-20230628)
- [Require two-factor authentication setting on the LINE Developers Console](#two-fa-setting-20230628)
- [Priority with the Two-factor Authentication Switch function](#priority-with-2fa-switch-20230628)

## What is two-factor authentication?

Two-factor authentication is a method to authenticate a user using two elements: knowledge known only to the user (such as a password), the user's property (such as an IC card or a smartphone), and biometric information (such as a fingerprint or a face). Two-factor authentication increases the possibility of preventing unauthorized logins even if a password is known to a third party.

LINE Login performs two-factor authentication by password authentication for the LINE account and entering the verification code displayed on the screen into the smartphone's LINE screen.

If the user logs in to the service for the first time, or if the device or browser changes, the user is prompted to enter the verification code after entering the password.

If the IP address changes, the user is not prompted to enter the verification code.

![The flow of two-factor authentication](/media/news/2023/login-flow-with-2fa-en.png){className="[\"w-fix-760\"]"}

Unless the user switch accounts or delete browser's cookies, they'll remain trusted for 365 days and they won't be asked to enter a verification code.

Also, if they're already logged in with the same browser, two-factor authentication will be skipped.

::admonition{title="LINE Login v2.1 is recommended" type="tip"}
Two-factor authentication is available with LINE Login v2.1. If you use LINE Login v1.0 (:glossary-tooltip[[end-of-life](/glossary/#end-of-life)]{glossary-id="end-of-life"}) or LINE Login v2.0 (:glossary-tooltip[[deprecated](/glossary/#deprecated)]{glossary-id="deprecated"}), we recommend updating to LINE Login v2.1.

For more information about the differences between the versions, see [LINE Login versions](/docs/line-login/overview/#versions) in LINE Login documentation.
::

## Require two-factor authentication setting on the LINE Developers Console

You can set to require two-factor authentication when creating a new channel and when editing an existing channel on the [LINE Developers Console](/console/).

- When creating a new channel, you can enable the setting by turning the **Require two-factor authentication** toggle switch to "ON" (right). The default setting is off.
- When editing an existing channel, you can turn on/off the **Require two-factor authentication** setting. Only members with the Admin role for the channel can edit the setting. In the case of the Member role, the setting field is not displayed when editing the channel.

![2FA Setting](/media/news/2023/2fa-on-a-channel-en.png){className="[\"bg-border\"]"}

## Priority with the Two-factor Authentication Switch function

On April 26, 2022, the [Two-factor Authentication Switch function](/news/2022/04/26/2fa-switch-function/) of the LINE app was released. This is a feature that provides two-factor authentication when logging into services that use LINE Login v2.1 if the toggle switch for **Home** > **Settings** > **Accounts** > **Two-factor authentication** is "ON" (right) on the user's device.

Requiring two-factor authentication in a channel overrides the user's device setting. In other words, if you enable **Require two-factor authentication** on a channel, the users will be required to authenticate with two-factor authentication even if the Two-factor Authentication Switch is turned off on the user's device.

The relationship between the Two-factor Authentication Switch on the user's device and the channel setting is as follows:

|                               | Setting on the user's device    OFF   | Setting on the user's device   ON    |
| ----------------------------- | ------------------------------------- | ------------------------------------ |
| **Channel setting**   **OFF** | Two-factor authentication is disabled | Two-factor authentication is enabled |
| **Channel setting**   **ON**  | Two-factor authentication is enabled  | Two-factor authentication is enabled |

For more information on setting to require two-factor authentication, see [Require two-factor authentication](/docs/line-login/overview/#two-factor-authentication) in the [LINE Login overview](/docs/line-login/overview/).
