---
title: LINE Login security checklist
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-login/security-checklist
__hash__: mA1QsgGM8FLAmFWBrGyZCtferRSvyWZtQ5rkzGuApdg
seo:
  title: LINE Login security checklist
  description: null
---

# :page-title

:markdown-controlsWhen developing an application using LINE Login, you must prepare for potential attacks by third parties and implement the login function without any security flaws.

We provide a checklist to ensure that there are no security flaws when integrating LINE Login into your application. Use the checklist to validate your application before publishing.

We also recommend confirming the session "Implementing safe and secure LINE Login" ([slides](https://speakerdeck.com/line_devday2020/implementing-safe-and-secure-line-login){rel="[\"nofollow\"]"}/[video](https://www.youtube.com/watch?v=mWtuq6eQtWY){rel="[\"nofollow\"]"}) at LINE DEVELOPER DAY 2020.

::admonition
---
title: >-
  Be sure to build a safe system with an understanding of the purpose of the
  checklist
type: tip
---
The checklist contains excerpts of points that require special attention when using LINE Login. Conforming to the contents of the checklist does not guarantee security. Be sure to build a safe system with a full understanding of the dangers.
::

:toc## Checklist for query parameters passed to the authorization URL

The following checklist is for the query parameters to the authorization URL, when initiating the authentication and authorization process. For more information on the authorization URL, see [Authenticating users and making authorization requests](/docs/line-login/integrate-line-login/#making-an-authorization-request).

::admonition{title="Callback URL" type="tip"}
**Callback URL** refers to the **Callback URL** on the **LINE Login tab** of the LINE Login channel in the [LINE Developers Console](/console/). For more information on how to set the **Callback URL**, see [Getting started with LINE Login](/docs/line-login/getting-started/).
::

| Check contents                                                                                                                                                                                                                                      | Related pages                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Is the URL schema specified in `redirect_uri` HTTPS? (Unless there is a specific reason not to specify it.)                                                                                                                                         | - [RFC6749 3.1.2.1.](https://datatracker.ietf.org/doc/html/rfc6749#section-3.1.2.1){rel="[\"nofollow\"]"}                                                                                                                                |
| Do you understand a valid URL as `redirect_uri` is one of the following URLs?- URL that exactly matches the URL registered in the **Callback URL** - URL registered in the **Callback URL** with optional query parameters added                    | - [RFC6749 3.1.2.](https://datatracker.ietf.org/doc/html/rfc6749#section-3.1.2){rel="[\"nofollow\"]"} - [Authenticating users and making authorization requests](/docs/line-login/integrate-line-login/#making-an-authorization-request) |
| Is there a query parameter that receives an arbitrary URL and redirects in the query parameter received by the URL registered in the **Callback URL**? If such a parameter exists, do you verify that Open Redirector vulnerability does not exist? | - [RFC6749 10.15](https://datatracker.ietf.org/doc/html/rfc6749#section-10.15){rel="[\"nofollow\"]"}                                                                                                                                     |
| Is the value specified in `state` randomly generated and unique in a cryptographically secure and unpredictable way, such as SecureRandom, and in a way that can't be predicted by third parties?                                                   | - [RFC6749 10.12.](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12){rel="[\"nofollow\"]"} - [Authenticating users and making authorization requests](/docs/line-login/integrate-line-login/#making-an-authorization-request) |
| Is the value specified for `state` stored in a location inaccessible to a third party, such as follows?- Server session information - Cookies protected by the same-origin policy, etc                                                              | - [RFC6749 10.12.](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12){rel="[\"nofollow\"]"}                                                                                                                                    |
| Is the different value specified for `state` each time a login is attempted, even if the same user tries to log in?                                                                                                                                 | - [RFC6749 10.12.](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12){rel="[\"nofollow\"]"}                                                                                                                                    |

## Checklist for query parameters returned to the callback URL

The following checklist is for the query parameters returned to the callback URL. For more information on the query parameters returned to the callback URL, see [Receiving the authorization response or error response with a web app](/docs/line-login/integrate-line-login/#receiving-the-authorization-code-or-error-response-with-a-web-app).

| Check contents                                                                                    | Related pages                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Do you confirm that the value of `state` matches the `state` specified in the authentication URL? | - [RFC6749 10.12.](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12){rel="[\"nofollow\"]"} - [Receiving the authorization response or error response with a web app](/docs/line-login/integrate-line-login/#receiving-the-authorization-code-or-error-response-with-a-web-app) |

## Checklist for issuing the access token

The following checklist is for issuing the access token using the [LINE Login API](/reference/line-login/). For more information on issuing the access token, see [Issue access token](/reference/line-login/#issue-access-token) and [Managing authorized apps](/docs/line-login/managing-access-tokens/).

| Check contents                                                                                                                            | Related pages                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Do you understand that the channel secret you specify in `client_secret` is confidential information and can't be known by third parties? | - [OpenID Connect 1.0 16.19](https://openid.net/specs/openid-connect-core-1_0.html#rfc.section.16.19){rel="[\"nofollow\"]"} |

## Checklist for using ID tokens and access tokens

The following checklist is for using the ID tokens and access tokens issued by the LINE Platform. For more information on issuing ID tokens and access tokens, see [Get profile information from ID tokens](/docs/line-login/verify-id-token/) and [Managing authorized apps](/docs/line-login/managing-access-tokens/).

| Check contents                                                                                                                                                                                                                                                                        | Related pages                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Have you verified ID tokens and access tokens?                                                                                                                                                                                                                                        | - [Verify access token validity](/reference/line-login/#verify-access-token) - [Verify ID token](/reference/line-login/#verify-id-token) |
| Have you checked the values of the `client_id` and `expires_in` properties meet the following conditions, after successfully verifying the access token?- `client_id`: Same value as the channel ID of the LINE Login channel linked to the native app - `expires_in`: Positive value | - [Using access tokens to register new users](/docs/line-login/secure-login-process/#using-access-tokens)                                |

## Checklist for sending ID tokens and access tokens to the backend server for processing

The following checklist is for user registration and login for using user information obtained by the LINE Platform. For more information on secure user registration and concepts of the login process, see [Creating a secure login process between your app and server](/docs/line-login/secure-login-process/).

| Check contents                                                                                                                                                                                                                                                  | Related pages                                                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Have you sent the raw ID tokens or access tokens from the client to the backend server, instead of user IDs or other information?   * After using APIs that verify ID tokens and access tokens, the backend server can retrieve user IDs and other information. | - [Using access tokens to register new users](/docs/line-login/secure-login-process/#using-access-tokens) - [Verify access token validity](/reference/line-login/#verify-access-token) - [Verify ID token](/reference/line-login/#verify-id-token) |
| Have you verified ID tokens and access tokens that are sent from the client to the backend server?                                                                                                                                                              | - [Using access tokens to register new users](/docs/line-login/secure-login-process/#using-access-tokens)                                                                                                                                          |
