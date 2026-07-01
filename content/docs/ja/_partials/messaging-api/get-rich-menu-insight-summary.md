---
title: Get Rich Menu Insight Summary
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-rich-menu-insight-summary
__hash__: WRhw1sWovXH1zuMB_PUL6ADfp9zYwtnixtv5SrUJCBY
seo:
  description: ''
---

### リッチメニューの統計情報（合計）を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/insight/richmenu/{richMenuId}/summary?from={from}&to={to}"}::reference-with-code
  :::reference-content
  指定した期間にリッチメニューを表示したユーザーの人数や、表示された回数などを合計値として取得します。通常、統計情報の集計処理は翌日中に完了します。
  :::

  :::reference-code
  *リクエストの例*

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

  集計対象期間の終了日。終了日は、開始日を含めて396日後まで指定できます。たとえば、開始日が`20230701`の場合、終了日は`20230701`から`20240731`まで指定できます。

  - フォーマット：`yyyyMMdd`（例：`20240731`）
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
      Object

      リッチメニューの表示数を含むオブジェクト。
      :::::

      :::::parameter-table-entry
      #undefined
      impression.metrics.count

      #undefined
      Number

      リッチメニューが表示された回数。
      :::::

      :::::parameter-table-entry
      #undefined
      impression.metrics.uniqueUsers

      #undefined
      Number

      リッチメニューが表示された人数。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      clicks

      #undefined
      Array of objects

      リッチメニューのクリック数を含むオブジェクトの配列。
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
      Object

      リッチメニューのクリック数を含むオブジェクト。
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].metrics.count

      #undefined
      Number

      リッチメニューで`clicks.bounds`が表す領域がクリックされた回数。
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].metrics.uniqueUsers

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

      // 指定した終了日が開始日から396日を超える場合（400 Bad Request）
      {
        "message": "Date range exceeds. Max range is 396 days."
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
