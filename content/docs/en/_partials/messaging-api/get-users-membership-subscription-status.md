---
title: Get Users Membership Subscription Status
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-users-membership-subscription-status
__hash__: 8MtJ6Hx7IEKx4FzBrSNjoaMp0EaH8XGOuAJdMK6_DxU
seo:
  description: ''
---

### Get a user's membership subscription status

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/membership/subscription/{userId}"}::reference-with-code
  :::reference-content
  You can get information about the memberships that users have subscribed to.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/membership/subscription/{userId} \
      -H 'Authorization: Bearer {channel access token}'
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
  userId

  User ID of the user whose membership subscription status you want to view.

  For more information on how to get user IDs, see [Get user IDs](/docs/messaging-api/getting-user-ids/) in the Messaging API documentation.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  If the user is subscribed to membership, status code `200` and a JSON object with the following information will be returned.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      subscriptions

      #undefined
      Array

      An array of memberships.
      :::::

      :::::parameter-table-entry
      #undefined
      membership

      #undefined
      Object

      Object containing information about the membership plan.
      :::::

      :::::parameter-table-entry
      #undefined
      membership.membershipId

      #undefined
      Number

      Membership plan ID.
      :::::

      :::::parameter-table-entry
      #undefined
      membership.title

      #undefined
      String

      Membership plan name.
      :::::

      :::::parameter-table-entry
      #undefined
      membership.description

      #undefined
      String

      Membership plan description.
      :::::

      :::::parameter-table-entry
      #undefined
      membership.benefits

      #undefined
      Array of strings

      List of membership plan perks.   

      Max number of perks: 5
      :::::

      :::::parameter-table-entry
      #undefined
      membership.price

      #undefined
      Number

      Monthly fee for membership plan. (e.g. `1500.00`)
      :::::

      :::::parameter-table-entry
      #undefined
      membership.currency

      #undefined
      String

      The currency of `membership.price`. One of:

      - `JPY`: Japanese Yen
      - `TWD`: Taiwan Dollar
      - `THB`: Thai Baht
      :::::

      :::::parameter-table-entry
      #undefined
      user

      #undefined
      Object

      Object containing user membership subscription information.
      :::::

      :::::parameter-table-entry
      #undefined
      user.membershipNo

      #undefined
      Number

      The user's member number in the membership plan.
      :::::

      :::::parameter-table-entry
      #undefined
      user.joinedTime

      #undefined
      Number

      UNIX time at which the user subscribed to the membership (in seconds).
      :::::

      :::::parameter-table-entry
      #undefined
      user.nextBillingDate

      #undefined
      String

      Next payment date for membership plan.

      - Format: `yyyy-MM-dd` (e.g. `2024-02-08`)
      - Timezone: UTC+9
      :::::

      :::::parameter-table-entry
      #undefined
      user.totalSubscriptionMonths

      #undefined
      Number

      The period of time in months that the user has been subscribed to a membership plan. If a user previously canceled and then re-subscribed to the same membership plan, only the period after the re-subscription will be counted.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "subscriptions": [
          {
            "membership": {
              "membershipId": 3189,
              "title": "Basic Plan",
              "description": "You will receive messages and photos every Saturday.",
              "benefits": ["Members Only Messages", "Members Only Photos"],
              "price": 500.00,
              "currency": "JPY"
            },
            "user": {
              "membershipNo": 1,
              "joinedTime": 1707214784,
              "nextBillingDate": "2024-02-08",
              "totalSubscriptionMonths": 1
            }
          }
        ]
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

  | Code  | Description                                                                                                                                                               |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | An invalid user ID is specified.                                                                                                                                          |
  | `404` | Unable to get information about the membership to which the user subscribes. Consider these reasons:- User doesn't subscribe to membership - Target user ID doesn't exist |

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

      // If user doesn't subscribe to membership (404 Not Found)
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
