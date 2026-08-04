---
title: >-
  As of November 26, 2025, we discontinued the feature to check the number of
  sent messages in the Statistics tab of the LINE Developers Console
navigation: true
description: >-
  As announced on July 31, 2025, on November 26, 2025, we discontinued the
  feature to check the number of sent messages in the Statistics tab of the
  Messaging API channel in the LINE Developers Console.
meta: >-
  {"date":"2025-11-26 00:00 UTC","tags":"console, end-of-life, messaging-api,
  options-for-corporate-customers","locale":"en"}
path: /en/_partials/news/2025/2025-11-26-console-statistics
__hash__: 6qnJftjcob8uTNDeV--5AX53aJordK2CYF6_025yi8E
seo:
  title: >-
    As of November 26, 2025, we discontinued the feature to check the number of
    sent messages in the Statistics tab of the LINE Developers Console
  description: >-
    As announced on July 31, 2025, on November 26, 2025, we discontinued the
    feature to check the number of sent messages in the Statistics tab of the
    Messaging API channel in the LINE Developers Console.
---

As announced on [July 31, 2025](/news/2025/07/31/console-statistics/), on November 26, 2025, we discontinued the feature to check the number of sent messages in the **Statistics** tab of the Messaging API channel in the [LINE Developers Console](/console/).

The number of sent messages can still be retrieved via the [Get number of message deliveries](/reference/messaging-api/#get-number-of-delivery-messages) endpoint in the Messaging API. Additionally, this information is available in the **Insight** tab of the [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}.

### Date of change

November 26, 2025

### Details

The following statistics have been deleted from the **Statistics** tab in the Messaging API channel of the LINE Developers Console:

- Messages sent
- Phone number Push
- Identifier For Advertisers (IFA)
- Phone

To check the number of messages sent or the number of messages sent using Phone number Push going forward, use the [Get number of message deliveries](/reference/messaging-api/#get-number-of-delivery-messages) endpoint in the Messaging API or the [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}.

Identifier For Advertisers (IFA) and Phone have already been discontinued.

Even after the above statistics have been deleted, **Errors** in the **Statistics** tab will continue to be provided under the new name **Webhook errors** tab. For more information about webhook errors, see [Check webhook error causes and statistics](/docs/messaging-api/check-webhook-error-statistics/) in the Messaging API documentation.
