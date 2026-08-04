---
title: Revoke Channel Access Token V21
navigation: true
description: ''
meta: '{}'
path: /en/_partials/common/revoke-channel-access-token-v2.1
__hash__: ZXyRQN-xNlsoUZhPNLsGJoRKpy_2HIP18WirVYaPNzM
seo:
  description: ''
---

### Revoke channel access token v2.1

:api-endpoint{protocol="post" endpoint="https://api.line.me/oauth2/v2.1/revoke"}::reference-with-code
  :::reference-content
  Revokes a channel access token v2.1.

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
      curl -X POST https://api.line.me/oauth2/v2.1/revoke \
      --data-urlencode 'client_id={channel ID}' \
      --data-urlencode 'client_secret={channel secret}' \
      --data-urlencode 'access_token={access token}'
      ```
      :::::
    ::::
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  client_id

  #undefined
  String

  Channel ID
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_secret

  #undefined
  String

  Channel Secret
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  access_token

  #undefined
  String

  Channel access token
  :::
::

#### Response

Returns status code `200` and an empty response body.

::admonition{title="Note" type="note"}
No error occurs if an invalid channel access token is specified.
::

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                                                                                                                 |
  | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Problem with the request. Consider these reasons:- An invalidly formatted channel access token is specified. - A non-existent channel access token is specified. - A malformed channel access is specified. |
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalidly formatted channel access token (400 Bad Request)
      {
        "error": "invalid_request",
        "error_description": "The access token not JWS"
      }

      // If you specify a malformed channel access (400 Bad Request)
      {
        "error": "invalid_request",
        "error_description": "The access token malformed"
      }
      ```
      :::::
    ::::
  :::
::
