---
title: New properties for template messages and postback actions released
navigation: true
description: ''
meta: >-
  {"date":"2018-02-08 00:00 UTC","tags":"Messaging API, Template
  messages","locale":"en"}
path: /en/_partials/news/2018/2018-02-08-new-properties-added
__hash__: zuht0yas8lJYAOBBNHC1VFTvOoT5aPEv3oe-seApj_0
seo:
  title: New properties for template messages and postback actions released
  description: ''
---

### Default actions can now be set for template messages

The `defaultAction` property has been added to the column object for [buttons](/docs/messaging-api/message-types/#buttons-template) and [carousel](/docs/messaging-api/message-types/#carousel-template) template messages. As a result, you can indicate a single action to be executed when a user taps anywhere in the image, title, or text area.

For more information, see the updated reference documentation below.

- [Buttons](/reference/messaging-api/#buttons)
- [Carousel](/reference/messaging-api/#carousel)

### `displayText` property for postback actions released

We have released the `displayText` property and have deprecated the `text` property for postback actions. We recommend using `displayText` instead of the `text` property. Note that the `dislayText` and `text` properties cannot both be used at the same time.

For more information, see the [Postback action reference documentation](/reference/messaging-api/#postback-action).
