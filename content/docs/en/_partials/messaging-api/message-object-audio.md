---
title: Message Object Audio
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/message-object-audio
__hash__: hrQdEeplQuZR9DKSWho75GR6QKUNz4IUL1L11LwVNuY
seo:
  description: ''
---

### Audio message

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `audio`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      originalContentUrl

      #undefined
      String

      Audio file URL (Max character limit: 2000)  

      Protocol: HTTPS (TLS 1.2 or later)  

      Audio format: mp3 or m4a  

      Max file size: 200 MB

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      duration

      #undefined
      Number

      Length of audio file (milliseconds)
      :::::
    ::::
  :::

  :::reference-code
  *Audio message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "audio",
        "originalContentUrl": "https://example.com/original.m4a",
        "duration": 60000
      }
      ```
      :::::
    ::::
  :::
::
