---
title: Get Default Rich Menu Id
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-default-rich-menu-id
__hash__: iJuYQKV2WXnZ26k_1Z9frh1ApLtDH4_7hu3gplqNVv4
seo:
  description: ''
---

### Get default rich menu ID

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/user/all/richmenu"}::reference-with-code
  :::reference-content
  Gets the ID of the default rich menu set with the Messaging API.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/user/all/richmenu \
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
  Returns status code `200` and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      richMenuId

      #undefined
      String

      ID of a rich menu
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "richMenuId": "{richMenuId}"
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

  | Code  | Description                                                                                                                                                             |
  | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `403` | The default rich menu is set by another channel, such as :glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"}. |
  | `404` | The default rich menu isn't set.                                                                                                                                        |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If the default rich menu is set by another channel (403 Forbidden)
      {
        "message": "the richmenu is owned by another channel",
        "details": []
      }

      // If the default rich menu isn't set (404 Not Found)
      {
        "message": "no default richmenu",
        "details": []
      }
      ```
      :::::
    ::::
  :::
::
