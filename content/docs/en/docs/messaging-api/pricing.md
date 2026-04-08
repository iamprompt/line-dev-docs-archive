---
title: Messaging API pricing
navigation: true
description: null
meta: >-
  {"sidebar_title":"Pricing","tags":null,"author":null,"last_updated":null,"source_language":null}
path: /en/docs/messaging-api/pricing
__hash__: izWqgkqwz1jtgFFkq9XjkbeOjUUpHP5RoeONg5hgA84
seo:
  title: Messaging API pricing
  description: null
---

# :page-title

:markdown-controlsThis page describes the price for sending messages using the Messaging API.

:toc## Pricing system

LINE Official Account provides both free plans and plans with fixed monthly fees.

All plans allow you to send a certain number of messages for free each month. The number of free messages that you can send varies depending on the subscription plan. If you upgrade to a higher plan during the month, you can increase the number of free messages for that month.

There are plans that allow you to send additional messages beyond the limit of free messages. You will be charged based on the number of additional messages sent. To send additional messages, open [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}, select your LINE Official Account, and then select a subscription plan that allows you to send additional messages. Here, set a maximum number of additional messages.

### Pricing plans by country or region

See the following for pricing plans for each country or region:

| Country or Region | Price information                                                                                                                                                                                                                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Japan             | [LINE Official Account pricing plan](https://www.lycbiz.com/jp/service/line-official-account/plan/){rel="[\"nofollow\"]"}     [Activity and billing (subscription plan changes and payment related management)](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_plan/){rel="[\"nofollow\"]"} |
| Taiwan            | [LINE Official Account](https://tw.linebiz.com/service/account-solutions/line-official-account/){rel="[\"nofollow\"]"}     [LINE Official Account - FAQ](https://tw.linebiz.com/faq/oa-price/){rel="[\"nofollow\"]"}                                                                                                  |
| Thailand          | [LINE Official Account](https://lineforbusiness.com/th/service/line-oa-features/broadcast-message){rel="[\"nofollow\"]"}                                                                                                                                                                                              |
| Other regions     | [LINE Official Account](https://www.lycbiz.jp/en/other/){rel="[\"nofollow\"]"}                                                                                                                                                                                                                                        |

### Example of subscription plans

The following table shows an example of subscription plans in Japan:

|                                                                                                                                              | Communication Plan | Light Plan  | Standard Plan                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Fixed monthly fee :sup[[1](#user-content-fn-1){ariaDescribedBy="[\"footnote-label\"]" dataFootnoteRef="" #user-content-fnref-1}]             | Free               | JPY 5,000   | JPY 15,000                                                                                                                         |
| Number of free messages per month                                                                                                            | Up to 200          | Up to 5,000 | Up to 30,000                                                                                                                       |
| Cost of additional messages :sup[[1](#user-content-fn-1){ariaDescribedBy="[\"footnote-label\"]" dataFootnoteRef="" #user-content-fnref-1-2}] | N/A                | N/A         | Up to JPY 3/message :sup[[2](#user-content-fn-2){ariaDescribedBy="[\"footnote-label\"]" dataFootnoteRef="" #user-content-fnref-2}] |

For example, if you want to send 1,000 messages per month, select the Light Plan with 5,000 free messages.

To send 40,000 messages per month, you'll need to select the Standard Plan with 30,000 free messages, and pay an additional fee for the 10,000 messages exceeding the free message limit.

Pricing plans vary by country or region, so check [the plans for your region](#global-pricing).

## When you exceed the limit of free messages

When you exceed the limit of messages that can be sent in a month, an error response will be returned and the messages won't be sent. For more information, see [Status codes](/reference/messaging-api/#status-codes) and [Error responses](/reference/messaging-api/#error-responses) in the Messaging API reference.

You can check your usage for the current month by the following endpoints:

- [Get the target limit for sending messages this month](/reference/messaging-api/#get-quota)
- [Get number of messages sent this month](/reference/messaging-api/#get-consumption)

For information on how to change your plan to increase the number of free messages or to send additional messages, see [Pricing system](#pricing-system).

## How to count the number of messages sent

The number of messages is counted by the number of people you send a message to. Suppose you send a push message with four [message objects](/reference/messaging-api/#message-objects) in a single request to a chatroom with five people. Here, the number of messages sent is five. The number of message objects in a request doesn't affect the number of messages sent.

If you send a message to a user who blocked your LINE Official Account or a user ID that doesn't exist, the message isn't counted. If the user can't receive your message, that message doesn't count as sent.

## Sending methods that are counted towards the number of messages for the subscription plan

Regarding the Messaging API, not all messages sent are counted towards the number of messages for the subscription plan. Below are the sending methods that are counted and not counted towards the message count:

- Sending methods that are counted as message count

  - [Push messages](/reference/messaging-api/#send-push-message)
  - [Multicast messages](/reference/messaging-api/#send-multicast-message)
  - [Broadcast messages](/reference/messaging-api/#send-broadcast-message)
  - [Narrowcast messages](/reference/messaging-api/#send-narrowcast-message)
- Sending methods that are not counted as message count

  - [Reply messages](/reference/messaging-api/#send-reply-message)

For more information on the charges for messaging features other than the Messaging API, see [Chargeable Messages](https://www.lycbiz.com/jp/service/line-official-account/plan/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.

::section
---
className:
  - footnotes
dataFootnotes: ''
---
## Footnotes

1. Excluding tax. [↩](#user-content-fnref-1){ariaLabel="Back to reference 1" className="[\"data-footnote-backref\"]" dataFootnoteBackref=""} [↩:sup[2]](#user-content-fnref-1-2){ariaLabel="Back to reference 1-2" className="[\"data-footnote-backref\"]" dataFootnoteBackref=""}
2. The unit price for additional messages varies depending on the number of messages sent. [↩](#user-content-fnref-2){ariaLabel="Back to reference 2" className="[\"data-footnote-backref\"]" dataFootnoteBackref=""}
::
