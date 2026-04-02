---
title: Create Payment
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-mini-app/create-payment
__hash__: 9vqPERqxPZXxkjVODGFKg8b78zs7XYclOFGfUX4n_bw
seo:
  description: ''
---

### liff.iap.createPayment()

アプリストア（App Store、Google Play）の決済確認画面を起動し、購入処理を開始します。

#### 構文

```javascript
liff.iap.createPayment({ productId, orderId });
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  productId

  #undefined
  string

  事前に定義済みの[プロダクトID](/docs/line-mini-app/in-app-purchase/iap-product-id/)
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  orderId

  #undefined
  String

  「[購入処理を予約する](#reserve-purchase)」エンドポイントで取得した注文ID
  :::
::

#### 戻り値

`Promise<void>`オブジェクトが返されます。

- 購入が正常に完了するとresolveされます。
- キャンセルされた場合や、ネットワーク上の問題、ユーザー端末やLINEプラットフォーム側のサーバー内部で問題が発生して失敗した場合は、エラーオブジェクトを伴ってrejectされます。

#### エラーレスポンス

`Promise`が`reject`されたときは、[`LiffError`](/reference/liff/#liff-error-object)が渡されます。

発生する可能性があるエラーには、次のようなものがあります。

| エラーメッセージ                                           | 説明                                    |
| -------------------------------------------------- | ------------------------------------- |
| Need access_token for api call, Please login first | ユーザーがログインしていません。                      |
| In-App Purchase is not allowed in external browser | メソッドが外部ブラウザで実行されました。                  |
| In-App Purchase is not allowed in this LIFF app    | ユーザーが実行したLINEミニアプリがアプリ内課金をサポートしていません。 |
