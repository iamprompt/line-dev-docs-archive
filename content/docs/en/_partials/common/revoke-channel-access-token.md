---
title: Revoke Channel Access Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/common/revoke-channel-access-token
__hash__: zyxhk-NRTsy6HPbJ6um9zNNr1Yr79Wvrw_iRhE_6XXI
seo:
  description: ''
---

### Revoke short-lived or long-lived channel access token

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/oauth/revoke"}::reference-with-code
  :::reference-content
  Revokes a short-lived or long-lived channel access token.

  Revokes channel access token in these instances:

  - When old channel access tokens are no longer needed because channel access tokens have been reissued
  - When a channel access token is suspected to have been leaked

  There is no need to revoke a channel access token that has already expired.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/oauth/revoke \
      -H "Content-Type: application/x-www-form-urlencoded" \
      --data-urlencode 'access_token={channel access token}'
      ```
      :::::
    ::::
  :::
::

#### API Playground

:api-playground{endpoint="/oauth/revoke"}#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/x-www-form-urlencoded
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  access_token

  #undefined
  String

  Channel access token
  :::
::

#### Response

Returns status code `200` and an empty response body. No error occurs if an invalid channel access token is specified.

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                               |
  | ----- | --------------------------------------------------------- |
  | `400` | An invalidly formatted channel access token is specified. |
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalidly formatted channel access token (400 Bad Request)
      {
        "error": "invalid_request"
      }
      ```
      :::::
    ::::
  :::
::
