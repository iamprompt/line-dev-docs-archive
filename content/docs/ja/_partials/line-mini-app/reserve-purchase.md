---
title: Reserve Purchase
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-mini-app/reserve-purchase
__hash__: _YojAAOCw_FEy4EYPVOIzWTpeJ8_1eLJrba7P_0T140
seo:
  description: ''
---

### 購入処理を予約する

::reference-with-code
  :::reference-content
  アプリストア決済を開始する前に、購入処理を予約します。

  [レスポンス](#reserve-purchase-response)に含まれる注文ID（`orderId`）は[購入完了イベント](#purchase-complete-event)にも含まれます。注文IDは弊社への問い合わせや調査で必要になるため、必ず保存してください。

  また、予約成功は購入完了を保証しないため、アイテム付与は購入完了イベントを起点に行ってください。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -X POST https://api.line.me/iap/v1/product/reserve \
      -H "Authorization: Bearer {UserAccessToken}" \
      -H "Content-Type: application/json" \
      -d '{
      "clientIp": "192.168.1.1",
      "clientOs": "android",
      "productId": "iap_ln_002",
      "shopProductName": "Premium Package"
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/iap/v1/product/reserve`

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{user access token}`

  現在のユーザーのアクセストークン。[`liff.getAccessToken()`](/reference/liff/#get-access-token)メソッドで取得できます。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  clientIp

  #undefined
  String

  サーバーで取得したユーザー端末のIPアドレス。IPv4またはIPv6形式で指定してください。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  clientOs

  #undefined
  String

  [`liff.getOS()`](/reference/liff/#get-os)メソッドで取得した値。`ios`または`android`。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  productId

  #undefined
  String

  購入対象の[プロダクトID](/docs/line-mini-app/in-app-purchase/iap-product-id/)。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  shopProductName

  #undefined
  String

  購入履歴に表示されるアイテム名。

  絵文字や記号は使用できません。ユーザーが購入したアイテムを認識できるように適切な値を設定してください。

  最大文字数：20（UTF-16）
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      orderId

      #undefined
      String

      注文ID。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      { "orderId": "T2025020710000002126002" }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  エラーレスポンスの形式については、[エラーレスポンス](#iap-error-responses)を参照してください。

  一般的なもの以外で発生する可能性があるエラーには、次のようなものがあります。

  | エラーコード                 | 説明                                                                                                                                                       |
  | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | VALIDATION_ERROR       | リクエスト制約が守られていません。例として、`clientOs`に`ios`または`android`以外の値が渡されています。                                                                                          |
  | WEBHOOK_URL_IS_NOT_SET | 支払い完了通知を受け取るWebhook URLが設定されていません。                                                                                                                       |
  | PRODUCT_ID_NOT_FOUND   | リクエストされた[プロダクトID](/docs/line-mini-app/in-app-purchase/iap-product-id/)が存在しません。                                                                           |
  | BLOCKED_USER           | LINEプラットフォームにより、このユーザーが不正利用者と判断されました。このユーザーに関連するリクエストは処理できません。                                                                                           |
  | INTERNAL_SERVER_ERROR  | LINEプラットフォームに一時的な問題が発生しています。再試行が可能なエンドポイントについては、指数バックオフや類似の方法で再試行してください。                                                                                 |
  | TERMS_AGREEMENT_ERROR  | 「[ユーザーからアプリ内課金利用の同意を取得する](/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#get-user-consent)」において、このユーザーから最新の規約に対して同意を得ることができていない場合に発生します。 |
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "errorCode": "VALIDATION_ERROR",
        "message": "Request validation failed.",
        "details": [
          {
            "message": "'clientOs' must be 'android' or 'ios'. Actually received: 'INVALID'",
            "property": "clientOs"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
