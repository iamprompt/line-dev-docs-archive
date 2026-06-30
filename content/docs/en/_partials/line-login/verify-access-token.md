---
title: Verify Access Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login/verify-access-token
__hash__: tKq7tMB_ByK68r5GyFsyRxQU_7jrXMvKI4NRaWiS45E
seo:
  description: ''
---

### Verify access token validity

::reference-with-code
  :::reference-content
  Verifies if an access token is valid.

  For general recommendations on how to securely handle user registration and login with access tokens, see [Creating a secure login process between your app and server](/docs/line-login/secure-login-process/) in the LINE Login documentation.

    ::::admonition{title="Note" type="note"}
    This is the reference for the LINE Login v2.1 endpoint. For information on the v2.0 endpoint, see [Verify access token validity](/reference/line-login-v2/#verify-access-token) in the LINE Login v2.0 API reference.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET \
      'https://api.line.me/oauth2/v2.1/verify?access_token=eyJhbGciOiJIUzI1NiJ9.UnQ_o-GP0VtnwDjbK0C8E_NvK...'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`GET https://api.line.me/oauth2/v2.1/verify`

#### Query parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  access_token

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

      Permissions granted to the access token. To learn more about scopes, see [Scopes](/docs/line-login/integrate-line-login/#scopes).

      Even if the `email` permission is granted, the `scope` property doesn't include `email`.
      :::::

      :::::parameter-table-entry
      #undefined
      client_id

      #undefined
      String

      Channel ID for which the access token is issued
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
        "scope": "profile",
        "client_id": "1440057261",
        "expires_in": 2591659
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  If the access token has expired, a `400 Bad Request` HTTP status code and a JSON response are returned.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "error": "invalid_request",
        "error_description": "access token expired"
      }
      ```
      :::::
    ::::
  :::
::
