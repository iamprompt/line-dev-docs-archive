---
title: Get Members In Group Count
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-members-in-group-count
__hash__: rg81XAjcfpbluKpS1LFdwx330O7miAFDvW2B5fg800E
seo:
  description: ''
---

### Get number of users in a group chat

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/group/{groupId}/members/count"}::reference-with-code
  :::reference-content
  Gets the count of users in a group chat. You can get the user in group count even if the user hasn't added the LINE Official Account as a friend or has blocked the LINE Official Account.

  The number returned excludes the LINE Official Account.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/group/{groupId}/members/count \
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
  groupId

  Group ID. Found in the source object of [webhook event objects](/reference/messaging-api/#webhook-event-objects).
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with these properties.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      count

      #undefined
      Number

      The count of members in the group chat. The number returned excludes the LINE Official Account.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "count": 3
      }
      ```
      :::::
    ::::
  :::
::

#### Error Response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                          |
  | ----- | ---------------------------------------------------------------------------------------------------- |
  | `400` | An invalid group ID is specified.                                                                    |
  | `404` | A non-existent group or a group that your LINE Official Account doesn't participate in is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid group ID (400 Bad Request)
      {
        "message": "The value for the 'groupId' parameter is invalid"
      }

      // If you specify a non-existent group or a group that your LINE Official Account doesn't participate in (404 Not Found)
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
