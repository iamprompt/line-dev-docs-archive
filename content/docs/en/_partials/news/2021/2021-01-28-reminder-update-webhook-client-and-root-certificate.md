---
title: >-
  Reminder: TLS 1.0 and TLS 1.1 support by the webhook notification source will
  be discontinued at the end of January 2021
navigation: true
description: >-
  As announced on October 6, 2020 and January 18, 2021, we're planning these
  updates to the LINE Platform, which is source for webhook notifications for
  the Messaging API. If you're using a webhook, confirm communication from the
  new environment during the transition period.
meta: '{"date":"2021-01-28 00:00 UTC","tags":"Messaging API, SSL","locale":"en"}'
path: >-
  /en/_partials/news/2021/2021-01-28-reminder-update-webhook-client-and-root-certificate
__hash__: ttz5zKAxfhd_3iAaOIQ1yu-0Y1xbkzrn5wQQ9Zh1qm0
seo:
  title: >-
    Reminder: TLS 1.0 and TLS 1.1 support by the webhook notification source
    will be discontinued at the end of January 2021
  description: >-
    As announced on October 6, 2020 and January 18, 2021, we're planning these
    updates to the LINE Platform, which is source for webhook notifications for
    the Messaging API. If you're using a webhook, confirm communication from the
    new environment during the transition period.
---

As announced on [October 6, 2020](/news/2020/10/06/update-webhook-client-and-root-certificate/) and [January 18, 2021](/news/2021/01/18/reminder-update-webhook-client-and-root-certificate/), we're planning these updates to the LINE Platform, which is source for webhook notifications for the Messaging API. If you're using a webhook, confirm communication from the new environment during the transition period.

- [Supported SSL/TLS protocol versions](#protocol-version-3)
- [Supported HTTP versions](#http-version-3)
- [Request header field name](#header-field-name-3)
- [Supported root certification authorities](#root-certification-3)

::admonition{title="What is a webhook?" type="note"}
A webhook is one of the features of LINE's Messaging API. It's a system in which the LINE Platform notifies the bot server of the provider (corporate or developer) of events such as adding friends and sending messages via HTTPS POST requests.

You can specify the bot server to which you want to be notified of webhooks by specifying the webhook URL in the [LINE Developers Console](/console/). For more information on webhooks, see [Receiving messages (webhooks)](/docs/messaging-api/receiving-messages/) in the Messaging API documentation.
::

### Supported SSL/TLS protocol versions

We no longer support TLS 1.0 and TLS 1.1.

See this table for the differences before and after the transition.

| Protocol version | Before transition | After transition |
| ---------------- | ----------------- | ---------------- |
| TLS 1.3          | ❌                 | ✅                |
| TLS 1.2          | ✅                 | ✅                |
| TLS 1.1          | ✅                 | ❌                |
| TLS 1.0          | ✅                 | ❌                |
| SSL 3.0          | ❌                 | ❌                |
| SSL 2.0          | ❌                 | ❌                |

### Supported HTTP versions

See this table for differences before and after the transition.

| HTTP version | Before transition | After transition |
| ------------ | ----------------- | ---------------- |
| HTTP/2       | ❌                 | ✅                |
| HTTP/1.1     | ✅                 | ✅                |
| HTTP/1.0     | ✅                 | ✅                |

### Request header field name

After the transition, there may be changes to uppercase and lowercase letters in the field name of the [Request header](/reference/messaging-api/#request-headers) when sending a webhook from the LINE Platform. *1

|                           | Before transition  | After transition   |
| ------------------------- | ------------------ | ------------------ |
| Header field name example | `X-Line-Signature` | `x-line-signature` |

In addition, uppercase and lowercase letters may change without notice in the future as the LINE server is updated. The bot server that receives the webhook should handle the header field name without case distinction. *2

*1 [https://datatracker.ietf.org/doc/html/rfc7540#section-8.1.2](https://datatracker.ietf.org/doc/html/rfc7540#section-8.1.2){rel="[\"nofollow\"]"}   

*2 [https://datatracker.ietf.org/doc/html/rfc7230#section-3.2](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2){rel="[\"nofollow\"]"}

### Supported root certification authorities

Webhook URLs (the bot server to which webhooks are notified) must be configured with an SSL/TLS certificate issued by a trusted certification authority. Self-signed certificates aren't allowed.

See this table for differences before and after the transition.

|                                | Before transition                                                          | After transition                                                                                     |
| ------------------------------ | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Available SSL/TLS Certificates | An SSL/TLS certificate issued by a "Certificate authority trusted by LINE" | SSL/TLS certificates issued by a root certification authority that's widely trusted by most browsers |

The "Certificate authority trusted by LINE" list will be removed at the end of the transition period.

### Transition period

October 6, 2020 - January 31, 2021

### Impact

If you're using Messaging API webhooks, we recommend that you use one of these methods during the migration period to verify that the new LINE Platform can be used to communicate with the bot server.

#### Verification method 1: Verify with an endpoint for webhook URL validation

Verify the connection by using the endpoint for webhook URL test.

- [Webhook URL Test webhook endpoint](/reference/messaging-api/#test-webhook-endpoint)

::admonition
---
title: Return status code 200 for the communication request
type: note
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

#### Verification method 2: Use the webhook URL's "Verify" button in the LINE Developers Console

In the [LINE Developers Console](/console/), click the webhook URL's "Verify" button to perform the verification.

![send target](/media/news/webhook-url-verify-button.png){className="[\"border\",\"w-fix-320\"]"}

LINE will continue to improve the quality of its services to its customers. Thank you for your understanding.
