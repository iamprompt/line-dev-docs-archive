---
title: Using user data in LIFF apps and servers
navigation: true
description: ''
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/liff/using-user-profile
__hash__: e9JrqD6e6pFfXtzcz6Nm8aKGFb1-13wJcDxDK6SCkNo
seo:
  title: Using user data in LIFF apps and servers
  description: ''
---

# :page-title

:markdown-controlsWhen a user launches the LIFF app in a LIFF browser or a user launches the LIFF app in an external browser by logging in with the `liff.init()` method, the LIFF app can get the user's profile (user ID, display name, profile image, and email address).

If your LIFF app doesn't properly handle this user data, it will be vulnerable to spoofing and other types of attacks.

This page describes how to securely use the information of the user who opened the LIFF app in the LIFF app or server.

## Use user data on server

To use the user data on the server, send the ID token or access token from the LIFF app to the server. The server can safely retrieve the user's profile by sending the token sent by the LIFF app to the LINE Platform.

- [Send user ID token to get user data](#sending-id-token)
- [Send access token to get user data](#sending-access-token)

::admonition{title="Don't send user info to server" type="warning"}
Don't send the details of the user profile obtained with `liff.getDecodedIDToken()` and `liff.getProfile()` to the server from the LIFF app.
::

::admonition{title="Tip" type="tip"}
The LIFF SDK verifies ID tokens and access tokens obtained from the LINE Platform. You can trust the tokens obtained with `liff.getIDToken()` and `liff.getAccessToken()`.
::

### Send user ID token to get user data

When you send the ID token obtained by [`liff.getIDToken()`](/reference/liff/#get-id-token) to the server, the server verifies the ID token and [POST /oauth2/v2.1/verify](/reference/line-login/#verify-id-token) can be used to securely get the user's profile information.

:interactive-svg{src="/media/liff/send-user-profile-via-id-token.svg" border}### Send access token to get user data

When you send the access token retrieved from [`liff.getAccessToken()`](/reference/liff/#get-access-token) to the server, the server will verify the validity of the token ([GET /oauth2/v2.1/verify](/reference/line-login/#verify-access-token)) and also verifies the channel ID and the validity period of the access token so the server can securely get the user's profile information ([GET /v2/profile](/reference/line-login/#get-user-profile)).

When [the user closes the LIFF app](/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app), the access token will be revoked even if it hasn't expired.

:interactive-svg{src="/media/liff/send-user-profile-via-access-token.svg" border}## Use user data in LIFF app

Use the user's profile information obtained from [`liff.getDecodedIDToken()`](/reference/liff/#get-decoded-id-token) or [`liff.getProfile()`](/reference/liff/#get-profile).

:interactive-svg{src="/media/liff/use-user-profile-on-liff-app.svg" border}::admonition{title="Don't send user info to server" type="warning"}
Don't send the details of the user profile obtained with `liff.getDecodedIDToken()` and `liff.getProfile()` to the server from the LIFF app.
::
