---
title: Deauthorize
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login/deauthorize
__hash__: lJW9NzBu110PwSMu6Vp-DwwX0yHWqIkcEgbcGuxNVwM
seo:
  description: ''
---

### Deauthorize your app to which the user has granted permissions

::reference-with-code
  :::reference-content
  Deauthorize your app on behalf of the user, revoking the permissions previously granted by the user. For more information, see the required matter "[Deauthorize your app when a user unregisters from your app](/docs/line-login/development-guidelines/#deauthorize)" in the [LINE Login development guidelines](/docs/line-login/development-guidelines/).

  You can also revoke permissions for LIFF apps and LINE MINI Apps with this endpoint.

  For more information about how a user can deauthorize apps to which the user has granted permissions, see [Managing authorized apps](/docs/line-login/managing-authorized-apps/) in the LINE Login documentation.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/user/v1/deauthorize \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d '{
          "userAccessToken": "{user access token}"
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/user/v1/deauthorize`

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`

  The following types of channel access tokens are available:

  - [Channel access token with a user-specified expiration (Channel access token v2.1)](/docs/basics/channel-access-token/#user-specified-expiration)
  - [Stateless channel access token](/docs/basics/channel-access-token/#stateless-channel-access-token)

  For more information about how to issue channel access tokens, see [Channel access token](/docs/basics/channel-access-token/) in the LINE Platform basics.
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  userAccessToken

  #undefined
  String

  Access token of the target user
  :::
::

#### Response

Returns status code `204` and an empty response body.

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                                                                                                |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `400` | Invalid access token for the target user. Consider these reasons:- The user has already deauthorized your app. - You have already deauthorized your app on behalf of the user via the API. |
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If the access token for the target user is invalid (400 Bad Request)
      {
        "message": "invalid token"
      }
      ```
      :::::
    ::::
  :::
::
