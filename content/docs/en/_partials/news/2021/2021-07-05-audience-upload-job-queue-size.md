---
title: >-
  We have set a limit on the number of concurrent endpoint operations for
  creating audience for uploading user IDs/adding user IDs
navigation: true
description: >-
  As announced on June 21, 2021, we have set a limit on the number of concurrent
  endpoint operations for creating audience for uploading User IDs and adding
  user IDs to an audience, for the Messaging API, effective from July 5, 2021.
  If you're using the target endpoints, be sure to check the ensuing impact of
  this limit.
meta: '{"date":"2021-07-05 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2021/2021-07-05-audience-upload-job-queue-size
__hash__: mnLN8NmcVMsI0OpVD0Ci_kaG2YA3GVMVM93K1efVjNM
seo:
  title: >-
    We have set a limit on the number of concurrent endpoint operations for
    creating audience for uploading user IDs/adding user IDs
  description: >-
    As announced on June 21, 2021, we have set a limit on the number of
    concurrent endpoint operations for creating audience for uploading User IDs
    and adding user IDs to an audience, for the Messaging API, effective from
    July 5, 2021. If you're using the target endpoints, be sure to check the
    ensuing impact of this limit.
---

As announced on [June 21, 2021](/news/2021/06/21/audience-upload-job-queue-size/), we have set a limit on the number of concurrent endpoint operations for creating audience for uploading :glossary-tooltip[[User IDs](/glossary/#user-id)]{glossary-id="user-id"} and adding user IDs to an audience, for the Messaging API, effective from July 5, 2021. If you're using the target endpoints, be sure to check the ensuing [impact](#audience-upload-20210705-03) of this limit.

::admonition
---
title: Audience is used to send narrowcast messages
type: tip
---
An audience is used to send a [narrowcast message](/reference/messaging-api/#send-narrowcast-message). For more information, see [Sending messages to multiple users via attribute data or retargeting (narrowcast messages)](/docs/messaging-api/sending-messages/#send-narrowcast-message) in the Messaging API documentation.
::

### Limit on the number of concurrent operations

We have set a limit of 10 concurrent endpoint operations per audience ID (`audienceGroupId`), for creating an audience for uploading user IDs and adding user IDs to an audience.

| Item                                    | Before change | After change |
| --------------------------------------- | ------------- | ------------ |
| Maximum number of concurrent operations | No limit      | 10           |

There is no change on the [rate limit](/reference/messaging-api/#rate-limits) of the target endpoints. For more information, see [Limit on the number of concurrent operations](/reference/messaging-api/#limit-on-the-number-of-concurrent-operations).

### Target endpoints

- [Create audience for uploading user IDs (by JSON)](/reference/messaging-api/#create-upload-audience-group)
- [Create audience for uploading user IDs (by file)](/reference/messaging-api/#create-upload-audience-group-by-file)
- [Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by JSON)](/reference/messaging-api/#update-upload-audience-group)
- [Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file)](/reference/messaging-api/#update-upload-audience-group-by-file)

The total number of requests processed concurrently by the above endpoints is counted as the number of concurrent operations.

### Impact

Requests that exceed the limit on the number of concurrent operations will return an error with [status code](/reference/messaging-api/#status-codes) `429 Too Many Requests`.

If your implementation makes frequent requests to the target endpoint, such as creating an audience for every user ID, change your implementation so that it takes into account the limit on the number of concurrent operations.

If you've received an error, wait a while before making a request again.

You can check the number of requests being processed with the `jobs` property of the following endpoint response. If the status of a job (`jobs[].jobStatus` property) is waiting to run (`QUEUED`) or running (`WORKING`), it will be counted as an operation.

- [Get audience data](/reference/messaging-api/#get-audience-group)

### Date of specification change

July 5, 2021

LINE will continue to improve the quality of its services for its customers. Thank you for your understanding.
