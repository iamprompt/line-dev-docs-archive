---
title: LINE Login now supports PKCE
navigation: true
description: >-
  We now support PKCE for LINE Login, which will make the authorization flow of
  LINE Login v2.1 more secure.
meta: '{"date":"2021-04-09 00:00 UTC","tags":"LINE Login","locale":"en"}'
path: /en/_partials/news/2021/2021-04-09-line-login-pkce-support
__hash__: cHw9nNuzfQKcGJzkVyF-gE7frihDr-vZQRvC7GHtGCk
seo:
  title: LINE Login now supports PKCE
  description: >-
    We now support PKCE for LINE Login, which will make the authorization flow
    of LINE Login v2.1 more secure.
---

We now support PKCE for LINE Login, which will make the authorization flow of LINE Login v2.1 more secure.

## What is PKCE

PKCE (Proof Key for Code Exchange) is an OAuth2.0 extension specification defined in [RFC7636](https://datatracker.ietf.org/doc/html/rfc7636){rel="[\"nofollow\"]"}, intended to combat authorization code interception attacks.

The OAuth2.0 authorization flow that doesn't use PKCE is vulnerable to user-specific access tokens being stolen if a malicious app somehow gets the custom URI containing the authorization code. By implementing the PKCE authorization flow into web apps that incorporate LINE Login, you can further improve the security of LINE Login v2.1 and prevent authorization code interception attacks.

## Benefits of implementing PKCE for LINE Login

The behavior against authorization code interception attacks differs depending on whether PKCE is implemented or not in the web app that uses LINE Login. We recommend implementing PKCE to make your web app more secure.

| Without PKCE implemented                                                                                                                                                                                                                                                                                                 | With PKCE implemented                                                                                                                                                                                                                                                                                                                                                                 |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| If a malicious app somehow gets a callback URL containing an authorization code, it can steal an access token.   ![Authorization code interception attack when PKCE isn't implemented](/media/line-login/new-user-login-without-pkce-en.svg){style="padding-top:1em; width:1200px" className="[\"bg-border\",\"mt-3\"]"} | Even if a malicious application steals the information passed during the redirection, it can be checked against a unique `code_challenge` to prevent access tokens from being stolen.   ![Authorization code interception attack when PKCE is implemented](/media/line-login/new-user-login-with-pkce-en.svg){style="padding:1em; width:1200px" className="[\"bg-border\",\"mt-3\"]"} |

::admonition{title="Another benefit of implementing PKCE" type="tip"}
If you access a web app that incorporates PKCE-implemented LINE Login from the [Yahoo! JAPAN app](https://promo-mobile.yahoo.co.jp/yjapp/){rel="[\"nofollow\"]"}, the [auto login](/docs/line-login/integrate-line-login/#line-auto-login) function that lets you skip the login process using your email address and password will be enabled.

![Auto login from the Yahoo! JAPAN app](/media/line-login/yja-to-line-login-en.png){className="[\"w-fix-680\"]"}
::

For more information on how to implement PKCE, see [Implement PKCE for LINE Login](/docs/line-login/integrate-pkce/#how-to-integrate-pkce) in the LINE Login documentation.
