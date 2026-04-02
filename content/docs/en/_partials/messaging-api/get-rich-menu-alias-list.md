---
title: Get Rich Menu Alias List
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-rich-menu-alias-list
__hash__: iP-csGNm_5YZHfGCeteDt3dvGgzCUEetcMnrx7CafWA
seo:
  description: ''
---

### Get list of rich menu alias

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/richmenu/alias/list"}::reference-with-code
  :::reference-content
  Gets the rich menu alias list.
  :::

  :::reference-code
  *Request example*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/richmenu/alias/list \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

2,000 requests per second

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request header

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
  Returns the `200` HTTP status code and a JSON object containing these values.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      aliases[].richMenuAliasId

      #undefined
      String

      Rich menu alias ID.
      :::::

      :::::parameter-table-entry
      #undefined
      aliases[].richMenuId

      #undefined
      String

      The rich menu ID associated with the rich menu alias.
      :::::
    ::::
  :::

  :::reference-code
  *Response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you have 2 rich menu aliases
      {
          "aliases": [
              {
                  "richMenuAliasId": "richmenu-alias-a",
                  "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4"
              },
              {
                  "richMenuAliasId": "richmenu-alias-b",
                  "richMenuId": "richmenu-88c05ef6921ae53f8b58a25f3a65faf7"
              }
          ]
      }

      // If you have 0 rich menu alias
      {
          "aliases": []
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
