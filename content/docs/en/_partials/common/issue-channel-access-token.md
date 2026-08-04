---
title: Issue Channel Access Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/common/issue-channel-access-token
__hash__: TqKjQQF4oB3PMF_Lx0Co1bu6AKKZoIWaUZ2Q4L9WhnU
seo:
  description: ''
---

### Issue short-lived channel access token

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/oauth/accessToken"}::reference-with-code
  :::reference-content
  Issues a short-lived channel access token that's valid for 30 days.

  You can issue up to 30 tokens per channel for short-lived channel access tokens. If the maximum is exceeded, the oldest existing channel access token is revoked. An expired channel access token isn't counted as issued.

    ::::admonition{title="Tip" type="tip"}
    - For Messaging API channels, you can issue a long-term channel access token, a channel access token with a user-specified expiration (channel access token v2.1), or a stateless channel access token. For more information, see [Channel access token](/docs/basics/channel-access-token/) in the LINE Platform basics.
    - Channel access tokens for LINE Login channels can also be issued with this API. The channel access token for the LINE Login channel is available in the [LIFF Server API](/reference/liff-server/).
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/oauth/accessToken \
      -H "Content-Type: application/x-www-form-urlencoded" \
      --data-urlencode 'grant_type=client_credentials' \
      --data-urlencode 'client_id={channel ID}' \
      --data-urlencode 'client_secret={channel secret}'
      ```
      :::::
    ::::
  :::
::

#### API Playground

:api-playground{endpoint="/oauth/accessToken"}#### Rate limit

370 requests per second

For more information on rate limits, see [Rate limits](#rate-limits).

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

  `client_credentials`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_id

  #undefined
  String

  Channel ID. Found on the [LINE Developers Console](/console/).
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_secret

  #undefined
  String

  Channel secret. Found on the [LINE Developers Console](/console/).
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns a `200` HTTP status code and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      access_token

      #undefined
      String

      Short-lived channel access token. Valid for 30 days.

        ::::::admonition{title="Note" type="note"}
        Channel access tokens cannot be refreshed.
        ::::::
      :::::

      :::::parameter-table-entry
      #undefined
      expires_in

      #undefined
      Number

      Time until channel access token expires in seconds from time the token is issued
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
        "access_token": "W1TeHCgfH2Liwa.....",
        "expires_in": 2592000,
        "token_type": "Bearer"
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                                                                                        |
  | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Problem with the request. Consider these reasons:- An invalid channel ID is specified. - An invalid channel secret is specified. - The request parameters are in the wrong format. |
  | `429` | Exceeded the [rate limit](#issue-channel-access-token-rate-limit).                                                                                                                 |
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid channel ID (400 Bad Request)
      {
        "error": "invalid_client",
        "error_description": "invalid client_id"
      }

      // If you specify an invalid channel secret (400 Bad Request)
      {
        "error": "invalid_client",
        "error_description": "invalid client_secret"
      }
      ```
      :::::
    ::::
  :::
::
