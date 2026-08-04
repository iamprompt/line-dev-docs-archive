---
title: Get All Issued Channel Access Token Key Ids V21
navigation: true
description: ''
meta: '{}'
path: /en/_partials/common/get-all-issued-channel-access-token-key-ids-v2.1
__hash__: hP9zDX8JDqarcVFOuiT17GQbJoFaGYYvSHPezrkRjnQ
seo:
  description: ''
---

### Get all valid channel access token key IDs v2.1

:api-endpoint{protocol="get" endpoint="https://api.line.me/oauth2/v2.1/tokens/kid"}::reference-with-code
  :::reference-content
  Gets all valid channel access token key IDs.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X GET https://api.line.me/oauth2/v2.1/tokens/kid \
      --data-urlencode 'client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer' \
      --data-urlencode 'client_assertion={JWT}' \
      -G
      ```
      :::::
    ::::
  :::
::

#### Query parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  client_assertion_type

  #undefined
  String

  URL-encoded value of `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  client_assertion

  #undefined
  String

  A [JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519){rel="[\"nofollow\"]"} the client needs to create and sign with the private key.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns a `200` HTTP status code and a JSON object with this information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      kids

      #undefined
      Array of strings

      Array of channel access token key IDs.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "kids": [
          "U_gdnFYKTWRxxxxDVZexGg",
          "sDTOzw5wIfWxxxxzcmeQA",
          "73hDyp3PxGfxxxxD6U5qYA",
          "FHGanaP79smDxxxxyPrVw",
          "CguB-0kxxxxdSM3A5Q_UtQ",
          "G82YP96jhHwyKSxxxx7IFA"
        ]
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

  | Code  | Description                                                                                                                |
  | ----- | -------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Problem with the request. Consider these reasons:- The JWT assertion verification failed. - The JWT assertion has expired. |
  | `404` | The signature key associated with the JWT assertion isn't registered in the channel.                                       |
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If the JWT assertion has expired (400 Bad Request)
      {
        "error": "invalid_client",
        "error_description": "Invalid exp"
      }

      // If the signature key associated with the JWT assertion isn't registered in the channel (404 Not Found)
      {
        "message": "Cannot find channel key that satisfies the conditions"
      }
      ```
      :::::
    ::::
  :::
::
