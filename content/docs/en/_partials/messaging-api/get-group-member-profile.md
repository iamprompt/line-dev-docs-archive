---
title: Get Group Member Profile
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-group-member-profile
__hash__: coDBUSbPlcM3Q0iBG0tv4P0QVj1xjIeRHJHkubxKY9A
seo:
  description: ''
---

### Get group chat member profile

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/group/{groupId}/member/{userId}"}::reference-with-code
  :::reference-content
  Gets the profile information of a member of a group chat that the LINE Official Account is in if the user ID of the group member is known.

    ::::admonition{title="Tip" type="tip"}
    You can get the profile information of users in the same group chat, regardless of whether they have added your LINE Official Account as a friend, or blocked your LINE Official Account.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/group/{groupId}/member/{userId} \
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
      displayName

      #undefined
      String

      Display name
      :::::

      :::::parameter-table-entry
      #undefined
      userId

      #undefined
      String

      User ID
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      pictureUrl

      #undefined
      String

      Profile image URL. Not included in the response if the user doesn't have a profile image.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "displayName": "LINE taro",
        "userId": "U4af4980629...",
        "pictureUrl": "https://sprofile.line-scdn.net/0hHkIRkHJF..."
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

  | Code  | Description                                                                                                                                                                                                                              |
  | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Problem with the request. Consider these reasons:- An invalid group ID is specified. - An invalid user ID is specified.                                                                                                                  |
  | `404` | Unable to get profile information. Consider these reasons:- A non-existent group or a group that your LINE Official Account doesn't participate in is specified. - A non-existent user or a user who hasn't joined a group is specified. |

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

      // If you specify a non-existent group or user, or a group that your LINE Official Account doesn't participate in (404 Not Found)
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
