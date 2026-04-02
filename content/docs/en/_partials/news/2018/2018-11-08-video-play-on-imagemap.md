---
title: Specification change for the Messaging API
navigation: true
description: ''
meta: '{"date":"2018-11-08 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2018/2018-11-08-video-play-on-imagemap
__hash__: 59kuI4BKmgtjXqt7X4q10ICpH3MN0ZFwFzxTtdbMxyQ
seo:
  title: Specification change for the Messaging API
  description: ''
---

### You can play videos in imagemap messages

Now you can play videos in imagemap messages.

For more information, see [Imagemap message](/reference/messaging-api/#imagemap-message).

Note that this change doesn't include the validation of action areas of imagemap messages announced on October 24. We will inform you once we decide on our schedule.

### New properties are added to webhook events

- The body of webhook events now includes the user ID (`destination`) of a bot that should receive the webhook events. For more information, see [Request body](/reference/messaging-api/#request-body).
- New information is available in message objects for image, video, and audio messages. For more information, see [Image](/reference/messaging-api/#wh-image), [Video](/reference/messaging-api/#wh-video), and [Audio](/reference/messaging-api/#wh-audio).

Correction on November 9, 2018 : MID -> user ID

### Flex Messages can now be multicast

Now you can send [Flex Messages](/docs/messaging-api/using-flex-messages/) with the `/v2/bot/message/multicast` endpoint.

For the `/v2/bot/message/multicast` endpoint, see [Send multicast message](/reference/messaging-api/#send-multicast-message) in the Messaging API reference.
