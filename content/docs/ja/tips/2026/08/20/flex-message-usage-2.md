---
title: Flex Messageを使いこなす パート2
navigation: true
description: >-
  Flex
  Messageは、画像に頼らず、自由度の高いレイアウトを作成できるメッセージです。一方で、端末の画面幅、OS、LINEアプリのバージョン、言語設定、フォントなどによって、同じJSONでもテキストの改行位置や表示範囲が異なる場合があります。
meta: >-
  {"date":"2026-08-20 00:00 UTC","tags":"messaging-api,
  flex-message","locale":"ja","sidebar":false}
path: /ja/tips/2026/08/20/flex-message-usage-2
__hash__: PmYztYM3vdJDBQ15JKps7e4W-1qV0dfjtQg6nv-U6AM
seo:
  title: Flex Messageを使いこなす パート2
  description: >-
    Flex
    Messageは、画像に頼らず、自由度の高いレイアウトを作成できるメッセージです。一方で、端末の画面幅、OS、LINEアプリのバージョン、言語設定、フォントなどによって、同じJSONでもテキストの改行位置や表示範囲が異なる場合があります。
---

::Tips
# :page-title

  :::display-date{date="2026/08/20" .!mb-20}

  :::

[Flex Message](/docs/messaging-api/using-flex-messages/)は、画像に頼らず、自由度の高いレイアウトを作成できるメッセージです。一方で、端末の画面幅、OS、LINEアプリのバージョン、言語設定、フォントなどによって、同じJSONでもテキストの改行位置や表示範囲が異なる場合があります。

[パート1](/tips/2026/04/30/flex-message-usage-1/)では、現在Flex Messageで送信可能なメッセージの例をいくつか紹介しました。この記事では、端末による表示の違いを踏まえてFlex Messageのレイアウトを作るときのポイントを紹介します。

  :::toc

  :::

## `maxLines`は表示文字数を保証しない

商品名、店舗名、イベント名、表示名などは、文字数が一定とは限りません。短いサンプルデータだけでレイアウトを作ると、実際のデータを入れたときにテキストが途中で切れたり、隣の要素を圧迫したりすることがあります。

[テキストコンポーネント](/docs/messaging-api/flex-message-elements/#text)では、`wrap`を`true`にするとテキストを折り返して表示できます。一方で、すべてのテキストを無制限に折り返すと、メッセージ全体が長くなりすぎることがあります。その場合は、`maxLines`を使って表示する行数を制限します。

```json
{
  "type": "text",
  "text": "ワイヤレスノイズキャンセリングイヤホン Pro",
  "size": "md",
  "weight": "bold",
  "wrap": true,
  "maxLines": 2
}
```

`maxLines`は表示する行数を制限しますが、表示文字数を保証するものではありません。端末の画面幅、OS、言語設定、フォントなどによって1行に収まる文字数が変わるため、同じ`maxLines: 2`を設定していても、端末によって改行位置が異なります。また、テキストが指定した行数に収まらない場合は、表示される文字数や省略される位置も異なる可能性があります。詳しくは、「[テキストを折り返す](/docs/messaging-api/flex-message-elements/#text-wrap)」を参照してください。

以下は、同じ`maxLines: 2`のFlex Messageで改行位置が異なる例です。

| iOS（画面幅が広い端末）                                                                                                       | iOS（画面幅が狭い端末）                                                                                                         | Flex Message Simulator                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ![画面幅が広いiOS端末での表示](/media/tips/2026/flex-message-max-lines-ios-wide-ja.png){className="[\"border\",\"w-fix-240\"]"} | ![画面幅が狭いiOS端末での表示](/media/tips/2026/flex-message-max-lines-ios-narrow-ja.png){className="[\"border\",\"w-fix-240\"]"} | ![Flex Message Simulatorでの表示](/media/tips/2026/flex-message-max-lines-simulator-ja.png){className="[\"border\",\"w-fix-240\"]"} |

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
        "text": "イヤホンを発送しました",
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
                "text": "配送中",
                "size": "xxs",
                "weight": "bold",
                "color": "#06C755"
              }
            ]
          },
          {
            "type": "text",
            "text": "注文番号 BR-017",
            "size": "xs",
            "color": "#777777",
            "gravity": "center",
            "flex": 0
          }
        ]
      },
      {
        "type": "text",
        "text": "ワイヤレスノイズキャンセリングイヤホン Pro",
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
                "text": "お届け予定",
                "size": "sm",
                "color": "#777777",
                "flex": 0
              },
              {
                "type": "text",
                "text": "8月20日 10:00–11:00",
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
                "text": "配送先",
                "size": "sm",
                "color": "#777777",
                "flex": 0
              },
              {
                "type": "text",
                "text": "東京都ブラウン区コニー町1-2-3",
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
          "label": "配送状況を確認",
          "uri": "https://example.com/orders/BR-017"
        }
      }
    ]
  }
}
```

## 横並びの要素は画面幅の影響を受けやすい

[水平ボックス](/docs/messaging-api/flex-message-layout/#box-component-orientation)では、利用できる幅を子コンポーネントで分け合います。配送先や店舗名などの可変長テキストを横並びにすると、画面幅が狭い端末ではテキストが早く折り返され、ボックス全体の高さが変わる可能性があります。

可変長テキストを含む子ボックスの[`flex`プロパティ](/docs/messaging-api/flex-message-layout/#horizontal-box)に`0`を指定すると、その子ボックスは親ボックスの幅を上限として、内容をすべて表示するために必要な幅を取ろうとします。

そのため、親ボックスからはみ出した部分が表示されないことがあります。短いラベルを含む子ボックスには`flex: 0`を指定します。可変長テキストを含む子ボックスには`flex: 1`を指定し、子ボックス内のテキストには[`wrap: true`](/docs/messaging-api/flex-message-elements/#text-wrap)を指定すると、残りの幅を子ボックスに割り当ててテキストを折り返せます。

以下は、可変長テキストを含む子ボックスに`flex: 0`を指定した場合と、子ボックスに`flex: 1`、テキストに`wrap: true`を指定した場合を比較した例です。

| `flex: 0`                                                                                                                                    | `flex: 1`と`wrap: true`                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![flex: 0を指定し、ボックスの幅を超えた部分が表示されていない例](/media/tips/2026/flex-message-horizontal-layout-flex-0-ja.png){className="[\"border\",\"w-fix-240\"]"} | ![flex: 1とwrap: trueを指定し、テキストが折り返されている例](/media/tips/2026/flex-message-horizontal-layout-flex-1-wrap-ja.png){className="[\"border\",\"w-fix-240\"]"} |
| 店舗情報が必要な幅を取るため、店舗名の末尾と後ろにある「2名」が表示されません。                                                                                                     | 残りの幅に店舗名と住所が折り返され、すべての情報が表示されます。                                                                                                                     |

以下のJSONは、左側の`flex: 0`の例です。右側の例にするには、店舗情報を含むボックスの`flex`プロパティを`1`に変更します。

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
        "text": "BROWN レストラン",
        "size": "xs",
        "weight": "bold",
        "color": "#DDE1E5"
      },
      {
        "type": "text",
        "text": "ご予約を承りました",
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
        "text": "予約内容",
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
                "text": "8/20",
                "size": "xs",
                "weight": "bold",
                "color": "#4F5963",
                "align": "center"
              },
              {
                "type": "text",
                "text": "19:00",
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
                "text": "BROWN レストラン LINEヤフータワー21F スカイダイニング店",
                "size": "md",
                "weight": "bold",
                "wrap": true
              },
              {
                "type": "text",
                "text": "東京都ブラウン区コニー町1-2-3",
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
                "text": "2名",
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
            "text": "プラン",
            "size": "sm",
            "color": "#777777",
            "flex": 0
          },
          {
            "type": "text",
            "text": "季節のディナーコース",
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
          "label": "予約内容を確認する",
          "uri": "https://example.com/reservations/BR-017"
        }
      }
    ]
  }
}
```

