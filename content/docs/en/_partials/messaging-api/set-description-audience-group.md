---
title: Set Description Audience Group
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/set-description-audience-group
__hash__: 11bkZpoDnTo6TlRcIul2ryeU0EQrFQ26MRWz7h7q4sM
seo:
  description: ''
---

### Rename an audience

:api-endpoint{protocol="put" endpoint="https://api.line.me/v2/bot/audienceGroup/{audienceGroupId}/updateDescription"}::reference-with-code
  :::reference-content
  Renames an existing audience.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X PUT https://api.line.me/v2/bot/audienceGroup/{audienceGroupId}/updateDescription \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d '{
          "description": "audienceGroupName"
      }'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

60 requests per minute

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  `application/json`
  :::
::

#### Path parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  audienceGroupId

  The audience ID.
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  description

  #undefined
  String

  The audience's name. This is case-insensitive, meaning `AUDIENCE` and `audience` are considered identical.   

  Max character limit: 120
  :::
::

#### Response

Returns the `200` HTTP status code and an empty JSON object.

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                                                                                                                                                                                                                        |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `400` | Problem with the request. Consider these reasons:- A name longer than the maximum number of characters (120) is specified in the `description` property. - An invalid character (such as `\n` or some other control character) is specified in the `description` property. - A non-existent audience is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a name longer than the maximum number of characters (120) in the description property (400 Bad Request)
      {
        "message": "size over audienceGroupName",
        "details": [
          {
            "message": "AUDIENCE_GROUP_NAME_SIZE_OVER"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
