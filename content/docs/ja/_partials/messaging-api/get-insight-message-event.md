---
title: Get Insight Message Event
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-insight-message-event
__hash__: zDiosbKxrA59q_wLmBeAjxEgCBeqUdcNXtTqsbOsLZk
seo:
  description: ''
---

### ユーザーの操作に基づく統計情報を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/insight/message/event?requestId={requestId}"}::reference-with-code
  :::reference-content
  LINE公式アカウントから送信したナローキャストメッセージまたはブロードキャストメッセージに対して、ユーザーがどのように操作したかを示す統計情報を確認できます。

  1メッセージ（message）単位、および1吹き出し（bubble）単位で統計情報を取得できます。

  ![message and bubbles](/media/messaging-api/get-message-event.png){className="[\"border\"]"}

    ::::admonition{title="記録される統計情報について" type="note"}
    統計情報は、メッセージの送信時刻から14日間（1,209,600秒間）のみ更新されます。それ以降は更新されません。

    たとえば2021年2月1日の21:15:00に送信した場合、統計情報は2021年2月15日の21:15:00まで更新されます。
    ::::
  :::

  :::reference-code
  *リクエストの例*

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
  requestId

  ナローキャストメッセージまたはブロードキャストメッセージのリクエストID。リクエストIDは、Messaging APIのリクエストごとに発行されるIDです。[レスポンスヘッダー](#response-headers)に含まれます。
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
      overview.requestId

      #undefined
      String

      リクエストID。
      :::::

      :::::parameter-table-entry
      #undefined
      overview.timestamp

      #undefined
      Number

      メッセージが配信された時刻。UNIX時間（秒）で返されます。
      :::::

      :::::parameter-table-entry
      #undefined
      overview.delivered

      #undefined
      Number

      メッセージの送信数。この値は、20未満の数値も表示されます。ただし、メッセージの送信がすべて完了していない場合はnullになります。
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
      // 各プロパティの値が20未満で統計情報が利用できない場合
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

      // 各プロパティの値が20以上で統計情報が利用できる場合
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

#### エラーレスポンス

詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
