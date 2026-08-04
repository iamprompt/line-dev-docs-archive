---
title: Action Object Datetime Picker
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/action-object-datetime-picker
__hash__: beC4io40-Kf83FrM374vKPmSQHDmgt-h_I5t0p4P0sU
seo:
  description: ''
---

### Datetime picker action

::reference-with-code
  :::reference-content
  When a control associated with this action is tapped, a [postback event](#postback-event) is returned via webhook with the date and time selected by the user from the date and time selection dialog. The datetime picker action does not support time zones.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `datetimepicker`
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
      data

      #undefined
      String

      String returned via webhook in the `postback.data` property of the [postback event](#postback-event)  

      Max character limit: 300
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      mode

      #undefined
      String

      Action mode  
      `date`: Pick date  
      `time`: Pick time  
      `datetime`: Pick date and time
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      initial

      #undefined
      String

      Initial value of date or time
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      max

      #undefined
      String

      Largest date or time value that can be selected. Must be greater than the `min` value.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      min

      #undefined
      String

      Smallest date or time value that can be selected. Must be less than the `max` value.
      :::::
    ::::
  :::

  :::reference-code
  *Example datetime picker action object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "datetimepicker",
        "label": "Select date",
        "data": "storeId=12345",
        "mode": "datetime",
        "initial": "2017-12-25t00:00",
        "max": "2018-01-24t23:59",
        "min": "2017-12-25t00:00"
      }
      ```
      :::::
    ::::
  :::
::

#### Date and time format

The date and time formats for the `initial`, `max`, and `min` values are shown below. The `full-date`, `time-hour`, and `time-minute` formats follow the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt){rel="[\"nofollow\"]"} protocol.

| Mode     | Format                                                                                                                         | Example                             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| date     | `full-date`   Max: 2100-12-31   Min: 1900-01-01                                                                                | 2017-06-18                          |
| time     | `time-hour`:`time-minute`   Max: 23:59   Min: 00:00                                                                            | 00:00   06:15   23:59               |
| datetime | `full-date`T`time-hour`:`time-minute` or `full-date`t`time-hour`:`time-minute`   Max: 2100-12-31T23:59   Min: 1900-01-01T00:00 | 2017-06-18T06:15   2017-06-18t06:15 |
