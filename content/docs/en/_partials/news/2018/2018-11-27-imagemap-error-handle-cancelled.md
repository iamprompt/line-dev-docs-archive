---
title: '[Update] Change to the imagemap message'
navigation: true
description: >-
  We decided not to make the specification change of the imagemap message that
  we announced on November 14, 2018, for compatibility. We apologize for any
  inconveniences caused and appreciate your understanding.
meta: '{"date":"2018-11-27 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2018/2018-11-27-imagemap-error-handle-cancelled
__hash__: eXy9qPBCCkDOvoddrlixhE3KjBEPexZhA1oWoEVfdZY
seo:
  title: '[Update] Change to the imagemap message'
  description: >-
    We decided not to make the specification change of the imagemap message that
    we announced on November 14, 2018, for compatibility. We apologize for any
    inconveniences caused and appreciate your understanding.
---

We decided not to make the specification change of the [imagemap message](/reference/messaging-api/#imagemap-message) that we announced on November 14, 2018, for compatibility. We apologize for any inconveniences caused and appreciate your understanding.

You can continue to send imagemap messages even if you set actions in the area that does not fit the width and height of the image specified by the `baseSize` property.

However, the layout of such imagemap messages might be broken on the user device. We recommend setting actions within the area that fits the width and height of the image specified by the `baseSize` property.
