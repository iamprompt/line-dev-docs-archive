---
title: Flex Messageの要素
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /ja/docs/messaging-api/flex-message-elements
__hash__: FYDpiv_ZFIT84hkZZrkVNYtJyBHugE0LF2tlkNsH9zE
seo:
  title: Flex Messageの要素
  description: null
---

# :page-title

:markdown-controlsFlex Messageは、3層の階層構造で構成されています。最上位層の[コンテナ](#container)、そして[ブロック（ヘッダー、ヒーロー、ボディ、フッター）](#block)、[コンポーネント](#component)の順で続きます。ここでは、Flex Messageを構成する要素について例を挙げて説明します。

![Flex Messageの構造](/media/messaging-api/using-flex-messages/overviewSample.png){className="[\"border\"]"}

## コンテナ

コンテナは、Flex Messageの最上位の構造です。以下のタイプのコンテナを利用できます。

| タイプ                | 説明                        |
| ------------------ | ------------------------- |
| [バブル](#bubble)     | 単体のメッセージバブルを表示するコンテナ      |
| [カルーセル](#carousel) | 複数のメッセージバブルを横に並べて表示するコンテナ |

### バブル

バブルは、1つのメッセージバブルを構成するコンテナです。JSONスキーマについて詳しくは、『Messaging APIリファレンス』の「[バブル](/reference/messaging-api/#bubble)」を参照してください。

![バブルの例](/media/messaging-api/flex-message-elements/bubbleSample.png){className="[\"border\"]"}

### カルーセル

カルーセルは、1つ以上のバブルを要素に持つコンテナです。カルーセル内のバブルは、横にスクロールして閲覧できます。

![カルーセルの例](/media/messaging-api/flex-message-elements/carouselSample.png){className="[\"border\"]"}

上のFlex Messageを表現するには以下のようなJSONデータを指定します。JSONスキーマについて詳しくは、『Messaging APIリファレンス』の「[カルーセル](/reference/messaging-api/#f-carousel)」を参照してください。

```json
{
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "wrap": true
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
            "action": {
              "type": "uri",
              "label": "Go",
              "uri": "https://example.com"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "Hello, World!",
            "wrap": true
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
            "action": {
              "type": "uri",
              "label": "Go",
              "uri": "https://example.com"
            }
          }
        ]
      }
    }
  ]
}
```

## ブロック

ブロックは、バブルを構成する構造です。以下のタイプのブロックを利用できます。

| タイプ  | 説明                     |
| ---- | ---------------------- |
| ヘッダー | メッセージの件名や見出しを表示するブロック  |
| ヒーロー | 画像などの主要なコンテンツを表示するブロック |
| ボディ  | 主要なメッセージコンテンツを表示するブロック |
| フッター | ボタンや補足情報を表示するブロック      |

ヘッダー、ヒーロー、ボディ、フッターは、この順番でバブルの上から表示されます。1つのバブルに対して、すべてのブロックを使用する必要はありません。どのブロックもバブル内で1つだけ指定できます。JSONスキーマについて詳しくは、『Messaging APIリファレンス』の「[バブル](/reference/messaging-api/#bubble)」の`header`プロパティ、`hero`プロパティ、`body`プロパティ、`footer`プロパティを参照してください。

![ブロックスタイルの例](/media/messaging-api/flex-message-elements/blockStylesSample.png){className="[\"border\"]"}

上のFlex Messageを表現するには以下のようなJSONデータを指定します。

```json
{
  "type": "bubble",
  "styles": {
    "header": {
      "backgroundColor": "#ffaaaa"
    },
    "body": {
      "backgroundColor": "#aaffaa"
    },
    "footer": {
      "backgroundColor": "#aaaaff"
    }
  },
  "header": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "header"
      }
    ]
  },
  "hero": {
    "type": "image",
    "url": "https://example.com/flex/images/image.jpg",
    "size": "full",
    "aspectRatio": "2:1"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "body"
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "footer"
      }
    ]
  }
}
```

## コンポーネント

コンポーネントは、[ブロック](#block)を構成する要素です。以下のコンポーネントを利用できます。

| コンポーネント              | 説明                                                |
| -------------------- | ------------------------------------------------- |
| [ボックス](#box)         | 水平または垂直のレイアウト方向を定義し、他のコンポーネントを含むことができるコンポーネント     |
| [ボタン](#button)       | ボタンを描画するコンポーネント。ユーザーがタップすると、指定したアクションが実行されます。     |
| [画像](#image)         | 画像を描画するコンポーネント                                    |
| [動画](#video)         | 動画を描画するコンポーネント                                    |
| [アイコン](#icon)        | アイコンを描画するコンポーネント                                  |
| [テキスト](#text)        | 文字列を描画するコンポーネント。色、サイズ、および太さを指定できます。               |
| [スパン](#span)         | スタイルが異なる複数の文字列を描画するコンポーネント。色、サイズ、太さ、および装飾を指定できます。 |
| [セパレータ](#separator)  | 分割線を描画するコンポーネント                                   |
| [フィラー](#filler)（非推奨） | スペースを作るためのコンポーネント                                 |

### ボックス

ボックスは、水平または垂直にコンポーネントをレイアウトするためのコンポーネントです。ボックスを含む、他のコンポーネントを含めることができます。レイアウトについて詳しくは、「[Flex Messageのレイアウト](/docs/messaging-api/flex-message-layout/)」を参照してください。JSONスキーマについて詳しくは、『Messaging APIリファレンス』の「[ボックス](/reference/messaging-api/#box)」を参照してください。

### ボタン

ボタンを描画するコンポーネントです。ユーザーが、ボタンをタップしたときに実行される、[アクション](/docs/messaging-api/actions/)を指定できます。以下のように、ボタンには3つのスタイルがあり、それぞれでボタンの色を変更できます。

![ボタンの例](/media/messaging-api/flex-message-elements/buttonSample.png){className="[\"border\"]"}

上のFlex Messageを表現するには以下のようなJSONデータを指定します。JSONスキーマについて詳しくは、『Messaging APIリファレンス』の「[ボタン](/reference/messaging-api/#button)」を参照してください。

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "spacing": "md",
    "contents": [
      {
        "type": "button",
        "style": "primary",
        "action": {
          "type": "uri",
          "label": "Primary style button",
          "uri": "https://example.com"
        }
      },
      {
        "type": "button",
        "style": "secondary",
        "action": {
          "type": "uri",
          "label": "Secondary style button",
          "uri": "https://example.com"
        }
      },
      {
        "type": "button",
        "style": "link",
        "action": {
          "type": "uri",
          "label": "Link style button",
          "uri": "https://example.com"
        }
      }
    ]
  }
}
```

### 画像

画像を描画するコンポーネントです。

![画像の例](/media/messaging-api/flex-message-elements/imageSample.png){className="[\"border\"]"}

上のFlex Messageを表現するには以下のようなJSONデータを指定します。JSONスキーマについて詳しくは、『Messaging APIリファレンス』の「[画像](/reference/messaging-api/#f-image)」を参照してください。

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "image",
        "url": "https://example.com/flex/images/image.jpg",
        "size": "md"
      }
    ]
  }
}
```

### 動画

動画を描画するコンポーネントです。動画の使い方について詳しくは、「[動画を含むFlex Messageを作成する](/docs/messaging-api/create-flex-message-including-video/)」を参照してください。

![動画の例](/media/messaging-api/flex-message-elements/video-sample.png){className="[\"w-fix-280\"]"}

上のFlex Messageを表現するには以下のようなJSONデータを指定します。JSONスキーマについて詳しくは、『Messaging APIリファレンス』の「[動画](/reference/messaging-api/#f-video)」を参照してください。

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

### アイコン

隣接するテキストを装飾するために、アイコンを描画するコンポーネントです。このコンポーネントは、[ベースラインボックス](/docs/messaging-api/flex-message-layout/#baseline-box)内でのみ使用できます。

![アイコンの例](/media/messaging-api/flex-message-elements/iconSample.png){className="[\"border\"]"}

上のFlex Messageを表現するには以下のようなJSONデータを指定します。JSONスキーマについて詳しくは、『Messaging APIリファレンス』の「[アイコン](/reference/messaging-api/#icon)」を参照してください。

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "md"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "md"
          }
        ]
      },
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "lg"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "lg"
          }
        ]
      },
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "xl"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "xl"
          }
        ]
      },
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "xxl"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "xxl"
          }
        ]
      },
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "3xl"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "3xl"
          }
        ]
      }
    ]
  }
}
```

### テキスト

文字列を描画するコンポーネントです。色、サイズ、および太さを指定できます。長いテキストを[折り返し](#text-wrap)たり、折り返したテキストの行間を調整したりできます。

![テキストの例](/media/messaging-api/flex-message-elements/textSample.png){className="[\"border\"]"}

上のFlex Messageを表現するには以下のようなJSONデータを指定します。JSONスキーマについて詳しくは、『Messaging APIリファレンス』の「[テキスト](/reference/messaging-api/#f-text)」を参照してください。

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "Closing the distance",
        "size": "md",
        "align": "center",
        "color": "#ff0000"
      },
      {
        "type": "text",
        "text": "Closing the distance",
        "size": "lg",
        "align": "center",
        "color": "#00ff00"
      },
      {
        "type": "text",
        "text": "Closing the distance",
        "size": "xl",
        "align": "center",
        "weight": "bold",
        "color": "#0000ff"
      }
    ]
  }
}
```

#### テキストを折り返す

デフォルトでは、テキストの幅を超える部分は省略記号に置き換えられます。以下は、長いテキストが省略される場合の例です。

![折り返しなしの例](/media/messaging-api/flex-message-elements/nowrapSample.png){className="[\"border\"]"}

上のFlex Messageを表現するには以下のようなJSONデータを指定します。

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  }
}
```

テキストを折り返して表示することで、テキストの省略を避けることができます。テキストを折り返して表示するには、`wrap`プロパティに`true`を指定します。また、改行文字（`\n`）を使って改行できます。以下は、テキストの折り返しと改行を使用したFlex Messageの例です。

![折り返しありの例](/media/messaging-api/flex-message-elements/wrap-sample.png){className="[\"w-fix-280\"]"}

::admonition{title="注意" type="note"}
テキストの最後に改行文字（`\n`）を入力した場合の描画結果は、環境によって異なる可能性があります。
::

上のFlex Messageを表現するには以下のようなJSONデータを指定します。`wrap`プロパティに`true`を設定しています。

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n tempor incididunt ut labore et dolore magna aliqua.",
        "wrap": true
      }
    ]
  }
}
```

