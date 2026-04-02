---
title: Action Object Camera
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/action-object-camera
__hash__: qGRdh2JmGvJJSeVqz3gP6OGTvgxl9QS7gcysYcNGdDI
seo:
  description: ''
---

### Camera action

::reference-with-code
  :::reference-content
  This action can be configured only with quick reply buttons. When a button associated with this action is tapped, the camera screen in LINE is opened.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `camera`
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
  *Example camera action object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "camera",
        "label": "Camera"
      }
      ```
      :::::
    ::::
  :::
::
