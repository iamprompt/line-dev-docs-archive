---
title: Get Webhook Endpoint Information
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/get-webhook-endpoint-information
__hash__: LJj-nZSWPJyZR0lXoqD49FWw9FwQq2FAhVGDo9UuNmc
seo:
  description: ''
---

### Webhookエンドポイントの情報を取得する

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/channel/webhook/endpoint"}::reference-with-code
  :::reference-content
  Webhookエンドポイントの情報を取得します。
  :::

  :::reference-code
  *リクエスト例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X GET \
      -H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
      -H 'Content-Type:application/json' \
      https://api.line.me/v2/bot/channel/webhook/endpoint
      ```
      :::::
    ::::
  :::
::

#### レート制限

1,000リクエスト/分

レート制限について詳しくは、「[レート制限](#rate-limits)」を参照してください。

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  `application/json`
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      endpoint

      #undefined
      String

      Webhook URL
      :::::

      :::::parameter-table-entry
      #undefined
      active

      #undefined
      Boolean

      Webhookの利用ステータス。有効の場合のみ、LINEプラットフォームからWebhook URLにWebhookイベントを送信します。

      - `true`：Webhookの利用が有効です。
      - `false`：Webhookの利用が無効です。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンス例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // Webhook URLが設定されていて、Webhookの利用が有効になっている場合
      {
        "endpoint": "https://example.com/test",
        "active": true
      }

      // Webhook URLが設定されていて、Webhookの利用が無効になっている場合
      {
        "endpoint": "https://example.com/test",
        "active": false
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

  | コード   | 説明                          |
  | ----- | --------------------------- |
  | `404` | チャネルにWebhook URLが設定されていません。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // Webhook URLが設定されていない場合（404 Not Found）
      {
        "message": "Webhook endpoint not found"
      }
      ```
      :::::
    ::::
  :::
::
