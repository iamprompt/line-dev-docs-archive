---
title: Managing access tokens
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /en/docs/line-login/managing-access-tokens
__hash__: xAIlgl-LqZsNklj5pXS2lXDwHKzon3BTO1y_gRGJ7Qw
seo:
  title: Managing access tokens
  description: null
---

# :page-title

:markdown-controlsThe access tokens managed through the LINE Login API verifies that an app has been granted permission to access user data (such as user IDs, display names, profile images, and status messages) saved on the LINE Platform.

## Get the user's access token

An access token is returned by the LINE Platform once user authentication is complete. At this point, you can assume the app has permission to access user data.

To learn more, see:

**LINE Login:**

- [Integrating LINE Login with your web app](/docs/line-login/integrate-line-login/)
- [Integrating LINE Login with your iOS app - Swift](/docs/line-login-sdks/ios-sdk/swift/integrate-line-login/)
- [Integrating LINE Login with your Android app](/docs/line-login-sdks/android-sdk/integrate-line-login/)
- [Integrating LINE Login with your Unity game](/docs/line-login-sdks/unity-sdk/integrate-line-login/)
- [LINE SDK for Flutter](/docs/line-login-sdks/flutter-sdk/)

**LIFF SDK:**

- [Developing a LIFF app](/docs/liff/developing-liff-apps/)

::admonition{title="Access token validity period" type="note"}
An access token is valid for 30 days after being issued. Any response with an access token also includes the number of seconds until the token expires in the `expires_in` property.
::

### Refresh tokens

A refresh token is returned along with an access token once user authentication is complete.

When an access token expires, you can use a refresh token to get a new one. To learn more, see [Refresh access token](/reference/line-login/#refresh-access-token) in the LINE Login v2.1 API reference.

::admonition{title="Refresh token validity period" type="note"}
A refresh token is valid for up to 90 days after its corresponding access token was issued. If the refresh token expires, you must prompt the user to log in again to generate a new access token.
::

## Verify access tokens

Verify any access token that you receive from an app or external server before using it on your own servers.

To learn more about how to verify access tokens, see [Using access tokens to register new users](/docs/line-login/secure-login-process/#using-access-tokens).