また、以下は同じFlex Messageを画面幅の異なるiOS端末とFlex Message Simulatorで表示した例です。

| iOS（画面幅が広い端末）                                                                                                                     | iOS（画面幅が狭い端末）                                                                                                                       | Flex Message Simulator                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ![画面幅が広いiOS端末での横並びレイアウト](/media/tips/2026/flex-message-horizontal-layout-ios-wide-ja.png){className="[\"border\",\"w-fix-240\"]"} | ![画面幅が狭いiOS端末での横並びレイアウト](/media/tips/2026/flex-message-horizontal-layout-ios-narrow-ja.png){className="[\"border\",\"w-fix-240\"]"} | ![Flex Message Simulatorでの横並びレイアウト](/media/tips/2026/flex-message-horizontal-layout-simulator-ja.png){className="[\"border\",\"w-fix-240\"]"} |

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
        "text": "BROWN レストラン",
        "size": "xxs",
        "weight": "bold",
        "color": "#DCEAFF"
      },
      {
        "type": "text",
        "text": "ご予約を承りました",
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
        "text": "予約内容",
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
                "text": "8/20 · 19:00",
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
                "text": "BROWN レストラン LINEヤフータワー21F店",
                "size": "lg",
                "weight": "bold",
                "color": "#111111",
                "wrap": true
              },
              {
                "type": "text",
                "text": "東京都ブラウン区コニー町1-2-3",
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
                "text": "2名",
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
                "text": "プラン",
                "size": "sm",
                "color": "#777777",
                "flex": 0
              },
              {
                "type": "text",
                "text": "季節のディナーコース",
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
          "label": "予約内容を確認する",
          "uri": "https://example.com/reservations/BR-017"
        }
      }
    ]
  }
}
```

## フォントサイズ設定によって改行位置が変わる

テキスト、ボタン、アイコンの[`scaling`プロパティ](/docs/messaging-api/flex-message-layout/#size-scaling)を`true`にすると、ユーザーが設定したLINEアプリのフォントサイズに応じて、フォントやアイコンのサイズが拡大縮小されます。フォントサイズを大きく設定している場合は、テキストが早く折り返されたり、コンポーネントの高さが変わったりする可能性があります。

ボタンやテキストには、[`adjustMode`プロパティ](/docs/messaging-api/flex-message-layout/#adjusts-fontsize-to-fit)で`shrink-to-fit`を指定できます。ただし、`adjustMode`プロパティはベストエフォートで機能するため、プラットフォームによって動作が異なる、または動作しない場合があります。

以下は、iOS版LINEのフォントサイズを［**特大**］に設定し、各コンポーネントの`scaling`プロパティを切り替えた場合の表示例です。どちらのボタンにも`adjustMode: shrink-to-fit`を指定しています。

| `scaling: true`                                                                                                         | `scaling: false`                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ![scaling: trueを指定した表示](/media/tips/2026/flex-message-font-scaling-true-ja.png){className="[\"border\",\"w-fix-240\"]"} | ![scaling: falseを指定した表示](/media/tips/2026/flex-message-font-scaling-false-ja.png){className="[\"border\",\"w-fix-240\"]"} |

レイアウトの変化を避けるために`scaling: false`を指定するのではなく、`scaling: true`を指定したうえで、フォントサイズが変わっても重要な情報を読めるレイアウトにしてください。

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
        "text": "予約が完了しました",
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
        "text": "LINE Developers Meetup ― Messaging APIを学ぶスペシャルセッション",
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
                "text": "日時",
                "size": "sm",
                "color": "#777777",
                "flex": 0,
                "scaling": true
              },
              {
                "type": "text",
                "text": "8月20日 19:00",
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
                "text": "会場",
                "size": "sm",
                "color": "#777777",
                "flex": 0,
                "scaling": true
              },
              {
                "type": "text",
                "text": "LINEヤフー株式会社 赤坂オフィス イベントスペース",
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
          "label": "予約内容を確認・変更する",
          "uri": "https://example.com/reservations/meetup"
        }
      }
    ]
  }
}
```

