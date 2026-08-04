---
title: Webhook Request Headers
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/webhook-request-headers
__hash__: 11sGnAPI-XwCF9-qgTxlVN6LoJQU69JYi_KeWJXvHdM
seo:
  description: ''
---

::admonition
---
title: We recommend that you make the event processing asynchronous
type: tip
---
We recommend that you make the event processing asynchronous so that the processing of HTTP POST requests does not delay the processing of subsequent events.
::

::admonition
---
title: The IP address of the LINE Platform isn't disclosed
type: note
---
The IP address of the LINE Platform from which the webhook request is sent isn't disclosed. For better security, use [signature validation](/reference/messaging-api/#signature-validation) instead of access control by IP address.
::

### Request headers

::parameter-table
  :::parameter-table-entry
  #undefined
  x-line-signature

  Used for [signature validation](#signature-validation)
  :::
::

::admonition
---
title: Request header field names are case insensitive
type: note
---
Uppercase and lowercase letters in the [Request headers](/reference/messaging-api/#request-headers) field names may change without notice. The bot server that receives the webhook should handle the header field name without case distinction. *1

|                           | Before change      | After change       |
| ------------------------- | ------------------ | ------------------ |
| Header field name example | `X-Line-Signature` | `x-line-signature` |

*1 [https://datatracker.ietf.org/doc/html/rfc7230#section-3.2](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2){rel="[\"nofollow\"]"}
::
