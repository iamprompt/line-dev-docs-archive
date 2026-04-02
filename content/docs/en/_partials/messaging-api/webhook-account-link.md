---
title: Webhook Account Link
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-account-link
__hash__: THlY1uvTyxS0HrZeEiEObuDBESBpufJBb0VsdetemPk
seo:
  description: ''
---

### Account link event

::reference-with-code
  :::reference-content
  Event object for when a user has linked their LINE account with a provider's service account. You can reply to account link events.

  If the link token has expired or has already been used, no webhook event will be sent and the user will be shown an error.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp, source, etc.

      See [Common Properties](#common-properties).

      The `source` property won't be included in the account link event if linking the account has failed.
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `accountLink`
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      replyToken

      #undefined
      String

      Reply token used to [send reply message](#send-reply-message) to this event. This property won't be included if linking the account has failed.
      :::::

      :::::parameter-table-entry
      #undefined
      link.result

      #undefined
      String

      One of the following values to indicate whether linking the account was successful or not:

      - `ok`: Indicates linking the account was successful.
      - `failed`: Indicates linking the account failed for any reason, such as due to a user impersonation.
      :::::

      :::::parameter-table-entry
      #undefined
      link.nonce

      #undefined
      String

      Specified nonce (number used once) when verifying the user ID. For more information, see [Generate a nonce and redirect the user to the LINE Platform](/docs/messaging-api/linking-accounts/#step-four-verifying-user-id) in the Messaging API documentation.
      :::::
    ::::
  :::

  :::reference-code
  *Account link event example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "replyToken": "b60d432864f44d079f6d8efe86cf404b",
            "type": "accountLink",
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
            "link": {
              "result": "ok",
              "nonce": "xxxxxxxxxxxxxxx"
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
