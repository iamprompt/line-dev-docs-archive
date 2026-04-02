---
title: Get Batch Control Rich Menus
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-batch-control-rich-menus
__hash__: WMAmqoOed4PTf0Em4c42YmG3C5fvah1KftRUH0Kpg-Q
seo:
  description: ''
---

### Get the status of rich menu batch control

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/richmenu/progress/batch"}::reference-with-code
  :::reference-content
  Get the status of [Replace or unlink a linked rich menus in batches](/reference/messaging-api/#batch-control-rich-menus-of-users).

  You can't get the status anymore after 14 days (336 hours) past the timestamp displayed in `acceptedTime`.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET 'https://api.line.me/v2/bot/richmenu/progress/batch?requestId={request_id}' \
      -H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

100 requests per hour

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
  requestId

  A request ID used to batch control the rich menu linked to the user. Each Messaging API request has a request ID. Find it in the [response headers](#response-headers).
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns a `200` HTTP status code and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      phase

      #undefined
      String

      The current status. One of:

      - `ongoing`: Rich menu batch control is in progress.
      - `succeeded`: Rich menu batch control is complete.
      - `failed`: Rich menu batch control failed. This means that the rich menu for one or more users couldn't be controlled. There may also be users whose operations have been successfully completed.
      :::::

      :::::parameter-table-entry
      #undefined
      acceptedTime

      #undefined
      String

      The accepted time in milliseconds of the request of batch control the rich menu.

      - Format: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){rel="[\"nofollow\"]"} (e.g. `2020-12-03T10:15:30.121Z`)
      - Timezone: UTC
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      completedTime

      #undefined
      String

      The completed time in milliseconds of rich menu batch control. Returned when the `phase` property is `succeeded` or `failed`.

      - Format: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){rel="[\"nofollow\"]"} (e.g. `2020-12-03T10:15:30.121Z`)
      - Timezone: UTC
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "phase": "succeeded",
        "acceptedTime": "2023-06-26T07:37:21.083Z",
        "completedTime": "2023-06-26T09:12:12.197Z"
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

  | Code  | Description                                                                                                                                   |
  | ----- | --------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | An invalid request ID is specified.                                                                                                           |
  | `404` | Couldn't get the status. Consider these reasons:- A non-existent request ID is specified. - The period of time to get the status has expired. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a non-existent request ID (404 Not Found)
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
