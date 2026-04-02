---
title: Verify Id Token
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-login/verify-id-token
__hash__: hVfVwgI-_4LMNbdiMS3o6Tw4J8GSJYhPpHVZ2OnZFfk
seo:
  description: ''
---

### Verify ID token

::reference-with-code
  :::reference-content
  ID tokens are JSON web tokens (JWT) with information about the user. It's possible for an attacker to spoof an [ID token](/docs/line-login/verify-id-token/#id-tokens). Use this call to verify that a received ID token is authentic, meaning you can use it to obtain the user's profile information and email.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST 'https://api.line.me/oauth2/v2.1/verify' \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'id_token=eyJraWQiOiIxNmUwNGQ0ZTU2NzgzYTc5MmRjYjQ2ODRkOD...' \
      --data-urlencode 'client_id=1234567890'
      ```
      :::::
    ::::
  :::
::

#### HTTP request

`POST https://api.line.me/oauth2/v2.1/verify`

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
  id_token

  #undefined
  String

  ID token
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_id

  #undefined
  String

  Expected channel ID. Unique identifier for your channel issued by the LINE Platform. Found in the [LINE Developers Console](/console/).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  nonce

  #undefined
  String

  Expected `nonce` value. Use the `nonce` value provided in the authorization request. Omit if the `nonce` value was not specified in the authorization request.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  user_id

  #undefined
  String

  Expected user ID. Learn how to get the user ID from [Get user profile](/reference/line-login/#get-user-profile).
  :::
::

#### Response

::reference-with-code
  :::reference-content
  The ID token payload is returned when the specified ID token is successfully verified.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      iss

      #undefined
      String

      URL used to generate the ID token.
      :::::

      :::::parameter-table-entry
      #undefined
      sub

      #undefined
      String

      User ID for which the ID token was generated.
      :::::

      :::::parameter-table-entry
      #undefined
      aud

      #undefined
      String

      Channel ID
      :::::

      :::::parameter-table-entry
      #undefined
      exp

      #undefined
      Number

      The expiration time of the ID token in UNIX time (in seconds).
      :::::

      :::::parameter-table-entry
      #undefined
      iat

      #undefined
      Number

      Time when the ID token was generated in UNIX time (in seconds).
      :::::

      :::::parameter-table-entry
      #undefined
      auth_time

      #undefined
      Number

      Time the user was authenticated in UNIX time (in seconds). Not included if the `max_age` value wasn't specified in the authorization request.
      :::::

      :::::parameter-table-entry
      #undefined
      nonce

      #undefined
      String

      The `nonce` value specified in the authorization URL. Not included if the `nonce` value wasn't specified in the authorization request.
      :::::

      :::::parameter-table-entry
      #undefined
      amr

      #undefined
      Array of strings

      A list of authentication methods used by the user. Not included in the payload under certain conditions.

      One or more of:

      - `pwd`: Log in with email and password
      - `lineautologin`: LINE automatic login (including through LINE SDK)
      - `lineqr`: Log in with QR code
      - `linesso`: Log in with single sign-on
      - `mfa`: Log in with two-factor authentication
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

      :::::parameter-table-entry
      #undefined
      email

      #undefined
      String

      User's email address. Not included if the `email` scope wasn't specified in the authorization request.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "iss": "https://access.line.me",
        "sub": "U1234567890abcdef1234567890abcdef",
        "aud": "1234567890",
        "exp": 1504169092,
        "iat": 1504263657,
        "nonce": "0987654asdf",
        "amr": ["pwd"],
        "name": "Taro Line",
        "picture": "https://sample_line.me/aBcdefg123456",
        "email": "taro.line@example.com"
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  A JSON object is returned when the specified ID token fails to be verified.

  | error_description                   | Description                                                                                                               |
  | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
  | Invalid IdToken.                    | The ID token is malformed or the signature is invalid.                                                                    |
  | Invalid IdToken Issuer.             | The ID token was generated on a site other than "[https://access.line.me](https://access.line.me){rel="[\"nofollow\"]"}". |
  | IdToken expired.                    | The ID token has expired.                                                                                                 |
  | Invalid IdToken Audience.           | The ID token's Audience value is different from the `client_id` specified in the request.                                 |
  | Invalid IdToken Nonce.              | The ID token's Nonce value is different from the `nonce` specified in the request.                                        |
  | Invalid IdToken Subject Identifier. | The ID token's SubjectIdentifier value is different from the `user_id` specified in the request.                          |
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "error": "invalid_request",
        "error_description": "Invalid IdToken."
      }
      ```
      :::::
    ::::
  :::
::
