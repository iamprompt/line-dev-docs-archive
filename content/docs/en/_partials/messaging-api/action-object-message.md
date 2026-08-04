---
title: Action Object Message
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/action-object-message
__hash__: nw_Tmri0f62GPrq0L0M6H-TqFbseDIplBcYm898OdLU
seo:
  description: ''
---

### Message action

::reference-with-code
  :::reference-content
  When a control associated with this action is tapped, the string in the `text` property is sent as a message from the user.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `message`
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
      text

      #undefined
      String

      Text sent when the action is performed  

      Max character limit: 300
      :::::
    ::::
  :::

  :::reference-code
  *Example message action object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "message",
        "label": "Yes",
        "text": "Yes"
      }
      ```
      :::::
    ::::
  :::
::
