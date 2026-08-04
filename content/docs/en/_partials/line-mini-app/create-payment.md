---
title: Create Payment
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-mini-app/create-payment
__hash__: PRCtG2dscakBDsL1HsULVLefWmtdqbnqfqzDoGbJ7b0
seo:
  description: ''
---

### liff.iap.createPayment()

Launches the app store payment confirmation screen (App Store, Google Play) and starts the purchase transaction.

#### Syntax

```javascript
liff.iap.createPayment({ productId, orderId });
```

#### Arguments

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  productId

  #undefined
  String

  Pre-defined [product ID](/docs/line-mini-app/in-app-purchase/iap-product-id/)
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  orderId

  #undefined
  String

  Order ID obtained from the "[Reserve purchase](#reserve-purchase)" endpoint
  :::
::

#### Return value

Returns a `Promise<void>` object.

- Resolves if the purchase completes successfully.
- Rejects with an error object if the purchase is canceled, or if the operation fails due to a network issue, a problem on the user's device, or an internal error on the LINE Platform.

#### Error response

When the `Promise` is rejected, a [`LiffError`](/reference/liff/#liff-error-object) is passed.

Possible errors include the following:

| Error message                                      | Description                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------- |
| Need access_token for api call, Please login first | The user is not logged in.                                                |
| In-App Purchase is not allowed in external browser | The method was executed in an external browser.                           |
| In-App Purchase is not allowed in this LIFF app    | The LINE MINI App being run by the user does not support in-app purchase. |
