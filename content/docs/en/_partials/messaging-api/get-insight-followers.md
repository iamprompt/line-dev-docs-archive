---
title: Get Insight Followers
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-insight-followers
__hash__: UmWUkYGlaf7MYFt0393SEbd5mzGAGKInmPj5MVv6Nx8
seo:
  description: ''
---

### Get number of followers

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/insight/followers?date={date}"}::reference-with-code
  :::reference-content
  Returns the number of users who have added the LINE Official Account on or before a specified date.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET 'https://api.line.me/v2/bot/insight/followers?date=20190418' \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

60 requests per hour

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Query parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  date

  Date for which to retrieve the number of followers.

  - Format: `yyyyMMdd` (e.g. `20191231`)
  - Timezone: UTC+9
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with these properties:

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      status

      #undefined
      String

      Calculation status. One of:

      - `ready`: Calculation has finished. The numbers are up-to-date.
      - `unready`: We haven't finished calculating followers for the specified `date`. Try again later. Calculation usually takes about a day.
      - `out_of_service`: The specified `date` is earlier than the date on which we first started calculating followers (November 1, 2016).
      :::::

      :::::parameter-table-entry
      #undefined
      followers

      #undefined
      Number

      The number of times, as of the specified `date`, that a user added this LINE Official Account as a friend for the first time. The number doesn't decrease even if a user later blocks the account or when they delete their LINE account.

      This value is `null` if the `status` property isn't `ready`.
      :::::

      :::::parameter-table-entry
      #undefined
      targetedReaches

      #undefined
      Number

      The number of users, as of the specified `date`, that the LINE Official Account can reach through targeted messages based on gender, age, and/or region. This number only includes users who are active on LINE or LINE services and whose demographics have a high level of certainty.

      This value is `null` if the `status` property isn't `ready`.
      :::::

      :::::parameter-table-entry
      #undefined
      blocks

      #undefined
      Number

      The number of users blocking the account as of the specified `date`. The number decreases when a user unblocks the account.

      This value is `null` if the `status` property isn't `ready`.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If the calculation has finished
      {
        "status": "ready",
        "followers": 7620,
        "targetedReaches": 5848,
        "blocks": 237
      }

      // if the calculation hasn't finished yet
      {
        "status": "unready",
        "followers": null,
        "targetedReaches": null,
        "blocks": null
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

  | Code  | Description                              |
  | ----- | ---------------------------------------- |
  | `400` | No date or an invalid date is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you don't specify a date (400 Bad Request)
      {
        "message": "date is required"
      }

      // If you specify an invalid date (400 Bad Request)
      {
        "message": "Bad Request"
      }
      ```
      :::::
    ::::
  :::
::
