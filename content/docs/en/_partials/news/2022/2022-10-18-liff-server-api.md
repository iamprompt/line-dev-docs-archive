---
title: LIFF apps can't be added to Messaging API channels
navigation: true
description: >-
  LINE provides the Server API for the LINE Front-end Framework (LIFF) for
  developers. Using the Server API, you can perform operations such as adding
  LIFF apps to LINE Login channels via the API.
meta: '{"date":"2022-10-18 01:00 UTC","tags":"liff, line-mini-app","locale":"en"}'
path: /en/_partials/news/2022/2022-10-18-liff-server-api
__hash__: '-B1n_vX-cLNZYaRLLVkgGTCREdfVCkhbkqIT36mun2k'
seo:
  title: LIFF apps can't be added to Messaging API channels
  description: >-
    LINE provides the Server API for the LINE Front-end Framework (LIFF) for
    developers. Using the Server API, you can perform operations such as adding
    LIFF apps to LINE Login channels via the API.
---

LINE provides the [Server API](/reference/liff-server/) for the LINE Front-end Framework (LIFF) for developers. Using the Server API, you can perform operations such as adding LIFF apps to LINE Login channels via the API.

When using the Server API, there are cases where the channel access token for a Messaging API channel is specified. However, as announced on [February 5, 2020](/news/2020/02/05/liff-channel-type/), you can't add LIFF apps to Messaging API channels.

When adding LIFF apps to channels using the Server API, specify the channel access token for a LINE Login channel. For more information, see [Preparing a channel access token](/reference/liff-server/#preparing-channel-access-token) in the Server API reference.
