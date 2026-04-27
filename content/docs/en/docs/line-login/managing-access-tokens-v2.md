---
title: Managing access tokens (LINE Login v2.0)
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /en/docs/line-login/managing-access-tokens-v2
__hash__: UVLqlWNZJ5q3nyedriOpqFEX6zMZacMWpYl9Jg1D3-I
seo:
  title: Managing access tokens (LINE Login v2.0)
  description: null
---

# :page-title

:markdown-controls:partial{content="documentation-partials/line-login/line-login-v2-is-deprecated/"}The access tokens managed through the LINE Login API verifies that an app has been granted permission to access user data (such as user IDs, display names, profile images, and status messages) saved on the LINE Platform.

This topic explains how to manage access tokens using [LINE Login v2.0](/docs/line-login/overview/#versions) endpoints.

## Get the user's access token

An access token is returned by the LINE Platform once user authentication is complete.

At this point, you can assume the app has permission to access user data.

To learn more, see:

**LINE Login:**

- [Integrating LINE Login (v2.0) with your web app](/docs/line-login/integrate-line-login-v2/)

::admonition{title="Access token validity period" type="note"}
An access token is valid for 30 days after being issued. Any response with an access token also includes the number of seconds until the token expires in the `expires_in` property.
::

### Refresh tokens

A refresh token is returned along with an access token once user authentication is complete.

When an access token expires, you can use a refresh token to get a new one. To learn more, see [Refresh access token](/reference/line-login-v2/#refresh-access-token) in the LINE Login v2.0 API reference.

::admonition{title="Refresh token validity period" type="note"}
A refresh token is valid for up to 90 days after its corresponding access token was issued.

If the refresh token expires, you must prompt the user to log in again to generate a new access token.
::

## Verify access tokens

Verify any access token that you receive from an app or external server before using it on your own servers.

To learn more, see [Verify access token validity](/reference/line-login-v2/#verify-access-token) in the LINE Login v2.0 API reference.

::admonition
---
title: Additional criteria that you need to check after verifying an access token
type: note
---
When the LINE Login API successfully verifies an access token, its response contains a `client_id` property (the channel ID) and an `expires_in` property (the amount of time until the token expires). Make sure that these properties satisfy the following criteria before you use the access token.

| Property     | Criteria                                                |
| ------------ | ------------------------------------------------------- |
| `client_id`  | Channel ID of the LINE Login channel linked to your app |
| `expires_in` | A positive value                                        |
::