## 重要な情報は別のコンポーネントに分ける

支払期限、予約日時、注文ステータスなどの重要な情報は、長い商品名や説明文に含めず、独立したテキストコンポーネントとして配置します。これにより、商品名や説明文が途中で省略されても、重要な情報を表示できます。

以下は、商品名とお届け予定を別のコンポーネントにしたFlex MessageをiOS端末で表示した例です。

![商品名とお届け予定を別のコンポーネントにした表示](/media/tips/2026/flex-message-separate-important-information-ja.png){className="[\"border\",\"w-fix-240\"]"}

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
        "text": "ご注文の商品を配達中です",
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
        "text": "ワイヤレスノイズキャンセリングイヤホン BROWN Pro ミッドナイトブルースペシャルエディション",
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
            "text": "お届け予定",
            "size": "sm",
            "color": "#555555",
            "flex": 0
          },
          {
            "type": "text",
            "text": "8月20日 10:00–11:00",
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

  :::admonition{title="レイアウトを固定しすぎない" type="tip"}
  可変長テキストを含むレイアウトでは、コンポーネントの幅をピクセル値で固定すると、画面幅によって表示できるテキストが少なくなります。また、[`position`プロパティ](/docs/messaging-api/flex-message-layout/#component-position)に`absolute`を指定したコンポーネントは他のコンポーネントの配置に影響しないため、要素同士が重なる可能性があります。重要な情報は可変長テキストと分け、`flex`プロパティを使う通常のレイアウト内に配置することをおすすめします。
  :::

## まとめ

Flex Messageはレイアウトの自由度が高いぶん、端末の画面幅やフォントサイズなどによる表示の違いに備えることが重要です。必要に応じて`maxLines`で表示する行数を制限し、`flex`と`wrap`を使って可変長テキストを適切に折り返してください。また、重要な情報を別のコンポーネントに分けることで、テキストの表示範囲が変わっても情報を伝えやすくなります。

Flex Messageを作成するときは、完成した見た目だけでなく、「長いテキストを入れても重要な情報が表示されるか」「画面幅が変わっても要素が重なったり、表示されなくなったりしないか」「フォントサイズを変更しても読みやすいか」も確認してください。

  :::style
  html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sPWt5, html code.shiki .sPWt5{--shiki-default:#7EE787}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="messaging-api, flex-message" lang="en" section="tips"}

  :::
::
