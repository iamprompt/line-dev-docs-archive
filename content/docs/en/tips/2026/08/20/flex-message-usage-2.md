---
title: Mastering Flex Messages, part 2
navigation: true
description: >-
  Flex Messages let you create flexible layouts without relying on images.
  However, line breaks and the amount of visible text may differ even when you
  use the same JSON. The result depends on the device's screen width, OS, LINE
  app version, language settings, and fonts.
meta: >-
  {"date":"2026-08-20 00:00 UTC","tags":"messaging-api,
  flex-message","locale":"en","sidebar":false}
path: /en/tips/2026/08/20/flex-message-usage-2
__hash__: DRvzbBKxYSQZ-g2lyxk12V4AJX6bfAg8Ouz_awoqihk
seo:
  title: Mastering Flex Messages, part 2
  description: >-
    Flex Messages let you create flexible layouts without relying on images.
    However, line breaks and the amount of visible text may differ even when you
    use the same JSON. The result depends on the device's screen width, OS, LINE
    app version, language settings, and fonts.
---

::Tips
# :page-title

  :::display-date{date="2026/08/20" .!mb-20}

  :::

[Flex Messages](/docs/messaging-api/using-flex-messages/) let you create flexible layouts without relying on images. However, line breaks and the amount of visible text may differ even when you use the same JSON. The result depends on the device's screen width, OS, LINE app version, language settings, and fonts.

[Part 1](/tips/2026/04/30/flex-message-usage-1/) introduced several examples of messages you can send as Flex Messages. This article explains how to create Flex Message layouts that account for display differences between devices.

  :::toc

  :::

## `maxLines` doesn't guarantee the number of visible characters

Product names, store names, event names, and display names can vary in length. If you create a layout with only short sample data, the layout may cut off text or crowd nearby components when you add actual data.

Set `wrap` to `true` in a [text component](/docs/messaging-api/flex-message-elements/#text) to wrap text. Unrestricted text wrapping can make the message too long, so use `maxLines` to limit the number of lines.

```json
{
  "type": "text",
  "text": "Wireless Noise-Canceling Earbuds Pro",
  "size": "md",
  "weight": "bold",
  "wrap": true,
  "maxLines": 2
}
```

`maxLines` limits the number of lines, but it doesn't guarantee the number of visible characters. The number of characters on each line varies with the device's screen width, OS, language settings, and fonts. Line breaks may differ between devices even when you set `maxLines: 2`. If the text doesn't fit within the limit, devices may show different numbers of characters or cut off the text at different points. For more information, see [Wrap text](/docs/messaging-api/flex-message-elements/#text-wrap).

These examples show different line breaks in the same Flex Message with `maxLines: 2`.

| iOS device with a wide screen                                                                                                                        | iOS device with a narrow screen                                                                                                                          | Flex Message Simulator                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Flex Message on an iOS device with a wide screen](/media/tips/2026/flex-message-max-lines-ios-wide-en.png){className="[\"border\",\"w-fix-240\"]"} | ![Flex Message on an iOS device with a narrow screen](/media/tips/2026/flex-message-max-lines-ios-narrow-en.png){className="[\"border\",\"w-fix-240\"]"} | ![Flex Message in the Flex Message Simulator](/media/tips/2026/flex-message-max-lines-simulator-en.png){className="[\"border\",\"w-fix-240\"]"} |

```json
{
  "type": "bubble",
  "size": "giga",
  "header": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "18px",
    "backgroundColor": "#06C755",
    "contents": [
      {
        "type": "text",
        "text": "BROWN STORE",
        "size": "xxs",
        "weight": "bold",
        "color": "#DDF7E5"
      },
      {
        "type": "text",
        "text": "Your earbuds have shipped",
        "size": "xl",
        "weight": "bold",
        "color": "#FFFFFF",
        "margin": "sm",
        "wrap": true
      }
    ]
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "18px",
    "spacing": "lg",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "flex": 0,
            "paddingTop": "4px",
            "paddingBottom": "4px",
            "paddingStart": "8px",
            "paddingEnd": "8px",
            "cornerRadius": "10px",
            "backgroundColor": "#E8F9ED",
            "contents": [
              {
                "type": "text",
                "text": "IN TRANSIT",
                "size": "xxs",
                "weight": "bold",
                "color": "#06C755"
              }
            ]
          },
          {
            "type": "text",
            "text": "Order BR-017",
            "size": "xs",
            "color": "#777777",
            "gravity": "center",
            "flex": 0
          }
        ]
      },
      {
        "type": "text",
        "text": "Wireless Noise-Canceling Earbuds Pro",
        "size": "xl",
        "weight": "bold",
        "wrap": true,
        "maxLines": 2
      },
      {
        "type": "separator"
      },
      {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "spacing": "md",
            "contents": [
              {
                "type": "text",
                "text": "Delivery time",
                "size": "sm",
                "color": "#777777",
                "flex": 0
              },
              {
                "type": "text",
                "text": "Aug 20, 10:00–11:00 AM",
                "size": "sm",
                "weight": "bold",
                "align": "end",
                "wrap": true,
                "flex": 1
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "spacing": "md",
            "contents": [
              {
                "type": "text",
                "text": "Delivery address",
                "size": "sm",
                "color": "#777777",
                "flex": 0
              },
              {
                "type": "text",
                "text": "1-2-3 Cony-cho, Brown-ku, Tokyo",
                "size": "sm",
                "align": "end",
                "wrap": true,
                "flex": 1
              }
            ]
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "14px",
    "contents": [
      {
        "type": "button",
        "style": "primary",
        "color": "#06C755",
        "height": "sm",
        "action": {
          "type": "uri",
          "label": "Track delivery",
          "uri": "https://example.com/orders/BR-017"
        }
      }
    ]
  }
}
```

## Screen width affects horizontal layouts

A [horizontal box](/docs/messaging-api/flex-message-layout/#box-component-orientation) divides its available width among its child components. Variable-length text, such as an address or store name, may wrap earlier on a narrow screen when you place it next to other components. This can change the height of the entire box.

When you set the [`flex` property](/docs/messaging-api/flex-message-layout/#horizontal-box) of a child box that contains variable-length text to `0`, the child box occupies the width required to show all its content, up to the width of the parent box.

Content that extends beyond the parent box may not appear. Set `flex: 0` for child boxes that contain short labels. Set `flex: 1` for child boxes that contain variable-length text and set [`wrap: true`](/docs/messaging-api/flex-message-elements/#text-wrap) for the text inside them. These settings give the remaining width to the boxes with `flex: 1` and let their text wrap.

These examples compare a child box that uses `flex: 0` with one that uses `flex: 1` and contains text with `wrap: true`.

| `flex: 0`                                                                                                                                                                          | `flex: 1` and `wrap: true`                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Example where the box hides content beyond its width when you use flex 0](/media/tips/2026/flex-message-horizontal-layout-flex-0-en.png){className="[\"border\",\"w-fix-240\"]"} | ![Example where text wraps when you use flex 1 and wrap true](/media/tips/2026/flex-message-horizontal-layout-flex-1-wrap-en.png){className="[\"border\",\"w-fix-240\"]"} |
| The store information takes the width it needs. The end of the store name and the **2 guests** box don't appear.                                                                   | The store name and address wrap within the remaining width. All information appears.                                                                                      |

This JSON defines the `flex: 0` example on the left. To create the example on the right, change the `flex` property of the box that contains the store information to `1`.

```json
{
  "type": "bubble",
  "size": "mega",
  "header": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "20px",
    "backgroundColor": "#3F454D",
    "contents": [
      {
        "type": "text",
        "text": "BROWN Restaurant",
        "size": "xs",
        "weight": "bold",
        "color": "#DDE1E5"
      },
      {
        "type": "text",
        "text": "Reservation confirmed",
        "size": "xl",
        "weight": "bold",
        "color": "#FFFFFF",
        "margin": "sm",
        "wrap": true
      }
    ]
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "20px",
    "spacing": "lg",
    "contents": [
      {
        "type": "text",
        "text": "Reservation details",
        "size": "lg",
        "weight": "bold"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "alignItems": "center",
        "spacing": "md",
        "paddingAll": "14px",
        "cornerRadius": "12px",
        "backgroundColor": "#F5F6F7",
        "borderWidth": "1px",
        "borderColor": "#DADDE1",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "flex": 0,
            "paddingAll": "8px",
            "cornerRadius": "8px",
            "backgroundColor": "#FFFFFF",
            "contents": [
              {
                "type": "text",
                "text": "AUG 20",
                "size": "xs",
                "weight": "bold",
                "color": "#4F5963",
                "align": "center"
              },
              {
                "type": "text",
                "text": "7:00 PM",
                "size": "xs",
                "color": "#4F5963",
                "align": "center"
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "spacing": "xs",
            "flex": 0,
            "contents": [
              {
                "type": "text",
                "text": "BROWN Restaurant, LY Corporation Tower 21F Sky Dining",
                "size": "md",
                "weight": "bold",
                "wrap": true
              },
              {
                "type": "text",
                "text": "1-2-3 Cony-cho, Brown-ku, Tokyo",
                "size": "xs",
                "color": "#777777",
                "wrap": true
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "flex": 0,
            "paddingAll": "8px",
            "cornerRadius": "10px",
            "backgroundColor": "#3F454D",
            "contents": [
              {
                "type": "text",
                "text": "2 guests",
                "size": "xs",
                "weight": "bold",
                "color": "#FFFFFF"
              }
            ]
          }
        ]
      },
      {
        "type": "separator"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "Plan",
            "size": "sm",
            "color": "#777777",
            "flex": 0
          },
          {
            "type": "text",
            "text": "Seasonal dinner course",
            "size": "sm",
            "align": "end",
            "wrap": true,
            "flex": 1
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "16px",
    "contents": [
      {
        "type": "button",
        "style": "primary",
        "color": "#3F454D",
        "action": {
          "type": "uri",
          "label": "View reservation details",
          "uri": "https://example.com/reservations/BR-017"
        }
      }
    ]
  }
}
```

These examples show the same Flex Message on iOS devices with different screen widths and in the Flex Message Simulator.

| iOS device with a wide screen                                                                                                                                     | iOS device with a narrow screen                                                                                                                                       | Flex Message Simulator                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Horizontal layout on an iOS device with a wide screen](/media/tips/2026/flex-message-horizontal-layout-ios-wide-en.png){className="[\"border\",\"w-fix-240\"]"} | ![Horizontal layout on an iOS device with a narrow screen](/media/tips/2026/flex-message-horizontal-layout-ios-narrow-en.png){className="[\"border\",\"w-fix-240\"]"} | ![Horizontal layout in the Flex Message Simulator](/media/tips/2026/flex-message-horizontal-layout-simulator-en.png){className="[\"border\",\"w-fix-240\"]"} |

```json
{
  "type": "bubble",
  "size": "giga",
  "header": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "18px",
    "backgroundColor": "#1D6FE8",
    "contents": [
      {
        "type": "text",
        "text": "BROWN Restaurant",
        "size": "xxs",
        "weight": "bold",
        "color": "#DCEAFF"
      },
      {
        "type": "text",
        "text": "Reservation confirmed",
        "size": "xl",
        "weight": "bold",
        "color": "#FFFFFF",
        "margin": "sm",
        "wrap": true
      }
    ]
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "18px",
    "spacing": "lg",
    "contents": [
      {
        "type": "text",
        "text": "Reservation details",
        "size": "lg",
        "weight": "bold"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "alignItems": "center",
        "spacing": "md",
        "paddingAll": "14px",
        "cornerRadius": "12px",
        "backgroundColor": "#EAF2FF",
        "borderWidth": "1px",
        "borderColor": "#C8DAF6",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "flex": 0,
            "paddingTop": "4px",
            "paddingBottom": "4px",
            "paddingStart": "8px",
            "paddingEnd": "8px",
            "cornerRadius": "10px",
            "backgroundColor": "#FFFFFF",
            "contents": [
              {
                "type": "text",
                "text": "AUG 20 · 7 PM",
                "size": "xxs",
                "weight": "bold",
                "color": "#1D6FE8"
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "spacing": "xs",
            "flex": 1,
            "contents": [
              {
                "type": "text",
                "text": "BROWN Restaurant, LY Corporation Tower 21F",
                "size": "lg",
                "weight": "bold",
                "color": "#111111",
                "wrap": true
              },
              {
                "type": "text",
                "text": "1-2-3 Cony-cho, Brown-ku, Tokyo",
                "size": "xs",
                "color": "#777777",
                "wrap": true
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "flex": 0,
            "paddingTop": "4px",
            "paddingBottom": "4px",
            "paddingStart": "8px",
            "paddingEnd": "8px",
            "cornerRadius": "10px",
            "backgroundColor": "#1D6FE8",
            "contents": [
              {
                "type": "text",
                "text": "2 GUESTS",
                "size": "xxs",
                "weight": "bold",
                "color": "#FFFFFF"
              }
            ]
          }
        ]
      },
      {
        "type": "separator"
      },
      {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "Plan",
                "size": "sm",
                "color": "#777777",
                "flex": 0
              },
              {
                "type": "text",
                "text": "Seasonal dinner course",
                "size": "sm",
                "align": "end",
                "wrap": true,
                "flex": 1
              }
            ]
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "14px",
    "contents": [
      {
        "type": "button",
        "style": "primary",
        "color": "#1D6FE8",
        "height": "sm",
        "action": {
          "type": "uri",
          "label": "View reservation details",
          "uri": "https://example.com/reservations/BR-017"
        }
      }
    ]
  }
}
```

## Font size settings change line breaks

Set the [`scaling` property](/docs/messaging-api/flex-message-layout/#size-scaling) of text, buttons, and icons to `true`. Their font and icon sizes then scale with the font size you choose in the LINE app. With a larger font size, text may wrap earlier or change a component's height.

You can set the [`adjustMode` property](/docs/messaging-api/flex-message-layout/#adjusts-fontsize-to-fit) to `shrink-to-fit` for buttons and text. However, `adjustMode` works on a best-effort basis. Its behavior may differ between platforms, or it may not work.

These examples show components with different `scaling` values. They use **Extra large** for the font size in the LINE app for iOS. Both buttons use `adjustMode: shrink-to-fit`.

| `scaling: true`                                                                                                                        | `scaling: false`                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| ![Flex Message that uses scaling true](/media/tips/2026/flex-message-font-scaling-true-en.png){className="[\"border\",\"w-fix-240\"]"} | ![Flex Message that uses scaling false](/media/tips/2026/flex-message-font-scaling-false-en.png){className="[\"border\",\"w-fix-240\"]"} |

Set `scaling` to `true` and design the layout so that important information remains readable when the font size changes. Don't set `scaling` to `false` just to prevent layout changes.

```json
{
  "type": "bubble",
  "size": "mega",
  "header": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "18px",
    "backgroundColor": "#D94343",
    "contents": [
      {
        "type": "text",
        "text": "Reservation confirmed",
        "size": "xl",
        "weight": "bold",
        "color": "#FFFFFF",
        "scaling": true
      }
    ]
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "18px",
    "spacing": "lg",
    "contents": [
      {
        "type": "text",
        "text": "LINE Developers Meetup — A special session on the Messaging API",
        "size": "xl",
        "weight": "bold",
        "wrap": true,
        "scaling": true
      },
      {
        "type": "separator"
      },
      {
        "type": "box",
        "layout": "vertical",
        "spacing": "md",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "spacing": "md",
            "contents": [
              {
                "type": "text",
                "text": "Date and time",
                "size": "sm",
                "color": "#777777",
                "flex": 0,
                "scaling": true
              },
              {
                "type": "text",
                "text": "Aug 20, 7:00 PM",
                "size": "sm",
                "align": "end",
                "wrap": true,
                "flex": 1,
                "scaling": true
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "spacing": "md",
            "contents": [
              {
                "type": "text",
                "text": "Venue",
                "size": "sm",
                "color": "#777777",
                "flex": 0,
                "scaling": true
              },
              {
                "type": "text",
                "text": "LY Corporation Akasaka Office Event Space",
                "size": "sm",
                "align": "end",
                "wrap": true,
                "flex": 1,
                "scaling": true
              }
            ]
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "14px",
    "contents": [
      {
        "type": "button",
        "style": "primary",
        "color": "#D94343",
        "height": "sm",
        "scaling": true,
        "adjustMode": "shrink-to-fit",
        "action": {
          "type": "uri",
          "label": "View or change reservation",
          "uri": "https://example.com/reservations/meetup"
        }
      }
    ]
  }
}
```

## Separate important information

Place important information in separate text components. This includes payment deadlines, reservation dates and times, and order statuses. Don't include this information in long product names or descriptions. Separate components keep important information visible even when the layout cuts off other text.

This example shows a Flex Message on an iOS device. It places the product name and the expected delivery time in separate components.

![Flex Message with the product name and expected delivery time in separate components](/media/tips/2026/flex-message-separate-important-information-en.png){className="[\"border\",\"w-fix-240\"]"}

```json
{
  "type": "bubble",
  "size": "mega",
  "header": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "18px",
    "backgroundColor": "#D96500",
    "contents": [
      {
        "type": "text",
        "text": "BROWN STORE",
        "size": "xxs",
        "weight": "bold",
        "color": "#FFF1E6"
      },
      {
        "type": "text",
        "text": "Your order is out for delivery",
        "size": "xl",
        "weight": "bold",
        "color": "#FFFFFF",
        "margin": "sm",
        "wrap": true
      }
    ]
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "18px",
    "spacing": "md",
    "contents": [
      {
        "type": "text",
        "text": "Wireless Noise-Canceling Earbuds BROWN Pro Special Edition in Midnight Blue",
        "size": "lg",
        "weight": "bold",
        "wrap": true,
        "maxLines": 2
      },
      {
        "type": "separator",
        "color": "#F3D2B5"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "spacing": "md",
        "contents": [
          {
            "type": "text",
            "text": "Delivery time",
            "size": "sm",
            "color": "#555555",
            "flex": 0
          },
          {
            "type": "text",
            "text": "Aug 20, 10:00–11:00 AM",
            "size": "sm",
            "weight": "bold",
            "color": "#D96500",
            "align": "end",
            "wrap": true,
            "flex": 1
          }
        ]
      }
    ]
  }
}
```

  :::admonition{title="Keep the layout flexible" type="tip"}
  Don't set a fixed pixel width for a layout with variable-length text. A fixed width can reduce visible text on some screens. When you set the [`position` property](/docs/messaging-api/flex-message-layout/#component-position) to `absolute`, the component doesn't affect the placement of other components. This can cause components to overlap. Separate important information from variable-length text. Place it in a standard layout that uses the `flex` property.
  :::

## Summary

Flex Messages offer great layout flexibility. You also need to account for display differences caused by screen widths and font sizes. Use `maxLines` to limit the number of lines when necessary. Use `flex` and `wrap` to wrap variable-length text. Place important information in separate components so it remains clear when the amount of visible text changes.

Don't check only the final appearance when you create a Flex Message. Add long text and check that important information remains visible. Change the screen width and check that components don't overlap or disappear. Change the font size and check that the message remains readable.

  :::style
  html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sPWt5, html code.shiki .sPWt5{--shiki-default:#7EE787}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="messaging-api, flex-message" lang="en" section="tips"}

  :::
::
