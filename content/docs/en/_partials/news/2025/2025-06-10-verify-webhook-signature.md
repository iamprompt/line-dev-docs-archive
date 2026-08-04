---
title: >-
  We've added documentation for webhook signature verification to the Messaging
  API
navigation: true
description: >-
  We've added Verify webhook signature to the Messaging API documentation. This
  document explains how the bot server should verify the signature when
  receiving a webhook.
meta: '{"date":"2025-06-10 00:00 UTC","tags":"docs, messaging-api","locale":"en"}'
path: /en/_partials/news/2025/2025-06-10-verify-webhook-signature
__hash__: yH2O2ifR-9zzBm7XzRpW1C2EXOCvRo4ropVg6_goikc
seo:
  title: >-
    We've added documentation for webhook signature verification to the
    Messaging API
  description: >-
    We've added Verify webhook signature to the Messaging API documentation.
    This document explains how the bot server should verify the signature when
    receiving a webhook.
---

We've added [Verify webhook signature](/docs/messaging-api/verify-webhook-signature/) to the Messaging API documentation. This document explains how the bot server should verify the signature when receiving a webhook.

We've also updated the Messaging API development guidelines by adding [verification of webhook signature when receiving webhooks](/docs/messaging-api/development-guidelines/#verify-webhook-signature) to the list of recommendations.

### Document Background

When a user adds a LINE Official Account as a friend or sends it a message, the LINE Platform sends a webhook to the bot server specified in the **Webhook URL** in the [LINE Developers Console](/console/).

When the bot server receives a webhook, it is recommended that the bot server verify the signature included in the request header before processing the [webhook event objects](/reference/messaging-api/#webhook-event-objects). This verification step is important to confirm that the webhook came from the LINE Platform and wasn’t tampered with during transmission.

The newly added documentation covers [Preparations required for signature verification](/docs/messaging-api/verify-webhook-signature/#preparation-for-signature-verification), [How signature verification works](/docs/messaging-api/verify-webhook-signature/#signature-verification-flow), and [Signature verification procedure](/docs/messaging-api/verify-webhook-signature/#signature-verification-implementation-example).

Also, [Common signature verification failures and their solutions](/docs/messaging-api/verify-webhook-signature/#common-signature-verification-failures-and-their-solutions) explains how to troubleshoot cases in which signature verification fails even though the webhook was sent from the LINE Platform.

We’ll continue improving the LINE Developers site and its documentation to help developers build services using the Messaging API more smoothly.
