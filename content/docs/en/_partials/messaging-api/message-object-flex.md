---
title: Message Object Flex
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/message-object-flex
__hash__: EXrMMQxosPOcCrpAYj8w2tkjzYsBmDXf2rC7SB9Z_c0
seo:
  description: ''
---

### Flex Message

::reference-with-code
  :::reference-content
  Flex Messages are messages with a customizable layout. You can customize the layout freely based on the specification for [CSS Flexible Box (CSS Flexbox)](https://www.w3.org/TR/css-flexbox-1/){rel="[\"nofollow\"]"}. For more information, see [Send Flex Messages](/docs/messaging-api/using-flex-messages/) in the Messaging API documentation.

  - [Container](#container)
    - [Bubble](#bubble)
    - [Carousel](#f-carousel)
  - [Component](#flex-component)
    - [Box](#box)
    - [Button](#button)
    - [Image](#f-image)
    - [Video](#f-video)
    - [Icon](#icon)
    - [Text](#f-text)
    - [Span](#span)
    - [Separator](#separator)
    - [Filler](#filler) (deprecated)

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `flex`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      altText

      #undefined
      String

      Alternative text. When a user receives a message, it will appear in the device's notifications, talk list, and [quote messages](/docs/messaging-api/sending-messages/#send-quote-messages) as an alternative to the Flex Message.  

      You can include Unicode emojis.  

      Max character limit: 1500
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      contents

      #undefined
      Object

      Flex Message [container](#container)
      :::::
    ::::
  :::

  :::reference-code
  *Flex Message example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "flex",
        "altText": "this is a flex message",
        "contents": {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "hello"
              },
              {
                "type": "text",
                "text": "world"
              }
            ]
          }
        }
      }
      ```
      :::::
    ::::
  :::
::

#### Operating environment

Flex Messages are supported in all LINE versions. The features listed below aren't supported in all LINE versions:

| Feature                                                                                                                                                                                                                                                          | LINE for iOS   LINE for Android | LINE for PC   (macOS, Windows) |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------ |
| - `maxWidth` property of [box](/reference/messaging-api/#box) - `maxHeight` property of [box](/reference/messaging-api/#box) - `lineSpacing` property of [text](/reference/messaging-api/#f-text) - [Video](/reference/messaging-api/#f-video) *1                | 11.22.0 or later                | 7.7.0 or later                 |
| - The `deca` and `hecto` values in the `size` property of [bubble](/reference/messaging-api/#bubble) *2 - `scaling` property of [button](/reference/messaging-api/#button), [text](/reference/messaging-api/#f-text), and [icon](/reference/messaging-api/#icon) | 13.6.0 or later                 | 7.17.0 or later                |

*1 To make the video component in Flex Messages rendered properly on versions that don't support the video component, specify the `altContent` property. The image you specify in this property gets displayed instead.

*2 If the version of LINE is lower than the version that supports `deca` and `hecto`, the size of the bubble will be displayed as `kilo`.

#### Container

Container is the top-level building block of Flex Messages. Available container types are:

- [Bubble](#bubble)
- [Carousel](#f-carousel)

For JSON samples and usage of containers, see [Flex Message elements](/docs/messaging-api/flex-message-elements/) in the API documentation.

##### Bubble

::reference-with-code
  :::reference-content
  Bubble is a container that contains only one instance of a message bubble. It can contain four blocks: header, hero, body, and footer. For more information about using each block, see [Block](/docs/messaging-api/flex-message-elements/#block) in the API documentation.

  The maximum size of JSON data that defines a bubble is 30 KB.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `bubble`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      size

      #undefined
      String

      The size of the bubble. You can specify one of the following values: `nano`, `micro`, `deca`, `hecto`, `kilo`, `mega`, or `giga`. The default value is `mega`.

      `deca` and `hecto` are supported on the following version of LINE:

      - LINE for iOS and Android: 13.6.0 or later
      - LINE for macOS and Windows: 7.17.0 or later

      If the version of LINE is lower than the version that supports `deca` and `hecto`, the size of the bubble will be displayed as `kilo`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      direction

      #undefined
      String

      Text directionality and the direction of placement of components in horizontal boxes. Specify one of the following values:

      - `ltr`: The text is left-to-right horizontal writing, and the components are placed from left to right
      - `rtl`: The text is right-to-left horizontal writing, and the components are placed from right to left

      The default value is `ltr`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      header

      #undefined
      Object

      Header block. Specify a [Box](#box).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      hero

      #undefined
      Object

      Hero block. Specify a [box](#box), an [image](#f-image) or a [video](#f-video).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      body

      #undefined
      Object

      Body block. Specify a [Box](#box).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      footer

      #undefined
      Object

      Footer block. Specify a [Box](#box).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      styles

      #undefined
      Object

      Style of each block. Specify a [bubble style](#bubble-style).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      action

      #undefined
      Object

      Action performed when this image is tapped. Specify an [action object](#action-objects).
      :::::
    ::::
  :::

  :::reference-code
  *Bubble example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Header text"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://example.com/flex/images/image.jpg"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Body text"
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Footer text"
            }
          ]
        },
        "styles": {
          "comment": "See the example of a bubble style object"
        }
      }
      ```
      :::::
    ::::
  :::
::

##### Objects for the block style

::reference-with-code
  :::reference-content
  Use the following two objects to define the style of blocks in a bubble.
  :::

  :::reference-code
  *Example of a bubble style and block style*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      "styles": {
          "header": {
            "backgroundColor": "#00ffff"
          },
          "hero": {
            "separator": true,
            "separatorColor": "#000000"
          },
          "footer": {
            "backgroundColor": "#00ffff",
            "separator": true,
            "separatorColor": "#000000"
          }
        }
      ```
      :::::
    ::::
  :::
::

###### Bubble style

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  header

  #undefined
  Object

  Header block. Specify a [block style](#block-style).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  hero

  #undefined
  Object

  Hero block. Specify a [block style](#block-style).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  body

  #undefined
  Object

  Body block. Specify a [block style](#block-style).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  footer

  #undefined
  Object

  Footer block. Specify a [block style](#block-style).
  :::
::

###### Block style

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  backgroundColor

  #undefined
  String

  Background color of the block. Use a hexadecimal color code.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  separator

  #undefined
  Boolean

  `true` to place a separator above the block. The default value is `false`.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  separatorColor

  #undefined
  String

  Color of the separator. Use a hexadecimal color code.
  :::
::

::admonition{title="Note" type="note"}
You cannot place a separator above the first block.
::

##### Carousel

::reference-with-code
  :::reference-content
  Carousel is a container that contains multiple bubbles. You can browse the bubbles in a carousel by scrolling sideways.

  The maximum size of JSON data that defines a carousel is 50 KB.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `carousel`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      contents

      #undefined
      Array of objects

      [Bubbles](#bubble) within a carousel. Max: 12 bubbles
      :::::
    ::::

    ::::admonition{title="Bubble width" type="note"}
    A carousel can't contain bubbles of different widths (`size` property). Each bubble in a carousel should have the same width.
    ::::

    ::::admonition{title="Bubble height" type="tip"}
    The body of each bubble will stretch to match the tallest bubble in the carousel. However, bubbles with no body will not change height.
    ::::
  :::

  :::reference-code
  *Carousel example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "First bubble"
                }
              ]
            }
          },
          {
            "type": "bubble",
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Second bubble"
                }
              ]
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Component

Component is a unit that composes a block. Available components are:

- [Box](#box)
- [Button](#button)
- [Image](#f-image)
- [Video](#f-video)
- [Icon](#icon)
- [Text](#f-text)
- [Span](#span)
- [Separator](#separator)
- [Filler](#filler) (deprecated)

For JSON samples and usage of each component, see [Flex Message elements](/docs/messaging-api/flex-message-elements/) and [Flex Message layout](/docs/messaging-api/flex-message-layout/) in the Messaging API documentation.

##### Box

::reference-with-code
  :::reference-content
  This component defines a horizontal or vertical layout orientation and holds components together. Any component can be contained, including a box. You can also include a box in a box.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `box`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      layout

      #undefined
      String

      The layout style of components in this box. For more information, see [Box component orientation](/docs/messaging-api/flex-message-layout/#box-component-orientation) in the API documentation.
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      contents

      #undefined
      Array of objects

      Components in this box. Here are the types of components available:

      - When the `layout` property is `horizontal` or `vertical`: [box](#box), [button](#button), [image](#f-image), [text](#f-text), [separator](#separator), and [filler](#filler)
      - When the `layout` property is `baseline`: [icon](#icon), [text](#f-text), and [filler](#filler)

      Components are rendered in the same order specified in the array. You may also specify an empty array.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      backgroundColor

      #undefined
      String

      Background color of the block. In addition to the RGB color, an alpha channel (transparency) can also be set. Use a hexadecimal color code. (e.g. #RRGGBBAA) The default value is `#00000000`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      borderColor

      #undefined
      String

      Color of box border. Use a hexadecimal color code.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      borderWidth

      #undefined
      String

      Width of box border. You can specify a value in pixels or any one of `none`, `light`, `normal`, `medium`, `semi-bold`, or `bold`. A value of `none` means that borders are not rendered; the other values are listed in order of increasing width.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      cornerRadius

      #undefined
      String

      Radius at the time of rounding the corners of the border. You can specify a value in pixels or any one of `none`, `xs`, `sm`, `md`, `lg`, `xl`, or `xxl`. `none` doesn't round the corner while the others increase in radius in the order of listing. The default value is `none`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      width

      #undefined
      String

      Box width. The value should be given in pixels or as a percentage of the width of the parent element. For more information, see [Box width](/docs/messaging-api/flex-message-layout/#box-width) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      maxWidth

      #undefined
      String

      Max width of the box. The value should be given in pixels or as a percentage of the width of the parent element. For more information, see [Max width of a box](/docs/messaging-api/flex-message-layout/#box-width) in the Messaging API documentation.

      This property is supported on the following version of LINE:

      - LINE for iOS and Android: 11.22.0 or later
      - LINE for macOS and Windows: 7.7.0 or later
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      height

      #undefined
      String

      Box height. The value should be given in pixels or as a percentage of the height of the parent element. For more information, see [Box height](/docs/messaging-api/flex-message-layout/#box-height) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      maxHeight

      #undefined
      String

      Max height of the box. The value should be given in pixels or as a percentage of the height of the parent element. For more information, see [Max height of a box](/docs/messaging-api/flex-message-layout/#box-height) in the Messaging API documentation.

      This property is supported on the following version of LINE:

      - LINE for iOS and Android: 11.22.0 or later
      - LINE for macOS and Windows: 7.7.0 or later
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      flex

      #undefined
      Number

      The ratio of the width or height of this component within the parent box. For more information, see [Component size](/docs/messaging-api/flex-message-layout/#component-size) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      spacing

      #undefined
      String

      Minimum space between components in this box. The default value is `none`. For more information, see [`spacing` property for boxes](/docs/messaging-api/flex-message-layout/#spacing-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      margin

      #undefined
      String

      The minimum amount of space to include before this component in its parent container. For more information, see [`margin` property of components](/docs/messaging-api/flex-message-layout/#margin-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      paddingAll

      #undefined
      String

      Free space between the borders of this box and the child element. For more information, see [Position child component with box padding](/docs/messaging-api/flex-message-layout/#padding-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      paddingTop

      #undefined
      String

      Free space between the border at the upper end of this box and the upper end of the child element. For more information, see [Position child component with box padding](/docs/messaging-api/flex-message-layout/#padding-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      paddingBottom

      #undefined
      String

      Free space between the border at the lower end of this box and the lower end of the child element. For more information, see [Position child component with box padding](/docs/messaging-api/flex-message-layout/#padding-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      paddingStart

      #undefined
      String

      - If the text directionality in the [bubble](#bubble) is LTR: Free space between the border at the left end of this box and the left end of the child element.
      - If the text directionality in the [bubble](#bubble) is RTL: Free space between the border at the right end of this box and the right end of the child element.

      For more information, see [Position child component with box padding](/docs/messaging-api/flex-message-layout/#padding-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      paddingEnd

      #undefined
      String

      - If the text directionality in the [bubble](#bubble) is LTR: Free space between the border at the right end of this box and the right end of the child element.
      - If the text directionality in the [bubble](#bubble) is RTL: Free space between the border at the left end of this box and the left end of the child element.

      For more information, see [Position child component with box padding](/docs/messaging-api/flex-message-layout/#padding-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      position

      #undefined
      String

      Reference position for placing this box. Specify one of the following values:

      - `relative`: Use the previous box as reference.
      - `absolute`: Use the top left of parent element as reference.

      The default value is `relative`. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetTop

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetBottom

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetStart

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetEnd

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      action

      #undefined
      Object

      Action performed when this image is tapped. Specify an [action object](#action-objects).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      justifyContent

      #undefined
      String

      How child elements are aligned along the main axis of the parent element. If the parent element is a horizontal box, this only takes effect when its child elements have their `flex` property set equal to 0. For more information, see [Child component arrangement with free space](/docs/messaging-api/flex-message-layout/#justify-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      alignItems

      #undefined
      String

      How child elements are aligned along the cross axis of the parent element. For more information, see [Child component arrangement with free space](/docs/messaging-api/flex-message-layout/#justify-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      background.type

      #undefined
      String

      The type of background used. Specify these values:

      - `linearGradient`: Linear gradient. For more information, see [Linear gradient backgrounds](/docs/messaging-api/flex-message-layout/#linear-gradient-bg) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      background.angle

      #undefined
      String

      The angle at which a linear gradient moves. Specify the angle using an integer value like `90deg` (90 degrees) or a decimal number like `23.5deg` (23.5 degrees) in the half-open interval [0, 360). The direction of the linear gradient rotates clockwise as the angle increases. Given a value of `0deg`, the gradient starts at the bottom and ends at the top; given a value of `45deg`, the gradient starts at the bottom-left corner and ends at the top-right corner; given a value of `90deg`, the gradient starts at the left and ends at the right; and given a value of `180deg`, the gradient starts at the top and ends at the bottom. For more information, see [Angle of linear gradient](/docs/messaging-api/flex-message-layout/#linear-gradient-bg-angle) in the Messaging API documentation.

      This is required when `background.type` is `linearGradient`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      background.startColor

      #undefined
      String

      The color at the gradient's starting point. Use a hexadecimal color code in the `#RRGGBB` or `#RRGGBBAA` format.

      This is required when `background.type` is `linearGradient`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      background.endColor

      #undefined
      String

      The color at the gradient's ending point. Use a hexadecimal color code in the `#RRGGBB` or `#RRGGBBAA` format.

      This is required when `background.type` is `linearGradient`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      background.centerColor

      #undefined
      String

      The color in the middle of the gradient. Use a hexadecimal color code in the `#RRGGBB` or `#RRGGBBAA` format. Specify a value for the `background.centerColor` property to create a gradient that has three colors. For more information, see [Intermediate color stops for linear gradients](/docs/messaging-api/flex-message-layout/#linear-gradient-bg-center-color) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      background.centerPosition

      #undefined
      String

      The position of the intermediate color stop. Specify an integer or decimal value between `0%` (the starting point) and `100%` (the ending point). This is `50%` by default. For more information, see [Intermediate color stops for linear gradients](/docs/messaging-api/flex-message-layout/#linear-gradient-bg-center-color) in the Messaging API documentation.
      :::::
    ::::
  :::

  :::reference-code
  *Box example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "image",
              "url": "https://example.com/flex/images/image.jpg"
            },
            {
              "type": "separator"
            },
            {
              "type": "text",
              "text": "Text in the box"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "width": "30px",
              "height": "30px",
              "background": {
                "type": "linearGradient",
                "angle": "90deg",
                "startColor": "#FFFF00",
                "endColor": "#0080ff"
              }
            }
          ],
          "height": "400px",
          "justifyContent": "space-evenly",
          "alignItems": "center"
        }
      }
      ```
      :::::
    ::::
  :::
::

##### Button

::reference-with-code
  :::reference-content
  This component renders a button. You can set an [action](/docs/messaging-api/actions/) to be executed when a user taps the button.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `button`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      action

      #undefined
      Object

      Action performed when this button is tapped. Specify an [action object](#action-objects).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      flex

      #undefined
      Number

      The ratio to use for the width or height of this component within the parent element. By default, a horizontal box's components have their `flex` property set equal to `1`. By default, a vertical box's components have their `flex` property set equal to `0`. For more information, see [Component size](/docs/messaging-api/flex-message-layout/#component-size) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      margin

      #undefined
      String

      The minimum amount of space to include before this component in its parent container. For more information, see [`margin` property for components](/docs/messaging-api/flex-message-layout/#margin-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      position

      #undefined
      String

      Reference for `offsetTop`, `offsetBottom`, `offsetStart`, and `offsetEnd`. Specify one of the following values:

      - `relative`: Use the previous box as reference.
      - `absolute`: Use the top left of parent element as reference.

      The default value is `relative`. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetTop

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetBottom

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetStart

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetEnd

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      height

      #undefined
      String

      Height of the button. You can specify `sm` or `md`. The default value is `md`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      style

      #undefined
      String

      Style of the button. Specify one of the following values:

      - `primary`: Style for dark color buttons
      - `secondary`: Style for light color buttons
      - `link`: HTML link style

      The default value is `link`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      color

      #undefined
      String

      Character color when the `style` property is `link`. Background color when the `style` property is `primary` or `secondary`. Use a hexadecimal color code.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      gravity

      #undefined
      String

      Alignment style in vertical direction. For more information, see [Vertically align text, images, or button](/docs/messaging-api/flex-message-layout/#gravity-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      adjustMode

      #undefined
      String

      The method by which to adjust the text font size. Specify this value:

      - `shrink-to-fit`: Automatically shrink the font size to fit the width of the component. This property takes a "best-effort" approach that may work differently—or not at all!—on some platforms. For more information, see [Automatically shrink fonts to fit](/docs/messaging-api/flex-message-layout/#adjusts-fontsize-to-fit) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      scaling

      #undefined
      Boolean

      If you set the `scaling` property to `true`, the font size of the text will be automatically scaled according to the font size setting of the LINE app. The default value is `false`. For more information, see [Scaling to size according to the font size setting](/docs/messaging-api/flex-message-layout/#size-scaling) in the Messaging API documentation.

      This property is supported on the following version of LINE:

      - LINE for iOS and Android: 13.6.0 or later
      - LINE for macOS and Windows: 7.17.0 or later
      :::::
    ::::
  :::

  :::reference-code
  *Button example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "button",
        "action": {
          "type": "uri",
          "label": "Tap me",
          "uri": "https://example.com"
        },
        "style": "primary",
        "color": "#0000ff"
      }
      ```
      :::::
    ::::
  :::
::

##### Image

::reference-with-code
  :::reference-content
  This component renders an image.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `image`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      url

      #undefined
      String

      Image URL (Max character limit: 2000)  

      Protocol: HTTPS (TLS 1.2 or later)  

      Image format: JPEG or PNG  

      Max image size: 1024 x 1024 pixels  

      Max file size: 10 MB (300 KB when the `animated` property is `true`)

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).

        ::::::admonition{title="Recommended file size" type="tip"}
        To avoid delays in displaying messages, keep the size of individual image files small (1 MB or less recommended).
        ::::::
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      flex

      #undefined
      Number

      The ratio of the width or height of this component within the parent box. For more information, see [Component size](/docs/messaging-api/flex-message-layout/#component-size) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      margin

      #undefined
      String

      The minimum amount of space to include before this component in its parent container. For more information, see [`margin` property of components](/docs/messaging-api/flex-message-layout/#margin-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      position

      #undefined
      String

      Reference for `offsetTop`, `offsetBottom`, `offsetStart`, and `offsetEnd`. Specify one of the following values:

      - `relative`: Use the previous box as reference.
      - `absolute`: Use the top left of parent element as reference.

      The default value is `relative`. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetTop

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetBottom

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetStart

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetEnd

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      align

      #undefined
      String

      Alignment style in horizontal direction. For more information, see [Horizontally align text or images](/docs/messaging-api/flex-message-layout/#align-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      gravity

      #undefined
      String

      Alignment style in vertical direction. For more information, see [Alignment in vertical direction](/docs/messaging-api/flex-message-layout/#gravity-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      size

      #undefined
      String

      The maximum image width. This is `md` by default. For more information, see [Image size](/docs/messaging-api/flex-message-layout/#image-size) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      aspectRatio

      #undefined
      String

      Aspect ratio of the image. `{width}:{height}` format. Specify the value of `{width}` and `{height}` in the range from 1 to 100000. However, you cannot set `{height}` to a value that is more than three times the value of `{width}`. The default value is `1:1`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      aspectMode

      #undefined
      String

      The display style of the image if the aspect ratio of the image and that specified by the `aspectRatio` property do not match. For more information, see [About the drawing area](#drawing-area).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      backgroundColor

      #undefined
      String

      Background color of the image. Use a hexadecimal color code.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      action

      #undefined
      Object

      Action performed when this image is tapped. Specify an [action object](#action-objects).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      animated

      #undefined
      Boolean

      When this is `true`, an animated image (APNG) plays. You can specify a value of `true` up to 10 images in a single message. You can't send messages that exceed this limit. This is `false` by default. Animated images larger than 300 KB aren't played back.
      :::::
    ::::

    ::::admonition{title="How to create animated images" type="tip"}
    Create animated images using an APNG editor. Refer to information related to creating animated stickers as you create your APNG files. For more information, see the [Creation Guidelines](https://creator.line.me/en/guideline/animationsticker/){rel="[\"nofollow\"]"} for Animated Stickers in the LINE Creators Market.
    ::::

    ::::admonition{title="What if my animated image doesn't play?" type="note"}
    If your image appears but no animation plays, check the following:

    - Did you set the value of the `animated` property to `true`?
    - Is the image file size less than or equal to 300 KB?

    In some cases, animations may not be played due to the settings of the LINE app that received the message. Also check the following:

    - Is `Auto-play GIFs` enabled in the LINE app settings?

    The animation repeats for the number of times specified by the `num_plays` field in the `acTL` chunk of an APNG. You can also specify a value of 0 to repeat the animation indefinitely.
    ::::
  :::

  :::reference-code
  *Image example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "image",
        "url": "https://example.com/flex/images/image.jpg",
        "size": "full",
        "aspectRatio": "1.91:1"
      }
      ```
      :::::
    ::::
  :::
::

###### About the drawing area

Specify the max width of the image with the `size` property and the aspect ratio (width-to-height ratio) of the image with the `aspectRatio` property. The rectangular area determined by the `size` and `aspectRatio` properties is called the **drawing area**. The image is rendered in this drawing area.

- If the image width specified by the `flex` property is larger than that calculated from the [`size` property](/docs/messaging-api/flex-message-layout/#component-size), the width of the drawing area is scaled down to the width of the component.
- If the aspect ratio of the image and that specified by the `aspectRatio` property do not match, the image is displayed according to the `aspectMode` property. The default value is `fit`.

  - If the value of `aspectMode` is `cover`: The image fills the entire drawing area. Parts of the image that do not fit in the drawing area are not displayed.
  - If the value of `aspectMode` is `fit`: The entire image is displayed in the drawing area. A background is displayed in the unused areas to the left and right of vertical images and in the areas above and below horizontal images.

##### Video

This component renders a video.

Video component is supported on the following version of LINE:

- LINE for iOS and Android: 11.22.0 or later
- LINE for macOS and Windows: 7.7.0 or later

If the version of LINE is lower than the version that supports the video, the component specified as the value of the altContent property will be displayed.

::admonition{title="If the video doesn't play properly" type="note"}
Even if a message that contains a video is successfully sent, the video may not play properly on the user's device. For more information, see [Why can't I play a video that I sent as a message?](/faq/#why-cant-i-play-a-video-i-sent) in the FAQ.
::

::admonition{title="Video aspect ratio" type="note"}
A very wide or tall video may be cropped when played in some environments.

Also, the aspect ratio of the video specified in the `url` property and the following two aspect ratios should be the same. If these aspect ratios are different, the layout may result in an unexpected layout:

- The aspect ratio specified by the `aspectRatio` property
- The aspect ratio of the preview image specified by the `previewUrl` property

![A video in a LINE chat room. A preview image with a 1:1 aspect ratio is displayed behind the video that has an aspect ratio of 16:9.](/media/messaging-api/messages/image-overlapping-en.png){className="[\"w-fix-440\"]"}
::

::admonition{title="Use conditions of the video component" type="note"}
The following conditions must be met to use the video component:

- The video component is specified directly under the hero [block](/docs/messaging-api/flex-message-elements/#block)
- `kilo`, `mega` or `giga` is specified as the value of the `size` property of the bubble
- The bubble is not the child element of a carousel
::

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `video`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      url

      #undefined
      String

      Video file URL (Max character limit: 2000)  

      Protocol: HTTPS (TLS 1.2 or later)  

      Video format: mp4  

      Max file size: 200 MB

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      previewUrl

      #undefined
      String

      Preview image URL (Max character limit: 2000)  

      Protocol: HTTPS (TLS 1.2 or later)  

      Image format: JPEG or PNG  

      Max file size: 1 MB

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      altContent

      #undefined
      component

      Alternative content. The alternative content will be displayed on the screen of a user device that is using a version of LINE that doesn't support the video component. Specify a [box](#box) or an [image](#f-image).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      aspectRatio

      #undefined
      String

      Aspect ratio of the video. `{width}:{height}` format. Specify the value of `{width}` and `{height}` in the range from 1 to 100000. However, you can't set `{height}` to a value that is more than three times the value of `{width}`. The default value is `1:1`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      action

      #undefined
      Object

      [URI action](#uri-action). For more information, see [URI action](/docs/messaging-api/create-flex-message-including-video/#uri-action) in the Messaging API documentation.
      :::::
    ::::
  :::

  :::reference-code
  *Video example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "bubble",
        "size": "mega",
        "hero": {
          "type": "video",
          "url": "https://example.com/video.mp4",
          "previewUrl": "https://example.com/video_preview.jpg",
          "altContent": {
            "type": "image",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover",
            "url": "https://example.com/image.jpg"
          },
          "aspectRatio": "20:13"
        }
      }
      ```
      :::::
    ::::
  :::
::

##### Icon

::reference-with-code
  :::reference-content
  This component renders an icon for decorating the adjacent text. You can use this component only in a [baseline box](/docs/messaging-api/flex-message-layout/#baseline-box).

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `icon`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      url

      #undefined
      String

      Image URL (Max character limit: 2000)  

      Protocol: HTTPS (TLS 1.2 or later)  

      Image format: JPEG or PNG  

      Max image size: 1024 x 1024 pixels  

      Max file size: 1 MB

      The URL should be percent-encoded using UTF-8. For more information, see [About the encoding of a URL specified in a request body property](#url-encoding).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      margin

      #undefined
      String

      The minimum amount of space to include before this component in its parent container. For more information, see [`margin` property of components](/docs/messaging-api/flex-message-layout/#margin-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      position

      #undefined
      String

      Reference for `offsetTop`, `offsetBottom`, `offsetStart`, and `offsetEnd`. Specify one of the following values:

      - `relative`: Use the previous box as reference.
      - `absolute`: Use the top left of parent element as reference.

      The default value is `relative`. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetTop

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetBottom

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetStart

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetEnd

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      size

      #undefined
      String

      Maximum size of the icon width. This is `md` by default. For more information, see [Icon, text, and span size](/docs/messaging-api/flex-message-layout/#other-component-size) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      scaling

      #undefined
      Boolean

      If you set the `scaling` property to `true`, the icon size will be automatically scaled according to the font size setting of the LINE app. The default value is `false`. For more information, see [Scaling to size according to the font size setting](/docs/messaging-api/flex-message-layout/#size-scaling) in the Messaging API documentation.

      This property is supported on the following version of LINE:

      - LINE for iOS and Android: 13.6.0 or later
      - LINE for macOS and Windows: 7.17.0 or later
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      aspectRatio

      #undefined
      String

      Aspect ratio of the icon. `{width}:{height}` format. The values of `{width}` and `{height}` must be in the range 1–100000. `{height}` can't be more than three times the value of `{width}`. The default value is `1:1`.
      :::::
    ::::

  The icon's `flex` property is fixed to `0`.
  :::

  :::reference-code
  *Icon example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "icon",
        "url": "https://example.com/icon/png/caution.png",
        "size": "lg",
        "aspectRatio": "1.91:1"
      }
      ```
      :::::
    ::::
  :::
::

##### Text

::reference-with-code
  :::reference-content
  This component renders a text string. You can specify the font color, size, and weight.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `text`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      text

      #undefined
      String

      Text. Be sure to set either one of the `text` property or `contents` property. If you set the `contents` property, `text` is ignored.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      contents

      #undefined
      Array of objects

      Array of [spans](#span). Be sure to set either one of the `text` property or `contents` property. If you set the `contents` property, `text` is ignored.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      adjustMode

      #undefined
      String

      The method by which to adjust the text's font size. Specify this value:

      - `shrink-to-fit`: Automatically shrink the font size to fit the width of the component. This property takes a "best-effort" approach that may work differently—or not at all!—on some platforms. For more information, see [Automatically shrink fonts to fit](/docs/messaging-api/flex-message-layout/#adjusts-fontsize-to-fit) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      flex

      #undefined
      Number

      The ratio of the width or height of this component within the parent box. For more information, see [Component size](/docs/messaging-api/flex-message-layout/#component-size) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      margin

      #undefined
      String

      The minimum amount of space to include before this component in its parent container. For more information, see [`margin` property of components](/docs/messaging-api/flex-message-layout/#margin-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      position

      #undefined
      String

      Reference for `offsetTop`, `offsetBottom`, `offsetStart`, and `offsetEnd`. Specify one of the following values:

      - `relative`: Use the previous box as reference.
      - `absolute`: Use the top left of parent element as reference.

      The default value is `relative`. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetTop

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetBottom

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetStart

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetEnd

      #undefined
      String

      Offset. For more information, see [Offset](/docs/messaging-api/flex-message-layout/#component-offset) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      size

      #undefined
      String

      Font size. This is `md` by default. For more information, see [Icon, text, and span size](/docs/messaging-api/flex-message-layout/#other-component-size) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      scaling

      #undefined
      Boolean

      If you set the `scaling` property to `true`, the font size of the text will be automatically scaled according to the font size setting of the LINE app. The default value is `false`. For more information, see [Scaling to size according to the font size setting](/docs/messaging-api/flex-message-layout/#size-scaling) in the Messaging API documentation.

      If this property is `true`, the text in [span](#span) set by the `contents` property is also automatically scaled in font size.

      This property is supported on the following version of LINE:

      - LINE for iOS and Android: 13.6.0 or later
      - LINE for macOS and Windows: 7.17.0 or later
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      align

      #undefined
      String

      Alignment style in horizontal direction. For more information, see [Horizontally align text or images](/docs/messaging-api/flex-message-layout/#align-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      gravity

      #undefined
      String

      Alignment style in vertical direction. The default value is `top`. For more information, see [Alignment in vertical direction](/docs/messaging-api/flex-message-layout/#gravity-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      wrap

      #undefined
      Boolean

      `true` to wrap text. The default value is `false`. If set to `true`, you can use a new line character (`\n`) to begin on a new line. For more information, see [Wrapping text](/docs/messaging-api/flex-message-elements/#text-wrap) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      lineSpacing

      #undefined
      String

      Line spacing in a wrapping text. Specify a positive integer or decimal number that ends in px. The `lineSpacing` property doesn't apply to the top of the start line and the bottom of the last line. For more information, see [Increase the line spacing in a text](/docs/messaging-api/flex-message-elements/#text-line-spacing) in the Messaging API documentation.

      This property is supported on the following version of LINE:

      - LINE for iOS and Android: 11.22.0 or later
      - LINE for macOS and Windows: 7.7.0 or later
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      maxLines

      #undefined
      Number

      Max number of lines. If the text exceeds the specified number of lines, the last line will end in an ellipsis (…). If set to `0`, entire text is displayed. The default value is `0`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      weight

      #undefined
      String

      Font weight. You can specify one of the following values: `regular` or `bold`. Specifying `bold` makes the font bold. The default value is `regular`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      color

      #undefined
      String

      Font color. Use a hexadecimal color code.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      action

      #undefined
      Object

      Action performed when this image is tapped. Specify an [action object](#action-objects).
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      style

      #undefined
      String

      Style of the text. Specify one of these values:

      - `normal`: Normal
      - `italic`: Italic

      The default value is `normal`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      decoration

      #undefined
      String

      Decoration of the text. Specify one of these values:

      - `none`: No decoration
      - `underline`: Underline
      - `line-through`: Strikethrough

      The default value is `none`.
      :::::
    ::::
  :::

  :::reference-code
  *Text example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "text",
        "text": "Hello, World!",
        "size": "xl",
        "weight": "bold",
        "color": "#0000ff"
      }
      ```
      :::::
    ::::
  :::
::

##### Span

::reference-with-code
  :::reference-content
  This component renders multiple text strings in different styles. You can specify the color, size, weight, and decoration of each text. Span is set to `contents` property of [texts](#text).

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `span`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      text

      #undefined
      String

      Text. If the `wrap` property of the parent text is set to `true`, you can use a new line character (`\n`) to begin on a new line.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      color

      #undefined
      String

      Font color. Use a hexadecimal color code.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      size

      #undefined
      String

      Font size. For more information, see [Icon, text, and span size](/docs/messaging-api/flex-message-layout/#other-component-size) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      weight

      #undefined
      String

      Font weight. You can specify one of the following values: `regular` or `bold`. Specifying `bold` makes the font bold. The default value is `regular`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      style

      #undefined
      String

      Style of the text. Specify one of these values:

      - `normal`: Normal
      - `italic`: Italic

      The default value is `normal`.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      decoration

      #undefined
      String

      Decoration of the text. Specify one of these values:

      - `none`: No decoration
      - `underline`: Underline
      - `line-through`: Strikethrough

      The default value is `none`.

        ::::::admonition{title="Note" type="note"}
        The decoration set in the `decoration` property of the [text](#f-text) cannot be overwritten by the `decoration` property of the span.
        ::::::
      :::::
    ::::
  :::

  :::reference-code
  *Span example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "span",
        "text": "蛙",
        "size": "xxl",
        "weight": "bold",
        "style": "italic",
        "color": "#4f8f00"
      }
      ```
      :::::
    ::::
  :::
::

##### Separator

::reference-with-code
  :::reference-content
  This component renders a separating line inside a [box](#box). A vertical line is drawn if included in a box with the horizontal layout. Similarly, a horizontal line is drawn if included in a box with the vertical layout.

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `separator`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      margin

      #undefined
      String

      The minimum amount of space to include before this component in its parent container. For more information, see [`margin` property of components](/docs/messaging-api/flex-message-layout/#margin-property) in the Messaging API documentation.
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      color

      #undefined
      String

      Color of the separator. Use a hexadecimal color code.
      :::::
    ::::
  :::

  :::reference-code
  *Separator example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "separator",
        "color": "#000000"
      }
      ```
      :::::
    ::::
  :::
::

##### Filler

::reference-with-code
  :::reference-content
    ::::admonition{title="Filler is deprecated" type="warning"}
    To add a space, use the properties of each component instead of adding fillers. For more information, see [Component position](/docs/messaging-api/flex-message-layout/#component-position) in the Messaging API documentation.
    ::::

  This component renders an empty space. You can put a space in between, before, or after components within a [box](#box).

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `filler`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      flex

      #undefined
      Number

      The ratio of the width or height of this component within the parent box. For more information, see [Component size](/docs/messaging-api/flex-message-layout/#component-size) in the Messaging API documentation.
      :::::
    ::::

  The `spacing` property of the parent element will be ignored for fillers.
  :::

  :::reference-code
  *Filler example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "filler"
      }
      ```
      :::::
    ::::
  :::
::
