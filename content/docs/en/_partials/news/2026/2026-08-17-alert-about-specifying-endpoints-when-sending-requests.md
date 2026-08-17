---
title: >-
  Important notes on specifying endpoints when sending requests to the Messaging
  API
navigation: true
description: >-
  When you send a request to a Messaging API endpoint, specify the correct
  endpoint shown in the Messaging API reference. If you don't specify the
  correct endpoint, for example by adding an unnecessary trailing slash (/) to
  the end of the endpoint path, the behavior isn't guaranteed.
meta: '{"date":"2026-08-17 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: >-
  /en/_partials/news/2026/2026-08-17-alert-about-specifying-endpoints-when-sending-requests
__hash__: RmJtLNazZUg4irIpOofB4zqezttUpHCmwD_gNfYW1lw
seo:
  title: >-
    Important notes on specifying endpoints when sending requests to the
    Messaging API
  description: >-
    When you send a request to a Messaging API endpoint, specify the correct
    endpoint shown in the Messaging API reference. If you don't specify the
    correct endpoint, for example by adding an unnecessary trailing slash (/) to
    the end of the endpoint path, the behavior isn't guaranteed.
---

When you send a request to a Messaging API endpoint, specify the correct endpoint shown in the [Messaging API reference](/reference/messaging-api/). If you don't specify the correct endpoint, for example by adding an unnecessary trailing slash (`/`) to the end of the endpoint path, the behavior isn't guaranteed.

| ✅️ Example of a correct endpoint          | ❌️ Example of an incorrect endpoint        |
| ----------------------------------------- | ------------------------------------------ |
| `https://api.line.me/v2/bot/message/push` | `https://api.line.me/v2/bot/message/push/` |

::admonition{title="Use the Messaging API official SDKs" type="tip"}
If you implement your integration using the Messaging API [official SDKs](/docs/messaging-api/line-bot-sdk/#official-sdks), you don't need to worry about endpoint URLs or paths — they're always correct.
::
