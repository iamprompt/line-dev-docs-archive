---
title: Verify Channel Access Token V21
navigation: true
description: ''
meta: '{}'
path: /en/_partials/common/verify-channel-access-token-v2.1
__hash__: 9vU_lfzFbMlQFHWOMFTrnYeJ5v3aBZgZj43dV1fV9eg
seo:
  description: ''
---

### Verify the validity of the channel access token v2.1

:api-endpoint{protocol="get" endpoint="https://api.line.me/oauth2/v2.1/verify"}::reference-with-code
  :::reference-content
  You can verify whether a [Channel access token with a user-specified expiration (Channel Access Token v2.1)](/docs/basics/channel-access-token/#user-specified-expiration) is valid.
  :::

  :::reference-code
  *Request example*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/oauth2/v2.1/verify \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'access_token=eyJhbGciOiJIUzI1NiJ9.UnQ_o-GP0VtnwDjbK0C8E_NvK...' \
      -G
      ```
      :::::
    ::::
  :::
::

#### Query parameter

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  access_token

  Channel access token with a user-specified expiration (Channel Access Token v2.1).
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
        "client_id": "1573163733",
        "expires_in": 2591659,
        "scope": "profile chat_message.write"
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

  | Code  | Description                                                                                                                                                                                              |
  | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Problem with the request. Consider these reasons:- An invalidly formatted channel access token is specified. - The channel access token has expired. - A non-existent channel access token is specified. |
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If the channel access token has expired (400 Bad Request)
      {
          "error": "invalid_request",
          "error_description": "The access token expired"
      }

      // If you specify an invalidly formatted channel access token (400 Bad Request)
      {
          "error": "invalid_request",
          "error_description": "The access token not JWS"
      }
      ```
      :::::
    ::::
  :::
::
