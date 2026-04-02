---
title: Get Quota
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-quota
__hash__: '-zT4Dd8KLTzEtKQdBjudNZzLWsKWq9oI8czNwoYZ5p8'
seo:
  description: ''
---

### Get the target limit for sending messages this month

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/quota"}::reference-with-code
  :::reference-content
  Gets the target limit for sending messages in the current month. The total number of the free messages and the additional messages is returned.

  The number of messages retrieved by this endpoint includes the number of messages sent from LINE Official Account Manager.

  Set a target limit for the additional messages with LINE Official Account Manager. For more information about configuration, see [Using and billing (plan changes and payment management)](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_plan/?list=7171){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/message/quota \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### API Playground

:api-playground{endpoint="/bot/message/quota"}#### Rate limit

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

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      One of the following values to indicate whether a target limit is set or not.

      - `none`: This indicates that a target limit is not set.
      - `limited`: This indicates that a target limit is set.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      value

      #undefined
      Number

      The target limit for sending messages in the current month. This property is returned when the `type` property has a value of `limited`.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "limited",
        "value": 1000
      }
      ```
      :::::
    ::::
  :::
::

#### Error Response

For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
