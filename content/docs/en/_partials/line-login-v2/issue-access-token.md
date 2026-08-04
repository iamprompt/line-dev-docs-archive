---
title: Issue Access Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login-v2/issue-access-token
__hash__: vkGYJi-_7_Y648meuNN3vT3n4pmoLukGZXA8B469anU
seo:
  description: ''
---

### Issue access token

::reference-with-code
  :::reference-content
  Issues access token.

  The access tokens managed through the LINE Login API indicate that an app has been granted permission to access user data (such as user IDs, display names, profile images, and status messages) saved on the LINE Platform.

  LINE Login API calls require you to provide an access token or refresh token that was sent in an earlier response.

    ::::admonition{title="Note" type="note"}
    This is a description of the LINE Login v2.0 endpoint. For information on the v2.1 endpoint, see [Issue access token](/reference/line-login/#issue-access-token) in the v2.1 API reference.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/oauth/accessToken \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -d 'grant_type=authorization_code' \
      -d 'code=b5fd32eacc791df' \
      -d 'redirect_uri=https%3A%2F%2Fexample.com%2Fauth' \
      -d 'client_id=12345' \
      -d 'client_secret=d6524edacc8742aeedf98f'
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

  [Authorization code](/docs/line-login/integrate-line-login-v2/#receiving-the-authorization-code) received from the LINE Platform
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  redirect_uri

  #undefined
  String

  Callback URL
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
::

#### Response

::reference-with-code
  :::reference-content
  This returns a `200` status code and a JSON object with the following information.

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
      refresh_token

      #undefined
      String

      Token used to get a new access token (refresh token). Valid for up to 10 days after the access token expires.

      To learn more, see [Refresh access token](#refresh-access-token).
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
          "access_token": "bNl4YEFPI/hjFWhTqexp4MuEw5YPs7qhr6dJDXKwNPuLka...",
          "expires_in": 2591977,
          "refresh_token": "8iFFRdyxNVNLWYeteMMJ",
          "scope": "P",
          "token_type": "Bearer"
      }
      ```
      :::::
    ::::
  :::
::
