---
title: A parameter has been added to disable Auto login in LINE Login
navigation: true
description: >-
  As announced on July 12, 2021, for LINE Login, in environments where both Auto
  login and Single Sign On (SSO) login are available, Auto login takes
  precedence.
meta: '{"date":"2021-09-21 00:00 UTC","tags":"LINE Login","locale":"en"}'
path: /en/_partials/news/2021/2021-09-21-line-login-disable-auto-login
__hash__: ns_2ViVJJWge4Dmiv0eO6FfweB0DCr8WVgYsC8cJuqo
seo:
  title: A parameter has been added to disable Auto login in LINE Login
  description: >-
    As announced on July 12, 2021, for LINE Login, in environments where both
    Auto login and Single Sign On (SSO) login are available, Auto login takes
    precedence.
---

As announced on [July 12, 2021](/news/2021/07/12/auto-login-takes-precedence-over-sso/), for LINE Login, in environments where both Auto login and Single Sign On (SSO) login are available, Auto login takes precedence.

As of September 21, 2021, if you want users to log in via SSO login instead of Auto login, you can disable Auto login by adding the query parameter `disable_auto_login=true` to the authorization URL when [Authenticating users and making authorization requests](/docs/line-login/integrate-line-login/#making-an-authorization-request).

### Specification

By using the `disable_auto_login` parameter, even in an environment where both Auto login and SSO login are available, you can explicitly provide SSO login to the user logging in.

![explicitly provide SSO login](/media/line-login/integrate-login-web/sso.png){className="[\"w-fix-360\"]"}

On iOS, disabling Auto login by adding the `disable_ios_auto_login` parameter to the authorization URL has already been available, but going forward, the `disable_auto_login` parameter will also be available on Android and iOS as well.

For more information, see [Authenticating users and making authorization requests](/docs/line-login/integrate-line-login/#making-an-authorization-request) in the LINE Login documentation.

::admonition{title="We recommend using "disable_auto_login"" type="tip"}
You can continue using the `disable_ios_auto_login` parameter, but we recommend using a `disable_auto_login` parameter that works regardless of OS.
::

### Use cases of the `disable_auto_login` parameter

Auto login may fail when private browsing is enabled in web apps that incorporate LINE Login.

In such environments where Auto login fails, if the user who failed LINE Login is prompted to reattempt with an authorization URL where Auto login is enabled, the user will continue to fail at LINE Login repeatedly. In order to prevent continuous login failures, once Auto login fails, you can use the `disable_auto_login` parameter to prompt the user to reattempt LINE Login with an authorization URL that has Auto login disabled.

![Simplified flow diagram when auto-login fails](/media/news/disable-auto-login-parameter-en.png){className="[\"w-fix-720\",\"border\"]"}

For more information, see [How to handle Auto login failure](/docs/line-login/how-to-handle-auto-login-failure/) in the LINE Login documentation.
