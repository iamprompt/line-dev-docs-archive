---
title: Get Rich Menu Alias By Id
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-rich-menu-alias-by-id
__hash__: tNIE7epkNUUSZKSLb8X-6kVjYqtCmeg3Q84RzwRujv8
seo:
  description: ''
---

### Get rich menu alias information

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/richmenu/alias/{richMenuAliasId}"}::reference-with-code
  :::reference-content
  Specifies rich menu alias ID to get information of the rich menu alias.
  :::

  :::reference-code
  *Request example*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      # Example of when you want to get the information of rich menu alias A
      curl -v -X GET https://api.line.me/v2/bot/richmenu/alias/richmenu-alias-a \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

2,000 requests per second

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request header

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Path parameter

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  richMenuAliasId

  The rich menu alias ID whose information you want to obtain.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns the `200` HTTP status code and an empty JSON object.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      richMenuAliasId

      #undefined
      String

      Rich menu alias ID.
      :::::

      :::::parameter-table-entry
      #undefined
      richMenuId

      #undefined
      String

      The rich menu ID associated with the rich menu alias.
      :::::
    ::::
  :::

  :::reference-code
  *Response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "richMenuAliasId": "richmenu-alias-a",
        "richMenuId": "richmenu-88c05ef6921ae53f8b58a25f3a65faf7"
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

  | Code  | Description                                  |
  | ----- | -------------------------------------------- |
  | `400` | An invalid rich menu alias ID is specified.  |
  | `404` | A non-existent rich menu alias is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a rich menu alias that doesn't exist (404 Not Found)
      {
        "message": "richmenu alias not found",
        "details": []
      }
      ```
      :::::
    ::::
  :::
::
