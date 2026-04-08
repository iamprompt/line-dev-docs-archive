---
title: Handling payments
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-mini-app/develop/payment
__hash__: Tbdc30wkkw2bMDbUfrUWgzLq55-5NORmYRmtkNVRX1w
seo:
  title: Handling payments
  description: null
---

# :page-title

:markdown-controlsYou can provide users with a payment feature by integrating a payment system into your LINE MINI App.

## Available payment system

The payment systems available on LINE MINI Apps vary by country or region.

| Payment methods                                           | Japan | Taiwan | Thailand |
| --------------------------------------------------------- | ----- | ------ | -------- |
| [LINE Pay](#line-pay)                                     | ❌     | ✅      | ✅        |
| [In-app purchase for the LINE MINI App](#in-app-purchase) | ✅     | ❌      | ❌        |
| [Other methods](#other-payment-methods)                   | ✅     | ✅      | ✅        |

::admonition
---
title: The LINE Pay service in Japan has been terminated
type: note
---
The LINE Pay service in Japan has been terminated as of April 30, 2025. The LINE Pay services in Taiwan and Thailand continue to be available.
::

## LINE Pay

### Preparing LINE Pay Merchant Account

To use LINE Pay on LINE MINI App, you need a LINE Pay Merchant Account. If you don't have one yet, apply on the [LINE Pay's official website](https://pay.line.me/portal/global/main){rel="[\"nofollow\"]"}.

### Developing a service that uses LINE Pay

Once you acquire a LINE Pay Merchant account, integrate LINE Pay to your LINE MINI App. For more information on LINE Pay, see the [Online payment documentation](https://developers-pay.line.me/online){rel="[\"nofollow\"]"} in LINE Pay Developers.

When using LINE Pay, the payment will be processed as follows:

1. When a user initiates a transaction on your LINE MINI App, the payment process on LINE Pay is launched.  
The screen displayed by LINE MINI App:  
![](/media/line-mini-app/mini_linepay_flow01.png){className="[\"w-fix-240\"]"}
2. The user confirms the payment details with LINE Pay and enters the LINE Pay authentication information.  
The screen displayed by LINE Pay:  
![](/media/line-mini-app/mini_linepay_flow02.png){className="[\"w-fix-480\"]"}
3. The order confirmation page is displayed.  
The screen displayed by LINE MINI App:  
![](/media/line-mini-app/mini_linepay_flow03.png){className="[\"w-fix-240\"]"}

### Testing LINE Pay

To test your payment process implementation, you can use the [sandbox](https://developers-pay.line.me/sandbox){rel="[\"nofollow\"]"} provided by LINE Pay.

## In-app purchase for the LINE MINI App

[In-app purchase](/docs/line-mini-app/in-app-purchase/overview/) is a system that allows users to buy digital content provided within a LINE MINI App. Users launch the LINE MINI App within the LINE app to begin purchasing digital content, and the payment is processed using the App Store or Google Play payment system.

Currently, in-app purchase is available only in Japan. For more information on eligibility and other requirements, see [In-app purchase overview](/docs/line-mini-app/in-app-purchase/overview/).

## Other payment methods

To offer other payment methods other than those mentioned above in your LINE MINI App, implement them as you would on ordinary web pages. However, you must design the process so that users are redirected to your LINE MINI App page after completing a transaction on an external domain or app.
