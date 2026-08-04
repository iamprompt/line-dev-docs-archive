---
title: Managing users
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /en/docs/line-login/managing-users
__hash__: n_Bf5IB-ZGuq7C1ZEN5-mgs687PV-yIGCEr7NHvXy8k
seo:
  title: Managing users
  description: null
---

# :page-title

:markdown-controlsThis topic explains how to manage users who have logged in through the LINE Login API.

## Getting user profiles

You can get profile information for users who have been identified by an [access token](/docs/line-login/managing-access-tokens/). Profile information includes a user's ID, display name, profile image, and status message.

::admonition{title="Check your access token's scope" type="note"}
You need an access token with the `profile` scope to get a user's profile information. To learn more, see [Authenticating users and making authorization requests](/docs/line-login/integrate-line-login/#making-an-authorization-request) and [Scopes](/docs/line-login/integrate-line-login/#scopes).
::

Example request:

```sh
curl -v -X GET https://api.line.me/v2/profile \
-H 'Authorization: Bearer {access token}'
```

Example response:

```json
{
  "userId":"U4af4980629...",
  "displayName":"Brown",
  "pictureUrl":"https://profile.line-scdn.net/abcdefghijklmn",
  "statusMessage":"Hello, LINE!"
}
```

To learn more, see [Get user profile](/reference/line-login/#get-user-profile) in the LINE Login v2.1 API reference.

::admonition{title="Identifying users for a service" type="tip"}
Identify users by their :glossary-tooltip[[user IDs](/glossary/#user-id)]{glossary-id="user-id"}. User IDs can't be changed.

Users can set a new display name, profile image, and status message at any time.

You can't identify users with this information.
::

::admonition{title="Identifying users with ID tokens" type="tip"}
You can get a user's profile information and email address using the ID token that you obtain along with their access token.

To learn more, see [Verify ID token](/reference/line-login/#verify-id-token) in the LINE Login v2.1 API reference.
::

## Logging out users

To create a better user experience, we recommend providing a way for users to log out of your app.

When a user has logged out of your app, revoke their [access token](/docs/line-login/managing-access-tokens/) and delete all the user data in your app.

Example request to revoke an access token:

```sh
curl -v -X POST 'https://api.line.me/oauth2/v2.1/revoke' \
-H "Content-Type:application/x-www-form-urlencoded" \
-d "client_id={channel id}&client_secret={channel secret}&access_token={access token}"
```

To learn more, see [Revoke access tokens](/reference/line-login/#revoke-access-token) in the LINE Login v2.1 API reference.
