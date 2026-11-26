---
title: Get Quota
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-quota
__hash__: Op-GaicEpYHfgJjkoHjQlQ0j-g7hLaFFfSUsiMH6R3Q
seo:
  description: ''
---

### Get the target limit for sending messages this month

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/quota"}::reference-with-code
  :::reference-content
  This endpoint gets the target limit for sending messages in the current month. It returns the sum of the number of free messages and the target limit for additional messages.

  The target limit returned by this endpoint includes the number of messages sent from LINE Official Account Manager.

  Set the target limit for additional messages in LINE Official Account Manager. For more information, see [Using and billing (plan changes and payment management)](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_plan/?list=7171){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.
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

      The `type` property indicates whether your account has a target limit. The endpoint returns one of these values:

      - `none`: Your account doesn't have a target limit. The endpoint returns this value only for some LINE Official Accounts on special plans, such as the [Local Government Plan](https://linegov.com/){rel="[\"nofollow\"]"} (only available in Japanese). These plans require a separate application to LY Corporation.
      - `limited`: Your account has a target limit. The endpoint returns this value for the [Communication Plan, Light Plan, or Standard Plan](/docs/messaging-api/pricing/#examples-of-subscription-plans) if you signed up in LINE Official Account Manager.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      value

      #undefined
      Number

      The target limit for sending messages in the current month. The endpoint returns this property only when `type` is `limited`. If you've set a target limit for additional messages on the [Standard Plan](/docs/messaging-api/pricing/#examples-of-subscription-plans), `value` is the sum of that limit and the plan's free message allowance.
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
