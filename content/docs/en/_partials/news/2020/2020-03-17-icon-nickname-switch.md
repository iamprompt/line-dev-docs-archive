---
title: You can now change the icon and display name of your LINE Official Account
navigation: true
description: >-
  The push/reply API request extension of the Messaging API to change icon and
  display name of LINE Official

  Account is now generally available. This was previously an optional feature
  for corporate users.
meta: '{"date":"2020-03-17 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2020/2020-03-17-icon-nickname-switch
__hash__: rtiuAKqLc_lYOoObVTx_g7-2TD79KSFo43iRiFyf9QY
seo:
  title: You can now change the icon and display name of your LINE Official Account
  description: >-
    The push/reply API request extension of the Messaging API to change icon and
    display name of LINE Official

    Account is now generally available. This was previously an optional feature
    for corporate users.
---

The push/reply API request extension of the Messaging API to change icon and display name of LINE Official
Account is now generally available. This was previously an optional feature for corporate users.

As shown by a green frame, you can specify icon or display name when sending a message from LINE Official Account.

![Change icon and display name](/media/messaging-api/icon-nickname-switch/icon-nickname-switch.jpg){className="[\"border\"]"}

For more information, see [Change icon and display name](/docs/messaging-api/icon-nickname-switch/).

### Properties added to Messaging API

`sender.iconUrl` for specifying icon and `sender.name` for specifying display name have been added to Messaging API. The properties can be specified in all the message objects.

For more information about each property, see "[Change icon and display name](/reference/messaging-api/#icon-nickname-switch)" section of the Messaging API reference documentation.
