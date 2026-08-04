---
title: Delete Rich Menu
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/delete-rich-menu
__hash__: fXoFF2tRqjVaFwEPNQpuY1iyUSJ7940phjy68g-aJZI
seo:
  description: ''
---

### Delete rich menu

:api-endpoint{protocol="delete" endpoint="https://api.line.me/v2/bot/richmenu/{richMenuId}"}::reference-with-code
  :::reference-content
  Deletes a rich menu.

    ::::admonition{title="Rich menu limits" type="note"}
    If you have reached the maximum of 1,000 rich menus with the Messaging API for your LINE Official Account, you must delete a rich menu before you can create a new one.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X DELETE https://api.line.me/v2/bot/richmenu/{richMenuId} \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

100 requests per hour

Creating and deleting rich menus using the :glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"} isn't subject to this restriction.

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
  richMenuId

  ID of a rich menu
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

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                            |
  | ----- | -------------------------------------- |
  | `404` | A non-existent rich menu is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a non-existent rich menu (404 Not Found)
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
