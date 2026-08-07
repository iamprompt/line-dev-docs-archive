---
title: Webhook Postback
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-postback
__hash__: tYo0QYOyeHl1Zt9JzO_Sf1Em48u6Pi1jO6V_305mJkY
seo:
  description: ''
---

### Postback event

::reference-with-code
  :::reference-content
  Event object for when a user performs a [postback action](#postback-action) which initiates a postback. You can reply to postback events.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp, source, etc.

      See [Common Properties](#common-properties).
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `postback`
      :::::

      :::::parameter-table-entry
      #undefined
      replyToken

      #undefined
      String

      Reply token used to [send reply message](#send-reply-message) to this event
      :::::

      :::::parameter-table-entry
      #undefined
      postback.data

      #undefined
      String

      Postback data
      :::::

      :::::parameter-table-entry
      #undefined
      [postback.params](#postback-params-object)

      #undefined
      Object

      Any of these JSON objects:

      - [`postback.params` object for date-time selection action](#postback-params-object).

        - JSON object with date and time selected by the user via [Datetime picker action](#datetime-picker-action).
        - Returned only for postback actions by [Datetime picker action](#datetime-picker-action).
      - [`postback.params`object for rich menu switch action](#postback-params-object-for-richmenu-switch-action).

        - JSON object with rich menu alias ID selected by the user via [Rich menu switch action](#richmenu-switch-action).
        - Returned only for postback actions by [Rich menu switch action](#richmenu-switch-action).
      :::::
    ::::
  :::

  :::reference-code
  *Postback event example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // Postback event for date-time selection action
      {
          "destination": "xxxxxxxxxx",
          "events": [
              {
                  "replyToken": "b60d432864f44d079f6d8efe86cf404b",
                  "type": "postback",
                  "mode": "active",
                  "source": {
                      "userId": "U91eeaf62d...",
                      "type": "user"
                  },
                  "timestamp": 1513669370317,
                  "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
                  "deliveryContext": {
                      "isRedelivery": false
                  },
                  "postback": {
                      "data": "storeId=12345",
                      "params": {
                          "datetime": "2017-12-25T01:00"
                      }
                  }
              }
          ]
      }

      // Postback event for rich menu switch action
      {
          "destination": "xxxxxxxxxx",
          "events": [
              {
                  "replyToken": "b60d432864f44d079f6d8efe86cf404b",
                  "type": "postback",
                  "mode": "active",
                  "source": {
                      "userId": "U91eeaf62d...",
                      "type": "user"
                  },
                  "timestamp": 1619754620404,
                  "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
                  "deliveryContext": {
                      "isRedelivery": false
                  },
                  "postback": {
                      "data": "richmenu-changed-to-b",
                      "params": {
                          "newRichMenuAliasId": "richmenu-alias-b",
                          "status": "SUCCESS"
                      }
                  }
              }
          ]
      }
      ```
      :::::
    ::::
  :::
::

#### `postback.params` object for date-time selection action

::reference-with-code
  :::reference-content
  Object with the date and time selected by a user through a [datetime picker action](#datetime-picker-action). The `full-date`, `time-hour`, and `time-minute` formats follow the [RFC3339 protocol](https://www.rfc-editor.org/rfc/rfc3339.txt){rel="[\"nofollow\"]"}.

  | Property | Format                                  | Description                                                               |
  | -------- | --------------------------------------- | ------------------------------------------------------------------------- |
  | date     | full-date                               | Date selected by user. Only included in the `date` mode.                  |
  | time     | time-hour ":" time-minute               | Time selected by the user. Only included in the `time` mode.              |
  | datetime | full-date "T" time-hour ":" time-minute | Date and time selected by the user. Only included in the `datetime` mode. |
  :::

  :::reference-code
  *postback.params object for date-time selection action example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "datetime": "2017-12-25T01:00"
      }
      ```
      :::::
    ::::
  :::
::

#### `postback.params`object for rich menu switch action

::reference-with-code
  :::reference-content
  Object with rich menu alias ID selected by user via [rich menu switch action](#richmenu-switch-action).

  | Property                                                                                 | Format | Description                                                                                                                                                                                                                                                            |
  | ---------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | newRichMenuAliasId :div[Not always included]{className="[\"parameter-label\",\"gray\"]"} | String | Rich menu alias ID to switch to. This property won't be included if switching the rich menu has failed.                                                                                                                                                                |
  | status                                                                                   | String | `SUCCESS`: Rich menu changed successfully.    `RICHMENU_ALIAS_ID_NOTFOUND`: The specified rich menu alias ID wasn't found.   `RICHMENU_NOTFOUND`: The rich menu ID associated with the specified rich menu alias ID wasn't found.   `FAILED`: Rich menu switch failed. |
  :::

  :::reference-code
  *postback.params object for rich menu switch action example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "newRichMenuAliasId": "richmenu-alias-b",
        "status": "SUCCESS"
      }
      ```
      :::::
    ::::
  :::
::
