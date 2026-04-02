---
title: Update Rich Menu Alias
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/update-rich-menu-alias
__hash__: JoKMNEmL-EKBi-VH_p_9Mj81xHuhQSQcxU3aMIuxM4s
seo:
  description: ''
---

### Update rich menu alias

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu/alias/{richMenuAliasId}"}::reference-with-code
  :::reference-content
  Updates rich menu aliases. You can specify an existing rich menu alias to modify the associated rich menu.

    ::::admonition{title="When will the updates be reflected?" type="note"}
    Rich menu alias updates may not be reflected immediately due to cache data.
    ::::
  :::

  :::reference-code
  *Request example*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      # Example of when you want to update rich menu alias A
      curl -v -X POST https://api.line.me/v2/bot/richmenu/alias/richmenu-alias-a \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -d \
      '{
          "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4"
      }'
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

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::
::

#### Path parameter

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  richMenuAliasId

  The rich menu alias ID you want to update.
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  richMenuId

  #undefined
  String

  The rich menu ID to be associated with the rich menu alias

    ::::admonition{title="About rich menus that can be associated" type="note"}
    Rich menu aliases can only be associated with rich menus created in the same channel.
    ::::
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

  | Code  | Description                                                                                                                                                                                                                         |
  | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Couldn't update the rich menu alias. Consider these reasons:- A rich menu that doesn't exist or a rich menu without a set image is specified. - An invalid rich menu alias ID is specified. - An invalid rich menu ID is specified. |
  | `404` | A non-existent rich menu alias is specified.                                                                                                                                                                                        |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a rich menu that doesn't exist or a rich menu ID without a set image (400 Bad Request)
      {
          "message": "richmenu not found",
          "details": []
      }

      // If you specify an invalid rich menu ID (400 Bad Request)
      {
          "message": "The request body has 1 error(s)",
          "details": [
              {
                  "message": "invalid richMenuId",
                  "property": "richMenuId"
              }
          ]
      }
      ```
      :::::
    ::::
  :::
::
