---
title: Flex Message Update 4 released
navigation: true
description: We've released Flex Message Update 4.
meta: >-
  {"date":"2023-07-04 01:00 UTC","tags":"messaging-api,
  flex-message","locale":"en"}
path: /en/_partials/news/2023/2023-07-04-flex-message-update-4-released
__hash__: jlrtv5OL65mJaI79MITJFk3_Y3XtqSmUKR9DXRCt2P0
seo:
  title: Flex Message Update 4 released
  description: We've released Flex Message Update 4.
---

We've released Flex Message Update 4.

The features have been added in Flex Message Update 4 and the target version are as follows:

- [New bubble sizes added](#bubble-size-2023-07-04)
- [Font size and icon size can now be automatically scaled according to the font size setting](#size-scaling-2023-07-04)
- [Flex Message Simulator now supports Update 4 partially](#flex-message-simulator-2023-07-04)
- [Target version](#target-version-20230704)

### New bubble sizes added

The `deca` and `hecto` values in the `size` property have been added to the [bubble](/reference/messaging-api/#bubble). The size of bubble specified by the `size` property is larger in the following order: `nano`, `micro`, `deca`, `hecto`, `kilo`, `mega`, and `giga`.

For more information, see [Bubble](/reference/messaging-api/#bubble) in the Messaging API reference.

### Font size and icon size can now be automatically scaled according to the font size setting

The `scaling` property is now available on [Button](/reference/messaging-api/#button), [Text](/reference/messaging-api/#f-text), and [Icon](/reference/messaging-api/#icon). If you set the `scaling` property to `true`, you can automatically scale the font size and icon size according to the font size setting of the LINE app. This allows you to send messages with accessibility in mind.

| Example of font size **Small**                                                                                                              | Example of font size **Extra large**                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Example of font size Small](/media/messaging-api/flex-message-layout/scaling-sample-small-en.jpg){className="[\"border\",\"w-fix-240\"]"} | ![Example of font size Extra large](/media/messaging-api/flex-message-layout/scaling-sample-extra-large-en.jpg){className="[\"border\",\"w-fix-240\"]"} |

For more information, see [Scaling to size according to the font size setting](/docs/messaging-api/flex-message-layout/#size-scaling) in the Messaging API documentation.

### Flex Message Simulator now supports Update 4 partially

[Flex Message Simulator](/flex-simulator/) now supports bubble sizes added in Flex Message Update 4. The `scaling` property isn't currently supported. We plan to provide support for this property in the future.

Using Flex Message Simulator, you can easily generate JSON data for flex messages and check the layouts. You can also send a test message and check the actual appearance on your LINE app.

::admonition{title="Restrictions" type="note"}
Flex Message Simulator doesn't make any guarantees about the layout of a flex message. A flex message's appearance may vary from one device to the next. In addition to the LINE version being used, a device's operating system, resolution, language settings, and fonts may affect how messages are rendered.
::

#### Target version

The target LINE versions for which specification changes have been made are as follows:

| OS                         | Target version  |
| -------------------------- | --------------- |
| LINE for iOS and Android   | 13.6.0 or later |
| LINE for macOS and Windows | 7.17.0 or later |
