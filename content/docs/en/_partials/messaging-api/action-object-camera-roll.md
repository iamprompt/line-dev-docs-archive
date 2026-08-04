---
title: Action Object Camera Roll
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/action-object-camera-roll
__hash__: GB7kYoNRcrBvGKCOFmGCBTjRMXugH0iTYpZWF2rngCk
seo:
  description: ''
---

### Camera roll action

::reference-with-code
  :::reference-content
  This action can be configured only with quick reply buttons. When a button associated with this action is tapped, the camera roll screen in LINE is opened.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `cameraRoll`
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
  *Example camera roll action object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "cameraRoll",
        "label": "Camera roll"
      }
      ```
      :::::
    ::::
  :::
::
