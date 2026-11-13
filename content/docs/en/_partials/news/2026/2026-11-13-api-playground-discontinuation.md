---
title: API Playground in the Messaging API reference will be discontinued
navigation: true
description: >-
  On November 30, 2026, we'll discontinue API Playground in the Messaging API
  reference.
meta: >-
  {"date":"2026-11-13 00:00 UTC","tags":"messaging-api,
  end-of-life","locale":"en"}
path: /en/_partials/news/2026/2026-11-13-api-playground-discontinuation
__hash__: lNzsim2pbyFYJnfsuSIJpGGP9ut4GwMUcqxwR5guTxM
seo:
  title: API Playground in the Messaging API reference will be discontinued
  description: >-
    On November 30, 2026, we'll discontinue API Playground in the Messaging API
    reference.
---

On November 30, 2026, we'll discontinue API Playground in the [Messaging API reference](/reference/messaging-api/).

### Scheduled discontinuation date

November 30, 2026

### Details

API Playground is a feature in the Messaging API reference that lets you send requests to some endpoints and view the responses directly in your browser.

We've decided to discontinue API Playground after reviewing its usage and the security requirements for its continued operation. This discontinuation won't affect the Messaging API itself.

### How to try the Messaging API

To try the Messaging API going forward, use tools such as `curl` to send API requests. Refer to the request examples for each endpoint in the [Messaging API reference](/reference/messaging-api/).

Once you set credentials such as channel access tokens in environment variables, you can reference them repeatedly in `curl` commands run in the same terminal session. The following example uses a channel access token set in the `CHANNEL_ACCESS_TOKEN` environment variable to call the [Get the target limit for sending messages this month](/reference/messaging-api/#get-quota) endpoint:

```sh
export CHANNEL_ACCESS_TOKEN="{channel access token}"

curl -X GET https://api.line.me/v2/bot/message/quota \
-H "Authorization: Bearer $CHANNEL_ACCESS_TOKEN"
```

We apologize for any inconvenience this may cause API Playground users. Thank you for your understanding.
