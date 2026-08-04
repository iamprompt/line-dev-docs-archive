---
title: Action Object Clipboard
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/action-object-clipboard
__hash__: TsE2dTxRyW10DgHDSetoJFmX9DAxdJNI8jSNriyP8NM
seo:
  description: ''
---

### Clipboard action

::reference-with-code
  :::reference-content
  When a user taps a control associated with this action, the text specified in the `clipboardText` property is copied to the device clipboard.

  This feature is available on LINE version `14.0.0` or later for iOS or Android.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `clipboard`
      :::::

      :::::parameter-table-entry{annotation="See description"}
      #undefined
      label

      #undefined
      String

      Label for the action. The specification depends on which object the action is set to. For more information, see [Specifications of the label](#action-object-label-spec).
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      clipboardText

      #undefined
      String

      Text that is copied to the clipboard

      - Max character limit: 1000
      :::::
    ::::
  :::

  :::reference-code
  *Example clipboard action object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "clipboard",
        "label": "Copy",
        "clipboardText": "3B48740B"
      }
      ```
      :::::
    ::::
  :::
::
