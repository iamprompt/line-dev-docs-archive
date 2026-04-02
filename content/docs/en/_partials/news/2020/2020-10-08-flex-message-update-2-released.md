---
title: '[Updated] Flex Message Update 2 released'
navigation: true
description: ''
meta: >-
  {"date":"2020-10-08 00:00 UTC","tags":"Messaging API, Flex
  Message","new":"false","category":"Messaging API","locale":"en"}
path: /en/_partials/news/2020/2020-10-08-flex-message-update-2-released
__hash__: zHK0iwOde5-kROiuPTIYtQOEfPlXQ3TZa_pX9OteAZM
seo:
  title: '[Updated] Flex Message Update 2 released'
  description: ''
---

::admonition{title="Added on December 10, 2020" type="note"}
Flex message's play animated images feature, which has been temporarily unavailable since October 22, 2020, is now available again. We sincerely apologize for any inconvenience this may have caused.
::

Flex Message Update 2 has been released for the Messaging API.

Flex Message Update 2 includes these improvements:

- [Changed the maximum number of bubbles that can be included in a carousel](#update-bubble-limit)
- [Added more component alignment options](#update-box)
- [Allowed gradients to be used as a box's background image](#update-gradient-bg)
- [Allowed an empty array to be specified as the value of a box's `contents` property](#update-empty-array)
- [Added support for animated images](#update-apng)
- [Changed how sizes are specified](#update-size)
- [Allowed text to automatically shrink to fit a component's width](#update-adjust-mode)
- [Spacer has been discontinued](#update-spacer)
- [Added support for Update 2 in the Flex Message Simulator](#update-simulator)

### Changed the maximum number of bubbles that can be included in a carousel

We changed the maximum number of bubbles that can be included as child elements of a carousel container. This table provides a side-by-side comparison of values before and after the change.

- **[Carousel container](/reference/messaging-api/#f-carousel)**| Item                 | Before | After |
| -------------------- | ------ | ----- |
| Maximum # of bubbles | 10     | 12    |

### Added more component alignment options

We added the `justifyContent` and `alignItems` properties to Flex Message [box](/reference/messaging-api/#box) components.
These properties let you specify how child elements and free space should be arranged; for example, you can choose to evenly distribute the child elements or keep them all centered.

![flex-start](/media/messaging-api/flex-message-layout/justify-content-01.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![flex-center](/media/messaging-api/flex-message-layout/justify-content-02.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![flex-end](/media/messaging-api/flex-message-layout/justify-content-03.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![space-between](/media/messaging-api/flex-message-layout/justify-content-04.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![space-around](/media/messaging-api/flex-message-layout/justify-content-05.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![space-evenly](/media/messaging-api/flex-message-layout/justify-content-06.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}

For more information, see [Arranging a box's child elements and free space](/docs/messaging-api/flex-message-layout/#justify-property) in the Messaging API documentation.

### Allowed gradients to be used as a box's background image

You can use a linear gradient as the background image for a [box](/reference/messaging-api/#box) component by setting its `background.type` property equal to `linearGradient`.

![Linear gradient at 0 degrees](/media/messaging-api/flex-message-layout/linear-gradient-bg-deg-0.png){className="[\"border\",\"w-fix-240\"]"}![Linear gradient at 45 degrees](/media/messaging-api/flex-message-layout/linear-gradient-bg-deg-45.png){className="[\"border\",\"w-fix-240\"]"}![Linear gradient at 90 degrees](/media/messaging-api/flex-message-layout/linear-gradient-bg-deg-90.png){className="[\"border\",\"w-fix-240\"]"}

For more information, see [Linear gradient backgrounds](/docs/messaging-api/flex-message-layout/#linear-gradient-bg) in the Messaging API documentation.

### Allowed an empty array to be specified as the value of a box's `contents` property

You can now specify an empty array as the value of a box component's `contents` property.

- **[Box component](/reference/messaging-api/#box)**| Item                | Before                          | After                         |
| ------------------- | ------------------------------- | ----------------------------- |
| `contents` property | Empty arrays can't be specified | Empty arrays can be specified |

::admonition
---
title: When would it be helpful to specify an empty array?
type: tip
---
When using box components for decoration like the four squares shown below, it used to be necessary to add filler components as child elements to each of the boxes. Starting with Flex Message Update 2, you only need to specify an empty array.

![offset property example 1](/media/news/flex-message-update-empty-array-tips.png){className="[\"border\"]"}

Let's compare the JSON data for the yellow box component on the left before and after this change:


  - **Before**```json
{
    "type": "box",
    "layout": "vertical",
    "contents": [
        {
        "type": "filler"
        }
    ],
    "width": "30px",
    "height": "30px",
    "backgroundColor": "#FFFF7F"
}
```


  - **After**```json
{
    "type": "box",
    "layout": "vertical",
    "contents": [],
    "width": "30px",
    "height": "30px",
    "backgroundColor": "#FFFF7F"
}
```
::

### Added support for animated images

::admonition{title="Added on December 10, 2020" type="note"}
Flex message's play animated images feature, which has been temporarily unavailable since October 22, 2020, is now available again. We sincerely apologize for any inconvenience this may have caused.
::

It is now possible to specify animated images (APNG) in the image component of Flex Message.

For more information, see the [Image](/reference/messaging-api/#f-image) component in the Messaging API Reference.

### Changed how sizes are specified

We changed how you specify a component's size. This table provides a side-by-side comparison of values before and after the change.

- **[Image component](/docs/messaging-api/flex-message-layout/#image-size)**| Item                                        | Before     | After                                         |
| ------------------------------------------- | ---------- | --------------------------------------------- |
| How to specify a size (the `size` property) | - Keywords | - Keywords   - **Pixels**   - **Percentages** |
- **[Icon, text, and span components](/docs/messaging-api/flex-message-layout/#other-component-size)**| Item                                        | Before     | After                     |
| ------------------------------------------- | ---------- | ------------------------- |
| How to specify a size (the `size` property) | - Keywords | - Keywords   - **Pixels** |

### Allowed text to automatically shrink to fit a component's width

We added the `adjustMode` property to text and button components.
If you specify a value of `shrink-to-fit` for this `adjustMode` property, the text's font size will automatically shrink to fit the width of the component.

![Automatically shrink fonts to fit](/media/messaging-api/flex-message-layout/adjusts-fontsize-to-fit.png){className="[\"border\",\"w-fix-400\"]"}

For more information, see the [Text](/reference/messaging-api/#f-text) and [Button](/reference/messaging-api/#button) components in the Messaging API reference.

### Spacer has been discontinued

The spacer component, which was previously deprecated, has been discontinued.
We recommend setting the padding of the box without using a spacer from now on.

For more information, see [Box padding](/docs/messaging-api/flex-message-layout/#padding-property) in the Messaging API documentation.

### Added support for Update 2 in the Flex Message Simulator

[Flex Message Simulator](/flex-simulator/) now supports the new properties and objects introduced in Flex Message Update 2, as well.

Using [Flex Message Simulator](/flex-simulator/), you can easily generate JSON data for Flex Messages and visually examine how they're laid out.

::admonition{title="Caveats" type="note"}
Flex Message Simulator doesn't make any guarantees about the layout of a Flex Message. A Flex Message's appearance may vary from one device to the next. In addition to the version of the LINE app being used, a device's operating system, resolution, language settings, and fonts may affect how messages are rendered.
::
