---
title: Message Object Image
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/message-object-image
__hash__: Fgfbsk0e9EG2XLiYRnht_ySxkWSS3Bbudrj6CMIv6LU
seo:
  description: ''
---

### Image message

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `image`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      originalContentUrl

      #undefined
      String

      Image file URL (Max character limit: 2000)  

      Protocol: HTTPS (TLS 1.2 or later)  

      Image format: JPEG or PNG  

      Max file size: 10 MB

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      previewImageUrl

      #undefined
      String

      Preview image URL (Max character limit: 2000)  

      Protocol: HTTPS (TLS 1.2 or later)  

      Image format: JPEG or PNG  

      Max file size: 1 MB

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).

      Depending on the situation of a user device, the image of the `originalContentUrl` property may be used as the preview image.
      :::::
    ::::
  :::

  :::reference-code
  *Image message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "image",
        "originalContentUrl": "https://example.com/original.jpg",
        "previewImageUrl": "https://example.com/preview.jpg"
      }
      ```
      :::::
    ::::
  :::
::
