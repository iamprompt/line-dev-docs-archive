---
title: Webhook Membership
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-membership
__hash__: IKKVR8kbtzfF-p0BRMpNto_Fj6p_KwERiv6wcKwAQKE
seo:
  description: ''
---

### Membership event

::reference-with-code
  :::reference-content
  This event indicates that a user has joined, renewed, or left a membership of your LINE Official Account.

  If your LINE Official Account provides multiple membership plans, and a user who is currently joined one plan changes to another plan during the same month, webhook events will be sent for both the leaving and joining. If a user hasn't consented to allow access to their profile information, no webhook event will be sent. For more information, see [Consent on getting user profile information](/docs/messaging-api/user-consent/) in the Messaging API documentation.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      timestamp, source, etc.

      See [Common properties](#common-properties).
      :::::

      :::::parameter-table-entry
      #undefined
      type

      #undefined
      String

      `membership`
      :::::

      :::::parameter-table-entry
      #undefined
      replyToken

      #undefined
      String

      Reply token used to [send a reply message](#send-reply-message) to this event
      :::::

      :::::parameter-table-entry
      #undefined
      membership.type

      #undefined
      String

      Type of membership event. One of the following values:

      - `joined`: User joined the membership.
      - `left`: User left the membership.
      - `renewed`: User renewed the membership.
      :::::

      :::::parameter-table-entry
      #undefined
      membership.membershipId

      #undefined
      Number

      A membership ID that the user has joined, left, or renewed.
      :::::
    ::::
  :::

  :::reference-code
  *Membership event example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "destination": "xxxxxxxxxx",
        "events": [
          {
            "type": "membership",
            "source": {
              "type": "user",
              "userId": "U4af4980629..."
            },
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "membership": {
              "type": "joined",
              "membershipId": 3189
            },
            "timestamp": 1462629479859,
            "mode": "active",
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
              "isRedelivery": false
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
