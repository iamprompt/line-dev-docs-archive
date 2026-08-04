---
title: Stateless channel access token released
navigation: true
description: >-
  We've released stateless channel access tokens. Stateless channel access
  tokens are channel access tokens that are only valid for 15 minutes. There is
  no limit to the number of stateless channel access tokens that can be issued.
meta: >-
  {"date":"2023-08-31 00:00 UTC","tags":"line-platform, messaging-api, liff,
  line-mini-app, docs","locale":"en"}
path: /en/_partials/news/2023/2023-08-31-stateless-channel-access-token
__hash__: Uus7JSyQCWFqNJJI5mVr0hMqp4-QHM-kaq077TPJUAc
seo:
  title: Stateless channel access token released
  description: >-
    We've released stateless channel access tokens. Stateless channel access
    tokens are channel access tokens that are only valid for 15 minutes. There
    is no limit to the number of stateless channel access tokens that can be
    issued.
---

We've released stateless channel access tokens. Stateless channel access tokens are channel access tokens that are only valid for 15 minutes. There is no limit to the number of stateless channel access tokens that can be issued.

The previously available channel access tokens could only be issued for a maximum of 30 per channel. Stateless channel access tokens can be issued in unlimited numbers, allowing for more flexible system design.

For more information about issuing stateless access tokens, see [Issue stateless channel access token](/reference/messaging-api/#issue-stateless-channel-access-token) in the Messaging API reference.

::admonition
---
title: We've created a new category of documentation
type: tip
---
In conjunction with this release, a new category of documentation, [LINE Platform basics](/docs/basics/) has been created and [Channel access token](/docs/basics/channel-access-token/) is now available. In this category, we'll continue to add pages where you can learn the basics of using the features of the LINE Platform.
::

### Types of channel access tokens

There are four types of channel access tokens. These channel access tokens vary in validity period and the number of tokens that can be issued per channel.

| Type                                                  | Validity period | Number of issues per channel |
| ----------------------------------------------------- | --------------- | ---------------------------- |
| Channel access token with a user-specified expiration | Up to 30 days   | 30                           |
| Stateless channel access token                        | 15 minutes      | Limitless                    |
| Short-lived channel access token                      | 30 days         | 30                           |
| Long-lived channel access token                       | Indefinite      | 1                            |

The types of channel access tokens that you can use vary by product and feature. See the documentation of each product to find out which channel access tokens can be used with each product.

### The channel access token recommended for use when sending service messages changes

Previously, only short-lived channel access tokens could be used to send service messages in LINE MINI Apps. Short-lived channel access tokens can still be used in the future, we recommend that you use stateless channel access tokens after this release. Stateless channel access tokens have an unlimited number of issuances, so there is no need for the application to manage the token lifecycle.

For more information, see [Sending service messages](/docs/line-mini-app/develop/service-messages/) in the LINE MINI App documentation.
