---
title: Validate Batch Control Rich Menus Request
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/validate-batch-control-rich-menus-request
__hash__: kj31gT-6eMleeotIzHkIu56_2-gShDJYi6_8lA15ZIc
seo:
  description: ''
---

### Validate a request of rich menu batch control

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/richmenu/validate/batch"}::reference-with-code
  :::reference-content
  Validate a request body of the [Replace or unlink the linked rich menus in batches](#batch-control-rich-menus-of-users) endpoint.

  You can use this endpoint to detect the following errors, as well as when you replace or unlink the linked rich menu in batch:

  - If you specify the non-existent rich menu
  - If you specify a rich menu with no images
  - If you specify multiple operations in the `operations` property and the operations are incorrect

    - When more than 1,000 arrays are specified in the `operations` property
    - When `type` property is `unlinkAll` and other `type` at the same time
    - When the ID of the same rich menu is specified in multiple `from` properties
  - If you specify invalid string in `resumeRequestKey` property
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/richmenu/validate/batch \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: application/json" \
      -d '{
        "operations": [
          {
            "type": "link",
            "from": "{rich menu ID before replacing}",
            "to": "{rich menu ID after replacing}"
          },
          {
            "type": "unlink",
            "from": "{rich menu ID to unlink}"
          }
        ],
        "resumeRequestKey": "{an arbitrary key string matching the regular expression pattern [0-9a-zA-Z\-_]{1,100}}"
      }'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

2,000 requests per second

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  operations

  #undefined
  Array of [Rich menu operation object](#batch-control-rich-menus-of-users-operations)

  Defines the batch operation to the rich menu.  

  Max: 1,000 objects
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  resumeRequestKey

  #undefined
  String

  Key for retry. Key value is a string matching the regular expression pattern `[0-9a-zA-Z\-_]{1,100}`.
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

  | Code  | Description                                                                                                                                                                                                                                                                                                                                                                              |
  | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Couldn't control the rich menu. Consider these reasons:- An invalid rich menu ID is specified. - The rich menu you want to replace has no image. - More than 1000 operations are specified in the `operations` property. - `unlinkAll` and other types are specified to the `type` property at the same time. - The ID of the same rich menu is specified in multiple `from` properties. |
  | `404` | A non-existent rich menu is specified.                                                                                                                                                                                                                                                                                                                                                   |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a rich menu with no images (400 Bad Request)
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "'to' richmenu (richmenu-0c757d...) must have image but it doesn't",
            "property": "operations[0].to"
          }
        ]
      }

      // If you specify a non-existent rich menu ID (404 Not Found)
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "Richmenu (richmenu-d3385e...) is not found",
            "property": "operations[0].to"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
