---
title: Get Rich Menu Insight Summary
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-rich-menu-insight-summary
__hash__: xpUKWZLx1nm_7_TCs43Hlcvl3IyJhW3jZTt1VIZ1H_c
seo:
  description: ''
---

### Get rich menu insight totals

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/insight/richmenu/{richMenuId}/summary?from={from}&to={to}"}::reference-with-code
  :::reference-content
  Retrieves aggregate statistics for the specified period, such as the number of users who viewed the rich menu and how many times it was viewed. The aggregation process of these statistics is usually completed within the next day.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/insight/richmenu/richmenu-862e6ad6c267d2ddf3f42bc78554f6a4/summary \
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

  End date of aggregation period. The end date can be specified for up to 396 days later. For example, if the start date is `20230701`, the end date can be specified from `20230701` to `20240731`.

  - Format: `yyyyMMdd` (e.g. `20240731`)
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
      Object

      Object containing the number of rich menu impressions.
      :::::

      :::::parameter-table-entry
      #undefined
      impression.metrics.count

      #undefined
      Number

      The number of times the rich menu was viewed.
      :::::

      :::::parameter-table-entry
      #undefined
      impression.metrics.uniqueUsers

      #undefined
      Number

      The number of users who viewed the rich menu.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      clicks

      #undefined
      Array of objects

      Array of objects containing the number of rich menu clicks.
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
      Object

      Object containing the number of rich menu clicks.
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].metrics.count

      #undefined
      Number

      The number of times the rich menu click area represented by `clicks.bounds` was clicked.
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].metrics.uniqueUsers

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
        "metricsFrom": "20260301",
        "metricsTo": "20260331",
        "impression": {
          "metrics": {
            "count": 10141,
            "uniqueUsers": 2366
          }
        },
        "clicks": [
          {
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 833,
              "height": 843
            },
            "metrics": {
              "count": 74,
              "uniqueUsers": 55
            }
          },
          {
            "bounds": {
              "x": 833,
              "y": 0,
              "width": 833,
              "height": 843
            },
            "metrics": {
              "count": 15,
              "uniqueUsers": 15
            }
          },
          {
            "bounds": {
              "x": 1666,
              "y": 0,
              "width": 833,
              "height": 843
            },
            "metrics": {
              "count": 53,
              "uniqueUsers": 46
            }
          },
          {
            "bounds": {
              "x": 0,
              "y": 843,
              "width": 833,
              "height": 843
            },
            "metrics": {
              "count": 49,
              "uniqueUsers": 42
            }
          },
          {
            "bounds": {
              "x": 833,
              "y": 843,
              "width": 833,
              "height": 843
            },
            "metrics": {
              "count": 17,
              "uniqueUsers": 14
            }
          },
          {
            "bounds": {
              "x": 1666,
              "y": 843,
              "width": 833,
              "height": 843
            },
            "metrics": {
              "count": 17,
              "uniqueUsers": 14
            }
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

      // If the specified end date is more than 396 days after the start date (400 Bad Request)
      {
        "message": "Date range exceeds. Max range is 396 days."
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
