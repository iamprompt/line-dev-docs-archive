---
title: Revoke Access Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login/revoke-access-token
__hash__: 5H0E6gZoKv4afJhE5PibXs-iAZDFHkMKED2eF-2PegQ
seo:
  description: ''
---

### Revoke access token

::reference-with-code
  :::reference-content
  Invalidates a user's access token.

    ::::admonition{title="Note" type="note"}
    - This is the reference for the LINE Login v2.1 endpoint. For information on the v2.0 endpoint, see [Revoke access token](/reference/line-login-v2/#revoke-access-token) in the LINE Login v2.0 API reference.
    - You can't use this to invalidate a channel access token for the Messaging API.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/oauth2/v2.1/revoke \
      -H "Content-Type: application/x-www-form-urlencoded" \
      -d "client_id={channel id}&client_secret={channel secret}&access_token={access token}"
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/oauth2/v2.1/revoke`

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
  access_token

  #undefined
  String

  Access token
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

Returns status code `200` and an empty response body.
