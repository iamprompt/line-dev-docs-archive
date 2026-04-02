---
title: Delete Audience Group
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/delete-audience-group
__hash__: 5rk8rSflhG_yyxUc5r2Nay5PnU_FhWeb90NzuEAJ450
seo:
  description: ''
---

### Delete audience

:api-endpoint{protocol="delete" endpoint="https://api.line.me/v2/bot/audienceGroup/{audienceGroupId}"}::reference-with-code
  :::reference-content
  Deletes an audience.

    ::::admonition{title="You can't undo deleting an audience" type="warning"}
    Make sure that an audience is no longer in use before you delete it.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X DELETE https://api.line.me/v2/bot/audienceGroup/{audienceGroupId} \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

60 requests per minute

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
  audienceGroupId

  The audience ID.
  :::
::

#### Response

Returns the `202` HTTP status code and an empty JSON object.

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                           |
  | ----- | ------------------------------------- |
  | `400` | A non-existent audience is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a non-existent audience (400 Bad Request)
      {
        "message": "audience group not found",
        "details": [
          {
            "message": "AUDIENCE_GROUP_NOT_FOUND"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
