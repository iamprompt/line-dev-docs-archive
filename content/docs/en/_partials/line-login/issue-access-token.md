---
title: Issue Access Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login/issue-access-token
__hash__: c9sFA5nwHz42KsT-PKATQZOrnoDErTp9HwIUvmkuXgI
seo:
  description: ''
---

### Issue access token

:api-endpoint{protocol="post" endpoint="https://api.line.me/oauth2/v2.1/token"}::reference-with-code
  :::reference-content
  Issues access tokens.

  The access tokens managed through the LINE Login API attest that an app has been granted permission to access user data (such as user IDs, display names, profile images, and status messages) saved on the LINE Platform.

  LINE Login API calls require you to provide an access token or refresh token that was sent in an earlier response.

    ::::admonition{title="Note" type="note"}
    - This is the reference for the LINE Login v2.1 endpoint. For information on the v2.0 endpoint, see [Issue access token](/reference/line-login-v2/#issue-access-token) in the v2.0 API reference.
    - As new LINE Login features are added and existing features are modified, the structure of the JSON objects in responses and ID tokens may change. These changes may cause properties to be added or ordered differently; whitespace and line breaks to be added or removed between elements; and the size of the data to vary. Design your backend to be tolerant of future payloads that are structured differently.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/oauth2/v2.1/token \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -d 'grant_type=authorization_code' \
      -d 'code=1234567890abcde' \
      --data-urlencode 'redirect_uri=https://example.com/auth?key=value' \
      -d 'client_id=1234567890' \
      -d 'client_secret=1234567890abcdefghij1234567890ab' \
      -d 'code_verifier=wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1'
      ```
      :::::
    ::::
  :::
::

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
  :::parameter-table-entry{required="true"}
  #undefined
  grant_type

  #undefined
  String

  `authorization_code`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  code

  #undefined
  String

  [Authorization code](/docs/line-login/integrate-line-login/#receiving-the-authorization-code) received from the LINE Platform
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  redirect_uri

  #undefined
  String

  Same value as `redirect_uri` specified in the [authorization request](/docs/line-login/integrate-line-login/#making-an-authorization-request).
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_id

  #undefined
  String

  Channel ID. Found in the [LINE Developers Console](/console/).
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_secret

  #undefined
  String

  Channel secret. Found in the [LINE Developers Console](/console/).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  code_verifier

  #undefined
  String

  A random 43-128 character string consisting of single-byte alphanumeric characters and symbols (e.g. `wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1`).  
    
  If your LINE Login implements PKCE, you can add this parameter to verify the validity of the `code_verifier` on the LINE Platform side before returning the access token.  
    
  For more information on how to implement PKCE, see [Implement PKCE for LINE Login](/docs/line-login/integrate-pkce/#how-to-integrate-pkce) in the LINE Login documentation.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      access_token

      #undefined
      String

      Access token. Valid for 30 days.
      :::::

      :::::parameter-table-entry
      #undefined
      expires_in

      #undefined
      Number

      Number of seconds until the access token expires.
      :::::

      :::::parameter-table-entry
      #undefined
      id_token

      #undefined
      String

      [JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519){rel="[\"nofollow\"]"} with information about the user. This property is returned only if you requested the `openid` scope. For more information about ID tokens, see [Get profile information from ID tokens](/docs/line-login/verify-id-token/).
      :::::

      :::::parameter-table-entry
      #undefined
      refresh_token

      #undefined
      String

      Token used to get a new access token (refresh token). Valid for 90 days after the access token is issued.

      For more information, see [Refresh access token](#refresh-access-token).
      :::::

      :::::parameter-table-entry
      #undefined
      scope

      #undefined
      String

      Permissions granted to the access token. For more information on scopes, see [Scopes](/docs/line-login/integrate-line-login/#scopes).

      Note that the `email` scope isn't returned as a value of the `scope` property even if access to it has been granted.
      :::::

      :::::parameter-table-entry
      #undefined
      token_type

      #undefined
      String

      `Bearer`
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "access_token": "bNl4YEFPI/hjFWhTqexp4MuEw5YPs...",
        "expires_in": 2592000,
        "id_token": "eyJhbGciOiJIUzI1NiJ9...",
        "refresh_token": "Aa1FdeggRhTnPNNpxr8p",
        "scope": "profile",
        "token_type": "Bearer"
      }
      ```
      :::::
    ::::
  :::
::
