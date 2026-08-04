---
title: Get Rich Menu Insight Daily
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-rich-menu-insight-daily
__hash__: gM8L495r5xExjnR3nEzlUIsWzA6Z916WxedS8nfC34A
seo:
  description: ''
---

### Get rich menu insight by day

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/insight/richmenu/{richMenuId}/daily?from={from}&to={to}"}::reference-with-code
  :::reference-content
  Retrieves daily statistics for the specified period, such as the number of users who viewed the rich menu and how many times it was viewed. The aggregation process of these statistics is usually completed within the next day.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/insight/richmenu/richmenu-862e6ad6c267d2ddf3f42bc78554f6a4/daily \
      -H 'Authorization: Bearer {channel access token}' \
      --data-urlencode 'from=20260610' \
      --data-urlencode 'to=20260612' \
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

#### Path parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  richMenuId

  ID of the rich menu for which to retrieve statistics.
  :::
::

#### Query parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  from

  #undefined
  String

  Start date of aggregation period. The start date can be specified for up to 3 years earlier. For example, if today is `20260701`, the earliest start date is `20230701`.

  - Format: `yyyyMMdd` (e.g. `20230701`)
  - Time zone: UTC+9
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  to

  #undefined
  String

  End date of aggregation period. The end date can be specified for up to 99 days later. For example, if the start date is `20230701`, the end date can be specified from `20230701` to `20231008`.

  - Format: `yyyyMMdd` (e.g. `20231008`)
  - Time zone: UTC+9
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns a `200` HTTP status code and a JSON object with this information.

    ::::admonition{title="Note" type="note"}
    The statistical data may contain some errors.

    To protect users' privacy, if the number of unique users who clicked the rich menu during the entire period specified by `from` and `to` is less than 20, only the rich menu ID is included in the response and no statistical data is returned.
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      richMenuId

      #undefined
      String

      ID of a rich menu
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      metricsFrom

      #undefined
      String

      Start date of the statistical data actually retrieved within the specified period.

      - Format: `yyyyMMdd` (e.g. `20230701`)
      - Time zone: UTC+9
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      metricsTo

      #undefined
      String

      End date of the statistical data actually retrieved within the specified period.

      - Format: `yyyyMMdd` (e.g. `20231008`)
      - Time zone: UTC+9
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      impression

      #undefined
      Object

      Object containing statistics related to rich menu impressions.
      :::::

      :::::parameter-table-entry
      #undefined
      impression.metrics

      #undefined
      Array of objects

      Array of objects containing daily statistics related to rich menu impressions.
      :::::

      :::::parameter-table-entry
      #undefined
      impression.metrics[].date

      #undefined
      String

      The date the rich menu was viewed.

      - Format: `yyyyMMdd` (e.g. `20230701`)
      - Time zone: UTC+9
      :::::

      :::::parameter-table-entry
      #undefined
      impression.metrics[].count

      #undefined
      Number

      The number of times the rich menu was viewed.
      :::::

      :::::parameter-table-entry
      #undefined
      impression.metrics[].uniqueUsers

      #undefined
      Number

      The number of users who viewed the rich menu.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      clicks

      #undefined
      Array of objects

      Array of objects containing daily statistics related to rich menu clicks.
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].bounds

      #undefined
      Object

      [`bounds` object](#bounds-object). Object representing the coordinates and size of the click area specified when the rich menu was created.
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].metrics

      #undefined
      Array of objects

      Array of objects containing the number of rich menu clicks.
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].metrics[].date

      #undefined
      String

      The date the rich menu click area represented by `clicks.bounds` was clicked.

      - Format: `yyyyMMdd` (e.g. `20230701`)
      - Time zone: UTC+9
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].metrics[].count

      #undefined
      Number

      The number of times the rich menu click area represented by `clicks.bounds` was clicked.
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].metrics[].uniqueUsers

      #undefined
      Number

      The number of users who clicked the rich menu click area represented by `clicks.bounds`.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If no statistical data is available
      {
        "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4"
      }

      // When retrieving statistics for a rich menu divided into 6 boundaries
      {
        "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4",
        "metricsFrom": "20260610",
        "metricsTo": "20260611",
        "impression": {
          "metrics": [
            {
              "date": "20260610",
              "count": 1364,
              "uniqueUsers": 1254
            },
            {
              "date": "20260611",
              "count": 282,
              "uniqueUsers": 260
            }
          ]
        },
        "clicks": [
          {
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 833,
              "height": 843
            },
            "metrics": [
              {
                "date": "20260610",
                "count": 9,
                "uniqueUsers": 8
              },
              {
                "date": "20260611",
                "count": 2,
                "uniqueUsers": 2
              }
            ]
          },
          {
            "bounds": {
              "x": 833,
              "y": 0,
              "width": 833,
              "height": 843
            },
            "metrics": [
              {
                "date": "20260610",
                "count": 3,
                "uniqueUsers": 3
              },
              {
                "date": "20260611",
                "count": 0,
                "uniqueUsers": 0
              }
            ]
          },
          {
            "bounds": {
              "x": 1666,
              "y": 0,
              "width": 833,
              "height": 843
            },
            "metrics": [
              {
                "date": "20260610",
                "count": 7,
                "uniqueUsers": 7
              },
              {
                "date": "20260611",
                "count": 1,
                "uniqueUsers": 1
              }
            ]
          },
          {
            "bounds": {
              "x": 0,
              "y": 843,
              "width": 833,
              "height": 843
            },
            "metrics": [
              {
                "date": "20260610",
                "count": 4,
                "uniqueUsers": 4
              },
              {
                "date": "20260611",
                "count": 4,
                "uniqueUsers": 3
              }
            ]
          },
          {
            "bounds": {
              "x": 833,
              "y": 843,
              "width": 833,
              "height": 843
            },
            "metrics": [
              {
                "date": "20260610",
                "count": 0,
                "uniqueUsers": 0
              },
              {
                "date": "20260611",
                "count": 1,
                "uniqueUsers": 1
              }
            ]
          },
          {
            "bounds": {
              "x": 1666,
              "y": 843,
              "width": 833,
              "height": 843
            },
            "metrics": [
              {
                "date": "20260610",
                "count": 3,
                "uniqueUsers": 3
              },
              {
                "date": "20260611",
                "count": 2,
                "uniqueUsers": 2
              }
            ]
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

  | Code  | Description                                                                                                                              |
  | ----- | ---------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | Unable to get the statistic. Consider these reasons:- No aggregation period date specified. - Invalid aggregation period date specified. |
  | `404` | A non-existent rich menu is specified.                                                                                                   |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If the start or end date of the aggregation period is not specified (400 Bad Request)
      {
        "message": "Bad Request"
      }

      // If the specified end date is earlier than the start date (400 Bad Request)
      {
        "message": "Parameter to must be the same date as, or after parameter from."
      }

      // If the specified end date is more than 99 days after the start date (400 Bad Request)
      {
        "message": "Date range exceeds. Max range is 99 days."
      }

      // If the start date of the aggregation period is earlier than 3 years ago (400 Bad Request)
      {
        "message": "Parameter from must be the same date as, or after 2023-06-29."
      }
      ```
      :::::
    ::::
  :::
::
