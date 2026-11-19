---
title: >-
  In the Messaging API, the nesting depth of boxes in Flex Messages is now
  limited
navigation: true
description: >-
  In the Messaging API, we've limited how deeply boxes can be nested in Flex
  Messages.
meta: '{"date":"2026-11-19 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2026/2026-11-19-flex-message-nested-boxes-validation
__hash__: 4v1cy5Lov_YntrC1wbOJHYy7h8K2wOIVGbLtasTih1k
seo:
  title: >-
    In the Messaging API, the nesting depth of boxes in Flex Messages is now
    limited
  description: >-
    In the Messaging API, we've limited how deeply boxes can be nested in Flex
    Messages.
---

In the Messaging API, we've limited how deeply [boxes](/reference/messaging-api/#box) can be nested in Flex Messages.

### Date of specification change

November 19, 2026

### Changes

Previously, there was no limit on box nesting depth. The maximum nesting depth is now limited to 20 levels. The outermost box counts as level 1, its child box as level 2, and so on.

When you use the Messaging API to send a Flex Message with more than 20 levels of box nesting, the API returns `400 Bad Request`.

For more information about box specifications, see [Box](/reference/messaging-api/#box) in the Messaging API reference.
