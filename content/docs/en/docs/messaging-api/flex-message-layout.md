---
title: Flex Message layout
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /en/docs/messaging-api/flex-message-layout
__hash__: hkX-tJB5Y7BY0PQx2-5eJ1wz_Jjkcsa2Ftthnpzmgwo
seo:
  title: Flex Message layout
  description: null
---

# :page-title

:markdown-controlsYou can build complex Flex Messages layouts based on the specification for [CSS Flexible Box (CSS flexbox)](https://www.w3.org/TR/css-flexbox-1/){rel="[\"nofollow\"]"}. The flex container and flex items in CSS flexbox correspond to the [box component](/docs/messaging-api/flex-message-elements/#box) and the Flex Message components, respectively.

Learn how to compose a layout of your Flex Message. For more information about the JSON schema, see [Flex Message](/reference/messaging-api/#flex-message) in the Messaging API reference.

## Box component orientation

[Box components](/docs/messaging-api/flex-message-elements/#box) have two orientations, landscape and portrait. Boxes in landscape mode are called horizontal boxes and those in portrait mode are called vertical boxes. The orientation determines the main axis and cross axis of a box. The main axis is parallel to the orientation. A horizontal box's main axis is horizontal and a vertical box's main axis is vertical. The cross axis is perpendicular to the main axis. The main axis determines how a box's child components are arranged. For more information, see [Child component arrangement with free space](#justify-property).

You need to specify the orientation in the `layout` property of the box component. In addition to horizontal boxes and vertical boxes, baseline boxes are available.

| Box            | `layout` property                                 | Main axis  | Cross axis | Child components placed                                                                       |
| -------------- | ------------------------------------------------- | ---------- | ---------- | --------------------------------------------------------------------------------------------- |
| Horizontal box | `horizontal`{className="[\"whitespace-nowrap\"]"} | Horizontal | Vertical   | Horizontally                                                                                  |
| Vertical box   | `vertical`{className="[\"whitespace-nowrap\"]"}   | Vertical   | Horizontal | Vertically                                                                                    |
| Baseline box   | `baseline`{className="[\"whitespace-nowrap\"]"}   | Horizontal | Vertical   | Horizontally   For more information, see [Child components in baseline boxes](#baseline-box). |

### Child components in baseline boxes

Baseline boxes behave in the same way as horizontal boxes. However, the behavior of baseline boxes differs from that of horizontal boxes in the following ways:

#### Vertical alignment position

Components in a baseline box are vertically aligned by the same baseline. This means all the child components use the same baseline, regardless of the font size. The baseline of an [icon component](/reference/messaging-api/#icon) is the bottom of the icon image.

![](/media/messaging-api/flex-message-layout/baseline.png){className="[\"border\"]"}

#### Unavailable properties

You can't use the properties `gravity` and `offsetBottom` in child components of a baseline box component.

## Available child components

A box's `layout` property determines which components you can use as child components of a box component:

|                                                                                         | Baseline box | Horizontal box   Vertical box |
| --------------------------------------------------------------------------------------- | ------------ | ----------------------------- |
| [Box](/reference/messaging-api/#box)                                                    | ❌            | ✅                             |
| [Button](/reference/messaging-api/#button)                                              | ❌            | ✅                             |
| [Image](/reference/messaging-api/#f-image)                                              | ❌            | ✅                             |
| [Icon](/reference/messaging-api/#icon)                                                  | ✅            | ❌                             |
| [Text](/reference/messaging-api/#f-text)                                                | ✅            | ✅                             |
| [Span](/reference/messaging-api/#span)   (Using as a child of a text component is okay) | ❌            | ❌                             |
| [Separator](/reference/messaging-api/#separator)                                        | ❌            | ✅                             |
| [Filler](/reference/messaging-api/#filler) (deprecated)                                 | ✅            | ✅                             |

✅: You can use this component in the box ❌: You can't use the component in the box

## Component size

If a component's `position` property is set to `relative`, the component's width and height are determined by the `flex` property of the component.

- [Width allocation in a horizontal box](#horizontal-box)
- [Height allocation in a vertical box](#vertical-box)
- [Box width](#box-width)
- [Maximum width of a box](#box-max-width)
- [Box height](#box-height)
- [Maximum height of a box](#box-max-height)
- [Image size](#image-size)
- [Icon, text, and span size](#other-component-size)
- [Size of other components](#other-component)
- [Automatically shrink fonts to fit](#adjusts-fontsize-to-fit)
- [Scaling to size according to the font size setting](#size-scaling)

### Width allocation in a horizontal box

Child components in a horizontal box that have the `flex` property set to `1` or greater share the parent box's width with sibling components. The default value of the `flex` property is `1`. The proportion of width each child component gets is determined by the value of the child component's `flex` property against the sum of the values of the `flex` properties.

Suppose a horizontal box has two components, one with the `flex` property set to `2` and the other to `3`. Then the available width (the width of the horizontal box) is divided at a ratio of two to three and allocated to each component.

![](/media/messaging-api/flex-message-layout/flexSample1.png){className="[\"border\"]"}

The JSON definition of this Flex Message example is as follows.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "wrap": true,
        "color": "#ff0000",
        "flex": 2
      },
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "wrap": true,
        "color": "#0000ff",
        "flex": 3
      }
    ]
  }
}
```

If a component's `flex` property is `0`, the component occupies the width required to show all of the component's content, within the box's width. However, the part that goes outside the box's width isn't displayed.

For example, suppose we have a horizontal box with three child components, each with its `flex` property set to `0`, `2`, and `3`, respectively. The first component has the `flex` property set to `0`, so the component takes up the width to fit its text, "Hello". Then the rest of the available width is shared between the remaining two components, in the ratio of 2 to 3, as illustrated below.

![](/media/messaging-api/flex-message-layout/flexSample2.png){className="[\"border\"]"}

The JSON definition of this Flex Message example is as follows.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "text",
        "text": "Hello",
        "color": "#00ff00",
        "flex": 0
      },
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "wrap": true,
        "color": "#ff0000",
        "flex": 2
      },
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "wrap": true,
        "color": "#0000ff",
        "flex": 3
      }
    ]
  }
}
```

::admonition{title="The flex property and CSS flexbox" type="tip"}
The `flex` property of a child component in a horizontal box matches the `flex` property of CSS flexbox as follows:

| Value of the `flex` property of Flex Message's child component | Corresponding CSS flexbox style                                       |
| -------------------------------------------------------------- | --------------------------------------------------------------------- |
| `0`                                                            | `flex: 0 0 auto;`                                                     |
| `0` or greater                                                 | `flex: X 0 0;` (where X is the value of the child component's `flex`) |
::

### Height allocation in a vertical box

Child components in a vertical box that have the `flex` property set to `1` or greater share the parent box's height with sibling components. The default value of the `flex` property is `0`. The proportion of height each child component gets is decided by the value of their `flex` property against the sum of the values of the `flex` properties.

In the example below, a horizontal box has two vertical boxes. The first vertical box has a text that takes up five lines and the second vertical box has two pieces of texts and three separators.

![](/media/messaging-api/flex-message-layout/flexSample5.png){className="[\"border\"]"}

Each component is laid out according to the rules given below:

1. The vertical box on the left has a height of five rows. This sets the height of the vertical box on the right to be the same.
2. The child components in the vertical box on the right don't need to occupy the whole height, resulting in some free space.
3. The free space is split up and assigned to the two text components at a 2:3 ratio based on the value of their `flex` property (`2` and `3`, respectively).

The JSON definition of this Flex Message example is as follows.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "wrap": true,
            "text": "TEXT\nTEXT\nTEXT\nTEXT\nTEXT"
          }
        ],
        "backgroundColor": "#c0c0c0"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "separator",
            "color": "#ff0000"
          },
          {
            "type": "text",
            "text": "flex=2",
            "flex": 2
          },
          {
            "type": "separator",
            "color": "#ff0000"
          },
          {
            "type": "text",
            "text": "flex=3",
            "flex": 3
          },
          {
            "type": "separator",
            "color": "#ff0000"
          }
        ]
      }
    ]
  }
}
```

::admonition{title="The flex property and CSS flexbox" type="tip"}
The `flex` property of a child component in a vertical box matches the `flex` of CSS flexbox as follows:

| Value of the `flex` property of Flex Message's child component | Corresponding CSS flexbox style                                          |
| -------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `0`                                                            | `flex: 0 0 auto;`                                                        |
| `0` or greater                                                 | `flex: X 0 auto;` (where X is the value of the child component's `flex`) |
::

### Box width

You can specify a box width with the `width` property, in pixels or as a percentage to the parent component's width. If you specify the width of a child box inside a horizontal box, the child box's `flex` property is set to `0`.

::admonition{title="Width property in pixels" type="note"}
A bubble's width depends on the size of the device screen. If you specify the `width` property in pixels to adjust the overall layout of a bubble, you may have an unexpected layout in the end. We recommend that you use the `flex` property to be less affected by the device screen size.
::

### Maximum width of a box

You can specify the maximum width of a box with the `maxWidth` property, in pixels or as a percentage to the parent component's width. The `maxWidth` takes precedence over the `width` property. The box width is set to the value of the `maxWidth` property if the width calculated with the `width` property is greater than the one calculated with the maximum.

### Box height

You can specify the box height with the `height` property, in pixels or as a percentage to the parent component's height. If you specify the height of a child box inside a horizontal box, the child box's `flex` property is set to `0`.

### Maximum height of a box

You can specify the maximum height of a box with the `maxHeight` property, in pixels or as a percentage to the parent component's height. The `maxHeight` takes precedence over the `height` property. The box height is set to the value of `maxHeight` property if the height calculated with the `height` property is greater than the one calculated with the maximum.

### Image size

You can set the width of an [image component](/reference/messaging-api/#f-image) with the `size` property, in pixels, as a percentage, or with a keyword. The height is automatically adjusted to retain the aspect ratio (specified in the `aspectRatio` property).

| Unit       | Accepted values                                                                                                                  | Examples        |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Percentage | Percentage to the original image's width, expressed as a positive integer or decimal number suffixed with `%`.                   | `50%` `23.5%`   |
| Pixels     | Positive integer or decimal number suffixed with `px`.                                                                           | `50px` `23.5px` |
| Keywords   | Any of these values, listed in order of increasing size: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `3xl`, `4xl`, `5xl`, `full` | `md` (Default)  |

### Icon, text, and span size

You can specify the size for [icon](/reference/messaging-api/#icon), [text](/reference/messaging-api/#f-text), and [span](/reference/messaging-api/#span) components with the `size` property, in pixels or with a keyword. You can't specify a percentage.

| Unit     | Accepted values                                                                                                          | Examples        |
| -------- | ------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Pixels   | Positive integer or decimal number suffixed with `px`.                                                                   | `50px` `23.5px` |
| Keywords | Any of these values, listed in order of increasing size: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `3xl`, `4xl`, `5xl` | `md` (Default)  |

### Size of other components

For components such as button, you can specify the component size with a property other than `flex`. For more information on the JSON schema, see [Flex Message](/reference/messaging-api/#flex-message) in the Messaging API reference.

### Automatically shrink fonts to fit

If you specify a value of `shrink-to-fit` for the `adjustMode` property of [button](/reference/messaging-api/#button) and [text](/reference/messaging-api/#f-text) components, the text's font size will automatically shrink to fit. The `adjustMode` property takes a "best-effort" approach that may work differently—or not at all!—on some platforms.

![](/media/messaging-api/flex-message-layout/adjusts-fontsize-to-fit.png){className="[\"border\",\"w-fix-240\"]"}

### Scaling to size according to the font size setting

If you set the `scaling` property to `true` of a Flex Message [button](/reference/messaging-api/#button), [text](/reference/messaging-api/#f-text), or [icon](/reference/messaging-api/#icon), you can automatically scale the font size and icon size according to the font size setting of the LINE app. This allows you to send messages with accessibility in mind.

| Example of font size **Small**                                                                                    | Example of font size **Extra large**                                                                                    |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![](/media/messaging-api/flex-message-layout/scaling-sample-small-en.jpg){className="[\"border\",\"w-fix-240\"]"} | ![](/media/messaging-api/flex-message-layout/scaling-sample-extra-large-en.jpg){className="[\"border\",\"w-fix-240\"]"} |

The JSON definition of this Flex Message example is as follows.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "hello, world",
        "size": "30px"
      },
      {
        "type": "text",
        "text": "hello, world",
        "margin": "10px",
        "size": "30px",
        "scaling": true
      }
    ]
  }
}
```

::admonition
---
title: Using automatically shrink fonts at the same time.
type: tip
---
In a button and text, you can set the `scaling` property to `true` and the `adjustMode` property to `shrink-to-fit`. In this case, when the text width exceeds the component width due to the automatic scaling of the font size, the font size will be shrunk to fit the component width.

The following is an example of the **Extra Large** font size of the LINE app.

| dummy                                                                                                              | dummy                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/media/messaging-api/flex-message-layout/scaling-sample-small-tip.png){className="[\"border\",\"w-fix-360\"]"} | 1. Default 2. If the `scaling` property is set to `true` 3. If the `scaling` property is set to `true` and the `adjustMode` property is set to `shrink-to-fit` |
::

## Component position

If a box with child components has a remaining space, you can align each child component [horizontally](#align-property) or [vertically](#gravity-property).

To position child components, use the parent component's [padding](#padding-property) or the child component's [`margin` property](#margin-property). You can distribute child components on the [main axis](#justify-content) and also on [cross axis](#align-items). [Offset](#component-offset) is another option you can use to position your child components.

### Horizontally align text or images

To align your [text](/reference/messaging-api/#f-text) or [image](/reference/messaging-api/#f-image) components horizontally, use the `align` property. The orientation of the parent component has no effect on this property. Available alignment options are:

- Align to the left: `start`
- Align to the right: `end`
- Align at the center: `center` (Default)

![](/media/messaging-api/flex-message-layout/alignSample.png){className="[\"border\"]"}

The JSON definition of this Flex Message example is as follows.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "align=start",
        "align": "start"
      },
      {
        "type": "separator",
        "color": "#ff0000"
      },
      {
        "type": "text",
        "text": "align=center",
        "align": "center"
      },
      {
        "type": "separator",
        "color": "#ff0000"
      },
      {
        "type": "text",
        "text": "align=end",
        "align": "end"
      }
    ]
  }
}
```

### Vertically align text, images, or button

To align your [text](/reference/messaging-api/#f-text), [image](/reference/messaging-api/#f-image), or [button](/reference/messaging-api/#button) components vertically, use the `gravity` property. The orientation of the parent component has no effect on this property. Available alignment options are:

- Align to the top: `top` (Default)
- Align to the bottom: `bottom`
- Align at the middle: `center`

::admonition{title="Note" type="note"}
The `gravity` property is ignored if the component is a child of a [baseline box](#baseline-box).
::

![](/media/messaging-api/flex-message-layout/gravitySample.png){className="[\"border\"]"}

The JSON definition of this Flex Message example is as follows.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "wrap": true,
            "text": "TEXT\nTEXT\nTEXT\nTEXT\nTEXT"
          }
        ],
        "backgroundColor": "#c0c0c0"
      },
      {
        "type": "text",
        "text": "top",
        "gravity": "top"
      },
      {
        "type": "separator",
        "color": "#ff0000"
      },
      {
        "type": "text",
        "text": "center",
        "gravity": "center"
      },
      {
        "type": "separator",
        "color": "#ff0000"
      },
      {
        "type": "text",
        "text": "bottom",
        "gravity": "bottom"
      },
      {
        "type": "separator",
        "color": "#ff0000"
      }
    ]
  }
}
```

### Position child component with box padding

You can position your child component in a box component with the padding of the box component. Padding allocates space between the parent component's border and the child component. Available padding properties are `paddingAll`, `paddingTop`, `paddingBottom`, `paddingStart`, and `paddingEnd`. Padding can be specified in pixels, percentage (to the parent box width) or with a keyword.

| Unit       | Accepted values                                                                                                   | Examples        |
| ---------- | ----------------------------------------------------------------------------------------------------------------- | --------------- |
| Percentage | Percentage to the parent box's width, with a positive integer or decimal number suffixed with `%`.                | `50%` `23.5%`   |
| Pixels     | Positive integer or decimal number suffixed with `px`.                                                            | `50px` `23.5px` |
| Keywords   | Any of these values, listed in order of increasing size: `none` (no padding), `xs`, `sm`, `md`, `lg`, `xl`, `xxl` | `md` (Default)  |

The properties `paddingTop`, `paddingBottom`, `paddingStart`, and `paddingEnd` take precedence over the `paddingAll` property. If properties `paddingTop`, `paddingBottom`, `paddingStart`, or `paddingEnd` are specified, the `paddingAll` property is ignored.

![](/media/messaging-api/flex-message-layout/paddingSample.png){className="[\"border\"]"}

The JSON definition of this Flex Message example is as follows.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "hello, world"
          }
        ],
        "backgroundColor": "#ffffff"
      }
    ],
    "backgroundColor": "#ffd2d2",
    "paddingTop": "20px",
    "paddingAll": "80px",
    "paddingStart": "40px"
  }
}
```

A longer text with the same padding is displayed as shown below.

![](/media/messaging-api/flex-message-layout/paddingSample2.png){className="[\"border\"]"}

### Child component arrangement with free space

You can arrange child components with the remaining space in a [box](/reference/messaging-api/#box), by axis. Learn how to distribute child components by the [main axis](#justify-content) and [cross axis](#align-items).

::admonition
---
title: >-
  The direction of the main and cross axes are determined by the parent box
  component
type: tip
---
The properties `justifyContent` and `alignItems` set how child components are placed along the main and cross axes, respectively. The direction of the main and cross axes are determined by the parent box component.

![](/media/messaging-api/flex-message-layout/horizontal_vertical_axis_en.png)

The text direction (`LTR` or `RTL`) is always applied horizontally no matter what the orientation of the parent box component is.
::

#### Distribute child components on main axis

To distribute child components in a box along the main axis, use the `justifyContent` property. The direction of the main axis is horizontal for horizontal boxes and vertical for vertical boxes. For this property to take effect, the `flex` property of all child components must be `0`. Because if any one of the child components have the `flex` property of `1` or greater, then child components expand to fill the parent box. This means that there is no space to distribute child components. Be aware that by default, child components in a horizontal box gets `1` for the `flex` property.

See how child components in a horizontal box with LTR text direction are distributed by the value of the `justifyContent` property.

![](/media/messaging-api/flex-message-layout/justify-content-01.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![](/media/messaging-api/flex-message-layout/justify-content-02.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![](/media/messaging-api/flex-message-layout/justify-content-03.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![](/media/messaging-api/flex-message-layout/justify-content-04.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![](/media/messaging-api/flex-message-layout/justify-content-05.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![](/media/messaging-api/flex-message-layout/justify-content-06.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}

| Property value                                       | Child component distribution                                                                                                                                                                 |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `flex-start`{className="[\"whitespace-nowrap\"]"}    | Horizontal box: Grouped at where the text begins in the parent component   Vertical box: Grouped toward the top of the parent component                                                      |
| `center`{className="[\"whitespace-nowrap\"]"}        | Grouped at the center of the parent component                                                                                                                                                |
| `flex-end`{className="[\"whitespace-nowrap\"]"}      | Horizontal box: Grouped at where the text ends in the parent component   Vertical box: Grouped toward the bottom of the parent component                                                     |
| `space-between`{className="[\"whitespace-nowrap\"]"} | Evenly distributed in the parent component, with the first and last child components at each edge of the parent component. The gap between child components are even.                        |
| `space-around`{className="[\"whitespace-nowrap\"]"}  | Evenly distributed in the parent component. Remaining space in the parent component is divided by 2 x number of components. Each child component gets a divided space on its left and right. |
| `space-evenly`{className="[\"whitespace-nowrap\"]"}  | Evenly distributed in the parent box. Remaining space in the parent component is evenly distributed between both sides of each child component.                                              |

The JSON definition of a Flex Message set with `flex-start` is as follows.

```json
{
  "type": "bubble",
  "direction": "ltr",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "width": "40px",
        "height": "30px",
        "backgroundColor": "#00aaff",
        "flex": 0
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "width": "20px",
        "height": "30px",
        "backgroundColor": "#00aaff",
        "flex": 0
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "height": "30px",
        "width": "50px",
        "backgroundColor": "#00aaff",
        "flex": 0
      }
    ],
    "justifyContent": "flex-start",
    "spacing": "5px"
  }
}
```

#### Arranging child components along the cross axis with the `alignItems` property

To distribute child components in a box along the cross axis, use the `alignItems` property. The direction of the cross axis is vertical for horizontal boxes and horizontal for vertical boxes.

See how child components in a horizontal box with LTR text direction are distributed by the value of the `alignItems` property.

![](/media/messaging-api/flex-message-layout/alignItems-01.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![](/media/messaging-api/flex-message-layout/alignItems-02.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![](/media/messaging-api/flex-message-layout/alignItems-03.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}

| Property value                                    | Child component distribution                                                                                                      |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `flex-start`{className="[\"whitespace-nowrap\"]"} | Horizontal box: Aligned at the top of the parent component   Vertical box: Grouped at where text begins in the parent component   |
| `center`{className="[\"whitespace-nowrap\"]"}     | Located at the middle of the parent component                                                                                     |
| `flex-end`{className="[\"whitespace-nowrap\"]"}   | Horizontal box: Grouped at the bottom of the parent component.   Vertical box: Grouped at where text ends in the parent component |

The JSON definition of a Flex Message set with `flex-start` is as follows.

```json
{
  "type": "bubble",
  "direction": "ltr",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "height": "100px",
        "backgroundColor": "#00aaff",
        "flex": 0,
        "width": "85px"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "height": "30px",
        "backgroundColor": "#00aaff",
        "flex": 0,
        "width": "85px"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "height": "60px",
        "backgroundColor": "#00aaff",
        "flex": 0,
        "width": "85px"
      }
    ],
    "spacing": "5px",
    "alignItems": "flex-start",
    "height": "200px"
  }
}
```

### `spacing` property for boxes

You can specify the minimum space between two components with the `spacing` property of the parent box component, in pixels or with a keyword. You can't specify a percentage.

| Unit     | Accepted values                                                                                                 | Examples        |
| -------- | --------------------------------------------------------------------------------------------------------------- | --------------- |
| Pixels   | Positive integer or decimal number suffixed with `px`.                                                          | `50px` `23.5px` |
| Keywords | Any of these values, listed in order of increasing size: `none` (no space), `xs`, `sm`, `md`, `lg`, `xl`, `xxl` | `md`            |

This example Flex Message has a horizontal box with three vertical boxes as child components, spaced evenly (`md`).

![](/media/messaging-api/flex-message-layout/spacingSample.png){className="[\"border\"]"}

The JSON definition of this Flex Message example is as follows.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "spacing": "md",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "TEXT1"
          }
        ],
        "backgroundColor": "#80ffff"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "TEXT2"
          }
        ],
        "backgroundColor": "#80ffff"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "TEXT3"
          }
        ],
        "backgroundColor": "#80ffff"
      }
    ]
  }
}
```

