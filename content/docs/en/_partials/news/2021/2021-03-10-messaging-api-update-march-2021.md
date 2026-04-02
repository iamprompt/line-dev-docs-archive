---
title: Messaging API update for March 2021
navigation: true
description: >-
  We've added new features to the Messaging API. These are the features added in
  this update:
meta: '{"date":"2021-03-10 01:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2021/2021-03-10-messaging-api-update-march-2021
__hash__: vbTZHG-qpyVCW1ek8cPKRMvxcXutMof8ky0A14EMJi0
seo:
  title: Messaging API update for March 2021
  description: >-
    We've added new features to the Messaging API. These are the features added
    in this update:
---

We've added new features to the Messaging API. These are the features added in this update:

- [URI action can be used with quick reply](#messaging-api-202103-01)
- ["Feature for getting statistics per aggregation unit" has been added to optional functions for corporate customers](#messaging-api-202103-02)

### URI action can be used with quick reply

URI action can be used with quick reply. When you send a message with a quick reply button configured from your LINE Official Account, the following is displayed at the bottom of the chat screen.

![Example of URI action](/media/messaging-api/actions/quick-reply-uri-action-en.png){className="[\"border\",\"w-fix-240\"]"}

When you configure URI action with quick reply, users can do the following when they tap the button:

- Open a specified URL in LINE's in-app browser
- Open a specified number on a call app
- Share a LINE Official Account using the [LINE URL scheme](/docs/messaging-api/using-line-url-scheme/)

For more information on quick reply, see [Using quick reply](/docs/messaging-api/using-quick-reply/). For more information on what you can do with each action, including URI action, see [Action](/docs/messaging-api/actions/).

For more information on URI action, see [URI Action](/reference/messaging-api/#uri-action) under the Messaging API Reference.

### "Feature for getting statistics per aggregation unit" has been added to optional functions for corporate customers

"Feature for getting statistics per aggregation unit" has been added to optional functions for corporate customers. This feature enables you to aggregate statistics when sending push messages and multicast messages to multiple end users. You can view statistics on a per-unit basis, simply by specifying any unit name when sending the message.

![Workflow for aggregating statistics per unit](/media/news/customAggregationUnits_en.png){className="[\"w-fix-920\"]"}

[User interaction statistics](/reference/messaging-api/#get-message-event) per request ID have been available for broadcast and narrowcast messages, but statistics hadn't been available for push messages or multicast messages. "Custom aggregation of statistics per unit" enables you aggregate and obtain statistics per unit on multiple push messages and multicast messages.

| Before change                                                                                                                                           | After change                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Up until now, you couldn't get statistics with push messages or multicast messages.   ![User interaction statistics](/media/news/old_statistics_en.png) | By assigning a unit name when sending the message, you can get statistics on a per-unit basis.   ![Aggregating statistics per unit](/media/news/new_statistics_en.png) |

For more information, see [Get statistics per aggregation unit](/docs/messaging-api/unit-based-statistics-aggregation/) under "Options for corporate customers".
