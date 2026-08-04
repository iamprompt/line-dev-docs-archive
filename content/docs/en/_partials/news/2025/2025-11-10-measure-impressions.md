---
title: >-
  We've added documentation about impression measurement to the Messaging API
  documentation
navigation: true
description: >-
  We've added a new page, Measure impressions, to the Messaging API
  documentation. This document provides a detailed explanation of the
  measurement logic and the usage precautions for impressions, which is one of
  the statistics of the Messaging API.
meta: '{"date":"2025-11-10 00:00 UTC","tags":"docs, messaging-api","locale":"en"}'
path: /en/_partials/news/2025/2025-11-10-measure-impressions
__hash__: TB8PhnKWXJogOva4UmOzntmulZHJZK8_lyJKkoJkBNs
seo:
  title: >-
    We've added documentation about impression measurement to the Messaging API
    documentation
  description: >-
    We've added a new page, Measure impressions, to the Messaging API
    documentation. This document provides a detailed explanation of the
    measurement logic and the usage precautions for impressions, which is one of
    the statistics of the Messaging API.
---

We've added a new page, [Measure impressions](/docs/messaging-api/measure-impressions/), to the Messaging API documentation. This document provides a detailed explanation of the measurement logic and the usage precautions for impressions, which is one of the statistics of the Messaging API.

### Document background

We have received many inquiries from developers who use the LINE Official Account, such as "I don't understand why the impression count suddenly dropped" or "The data that should have been counted is showing as null". The newly added documentation explains, with examples and images, [the conditions under which impressions are measured](/docs/messaging-api/measure-impressions/#impression-logic) to address these questions.

In particular, the document clarifies the criteria for measurement, such as the condition that [the bubble must be 100% visible](/docs/messaging-api/measure-impressions/#must-show-all-messages), [the impact when rich menus and messages overlap](/docs/messaging-api/measure-impressions/#avoid-interference), and the measurement of [carousel-type messages](/docs/messaging-api/measure-impressions/#carousel-message). We hope this document will help you understand the mechanism of impression measurement and enable more effective message delivery.

We'll continue improving the LINE Developers site and its documentation to help developers build services using the Messaging API more smoothly.
