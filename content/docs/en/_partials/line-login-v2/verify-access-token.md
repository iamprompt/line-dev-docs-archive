---
title: Verify Access Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login-v2/verify-access-token
__hash__: Xj_MkQx5C8zZGdRuifwHODglYWCQTw8VWRh_TdNqnio
seo:
  description: ''
---

### Verify access token validity

::reference-with-code
  :::reference-content
  Verifies that an access token is valid.

  For general recommendations on how to securely handle user registration and login with access tokens, see [Verify access tokens](/docs/line-login/managing-access-tokens-v2/#verify-access-token) in the LINE Login documentation.

    ::::admonition{title="Note" type="note"}
    This is the reference for the LINE Login v2.0 endpoint. For information on the v2.1 endpoint, see [Verify access token validity](/reference/line-login/#verify-access-token) in the LINE Login v2.1 API reference.
    ::::
  :::

  :::reference-code
  *Example request*

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

#### HTTP request

`POST https://api.line.me/v2/oauth/verify`

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/x-www-form-urlencoded
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry
  #undefined
  access_token

  #undefined
  String

  Access token
  :::
::

#### Response

::reference-with-code
  :::reference-content
  If the access token is valid, a `200 OK` status code is returned with a JSON object that has the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      scope

      #undefined
      String

      Permissions granted to the access token.

      - `P`: You have permission to access the user's profile information.
      :::::

      :::::parameter-table-entry
      #undefined
      client_id

      #undefined
      String

      The channel ID for which the access token was issued.
      :::::

      :::::parameter-table-entry
      #undefined
      expires_in

      #undefined
      Number

      Number of seconds until the access token expires.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
         "scope":"P",
         "client_id":"1350031035",
         "expires_in":2591965
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  If the access token has expired, a `400 Bad Request` status code is returned with a JSON object.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
          "error": "invalid_request",
          "error_description": "access_token invalid"
      }
      ```
      :::::
    ::::
  :::
::
