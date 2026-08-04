---
title: The endpoints for validating message objects have been added
navigation: true
description: >-
  We've added endpoints for validating message objects in the Messaging API.
  Added endpoints are as follows:
meta: '{"date":"2022-10-24 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2022/2022-10-24-validate-message-objects-api
__hash__: 5NPl1ADnYqErXfKNhqZVUzVsfRKiPfU9wGQf80AuzDQ
seo:
  title: The endpoints for validating message objects have been added
  description: >-
    We've added endpoints for validating message objects in the Messaging API.
    Added endpoints are as follows:
---

We've added endpoints for validating [message objects](/reference/messaging-api/#message-objects) in the Messaging API. Added endpoints are as follows:

- [Validate message objects of a reply message](/reference/messaging-api/#validate-message-objects-of-reply-message)
- [Validate message objects of a push message](/reference/messaging-api/#validate-message-objects-of-push-message)
- [Validate message objects of a multicast message](/reference/messaging-api/#validate-message-objects-of-multicast-message)
- [Validate message objects of a narrowcast message](/reference/messaging-api/#validate-message-objects-of-narrowcast-message)
- [Validate message objects of a broadcast message](/reference/messaging-api/#validate-message-objects-of-broadcast-message)

Previously, when checking that message objects were valid, you had to actually send a message, such as to yourself. This method, however, reduced the number of messages that could be sent.

By using the above endpoints, you can validate that message objects are valid without reducing the number of messages that can be sent.
