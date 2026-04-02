---
title: Get all valid channel access tokens v2.1 endpoint and content removed
navigation: true
description: >-
  As announced on July 01, 2020, the Get all valid channel access tokens v2.1
  API endpoint for Messaging API has been removed. We've also removed all
  content related to this endpoint from this site.
meta: '{"date":"2020-07-29 01:00 UTC","tags":"Messaging API, Docs","locale":"en"}'
path: /en/_partials/news/2020/2020-07-29-get-all-cats-removed
__hash__: p_p5Qd-r2r0iymwPVIUO0Ijh_mLamArODUhYpOgsX4E
seo:
  title: Get all valid channel access tokens v2.1 endpoint and content removed
  description: >-
    As announced on July 01, 2020, the Get all valid channel access tokens v2.1
    API endpoint for Messaging API has been removed. We've also removed all
    content related to this endpoint from this site.
---

As announced on [July 01, 2020](/news/2020/07/01/get-all-cats-deprecation/), the Get all valid channel access tokens v2.1 API endpoint for Messaging API has been removed. We've also removed all content related to this endpoint from this site.

When [Issuing the channel access token v2.1](/docs/messaging-api/generate-json-web-token/#issue_a_channel_access_token_v2_1), a unique key ID (`key_id`) paired with the channel access token is also returned. You can use the newly added [Get all valid channel access token key IDs v2.1](/reference/messaging-api/#get-all-valid-channel-access-token-key-ids-v2-1) endpoint to get an array of key IDs paired with the currently valid channel access tokens. You can verify the validity of channel access tokens by comparing the returned key IDs with pairs of channel access tokens and their IDs stored in a database.

Learn more about [Issue channel access token v2.1](/docs/messaging-api/generate-json-web-token/#issue_a_channel_access_token_v2_1) in the Messaging API documentation.
