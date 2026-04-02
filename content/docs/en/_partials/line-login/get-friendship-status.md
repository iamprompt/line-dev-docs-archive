---
title: Get Friendship Status
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login/get-friendship-status
__hash__: Jkxahj8TYXH_weHyxL_tS-Tp-ekQTIB611TSCVtNmfs
seo:
  description: ''
---

### Get friendship status

::reference-with-code
  :::reference-content
  Gets the friendship status between a user and the LINE Official Account linked to your LINE Login channel.

  For more information on how to use the add friend option, see [Add a LINE Official Account as a friend when logged in (add friend option)](/docs/line-login/link-a-bot/) in the LINE Login documentation.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/friendship/v1/status \
      -H 'Authorization: Bearer {access token}'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`GET https://api.line.me/friendship/v1/status`

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{access token}`
  :::
::

::admonition{title="Note" type="note"}
Requires an access token with the `profile` scope. For more information, see [Authenticating users and making authorization requests](/docs/line-login/integrate-line-login/#making-an-authorization-request) and [Scopes](/docs/line-login/integrate-line-login/#scopes) in the LINE Login documentation.
::

#### Response

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      friendFlag

      #undefined
      Boolean

      - `true`: The user has added the LINE Official Account as a friend and has not blocked it.
      - Otherwise, `false`.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "friendFlag": true
      }
      ```
      :::::
    ::::
  :::
::
