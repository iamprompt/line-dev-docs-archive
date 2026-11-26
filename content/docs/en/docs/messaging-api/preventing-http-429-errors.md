---
title: Best practices for preventing HTTP status code 429 errors in the Messaging API
navigation: true
description: >-
  Learn how to prevent and recover from HTTP status code 429 errors in the
  Messaging API.
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/preventing-http-429-errors
__hash__: PIoF-uu-WYXQkGLmCDdFuFsNHsY9om1gU-qyinNUmvk
seo:
  title: >-
    Best practices for preventing HTTP status code 429 errors in the Messaging
    API
  description: >-
    Learn how to prevent and recover from HTTP status code 429 errors in the
    Messaging API.
---

# :page-title

:markdown-controls::admonition{title="Who should read this page" type="tip"}
This page provides technical guidance for operating large LINE Official Accounts with many friends (1 million or more as a guideline) and frequent message deliveries through the Messaging API.

Decide whether you need to apply this guidance if any of the following describes your LINE Official Account:

- Your LINE Official Account is relatively small.
- You mainly use LINE Official Account Manager to send messages.
- You use the Messaging API to send messages only within the [free message allowance](/docs/messaging-api/pricing/#examples-of-subscription-plans).
::

This page explains how developers and operators of systems that use the Messaging API can prevent and recover from HTTP status code 429 (Too Many Requests). It covers controlling and retrying API requests, checking the number of messages, and checking when and how errors occur.

For more information about identifying the cause and taking basic action, see [Handle HTTP status code 429 errors in the Messaging API](/docs/messaging-api/handling-http-429-errors/).

::admonition{title="This guidance assumes access to logs" type="note"}
This page assumes that you can check your own logs or other records to investigate the circumstances in which HTTP status code 429 occurred. For more information about what to record and precautions to take, see [Record details when HTTP status code 429 occurs](/docs/messaging-api/handling-http-429-errors/#record-http-429-errors).
::

## Take action based on your goal

Take the following action based on your goal:

| Goal                                                                                            | Reference                                                                                                                    |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Control the API request rate and number of concurrent operations                                | [Control API requests](#control-api-requests)                                                                                |
| Check the number of messages available to send and adjust your delivery plan and message volume | [Monitor the number of messages](#monitor-message-quota)                                                                     |
| Design a retry strategy for failed API requests                                                 | [Retry requests after you exceed a rate limit or the limit on the number of concurrent operations](#retry-rate-limit-errors) |

## Control API requests

For more information about the rate limit mechanism, scope, and limits for each endpoint, see [Rate limits](/reference/messaging-api/#rate-limits) in the Messaging API reference.

::admonition{title="You can't change the rate limits" type="tip"}
You can't change or relax the Messaging API rate limits for individual channels. Design your system to send API requests within the defined limits.
::

Control API requests in these ways:

- [Configure a rate limiter in your app](#configure-a-rate-limiter)
- [Control concurrent operations](#control-concurrent-operations)

### Configure a rate limiter in your app

Configure a rate limiter in the app or system that sends API requests. Base the rate limiter on the [token bucket algorithm](/reference/messaging-api/#rate-limits-mechanism) and the Messaging API rate limits. Keep the request rate for each endpoint within its rate limit.

::admonition{title="Leave a margin below the rate limit" type="note"}
Leave a margin below the rate limit. Requests from multiple apps and their arrival times at the LINE Platform can cause you to exceed the limit. This can happen even if you set your rate limiter to the same value as the rate limit.

Control the combined request rate across all sources if multiple apps or systems send requests. Use a shared counter if you need one. Don't rely only on separate controls for each source.
::

### Control concurrent operations

Some endpoints have a [limit on the number of concurrent operations](/reference/messaging-api/#limit-on-the-number-of-concurrent-operations) for each audience ID (`audienceGroupId`), in addition to a rate limit. In the app or system that sends API requests, manage these operations with a queue or similar mechanism. Keep the total number of jobs queued or running on the LINE Platform within the limit.

Check `jobs[].jobStatus` in the response from the [Get audience data](/reference/messaging-api/#get-audience-group) endpoint. Count both queued (`QUEUED`) and running (`WORKING`) jobs.

If you exceed this limit, the Messaging API returns the error message `There are too many running upload jobs for the audience group id.` with HTTP status code 429.

---

## Monitor the number of messages

Check the values below before you reach the message limit. Choose the checks based on `type` in the response from the [Get the target limit for sending messages this month](/reference/messaging-api/#get-quota) endpoint.

| `type`    | Values to check                                                                                                                                                                                                                                      | How to check                                                                                                                                     | Action to take when needed                                                                                                                                                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `limited` | `value` from the [Get the target limit for sending messages this month](/reference/messaging-api/#get-quota) endpoint and `totalUsage` from the [Get number of messages sent this month](/reference/messaging-api/#get-consumption) endpoint.        | Subtract `totalUsage` from `value` to estimate the number of messages available to send.                                                         | Review your [pricing plan](/docs/messaging-api/pricing/#global-pricing) or [target limit for additional messages](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_plan/?list=7171){rel="[\"nofollow\"]"} (only available in Japanese). |
| `none`    | `totalUsage` from the [Get number of messages sent this month](/reference/messaging-api/#get-consumption) endpoint. The [Get the target limit for sending messages this month](/reference/messaging-api/#get-quota) endpoint doesn't return `value`. | Compare `totalUsage` regularly with an operating threshold that you set in advance. You can't estimate the number of messages available to send. | Review the terms of your plan, your operating threshold, and your delivery plan.                                                                                                                                                                                |

For example, if `type` is `limited`, calculate the estimated number of messages available to send as follows:

| Target limit for the month (`value`) | Usage for the month (`totalUsage`) | Estimated messages available to send  |
| ------------------------------------ | ---------------------------------- | ------------------------------------- |
| 30,000 messages                      | 18,000 messages                    | **12,000 messages** (30,000 − 18,000) |

::admonition{title="When no target limit is set" type="note"}
The [Get the target limit for sending messages this month](/reference/messaging-api/#get-quota) endpoint returns a `type` value of `none` only for certain LINE Official Accounts on special plans. These plans include the [Local Government Plan](https://linegov.com/){rel="[\"nofollow\"]"} (only available in Japanese), a plan for local governments. LY Corporation requires a separate application for these plans. The endpoint returns `limited` for accounts on the following plans in LINE Official Account Manager:

- [Communication Plan](/docs/messaging-api/pricing/#examples-of-subscription-plans)
- [Light Plan](/docs/messaging-api/pricing/#examples-of-subscription-plans)
- [Standard Plan](/docs/messaging-api/pricing/#examples-of-subscription-plans)
::

::admonition
---
title: totalUsage may exceed the actual number of messages sent
type: note
---
`totalUsage` from the [Get number of messages sent this month](/reference/messaging-api/#get-consumption) endpoint may include messages that the LINE Platform has temporarily reserved for another delivery. These reservations can make `totalUsage` higher than you expect. Account for the following:

- The LINE Platform temporarily reserves the planned number of messages for deliveries from LINE Official Account Manager and for [narrowcast messages](/reference/messaging-api/#send-narrowcast-message-cautions). It keeps the reservation until it finalizes the actual number of messages sent.
- LINE Official Account Manager doesn't reserve messages when you schedule a delivery. The LINE Platform reserves the planned number of messages when the delivery starts.
- Account for deliveries from LINE Official Account Manager and the Messaging API when you check the number of messages available to send.
::

---

## Retry requests after you exceed a rate limit or the limit on the number of concurrent operations

Take the following action based on the cause. Then retry the API request:

- Lower the request rate or wait before retrying if you exceeded a rate limit.
- If you exceeded the limit on the number of concurrent operations, wait for jobs to finish and confirm that the number of concurrent operations has fallen below the limit.

::admonition
---
title: >-
  Don't retry requests with errors related to the number of messages in the same
  way
type: note
---
Don't retry immediately after you receive the `You have reached your monthly limit.` error. Check the message limit and any temporary reservations. For more information, see [Errors related to the number of messages](/docs/messaging-api/handling-http-429-errors/#identify-message-quota-error).
::

### Set the retry timing based on the cause

::admonition
---
title: The Messaging API doesn't return the Retry-After header
type: note
---
The Messaging API doesn't return the `Retry-After` header. Set the retry timing in the system that sends API requests.
::

Use your [configured rate limiter](#configure-a-rate-limiter) to control retries when a rate limit causes the error. The Messaging API uses the [token bucket algorithm](/reference/messaging-api/#rate-limits-mechanism) as the basis for its rate limits. The LINE Platform adds tokens over time.

Don't retry immediately after receiving HTTP status code 429. Lower the request rate to leave a margin below the endpoint's rate limit, and wait for the LINE Platform to replenish tokens before retrying. Add random jitter to the retry interval and, if you continue to receive HTTP status code 429, gradually increase the interval using exponential backoff or a similar method.

If the limit on the number of concurrent operations causes the error, [check the number of queued and running jobs](#control-concurrent-operations). Retry when their total falls below the limit.

### Set the maximum number of retries

HTTP status code `429 Too Many Requests` has [several possible causes](/docs/messaging-api/handling-http-429-errors/#identify-the-cause). If the error is related to the number of messages, retrying the request alone may not resolve the error.

Set a maximum number of retries. Use three retries as a guideline. Stop processing if the error continues after the maximum number of retries.

Then investigate the request rate and the number of concurrent operations. Identify and resolve the cause before you retry again.

### Use retry keys with endpoints that send messages

Specify the `X-Line-Retry-Key` header in the first API request to an endpoint that supports retry keys. Use the same retry key within 24 hours of the first request to prevent duplicate processing.

For more information about supported endpoints and implementation, see [Retry failed API requests](/docs/messaging-api/retrying-api-request/).

---

## Considerations for HTTP status code 429 errors

- The Messaging API doesn't process API requests that return HTTP status code 429. The LINE Platform also doesn't retry them automatically.
- Don't send large numbers of API requests for load testing or functional testing. Don't [send large numbers of messages to the same user](/docs/messaging-api/development-guidelines/#prohibiting-mass-transmissions-to-same-user). The LINE Platform may return HTTP status code 429 for requests outside normal use. This can happen even when you stay within the [rate limits](/reference/messaging-api/#rate-limits) and [limits on the number of concurrent operations](/reference/messaging-api/#limit-on-the-number-of-concurrent-operations). For more information, see [Messaging API development guidelines](/docs/messaging-api/development-guidelines/).
- You may not have enough messages available to send near the end of the month. The Messaging API may return HTTP status code 429 in this case. See these sections:

  - [Check the number of messages needed for the delivery](/docs/messaging-api/handling-http-429-errors/#check-message-quota-for-recipients)
  - [Check the status of other message deliveries](/docs/messaging-api/handling-http-429-errors/#check-ongoing-message-delivery)
