---
title: Flex Messageを使いこなす パート1
navigation: true
description: >-
  Flex Messageでは、CSS Flexible Box（CSS
  Flexbox）の仕様に基づいて、非常に自由度が高く高度なメッセージを作成することができます。Flex
  Messageでは、従来のメッセージタイプでは表現が難しかったメッセージを、画像に頼ることなく送信できます。
meta: >-
  {"date":"2026-04-30 00:00 UTC","tags":"messaging-api,
  flex-message","locale":"ja","sidebar":false}
path: /ja/tips/2026/04/30/flex-message-usage-1
__hash__: VgkaFZNN3LW9OUCW7pww0sKLS-pNGKLAC6wuRvusIS8
seo:
  title: Flex Messageを使いこなす パート1
  description: >-
    Flex Messageでは、CSS Flexible Box（CSS
    Flexbox）の仕様に基づいて、非常に自由度が高く高度なメッセージを作成することができます。Flex
    Messageでは、従来のメッセージタイプでは表現が難しかったメッセージを、画像に頼ることなく送信できます。
---

::Tips
# :page-title

  :::display-date{date="2026/04/30" .!mb-20}

  :::

Flex Messageでは、[CSS Flexible Box（CSS Flexbox）](https://www.w3.org/TR/css-flexbox-1/){rel="[\"nofollow\"]"}の仕様に基づいて、非常に自由度が高く高度なメッセージを作成することができます。Flex Messageでは、従来のメッセージタイプでは表現が難しかったメッセージを、画像に頼ることなく送信できます。

![](/media/tips/2026/flex-message-example-ja.png){className="[\"border\"]"}

この記事では、現在Flex Messageで送信可能なメッセージの例をいくつか紹介します。

  :::toc

  :::

## 縦棒グラフを再現した例

Flex MessageのBOXコンポーネント自体に対して、[backgroundColor](/reference/messaging-api/#box)を設定することができます。均等間隔で横並びに[backgroundColor](/reference/messaging-api/#box)を設定したBOXコンポーネントを配置することで、画像を利用しなくても以下のような棒グラフのようなメッセージを作成することができます。

![](/media/tips/2026/flex-1-vertical-bar-graph-ja.png){className="[\"border\",\"w-fix-360\"]"}

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
        "text": "🔌4月の電気使用量お知らせ⚡️",
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
                "text": "東京エリア",
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
                "text": "従量電灯B",
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
                "text": "今月使用量",
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
                "text": "先月比 +8%",
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
                "text": "予定請求額",
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
                "text": "先月比 -¥420",
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
                "text": "週間利用グラフ (kWh)",
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
                    "text": "金",
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
                    "text": "土",
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
                    "text": "日",
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
                    "text": "月",
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
                    "text": "火",
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
                    "text": "水",
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
                    "text": "木",
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
                "text": "ピーク: 火曜 52kWh",
                "size": "xs",
                "color": "#4270ED"
              },
              {
                "type": "text",
                "text": "平均 41kWh",
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
          "label": "日別内訳を見る",
          "text": "日別の電気使用量を見たい"
        }
      },
      {
        "type": "button",
        "style": "primary",
        "color": "#06C755",
        "action": {
          "type": "message",
          "label": "節電アドバイス",
          "text": "節電アドバイスを教えて"
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

## プログレスバーを再現した例

Flex MessageのBOXコンポーネントを横並びに隙間なく配置し、[backgroundColor](/reference/messaging-api/#box)を組み合わせることで、画像を利用しなくても以下のようなプログレスバーのような要素を含むメッセージを作成することができます。

![](/media/tips/2026/flex-2-progress-bar-ja.png){className="[\"border\",\"w-fix-360\"]"}

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
        "text": "ご注文商品の配送状況",
        "size": "lg",
        "weight": "bold",
        "color": "#FFFFFF",
        "margin": "sm"
      },
      {
        "type": "text",
        "text": "お届け予定: 2026-03-12 19:00-21:00",
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
                "text": "ワイヤレスイヤホン",
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
                "text": "注文番号 #OD-240312-128",
                "size": "xs",
                "color": "#777777"
              }
            ]
          },
          {
            "type": "text",
            "text": "追跡番号 1234-5678-9012",
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
            "text": "配送ステータス",
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
                    "text": "注文確定",
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
                    "text": "出荷完了",
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
                    "text": "配送中",
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
                        "text": "現在",
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
                    "text": "配達完了",
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
            "text": "配送の記録",
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
                "text": "03/10 18:20 注文が確定しました",
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
                "text": "03/11 09:10 出荷されました",
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
                "text": "03/12 07:45 配送センターを出発しました",
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
          "label": "受取日時を変更",
          "text": "受取日時を変更したい"
        }
      },
      {
        "type": "button",
        "style": "primary",
        "color": "#06C755",
        "action": {
          "type": "uri",
          "label": "詳細を確認する",
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

## チケット風のメッセージを再現した例

Flex MessageのBOXコンポーネントを[cornerRadius](/reference/messaging-api/#box)で調整し、[Offset](/docs/messaging-api/flex-message-layout/#component-offset)にマイナスの値を指定して位置を調整することで、紙のチケット風のメッセージを画像を利用しなくても作成することができます。

![](/media/tips/2026/flex-3-ticket-style-ja.png){className="[\"border\",\"w-fix-360\"]"}

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
                "text": "入場QRコードを表示する",
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

## 混雑状況を表したメッセージの例

複数のBOXコンポーネントを横並びに配置し、各コンポーネントに異なるカラーの[backgroundColor](/reference/messaging-api/#box)を設定することで、ヒートマップのようなレイアウトを作成できます。これにより、メッセージ内で密度や強度のデータを視覚的に表現できます。

![](/media/tips/2026/flex-4-congestion-forecast-ja.png){className="[\"border\",\"w-fix-360\"]"}

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
        "text": "来週の混雑度予想",
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
                "text": "空いてる",
                "size": "xxs",
                "weight": "bold",
                "color": "#1D4ED8",
                "align": "center",
                "flex": 1
              },
              {
                "type": "text",
                "text": "普通",
                "size": "xxs",
                "weight": "bold",
                "color": "#166534",
                "align": "center",
                "flex": 1
              },
              {
                "type": "text",
                "text": "混雑",
                "size": "xxs",
                "weight": "bold",
                "color": "#B91C1C",
                "align": "center",
                "flex": 1
              },
              {
                "type": "text",
                "text": "大変混雑",
                "size": "xxs",
                "weight": "bold",
                "color": "#991B1B",
                "align": "center",
                "flex": 1
              },
              {
                "type": "text",
                "text": "混雑",
                "size": "xxs",
                "weight": "bold",
                "color": "#B91C1C",
                "align": "center",
                "flex": 1
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
            "text": "おすすめ時間帯",
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
                    "text": "空いてる",
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
                    "text": "空いてる",
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
                    "text": "普通",
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
            "text": "避けたい時間帯",
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
                    "text": "大変混雑",
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
                    "text": "混雑",
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
          "label": "予約する",
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

  :::tags{tags="messaging-api, flex-message" lang="en" section="tips"}

  :::
::
