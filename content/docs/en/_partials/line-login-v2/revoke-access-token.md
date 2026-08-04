---
title: Revoke Access Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login-v2/revoke-access-token
__hash__: j6uTtNUG2ts-OHU9LKhdQM2GCvD1FSGyJ4EYEQgyjIo
seo:
  description: ''
---

### Revoke access token

::reference-with-code
  :::reference-content
  Invalidates a user's access token.

    ::::admonition{title="Note" type="note"}
    - This is the reference for the LINE Login v2.0 endpoint. For information on the v2.1 endpoint, see [Revoke access token](/reference/line-login/#revoke-access-token) in the LINE Login v2.1 API reference.
    - You can't use this to invalidate a channel access token for the Messaging API.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/oauth/revoke \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'refresh_token={refresh token}'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/v2/oauth/revoke`

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
  refresh_token

  #undefined
  String

  The refresh token corresponding to the access token to be invalidated.
  :::
::

#### Response

Returns status code `200` and an empty response body.
