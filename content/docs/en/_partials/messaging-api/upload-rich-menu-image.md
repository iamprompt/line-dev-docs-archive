---
title: Upload Rich Menu Image
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/upload-rich-menu-image
__hash__: uXzZ1dmDXwqlwOzqpcxDMUWwm7N72Wjw27wWewYH0aU
seo:
  description: ''
---

### Upload rich menu image

:api-endpoint{protocol="post" endpoint="https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content"}::reference-with-code
  :::reference-content
    ::::admonition
    ---
    title: This domain name is different from that of other endpoints
    type: note
    ---
    The domain name (`api-data.line.me`) of this endpoint is for sending and receiving large amounts of data in the LINE Platform for Messaging API. This domain name differs from that of other endpoints (`api.line.me`).
    ::::

  Uploads and sets an image to a rich menu.

  #### Requirements for rich menu image

  You can use rich menu images with the following specifications:

  - Image format: JPEG or PNG
  - Image width: 800 to 2500 pixels
  - Image height: 250 pixels or more
  - Image aspect ratio (width / height): 1.45 or more
  - Max file size: 1 MB

    ::::admonition{title="Note" type="note"}
    You can't replace an image set to a rich menu. To update your rich menu image, create a new rich menu object and upload another image.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content \
      -H "Authorization: Bearer {channel access token}" \
      -H "Content-Type: image/jpeg" \
      -T image.jpg
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

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  `image/jpeg` or `image/png`
  :::
::

#### Path parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  richMenuId

  The ID of the rich menu to set the image to
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

  | Code  | Description                                                                                                                                                                                    |
  | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Couldn't set the image to the rich menu. Consider these reasons:- The image doesn't meet the [requirements](#upload-rich-menu-image-requirements). - An image is already set to the rich menu. |
  | `404` | A non-existent rich menu is specified.                                                                                                                                                         |
  | `415` | An unsupported media format is specified in `Content-Type` (other than `image/jpeg` and `image/png`).                                                                                          |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an image that doesn't meet the requirements (400 Bad Request)
      {
        "message": "The image size is not allowed for richmenu"
      }

      // The image is already set to the rich menu (400 Bad Request)
      {
        "message": "An image has already been uploaded to the richmenu"
      }
      ```
      :::::
    ::::
  :::
::
