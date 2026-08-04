---
title: >-
  [Updated] TLS 1.0 and TLS 1.1 support by the webhook notification source will
  be discontinued at the end of January 2021
navigation: true
description: ''
meta: '{"date":"2020-10-06 01:00 UTC","tags":"Messaging API, SSL","locale":"en"}'
path: /en/_partials/news/2020/2020-10-06-update-webhook-client-and-root-certificate
__hash__: '-ymP8yEG6YlH1zvSIHkxzhmU2fI9S2x4ved26jLxeng'
seo:
  title: >-
    [Updated] TLS 1.0 and TLS 1.1 support by the webhook notification source
    will be discontinued at the end of January 2021
  description: ''
---

::admonition{title="Added on November 5, 2020" type="note"}
You can now also confirm communication from the environment after migration in verification method 2.

- [Verification method 2: Use the webhook URL's "Verify" button in the LINE Developers Console](#verify-method-02)
::

The following updates are planned for the LINE Platform, the source of webhook notifications for the Messaging API.

If you are using a webhook, please confirm communication from the new environment during the transition period.

- [Supported SSL/TLS protocol versions](#protocol-version)
- [Supported HTTP versions](#http-version)
- [Supported root certification authorities](#root-certification)

::admonition{title="What is a webhook?" type="note"}
A webhook is one of the features of LINE's Messaging API. It's a system in which the LINE Platform notifies the bot server of the provider (corporate or developer) of events such as adding friends and sending messages via HTTPS POST requests.

You can specify the bot server to which you want to be notified of webhooks by specifying the webhook URL in the [LINE Developers Console](/console/). For more information on webhooks, see [Receiving messages (webhooks)](/docs/messaging-api/receiving-messages/) in the Messaging API documentation.
::

### Supported SSL/TLS protocol versions

We no longer support TLS 1.0 and TLS 1.1.

See the table below for the differences before and after the transition.

| Protocol version | Before transition | After transition |
| ---------------- | ----------------- | ---------------- |
| TLS 1.3          | ❌                 | ✅                |
| TLS 1.2          | ✅                 | ✅                |
| TLS 1.1          | ✅                 | ❌                |
| TLS 1.0          | ✅                 | ❌                |
| SSL 3.0          | ❌                 | ❌                |
| SSL 2.0          | ❌                 | ❌                |

### Supported HTTP versions

See the table below for differences before and after the transition.

| HTTP version | Before transition | After transition |
| ------------ | ----------------- | ---------------- |
| HTTP/2       | ❌                 | ✅                |
| HTTP/1.1     | ✅                 | ✅                |
| HTTP/1.0     | ✅                 | ✅                |

### Supported root certification authorities

Webhook URLs (the bot server to which webhooks are notified) must be configured with an SSL/TLS certificate issued by a trusted certification authority. Self-signed certificates aren't allowed.

See the table below for differences before and after the transition.

|                                | Before transition                                                          | After transition                                                                                     |
| ------------------------------ | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Available SSL/TLS Certificates | An SSL/TLS certificate issued by a "Certificate authority trusted by LINE" | SSL/TLS certificates issued by a root certification authority that's widely trusted by most browsers |

The "Certificate authority trusted by LINE" list will be removed at the end of the transition period.

### Transition period

October 6, 2020 - January 31, 2021

### Impact

If you're using Messaging API webhooks, we recommend that you use one of the following methods during the migration period to verify that the new LINE Platform can be used to communicate with the bot server.

#### Verification method 1: Verify with an endpoint for webhook URL validation

Please verify the connection by using the endpoint for webhook URL test.

- [Webhook URL Test webhook endpoint](/reference/messaging-api/#test-webhook-endpoint)

::admonition
---
title: Return status code 200 for the communication request
type: note
---
- The LINE Platform sends an HTTP POST request that doesn't include a webhook event to the webhook URL (bot server) to confirm communication. Design your bot server to return status code `200`.  
Example HTTP POST request without a webhook event:```json
{
    "destination": "xxxxxxxxxx",
    "events": []
}
```
::

#### Verification method 2: Use the webhook URL's "Verify" button in the LINE Developers Console

In the [LINE Developers Console](/console/), click the Webhook URL's "Verify" button to perform the verification.

![send target](/media/news/webhook-url-verify-button.png){className="[\"border\",\"w-fix-320\"]"}

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
