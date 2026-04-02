---
title: >-
  As of December 5, 2022, Messaging API requests will return an error if the
  JSON object has duplicate properties
navigation: true
description: >-
  As of December 5, 2022, in the Messaging API, we'll change the specification
  to return an error when there are duplicate properties of the JSON object
  specified in the request body.
meta: '{"date":"2022-10-31 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2022/2022-10-31-messaging-api-update
__hash__: Y4Y3R7Mct83x1gDj2Sv5nUn9pa76dS9_d1rDlb_DOkc
seo:
  title: >-
    As of December 5, 2022, Messaging API requests will return an error if the
    JSON object has duplicate properties
  description: >-
    As of December 5, 2022, in the Messaging API, we'll change the specification
    to return an error when there are duplicate properties of the JSON object
    specified in the request body.
---

As of December 5, 2022, in the Messaging API, we'll change the specification to return an error when there are duplicate properties of the JSON object specified in the request body.

### Scheduled date of change

December 5, 2022

The details and date of this specification change are subject to change without notice.

### Changes

Currently, your request can succeed without error even if the request contains duplicate properties of the JSON object specified in the request body in the Messaging API. After the specification change, you'll receive a `400` HTTP status and an error response when there are duplicate properties of the JSON object.

The following are examples of the error responses when [sending a push message](/reference/messaging-api/#send-push-message) with duplicate properties.

```json
// If you specify a duplicate 'to' property
{
  "message": "The request body could not be parsed as JSON (line: 3, column: 7)",
  "details": [
    {
      "message": "Duplicate field 'to'"
    }
  ]
}

// If you specify a duplicate 'type' property in messages[1]
{
  "message": "The property, 'messages[1]', in the request body is invalid (line: 11, column: 13)",
  "details": [
    {
      "message": "Duplicate field 'type'"
    }
  ]
}
```

### Notes on specification change

After the specification change, even if you use the same content as a previously successful request for the request body, you'll receive an error response when there are duplicate properties of the JSON object. Before the specification change, make sure that there are no duplicate properties in the request body of the endpoint you're using.

#### Updating the LINE Messaging API SDK for Java

In the [LINE Messaging API SDK for Java](https://github.com/line/line-bot-sdk-java){rel="[\"nofollow\"]"}, some versions send duplicate JSON object properties. This issue has been fixed on version [`5.0.3`](https://github.com/line/line-bot-sdk-java/releases/tag/5.0.3){rel="[\"nofollow\"]"}.

If you're using the SDK for Java, please update to `5.0.3` or later before the specification change.

### Background

The purpose of this specification change is to prevent unintended behavior due to duplicate properties.

LINE will continue to work to further improve its service to our customers. Thank you for your understanding.
