---
title: Get Statistics Per Unit
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-statistics-per-unit
__hash__: mwFixfiEqApjadR7-EwgzdC6UDRClCZbNopIzM_y6uo
seo:
  description: ''
---

### Get statistics per unit

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/insight/message/event/aggregation?customAggregationUnit={customAggregationUnit}&from={from}&to={to}"}::reference-with-code
  :::reference-content
  You can check the per-unit statistics of how users interact with push messages and multicast messages sent from your LINE Official Account.

  You can get statistics on a per-message and per-message bubble basis for each unit.

  ![message and bubbles](/media/messaging-api/get-message-event.png){className="[\"border\"]"}

  If you send messages with the same unit name, the statistics are aggregated together, regardless of message contents or the number and order of message bubbles.

    ::::admonition{title="On recorded statistics" type="note"}
    Statistics are updated for only 14 days (1,209,600 seconds) from the time a message was sent. After that time, statistics aren't updated.

    For example, if you send a message at 15:00 on February 1, 2021, statistics will be updated until 15:00 on February 15, 2021.

    Sending another message with the same unit name later doesn't extend the period during which statistics for previously sent messages are updated. Statistics for each message are updated independently for 14 days from its send time.
    ::::

    ::::admonition{title="To get statistics per message" type="tip"}
    Use this endpoint to get statistics per narrowcast message or broadcast message.

    - [Get user interaction statistics](/reference/messaging-api/#get-message-event)
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/insight/message/event/aggregation \
      -H 'Authorization: Bearer {channel access token}' \
      --data-urlencode 'customAggregationUnit=promotion_a' \
      --data-urlencode 'from=20210301' \
      --data-urlencode 'to=20210331' \
      -G
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
  customAggregationUnit

  #undefined
  String

  Name of aggregation unit specified when sending the message. Case-sensitive. For example, `Promotion_a` and `Promotion_A` are regarded as different unit names.

  For more information about assigning a unit name, see [Assign a unit name](/docs/messaging-api/unit-based-statistics-aggregation/#assign-names-to-units-when-sending-messages) in the Messaging API documentation.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  from

  #undefined
  String

  Start date of aggregation period.

  - Format: `yyyyMMdd` (e.g. `20210301`)
  - Time zone: UTC+9
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  to

  #undefined
  String

  End date of aggregation period. The end date can be specified for up to 30 days later. For example, if the start date is `20210301`, the latest end date is `20210331`.

  - Format: `yyyyMMdd` (e.g. `20210301`)
  - Time zone: UTC+9
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns a `200` HTTP status code and a JSON object with this information.

    ::::admonition{title="Note" type="note"}
    The statistical data may contain some errors.

    To protect users' privacy, the values of some properties related to user interactions will be displayed as `null` in these cases:

    - The property value is less than 20
    - Even if the property value is higher than or equal to 20, the actual number of users who generated the event is less than 20 (for example, if `messages[].mediaPlayed` is 30, but `messages[].uniqueMediaPlayed` is 15, both will be displayed as `null`
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      overview

      #undefined
      Object

      Statistics related to messages.
      :::::

      :::::parameter-table-entry
      #undefined
      overview.uniqueImpression

      #undefined
      Number

      Number of users who opened the message, meaning they displayed at least 1 bubble.
      :::::

      :::::parameter-table-entry
      #undefined
      overview.uniqueClick

      #undefined
      Number

      Number of users who opened any URL in the message.
      :::::

      :::::parameter-table-entry
      #undefined
      overview.uniqueMediaPlayed

      #undefined
      Number

      Number of users who started playing any video or audio in the message.
      :::::

      :::::parameter-table-entry
      #undefined
      overview.uniqueMediaPlayed100Percent

      #undefined
      Number

      Number of users who played the entirety of any video or audio in the message.
      :::::

      :::::parameter-table-entry
      #undefined
      messages

      #undefined
      Array

      Array of information about individual message bubbles. If the statistic isn't available, an empty array is returned.
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].seq

      #undefined
      Number

      Bubble's serial number.
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].impression

      #undefined
      Number

      Number of times the bubble was displayed.
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].uniqueImpression

      #undefined
      Number

      Number of users that displayed the bubble.
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].mediaPlayed

      #undefined
      Number

      Number of times audio or video in the bubble started playing. This count also includes the number of times a video is automatically played.
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].mediaPlayed25Percent

      #undefined
      Number

      Number of times audio or video in the bubble started playing and was played 25% of the total time.
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].mediaPlayed50Percent

      #undefined
      Number

      Number of times audio or video in the bubble started playing and was played 50% of the total time.
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].mediaPlayed75Percent

      #undefined
      Number

      Number of times audio or video in the bubble started playing and was played 75% of the total time.
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].mediaPlayed100Percent

      #undefined
      Number

      Number of times audio or video in the bubble started playing and was played 100% of the total time.
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].uniqueMediaPlayed

      #undefined
      Number

      Number of users that started playing audio or video in the bubble.
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].uniqueMediaPlayed25Percent

      #undefined
      Number

      Number of users that started playing audio or video in the bubble and played 25% of the total time.
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].uniqueMediaPlayed50Percent

      #undefined
      Number

      Number of users that started playing audio or video in the bubble and played 50% of the total time.
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].uniqueMediaPlayed75Percent

      #undefined
      Number

      Number of users that started playing audio or video in the bubble and played 75% of the total time.
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].uniqueMediaPlayed100Percent

      #undefined
      Number

      Number of users that started playing audio or video in the bubble and played 100% of the total time.
      :::::

      :::::parameter-table-entry
      #undefined
      clicks

      #undefined
      Array

      Array of information about opened URLs in the message. If the message doesn't contain any URLs or the statistic isn't available, an empty array is returned.
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].seq

      #undefined
      Number

      The URL's serial number.
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].url

      #undefined
      String

      URL.
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].click

      #undefined
      Number

      Number of times the URL in the bubble was opened.
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].uniqueClick

      #undefined
      Number

      Number of users that opened the URL in the bubble.
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].uniqueClickOfRequest

      #undefined
      Number

      Number of users who opened this `url` through any link in the message. If another message bubble contains the same URL and a user opens both links, it's counted only once.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If there is no statistic for aggregation period
      {
        "overview": {
          "uniqueImpression": null,
          "uniqueClick": null,
          "uniqueMediaPlayed": null,
          "uniqueMediaPlayed100Percent": null
        },
        "messages": [],
        "clicks": []
      }

      // If there is a statistic for aggregation period
      {
        "overview": {
          "uniqueImpression": 40,
          "uniqueClick": 30,
          "uniqueMediaPlayed": 25,
          "uniqueMediaPlayed100Percent": null
        },
        "messages": [
          {
            "seq": 1,
            "impression": 42,
            "uniqueImpression": 40,
            "mediaPlayed": 30,
            "mediaPlayed25Percent": null,
            "mediaPlayed50Percent": null,
            "mediaPlayed75Percent": null,
            "mediaPlayed100Percent": null,
            "uniqueMediaPlayed": 25,
            "uniqueMediaPlayed25Percent": null,
            "uniqueMediaPlayed50Percent": null,
            "uniqueMediaPlayed75Percent": null,
            "uniqueMediaPlayed100Percent": null
          }
        ],
        "clicks": [
          {
            "seq": 1,
            "url": "https://developers.line.biz/",
            "click": 35,
            "uniqueClick": 25,
            "uniqueClickOfRequest": null
          },
          {
            "seq": 1,
            "url": "https://api.line-status.info/",
            "click": 29,
            "uniqueClick": null,
            "uniqueClickOfRequest": null
          }
        ]
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

  | Code  | Description                                                                                                                                                        |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `400` | Unable to get the statistic. Consider these reasons:- No unit name specified. - No aggregation period date specified. - Invalid aggregation period date specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you couldn't get the statistic (400 Bad Request)
      {
        "message": null,
        "key": null,
        "stacktrace": null,
        "code": null
      }
      ```
      :::::
    ::::
  :::
::
