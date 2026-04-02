---
title: Get Membership User Ids
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-membership-user-ids
__hash__: teE2rGtq32bGjVYix6G1MNHX7ykhDk2Ss2ZV4RjWsMM
seo:
  description: ''
---

### Get a list of users who have joined the membership

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/membership/{membershipId}/users/ids"}::reference-with-code
  :::reference-content
  You can obtain a list of user IDs for users who have joined a membership of your LINE Official Account.

  #### Restrictions on user IDs that can be obtained

  Even if a user joins a membership, if any of the following conditions are met, that user's user ID won't be included in the list:

  - The user has deleted their LINE account.
  - The user has blocked your LINE Official Account.
  - The user hasn't added your LINE Official Account as a friend.
  - The user hasn't consented to allow access to their profile information. For more information, see [Consent on getting user profile information](/docs/messaging-api/user-consent/) in the Messaging API documentation.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/membership/{membershipId}/users/ids \
      -H 'Authorization: Bearer {channel access token}' \
      -d 'limit={limit}' \
      -d 'start={start}' \
      -G
      ```
      :::::
    ::::
  :::
::

#### Rate limit

200 requests per second

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
  membershipId

  Membership ID.
  :::
::

#### Query parameters

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  limit

  #undefined
  Number

  The maximum number of user IDs to obtain in a single request. The default value is `300`.  

  Max value: `1000`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  start

  The value of the continuation token. This is included in the `next` property of the JSON object returned in the [response](#get-follower-ids-response). If you can't obtain all of the user IDs in a single request, you can specify this parameter to obtain the remaining array.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following properties.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      userIds

      #undefined
      Array of strings

      An array of the user IDs of users who have joined the membership. The number of user IDs contained in the `userIds` property may not always be the same as the number specified by the `limit` query parameter, even when the `next` property is returned, because the user IDs that can be obtained depend on the users' status. For more information, see [Restrictions on user IDs that can be obtained](#get-membership-user-ids-restrictions).  

      Max: The number specified by the `limit` query parameter
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      next

      #undefined
      String

      Continuation token. Used to obtain the list of the next user IDs. This property is only returned if there are user IDs that couldn't be obtained from the previous response's `userIds` property.

      The continuation token expires in 24 hours (86,400 seconds).
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "userIds": ["U4af4980629...", "U0c229f96c4...", "U95afb1d4df..."],
        "next": "yANU9IA..."
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

  | Code  | Description                                                                                                                                                     |
  | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Problem with the request. Consider these reasons:- An invalid continuation token is specified. - An invalid value is specified for the `limit` query parameter. |
  | `404` | A membership ID that doesn't exist is specified for the `membershipId` path parameter.                                                                          |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a membership ID that doesn't exist in the membershipId path parameter (404 Not Found)
      {
        "message": "Membership ID is not found"
      }
      ```
      :::::
    ::::
  :::
::
