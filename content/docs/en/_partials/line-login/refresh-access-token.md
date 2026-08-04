---
title: Refresh Access Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login/refresh-access-token
__hash__: Hn5bCp_2rSYWApeAuZr89pXbg3pR8Px1LuWuCIoiDiI
seo:
  description: ''
---

### Refresh access token

::reference-with-code
  :::reference-content
  Gets a new access token using a refresh token.

  A refresh token is returned along with an access token once user authentication is complete.

    ::::admonition{title="Note" type="note"}
    - This is the reference for the LINE Login v2.1 endpoint. For information on the v2.0 endpoint, see [Refresh access token](/reference/line-login-v2/#refresh-access-token) in the LINE Login v2.0 API reference.
    - You can't use this to refresh a channel access token for the Messaging API.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/oauth2/v2.1/token \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -d 'grant_type=refresh_token&refresh_token={your_refresh_token}&client_id={your_channel_id}&client_secret={your_channel_secret}'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/oauth2/v2.1/token`

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

  `refresh_token`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  refresh_token

  #undefined
  String

  The refresh token corresponding to the access token to be reissued. Valid for up to 90 days after the access token was issued. If the refresh token expires, you must prompt the user to log in again to generate a new access token.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_id

  #undefined
  String

  Channel ID. Found in the [LINE Developers Console](/console/).
  :::

  :::parameter-table-entry{annotation="See description"}
  #undefined
  client_secret

  #undefined
  String

  Channel secret. Found in the [LINE Developers Console](/console/).

  - Required for channels whose **App types** is only **Web app**.
  - Ignored for channels whose **App types** is **Mobile app** and **Web app**.
  - Ignored for channels whose **App types** is only **Mobile app**.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  If the access token is successfully refreshed, a new access token and refresh token are returned.

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
      token_type

      #undefined
      String

      `Bearer`
      :::::

      :::::parameter-table-entry
      #undefined
      refresh_token

      #undefined
      String

      Refresh token you specified for the `refresh_token` property when requesting to reissue an access token. Getting a new access token won't extend the validity period of the refresh token.
      :::::

      :::::parameter-table-entry
      #undefined
      expires_in

      #undefined
      Number

      Validity period of the access token. Expressed in the remaining number of seconds to expiry from when the API was called.
      :::::

      :::::parameter-table-entry
      #undefined
      scope

      #undefined
      String

      Permissions obtained through the access token. For more information on scopes, see [Scopes](/docs/line-login/integrate-line-login/#scopes).

      Even if the `email` permission is granted, the `scope` property doesn't include `email`.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "token_type": "Bearer",
        "scope": "profile",
        "access_token": "bNl4YEFPI/hjFWhTqexp4MuEw...",
        "expires_in": 2591977,
        "refresh_token": "8iFFRdyxNVNLWYeteMMJ"
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  If the refresh token has expired, a `400 Bad Request` HTTP status code and a JSON response are returned.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "error": "invalid_grant",
        "error_description": "invalid refresh token"
      }
      ```
      :::::
    ::::
  :::
::
