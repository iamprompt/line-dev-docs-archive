---
title: Leave Group
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/leave-group
__hash__: TKadvr7q-l8aj2k6JTiG5rYLoA5mOrxKbGvRf3IbYr8
seo:
  description: ''
---

### Leave group chat

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/group/{groupId}/leave"}::reference-with-code
  :::reference-content
  Leaves a [group chat](/docs/messaging-api/group-chats/#group).
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/group/{groupId}/leave \
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

  Group ID. Found in the `source` object of [webhook event objects](#webhook-event-objects).
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and an empty JSON object.
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {}
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
