---
title: Mastering Flex Messages, part 1
navigation: true
description: >-
  With Flex Messages, you can create flexible and advanced messages based on the
  CSS Flexible Box (CSS Flexbox) specification.

  Flex Messages let you send message designs that are difficult to express with
  traditional message types, without relying on images.
meta: >-
  {"date":"2026-04-30 00:00 UTC","tags":"docs, messaging-api,
  flex-message","locale":"en","sidebar":false}
path: /en/tips/2026/04/30/flex-message-usage-1
__hash__: haxDKMEG7ZHIDuOZaaxxm1xcPDh9gBg0u2ck5Mqp_W8
seo:
  title: Mastering Flex Messages, part 1
  description: >-
    With Flex Messages, you can create flexible and advanced messages based on
    the CSS Flexible Box (CSS Flexbox) specification.

    Flex Messages let you send message designs that are difficult to express
    with traditional message types, without relying on images.
---

::Tips
# :page-title

  :::display-date{date="2026/04/30" .!mb-20}

  :::

With Flex Messages, you can create flexible and advanced messages based on the [CSS Flexible Box (CSS Flexbox)](https://www.w3.org/TR/css-flexbox-1/){rel="[\"nofollow\"]"} specification.
Flex Messages let you send message designs that are difficult to express with traditional message types, without relying on images.

![](/media/tips/2026/flex-message-example-en.png){className="[\"border\"]"}

This article introduces examples of messages you can create using Flex Messages.

  :::toc

  :::

## Vertical bar graph

Flex Message box components support the [backgroundColor](/reference/messaging-api/#box) property. You can arrange multiple box components with [backgroundColor](/reference/messaging-api/#box) applied horizontally with equal spacing to create a bar graph layout without using images.

![](/media/tips/2026/flex-1-vertical-bar-graph-en.png){className="[\"border\",\"w-fix-360\"]"}

```json
{
  "type": "bubble",
  "size": "giga",
  "header": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "14px",
    "background": {
      "type": "linearGradient",
      "angle": "125deg",
      "startColor": "#06C755",
      "endColor": "#079F45"
    },
    "contents": [
      {
        "type": "text",
        "text": "ENERGY INSIGHT",
        "size": "xxs",
        "weight": "bold",
        "color": "#DFF5E7"
      },
      {
        "type": "text",
        "text": "🔌April Electricity Usage Update⚡️",
        "size": "lg",
        "weight": "bold",
        "color": "#FFFFFF",
        "margin": "sm"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "spacing": "sm",
        "margin": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "paddingTop": "3px",
            "paddingBottom": "3px",
            "paddingStart": "8px",
            "paddingEnd": "8px",
            "cornerRadius": "10px",
            "backgroundColor": "#E8F9ED",
            "contents": [
              {
                "type": "text",
                "text": "Tokyo Area",
                "size": "xxs",
                "weight": "bold",
                "color": "#079F45"
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "paddingTop": "3px",
            "paddingBottom": "3px",
            "paddingStart": "8px",
            "paddingEnd": "8px",
            "cornerRadius": "10px",
            "backgroundColor": "#E8F9ED",
            "contents": [
              {
                "type": "text",
                "text": "Residential Plan B",
                "size": "xxs",
                "weight": "bold",
                "color": "#111111"
              }
            ]
          }
        ]
      }
    ]
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "14px",
    "spacing": "md",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "flex": 1,
            "paddingAll": "12px",
            "cornerRadius": "12px",
            "backgroundColor": "#F5F5F5",
            "contents": [
              {
                "type": "text",
                "text": "Usage This Month",
                "size": "xxs",
                "color": "#06C755"
              },
              {
                "type": "text",
                "text": "312 kWh",
                "size": "lg",
                "weight": "bold",
                "color": "#111111",
                "margin": "xs"
              },
              {
                "type": "text",
                "text": "+8% vs last month",
                "size": "xxs",
                "color": "#079F45",
                "margin": "xs"
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "flex": 1,
            "paddingAll": "12px",
            "cornerRadius": "12px",
            "backgroundColor": "#E8F9ED",
            "contents": [
              {
                "type": "text",
                "text": "Estimated Bill",
                "size": "xxs",
                "color": "#079F45"
              },
              {
                "type": "text",
                "text": "¥9,860",
                "size": "lg",
                "weight": "bold",
                "color": "#111111",
                "margin": "xs"
              },
              {
                "type": "text",
                "text": "-¥420 vs last month",
                "size": "xxs",
                "color": "#06C755",
                "margin": "xs"
              }
            ]
          }
        ]
      },
      {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "14px",
        "cornerRadius": "14px",
        "backgroundColor": "#FFFFFF",
        "borderWidth": "1px",
        "borderColor": "#DFDFDF",
        "spacing": "md",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "justifyContent": "space-between",
            "contents": [
              {
                "type": "text",
                "text": "Weekly Usage Graph (kWh)",
                "size": "xs",
                "weight": "bold",
                "color": "#111111"
              },
              {
                "type": "text",
                "text": "3/6-3/12",
                "size": "xxs",
                "color": "#777777"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "alignItems": "flex-end",
            "height": "124px",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "alignItems": "center",
                "contents": [
                  {
                    "type": "text",
                    "text": "31",
                    "size": "xxs",
                    "color": "#555555"
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "width": "14px",
                    "height": "34px",
                    "cornerRadius": "7px",
                    "background": {
                      "type": "linearGradient",
                      "angle": "0deg",
                      "startColor": "#95E6B3",
                      "endColor": "#079F45"
                    },
                    "margin": "xs",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": "Fri",
                    "size": "xxs",
                    "color": "#949494",
                    "margin": "xs"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "alignItems": "center",
                "contents": [
                  {
                    "type": "text",
                    "text": "36",
                    "size": "xxs",
                    "color": "#555555"
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "width": "14px",
                    "height": "44px",
                    "cornerRadius": "7px",
                    "background": {
                      "type": "linearGradient",
                      "angle": "0deg",
                      "startColor": "#95E6B3",
                      "endColor": "#079F45"
                    },
                    "margin": "xs",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": "Sat",
                    "size": "xxs",
                    "color": "#949494",
                    "margin": "xs"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "alignItems": "center",
                "contents": [
                  {
                    "type": "text",
                    "text": "44",
                    "size": "xxs",
                    "color": "#555555"
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "width": "14px",
                    "height": "64px",
                    "cornerRadius": "7px",
                    "background": {
                      "type": "linearGradient",
                      "angle": "0deg",
                      "startColor": "#95E6B3",
                      "endColor": "#079F45"
                    },
                    "margin": "xs",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": "Sun",
                    "size": "xxs",
                    "color": "#949494",
                    "margin": "xs"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "alignItems": "center",
                "contents": [
                  {
                    "type": "text",
                    "text": "40",
                    "size": "xxs",
                    "color": "#555555"
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "width": "14px",
                    "height": "54px",
                    "cornerRadius": "7px",
                    "background": {
                      "type": "linearGradient",
                      "angle": "0deg",
                      "startColor": "#95E6B3",
                      "endColor": "#079F45"
                    },
                    "margin": "xs",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": "Mon",
                    "size": "xxs",
                    "color": "#949494",
                    "margin": "xs"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "alignItems": "center",
                "contents": [
                  {
                    "type": "text",
                    "text": "52",
                    "size": "xxs",
                    "weight": "bold",
                    "color": "#2F59CC"
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "width": "14px",
                    "height": "84px",
                    "cornerRadius": "7px",
                    "background": {
                      "type": "linearGradient",
                      "angle": "0deg",
                      "startColor": "#96B2FF",
                      "endColor": "#4771FF"
                    },
                    "margin": "xs",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": "Tue",
                    "size": "xxs",
                    "weight": "bold",
                    "color": "#4270ED",
                    "margin": "xs"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "alignItems": "center",
                "contents": [
                  {
                    "type": "text",
                    "text": "47",
                    "size": "xxs",
                    "color": "#555555"
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "width": "14px",
                    "height": "70px",
                    "cornerRadius": "7px",
                    "background": {
                      "type": "linearGradient",
                      "angle": "0deg",
                      "startColor": "#95E6B3",
                      "endColor": "#079F45"
                    },
                    "margin": "xs",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": "Wed",
                    "size": "xxs",
                    "color": "#949494",
                    "margin": "xs"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "alignItems": "center",
                "contents": [
                  {
                    "type": "text",
                    "text": "38",
                    "size": "xxs",
                    "color": "#555555"
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "width": "14px",
                    "height": "48px",
                    "cornerRadius": "7px",
                    "background": {
                      "type": "linearGradient",
                      "angle": "0deg",
                      "startColor": "#95E6B3",
                      "endColor": "#079F45"
                    },
                    "margin": "xs",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": "Thu",
                    "size": "xxs",
                    "color": "#949494",
                    "margin": "xs"
                  }
                ]
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "justifyContent": "space-between",
            "contents": [
              {
                "type": "text",
                "text": "Peak: Tue 52kWh",
                "size": "xs",
                "color": "#4270ED"
              },
              {
                "type": "text",
                "text": "Avg 41kWh",
                "size": "xs",
                "color": "#555555"
              }
            ]
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "horizontal",
    "spacing": "sm",
    "contents": [
      {
        "type": "button",
        "style": "secondary",
        "action": {
          "type": "message",
          "label": "View Daily Breakdown",
          "text": "Show daily electricity usage"
        }
      },
      {
        "type": "button",
        "style": "primary",
        "color": "#06C755",
        "action": {
          "type": "message",
          "label": "Energy-Saving Tips",
          "text": "Give me energy-saving tips"
        }
      }
    ]
  },
  "styles": {
    "body": {
      "backgroundColor": "#FCFCFC"
    },
    "footer": {
      "separator": true
    }
  }
}
```

## Progress bar

You can arrange box components horizontally with no spacing and apply the [backgroundColor](/reference/messaging-api/#box) to create a progress bar representation without using images.

![](/media/tips/2026/flex-2-progress-bar-en.png){className="[\"border\",\"w-fix-360\"]"}

```json
{
  "type": "bubble",
  "size": "giga",
  "header": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "14px",
    "background": {
      "type": "linearGradient",
      "angle": "125deg",
      "startColor": "#06C755",
      "endColor": "#079F45"
    },
    "contents": [
      {
        "type": "text",
        "text": "Delivery Status of Your Order",
        "size": "lg",
        "weight": "bold",
        "color": "#FFFFFF",
        "margin": "sm"
      },
      {
        "type": "text",
        "text": "Estimated Delivery: 2026-03-12 19:00-21:00",
        "size": "xs",
        "color": "#DFF5E7",
        "margin": "sm"
      }
    ]
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "14px",
    "spacing": "md",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "12px",
        "cornerRadius": "12px",
        "backgroundColor": "#FFFFFF",
        "borderWidth": "1px",
        "borderColor": "#DFDFDF",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "justifyContent": "space-between",
            "contents": [
              {
                "type": "text",
                "text": "Wireless Earbuds",
                "size": "xs",
                "weight": "bold",
                "color": "#111111",
                "flex": 1
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "justifyContent": "space-between",
            "contents": [
              {
                "type": "text",
                "text": "Order No. #OD-240312-128",
                "size": "xs",
                "color": "#777777"
              }
            ]
          },
          {
            "type": "text",
            "text": "Tracking No. 1234-5678-9012",
            "size": "xs",
            "color": "#777777"
          }
        ]
      },
      {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "14px",
        "cornerRadius": "14px",
        "backgroundColor": "#FFFFFF",
        "borderWidth": "1px",
        "borderColor": "#DFDFDF",
        "spacing": "md",
        "contents": [
          {
            "type": "text",
            "text": "Delivery Status",
            "size": "sm",
            "weight": "bold",
            "color": "#111111"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "height": "8px",
            "cornerRadius": "4px",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "backgroundColor": "#06C755",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "backgroundColor": "#06C755",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "backgroundColor": "#4771FF",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "backgroundColor": "#DFDFDF",
                "contents": []
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "alignItems": "center",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "width": "20px",
                    "height": "20px",
                    "cornerRadius": "10px",
                    "backgroundColor": "#06C755",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "contents": [
                      {
                        "type": "text",
                        "text": "1",
                        "size": "xxs",
                        "weight": "bold",
                        "color": "#FFFFFF",
                        "align": "center"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "text": "Order Confirmed",
                    "size": "xxs",
                    "color": "#079F45",
                    "align": "center",
                    "margin": "xs",
                    "wrap": true
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "alignItems": "center",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "width": "20px",
                    "height": "20px",
                    "cornerRadius": "10px",
                    "backgroundColor": "#06C755",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "contents": [
                      {
                        "type": "text",
                        "text": "2",
                        "size": "xxs",
                        "weight": "bold",
                        "color": "#FFFFFF",
                        "align": "center"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "text": "Shipped",
                    "size": "xxs",
                    "color": "#079F45",
                    "align": "center",
                    "margin": "xs",
                    "wrap": true
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "alignItems": "center",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "width": "20px",
                    "height": "20px",
                    "cornerRadius": "10px",
                    "backgroundColor": "#4771FF",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "contents": [
                      {
                        "type": "text",
                        "text": "3",
                        "size": "xxs",
                        "weight": "bold",
                        "color": "#FFFFFF",
                        "align": "center"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "text": "In Transit",
                    "size": "xxs",
                    "weight": "bold",
                    "color": "#4270ED",
                    "align": "center",
                    "margin": "xs",
                    "wrap": true
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "paddingTop": "2px",
                    "paddingBottom": "2px",
                    "paddingStart": "6px",
                    "paddingEnd": "6px",
                    "cornerRadius": "8px",
                    "backgroundColor": "#C2D2FF",
                    "margin": "xs",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Now",
                        "size": "xxs",
                        "weight": "bold",
                        "color": "#4270ED"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "alignItems": "center",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "width": "20px",
                    "height": "20px",
                    "cornerRadius": "10px",
                    "backgroundColor": "#949494",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "contents": [
                      {
                        "type": "text",
                        "text": "4",
                        "size": "xxs",
                        "weight": "bold",
                        "color": "#FFFFFF",
                        "align": "center"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "text": "Delivered",
                    "size": "xxs",
                    "color": "#777777",
                    "align": "center",
                    "margin": "xs",
                    "wrap": true
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "12px",
        "cornerRadius": "12px",
        "backgroundColor": "#FFFFFF",
        "borderWidth": "1px",
        "borderColor": "#DFDFDF",
        "spacing": "sm",
        "contents": [
          {
            "type": "text",
            "text": "Delivery History",
            "size": "xs",
            "weight": "bold",
            "color": "#111111"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "width": "6px",
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#06C755",
                "flex": 0,
                "contents": []
              },
              {
                "type": "text",
                "text": "03/10 18:20 Order confirmed",
                "size": "xs",
                "color": "#555555",
                "flex": 1,
                "wrap": true
              }
            ],
            "alignItems": "center"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "width": "6px",
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#06C755",
                "flex": 0,
                "contents": []
              },
              {
                "type": "text",
                "text": "03/11 09:10 Shipped",
                "size": "xs",
                "color": "#555555",
                "flex": 1,
                "wrap": true
              }
            ],
            "alignItems": "center"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "width": "6px",
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#4771FF",
                "flex": 0,
                "contents": []
              },
              {
                "type": "text",
                "text": "03/12 07:45 Left the delivery center",
                "size": "xs",
                "weight": "bold",
                "color": "#4270ED",
                "flex": 1,
                "wrap": true
              }
            ],
            "alignItems": "center"
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "horizontal",
    "spacing": "sm",
    "contents": [
      {
        "type": "button",
        "style": "secondary",
        "action": {
          "type": "message",
          "label": "Change Delivery Time",
          "text": "I want to change the delivery time"
        }
      },
      {
        "type": "button",
        "style": "primary",
        "color": "#06C755",
        "action": {
          "type": "uri",
          "label": "View Details",
          "uri": "https://example.com/tracking/1234-5678-9012"
        }
      }
    ]
  },
  "styles": {
    "body": {
      "backgroundColor": "#FCFCFC"
    },
    "footer": {
      "separator": true
    }
  }
}
```

## Ticket-style message

You can create ticket-like layouts by using [cornerRadius](/reference/messaging-api/#box) on box components and adjusting component positions using negative values in [Offset](/docs/messaging-api/flex-message-layout/#component-offset).

![](/media/tips/2026/flex-3-ticket-style-en.png){className="[\"border\",\"w-fix-360\"]"}

```json
{
  "type": "bubble",
  "size": "mega",
  "body": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "14px",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "14px",
        "cornerRadius": "14px",
        "borderWidth": "2px",
        "borderColor": "#1F2937",
        "backgroundColor": "#FFFFFF",
        "spacing": "md",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "justifyContent": "space-between",
            "contents": [
              {
                "type": "text",
                "text": "ENTRY PASS",
                "size": "xs",
                "weight": "bold",
                "color": "#334155"
              },
              {
                "type": "text",
                "text": "#LF-1029",
                "size": "xs",
                "weight": "bold",
                "color": "#0F172A"
              }
            ]
          },
          {
            "type": "text",
            "text": "BROWN & CONY FEST 2026",
            "size": "xl",
            "weight": "bold",
            "color": "#111111",
            "wrap": true
          },
          {
            "type": "text",
            "text": "BROWN / CONY / SALLY / MOON",
            "size": "xs",
            "color": "#64748B"
          },
          {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "horizontal",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 3,
                    "paddingAll": "10px",
                    "cornerRadius": "10px",
                    "backgroundColor": "#F1F5F9",
                    "contents": [
                      {
                        "type": "text",
                        "text": "DATE",
                        "size": "xxs",
                        "color": "#64748B"
                      },
                      {
                        "type": "text",
                        "text": "2026.05.24 SUN",
                        "size": "xs",
                        "weight": "bold",
                        "color": "#0F172A",
                        "margin": "xs",
                        "wrap": true
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 2,
                    "paddingAll": "10px",
                    "cornerRadius": "10px",
                    "backgroundColor": "#F1F5F9",
                    "contents": [
                      {
                        "type": "text",
                        "text": "GATE",
                        "size": "xxs",
                        "color": "#64748B"
                      },
                      {
                        "type": "text",
                        "text": "GREEN-1",
                        "size": "xs",
                        "weight": "bold",
                        "color": "#0F172A",
                        "margin": "xs",
                        "wrap": true
                      }
                    ]
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "paddingAll": "10px",
                "cornerRadius": "10px",
                "backgroundColor": "#F1F5F9",
                "contents": [
                  {
                    "type": "text",
                    "text": "AREA",
                    "size": "xxs",
                    "color": "#64748B"
                  },
                  {
                    "type": "text",
                    "text": "STAGE-B / CENTRAL PLAZA",
                    "size": "xs",
                    "weight": "bold",
                    "color": "#0F172A",
                    "margin": "xs",
                    "wrap": true
                  }
                ]
              }
            ]
          },
          {
            "type": "separator",
            "color": "#94A3B8"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "justifyContent": "space-between",
            "contents": [
              {
                "type": "text",
                "text": "CHECK-IN",
                "size": "xxs",
                "color": "#64748B"
              },
              {
                "type": "text",
                "text": "16:30-17:00",
                "size": "sm",
                "weight": "bold",
                "color": "#111111"
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "12px",
            "cornerRadius": "10px",
            "backgroundColor": "#111111",
            "contents": [
              {
                "type": "text",
                "text": "Show Entry QR Code",
                "size": "xxs",
                "weight": "bold",
                "align": "center",
                "color": "#E2E8F0"
              },
              {
                "type": "text",
                "text": "LF2026-BROWN-CONY",
                "size": "sm",
                "weight": "bold",
                "align": "center",
                "color": "#FFFFFF",
                "margin": "xs"
              }
            ],
            "action": {
              "type": "uri",
              "label": "action",
              "uri": "https://www.lycorp.co.jp/"
            }
          },
          {
            "type": "box",
            "layout": "vertical",
            "position": "absolute",
            "offsetStart": "-12px",
            "offsetTop": "170px",
            "width": "24px",
            "height": "24px",
            "cornerRadius": "12px",
            "backgroundColor": "#FDFBF6",
            "borderWidth": "2px",
            "borderColor": "#1F2937",
            "contents": []
          },
          {
            "type": "box",
            "layout": "vertical",
            "position": "absolute",
            "offsetEnd": "-12px",
            "offsetTop": "170px",
            "width": "24px",
            "height": "24px",
            "cornerRadius": "12px",
            "backgroundColor": "#FDFBF6",
            "borderWidth": "2px",
            "borderColor": "#1F2937",
            "contents": []
          }
        ]
      }
    ]
  },
  "styles": {
    "body": {
      "backgroundColor": "#FDFBF6"
    },
    "footer": {
      "separator": true,
      "backgroundColor": "#F6F1E6"
    }
  }
}
```

## Congestion forecast message

You can create a heatmap-style layout by placing multiple box components side by side and applying different [backgroundColor](/reference/messaging-api/#box) values to each component. This allows visualization of density or intensity data within a message.

![](/media/tips/2026/flex-4-congestion-forecast-en.png){className="[\"border\",\"w-fix-360\"]"}

```json
{
  "type": "bubble",
  "size": "mega",
  "header": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "12px",
    "contents": [
      {
        "type": "text",
        "text": "Next Week Congestion Forecast",
        "size": "md",
        "weight": "bold",
        "color": "#FFFFFF"
      }
    ],
    "background": {
      "type": "linearGradient",
      "angle": "0deg",
      "startColor": "#06C755",
      "endColor": "#06C755"
    }
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "paddingAll": "12px",
    "spacing": "sm",
    "backgroundColor": "#F7FAFC",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "10px",
        "cornerRadius": "12px",
        "backgroundColor": "#FFFFFF",
        "borderWidth": "1px",
        "borderColor": "#E2E8F0",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "Mon",
                "size": "xxs",
                "color": "#64748B",
                "align": "center",
                "flex": 1
              },
              {
                "type": "text",
                "text": "Tue",
                "size": "xxs",
                "color": "#64748B",
                "align": "center",
                "flex": 1
              },
              {
                "type": "text",
                "text": "Wed",
                "size": "xxs",
                "color": "#64748B",
                "align": "center",
                "flex": 1
              },
              {
                "type": "text",
                "text": "Thu",
                "size": "xxs",
                "color": "#64748B",
                "align": "center",
                "flex": 1
              },
              {
                "type": "text",
                "text": "Fri",
                "size": "xxs",
                "color": "#64748B",
                "align": "center",
                "flex": 1
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "spacing": "xs",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "height": "18px",
                "cornerRadius": "5px",
                "backgroundColor": "#3B82F6",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "height": "18px",
                "cornerRadius": "5px",
                "backgroundColor": "#22C55E",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "height": "18px",
                "cornerRadius": "5px",
                "backgroundColor": "#EF4444",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "height": "18px",
                "cornerRadius": "5px",
                "backgroundColor": "#B91C1C",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "height": "18px",
                "cornerRadius": "5px",
                "backgroundColor": "#EF4444",
                "contents": []
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "Light",
                "size": "xxs",
                "weight": "bold",
                "color": "#1D4ED8",
                "align": "center",
                "flex": 1,
                "gravity": "center"
              },
              {
                "type": "text",
                "text": "Normal",
                "size": "xxs",
                "weight": "bold",
                "color": "#166534",
                "align": "center",
                "flex": 1,
                "gravity": "center"
              },
              {
                "type": "text",
                "text": "Crowded",
                "size": "xxs",
                "weight": "bold",
                "color": "#B91C1C",
                "align": "center",
                "flex": 1,
                "gravity": "center"
              },
              {
                "type": "text",
                "text": "Very Crowded",
                "size": "xxs",
                "weight": "bold",
                "color": "#991B1B",
                "align": "center",
                "flex": 1,
                "wrap": true,
                "gravity": "center"
              },
              {
                "type": "text",
                "text": "Crowded",
                "size": "xxs",
                "weight": "bold",
                "color": "#B91C1C",
                "align": "center",
                "flex": 1,
                "gravity": "center"
              }
            ]
          }
        ]
      },
      {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "10px",
        "cornerRadius": "12px",
        "backgroundColor": "#FFFFFF",
        "borderWidth": "1px",
        "borderColor": "#DBEAFE",
        "spacing": "sm",
        "contents": [
          {
            "type": "text",
            "text": "Recommended Time Slots",
            "size": "sm",
            "weight": "bold",
            "color": "#0F172A"
          },
          {
            "type": "separator",
            "color": "#E2E8F0"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "justifyContent": "space-between",
            "alignItems": "center",
            "contents": [
              {
                "type": "text",
                "text": "Mon 10:30",
                "size": "xs",
                "color": "#334155"
              },
              {
                "type": "box",
                "layout": "vertical",
                "paddingTop": "3px",
                "paddingBottom": "3px",
                "paddingStart": "8px",
                "paddingEnd": "8px",
                "cornerRadius": "8px",
                "backgroundColor": "#DBEAFE",
                "contents": [
                  {
                    "type": "text",
                    "text": "Light",
                    "size": "xxs",
                    "weight": "bold",
                    "color": "#1E3A8A"
                  }
                ]
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "justifyContent": "space-between",
            "alignItems": "center",
            "contents": [
              {
                "type": "text",
                "text": "Mon 13:00",
                "size": "xs",
                "color": "#334155"
              },
              {
                "type": "box",
                "layout": "vertical",
                "paddingTop": "3px",
                "paddingBottom": "3px",
                "paddingStart": "8px",
                "paddingEnd": "8px",
                "cornerRadius": "8px",
                "backgroundColor": "#DBEAFE",
                "contents": [
                  {
                    "type": "text",
                    "text": "Light",
                    "size": "xxs",
                    "weight": "bold",
                    "color": "#1E3A8A"
                  }
                ]
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "justifyContent": "space-between",
            "alignItems": "center",
            "contents": [
              {
                "type": "text",
                "text": "Tue 15:00",
                "size": "xs",
                "color": "#334155"
              },
              {
                "type": "box",
                "layout": "vertical",
                "paddingTop": "3px",
                "paddingBottom": "3px",
                "paddingStart": "8px",
                "paddingEnd": "8px",
                "cornerRadius": "8px",
                "backgroundColor": "#DCFCE7",
                "contents": [
                  {
                    "type": "text",
                    "text": "Normal",
                    "size": "xxs",
                    "weight": "bold",
                    "color": "#166534"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "10px",
        "cornerRadius": "12px",
        "backgroundColor": "#FFFFFF",
        "borderWidth": "1px",
        "borderColor": "#FECACA",
        "spacing": "sm",
        "contents": [
          {
            "type": "text",
            "text": "Time Slots to Avoid",
            "size": "sm",
            "weight": "bold",
            "color": "#7F1D1D"
          },
          {
            "type": "separator",
            "color": "#FEE2E2"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "justifyContent": "space-between",
            "alignItems": "center",
            "contents": [
              {
                "type": "text",
                "text": "Thu 14:00",
                "size": "xs",
                "color": "#7F1D1D"
              },
              {
                "type": "box",
                "layout": "vertical",
                "paddingTop": "3px",
                "paddingBottom": "3px",
                "paddingStart": "8px",
                "paddingEnd": "8px",
                "cornerRadius": "8px",
                "backgroundColor": "#eea0a0",
                "contents": [
                  {
                    "type": "text",
                    "text": "Very Crowded",
                    "size": "xxs",
                    "weight": "bold",
                    "color": "#991B1B"
                  }
                ]
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "justifyContent": "space-between",
            "alignItems": "center",
            "contents": [
              {
                "type": "text",
                "text": "Fri 17:00",
                "size": "xs",
                "color": "#7F1D1D"
              },
              {
                "type": "box",
                "layout": "vertical",
                "paddingTop": "3px",
                "paddingBottom": "3px",
                "paddingStart": "8px",
                "paddingEnd": "8px",
                "cornerRadius": "8px",
                "backgroundColor": "#FEE2E2",
                "contents": [
                  {
                    "type": "text",
                    "text": "Crowded",
                    "size": "xxs",
                    "weight": "bold",
                    "color": "#B91C1C"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "button",
        "style": "primary",
        "color": "#06C755",
        "action": {
          "type": "uri",
          "label": "Make a Reservation",
          "uri": "https://example.com/reserve"
        }
      }
    ]
  }
}
```

  :::style
  html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sPWt5, html code.shiki .sPWt5{--shiki-default:#7EE787}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags
  ---
  tags: docs, messaging-api, flex-message
  lang: en
  section: tips
  ---
  :::
::