##### テキスト内の行間を広げる

折り返したテキストの行間は、`lineSpacing`プロパティで指定できます。

::admonition{title="行間を指定できる範囲" type="note"}
`lineSpacing`プロパティは、テキスト内の行間にのみ適用されます。そのため、開始行の上部と最終行の下部には適用されません。
::

![テキスト内の行間を広げた例](/media/messaging-api/flex-message-elements/line-spacing-sample.png){className="[\"w-fix-280\"]"}

上のFlex Messageを表現するには以下のようなJSONデータを指定します。`lineSpacing`プロパティに`20px`を設定しています。

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n tempor incididunt ut labore et dolore magna aliqua.",
        "wrap": true,
        "lineSpacing": "20px"
      }
    ]
  }
}
```

### スパン

スタイルが異なる複数の文字列を描画するコンポーネントです。色、サイズ、太さ、および装飾を指定できます。スパンは、[テキスト](#text)の`contents`プロパティに設定します。

![スパンの例](/media/messaging-api/flex-message-elements/spanSample.png){className="[\"border\"]"}

上のFlex Messageを表現するには以下のようなJSONデータを指定します。JSONスキーマについて詳しくは、『Messaging APIリファレンス』の「[スパン](/reference/messaging-api/#span)」を参照してください。

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "text",
        "text": "hello, world",
        "contents": [
          {
            "type": "span",
            "text": "Hello, world!",
            "decoration": "line-through"
          },
          {
            "type": "span",
            "text": "\nClosing",
            "color": "#ff0000",
            "size": "sm",
            "weight": "bold",
            "decoration": "none"
          },
          {
            "type": "span",
            "text": " "
          },
          {
            "type": "span",
            "text": "the",
            "size": "lg",
            "color": "#00ff00",
            "decoration": "underline",
            "weight": "bold"
          },
          {
            "type": "span",
            "text": " "
          },
          {
            "type": "span",
            "text": "distance",
            "color": "#0000ff",
            "weight": "bold",
            "size": "xxl"
          }
        ],
        "wrap": true,
        "align": "center"
      }
    ]
  }
}
```

