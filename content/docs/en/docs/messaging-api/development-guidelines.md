---
title: Messaging API development guidelines
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/development-guidelines
__hash__: AxQ25JFgcG49mbDvNuHzsqt_nY81S9EFPmWDHJBDUR0
seo:
  title: Messaging API development guidelines
  description: null
---

# :page-title

:markdown-controlsBefore you start with bot development, learn what is recommended and prohibited in regards to developing a bot with the Messaging API.

**Prohibited matters**

- [Don't send mass requests to the LINE Platform](#prohibiting-mass-requests-to-line-platform)
- [Don't do load testing through the LINE Platform](#prohibiting-line-platform-load-tests)
- [Don't send mass messages to the same user](#prohibiting-mass-transmissions-to-same-user)
- [Don't send requests to invalid user IDs](#prohibiting-requests-for-non-existent-user-ids)
- [Don't try to identify user attributes](#prohibiting-identify-users-attribute)
- [Don't restrict access by IP address](#prohibiting-ip-address-restrictions)

**Recommended matters**

- [Recommended processing on receipt of unsend event](#webhook-unsend-message)
- [Recommended verification of webhook signature when receiving webhooks](#verify-webhook-signature)
- [Recommendation for implementation assuming non-breaking feature additions](#assume-non-breaking-changes)
- [Save logs](#save-logs)

::admonition{title="Note" type="note"}
The basic rules for bot development are based on the [terms and policies](/terms-and-policies/).
::

## Prohibited matters

### Don't send mass requests to the LINE Platform

Don't send a large number of requests to the LINE Platform for load test or operation test. In all cases, keep the number of requests under the specified [rate limits](/reference/messaging-api/#rate-limits). If you send requests more than the rate limit, you'll get a `429 Too Many Requests` error.

::admonition{title="Operation tests within rate limits" type="note"}
Even if you keep the rate limit, don't send these kinds of requests at a high frequency:

- Repeatedly creating and deleting [audiences](/docs/messaging-api/using-audience/#create-audience) even though they're not actually used for sending narrowcast messages
- Repeatedly making requests that don't use the Messaging API features
::

### Don't do load testing through the LINE Platform

The LINE Platform doesn't have a service for load testing bot servers. Don't send large numbers of messages through the LINE Platform to load test your bot servers. Prepare a separate environment dedicated for load testing bot servers.

### Don't send mass messages to the same user

In all cases, don't send too many messages to the same user.

### Don't send requests to invalid user IDs

Don't send a request to a :glossary-tooltip[[user ID](/glossary/#user-id)]{glossary-id="user-id"} that doesn't exist.

### Don't try to identify user attributes

Don't try to identify user [attributes](/reference/messaging-api/#narrowcast-demographic-filter) for a specific user ID. Also, don't use the [Managing Audience](/reference/messaging-api/#manage-audience-group) API or send [narrowcast messages](/reference/messaging-api/#send-narrowcast-message) to identify user attributes.

### Don't restrict access by IP address

On bot servers that receive webhooks, don't restrict access that sends webhook requests by the IP address of the LINE Platform. Instead of access control by IP address, use [signature validation](/reference/messaging-api/#signature-validation) to deny requests from unauthorized sources. This is because we don't disclose the IP addresses of the LINE Platform. Also, IP addresses are subject to change without notice.

## Recommended matters

### Recommended processing on receipt of unsend event

When a user unsends a sent message, an [unsend event](/reference/messaging-api/#unsend-event) is sent to the bot server.

When the unsend event is received, we recommend that service providers respect the user's intent to unsend a sent message and handle the message appropriately with the utmost care so that the target message can't be seen or used in the future.

For more information, see [Processing on receipt of unsend event](/docs/messaging-api/receiving-messages/#webhook-unsend-message).

### Recommended verification of webhook signature when receiving webhooks

When the bot server receives a webhook event, it is recommended that the bot server verify the signature included in the request header before processing the [webhook event objects](/reference/messaging-api/#webhook-event-objects). This verification step is important to confirm that the webhook came from the LINE Platform and wasn’t tampered with during transmission

For more information, see [Verify webhook signature](/docs/messaging-api/verify-webhook-signature/).

### Recommendation for implementation assuming non-breaking feature additions

In the Messaging API, non-breaking feature additions may be made. These changes are intended to expand the API without breaking existing features. Therefore, the following types of changes may be made without advance notice:

- Adding new endpoints
- Adding optional parameters, fields, and headers to API requests
- Adding fields and headers to API responses
- Adding properties to webhook event objects
- Changing the order of properties in API responses and webhook event objects
- Adding enumerated values (Example: Adding the value of the `type` property of the [webhook event object](/reference/messaging-api/#common-properties))
- Whether or not to include spaces or line breaks between data elements

Implement your bot server so that it will work without any problems even with these non-breaking feature additions.

### Save logs

We recommend that you save logs for [Messaging API requests](#messaging-api-logs) you send and [webhooks](#webhook-logs) you received, for a period of time. These logs help you when you investigate the cause of a problem.

::admonition{title="Helpful data to save in a log" type="tip"}
In addition to the basic information to log as recommended in this section, this data can also help you. Consider saving this data depending on your bot requirements:

- Request body parameters of the Messaging API you call
- Response body returned by the LINE Platform for the API call
- Signature (`x-line-signature`) of the [request header](/reference/messaging-api/#request-headers) when a webhook is sent from the LINE Platform
- [Webhook event object](/reference/messaging-api/#webhook-event-objects) that the LINE Platform sent
::

::admonition{title="We don't provide logs" type="note"}
We don't provide logs for Messaging API requests or for webhooks sent from the LINE Platform even if you inquire. You are responsible to save logs.
::

#### Save logs for Messaging API requests

We recommend that you log this information when you make a request to the Messaging API:

- Request ID (`x-line-request-id`) in the [Response header](/reference/messaging-api/#response-headers)
- The time the API request was made
- HTTP method for the request
- API endpoint called
- [Status code](/reference/messaging-api/#status-codes) returned by the LINE Platform

Save each data in a log file in the format like the below:

| Request ID (`x-line-request-id`)     | Time of API request           | HTTP method | API endpoint                              | Status code |
| ------------------------------------ | ----------------------------- | ----------- | ----------------------------------------- | ----------- |
| 8e36bade-c5d6-4d00-9e69-72244675a9a1 | Mon, 05 Jul 2021 08:14:35 GMT | POST        | `https://api.line.me/v2/bot/message/push` | 200         |

#### Save logs for webhooks received

We recommend that you log this information when your bot server receives a [webhook](/reference/messaging-api/#webhooks) from the LINE Platform:

- IP address of the webhook sender
- The time the webhook was received
- HTTP method
- Request path
- Status code the bot server returned in [response](/reference/messaging-api/#response) to the webhook received

Save each data in a log file in the format like the below:

| Sender IP address | Time webhook was received     | HTTP method | Request path       | Status code |
| ----------------- | ----------------------------- | ----------- | ------------------ | ----------- |
| 203.0.113.1       | Mon, 05 Jul 2021 08:10:00 GMT | POST        | `/linebot/webhook` | 200         |
