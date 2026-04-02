---
title: Get Group Summary
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-group-summary
__hash__: IMdWfjMddtQdlhMq-lBi6J9nkA9_ZX_iiFHsC93efjk
seo:
  description: ''
---

### Get group chat summary

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/group/{groupId}/summary"}::reference-with-code
  :::reference-content
  Gets the group ID, group name, and group icon URL of a group chat where the LINE Official Account is a member.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/group/{groupId}/summary \
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
      groupId

      #undefined
      String

      Group ID
      :::::

      :::::parameter-table-entry
      #undefined
      groupName

      #undefined
      String

      Group name
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      pictureUrl

      #undefined
      String

      Group icon URL. Not included in the response if the user doesn't set a group profile icon.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "groupId": "Ca56f94637c...",
        "groupName": "Group name",
        "pictureUrl": "https://profile.line-scdn.net/abcdefghijklmn"
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
