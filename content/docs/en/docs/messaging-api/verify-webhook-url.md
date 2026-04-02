---
title: Verify webhook URL
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /en/docs/messaging-api/verify-webhook-url
__hash__: S3cuAafDHVZim2JD3_8RTp2Q6RKIdRINZ8P00zhJTyg
seo:
  title: Verify webhook URL
  description: null
---

# :page-title

:markdown-controlsIf you're using Messaging API webhooks, we recommend that you use one of these methods to verify that the LINE Platform can communicate with the webhook URL (bot server).

- [Verification method 1: Verify with the endpoint for webhook URL validation](#verify-method-01)
- [Verification method 2: Use the webhook URL's "Verify" button in the LINE Developers Console](#verify-method-02)

::admonition
---
title: Return status code 200 for the communication request
type: tip
---
The LINE Platform sends an HTTP POST request that doesn't include a webhook event to the webhook URL (bot server) to confirm communication. Design your bot server to return status code `200`.

Example HTTP POST request without a webhook event:

```json
{
  "destination": "xxxxxxxxxx",
  "events": []
}
```
::

If the bot server didn't receive the webhook after verifying the webhook URL, [investigate the cause of webhook reception failure](#investigate-webhook-reception-failure).

## Verification method 1: Verify with the endpoint for webhook URL validation

Verify the communication by using the endpoint for webhook URL test.

- [Test webhook endpoint](/reference/messaging-api/#test-webhook-endpoint)

## Verification method 2: Use the webhook URL's "Verify" button in the LINE Developers Console

In the [LINE Developers Console](/console/), click the webhook URL's **Verify** button to perform the verification.

![send target](/media/news/webhook-url-verify-button.png){className="[\"border\",\"w-fix-320\"]"}

## Investigate the cause of webhook reception failure

If the bot server didn't receive the webhook after verifying the webhook URL, use the following methods to investigate the cause of webhook reception failure:

- Check the [response](/reference/messaging-api/#test-webhook-endpoint-response) or [error response](/reference/messaging-api/#test-webhook-endpoint-error-response) returned from the endpoint to test webhook URL
- [Check webhook error causes and statistics](/docs/messaging-api/check-webhook-error-statistics/)
- Check [SSL/TLS specification of the webhook source](/docs/messaging-api/ssl-tls-spec-of-the-webhook-source/)
