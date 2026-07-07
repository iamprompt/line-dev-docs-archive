---
title: Get Insight Message Event
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-insight-message-event
__hash__: SIs2UjGkU_bNMvldPa5BfTiqU7IqbSSN5GMUmmiGsmY
seo:
  description: ''
---

### Get user interaction statistics

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/insight/message/event?requestId={requestId}"}::reference-with-code
  :::reference-content
  Returns statistics about how users interact with narrowcast messages or broadcast messages sent from your LINE Official Account.

  You can get statistics per message or per bubble.

  ![message and bubbles](/media/messaging-api/get-message-event.png){className="[\"border\"]"}

    ::::admonition{title="On the recorded statistics recorded" type="note"}
    Statistics are updated for only 14 days (1,209,600 seconds) from the time a message was sent. After that time, statistics aren't updated.

    For example, if you send a message at 15:00 on February 1, 2021, statistics will be updated until 15:00 on February 15, 2021.
    ::::
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET 'https://api.line.me/v2/bot/insight/message/event?requestId=f70dd685-499a-4231-a441-f24b8d4fba21' \
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
  requestId

  Request ID of a narrowcast message or broadcast message. Each Messaging API request has a request ID. Find it in the [response headers](#response-headers).
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with these properties:

    ::::admonition{title="Note" type="note"}
    The statistical data may contain some errors.

    To protect users' privacy, the values of some properties related to user interactions will be displayed as `null` in the following cases:

    - The property value is less than 20
    - Even if the property value is higher than or equal to 20, the actual number of users who generated the event is less than 20 (for example, if `messages[].mediaPlayed` is 30, but `messages[].uniqueMediaPlayed` is 15, both will be displayed as `null`
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      overview

      #undefined
      Object

      Summary of message statistics.
      :::::

      :::::parameter-table-entry
      #undefined
      overview.requestId

      #undefined
      String

      Request ID.
      :::::

      :::::parameter-table-entry
      #undefined
      overview.timestamp

      #undefined
      Number

      Message delivery time in UNIX time (in seconds).
      :::::

      :::::parameter-table-entry
      #undefined
      overview.delivered

      #undefined
      Number

      Number of messages delivered. This property shows values of less than 20. However, if all messages have not been sent, it will be null.
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

      Number of times the URL was opened.
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].uniqueClick

      #undefined
      Number

      Number of users that opened the URL.
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].uniqueClickOfRequest

      #undefined
      Number

      Number of users who opened this `url` through any link in the message. If a message contains two links to the same URL and a user opens both links, they're counted only once.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If the statistic isn't available because the value of each property is lower than 20
      {
        "overview": {
          "requestId": "a425a5cd-6510-43fe-95be-a27f222e5dc0",
          "timestamp": 1711684800,
          "delivered": 1,
          "uniqueImpression": null,
          "uniqueClick": null,
          "uniqueMediaPlayed": null,
          "uniqueMediaPlayed100Percent": null
        },
        "messages": [],
        "clicks": []
      }

      // If the statistic is available because the value of each property is 20 or higher
      {
        "overview": {
          "requestId": "f70dd685-499a-4231-a441-f24b8d4fba21",
          "timestamp": 1568214000,
          "delivered": 320,
          "uniqueImpression": 82,
          "uniqueClick": 51,
          "uniqueMediaPlayed": null,
          "uniqueMediaPlayed100Percent": null
        },
        "messages": [
          {
            "seq": 1,
            "impression": 136,
            "mediaPlayed": null,
            "mediaPlayed25Percent": null,
            "mediaPlayed50Percent": null,
            "mediaPlayed75Percent": null,
            "mediaPlayed100Percent": null,
            "uniqueMediaPlayed": null,
            "uniqueMediaPlayed25Percent": null,
            "uniqueMediaPlayed50Percent": null,
            "uniqueMediaPlayed75Percent": null,
            "uniqueMediaPlayed100Percent": null
          }
        ],
        "clicks": [
          {
            "seq": 1,
            "url": "https://line.me/",
            "click": 41,
            "uniqueClick": 30,
            "uniqueClickOfRequest": 30
          },
          {
            "seq": 1,
            "url": "https://www.lycorp.co.jp/",
            "click": 59,
            "uniqueClick": 38,
            "uniqueClickOfRequest": 38
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
