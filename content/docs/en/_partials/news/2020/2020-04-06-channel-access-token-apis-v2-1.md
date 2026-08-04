---
title: Channel access token v2.1 released
navigation: true
description: >-
  We released the latest version of the channel access token. This new version
  lets the user specify the expiration date and also provides security
  enhancements by switching to using a JSON Web Token (JWT) instead of the
  channel secret.
meta: '{"date":"2020-04-06 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2020/2020-04-06-channel-access-token-apis-v2-1
__hash__: xCRT1MsqDw4iZTEp1MKkRBqsAljvAUsn7wk5b4B4r_U
seo:
  title: Channel access token v2.1 released
  description: >-
    We released the latest version of the channel access token. This new version
    lets the user specify the expiration date and also provides security
    enhancements by switching to using a JSON Web Token (JWT) instead of the
    channel secret.
---

We released the latest version of the channel access token. This new version lets the user specify the expiration date and also provides security enhancements by switching to using a JSON Web Token (JWT) instead of the channel secret.

We recommend using the latest version of the channel access token.

::admonition{title="Generate a JWT" type="note"}
You can use any [JWT library](https://www.jwt.io/libraries){rel="[\"nofollow\"]"} or write your own code from scratch to [Generate a JWT from your Assertion Signing Key](/docs/messaging-api/generate-json-web-token/). This is a necessary step in the Issue channel access token v2.1 API.
::

### New APIs

- [Issue channel access token v2.1](/reference/messaging-api/#issue-channel-access-token-v2-1)
- Get all valid channel access tokens v2.1 (Updated on July 29, 2020: This endpoint is no longer available)
- [Revoke channel access token v2.1](/reference/messaging-api/#revoke-channel-access-token-v2-1)

To learn the difference between the currently available channel access tokens, read [Channel access tokens](/docs/messaging-api/channel-access-tokens/) in the Messaging API documentation.
