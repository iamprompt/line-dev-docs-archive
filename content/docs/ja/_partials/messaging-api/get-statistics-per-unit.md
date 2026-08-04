---
title: Get Statistics Per Unit
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-statistics-per-unit
__hash__: _p91PBojFAMUzd8vtanJX4eGrDxQhrXrrvPHCYts6Pk
seo:
  description: ''
---

### ユニットごとの統計情報を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/insight/message/event/aggregation?customAggregationUnit={customAggregationUnit}&from={from}&to={to}"}::reference-with-code
  :::reference-content
  LINE公式アカウントから送信したプッシュメッセージやマルチキャストメッセージに対して、ユーザーがどのように操作したかを示す統計情報をユニットごとに確認できます。

  統計情報はユニットごとに、1メッセージ（message）単位、および1吹き出し（bubble）単位で取得できます。

  ![message and bubbles](/media/messaging-api/get-message-event.png){className="[\"border\"]"}

  なお、ユニット名が同じメッセージを複数送った場合、メッセージの内容や吹き出し数、吹き出しの順番が異なっていても、統計情報はユニットごとにまとめて集計されます。

    ::::admonition{title="記録される統計情報について" type="note"}
    統計情報は、メッセージの送信時刻から14日間（1,209,600秒間）のみ更新されます。それ以降は更新されません。

    たとえば2021年2月1日の21:15:00に送信した場合、統計情報は2021年2月15日の21:15:00まで更新されます。

    同じユニット名で後から別のメッセージを送信しても、以前に送信したメッセージの統計情報が更新される期間が延長されることはありません。各メッセージの統計情報は、そのメッセージの送信時刻から14日間のみ更新されます。
    ::::

    ::::admonition{title="メッセージごとの統計情報を取得したい場合" type="tip"}
    ナローキャストメッセージまたはブロードキャストメッセージについて、メッセージごとの統計情報を取得したい場合は、次のエンドポイントを使用してください。

    - [ユーザーの操作に基づく統計情報を取得する](/reference/messaging-api/#get-message-event)
    ::::
  :::

  :::reference-code
  *リクエストの例*

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

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  customAggregationUnit

  #undefined
  String

  メッセージ送信時に付与した任意の集計単位のユニット名。大文字と小文字は区別されます。たとえば`promotion_a`と`promotion_A`は別のユニットとして扱われます。

  ユニット名の付与について詳しくは、『Messaging APIドキュメント』の「[ユニット名を付与する](/docs/messaging-api/unit-based-statistics-aggregation/#assign-names-to-units-when-sending-messages)」を参照してください。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  from

  #undefined
  String

  集計対象期間の開始日。

  - フォーマット：`yyyyMMdd`（例：`20210301`）
  - タイムゾーン：UTC+9
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  to

  #undefined
  String

  集計対象期間の終了日。終了日は、開始日の30日後まで指定できます。たとえば、開始日が`20210301`の場合、終了日は`20210331`まで指定できます。

  - フォーマット：`yyyyMMdd`（例：`20210331`）
  - タイムゾーン：UTC+9
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::admonition{title="注意" type="note"}
    統計情報の数値は、多少の誤差を含むことがあります。

    またプライバシーを保護するため、次のような場合、個人の操作に関するプロパティの値は`null`になります。

    - プロパティの値が20未満だった場合
    - プロパティの値が20以上であっても、そのイベントを発生させた実人数が20人未満だった場合（たとえば`messages[].mediaPlayed`は30だが、`messages[].uniqueMediaPlayed`が15だった場合は、どちらの値も`null`になります）
    ::::

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      overview

      #undefined
      Object

      メッセージに関する統計情報。
      :::::

      :::::parameter-table-entry
      #undefined
      overview.uniqueImpression

      #undefined
      Number

      メッセージを開封した人数。少なくとも1つの吹き出しを表示した人数です。
      :::::

      :::::parameter-table-entry
      #undefined
      overview.uniqueClick

      #undefined
      Number

      メッセージ内のいずれかのURLをタップした人数。
      :::::

      :::::parameter-table-entry
      #undefined
      overview.uniqueMediaPlayed

      #undefined
      Number

      メッセージ内のいずれかの動画または音声の再生を開始した人数。
      :::::

      :::::parameter-table-entry
      #undefined
      overview.uniqueMediaPlayed100Percent

      #undefined
      Number

      メッセージ内のいずれかの動画または音声を最後まで視聴した人数。
      :::::

      :::::parameter-table-entry
      #undefined
      messages

      #undefined
      Array

      吹き出しに関する情報を表す配列。統計情報が利用できない場合、空の配列を返します。
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].seq

      #undefined
      Number

      吹き出しの通し番号。
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].impression

      #undefined
      Number

      吹き出しが表示された回数。
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].uniqueImpression

      #undefined
      Number

      吹き出しを表示した人数。
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].mediaPlayed

      #undefined
      Number

      吹き出し内の動画または音声が再生開始された回数。動画が自動再生された場合も、回数に含まれます。
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].mediaPlayed25Percent

      #undefined
      Number

      吹き出し内の動画または音声が再生開始され、25%再生された回数。
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].mediaPlayed50Percent

      #undefined
      Number

      吹き出し内の動画または音声が再生開始され、50%再生された回数。
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].mediaPlayed75Percent

      #undefined
      Number

      吹き出し内の動画または音声が再生開始され、75%再生された回数。
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].mediaPlayed100Percent

      #undefined
      Number

      吹き出し内の動画または音声が再生開始され、100%再生された回数。
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].uniqueMediaPlayed

      #undefined
      Number

      吹き出し内の動画または音声を再生開始した人数。
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].uniqueMediaPlayed25Percent

      #undefined
      Number

      吹き出し内の動画または音声を再生開始し、25%再生した人数。
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].uniqueMediaPlayed50Percent

      #undefined
      Number

      吹き出し内の動画または音声を再生開始し、50%再生した人数。
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].uniqueMediaPlayed75Percent

      #undefined
      Number

      吹き出し内の動画または音声を再生開始し、75%再生した人数。
      :::::

      :::::parameter-table-entry
      #undefined
      messages[].uniqueMediaPlayed100Percent

      #undefined
      Number

      吹き出し内の動画または音声を再生開始し、100%再生した人数。
      :::::

      :::::parameter-table-entry
      #undefined
      clicks

      #undefined
      Array

      タップしたURLに関する情報を表す配列。メッセージにURLが含まれていない場合や統計情報が利用できない場合は、空の配列を返します。
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].seq

      #undefined
      Number

      URLが含まれていた吹き出しの通し番号。
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].url

      #undefined
      String

      URL。
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].click

      #undefined
      Number

      吹き出し内のURLをタップした回数。
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].uniqueClick

      #undefined
      Number

      吹き出し内のURLをタップした人数。
      :::::

      :::::parameter-table-entry
      #undefined
      clicks[].uniqueClickOfRequest

      #undefined
      Number

      メッセージ内のURLのうち`url`と同じURLをタップした人数。ほかの吹き出しに同じURLが設定されている場合に、1人のユーザーが各URLをタップした場合でも、1回だけカウントされます。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 集計対象期間に該当するユニットの統計情報が存在しなかった場合
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

      // 集計対象期間に該当するユニットの統計情報が存在した場合
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

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                                       |
  | ----- | ---------------------------------------------------------------------------------------- |
  | `400` | 統計情報が取得できませんでした。次のような理由が考えられます。- ユニット名が指定されていない。 - 集計対象期間が指定されていない。 - 無効な集計対象期間が指定されている。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 統計情報が取得できなかった場合（400 Bad Request）
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
