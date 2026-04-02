---
title: >-
  Messaging API requests will return an error if the JSON object has duplicate
  properties
navigation: true
description: >-
  As announced on October 31, 2022, we've changed the specification of the
  Messaging API to return an error if the request body's JSON object contains
  duplicate properties.
meta: '{"date":"2022-12-06 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2022/2022-12-06-messaging-api-updated
__hash__: G55TomLCnMOItXT2mBFubkWYVb7dTKLO5tp_1odTnCE
seo:
  title: >-
    Messaging API requests will return an error if the JSON object has duplicate
    properties
  description: >-
    As announced on October 31, 2022, we've changed the specification of the
    Messaging API to return an error if the request body's JSON object contains
    duplicate properties.
---

As announced on [October 31, 2022](/news/2022/10/31/messaging-api-update/), we've changed the specification of the Messaging API to return an error if the request body's JSON object contains duplicate properties.

### Date of change

December 6, 2022

### Changes

The HTTP status `400` and an error response will be returned if the JSON object contains duplicate properties.

The following are examples of error responses if you [send a push message](/reference/messaging-api/#send-push-message) with duplicate properties.

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

### Important points about the specification change

From now on, even if you use the same request body of a request that was successful before the specification change, you'll receive an error response if the JSON object contains duplicate properties. Make sure that the request body doesn't contain any duplicate properties.

You can use the following endpoints to validate [message objects](/reference/messaging-api/#message-objects) and [rich menu objects](/reference/messaging-api/#rich-menu-object):

- Endpoints that validate message objects

  - [Validate message objects of a reply message](/reference/messaging-api/#validate-message-objects-of-reply-message)
  - [Validate message objects of a push message](/reference/messaging-api/#validate-message-objects-of-push-message)
  - [Validate message objects of a multicast message](/reference/messaging-api/#validate-message-objects-of-multicast-message)
  - [Validate message objects of a narrowcast message](/reference/messaging-api/#validate-message-objects-of-narrowcast-message)
  - [Validate message objects of a broadcast message](/reference/messaging-api/#validate-message-objects-of-broadcast-message)
- Endpoint that validates a rich menu object

  - [Validate rich menu object](/reference/messaging-api/#validate-rich-menu-object)

#### Updating the LINE Messaging API SDK for Java

Some older versions of the [LINE Messaging API SDK for Java](https://github.com/line/line-bot-sdk-java){rel="[\"nofollow\"]"} send duplicate JSON object properties. This issue has been fixed in version [`5.0.3`](https://github.com/line/line-bot-sdk-java/releases/tag/5.0.3){rel="[\"nofollow\"]"}.

If you're using the SDK for Java, please update to version `5.0.3` or later.

LINE will continue to work to further improve its service to our customers. Thank you for your understanding.
