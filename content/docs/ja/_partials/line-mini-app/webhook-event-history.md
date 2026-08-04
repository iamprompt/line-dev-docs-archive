---
title: Webhook Event History
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-mini-app/webhook-event-history
__hash__: H2Y05LePYojcAIulaJOVG1m6UM1U_RWTyH-Y2VZezUI
seo:
  description: ''
---

### Webhookイベントの履歴を取得する

::reference-with-code
  :::reference-content
  LINEプラットフォームが送信したWebhookイベントの履歴を取得します。カーソルベースのページネーションで、1回に最大100件取得できます。

  ソート順は、LINEプラットフォームでWebhookイベントの送信を開始した日時の昇順となります。

  取得できるWebhookイベントは過去7日間に送信されたものに限られます。現時点では[購入完了イベント](#purchase-complete-event)のみ取得可能で、[返金イベント](#refund-event)は今後対応予定です。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl "https://api.line.me/iap/v1/webhook/events?startEpochSeconds=1747330438&endEpochSeconds=1747708454&pageSize=10" \
        -H "Authorization: Bearer {ChannelAccessToken}"
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`GET https://api.line.me/iap/v1/webhook/events`

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`  

  詳しくは、『LINEプラットフォームの基礎知識』の「[チャネルアクセストークン](/docs/basics/channel-access-token/)」を参照してください。
  :::
::

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  startEpochSeconds

  #undefined
  Number

  Webhookイベントの履歴を取得する期間の開始日時を指定します。指定した日時も取得対象に含まれます。過去7日以内のUNIX時間（秒）で指定してください。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  endEpochSeconds

  #undefined
  Number

  Webhookイベントの履歴を取得する期間の終了日時を指定します。指定した日時も取得対象に含まれます。過去7日以内のUNIX時間（秒）で指定してください。
  :::

  :::parameter-table-entry
  #undefined
  cursor

  #undefined
  String

  Webhookイベントのページのカーソル。  

  初回のリクエストでは指定しないでください。2回目以降のリクエストでは、前回のリクエスト時のレスポンスに含まれていた`nextCursor`の値を指定することで、続きのWebhookイベントを取得できます。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  pageSize

  #undefined
  Number

  1ページあたりのWebhookイベントの件数。  
   

  - 最小値：1
  - 最大値：100
  :::

  :::parameter-table-entry
  #undefined
  status

  #undefined
  String

  取得したいWebhookイベントのステータス。次のいずれかを指定します。

  - `SUCCESS`：受け取りに成功したWebhookイベントの履歴を取得します。
  - `FAILED`：受け取りに失敗したWebhookイベントの履歴を取得します。

  未指定の場合、受け取りの成否に関わらず、すべてのWebhookイベントの履歴を取得します。
  :::
::

::admonition{title="ページネーション中はcursor以外のパラメータを変更しないでください" type="note"}
ページネーション中は、`cursor`以外のパラメータを変更せずにリクエストしてください。パラメータを変更したい場合、最初のページからリクエストし直してください。
::

#### レスポンス

::reference-with-code
  :::reference-content
  成功した場合、ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      events

      #undefined
      Array

      Webhookイベントのリスト。
      :::::

      :::::parameter-table-entry
      #undefined
      events[].transactionType

      #undefined
      String

      常に`PRODUCT`が返されます。
      :::::

      :::::parameter-table-entry
      #undefined
      events[].event

      #undefined
      Object

      [Webhookイベントオブジェクト](#purchase-complete-payload)。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      nextCursor

      #undefined
      String

      次のページのカーソル。  

      次のページが存在しない場合、`null`となります。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "events": [
          {
            "transactionType": "PRODUCT",
            "event": {
              "type": "purchaseComplete",
              "orderId": "T2025020710000002126002",
              "productId": "iap_ln_002",
              "userId": "U91FC5A...",
              "purchaseTimestamp": 1738672496,
              "channelId": "12345..."
            }
          }
        ],
        "nextCursor": "MTY3NjU0"
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

エラーレスポンスの形式については、[エラーレスポンス](#iap-error-responses)を参照してください。

一般的なもの以外で発生する可能性があるエラーには、次のようなものがあります。

| エラーコード                | 説明                                                                       |
| --------------------- | ------------------------------------------------------------------------ |
| VALIDATION_ERROR      | リクエスト制約が守られていません。例として、`status`に`SUCCESS`または`FAILED`以外の値が渡されています。         |
| INTERNAL_SERVER_ERROR | LINEプラットフォームに一時的な問題が発生しています。再試行が可能なエンドポイントについては、指数バックオフや類似の方法で再試行してください。 |
