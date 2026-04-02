---
title: >-
  In the Messaging API, you can now display loading animations on the chat
  screen with users
navigation: true
description: >-
  In the Messaging API, we've added a new endpoint that allows you to display a
  loading animation. After your LINE Official Account receives a message from a
  user, the response may takes some time due to message preparation or
  reservation processing. In such cases, you can visually tell the user that you
  want them to wait by displaying a loading animation.
meta: '{"date":"2024-04-17 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2024/2024-04-17-loading-indicator
__hash__: IxmgA4lhIDjjBcfWIIX4RZYlJ9w0TO6ebP6aE2cCCLk
seo:
  title: >-
    In the Messaging API, you can now display loading animations on the chat
    screen with users
  description: >-
    In the Messaging API, we've added a new endpoint that allows you to display
    a loading animation. After your LINE Official Account receives a message
    from a user, the response may takes some time due to message preparation or
    reservation processing. In such cases, you can visually tell the user that
    you want them to wait by displaying a loading animation.
---

In the Messaging API, we've added a new endpoint that allows you to [display a loading animation](/reference/messaging-api/#display-a-loading-indicator). After your LINE Official Account receives a message from a user, the response may takes some time due to message preparation or reservation processing. In such cases, you can visually tell the user that you want them to wait by displaying a loading animation.

The loading animation will automatically disappear after the specified number of seconds has elapsed or when a new message arrives from your LINE Official Account.

![](/media/messaging-api/loading-indicator/loading-animation.gif){className="[\"border\",\"w-fix-480\"]"}

For more information, see [Display a loading animation](/docs/messaging-api/use-loading-indicator/) in the Messaging API documentation.

### Target version

LINE version 13.16.0 or later for iOS or Android.

### LINE Messaging API SDK Updates

For more information about the update status of each SDK release related to the above, see the [LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/) release notes.
