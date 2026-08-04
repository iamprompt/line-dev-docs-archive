---
title: Clear Default Rich Menu
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/clear-default-rich-menu
__hash__: EjmkPwarnwNrpAKFNGHrdu8PIQ6OVBTETw6sYV5p-H8
seo:
  description: ''
---

### Clear default rich menu

:api-endpoint{protocol="delete" endpoint="https://api.line.me/v2/bot/user/all/richmenu"}::reference-with-code
  :::reference-content
  Clears the default rich menu set with the Messaging API.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X DELETE https://api.line.me/v2/bot/user/all/richmenu \
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

For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
