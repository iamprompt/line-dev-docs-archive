---
title: Change to the imagemap message is scheduled
navigation: true
description: >-
  We'd like to inform you that we will change the specification of the imagemap
  message.
meta: '{"date":"2018-10-24 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2018/2018-10-24-imagemap-error-handle-changed
__hash__: Umb1KVnFzlf69cC1-z2NdXYqbx_vJ1fqkxlJgNBx2WM
seo:
  title: Change to the imagemap message is scheduled
  description: >-
    We'd like to inform you that we will change the specification of the
    imagemap message.
---

We'd like to inform you that we will change the specification of the [imagemap message](/reference/messaging-api/#imagemap-message).

After the specification change, if the method of setting actions in imagemap messages is incorrect as below, an error occurs and you cannot send imagemap messages.

The current specification: You can send imagemap messages even if actions are set in the area that does not fit the width and height of the image specified by the `baseSize` property.

In this case, the layout of the imagemap displayed on the user device might be broken.

The new specification: You cannot send imagemap messages because the API request fails if actions are set in the area that does not fit the width and height of the image specified by the `baseSize` property.

This specification change will be released in the week starting November 5th.
