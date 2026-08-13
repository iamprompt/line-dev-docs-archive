---
title: Send tokens, not profile data, to your server
navigation: true
description: >-
  When integrating LINE Login or developing a LINE MINI App, you may notice that
  you can get profile information such as an end user's user ID and display
  name. It might seem that you can send the profile information to your
  service's server and use it as is for login or account linking.
meta: >-
  {"date":"2026-08-13 00:00 UTC","tags":"line-login, liff,
  line-mini-app","locale":"en","sidebar":false}
path: /en/tips/2026/08/13/send-token-to-server
__hash__: 8UrKIwPq7_h-P4cPrJsouy_5y2UOSquitSZtuWkxgxI
seo:
  title: Send tokens, not profile data, to your server
  description: >-
    When integrating LINE Login or developing a LINE MINI App, you may notice
    that you can get profile information such as an end user's user ID and
    display name. It might seem that you can send the profile information to
    your service's server and use it as is for login or account linking.
---

::Tips
# :page-title

  :::display-date{date="2026/08/13" .!mb-20}

  :::

When integrating LINE Login or developing a LINE MINI App, you may notice that you can get profile information such as an end user's user ID and display name. It might seem that you can send the profile information to your service's server and use it as is for login or account linking.

However, for security reasons, a client shouldn't send profile information such as a user ID to a server as the basis for user authentication. This article explains the basic approach to securely identifying users on your server.

## Profile information sent by a client can be tampered with

For example, you can use [`liff.getProfile()`](/reference/liff/#get-profile) to get the user's ID, display name, and other information in a LIFF app. You can use this information to show the user's profile in the LIFF app's UI.

However, the following implementation, which sends the retrieved information to the server and treats `userId` as the logged-in user, isn't secure:

```javascript
// Incorrect example: Send a user ID to the server
const profile = await liff.getProfile();

await fetch("/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    userId: profile.userId,
    displayName: profile.displayName,
  }),
});
```

Users can modify code running in a browser or app and the requests sent by that code. If an attacker replaces the `userId` in the request with a different value, the server has no way to determine whether that value came from the LINE Platform. Using only this value for login or account linking could allow an attacker to impersonate another user.

The following sequence diagram shows how an attacker who knows another user's user ID can impersonate that user by replacing the `userId`.

  :::interactive-svg
  ---
  src: /media/tips/2026/send-token-to-server-impersonation.svg
  alt: >-
    Sequence diagram showing an attacker replacing the user ID sent by a LIFF app
    and a server issuing a session for another user without verification
  :border: true
  ---
  :::

Suppose an attacker somehow obtains another user's user ID and replaces the `userId` in a login request with that value. If the server issues a session without verifying the value, the attacker could log in as that user, view their account information or reservation history, or fraudulently use their points or coupons. A user ID isn't a password and can't be used by itself to verify a user's identity.

For the same reason, don't send profile information obtained with [`liff.getDecodedIDToken()`](/reference/liff/#get-decoded-id-token) to your server for user authentication.

## Send the raw token and verify it on the server

To identify a user on your server, send a **raw ID token or access token** from the client instead of a user ID. The server then calls a LINE Platform API to verify the token and gets the user ID from the verification result.

The following sequence diagram shows the overall flow when using an ID token.

  :::interactive-svg
  ---
  src: /media/liff/send-user-profile-via-id-token.svg
  alt: >-
    Sequence diagram showing a LIFF app sending an ID token to the service's
    server and the server verifying it with the LINE Platform
  :border: true
  ---
  :::

The important point is that the LIFF app sends the raw ID token, not profile information, to your service's server, and the server uses the verification result received directly from the LINE Platform. The specific steps are as follows:

1. After [`liff.init()`](/reference/liff/#initialize-liff-app) completes, call [`liff.getIDToken()`](/reference/liff/#get-id-token) in the LIFF app to get the raw ID token
2. Send the ID token to your service's server over HTTPS
3. From the server, send the ID token and expected channel ID to the [Verify ID token](/reference/line-login/#verify-id-token) endpoint
4. Treat the `sub` in a successful verification response as the LINE user ID

```javascript
const idToken = liff.getIDToken();
if (!idToken) {
  throw new Error("ID token is unavailable");
}

await fetch("/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ idToken }),
});
```

When integrating LINE Login into a web app, the backend normally sends the authorization code returned to the callback URL to the LINE Platform's token endpoint. The backend then gets an access token and, if the `openid` scope was specified, an ID token. In this case, identify the user from the token obtained and verified by the backend, instead of using a user ID sent from the browser.

You can also use an access token. On your server, call the [Verify access token validity](/reference/line-login/#verify-access-token) endpoint and confirm that the `client_id` in the verification result matches the expected channel ID and that `expires_in` is a positive value. Then get the user ID from the [Get user profile](/reference/line-login/#get-user-profile) endpoint.

## Exchange the verified token for your service's session

After getting the verified user ID, issue a session for your service. Use that session to manage the user's login state in subsequent requests.

1. For a LIFF app, send the ID token or access token to your service's server. For LINE Login integrated into a web app, the backend exchanges the authorization code for tokens
2. Call a LINE Platform API from your service's server to verify the token
3. Get the user ID from the verification result
4. Issue a session for your service based on the obtained user ID

Avoid using a token from the LINE Platform as a long-lived session for your service. In particular, an access token obtained by a LIFF app may be revoked when the user closes the LIFF app. Therefore, implementations that save the token to `localStorage` or a similar location and reuse it the next time the app is opened can cause authentication to fail unexpectedly.

ID tokens and access tokens are credentials. Send them over HTTPS, and don't record them in logs or analytics tools. If you use cookies to manage sessions for your service, protect the session itself appropriately, such as by setting the `Secure` and `HttpOnly` attributes.

## Choose the right data for each purpose

The same user information must be handled differently on the client and the server.

| Purpose                                                   | Information to use                                                                                             |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Show a display name or profile image in the LIFF app's UI | Information obtained with `liff.getProfile()` or `liff.getDecodedIDToken()`                                    |
| Identify a user on the server                             | The result of verifying a raw token obtained with `liff.getIDToken()` or `liff.getAccessToken()` on the server |
| Maintain login state after verification                   | A session issued by your service                                                                               |

## Wrap-up

Profile information obtained on a client can be displayed to the end user, but it can be tampered with. Therefore, using it as is as the basis for user authentication on the server is unsafe. To identify a user on your server, receive a raw ID token or access token and use the result of verifying it with the LINE Platform.

For more information, see [Using user data in LIFF apps and servers](/docs/liff/using-user-profile/) in the LIFF documentation and [LINE Login security checklist](/docs/line-login/security-checklist/) in the LINE Login documentation.

  :::style
  html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags
  ---
  tags: line-login, liff, line-mini-app
  lang: en
  section: tips
  ---
  :::
::
