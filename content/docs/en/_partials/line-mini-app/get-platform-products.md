---
title: Get Platform Products
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-mini-app/get-platform-products
__hash__: Bf6N0SY69c92FJVfsSNdnujCUy0rJkcjYfrHKX57qfM
seo:
  description: ''
---

### liff.iap.getPlatformProducts()

::reference-with-code
  :::reference-content
  Gets a list of items available for purchase via in-app purchase.
  :::

  :::reference-code
  *Example*

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

#### Syntax

```javascript
liff.iap.getPlatformProducts({ productIds });
```

#### Arguments

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  productIds

  #undefined
  Array of strings

  Array of [product IDs](/docs/line-mini-app/in-app-purchase/iap-product-id/) for items you want to retrieve
  :::
::

#### Return value

::reference-with-code
  :::reference-content
  A `Promise` object is returned. When the `Promise` object is resolved, an object with the product ID as a key and the following properties is passed:

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      currency

      #undefined
      String

      Currency code in ISO 4217 format. Returned in the currency localized to the region of the app store the user is using.
      :::::

      :::::parameter-table-entry
      #undefined
      price

      #undefined
      Number

      Price of the item. Returned in the currency localized to the region of the app store the user is using.
      :::::

      :::::parameter-table-entry
      #undefined
      productName

      #undefined
      String

      Name of the item. Returned in the representation localized to the region of the app store the user is using.
      :::::
    ::::
  :::

  :::reference-code
  *Example return value*

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

#### Error response

When the `Promise` is rejected, a [`LiffError`](/reference/liff/#liff-error-object) is passed.

Possible errors include the following:

| Error message                                      | Description                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------- |
| Need access_token for api call, Please login first | The user is not logged in.                                                |
| In-App Purchase is not allowed in external browser | The method was executed in an external browser.                           |
| In-App Purchase is not allowed in this LIFF app    | The LINE MINI App being run by the user does not support in-app purchase. |
