---
title: Send Narrowcast
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/send-narrowcast
__hash__: DsJgIY4yF3i5mZWGh51zEnbn6qioupuLYfZSnRGYzfk
seo:
  description: ''
---

### Send narrowcast message

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/message/narrowcast"}::reference-with-code
  :::reference-content
  Sends a message to multiple users. You can specify recipients using attributes (such as age, gender, OS, and region) or by retargeting (audiences). Messages can't be sent to group chats or multi-person chats.

  Narrowcast messages are sent asynchronously in the background after the LINE Platform receives the request. Therefore, even if a request to send a narrowcast message is successful, failures can occur once the message starts to be delivered. You can verify if the message was sent successfully by [getting the progress of the narrowcast message](#get-narrowcast-progress-status).

    ::::admonition
    ---
    title: About sending narrowcast messages to users under the age of 20 in Thailand
    type: note
    ---
    When you filter recipients by certain conditions, users under the age of 20 in Thailand will be excluded.
    ::::

  #### Conditions for sending narrowcast message

  You can send a narrowcast message to users who have added your LINE Official Account as a friend.

  If you send a narrowcast message to the following users, status code `202` will be returned, but the users will be excluded from recipients:

  - Users who deleted their LINE accounts
  - Users who blocked your LINE Official Account
  - Users who haven't added your LINE Official Account as a friend
  - User IDs that don't exist in the channel such as those that were taken from another channel under a different provider

  #### Restrictions on sending messages using attributes and audiences

  When using attributes or audiences, restrictions to protect the user's privacy may apply to the sent message, depending on the conditions of sending. If the sent message meets the restrictions, an error will occur when sending a request or delivering a message.

  - To specify attribute data as a condition of sending, your LINE Official Account's ::::glossary-tooltip{glossary-id="target-reach"}
  [target reach](/glossary/#target-reach)
  ::::

   number must be 100 people or more. Returns a `403` HTTP status code if your target reach is less than 100 people.
  - When you specify attribute data or audiences (*) as a condition of sending, the final number of recipients must be 50 or more. The `202` HTTP status code will be also returned if the final number of recipients is less than 50 people, but an error will occur when message delivery starts.
  - When you specify more than one audience as a condition of sending, each audience (*) must have at least 50 recipients. The `202` HTTP status code will be also returned if the audience has less than 50 recipients, but an error will occur when message delivery starts.

  * The following audiences have no restrictions regarding the number of recipients. However, for audiences created by other LINE Official Account, the restrictions apply even to the following audiences:

  - Audiences created by uploading user IDs from LINE Official Account Manager or the Messaging API
  - Chat tag audiences

  #### Note regarding the number of remaining messages to be sent during the current month

  In LINE Official Account Manager and the Messaging API, the number of messages scheduled to be sent will be reserved for the remaining messages until the number of messages to be sent is determined after the sending messages is started. If the number of messages scheduled to be sent can't be reserved at the start of the message delivery, the message will fail to deliver.

  Narrowcast messages require reservations for the target reach of the LINE Official Account, regardless of the actual number of recipients. Therefore, when sending narrowcast messages, take note of the following:

  - If the number of remaining messages that can be sent during the current month is less than the target reach of your LINE Official Account, an error will occur when starting to deliver narrowcast messages.
  - Even though the actual number of recipients is sufficiently small, the number of remaining messages for the current month may be temporarily depleted. If another message is sent while narrowcast messages are being delivered, a `429 Too Many Requests` error with the message `You have reached your monthly limit.` will be returned, and the message delivery will fail.

  You may be able to avoid these situations by limiting the number of messages to send when sending a narrowcast message. For more information, see [Limit objects](#send-narrowcast-limit) on the [Request body](#send-narrowcast-request-body).
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/message/narrowcast \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'Content-Type: application/json' \
      -H 'X-Line-Retry-Key: {UUID}' \
      -d '{
          "messages": [
              {
                  "type": "text",
                  "text": "test message"
              }
          ],
          "recipient": {
              "type": "operator",
              "and": [
                  {
                      "type": "audience",
                      "audienceGroupId": 5614991017776
                  },
                  {
                      "type": "operator",
                      "not": {
                          "type": "audience",
                          "audienceGroupId": 4389303728991
                      }
                  }
              ]
          },
          "filter": {
              "demographic": {
                  "type": "operator",
                  "or": [
                      {
                          "type": "operator",
                          "and": [
                              {
                                  "type": "gender",
                                  "oneOf": [
                                      "male",
                                      "female"
                                  ]
                              },
                              {
                                  "type": "age",
                                  "gte": "age_20",
                                  "lt": "age_25"
                              },
                              {
                                  "type": "appType",
                                  "oneOf": [
                                      "android",
                                      "ios"
                                  ]
                              },
                              {
                                  "type": "area",
                                  "oneOf": [
                                      "jp_23",
                                      "jp_05"
                                  ]
                              },
                              {
                                  "type": "subscriptionPeriod",
                                  "gte": "day_7",
                                  "lt": "day_30"
                              }
                          ]
                      },
                      {
                          "type": "operator",
                          "and": [
                              {
                                  "type": "age",
                                  "gte": "age_35",
                                  "lt": "age_40"
                              },
                              {
                                  "type": "operator",
                                  "not": {
                                      "type": "gender",
                                      "oneOf": [
                                          "male"
                                      ]
                                  }
                              }
                          ]
                      }
                  ]
              }
          },
          "limit": {
              "max": 100,
              "upToRemainingQuota": true
          }
      }'
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

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  `application/json`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  X-Line-Retry-Key

  Retry key. Specifies the UUID in hexadecimal format (e.g., 123e4567-e89b-12d3-a456-426614174000) generated by any method. The retry key isn't generated by LINE. Each developer must generate their own retry key. For more information, see [Retry failed API requests](/docs/messaging-api/retrying-api-request/) in the Messaging API documentation.
  :::
::

#### Request body

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  messages

  #undefined
  Array of [message objects](#message-objects)

  Messages to send  

  Max: 5

  By using the [Validate message objects of a narrowcast message](#validate-message-objects-of-narrowcast-message) endpoint, you can validate the message objects.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  recipient

  #undefined
  Object

  [Recipient object](#narrowcast-recipient). You can use up to a combined total of 10 audiences and request IDs of the narrowcast messages previously sent to specify message recipients. There is no upper limit on the number of operator objects that you can specify.   

  If this is omitted, messages will be sent to all users who have added your LINE Official Account as a friend.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  filter.demographic

  #undefined
  Object

  [Demographic filter object](#narrowcast-demographic-filter). You can use friends' attributes to filter the list of recipients.   

  If this is omitted, messages are sent to everyone—including users with attribute values of "unknown".
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  limit

  #undefined
  Object

  [Limit object](#send-narrowcast-limit). You can set a limit on the maximum number of narrowcast messages that can be sent.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  notificationDisabled

  #undefined
  Boolean

  - `true`: The user doesn't receive a push notification when the message is sent.
  - `false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or on their device).

  Default: `false`
  :::
::

##### Recipient objects

::reference-with-code
  :::reference-content
  Recipient objects represent audience objects or redelivery objects. You can specify recipients based on a combination of criteria using logical operator objects. You can specify up to a combined total of 10 audience objects and redelivery objects per request.

  ###### Audience objects

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `audience`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      audienceGroupId

      #undefined
      Number

      The audience ID. Create audiences with the [manage audience](#manage-audience-group) API.
      :::::
    ::::

  ###### Redelivery object

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `redelivery`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      requestId

      #undefined
      String

      The request ID of the narrowcast message previously sent. The request IDs is an ID issued for each Messaging API request. It is included in the [response header](#response-headers).
      :::::
    ::::

    ::::admonition{title="Conditions for specifying the request ID" type="note"}
    The request ID specified in the `requestId` property must satisfy all of these conditions. If you specify the request ID that does not satisfy these conditions, a `400` HTTP status code is returned.

    - The request ID was issued by the delivering a narrowcast message.
    - The narrowcast message was delivered within less than 14 days (336 hours) from the timestamp displayed in `acceptedTime` of the [Get narrowcast message status](/reference/messaging-api/#get-narrowcast-progress-status-response) API endpoint.
    - The delivery process is completed (The value of the `phase` property is `succeeded` in the response of the [Get narrowcast message status](/reference/messaging-api/#get-narrowcast-progress-status-response) API endpoint).
    ::::

  ###### Logical operator objects

  Use logical AND, OR, and NOT operators to combine multiple recipient objects together.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `operator`
      :::::

      :::::parameter-table-entry{annotation="*"}
      #undefined
      and

      #undefined
      Array of recipient objects

      Create a new recipient object by taking the logical conjunction (AND) of the specified array of recipient objects.

      ![Audience 1 and Audience 2](/media/messaging-api/narrowcast-message/operator_object_for_reference_and_en.png){className="[\"w-fix-360\"]"}
      :::::

      :::::parameter-table-entry{annotation="*"}
      #undefined
      or

      #undefined
      Array of recipient objects

      Create a new recipient object by taking the logical disjunction (OR) of the specified array of recipient objects.

      ![Audience 1 or Audience 2](/media/messaging-api/narrowcast-message/operator_object_for_reference_or_en.png){className="[\"w-fix-360\"]"}
      :::::

      :::::parameter-table-entry{annotation="*"}
      #undefined
      not

      #undefined
      Recipient object

      Create a new recipient object that excludes the specified recipient object.

      ![not Audience 2](/media/messaging-api/narrowcast-message/operator_object_for_reference_not_en.png){className="[\"w-fix-360\"]"}
      :::::
    ::::

  * Be sure to specify only one of these three properties (`and`, `or`, or `not`). You cannot specify an empty array.
  :::

  :::reference-code
  *Example recipient object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "operator",
        "and": [
          {
            "type": "audience",
            "audienceGroupId": 5614991017776
          },
          {
            "type": "operator",
            "not": {
              "type": "redelivery",
              "requestId": "5b59509c-c57b-11e9-aa8c-2a2ae2dbcce4"
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

##### Demographic filter objects

::reference-with-code
  :::reference-content
  Demographic filter objects represent criteria (e.g. age, gender, OS, region, and friendship duration) on which to filter the list of recipients. You can filter recipients based on a combination of different criteria using logical operator objects.

    ::::admonition{title="Using attribute data" type="note"}
    - The attribute data used for demographic filters is approximately 3 days old (may be earlier or later).
    - If you don't specify any attributes, messages are sent to everyone—even users with attribute values of "unknown".
    - To use attribute data, your :::::glossary-tooltip{glossary-id="target-reach"}
    ["Target reach"](/glossary/#target-reach)
    :::::

     number must be 100 or more.

      - Returns a `403` HTTP status code if your Target reach is less than 100.
    ::::

  ###### Gender

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `gender`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      oneOf

      #undefined
      Array of strings

      Send messages to users of a given gender. One of:

      - `male`
      - `female`
      :::::
    ::::

  ###### Age

  This lets you filter recipients with a given age range.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `age`
      :::::

      :::::parameter-table-entry{annotation="*"}
      #undefined
      gte

      #undefined
      String

      Send messages to users at least as old as the specified age.

      You can specify one of the following values. However, specify a value smaller than the value specified by the `lt` property.

      - `age_15`
      - `age_20`
      - `age_25`
      - `age_30`
      - `age_35`
      - `age_40`
      - `age_45`
      - `age_50`
      - `age_55`
      - `age_60`
      - `age_65`
      - `age_70`
      :::::

      :::::parameter-table-entry{annotation="*"}
      #undefined
      lt

      #undefined
      String

      Send messages to users younger than the specified age.

      You can specify one of the following values. However, specify a value greater than the value specified by the `gte` property.

      - `age_15`
      - `age_20`
      - `age_25`
      - `age_30`
      - `age_35`
      - `age_40`
      - `age_45`
      - `age_50`
      - `age_55`
      - `age_60`
      - `age_65`
      - `age_70`
      :::::
    ::::

  * Be sure to specify either `gte`, `lt`, or both.

  ###### Operating system

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `appType`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      oneOf

      #undefined
      Array of strings

      Send messages to users with the specified OS. One of:

      - `ios`
      - `android`
      :::::
    ::::

  ###### Region

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `area`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      oneOf

      #undefined
      Array of strings

      Send messages to users in the specified region. One of:   
      **日本 // JP (country code=392)**

      - `jp_01`: 北海道 // Hokkaido
      - `jp_02`: 青森県 // Aomori
      - `jp_03`: 岩手県 // Iwate
      - `jp_04`: 宮城県 // Miyagi
      - `jp_05`: 秋田県 // Akita
      - `jp_06`: 山形県 // Yamagata
      - `jp_07`: 福島県 // Fukushima
      - `jp_08`: 茨城県 // Ibaraki
      - `jp_09`: 栃木県 // Tochigi
      - `jp_10`: 群馬県 // Gunma
      - `jp_11`: 埼玉県 // Saitama
      - `jp_12`: 千葉県 // Chiba
      - `jp_13`: 東京都 // Tokyo
      - `jp_14`: 神奈川県 // Kanagawa
      - `jp_15`: 新潟県 // Niigata
      - `jp_16`: 富山県 // Toyama
      - `jp_17`: 石川県 // Ishikawa
      - `jp_18`: 福井県 // Fukui
      - `jp_19`: 山梨県 // Yamanashi
      - `jp_20`: 長野県 // Nagano
      - `jp_21`: 岐阜県 // Gifu
      - `jp_22`: 静岡県 // Shizuoka
      - `jp_23`: 愛知県 // Aichi
      - `jp_24`: 三重県 // Mie
      - `jp_25`: 滋賀県 // Shiga
      - `jp_26`: 京都府 // Kyoto
      - `jp_27`: 大阪府 // Osaka
      - `jp_28`: 兵庫県 // Hyougo
      - `jp_29`: 奈良県 // Nara
      - `jp_30`: 和歌山県 // Wakayama
      - `jp_31`: 鳥取県 // Tottori
      - `jp_32`: 島根県 // Shimane
      - `jp_33`: 岡山県 // Okayama
      - `jp_34`: 広島県 // Hiroshima
      - `jp_35`: 山口県 // Yamaguchi
      - `jp_36`: 徳島県 // Tokushima
      - `jp_37`: 香川県 // Kagawa
      - `jp_38`: 愛媛県 // Ehime
      - `jp_39`: 高知県 // Kouchi
      - `jp_40`: 福岡県 // Fukuoka
      - `jp_41`: 佐賀県 // Saga
      - `jp_42`: 長崎県 // Nagasaki
      - `jp_43`: 熊本県 // Kumamoto
      - `jp_44`: 大分県 // Oita
      - `jp_45`: 宮崎県 // Miyazaki
      - `jp_46`: 鹿児島県 // Kagoshima
      - `jp_47`: 沖縄県 // Okinawa

      **台湾 // TW (country code=158)**

      - `tw_01`: 台北市 // Taipei City
      - `tw_02`: 新北市 // New Taipei City
      - `tw_03`: 桃園市 // Taoyuan City
      - `tw_04`: 台中市 // Taichung City
      - `tw_05`: 台南市 // Tainan City
      - `tw_06`: 高雄市 // Kaohsiung City
      - `tw_07`: 基隆市 // Keelung City
      - `tw_08`: 新竹市 // Hsinchu City
      - `tw_09`: 嘉義市 // Chiayi City
      - `tw_10`: 新竹県 // Hsinchu County
      - `tw_11`: 苗栗県 // Miaoli County
      - `tw_12`: 彰化県 // Changhua County
      - `tw_13`: 南投県 // Nantou County
      - `tw_14`: 雲林県 // Yunlin County
      - `tw_15`: 嘉義県 // Chiayi County
      - `tw_16`: 屏東県 // Pingtung County
      - `tw_17`: 宜蘭県 // Yilan County
      - `tw_18`: 花蓮県 // Hualien County
      - `tw_19`: 台東県 // Taitung County
      - `tw_20`: 澎湖県 // Penghu County
      - `tw_21`: 金門県 // Kinmen County
      - `tw_22`: 連江県 // Lienchiang County

      **タイ // TH (country code=764)**

      - `th_01`: バンコク // Bangkok
      - `th_02`: パタヤ // Pattaya
      - `th_03`: 北部 // Northern
      - `th_04`: 中央部 // Central
      - `th_05`: 南部 // Southern
      - `th_06`: 東部 // Eastern
      - `th_07`: 東北部 // NorthEastern
      - `th_08`: 西部 // Western
      :::::
    ::::

  ###### Friendship duration

  This lets you filter recipients with a given range of friendship durations.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `subscriptionPeriod`
      :::::

      :::::parameter-table-entry{annotation="*"}
      #undefined
      gte

      #undefined
      String

      Send messages to users who have been friends of yours for at least the specified number of days.  

      You can specify one of the following values. However, specify a value smaller than the value specified by the `lt` property.

      - `day_7`
      - `day_30`
      - `day_90`
      - `day_180`
      - `day_365`
      :::::

      :::::parameter-table-entry{annotation="*"}
      #undefined
      lt

      #undefined
      String

      Send messages to users who have been friends of yours for less than the specified number of days.  

      You can specify one of the following values. However, specify a value greater than the value specified by the `gte` property.

      - `day_7`
      - `day_30`
      - `day_90`
      - `day_180`
      - `day_365`
      :::::
    ::::

  * Be sure to specify either `gte`, `lt`, or both.

  ###### Logical operator objects

  Use logical AND, OR, and NOT operators to combine multiple demographic filter objects together. You can specify up to 10 demographic filter objects per request.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `operator`
      :::::

      :::::parameter-table-entry{annotation="*"}
      #undefined
      and

      #undefined
      Array of demographic filter objects

      Create a new demographic filter object by taking the logical conjunction (AND) of the specified array of demographic filter objects.
      :::::

      :::::parameter-table-entry{annotation="*"}
      #undefined
      or

      #undefined
      Array of demographic filter objects

      Create a new demographic filter object by taking the logical disjunction (OR) of the specified array of demographic filter objects.
      :::::

      :::::parameter-table-entry{annotation="*"}
      #undefined
      not

      #undefined
      Demographic filter object

      Create a new demographic filter object that excludes the specified array of demographic filter objects.
      :::::
    ::::

  * Be sure to specify only one of these three properties (`and`, `or`, or `not`). You cannot specify an empty array.
  :::

  :::reference-code
  *Example demographic filter object for gender*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "gender",
        "oneOf": ["male", "female"]
      }
      ```
      :::::
    ::::
  :::
::

##### Limit objects

::reference-with-code
  :::reference-content
  You can set a limit on the maximum number of narrowcast messages that can be sent by setting limit objects.

  For more information on controlling the maximum number of sending through property settings, see [Controlling the maximum number of messages to send with limit objects](/docs/messaging-api/sending-messages/#maximum-send-numbers-control) in the Messaging API documentation.

    ::::parameter-table
      :::::parameter-table-entry{optional=""}
      #undefined
      max

      #undefined
      Number

      The maximum number of narrowcast messages to send. Use this parameter to limit the number of narrowcast messages sent. The recipients will be chosen at random.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      upToRemainingQuota

      #undefined
      Boolean

      If `true`, the message will be sent within the maximum number of deliverable messages. The default value is `false`. Targets will be selected at random.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      forbidPartialDelivery

      #undefined
      Boolean

      This option prevents messages from being delivered to only a subset of the target audience. When you set the `upToRemainingQuota` property to `true` and also set the `forbidPartialDelivery` property to `true`, the message will not be delivered if the number of recipients exceeds the maximum number of sending.

      You can check whether message delivery was canceled by [retrieving the narrowcast message progress](#get-narrowcast-progress-status). If delivery is canceled, the `phase` property in the response will be `failed`, and the `errorCode` property will be `5`.

      The `forbidPartialDelivery` property can only be specified if the `upToRemainingQuota` property is set to `true`.
      :::::
    ::::
  :::

  :::reference-code
  *Example limit object*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "max": 100,
        "upToRemainingQuota": true,
        "forbidPartialDelivery": true
      }
      ```
      :::::
    ::::
  :::
::

This table shows the relationship between the `max` property settings and `upToRemainingQuota` property settings, and the number of reservations and the maximum number of sending.

| `max` property | `upToRemainingQuota` property | Number of reservation and maximum number of sending                                              |
| -------------- | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| Not set        | false                         | Number of target reach                                                                           |
| Any number     | false                         | Minimum value from target reach and `max` property                                               |
| Not set        | true                          | Minimum value from target reach and estimated upper limit for the current month                  |
| Any number     | true                          | Minimum value from target reach, estimated upper limit for the current month, and `max` property |

#### Response

Returns the `202` HTTP status code and an empty JSON object.

Narrowcast messages are sent asynchronously. For more information on how to check the status of a narrowcast message, see [Get narrowcast message status](#get-narrowcast-progress-status).

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                                                                                                                                                                                                                                                                                                                                                                                   |
  | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Couldn't send the message. Consider these reasons:- An invalid request ID is specified in the [redelivery object](#narrowcast-recipient-redelivery-object). - An invalid audience is specified, such as a status other than `READY`. - An invalid message object is specified. - An invalid combination of request parameters is specified.                                                   |
  | `403` | Not enough recipients. For more information, see [Restrictions on sending messages using attributes and audiences](#send-narrowcast-message-restrictions).                                                                                                                                                                                                                                    |
  | `409` | A request containing the same retry key has already been accepted. For more information, see [Response if the request has already been accepted](#retry-api-request-response) in the Retrying an API request.                                                                                                                                                                                 |
  | `429` | The number of requests has exceeded the limit. Consider these reasons:- Exceeded the [rate limit](#send-narrowcast-rate-limit) for this endpoint. - Exceeded [the target limit for sending messages this month](#get-quota).  For more information about the target limit for sending messages, see [Messaging API pricing](/docs/messaging-api/pricing/) in the Messaging API documentation. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in [Common specifications](#common-specifications) section.

  The messages aren't sent to any user if an error is returned.
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify an invalid audience ID (400 Bad Request)
      {
          "message": "Invalid audience group id: {audience ID}"
      }

      // If you specify an invalid request ID for redelivery object (400 Bad Request)
      {
          "message": "Invalid request id: {request ID}"
      }

      // If you set limit.forbidPartialDelivery to true without setting limit.upToRemainingQuota to true (400 Bad Request)
      {
          "message": "The option forbidPartialDelivery must be used with upToRemainingQuota."
      }

      // If there are not enough friends (403 Forbidden)
      {
          "message": "Your account does not have enough friends"
      }
      ```
      :::::
    ::::
  :::
::
