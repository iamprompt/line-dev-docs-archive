---
title: Revoke Access Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login/revoke-access-token
__hash__: OPaGWUWeW1gyEB7Ds-IAhTnYh4fwtbt732GcG3JoB8A
seo:
  description: ''
---

### Revoke access token

::reference-with-code
  :::reference-content
  Invalidates a user's access token.

  To use this endpoint, you must authenticate the client using one of the following methods:

  | Authentication method            | Description                                                                                                                                                                                                   |
  | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Authenticate by the header       | Specify `Basic {A Base64-encoded string of client_id:client_secret}` in the `Authorization` header.                                                                                                           |
  | Authenticate by the request body | Specify `client_id` and `client_secret` as parameters in the request body. Whether `client_secret` is required depends on the app type. For more information, see [Request body](#revoke-token-request-body). |

    ::::admonition{title="Note" type="note"}
    - This is the reference for the LINE Login v2.1 endpoint. For information on the v2.0 endpoint, see [Revoke access token](/reference/line-login-v2/#revoke-access-token) in the LINE Login v2.0 API reference.
    - You can't use this to invalidate a channel access token for the Messaging API.
    ::::
  :::

  :::reference-code
  *Example request (Authenticate by the header)*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/oauth2/v2.1/revoke \
      -H "Authorization: Basic {A Base64-encoded string of client_id:client_secret}" \
      -H "Content-Type: application/x-www-form-urlencoded" \
      -d "access_token={access token}"
      ```
      :::::
    ::::

  *Example request (Authenticate by the request body)*

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

  :::parameter-table-entry{annotation="See description"}
  #undefined
  Authorization

  Basic `{A Base64-encoded string of client_id:client_secret}`

  Required when authenticating by the header.
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

  :::parameter-table-entry{annotation="See description"}
  #undefined
  client_id

  #undefined
  String

  Channel ID. Found in the [LINE Developers Console](/console/).

  Required when authenticating by the request body.
  :::

  :::parameter-table-entry{annotation="See description"}
  #undefined
  client_secret

  #undefined
  String

  Channel secret. Found in the [LINE Developers Console](/console/).

  - Required when authenticating by the request body for channels whose **App types** is only **Web app**.
  - Ignored for channels whose **App types** is **Mobile app** and **Web app**.
  - Ignored for channels whose **App types** is only **Mobile app**.
  :::
::

#### Response

Returns status code `200` and an empty response body.
