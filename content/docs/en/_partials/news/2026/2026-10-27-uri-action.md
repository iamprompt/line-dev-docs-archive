---
title: >-
  In the Messaging API, the maximum number of characters for URIs specified in
  URI actions has been increased to 10,000
navigation: true
description: >-
  We've increased the maximum number of characters that can be set for the uri
  and altUri.desktop properties of URI actions in the Messaging API. This makes
  it easier to set URLs containing complex deep links or multiple tracking
  parameters in URI actions.
meta: '{"date":"2026-10-27 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2026/2026-10-27-uri-action
__hash__: 9Jw932nOmt4__HqFl63mcdXadU7YvadCsNS0BmrfWN4
seo:
  title: >-
    In the Messaging API, the maximum number of characters for URIs specified in
    URI actions has been increased to 10,000
  description: >-
    We've increased the maximum number of characters that can be set for the uri
    and altUri.desktop properties of URI actions in the Messaging API. This
    makes it easier to set URLs containing complex deep links or multiple
    tracking parameters in URI actions.
---

We've increased the maximum number of characters that can be set for the `uri` and `altUri.desktop` properties of URI actions in the Messaging API. This makes it easier to set URLs containing complex deep links or multiple tracking parameters in URI actions.

### Changes

The maximum number of characters for the URI opened when a URI action is performed has been increased as follows:

| Property         | Before | After (current) |
| ---------------- | ------ | --------------- |
| `uri`            | 1,000  | 10,000          |
| `altUri.desktop` |        |                 |

### Properties referenced by message types and features

For each message type and feature, the URI action properties referenced on LINE for smartphone and LINE for PC are as follows:

| Message type and feature                                         | LINE for smartphone | LINE for PC      |
| ---------------------------------------------------------------- | ------------------- | ---------------- |
| [Flex Message](/reference/messaging-api/#flex-message)           | `uri`               | `altUri.desktop` |
| [Template messages](/reference/messaging-api/#template-messages) | `uri`               | - *              |
| [Quick reply](/reference/messaging-api/#quick-reply)             | `uri`               | - *              |
| [Rich menu](/reference/messaging-api/#rich-menu)                 | `uri`               | - *              |

* The `altUri.desktop` is supported when you set URI actions in Flex Messages.

For more information on URI actions, see [URI action](/reference/messaging-api/#uri-action) in the Messaging API reference.

### LINE Messaging API SDK updates

For more information about the update status of each SDK release related to these changes, see the [LINE Messaging API SDKs](/docs/messaging-api/line-bot-sdk/) release notes.
