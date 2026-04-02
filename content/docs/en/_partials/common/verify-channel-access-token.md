---
title: Verify Channel Access Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/common/verify-channel-access-token
__hash__: F3YE8uvd6KGQk-yrENk0p6nRNGn1rUntvcnJFwn-klM
seo:
  description: ''
---

### Verify the validity of short-lived and long-lived channel access tokens

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/oauth/verify"}::reference-with-code
  :::reference-content
  You can verify whether a [short-lived channel access token](/docs/basics/channel-access-token/#short-lived-channel-access-token) or a [long-lived channel access token](/docs/basics/channel-access-token/#long-lived-channel-access-token) is valid.
  :::

  :::reference-code
  *Request example*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/oauth/verify \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'access_token=bNl4YEFPI/hjFWhTqexp4MuEw5YPs7qhr6dJDXKwNPuLka...'
      ```
      :::::
    ::::
  :::
::

#### Request header

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

  A short-lived or long-lived channel access token.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  If the channel access token is valid, returns a `200` HTTP status code and a JSON object with this information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      client_id

      #undefined
      String

      The channel ID for which the channel access token was issued.
      :::::

      :::::parameter-table-entry
      #undefined
      expires_in

      #undefined
      Number

      Number of seconds before the channel access token expires.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      scope

      #undefined
      String

      Permissions granted to the channel access token.
      :::::
    ::::
  :::

  :::reference-code
  *Response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "client_id": "1350031035",
        "expires_in": 3138007490,
        "scope": "P CM"
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                                                                                                          |
  | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Problem with the request. Consider these reasons:- An invalid channel access token is specified. - An invalidly formatted channel access token is specified. - The channel access token has expired. |
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid channel access (400 Bad Request)
      {
          "error": "invalid_request",
          "error_description": "access_token invalid"
      }

      // If you specify an invalidly formatted channel access token (400 Bad Request)
      {
          "error": "invalid_request",
          "error_description": "access_token in invalid format"
      }
      ```
      :::::
    ::::
  :::
::
