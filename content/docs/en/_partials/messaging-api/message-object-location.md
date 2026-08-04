---
title: Message Object Location
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/message-object-location
__hash__: '-8sG4LvJZmLJ48xtrHTfSkr7p6BxfyV62B2bopM6_wg'
seo:
  description: ''
---

### Location message

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `location`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      title

      #undefined
      String

      Title  

      Max character limit: 100
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      address

      #undefined
      String

      Address  

      Max character limit: 100
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      latitude

      #undefined
      Decimal

      Latitude
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      longitude

      #undefined
      Decimal

      Longitude
      :::::
    ::::
  :::

  :::reference-code
  *Location message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "location",
        "title": "my location",
        "address": "1-3 Kioicho, Chiyoda-ku, Tokyo, 102-8282, Japan",
        "latitude": 35.67966,
        "longitude": 139.73669
      }
      ```
      :::::
    ::::
  :::
::