To override this setting for a specific component, set the `margin` property of that component.

### `margin` property of components

You can specify the minimum space before a child component with the `margin` property of the child component, in pixels or with a keyword. You can't specify a percentage.

| Unit     | Accepted values                                                                                                  | Examples        |
| -------- | ---------------------------------------------------------------------------------------------------------------- | --------------- |
| Pixels   | Positive integer or decimal number suffixed with `px`.                                                           | `50px` `23.5px` |
| Keywords | Any of these values, listed in order of increasing size: `none` (no margin), `xs`, `sm`, `md`, `lg`, `xl`, `xxl` | `md`            |

The `margin` property takes precedence over the parent box's [`spacing` property](#spacing-property). Also, if the `margin` property is specified for the first child component in a box, the space is allocated before the component.

This example Flex Message has a horizontal box with three vertical boxes as child components. The parent horizontal box has the `spacing` property set to `md`. The third vertical box has the `margin` property set to `xxl`.

![](/media/messaging-api/flex-message-layout/marginSample.png){className="[\"border\"]"}

The JSON definition of this Flex Message example is as follows.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "spacing": "md",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "TEXT1"
          }
        ],
        "backgroundColor": "#80ffff"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "TEXT2"
          }
        ],
        "backgroundColor": "#80ffff"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "TEXT3"
          }
        ],
        "backgroundColor": "#80ffff",
        "margin": "xxl"
      }
    ]
  }
}
```

### Offset

A different option to position your component is using offset. The offset properties work differently by the value of the parent component's `position` property, which can be `relative` or `absolute`. But the first child component of a [block](/docs/messaging-api/flex-message-elements/#block) can't be `absolute`.

The offset properties you can use are `offsetTop`, `offsetBottom`, `offsetStart`, and `offsetEnd`. You can specify the property value in pixels, or keywords (`none`, `xs`, `sm`, `md`, `lg`, `xl`, or `xxl`). You can also specify the percentage to the box width for `offsetStart` and `offsetEnd` and to the box height for `offsetTop` and `offsetBottom`.

Learn how offset changes the position of the box labeled as "TARGET" below.

![](/media/messaging-api/flex-message-layout/offsetSample1.png){className="[\"border\"]"}

The JSON definition of this Flex Message example is as follows.

```json
{
  "type": "bubble",
  "direction": "ltr",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "REFERENCE BOX\n1\n2\n3",
            "align": "center",
            "wrap": true
          }
        ],
        "backgroundColor": "#80ffff"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "TARGET"
          }
        ],
        "backgroundColor": "#ff8080"
      }
    ]
  }
}
```

#### Offset when position is relative

To shift your component from the component's original position, set the `position` property to `relative`. For more information, see [Relative positioning](https://www.w3.org/TR/css-position-3/#relpos-insets){rel="[\"nofollow\"]"} of CSS Positioned Layout Module Level 3.

| Property                                            | Description                                                                                                                                                                               |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `offsetTop`{className="[\"whitespace-nowrap\"]"}    | Shifts the component down from the top edge of the component's original position.                                                                                                         |
| `offsetBottom`{className="[\"whitespace-nowrap\"]"} | Shifts the component up from the bottom edge of the component's original position.                                                                                                        |
| `offsetStart`{className="[\"whitespace-nowrap\"]"}  | Shifts the component away from the where the text starts. If the [bubble](/reference/messaging-api/#bubble)'s text direction is LTR, shift is to the right. If RTL, shift is to the left. |
| `offsetEnd`{className="[\"whitespace-nowrap\"]"}    | Away from the where the text ends. If the [bubble](/reference/messaging-api/#bubble)'s text direction is LTR, shift is to the left. If RTL, shift is to the right.                        |
|                                                     |                                                                                                                                                                                           |

The component labeled "TARGET" in its original position is shown on the first image. The component shifted by the `position` and offset properties are shown on the second image.

![](/media/messaging-api/flex-message-layout/offsetSample1.png)![](/media/messaging-api/flex-message-layout/offsetSample2.png)

To shift your component like in the example, set the properties as specified below.

| Property       | Value      |
| -------------- | ---------- |
| `position`     | `relative` |
| `offsetTop`    | `10px`     |
| `offsetBottom` | -          |
| `offsetStart`  | `40px`     |
| `offsetEnd`    | -          |
|                |            |

The JSON definition of the Flex Message example is as follows.

```json
{
  "type": "bubble",
  "direction": "ltr",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "REFERENCE BOX\n1\n2\n3",
            "align": "center",
            "wrap": true
          }
        ],
        "backgroundColor": "#80ffff"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "TARGET"
          }
        ],
        "backgroundColor": "#ff8080",
        "offsetTop": "10px",
        "offsetStart": "40px",
        "position": "relative"
      }
    ]
  }
}
```

#### Offset when position is absolute

To shift your component from the parent component's edges, set the `position` property to `absolute`. For more information, see [Absolute positioning](https://www.w3.org/TR/css-position-3/#abs-pos){rel="[\"nofollow\"]"} of CSS Positioned Layout Module Level 3.

| Property                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `offsetTop`                                                                                                       | Specifies the relative position from the upper end of the parent component to the upper end of the component.     |
| `offsetBottom`                                                                                                    | Specifies the relative position from the lower end of the parent component to the lower end of the component.     |
| `offsetStart`                                                                                                     | If the text directionality in the [bubble](https://developers.line.biz/en/reference/messaging-api/#bubble) is LTR | Specifies the relative position from the left end of the parent component to the left end of the component. |
| If the text directionality in the [bubble](https://developers.line.biz/en/reference/messaging-api/#bubble) is RTL | Specifies the relative position from the right end of the parent component to the right end of the component.     |
| `offsetEnd`                                                                                                       | If the text directionality in the [bubble](https://developers.line.biz/en/reference/messaging-api/#bubble) is LTR | Specifies the relative position from the right end of the parent component to the right end of the component. |
| If the text directionality in the [bubble](https://developers.line.biz/en/reference/messaging-api/#bubble) is RTL | Specifies the relative position from the left end of the parent component to the left end of the component.       |

::admonition{title="Note" type="note"}
If you don't specify the offset properties, the position of the component may vary by device. We recommend that you specify the offsets both vertically (`offsetTop` or `offsetBottom`) and horizontally (`offsetStart` or `offsetEnd`).
::

The component labeled "TARGET" in its original position is shown on the first image. The component shifted by the `position` and offset properties are shown on the second image.

![](/media/messaging-api/flex-message-layout/offsetSample1.png)![](/media/messaging-api/flex-message-layout/offsetSample3.png)

To shift your component like the example, set the properties as specified below.

| Property       | Value      |
| -------------- | ---------- |
| `position`     | `absolute` |
| `offsetTop`    | `10px`     |
| `offsetBottom` | `20px`     |
| `offsetStart`  | `40px`     |
| `offsetEnd`    | `80px`     |
|                |            |

The JSON definition of the Flex Message example is as follows.

```json
{
  "type": "bubble",
  "direction": "ltr",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "REFERENCE BOX\n1\n2\n3",
            "align": "center",
            "wrap": true
          }
        ],
        "backgroundColor": "#80ffff"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "TARGET"
          }
        ],
        "backgroundColor": "#ff8080",
        "position": "absolute",
        "offsetStart": "40px",
        "offsetEnd": "80px",
        "offsetTop": "10px",
        "offsetBottom": "20px"
      }
    ]
  }
}
```

##### Size of child and parent components with absolute position

A child box component with the `position` property set to `absolute` doesn't change the size of the parent component. Likewise, the component isn't resized by the parent component. If a component is larger than the parent component, the parts that fall outside the parent component isn't displayed.

Let's compare the effect of absolute and relative positions. The "REFERENCE BOX" component, a horizontal box on the first image has its position set to relative. The same component with the position set to absolute is shown on the second image.

![](/media/messaging-api/flex-message-layout/offsetSample1.png)![](/media/messaging-api/flex-message-layout/offsetSample4.png)

As you can see on the example on the second image, the size of "REFERENCE BOX" doesn't affect the size of the parent component (vertical box), and is also not affected by the parent component. Therefore, the portions larger than the parent component (rows "2" and "3") aren't displayed. Moreover, the free space on the left and right that has become larger due to the effect of the parent component (free space) returns to its original size (width of the text "REFERENCE BOX").

## Linear gradient backgrounds

You can set the background of a [box](/reference/messaging-api/#box) component with a linear gradient. Specify `linearGradient` for the `background.type` property. Learn how to set the gradient [angle](#linear-gradient-bg-angle) and [color stops](#linear-gradient-bg-center-color).

::admonition
---
title: >-
  The parent component's text direction doesn't affect the direction of the
  gradient
type: note
---
The parent component's text direction (`LTR` or `RTL`) has no effect on the direction of the gradient.
::

### Angle of linear gradient

You can specify the linear gradient's angle as an integer or decimal number from 0 to less than 360 degrees. To set the angle to 90 degrees, specify the angle as `90deg` and `23.5deg` for 23.5 degrees. The direction of gradient changes by the angle:

- 0 degrees: Bottom to top
- 45 degrees: Bottom left to top right
- 90 degrees: Left to right
- 180 degrees: Top to bottom

The direction rotates clockwise as the angle increases.

**Linear gradient at 0 degrees (Bottom to top)**

![](/media/messaging-api/flex-message-layout/linear-gradient-bg-deg-0.png){className="[\"border\",\"w-fix-240\"]"}

The JSON definition of the Flex Message example is as follows.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [],
    "background": {
      "type": "linearGradient",
      "angle": "0deg",
      "startColor": "#ff0000",
      "endColor": "#0000ff"
    },
    "height": "200px"
  }
}
```

