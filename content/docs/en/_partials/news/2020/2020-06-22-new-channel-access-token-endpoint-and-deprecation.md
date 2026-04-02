---
title: The key IDs to identify Channel Access Tokens have been added
navigation: true
description: >-
  The endpoint to Get all valid channel access tokens v2.1 returns re-encrypted
  channel access tokens for security reasons.

  Even for the same channel access token, the value changes when issuing and
  getting it, making it difficult to manage and identify the token.
meta: '{"date":"2020-06-22 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: >-
  /en/_partials/news/2020/2020-06-22-new-channel-access-token-endpoint-and-deprecation
__hash__: wgL9Fyhvpv0_N1yp1oRNVJCk_uuVn2hRvevlP9NQMKo
seo:
  title: The key IDs to identify Channel Access Tokens have been added
  description: >-
    The endpoint to Get all valid channel access tokens v2.1 returns
    re-encrypted channel access tokens for security reasons.

    Even for the same channel access token, the value changes when issuing and
    getting it, making it difficult to manage and identify the token.
---

The endpoint to [Get all valid channel access tokens v2.1](/news/2020/07/29/get-all-CATs-removed/) returns re-encrypted channel access tokens for security reasons.
Even for the same channel access token, the value changes when issuing and getting it, making it difficult to manage and identify the token.

With this update, when [Issuing the channel access token v2.1](/reference/messaging-api/#issue-channel-access-token-v2-1), a unique key ID (`key_id`) paired with the token is also returned. You can use the newly added [Get all valid channel access token key IDs v2.1](/reference/messaging-api/#get-all-valid-channel-access-token-key-ids-v2-1) endpoint to identify paired channel access tokens.

::admonition{title="Plan to deprecate endpoint" type="note"}
Due to this update, we'll soon deprecate the **Get all valid channel access tokens v2.1** endpoint (early July). If you are using this endpoint, change your bot to use the newly added **Get all valid channel access token key IDs v2.1** endpoint instead.
::

Learn more about [Issue channel access token v2.1](/docs/messaging-api/generate-json-web-token/#issue_a_channel_access_token_v2_1) in the Messaging API documentation.
