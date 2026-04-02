---
title: Get Insight Message Delivery
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-insight-message-delivery
__hash__: aCxMiOx4T0QLza-CbjCWaMJRf1a6MBzhfo2SPm4jWMU
seo:
  description: ''
---

### Get number of message deliveries

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/insight/message/delivery?date={date}"}::reference-with-code
  :::reference-content
  Returns the number of messages sent from LINE Official Account on the date specified in `date`.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET 'https://api.line.me/v2/bot/insight/message/delivery?date=20190418' \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

60 requests per hour

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Query parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  date

  Date for which to retrieve number of sent messages.

  - Format: `yyyyMMdd` (e.g. `20191231`)
  - Timezone: UTC+9
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with these properties:

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      status

      #undefined
      String

      Status of the counting process. One of:

      - `ready`: Calculation has finished; the numbers are up-to-date.
      - `unready`: We haven't finished calculating the number of sent messages for the specified `date`. Try again later. Calculation usually takes about a day.
      - `out_of_service`: The specified `date` is earlier than the date on which we first started calculating sent messages (March 1, 2017).

      The properties after the `broadcast` property are only included if the `state` property is `ready`.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      broadcast

      #undefined
      Number

      Number of messages sent by selecting **All Friends** as recipients in the LINE Official Account Manager.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      targeting

      #undefined
      Number

      Number of messages sent by selecting **Targeting** as recipients in the LINE Official Account Manager.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      stepMessage

      #undefined
      Number

      Number of messages sent with step messages in the LINE Official Account Manager.

      For more information, see [Step messages](https://www.linebiz.com/jp/manual/OfficialAccountManager/step-message/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      autoResponse

      #undefined
      Number

      Number of auto-response messages automatically sent when a message is received from a user.

      For more information, see [Auto-response messages](https://www.lycbiz.com/jp/manual/OfficialAccountManager/Auto-response-messages/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      welcomeResponse

      #undefined
      Number

      Number of greeting messages automatically sent when a user adds the LINE Official Account as a friend.

      For more information, see [Set greeting messages](https://www.lycbiz.com/jp/manual/OfficialAccountManager/greeting-message/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      chat

      #undefined
      Number

      Number of messages sent from LINE Official Account Manager [Chat screen](https://www.lycbiz.com/jp/manual/OfficialAccountManager/chats/){rel="[\"nofollow\"]"} (only available in Japanese).
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      apiBroadcast

      #undefined
      Number

      Number of messages sent with the [Send broadcast message](#send-broadcast-message) endpoint.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      apiPush

      #undefined
      Number

      Number of messages sent with the [Send push message](#send-push-message) endpoint.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      apiMulticast

      #undefined
      Number

      Number of messages sent with the [Send multicast message](#send-multicast-message) endpoint.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      apiNarrowcast

      #undefined
      Number

      Number of messages sent with the [Send narrowcast message](#send-narrowcast-message) endpoint.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      apiReply

      #undefined
      Number

      Number of messages sent with the [Send reply message](#send-reply-message) endpoint.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      ccAutoReply

      #undefined
      Number

      Number of messages sent by auto reply with LINE Chat Plus.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      ccManualReply

      #undefined
      Number

      Number of messages sent by manual chat support with LINE Chat Plus.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      pnpNoticeMessage

      #undefined
      Number

      Number of messages sent with [LINE notification messages](/docs/partner-docs/line-notification-messages/overview/) on the options for corporate customers.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      pnpCallToLine

      #undefined
      Number

      Number of messages sent with Call to LINE. *

      * New registration for Call to LINE has been discontinued.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      thirdPartyChatTool

      #undefined
      Number

      Number of messages sent from third party chat tools.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If the calculation has finished
      {
        "status": "ready",
        "broadcast": 5385,
        "targeting": 522
      }

      // if the calculation hasn't finished yet
      {
        "status": "unready"
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                   |
  | ----- | ----------------------------- |
  | `400` | An invalid date is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid date (400 Bad Request)
      {
        "message": "Bad Request"
      }
      ```
      :::::
    ::::
  :::
::
