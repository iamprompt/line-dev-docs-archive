---
title: Get Narrowcast Progress Status
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-narrowcast-progress-status
__hash__: P5L69vaCjIhmYM5TVfD9cSGCh0jRScGiADCdLt77ro4
seo:
  description: ''
---

### ナローキャストメッセージの進行状況を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/message/progress/narrowcast"}::reference-with-code
  :::reference-content
  ナローキャストメッセージの進行状況を取得します。

    ::::admonition{title="送信対象が一定数よりも少ない場合は送信できません" type="note"}
    送信対象のユーザーの属性を推測できないようにするために、送信対象が一定数よりも少ない場合はナローキャストメッセージを送信できません。詳しくは、「[属性情報やオーディエンスを利用したメッセージ送信の制限事項](#send-narrowcast-message-restrictions)」を参照してください。
    ::::

    ::::admonition{title="進行状況を取得できる期間" type="note"}
    `acceptedTime`プロパティの値（タイムスタンプ）から14日（336時間）以上経過すると、進行状況は取得できません。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET 'https://api.line.me/v2/bot/message/progress/narrowcast?requestId={request_id}' \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### レート制限

2,000リクエスト/秒

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

  ナローキャストメッセージのリクエストID。リクエストIDは、Messaging APIのリクエストごとに発行されるIDです。[レスポンスヘッダー](#response-headers)に含まれます。
  :::
::

#### レスポンス

HTTPステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

::parameter-table
  :::parameter-table-entry
  #undefined
  phase

  #undefined
  String

  進行状況。以下のいずれかの値です。

  - `waiting`：送信準備ができていません。フィルタリングなどを行っています。
  - `sending`：送信中です。
  - `succeeded`：送信処理が完了しました。これは、ユーザーがメッセージを正常に受信したことを示していません。
  - `failed`：送信が失敗しました。`failedDescription`プロパティで失敗した理由を確認できます。
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  successCount

  #undefined
  Number

  メッセージの受信に成功したユーザー数（※）
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  failureCount

  #undefined
  Number

  メッセージの受信に失敗したユーザー数（※）。  
  `phase`が`succeeded`の場合でも、`failureCount`が0でない限りは、ナローキャストメッセージを受信できていないユーザーがいます。たとえば、ナローキャストメッセージを送信中に、ユーザーがLINE公式アカウントをブロックした場合は`failureCount`に加算されます。
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  targetCount

  #undefined
  Number

  メッセージが配信される予定のユーザー数（※）
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  failedDescription

  #undefined
  String

  送信が失敗した理由。`phase`プロパティが`failed`の場合にのみ含まれます。
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  errorCode

  #undefined
  Number

  エラーの概要。`phase`プロパティが`failed`の場合にのみ含まれます。  

  以下のいずれかの値が返されます。

  - `1`：内部エラーが発生しました。
  - `2`：送信対象が少なすぎたためエラーになりました。
  - `3`：すでに受理されたリクエストを再試行したため、競合エラーが発生しました。
  - `4`：送信対象が50人未満のオーディエンスが、送信条件に含まれています。
  - `5`：送信対象の一部のみにメッセージが配信されることを防ぐために、メッセージの配信を中止しました。このエラーは、[`limit.forbidPartialDelivery`](#send-narrowcast-limit)に`true`を指定してメッセージを送信し、送信対象の人数がメッセージの最大送信数を超えていた場合に発生します。
  :::

  :::parameter-table-entry
  #undefined
  acceptedTime

  #undefined
  String

  ナローキャストメッセージ送信のリクエストを受け付けた時間をミリ秒で表します。

  - フォーマット：[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){rel="[\"nofollow\"]"}（例：`2020-12-03T10:15:30.121Z`）
  - タイムゾーン：UTC
  :::

  :::parameter-table-entry{annotation="含まれないことがあります"}
  #undefined
  completedTime

  #undefined
  String

  ナローキャストメッセージの送信を完了した時間をミリ秒で表します。`phase`プロパティが`succeeded`または`failed`の場合にのみ返されます。

  - フォーマット：[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){rel="[\"nofollow\"]"}（例：`2020-12-03T10:15:30.121Z`）
  - タイムゾーン：UTC
  :::
::

※`phase`プロパティが`waiting`の場合は取得できません。

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                                  |
  | ----- | ----------------------------------------------------------------------------------- |
  | `400` | 無効なリクエストIDが指定されています。                                                                |
  | `404` | 進行状況が取得できませんでした。次のような理由が考えられます。- 進行状況を取得できる期間を超えている。 - ナローキャストメッセージ以外のリクエストIDを指定した。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 進行状況を取得できなかった場合（404 Not Found）
      {
        "message": "Not found"
      }
      ```
      :::::
    ::::
  :::
::
