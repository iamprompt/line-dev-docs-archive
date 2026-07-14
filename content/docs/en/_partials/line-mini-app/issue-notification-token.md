---
title: Issue Notification Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-mini-app/issue-notification-token
__hash__: LMcteq2MY7yvE00dA9Qwn8I01cqkE_XRkz6OTaAdKs0
seo:
  description: ''
---

### Issuing a service notification token

::reference-with-code
  :::reference-content
  Issues a service notification token. Service notification tokens are used to send a service message to the associated user.

  Service notification tokens have the following features:

  - A service notification token expires 1 year (31,536,000 seconds) after being issued. While it is still valid, up to 5 service messages can be sent.
  - Every time you use the service notification token, the token value is renewed unless it expired or no longer has remaining message counts. If you are planning to send successive service messages to a user, keep the renewed service notification token.

    ::::admonition
    ---
    title: >-
      Don't issue more than one service notification token with a single access
      token
    type: warning
    ---
    Issuing multiple service notification tokens reusing an access token obtained by [`liff.getAccessToken()`](/reference/liff/#get-access-token) (LIFF access token) is not allowed.

    Only one service notification token can be issued per LIFF access token.
    ::::

    ::::admonition{title="Note" type="note"}
    Each service notification token is associated with one user. You can't use a service notification token associated with one user to send a service message to other users.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X POST https://api.line.me/message/v3/notifier/token \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer W1TeHCgfH2Liwa...' \
      -d '{
          "liffAccessToken": "eyJhbGciOiJIUzI1NiJ9..."
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/message/v3/notifier/token`

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`  

  For more information, see [Channel access token](/docs/basics/channel-access-token/) in the LINE Platform basics.
  :::
::

::admonition
---
title: Use of stateless channel access tokens is recommended
type: note
---
[Long-lived channel access tokens](/docs/basics/channel-access-token/#long-lived-channel-access-token) and [channel access token with a user-specified expiration (Channel Access Token v2.1)](/docs/basics/channel-access-token/#user-specified-expiration) can't be used for LINE MINI App channels.

When developing LINE MINI Apps, either [stateless channel access tokens](/docs/basics/channel-access-token/#stateless-channel-access-token) or [short-lived channel access tokens](/docs/basics/channel-access-token/#short-lived-channel-access-token) can be used. Stateless channel access tokens are recommended among those two. Stateless channel access tokens have an unlimited number of issuances, so there is no need for the application to manage the token lifecycle.
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  liffAccessToken

  #undefined
  String

  User access token obtained by [`liff.getAccessToken()`](/reference/liff/#get-access-token) (LIFF access token).
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      notificationToken

      #undefined
      String

      Service notification token
      :::::

      :::::parameter-table-entry
      #undefined
      expiresIn

      #undefined
      Number

      The amount of time remaining in seconds before the service notification token expires. A service notification token expires 1 year (31,536,000 seconds) after being issued.
      :::::

      :::::parameter-table-entry
      #undefined
      remainingCount

      #undefined
      Number

      The number of times you can send a service message with the issued service notification token
      :::::

      :::::parameter-table-entry
      #undefined
      sessionId

      #undefined
      String

      The session ID. For more information, see [Sending service messages](/docs/line-mini-app/develop/service-messages/).
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "notificationToken": "34c11a03-b726-49e3-8ce0-949387a9..",
        "expiresIn": 31536000,
        "remainingCount": 5,
        "sessionId": "xD06...."
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  Returns one of the following status codes and error messages.

  | Status code               | Description                                                                                                                                                                                                                                                                                                                               |
  | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | 400 Bad request           | This status code means one of the following: - There is a problem with the request body. - The LIFF access token specified in the `liffAccessToken` property was used multiple times in a short span of time to request the issuing of service notification tokens.                                                                       |
  | 401 Unauthorized          | This status code means one or both of the following: - A valid channel access token hasn't been specified. - A valid LIFF access token hasn't been specified.    - When [the user closes the LIFF app](/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app), the LIFF access token will be revoked even if it hasn't expired. |
  | 403 Forbidden             | This channel isn't authorized to issue service messages.                                                                                                                                                                                                                                                                                  |
  | 500 Internal Server Error | Error on the internal server                                                                                                                                                                                                                                                                                                              |
  :::

  :::reference-code
  *Example of an empty LIFF access token*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "message": "[liffAccessToken] must not be blank"
      }
      ```
      :::::
    ::::

  *Example of an expired access token*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "message": "The access token expired"
      }
      ```
      :::::
    ::::

  *Example of an invalidated access token (e.g., due to the user closing the LIFF app)*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "message": "The access token revoked"
      }
      ```
      :::::
    ::::
  :::
::
