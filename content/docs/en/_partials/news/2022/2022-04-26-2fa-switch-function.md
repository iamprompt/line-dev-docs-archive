---
title: >-
  [Updated] LINE Login v2.1 is recommended as we'll implement LINE's Two-factor
  Authentication Switch function
navigation: true
description: ''
meta: '{"date":"2022-04-26 00:00 UTC","tags":"line-login","locale":"en"}'
path: /en/_partials/news/2022/2022-04-26-2fa-switch-function
__hash__: dF4gmpProLm8XH2xvyUrwEywCXtZdxFYRUyDEiOWCYY
seo:
  title: >-
    [Updated] LINE Login v2.1 is recommended as we'll implement LINE's
    Two-factor Authentication Switch function
  description: ''
---

::admonition{title="Added on June 29, 2023" type="note"}
There was an error in the explanation of the IP address change. We've corrected the mistake and apologize for any inconvenience caused by this error.

**Incorrect**: If the IP address changes, the user is prompted to enter the verification code.

**Correct**: If the IP address changes, the user is not prompted to enter the verification code.
::

From the upcoming release of LINE for smartphones version 12.7.0, the Two-factor Authentication Switch function will be added to allow users to enable or disable two-factor authentication (2FA).

This allows users to choose whether to enable two-factor authentication when they log in to a service that uses LINE Login v2.1.

The Two-factor Authentication Switch function is not available for LINE Login v1.0 and LINE Login v2.0, so we recommend updating to LINE Login v2.1.

- [Date of implementation of Two-factor Authentication Switch function](#date-of-implementation-20220418)
- [What is two-factor authentication?](#what-is-two-factor-authentication)
- [Requirements for using the Two-factor Authentication Switch function](#requirements-for-using-the-two-factor-authentication-switch-function)
- [Behavior when the Two-factor Authentication Switch function is enabled](#behavior-when-the-two-factor-authentication-switch-function-is-enabled)
- [Notes after implementation ](#notes-after-implementation)

### Date of implementation of Two-factor Authentication Switch function

May 2022 (LINE for smartphones version 12.7.0 or later)

The date is subject to change without notice.

### What is two-factor authentication?

Two-factor authentication is a method to authenticate a user using two elements: knowledge known only to the user (such as a password), the user's property (such as an IC card or a smartphone), and biometric authentication. Two-factor authentication increases the possibility of preventing unauthorized logins even if a password is known to a third party.

LINE Login performs two-factor authentication by password authentication for the LINE account and entering the verification code displayed on the smartphone's LINE screen.

If the user logs in to the service for the first time, or if the device or browser changes, the user is prompted to enter the verification code after entering the password.

If the IP address changes, the user is not prompted to enter the verification code.

![The flow of two-factor authentication](/media/news/login-flow-with-2fa-en.png){className="[\"w-fix-760\"]"}

### Requirements for using the Two-factor Authentication Switch function

The Two-factor Authentication Switch function allows users to choose whether to use two-factor authentication when logging in to services that use LINE Login.

However, the Two-factor Authentication Switch only applies to sites that don't have two-factor authentication applied on the server side. For sites that have already applied two-factor authentication, the user will always log in using two-factor authentication.

To use the Two-factor Authentication Switch function, the following requirements must be met:

| Scope                        | Requirement                                      |
| ---------------------------- | ------------------------------------------------ |
| Services that use LINE Login | Use LINE Login v2.1                              |
| Users                        | Use LINE for smartphones version 12.7.0 or later |

This function is not available in LINE Login v1.0 (:glossary-tooltip[[end-of-life](/glossary/#end-of-life)]{glossary-id="end-of-life"}) and LINE Login v2.0 (:glossary-tooltip[[deprecated](/glossary/#deprecated)]{glossary-id="deprecated"}), so we recommend updating to LINE Login v2.1.

For more information about the differences between the versions, see [LINE Login versions](/docs/line-login/overview/#versions) in LINE Login documentation.

### Behavior when the Two-factor Authentication Switch function is enabled

The Two-factor Authentication Switch function can be activated by tapping **Home** > **Settings** > **Accounts** in LINE and turning the **Two-factor authentication** toggle switch to "ON" (right).

![Two-factor authentication](/media/news/2022/2fa-switch-en.png){className="[\"border\",\"w-fix-200\"]"}

The behavior when the user turns the switch on and off is as follows:

|     | Websites that haven't applied 2FA | Websites that have already applied 2FA  |
| --- | --------------------------------- | --------------------------------------- |
| ON  | Enable two-factor authentication  | Always enable two-factor authentication |
| OFF | Disable two-factor authentication | Always enable two-factor authentication |

The default setting after the implementation of the function is "OFF", and the users can use the service as before.

### Notes after implementation

The notes after enabling the Two-factor Authentication Switch function are as follows:

- When you log in for the first time, you need a smartphone with LINE installed.
- You won't need to enter the verification code for one year, since the trusted status will continue for one year.
- If the service is used by a typical LINE user, the impact of the implementation of the Two-factor Authentication Switch function is expected to be small since the user has a smartphone. On the other hand, in cases where accounts are shared and managed for business purposes, etc., you need to be careful in advance because you need to operate the smartphone that uses the LINE account.
