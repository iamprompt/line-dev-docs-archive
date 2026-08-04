---
title: Delete Rich Menu Alias
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/delete-rich-menu-alias
__hash__: qHeRZT8zvp0v9feKjnog3G1i9GPSA_bbYbBkKvixEvo
seo:
  description: ''
---

### Delete rich menu alias

:api-endpoint{protocol="delete" endpoint="https://api.line.me/v2/bot/richmenu/alias/{richMenuAliasId}"}::reference-with-code
  :::reference-content
  Deletes rich menu alias.

    ::::admonition{title="On rich menu alias count limit" type="note"}
    You can create up to 1,000 rich menu aliases per LINE Official Account using the Messaging API. Once you reach this limit, you must delete existing rich menu aliases before creating new rich menu aliases.
    ::::
  :::

  :::reference-code
  *Request example*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      # Example of deleting rich menu alias A
      curl -v -X DELETE https://api.line.me/v2/bot/richmenu/alias/richmenu-alias-a \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

100 requests per hour

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

  Rich menu alias ID that you want to delete.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns the `200` HTTP status code and an empty JSON object.
  :::

  :::reference-code
  *Response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {}
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
