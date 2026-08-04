---
title: Managing users (LINE Login v2.0)
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /en/docs/line-login/managing-users-v2
__hash__: 6fNog5BY_dLYVi4Q9BUNRhCvUp87EHANfKfGid6UcKw
seo:
  title: Managing users (LINE Login v2.0)
  description: null
---

# :page-title

:markdown-controls:partial{content="documentation-partials/line-login/line-login-v2-is-deprecated/"}This topic explains how to use [LINE Login v2.0](/docs/line-login/overview/#versions) endpoints to manage users who have logged in through the LINE Login API.

## Get user profiles

You can get profile information for users who have been identified by an [access token](/docs/line-login/managing-access-tokens/). Profile information includes a user's ID, display name, profile image, and status message.

Both LINE Login v2.0 and v2.1 share the same method for fetching user profiles. To learn more, see [Getting user profiles](/docs/line-login/managing-users/#get-profile).

## Log out users

::admonition{title="Note" type="note"}
This is the documentation for LINE Login v2.0, an older version of LINE Login.

To learn how to do this using the latest version, LINE Login v2.1, see [Logging out users](/docs/line-login/managing-users/#logout).
::

To create a better user experience, we recommend providing a way for users to log out of your app.

When a user has logged out of your app, revoke their [access token](/docs/line-login/managing-access-tokens-v2/) and delete all the user data in your app.

Example request to revoke an access token:

```sh
curl -v -X POST https://api.line.me/v2/oauth/revoke \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'refresh_token={refresh token}'
```

To learn more, see [Revoke access token](/reference/line-login-v2/#revoke-access-token) in the LINE Login v2.0 API reference.
