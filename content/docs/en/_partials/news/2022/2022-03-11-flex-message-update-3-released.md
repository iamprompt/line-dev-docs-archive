---
title: '[Updated] Flex Message Update 3 released'
navigation: true
description: ''
meta: >-
  {"date":"2022-03-11 00:00 UTC","tags":"messaging-api,
  flex-message","locale":"en"}
path: /en/_partials/news/2022/2022-03-11-flex-message-update-3-released
__hash__: OXBW2oiM0VLQ0ZJXZL80ZxwFDXyPj-USGKgH1B7SgLM
seo:
  title: '[Updated] Flex Message Update 3 released'
  description: ''
---

::admonition{title="Added on March 15, 2022" type="note"}
Flex Message Simulator now supports Flex Message Update 3.
::

We've released Flex Message Update 3.

In Flex Message Update 3, the following features have been added:

- [A video can now be displayed in the hero block](#video-component-2022-03-11)
- [The max width and height of a box component can now be specified](#box-component-2022-03-11)
- [The line spacing in a text component can now be increased](#text-component-2022-03-11)
- [Flex Message Simulator now supports Update 3](#flex-message-simulator-2022-03-11)

### A video can now be displayed in the hero block

[Video component](/reference/messaging-api/#f-video) is now available in Flex Message. Using the video component, you can display a video in the hero [block](/docs/messaging-api/flex-message-elements/#block).

![Video component example](/media/messaging-api/create-flex-message-including-video/video.png){className="[\"w-fix-280\"]"}

For more information, see [Creating a Flex Message including a video](/docs/messaging-api/create-flex-message-including-video/) in the Messaging API documentation.

### The max width and height of a box component can now be specified

The `maxWidth` property and the `maxHeight` property have been added to the [box component](/reference/messaging-api/#box). Using these properties, you can specify the max width and height of a box component.

For more information, see [Max width of a box](/docs/messaging-api/flex-message-layout/#box-max-width) and [Max height of a box](/docs/messaging-api/flex-message-layout/#box-max-height) in the Messaging API documentation.

### The line spacing in a text component can now be increased

The `lineSpacing` property has been added to the [text component](/reference/messaging-api/#f-text). Using the `lineSpacing` property, you can increase the line spacing in a text component.

| `lineSpacing` not specified                                                                                                                    | `lineSpacing` 20px                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Example of not specifying the lineSpacing property](/media/messaging-api/flex-message-elements/wrap-sample.png){className="[\"w-fix-280\"]"} | ![Example of specifying 20px as the value of the lineSpacing property](/media/messaging-api/flex-message-elements/line-spacing-sample.png){className="[\"w-fix-280\"]"} |

For more information, see [Increase the line spacing in a text](/docs/messaging-api/flex-message-elements/#text-line-spacing) in the Messaging API documentation.

### Flex Message Simulator now supports Update 3

[Flex Message Simulator](/flex-simulator/) now supports Flex Message Update 3.

Using Flex Message Simulator, you can easily generate JSON data for flex messages and check the layouts. You can also send a test message and check the actual appearance on your LINE app.

::admonition{title="Restrictions" type="note"}
Flex Message Simulator doesn't make any guarantees about the layout of a flex message. A flex message's appearance may vary from one device to the next. In addition to the LINE version being used, a device's operating system, resolution, language settings, and fonts may affect how messages are rendered.
::
