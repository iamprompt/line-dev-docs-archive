---
title: Get Name List Of Units
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-name-list-of-units
__hash__: nMNPfc28vbnimEhTOgNyrmWtFXmYLSsRWBFlL3aSIJk
seo:
  description: ''
---

### Get a list of unit names assigned during this month

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/aggregation/list"}::reference-with-code
  :::reference-content
  You can get a unique list of unit names assigned to messages during this month.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/message/aggregation/list \
      -H 'Authorization: Bearer {channel access token}' \
      --data-urlencode 'limit=30' \
      -G
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

#### Query parameters

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  limit

  #undefined
  String

  The maximum number of unit names you can get per request. The default value is `100`.  

  Max value: `100`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  start

  #undefined
  String

  Value of the continuation token found in the `next` property of the JSON object returned in the [response](#get-a-list-of-unit-names-assigned-during-this-month-response). If you can't get all the unit names in a single request, include this parameter to get the remaining array.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns a `200` HTTP status code and a JSON object with this information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      customAggregationUnits

      #undefined
      Array of strings

      An array of strings indicating the unit names. The array uniquely contains the unit names assigned to messages during this month.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      next

      #undefined
      String

      A continuation token to get the next array of unit names. Returned only when there are remaining unit names that weren't returned in the `customAggregationUnits` property in the original request.

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
        "customAggregationUnits": ["promotion_a", "promotion_b"],
        "next": "jxEWCEEP..."
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

  | Code  | Description                                                                                                                                              |
  | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Problem with the request. Consider these reasons:- An invalid continuation token is specified. - An invalid value is specified for the `limit` property. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid continuation token, such as expired (400 Bad Request)
      {
        "message": "Invalid start param"
      }
      ```
      :::::
    ::::
  :::
::
