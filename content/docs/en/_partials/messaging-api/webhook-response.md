---
title: Webhook Response
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-response
__hash__: Gpr5mwRP2dRd5T7c9305nOq7HsTMkvP3sbswUX5FRuE
seo:
  description: ''
---

### Response

The bot server must return status code `200` after it receives the HTTP POST request sent from the LINE Platform.

::admonition{title="Note" type="note"}
- Even if the bot server fails to receive the HTTP POST request sent from the LINE Platform, the bot server can receive this request again. For more information, see [Redeliver a webhook that failed to be received](/docs/messaging-api/receiving-messages/#webhook-redelivery).
- The LINE Platform may send an HTTP POST request that doesn't include a webhook event to confirm communication. In this case, send a `200` status code.  
Example HTTP POST request without a webhook event:```json
{
  "destination": "xxxxxxxxxx",
  "events": []
}
```
::
