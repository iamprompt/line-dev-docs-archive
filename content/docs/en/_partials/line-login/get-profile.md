---
title: Get Profile
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login/get-profile
__hash__: kzXoT-i_JfPWH0S7PAhWTYhegWT9r4fmJD1FeDK1M1w
seo:
  description: ''
---

### Get user profile

::reference-with-code
  :::reference-content
  Gets a user's ID, display name, profile image, and status message. The scope required for the access token is different for the [Get user information](#userinfo) endpoint.

  You can only get the main profile information. You can't get the user's :glossary-tooltip[[subprofile](/glossary/#subprofile)]{glossary-id="subprofile"}.

    ::::admonition{title="Note" type="note"}
    Requires an access token with the `profile` scope. For more information, see [Authenticating users and making authorization requests](/docs/line-login/integrate-line-login/#making-an-authorization-request) and [Scopes](/docs/line-login/integrate-line-login/#scopes) in the LINE Login documentation.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/profile \
      -H 'Authorization: Bearer {access token}'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`GET https://api.line.me/v2/profile`

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
      userId

      #undefined
      String

      User ID
      :::::

      :::::parameter-table-entry
      #undefined
      displayName

      #undefined
      String

      User's display name
      :::::

      :::::parameter-table-entry
      #undefined
      pictureUrl

      #undefined
      String

      Profile image URL. This is an HTTPS URL. It's only included in the response if the user has set a profile image.

      Profile image thumbnails:

      You can get a thumbnail version of a user's profile image by appending any of the following suffixes to their profile image URL.

      | Suffix   | Thumbnail size |
      | -------- | -------------- |
      | `/large` | 200 x 200      |
      | `/small` | 51 x 51        |

      e.g. `https://profile.line-scdn.net/abcdefghijklmn/large`
      :::::

      :::::parameter-table-entry
      #undefined
      statusMessage

      #undefined
      String

      User's status message. Not included in the response if the user doesn't have a status message.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "userId": "U4af4980629...",
        "displayName": "Brown",
        "pictureUrl": "https://profile.line-scdn.net/abcdefghijklmn",
        "statusMessage": "Hello, LINE!"
      }
      ```
      :::::
    ::::
  :::
::
