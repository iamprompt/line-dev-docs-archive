---
title: >-
  In the Messaging API, you can now use the shared audience in Business Manager
  to send messages
navigation: true
description: >-
  In the Messaging API, you can now specify the shared audience in Business
  Manager as the recipient for narrowcast messages.
meta: '{"date":"2025-02-12 01:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2025/2025-02-12-shared-audience
__hash__: nTVUS3AwumgXZ3Z1aGFuFUiiF97CBwKw2YMxJIqQq_c
seo:
  title: >-
    In the Messaging API, you can now use the shared audience in Business
    Manager to send messages
  description: >-
    In the Messaging API, you can now specify the shared audience in Business
    Manager as the recipient for narrowcast messages.
---

In the Messaging API, you can now specify the shared audience in Business Manager as the recipient for [narrowcast messages](/reference/messaging-api/#send-narrowcast-message).

Accordingly, we've added the following endpoints:

- [Get a list of shared audiences in Business Manager](/reference/messaging-api/#get-shared-audience-list)
- [Get shared audience data in Business Manager ](/reference/messaging-api/#get-shared-audience)

Previously, shared audiences in Business Manager weren't available in the Messaging API. You can now use these endpoints to integrate between Business Manager and the Messaging API.

::admonition{title="About Business Manager" type="tip"}
Business Manager allows you to share specific audiences across multiple services. By sharing audiences in Business Manager, you can better communicate with your end users.

For more information, see [Business Manager](https://www.lycbiz.com/jp/service/business-manager/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE DATA SOLUTION.
::

### LINE Messaging API SDK updates

For more information about the update status of each SDK release related to the above, see the [LINE Messaging API SDKs](/docs/messaging-api/line-bot-sdk/) release notes.
