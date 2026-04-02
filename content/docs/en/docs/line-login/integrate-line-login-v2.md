---
title: Integrating LINE Login (v2.0) with your web app
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /en/docs/line-login/integrate-line-login-v2
__hash__: ykSL0btjbF-_lu21JSzc5Vch1OE_P_BLZDnR2QTcQ5g
seo:
  title: Integrating LINE Login (v2.0) with your web app
  description: null
---

# :page-title

:markdown-controls:partial{content="documentation-partials/line-login/line-login-v2-is-deprecated/"}This page explains how to integrate LINE Login into your web app. If you don't have an app to integrate LINE Login, you can use a sample app. See [Getting started with LINE Login](/docs/line-login/getting-started/).

## Login flow

The LINE Login process for web apps (web login) is based on the [OAuth 2.0 authorization code flow](https://datatracker.ietf.org/doc/html/rfc6749){rel="[\"nofollow\"]"}.

An overview of the web login flow is shown below. Web apps must implement any part of the login flow that is relevant to them in the flowchart.

![Web login flow](/media/line-login/web-login-flow.svg){className="[\"bg-border\"]"}

## Creating a channel

[Create a LINE Login channel](/docs/line-login/getting-started/#step-1-create-channel) and configure it for use with a web app.

- [Setting a callback URL](#setting-callback-url)

### Setting a callback URL

After the user has been authenticated and authorized your web app, the authorization code and `state` are sent to the callback URL.

Set a callback URL from the **LINE Login** tab of your channel settings in the [LINE Developers Console](/console/).

You can set more than one callback URL per channel.

![Redirect settings](/media/line-login/integrate-login-web/redirect-settings.png){className="[\"border\",\"w-fix-640\"]"}

::admonition{title="Permissions for accessing email addresses" type="note"}
You can't get the email address of a user who has logged in to your app using LINE Login v2.0.
::

## Authenticating users and making authorization requests

Initiate the process of authenticating the user with the LINE Platform and authorizing your app.

Redirect the user to an authorization URL when they click the LINE Login button.

::admonition{title="Tip" type="tip"}
- Follow the [LINE Login button design guidelines](/docs/line-login/login-button/) when adding a LINE Login button to your web app.
- You can also link directly to an authorization URL without showing a LINE Login button.
- The user's authentication credentials aren't sent to your web app.
::

Example authorization URL:

```text
https://access.line.me/dialog/oauth/weblogin?response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth&state=123abc
```

You can pass the following query parameters to the authorization URL.

| Parameter       | Type   | Required | Description                                                                                                                                                                                                                                                          |
| --------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `response_type` | String | Required | `code`                                                                                                                                                                                                                                                               |
| `client_id`     | String | Required | LINE Login Channel ID. You can find this in the [LINE Developers Console](/console/).                                                                                                                                                                                |
| `redirect_uri`  | String | Required | Callback URL registered with the [LINE Developers Console](/console/)                                                                                                                                                                                                |
| `state`         | String | Required | A unique alphanumeric string used to prevent [cross-site request forgery](https://wikipedia.org/wiki/Cross-site_request_forgery){rel="[\"nofollow\"]"}. **Your web app should generate a random value for each login session.** This cannot be a URL-encoded string. |
|                 |        |          |                                                                                                                                                                                                                                                                      |

### User authentication and authorization

::admonition
---
title: >-
  User authentication and authorization are handled directly by the LINE
  Platform
type: tip
---
Web apps that support LINE Login don't have to implement the authorization process themselves.
::

Upon being redirected to the authorization URL, the user logs in with their LINE authentication credentials and decides whether to grant your web app the access permissions it has requested.

Example consent screen:

![Consent screen](/media/line-login/integrate-login-web/consent-screen.png){className="[\"border\",\"w-fix-360\"]"}

## Receiving the authorization code or error response with a web app

The user is redirected to the callback URL once they have completed the authentication and authorization process.

If the user has granted access to your app, an authorization code is returned.

If the user has *not* granted access to your app, an error response is returned.

### Receiving the authorization code

Once the user has been authenticated and has completed the authorization step, they are redirected to the callback URL with these query parameters.

| Parameter | Type   | Description                                                                                                                                                                                                                                         |
| --------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`    | String | Authorization code used to get an access token. Valid for 10 minutes. This authorization code can only be used once.                                                                                                                                |
| `state`   | String | A unique alphanumeric string used to prevent [cross-site request forgery](https://wikipedia.org/wiki/Cross-site_request_forgery){rel="[\"nofollow\"]"}. Verify that this matches the value of the `state` parameter given to the authorization URL. |
|           |        |                                                                                                                                                                                                                                                     |

Example URL of the redirect target:

```text
https://example.com/callback?code=b5fd32eacc791df&state=123abc
```

### Receiving an error response

If the user declines to grant the permissions requested by your app, they are redirected to the callback URL with these query parameters:

| Parameter           | Type   | Description                                                                                                                                                                   |
| ------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `error_description` | String | `The+user+has+denied+the+approval`    **Note:** This parameter does not appear in the in-app browser of iOS and Android apps. We are currently working to resolve this issue. |
| `errorMessage`      | String | `DISALLOWED`                                                                                                                                                                  |
| `errorCode`         | Number | `417`                                                                                                                                                                         |
| `state`             | String | The `state` parameter included in the authorization URL. You can use this value to determine which process was denied.                                                        |
| `error`             | String | `access_denied`                                                                                                                                                               |
|                     |        |                                                                                                                                                                               |

Example URL of the redirect target:

```text
https://example.com/callback?error_description=The+user+has+denied+the+approval&errorMessage=DISALLOWED&errorCode=417&state=123abc&error=access_denied
```

## Getting an access token with a web app

You can obtain an access token if the `state` parameter that you receive along with the authorization code from the LINE Platform matches the `state` parameter that you specified when [authenticating the user and making an authorization request](#making-an-authorization-request).

Sample request:

```sh
curl -v -X POST https://api.line.me/v2/oauth/accessToken \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=authorization_code' \
-d 'code=b5fd32eacc791df' \
-d 'redirect_uri=https%3A%2F%2Fexample.com%2Fauth' \
-d 'client_id=12345' \
-d 'client_secret=d6524edacc8742aeedf98f'
```

Example response:

```json
{
  "access_token": "bNl4YEFPI/hjFWhTqexp4MuEw5YPs7qhr6dJDXKwNPuLka...",
  "expires_in": 2591977,
  "refresh_token": "8iFFRdyxNVNLWYeteMMJ",
  "scope": "P",
  "token_type": "Bearer"
}
```

To learn more, see [Issuing access tokens](/reference/line-login-v2/#issue-access-token) in the LINE Login v2.0 API reference.

## Next steps

Once you have an access token, you can use it to do the following:

- [Manage access tokens (LINE Login v2.0)](/docs/line-login/managing-access-tokens-v2/)
- [Manage users (LINE Login v2.0)](/docs/line-login/managing-users-v2/)
