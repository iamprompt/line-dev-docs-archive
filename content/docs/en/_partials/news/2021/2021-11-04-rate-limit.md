---
title: >-
  As of November 18, 2021, the rate limit will change for some endpoints in the
  Messaging API
navigation: true
description: In the Messaging API, each endpoint has a rate limit.
meta: '{"date":"2021-11-04 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2021/2021-11-04-rate-limit
__hash__: XVDmYgoHyFQYme7onOwNGFmfjw_UWyzAxy_Qf5AeVJU
seo:
  title: >-
    As of November 18, 2021, the rate limit will change for some endpoints in
    the Messaging API
  description: In the Messaging API, each endpoint has a rate limit.
---

In the Messaging API, each endpoint has a [rate limit](/reference/messaging-api/#rate-limits).

The rate limit will change for some endpoints starting November 18, 2021. Refer to this table for the differences between before and after changes.

| Endpoint                                                                                                                          | Before Change             | After Change                |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | --------------------------- |
| - [Create rich menu](/reference/messaging-api/#create-rich-menu) - [Delete rich menu](/reference/messaging-api/#delete-rich-menu) | 2,000 requests per second | **100 requests per hour** * |

* Creating and deleting rich menus using the :glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"} is not subject to this restriction.

For APIs other than the above, there are no changes in the rate limits.

### Expected Date of Specification Change

November 18, 2021

The details and date of this specification change are subject to change without notice.

LINE will continue to work to further improve its service to our customers. Thank you for your understanding.
