---
title: Refresh Access Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login-v2/refresh-access-token
__hash__: i0t_xNXmruOjAKxhh_PPu-C8ta6ExdFWE2azWWsBjas
seo:
  description: ''
---

### Refresh access token

::reference-with-code
  :::reference-content
  Gets a new access token using a refresh token. Refresh tokens are returned with the access token when the user authorizes your app.

    ::::admonition{title="Note" type="note"}
    - This is the reference for the LINE Login v2.0 endpoint. For information on the v2.1 endpoint, see [Refresh access token](/reference/line-login/#refresh-access-token) in the LINE Login v2.1 API reference.
    - You can't use this to refresh a channel access token for the Messaging API.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/oauth/accessToken \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'grant_type=refresh_token' \
      --data-urlencode 'client_id={channel ID}' \
      --data-urlencode 'client_secret={channel secret}' \
      --data-urlencode 'refresh_token={refresh token}'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/v2/oauth/accessToken`

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
  grant_type

  #undefined
  String

  `refresh_token`
  :::

  :::parameter-table-entry
  #undefined
  refresh_token

  #undefined
  String

  The refresh token corresponding to the access token to be reissued. Valid for up to 10 days after the access token expires. If the refresh token expires, you must prompt the user to log in again to generate a new access token.
  :::

  :::parameter-table-entry
  #undefined
  client_id

  #undefined
  String

  Channel ID. Found in the [LINE Developers Console](/console/).
  :::

  :::parameter-table-entry
  #undefined
  client_secret

  #undefined
  String

  Channel secret. Found in the [LINE Developers Console](/console/).
  :::
::

#### Response

::reference-with-code
  :::reference-content
  If the access token is successfully refreshed, a new access token and refresh token are returned.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      token_type

      #undefined
      String

      `Bearer`
      :::::

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
      access_token

      #undefined
      String

      Access token
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
      refresh_token

      #undefined
      String

      Token used to get a new access token (refresh token). Valid for up to 10 days after the access token expires.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
         "token_type":"Bearer",
         "scope":"P",
         "access_token":"bNl4YEFPI/hjFWhTqexp4MuEw...",
         "expires_in":2591977,
         "refresh_token":"8iFFRdyxNVNLWYeteMMJ"
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  If the refresh token has expired, a `400 Bad Request` status code is returned with a JSON object.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
          "error": "invalid_grant",
          "error_description": "invalid refresh_token"
      }
      ```
      :::::
    ::::
  :::
::
