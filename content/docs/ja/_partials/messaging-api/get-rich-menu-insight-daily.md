---
title: Get Rich Menu Insight Daily
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-rich-menu-insight-daily
__hash__: NcOtO-Ojywi1EPBf71YDmBUR0mvxJhGesWcs25G601s
seo:
  description: ''
---

### リッチメニューの統計情報（日別）を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/insight/richmenu/{richMenuId}/daily?from={from}&to={to}"}::reference-with-code
  :::reference-content
  指定した期間にリッチメニューを表示したユーザーの人数や、表示された回数などを日ごとの値で取得します。通常、統計情報の集計処理は翌日中に完了します。
  :::

  :::reference-code
  *リクエストの例*

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

#### レート制限

60リクエスト/時

レート制限について詳しくは、「[レート制限](#rate-limits)」を参照してください。

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### パスパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  richMenuId

  統計情報を取得するリッチメニューのID。
  :::
::

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  from

  #undefined
  String

  集計対象期間の開始日。開始日は、現在の3年前まで指定できます。たとえば、今日が`20260701`の場合、開始日は`20230701`以降を指定できます。

  - フォーマット：`yyyyMMdd`（例：`20230701`）
  - タイムゾーン：UTC+9
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  to

  #undefined
  String

  集計対象期間の終了日。終了日は、開始日を含めて99日後までを指定できます。たとえば、開始日が`20230701`の場合、終了日は`20230701`から`20231008`まで指定できます。

  - フォーマット：`yyyyMMdd`（例：`20231008`）
  - タイムゾーン：UTC+9
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::admonition{title="注意" type="note"}
    統計情報の数値は、多少の誤差を含むことがあります。

    またプライバシーを保護するため、`from`と`to`で指定した期間全体でリッチメニューをクリックした実人数が20人未満だった場合、レスポンスにはリッチメニューIDのみが含まれ、統計情報は取得できません。
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      richMenuId

      #undefined
      String

      リッチメニューのID
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      metricsFrom

      #undefined
      String

      指定した対象期間の中で、実際に取得できた統計情報の開始日。

      - フォーマット：`yyyyMMdd`（例：`20230701`）
      - タイムゾーン：UTC+9
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      metricsTo

      #undefined
      String

      指定した対象期間の中で、実際に取得できた統計情報の終了日。

      - フォーマット：`yyyyMMdd`（例：`20231008`）
      - タイムゾーン：UTC+9
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      impression

      #undefined
      Object

      リッチメニューの表示に関する統計情報を含むオブジェクト。
      :::::

      :::::parameter-table-entry
      #undefined
      impression.metrics

      #undefined
      Array of objects

      リッチメニューの日ごとの表示に関する統計情報を含むオブジェクトの配列。
      :::::

      :::::parameter-table-entry
      #undefined
      impression.metrics[].date

      #undefined
      String

      リッチメニューが表示された日。

      - フォーマット：`yyyyMMdd`（例：`20230701`）
      - タイムゾーン：UTC+9
      :::::

      :::::parameter-table-entry
      #undefined
      impression.metrics[].count

      #undefined
      Number

      リッチメニューが表示された回数。
      :::::

      :::::parameter-table-entry
      #undefined
      impression.metrics[].uniqueUsers

      #undefined
      Number

      リッチメニューが表示された人数。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      clicks

      #undefined
      Array of objects

      リッチメニューの日ごとのクリックに関する統計情報を含むオブジェクトの配列。
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].bounds

      #undefined
      Object

      [`bounds`オブジェクト](#bounds-object)。リッチメニューを作成するときに指定した、クリック領域の座標とサイズを表すオブジェクト。
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].metrics

      #undefined
      Array of objects

      リッチメニューのクリック数を含むオブジェクトの配列。
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].metrics[].date

      #undefined
      String

      リッチメニューで`clicks.bounds`が表す領域がクリックされた日。

      - フォーマット：`yyyyMMdd`（例：`20230701`）
      - タイムゾーン：UTC+9
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].metrics[].count

      #undefined
      Number

      リッチメニューで`clicks.bounds`が表す領域がクリックされた回数。
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].metrics[].uniqueUsers

      #undefined
      Number

      リッチメニューで`clicks.bounds`が表す領域をクリックした人数。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 統計情報が取得できない場合
      {
        "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4"
      }

      // 6つの領域に分かれたリッチメニューの統計情報を取得した場合
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

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                     |
  | ----- | ---------------------------------------------------------------------- |
  | `400` | 統計情報が取得できませんでした。次のような理由が考えられます。- 集計対象期間が指定されていない。 - 無効な集計対象期間が指定されている。 |
  | `404` | 存在しないリッチメニューが指定されています。                                                 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 集計期間の開始日や終了日を指定しなかった場合（400 Bad Request）
      {
        "message": "Bad Request"
      }

      // 指定した終了日が開始日より前の場合（400 Bad Request）
      {
        "message": "Parameter to must be the same date as, or after parameter from."
      }

      // 指定した終了日が開始日から99日を超える場合（400 Bad Request）
      {
        "message": "Date range exceeds. Max range is 99 days."
      }

      // 集計対象期間の開始日が過去3年を超える場合（400 Bad Request）
      {
        "message": "Parameter from must be the same date as, or after 2023-06-29."
      }
      ```
      :::::
    ::::
  :::
::