**Linear gradient at 45 degrees (Bottom-left to top-right)**

![](/media/messaging-api/flex-message-layout/linear-gradient-bg-deg-45.png){className="[\"border\",\"w-fix-240\"]"}

**Linear gradient at 90 degrees (Left to right)**

![](/media/messaging-api/flex-message-layout/linear-gradient-bg-deg-90.png){className="[\"border\",\"w-fix-240\"]"}

**Linear gradient at 180 degrees (Top to bottom)**

![](/media/messaging-api/flex-message-layout/linear-gradient-bg-deg-180.png){className="[\"border\",\"w-fix-240\"]"}

For more information, see [Box](/reference/messaging-api/#box) in the Messaging API reference.

### Gradient color stops

To add a color stop to a gradient, that is, to make the gradient have three colors, specify the `centerColor` property. You can specify the `centerPosition` property for the position of the color stop.

**Color stop at the 10% mark**

![Three-color gradient with an intermediate color stop at the 10% mark from the starting point](/media/messaging-api/flex-message-layout/linear-gradient-bg-percent-10.png){className="[\"border\",\"w-fix-240\"]"}

The JSON definition of the Flex Message example is as follows.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [],
    "background": {
      "type": "linearGradient",
      "angle": "0deg",
      "startColor": "#ff0000",
      "centerColor": "#0000ff",
      "endColor": "#00ff00",
      "centerPosition": "10%"
    },
    "height": "200px"
  }
}
```

**Color stop at the 50% mark**

![Three-color gradient with an intermediate color stop at the 50% mark from the starting point](/media/messaging-api/flex-message-layout/linear-gradient-bg-percent-50.png){className="[\"border\",\"w-fix-240\"]"}

**Color stop at the 90% mark**

![Three-color gradient with an intermediate color stop at the 90% mark from the starting point](/media/messaging-api/flex-message-layout/linear-gradient-bg-percent-90.png){className="[\"border\",\"w-fix-240\"]"}

## Rendering order

Components are rendered in the order specified in JSON. The component in the beginning of the JSON definition is rendered first. And then the next component is rendered on top of the previous component. So the last component is rendered at the very top layer of the bubble.

To change the rendering order, change the order of components in the JSON definition.

## Learn more

- [Send Flex Messages](/docs/messaging-api/using-flex-messages/)
- [Flex Message elements](/docs/messaging-api/flex-message-elements/)
- [Flex Message](/reference/messaging-api/#flex-message) (Messaging API reference)
