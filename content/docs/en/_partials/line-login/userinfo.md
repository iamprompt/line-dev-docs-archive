---
title: Userinfo
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login/userinfo
__hash__: 2BiErLGgE1D8IveTpJ7H_Lp-emICVMVQ7z0c9kLDc4E
seo:
  description: ''
---

### Get user information

::reference-with-code
  :::reference-content
  Gets a user's ID, display name, and profile image. The scope required for the access token is different for the [Get user profile](#get-user-profile) endpoint.

  You can only get the main profile information. You can't get the user's :glossary-tooltip[[subprofile](/glossary/#subprofile)]{glossary-id="subprofile"}.

    ::::admonition{title="Note" type="note"}
    Requires an access token with the `openid` scope. For more information, see [Authenticating users and making authorization requests](/docs/line-login/integrate-line-login/#making-an-authorization-request) and [Scopes](/docs/line-login/integrate-line-login/#scopes) in the LINE Login documentation.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/oauth2/v2.1/userinfo \
      -H 'Authorization: Bearer {access token}'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`GET https://api.line.me/oauth2/v2.1/userinfo`

`POST https://api.line.me/oauth2/v2.1/userinfo`

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{access token}`
  :::
::

#### Response

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      sub

      #undefined
      String

      User ID
      :::::

      :::::parameter-table-entry
      #undefined
      name

      #undefined
      String

      User's display name. Not included if the `profile` scope wasn't specified in the authorization request.
      :::::

      :::::parameter-table-entry
      #undefined
      picture

      #undefined
      String

      User's profile image URL. Not included if the `profile` scope wasn't specified in the authorization request.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "sub": "U1234567890abcdef1234567890abcdef",
        "name": "Taro Line",
        "picture": "https://profile.line-scdn.net/0h8pWWElvzZ19qLk3ywQYYCFZraTIdAGEXEhx9ak56MDxDHiUIVEEsPBspMG1EGSEPAk4uP01t0m5G"
      }
      ```
      :::::
    ::::
  :::
::
