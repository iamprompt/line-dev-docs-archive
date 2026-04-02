---
title: Action Object Location
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/action-object-location
__hash__: YsfZqSIHfxqukEKelLtwLClKtW1p2nJNV3EG5vlBMQU
seo:
  description: ''
---

### Location action

::reference-with-code
  :::reference-content
  This action can be configured only with quick reply buttons. When a button associated with this action is tapped, the location screen in LINE is opened.

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
      label

      #undefined
      String

      Label for the action  

      Max character limit: 20
      :::::
    ::::
  :::

  :::reference-code
  *Example location action object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "location",
        "label": "Location"
      }
      ```
      :::::
    ::::
  :::
::
