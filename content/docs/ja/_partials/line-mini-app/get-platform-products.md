---
title: Get Platform Products
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-mini-app/get-platform-products
__hash__: G33ueiEr4qbrWdzvfrS_3imUSWMtpkLizN1VLGBiKLk
seo:
  description: ''
---

### liff.iap.getPlatformProducts()

::reference-with-code
  :::reference-content
  アプリ内課金で購入可能なアイテムの一覧を取得します。
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      const productIds = ["iap_ln_002", "iap_ln_003"];
      liff.iap
        .getPlatformProducts({ productIds })
        .then((products) => {
          console.log(products);
        })
        .catch((err) => {
          console.error(err);
        });
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.iap.getPlatformProducts({ productIds });
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  productIds

  #undefined
  Array of strings

  取得したいアイテムの[プロダクトID](/docs/line-mini-app/in-app-purchase/iap-product-id/)の配列
  :::
::

#### 戻り値

::reference-with-code
  :::reference-content
  `Promise`オブジェクトが返されます。`Promise`オブジェクトがresolveされると、プロダクトIDをキーとし、以下のプロパティを持つオブジェクトが渡されます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      currency

      #undefined
      String

      ISO 4217形式の通貨コード。ユーザーが使用しているアプリストアのリージョンにローカライズされた通貨で返されます。
      :::::

      :::::parameter-table-entry
      #undefined
      price

      #undefined
      Number

      アイテムの価格。ユーザーが使用しているアプリストアのリージョンにローカライズされた通貨で返されます。
      :::::

      :::::parameter-table-entry
      #undefined
      productName

      #undefined
      String

      アイテムの名前。ユーザーが使用しているアプリストアのリージョンにローカライズされた表記で返されます。
      :::::
    ::::
  :::

  :::reference-code
  *戻り値の例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "iap_ln_002": {
          "currency": "JPY",
          "price": 100,
          "productName": "LINE Purchase 100"
        }
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

`Promise`が`reject`されたときは、[`LiffError`](/reference/liff/#liff-error-object)が渡されます。

発生する可能性があるエラーには、次のようなものがあります。

| エラーメッセージ                                           | 説明                                    |
| -------------------------------------------------- | ------------------------------------- |
| Need access_token for api call, Please login first | ユーザーがログインしていません。                      |
| In-App Purchase is not allowed in external browser | メソッドが外部ブラウザで実行されました。                  |
| In-App Purchase is not allowed in this LIFF app    | ユーザーが実行したLINEミニアプリがアプリ内課金をサポートしていません。 |
