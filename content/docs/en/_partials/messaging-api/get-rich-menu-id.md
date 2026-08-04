---
title: Get Rich Menu Id
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-rich-menu-id
__hash__: gA98ycacl2HmaDRNEvLpzj_f9XHwCG0o_OotvkCk5XY
seo:
  description: ''
---

### Get rich menu ID of user

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/user/{userId}/richmenu"}::reference-with-code
  :::reference-content
  Gets the ID of the rich menu linked to a user.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/user/{userId}/richmenu \
      -H 'Authorization: Bearer {channel access token}'
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

#### Path parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  userId

  User ID. Found in the `source` object of [webhook event objects](#webhook-event-objects). Do not use the LINE ID used in LINE.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      richMenuId

      #undefined
      String

      ID of a rich menu
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "richMenuId": "{richMenuId}"
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

  | Code  | Description                                                                                                                                                                                          |
  | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | An invalid user ID is specified.                                                                                                                                                                     |
  | `404` | Could't get a rich menu ID. Consider these reasons:- The user isn't linked to a rich menu. - A non-existent user is specified. - The user hasn't added the target LINE Official Account as a friend. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid user ID (400 Bad Request)
      {
        "message": "The value for the 'userId' parameter is invalid"
      }

      // If you specify the user to whom the rich menu isn't linked (404 Not Found)
      {
        "message": "the user has no richmenu",
        "details": []
      }
      ```
      :::::
    ::::
  :::
::
