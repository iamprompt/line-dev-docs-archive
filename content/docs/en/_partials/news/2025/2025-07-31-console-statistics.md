---
title: >-
  As of the end of November 2025, the feature to check the number of sent
  messages in the Statistics tab of the LINE Developers Console will be
  discontinued
navigation: true
description: >-
  As of the end of November 2025, the feature to check the number of sent
  messages in the Statistics tab of the Messaging API channel in the LINE
  Developers Console will be discontinued.
meta: >-
  {"date":"2025-07-31 00:00 UTC","tags":"console, end-of-life, messaging-api,
  options-for-corporate-customers","locale":"en"}
path: /en/_partials/news/2025/2025-07-31-console-statistics
__hash__: dBplXilisMMdvlFvJz4adKwzJNraF-JLOPKirA8_Xb8
seo:
  title: >-
    As of the end of November 2025, the feature to check the number of sent
    messages in the Statistics tab of the LINE Developers Console will be
    discontinued
  description: >-
    As of the end of November 2025, the feature to check the number of sent
    messages in the Statistics tab of the Messaging API channel in the LINE
    Developers Console will be discontinued.
---

As of the end of November 2025, the feature to check the number of sent messages in the **Statistics** tab of the Messaging API channel in the [LINE Developers Console](/console/) will be discontinued.

The number of sent messages can still be retrieved via the [Get number of message deliveries](/reference/messaging-api/#get-number-of-delivery-messages) endpoint in the Messaging API. Additionally, this information is available in the **Insight** tab of the [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}.

### Scheduled date of change

End of November 2025

The content and date of this specification change are subject to change.

### Details

The following statistics will be deleted from the **Statistics** tab in the Messaging API channel of the LINE Developers Console:

- Messages sent
- Phone number Push
- Identifier For Advertisers (IFA)
- Phone

To check the Messages sent or the Phone number Push, use the [Get number of message deliveries](/reference/messaging-api/#get-number-of-delivery-messages) endpoint in the Messaging API or the [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"} from now on.

Identifier For Advertisers (IFA) and Phone have already been discontinued.

Even if the above statistics are deleted, **Errors** in the **Statistics** tab will continue to be available. For more information about errors, see [Check webhook error causes and statistics](/docs/messaging-api/check-webhook-error-statistics/) in the Messaging API documentation.