### セパレータ

[ボックス](#box)内に分割線を描画するコンポーネントです。水平ボックスに含めた場合は垂直線、垂直ボックスに含めた場合は水平線が描画されます。

![セパレータの例](/media/messaging-api/flex-message-elements/separatorSample.png){className="[\"border\"]"}

上のFlex Messageを表現するには以下のようなJSONデータを指定します。JSONスキーマについて詳しくは、『Messaging APIリファレンス』の「[セパレータ](/reference/messaging-api/#separator)」を参照してください。

```json
{
  "type": "bubble",
  "body": {
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
            "text": "orange"
          },
          {
            "type": "separator"
          },
          {
            "type": "text",
            "text": "apple"
          }
        ]
      },
      {
        "type": "separator"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "spacing": "md",
        "contents": [
          {
            "type": "text",
            "text": "grape"
          },
          {
            "type": "separator"
          },
          {
            "type": "text",
            "text": "lemon"
          }
        ]
      }
    ]
  }
}
```

### フィラー

::admonition{title="フィラーは非推奨のコンポーネントです" type="warning"}
スペースを作るには、フィラーの代わりに各コンポーネントのプロパティを使用してください。詳しくは、「[コンポーネントの位置](/docs/messaging-api/flex-message-layout/#component-position)」を参照してください。
::

スペースを作るためのコンポーネントです。ボックス内のコンポーネントの間、前、または後にスペースを入れることができます。以下の例では、画像の間にフィラーを挿入しています。

![フィラーの例](/media/messaging-api/flex-message-elements/fillerSample.png){className="[\"border\"]"}

上のFlex Messageを表現するには以下のようなJSONデータを指定します。JSONスキーマについて詳しくは、『Messaging APIリファレンス』の「[フィラー](/reference/messaging-api/#filler)」を参照してください。

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "image",
        "url": "https://example.com/flex/images/image.jpg"
      },
      {
        "type": "filler"
      },
      {
        "type": "image",
        "url": "https://example.com/flex/images/image.jpg"
      }
    ]
  }
}
```

## 関連ページ

- [Flex Messageを送信する](/docs/messaging-api/using-flex-messages/)
- [Flex Messageのレイアウト](/docs/messaging-api/flex-message-layout/)
- [Flex Message](/reference/messaging-api/#flex-message)（Messaging APIリファレンス）
