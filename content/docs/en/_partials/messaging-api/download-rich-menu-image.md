---
title: Download Rich Menu Image
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/download-rich-menu-image
__hash__: QIQH71EA2vBgDOXSOkMxllAR0csO8xIQesIX86MQwjc
seo:
  description: ''
---

### Download rich menu image

:api-endpoint{protocol="get" endpoint="https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content"}::reference-with-code
  :::reference-content
    ::::admonition
    ---
    title: This domain name is different from that of other endpoints
    type: note
    ---
    The domain name (`api-data.line.me`) of this endpoint is for sending and receiving large amounts of data in the LINE Platform for Messaging API. This domain name differs from that of other endpoints (`api.line.me`).
    ::::

  Downloads an image associated with a rich menu.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET "https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content" \
      -H 'Authorization: Bearer {channel access token}' \
      -o picture.jpg
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

#### Path parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  richMenuId

  ID of the rich menu with the image to be downloaded
  :::
::

#### Response

Returns status code `200` and the binary data of the rich menu image. The image can be downloaded as shown in the example request.

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                                            |
  | ----- | -------------------------------------------------------------------------------------------------------------------------------------- |
  | `404` | Couldn't download the image. Consider these reasons:- A non-existent rich menu is specified. - There is no image set to the rich menu. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If the rich menu doesn't exist (404 Not Found)
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
