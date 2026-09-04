---
title: カスタムアクションボタンを実装する
navigation: true
description: LINEミニアプリでカスタムアクションボタンを実装する方法を説明します。
meta: >-
  {"tags":"line-mini-app","author":null,"last_updated":null,"source_language":"ja"}
path: /ja/docs/line-mini-app/develop/share-messages
__hash__: etHcebX0v-g5OlMTCHKgnFPbuw67l-nsoYc8xSjjQjs
seo:
  title: カスタムアクションボタンを実装する
  description: LINEミニアプリでカスタムアクションボタンを実装する方法を説明します。
---

# :page-title

:markdown-controlsLINEミニアプリでは、現在開いているページを友だちと共有できるアクションボタンが、（A）[ヘッダー](/docs/line-mini-app/discover/ui-components/#header)に用意されています。このアクションボタンはLINEによって実装されていてデフォルトで表示されますが、ボタンの動作やメッセージの内容は、カスタマイズできません。

一方、（B）ボディにカスタムアクションボタンを実装すると、メッセージの内容をカスタマイズしてLINEミニアプリをシェアできます。

![](/media/line-mini-app/mini_concept.png){className="[\"w-fix-280\"]"}

## ガイドライン

カスタムアクションボタンを実装してカスタムシェアメッセージを送信する場合は、ユーザーがメッセージの内容を早くかつ正確に把握できるように、以下のガイドラインに従ってください。

::admonition{title="注意" type="note"}
提供するサービスの特性上、このドキュメントのガイドラインのとおりにカスタムシェアメッセージを実装できない場合は、[mini_request@linecorp.com](mailto:mini_request@linecorp.com)までご連絡ください。
::

::admonition{title="LINEミニアプリのLIFF URLが変更されました" type="note"}
[2023年12月13日](/news/2023/12/13/change-of-liff-url-for-line-mini-app/)より、LINEミニアプリのLIFF URLが`https://miniapp.line.me/{liffId}`に変更されました。

従来の`https://liff.line.me/{liffId}`にアクセスした場合も、引き続き当該のLINEミニアプリが開きます。そのため、発行済みのQRコードも引き続き利用可能です。
::

### シェアターゲットピッカーの利用

ボディにカスタムアクションボタンを配置し、ボタンがタップされたときに、ターゲットピッカー（送信先を選択する画面）を表示するように実装してください。ターゲットピッカーでユーザーが送信相手を選択すると、[Flex Message](/docs/messaging-api/using-flex-messages/)など、開発者が作成したメッセージを送信できます。

![target picker](/media/liff/share-target-picker_tobe_ja.png){className="[\"border\",\"w-fix-280\"]"}

シェアターゲットピッカーを利用する方法について詳しくは、「[ユーザーの友だちにメッセージを送信する（シェアターゲットピッカー）](/docs/liff/developing-liff-apps/#share-target-picker)」を参照してください。

### カスタムシェアメッセージのフォーマット

カスタムシェアメッセージは、Flex Messageの[バブル](/docs/messaging-api/flex-message-elements/#bubble)コンテナを使用して作成します。 Flex Messageの[カルーセル](/docs/messaging-api/flex-message-elements/#carousel)コンテナは使用しないでください。

また、カスタムシェアメッセージには、[標準タイプ](#standard)と[画像リストタイプ](#image-list)があり、それぞれ以下のA〜Fのセクションに分かれています。

![](/media/line-mini-app/mini_design_flex_msg_common.webp){className="[\"w-fix-640\"]"}

| ラベル | セクション  | 必須  | 説明                                                                                                                                                                                                                                |
| --- | ------ | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A   | 画像     | 任意  | 全体をスクロールせずに表示できる大きさの画像を設定してください。                                                                                                                                                                                                  |
| B   | タイトル   | 必須  | メッセージの内容を要約してください。                                                                                                                                                                                                                |
| C   | サブタイトル | ※   | メッセージの副題です。                                                                                                                                                                                                                       |
| D   | 詳細     | ※   | ラベルと説明を含めた項目を挿入してください。標準タイプと画像リストタイプで挿入できる項目の最大数が異なります。- 標準タイプ：最大10件 - 画像リストタイプ：最大5件                                                                                                                                              |
| E   | ボタン    | 必須  | - ボタンを3個まで挿入できます。 - 最低1つのボタンは、シェアする内容を詳しく説明するページ（詳細ページ）を表示するように設定してください。                                                                                                                                                          |
| F   | フッター   | 必須  | LINEミニアプリのアイコン、LINEミニアプリの名前、および画像（ ![>](https://vos.line-scdn.net/service-notifier/footer_go_btn.png)）を挿入してください。この画像は変更しないでください。この画像をタップしたときに、LINEミニアプリのトップページ（`https://miniapp.line.me/{your-liffId}`）を表示するようにURIアクションを指定してください。 |

※サブタイトル（C）または詳細（D）のいずれか一方を挿入する必要があります。両方を挿入することもできます。

#### 標準タイプのガイドライン

標準タイプのFlex Messageは、以下のガイドラインに従ってください。

JSONファイルの例は、「[ガイドラインに従ったJSONファイルの例](/docs/line-mini-app/develop/share-messages-standard/)」を参照してください。

::admonition{title="注意" type="note"}
- アクションは、ボタン（E）およびフッター（F）の指定されたコンポーネントにのみ設定できます。
- ここで説明されていないプロパティは変更してはいけません。
::

![](/media/line-mini-app/mini_design_flex_msg_standard.webp){className="[\"w-fix-640\"]"}

##### 標準タイプ - 画像（A）

画像（A）は、ヒーローブロックに入れてください。

| ラベル | セクション | 要素                                                                                                                    | 説明                                                                                                                                                      |
| --- | ----- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A   | 画像    | [ヒーローブロック](/docs/messaging-api/flex-message-elements/#block) > [画像](/docs/messaging-api/flex-message-elements/#image) | - `"url": "{画像のURL}"` - `"size": "full"` - `"aspectRatio": "{width}:{height}"`   ただし、`{height}`には、`{width} * 2`以下の値を設定してください。 - `"aspectMode": "cover"` |

```json
{
    "type": "bubble",
    "hero": { // ヒーローブロック
        // 画像（A）
        "type": "image",
        "url": "https://example.com/hero-image.png",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover"
    },
    "body": {. . .}
}
```

##### 標準タイプ - ボディ

タイトル（B）、サブタイトル（C）、詳細（D）、ボタン（E）を入れるボディブロックは、以下のように指定してください。

| ラベル | セクション | 要素                                                                                                                   | 説明                                           |
| --- | ----- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| -   | -     | [ボディブロック](/docs/messaging-api/flex-message-elements/#block) > [ボックス](/docs/messaging-api/flex-message-elements/#box) | - `"layout": "vertical"` - `"spacing": "md"` |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": { // ボディブロック
        // ボックス
        "type": "box",
        "layout": "vertical",
        "contents": [ ... ],
        "spacing": "md"
    }
}
```

##### 標準タイプ - タイトル（B）

| ラベル | セクション | 要素                                                      | 説明                                                                                                           |
| --- | ----- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| B   | タイトル  | [ボックス](/docs/messaging-api/flex-message-elements/#box)  | - `"layout": "vertical"` - `"spacing": "none"`                                                               |
| B   | タイトル  | [テキスト](/docs/messaging-api/flex-message-elements/#text) | - `"text": "{タイトル}"`   最大行数：2行 - `"size": "lg"` - `"color": "#000000"` - `"weight": "bold"` - `"wrap": true` |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // タイトル（B） - ボックス
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // テキスト
                        "type": "text",
                        "text": "Main title",
                        "size": "lg",
                        "color": "#000000",
                        "weight": "bold",
                        "wrap": true
                    }
                ],
                "spacing": "none"
            }
        ],
        "spacing": "md"
    }
}
```

##### 標準タイプ - サブタイトル（C）

| ラベル | セクション  | 要素                                                      | 説明                                                                                        |
| --- | ------ | ------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| C   | サブタイトル | [ボックス](/docs/messaging-api/flex-message-elements/#box)  | - `"layout": "vertical"` - `"spacing": "none"`                                            |
| C   | サブタイトル | [テキスト](/docs/messaging-api/flex-message-elements/#text) | - `"text": "{サブタイトル}"`   最大行数：2行 - `"size": "sm"` - `"color": "#999999"` - `"wrap": true` |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // タイトル（B） - ボックス
                ...
            },
            {   // サブタイトル（C） - ボックス
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // テキスト
                        "type": "text",
                        "text": "Sub-title",
                        "size": "sm",
                        "color": "#999999",
                        "wrap": true
                    }
                ],
                "spacing": "none"
            }
        ],
        "spacing": "md"
    }
}
```

##### 標準タイプ - 詳細（D）

| ラベル | セクション     | 要素                                                      | 説明                                                                                                     |
| --- | --------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| D   | 詳細        | [ボックス](/docs/messaging-api/flex-message-elements/#box)  | - `"layout": "vertical"` - `"spacing": "sm"` - `"margin": "lg"` - `"flex": 1`                          |
| D   | 詳細 - アイテム | [ボックス](/docs/messaging-api/flex-message-elements/#box)  | D-1〜D-2を1組だけ入れるボックスです。- `"layout": "horizontal"` - `"spacing": "sm"` - `"flex": 1`                     |
| D-1 | 詳細 - ラベル  | [テキスト](/docs/messaging-api/flex-message-elements/#text) | - `"text": "{ラベル}"`   最大行数：1行 - `"size": "sm"` - `"color": "#555555"` - `"wrap": false` - `"flex": 20` |
| D-2 | 詳細 - 説明   | [テキスト](/docs/messaging-api/flex-message-elements/#text) | - `"text": "{説明}"`   最大行数：1行 - `"size": "sm"` - `"color": "#111111"` - `"wrap": false` - `"flex": 55`  |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // タイトル（B） - ボックス
                ...
            },
            {   // サブタイトル（C） - ボックス
                ...
            },
            {   // 詳細（D） - ボックス
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // ラベル（D-1） - ボックス
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {   // テキスト
                                "type": "text",
                                "text": "Label 1",
                                "size": "sm",
                                "color": "#555555",
                                "wrap": false,
                                "flex": 20
                            },
                            {   // 説明
                                "type": "text",
                                "text": "Description 1",
                                "size": "sm",
                                "color": "#111111",
                                "wrap": false,
                                "flex": 55
                            }
                        ],
                        "flex": 1,
                        "spacing": "sm"
                    },
                    {   // 説明（D-2） - ボックス
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {   // テキスト
                                "type": "text",
                                "text": "Label 2",
                                "size": "sm",
                                "color": "#555555",
                                "wrap": false,
                                "flex": 20
                            },
                            {   // テキスト
                                "type": "text",
                                "text": "Description 2",
                                "size": "sm",
                                "color": "#111111",
                                "wrap": false,
                                "flex": 55
                            }
                        ],
                        "flex": 1,
                        "spacing": "sm"
                    }
                ],
                "spacing": "sm",
                "margin": "lg",
                "flex": 1
            }
        ],
        "spacing": "md"
    }
}
```

##### 標準タイプ - ボタン (E)

| ラベル | セクション                      | 要素                                                       | 説明                                                                                                                                                                                                                                                                                                                         |
| --- | -------------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| E   | ボタン                        | [ボックス](/docs/messaging-api/flex-message-elements/#box)   | E-1〜E-2を入れるボックスです。- `"layout": "vertical"` - `"spacing": "xs"` - `"margin": "lg"`                                                                                                                                                                                                                                          |
| E-1 | ボタン   （linkスタイルのみを使用する場合）  | [ボタン](/docs/messaging-api/flex-message-elements/#button) | - `"style": "link"` - `"height": "sm"` - `"color": "{文字の色}"` - `"action" : { ... }`   このボタンをタップしたときに、LINEミニアプリのページを表示するようにURIアクションを指定してください。LINEミニアプリのトップページ以外のページを表示する場合は、[パーマネントリンク](/docs/line-mini-app/develop/permanent-links/)を指定してください。                                                                             |
| E-2 | ボタン   （primaryスタイルを使用する場合) | [ボタン](/docs/messaging-api/flex-message-elements/#button) | - 一番上のボタンに`"style": "primary"`、それ以外のボタンに`"style": "link"`を指定してください。`"secondary"`は使用できません。 - `"height": "md"` - `"color": "{文字の色または背景色}"` - `"action" : { ... }`   このボタンをタップしたときに、LINEミニアプリのページを表示するようにURIアクションを指定してください。LINEミニアプリのトップページ以外のページを表示する場合は、[パーマネントリンク](/docs/line-mini-app/develop/permanent-links/)を指定してください。 |

primaryスタイルを使用する場合：

```json
{
    "type": "bubble",
    "hero": { ... }
    },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // タイトル（B） - ボックス
                ...
            },
            {   // サブタイトル（C） - ボックス
                ...
            },
            {   // 詳細（D） - ボックス
                ...
            },
            {   // ボタン（E） - ボックス
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // ボタン（primary）
                        "type": "button",
                        "action": {
                            "type": "uri",
                            "label": "View details",
                            "uri": "https://miniapp.line.me/123456-abcedfg"
                        },
                        "style": "primary",
                        "height": "md",
                        "color": "#17c950"
                    },
                    {   // ボタン（link）
                        "type": "button",
                        "action": {
                            "type": "uri",
                            "label": "Share",
                            "uri": "https://miniapp.line.me/123456-abcedfg/share"
                        },
                        "style": "link",
                        "height": "md",
                        "color": "#469fd6"
                    }
                ],
                "spacing": "xs",
                "margin": "lg"
            }
        ],
        "spacing": "md"
    }
}
```

##### 標準タイプ - フッター（F）

フッター（F）は、フッターブロックに入れてください。

| ラベル | セクション                                                              | 要素                                                                                                                    | 説明                                                                                                                                                                                                                                                           |
| --- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| -   | -                                                                  | [フッターブロック](/docs/messaging-api/flex-message-elements/#block) > [ボックス](/docs/messaging-api/flex-message-elements/#box) | - `"layout": "vertical"`                                                                                                                                                                                                                                     |
| -   | -                                                                  | [セパレータ](/docs/messaging-api/flex-message-elements/#separator)                                                         | - `"color": "#f0f0f0"`                                                                                                                                                                                                                                       |
| F   | フッター                                                               | [ボックス](/docs/messaging-api/flex-message-elements/#box)                                                                | F-1〜F-3を入れるボックスです。- `"layout": "horizontal"` - `"flex": 1` - `"spacing": "md"` - `"margin": "md"`                                                                                                                                                            |
| F-1 | LINEミニアプリのアイコン                                                     | [画像](/docs/messaging-api/flex-message-elements/#image)                                                                | - `"url": "{画像のURL}"` - `"flex": 1` - `"gravity": "center"`                                                                                                                                                                                                  |
| F-2 | LINEミニアプリの名前                                                       | [テキスト](/docs/messaging-api/flex-message-elements/#text)                                                               | - `"text": "{LINEミニアプリの名前}"`   最大行数：1行 - `"flex": 19` - `"size": "xs"` - `"color": "#999999"` - `"weight": "bold"` - `"gravity": "center"` - `"wrap": false`                                                                                                 |
| F-3 | ![>](https://vos.line-scdn.net/service-notifier/footer_go_btn.png) | [画像](/docs/messaging-api/flex-message-elements/#image)                                                                | - `"url": "https://vos.line-scdn.net/service-notifier/footer_go_btn.png"` - `"flex": 1` - `"gravity": "center"` - `"size": "xxs"` - `"action" : { ... }`   この画像をタップしたときに、LINEミニアプリのトップページ（`https://miniapp.line.me/{your-liffId}`）を表示するようにURIアクションを指定してください。 |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": { ... },
    "footer": { // フッターブロック
        // ボックス
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // セパレータ
                "type": "separator",
                "color": "#f0f0f0"
            },
            {   // フッター（F） - ボックス
                "type": "box",
                "layout": "horizontal",
                "contents": [
                    {   // LINEミニアプリのアイコン（F-1）
                        "type": "image",
                        "url": "https://example.com/line-mini-app-icon.png",
                        "flex": 1,
                        "gravity": "center"
                    },
                    {   // LINEミニアプリの名前（F-2）
                        "type": "text",
                        "text": "Service name",
                        "flex": 19,
                        "size": "xs",
                        "color": "#999999",
                        "weight": "bold",
                        "gravity": "center",
                        "wrap": false
                    },
                    {   // >（F-3）
                        "type": "image",
                        "url": "https://vos.line-scdn.net/service-notifier/footer_go_btn.png",
                        "flex": 1,
                        "gravity": "center",
                        "size": "xxs",
                        "action": {
                            "type": "uri",
                            "label": "action",
                            "uri": "https://miniapp.line.me/123456-abcedfg"
                        }
                    }
                ],
                "flex": 1,
                "spacing": "md",
                "margin": "md"
            }
        ]
    }
}
```

#### 画像リストタイプのガイドライン

画像リストタイプのFlex Messageは、以下のガイドラインに従ってください。

JSONファイルの例は、「[ガイドラインに従ったJSONファイルの例](/docs/line-mini-app/develop/share-messages-standard/)」を参照してください。

::admonition{title="注意" type="note"}
- アクションは、ボタン（E）およびフッター（F）の指定されたコンポーネントにのみ設定できます。
- ここで説明されていないプロパティは変更してはいけません。
::

![](/media/line-mini-app/mini_design_flex_msg_list.webp){className="[\"w-fix-640\"]"}

##### 画像リストタイプ - 画像（A）

画像（A）は、ヒーローブロックに入れてください。

| ラベル | セクション | 要素                                                                                                                    | 説明                                                                                                                                                      |
| --- | ----- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A   | 画像    | [ヒーローブロック](/docs/messaging-api/flex-message-elements/#block) > [画像](/docs/messaging-api/flex-message-elements/#image) | - `"url": "{画像のURL}"` - `"size": "full"` - `"aspectRatio": "{width}:{height}"`   ただし、`{height}`には、`{width} * 2`以下の値を設定してください。 - `"aspectMode": "cover"` |

```json
{
    "type": "bubble",
    "hero": { // ヒーローブロック
        // 画像（A）
        "type": "image",
        "url": "https://example.com/hero-image.png",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover"
    },
    "body": {. . .}
}
```

##### 画像リストタイプ - ボディ

タイトル（B）、サブタイトル（C）、詳細（D）、ボタン（E）を入れるボディブロックは以下のように指定してください。

| ラベル | セクション | 要素                                                                                                                   | 説明                                           |
| --- | ----- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| -   | -     | [ボディブロック](/docs/messaging-api/flex-message-elements/#block) > [ボックス](/docs/messaging-api/flex-message-elements/#box) | - `"layout": "vertical"` - `"spacing": "md"` |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": { // ボディブロック
        // ボックス
        "type": "box",
        "layout": "vertical",
        "contents": [ ... ],
        "spacing": "md"
    }
}
```

##### 画像リストタイプ - タイトル（B）

| ラベル | セクション | 要素                                                      | 説明                                                                                                           |
| --- | ----- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| B   | タイトル  | [ボックス](/docs/messaging-api/flex-message-elements/#box)  | - `"layout": "vertical"` - `"spacing": "none"`                                                               |
| B   | タイトル  | [テキスト](/docs/messaging-api/flex-message-elements/#text) | - `"text": "{タイトル}"`   最大行数：2行 - `"size": "lg"` - `"color": "#000000"` - `"weight": "bold"` - `"wrap": true` |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // タイトル（B） - ボックス
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // テキスト
                        "type": "text",
                        "text": "Main title",
                        "size": "lg",
                        "color": "#000000",
                        "weight": "bold",
                        "wrap": true
                    }
                ],
                "spacing": "none"
            }
        ],
        "spacing": "md"
    }
}
```

##### 画像リストタイプ - サブタイトル（C）

| ラベル | セクション  | 要素                                                      | 説明                                                                                        |
| --- | ------ | ------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| C   | サブタイトル | [ボックス](/docs/messaging-api/flex-message-elements/#box)  | - `"layout": "vertical"` - `"spacing": "none"`                                            |
| C   | サブタイトル | [テキスト](/docs/messaging-api/flex-message-elements/#text) | - `"text": "{サブタイトル}"`   最大行数：2行 - `"size": "sm"` - `"color": "#999999"` - `"wrap": true` |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // タイトル（B） - ボックス
                ...
            },
            {   // サブタイトル（C） - ボックス
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // テキスト
                        "type": "text",
                        "text": "Sub-title",
                        "size": "sm",
                        "color": "#999999",
                        "wrap": true
                    }
                ],
                "spacing": "none"
            }
        ],
        "spacing": "md"
    }
}
```

##### 画像リストタイプ - 詳細（D）

| ラベル | セクション        | 要素                                                      | 説明                                                                                                                                                                                                                                                                                                                                                                                                              |
| --- | ------------ | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D   | 詳細           | [ボックス](/docs/messaging-api/flex-message-elements/#box)  | - `"layout": "vertical"` - `"spacing": "xl"` - `"margin": "lg"`                                                                                                                                                                                                                                                                                                                                                 |
| -   | 詳細 - アイテム    | [ボックス](/docs/messaging-api/flex-message-elements/#box)  | D-1〜D-4を1組だけ入れるボックスです。- `"layout": "horizontal"` - `"flex": 1`                                                                                                                                                                                                                                                                                                                                                  |
| D-1 | 詳細 - 画像      | [画像](/docs/messaging-api/flex-message-elements/#image)  | - `"url": "{画像のURL}"` - `"flex": 3` - `"size": "sm"` - `"aspectRatio": "1:1"` - `"aspectMode": "cover"`                                                                                                                                                                                                                                                                                                         |
| -   | 詳細 - テキストエリア | [ボックス](/docs/messaging-api/flex-message-elements/#box)  | D-2〜D-4を入れるボックスです。- `"layout": "vertical"` - `"flex": 8` - `"spacing": "xs"` - `"margin": "md"`                                                                                                                                                                                                                                                                                                                 |
| D-2 | 詳細 - 標準テキスト  | [テキスト](/docs/messaging-api/flex-message-elements/#text) | - `"text": "{標準テキスト}"` - `"size": "md"` - `"color": "#111111"`                                                                                                                                                                                                                                                                                                                                                  |
| D-3 | 詳細 - 強調テキスト  | [テキスト](/docs/messaging-api/flex-message-elements/#text) | - `"text": "{強調テキスト}"` - `"size": "md"` - `"color": "#111111"`                                                                                                                                                                                                                                                                                                                                                  |
| D-4 | 詳細 - 画像＋テキスト | [ボックス](/docs/messaging-api/flex-message-elements/#box)  | D-4の画像とテキストを入れるボックス：- `"layout": "horizontal"` - `"flex": 1`  D-4の[画像](/docs/messaging-api/flex-message-elements/#image)：- `"flex": 8` - `"url": "{画像のURL}"` - `"gravity": "center"` - `"size": "xxs"` - `"aspectRatio": "1:1"`  D-4の[テキスト](/docs/messaging-api/flex-message-elements/#text)：- `"flex": 85` - `"margin": "xs"` - `"text": "{テキスト}"` - `"size": "sm"` - `"color": "{色}"` - `"gravity": "center"` |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // タイトル（B） - ボックス
                ...
            },
            {   // サブタイトル（C） - ボックス
                ...
            },
            {   // 詳細（D） - ボックス
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // アイテム
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {   // 画像
                                "type": "image",
                                "url": "https://example.com/item-image01.png",
                                "flex": 3,
                                "size": "sm",
                                "aspectRatio": "1:1",
                                "aspectMode": "cover"
                            },
                            {   // テキストエリア
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {   // 標準テキスト（D-2）
                                        "type": "text",
                                        "text": "General text",
                                        "size": "md",
                                        "color": "#111111"
                                    },
                                    {   // 強調テキスト（D-3）
                                        "type": "text",
                                        "text": "Text to emphasize",
                                        "size": "md",
                                        "color": "#111111"
                                    },
                                    {   // 画像＋テキスト（D-4）
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {   // 画像
                                                "type": "image",
                                                "url": "https://example.com/item-image02.png",
                                                "flex": 8,
                                                "gravity": "center",
                                                "size": "xxs",
                                                "aspectRatio": "1:1"
                                            },
                                            {   // テキスト
                                                "type": "text",
                                                "text": "Image + text",
                                                "flex": 85,
                                                "gravity": "center",
                                                "size": "sm",
                                                "color": "#17c950",
                                                "margin": "xs"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "flex": 8,
                                "spacing": "xs",
                                "margin": "md"
                            }
                        ],
                        "flex": 1
                    }
                ],
                "spacing": "xl",
                "margin": "lg"
            }
        ],
        "spacing": "md"
    }
}
```

##### 画像リストタイプ - ボタン (E)

| ラベル | セクション                  | 要素                                                       | 説明                                                                                                                                                                                                                                                                                                                         |
| --- | ---------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| E   | ボタン                    | [ボックス](/docs/messaging-api/flex-message-elements/#box)   | E-1〜E-2を入れるボックスです。- `"layout": "vertical"` - `"spacing": "xs"`                                                                                                                                                                                                                                                             |
| E-1 | ボタン   （linkのみを使用する場合）  | [ボタン](/docs/messaging-api/flex-message-elements/#button) | - `"style": "link"` - `"height": "sm"` - `"color": "{文字の色}"` - `"action" : { ... }`   このボタンをタップしたときに、LINEミニアプリのページを表示するようにURIアクションを指定してください。LINEミニアプリのトップページ以外のページを表示する場合は、[パーマネントリンク](/docs/line-mini-app/develop/permanent-links/)を指定してください。                                                                             |
| E-2 | ボタン   （primaryを使用する場合) | [ボタン](/docs/messaging-api/flex-message-elements/#button) | - 一番上のボタンに`"style": "primary"`、それ以外のボタンに`"style": "link"`を指定してください。`"secondary"`は使用できません。 - `"height": "md"` - `"color": "{文字の色または背景色}"` - `"action" : { ... }`   このボタンをタップしたときに、LINEミニアプリのページを表示するようにURIアクションを指定してください。LINEミニアプリのトップページ以外のページを表示する場合は、[パーマネントリンク](/docs/line-mini-app/develop/permanent-links/)を指定してください。 |

primaryを使用する場合：

```json
{
    "type": "bubble",
    "hero": { ... }
    },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // タイトル（B） - ボックス
                ...
            },
            {   // サブタイトル（C） - ボックス
                ...
            },
            {   // 詳細（D） - ボックス
                ...
            },
            {   // ボタン（E） - ボックス
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // ボタン（primary）
                        "type": "button",
                        "action": {
                            "type": "uri",
                            "label": "View details",
                            "uri": "https://miniapp.line.me/123456-abcedfg"
                        },
                        "style": "primary",
                        "height": "md",
                        "color": "#17c950"
                    },
                    {   // ボタン（link）
                        "type": "button",
                        "action": {
                            "type": "uri",
                            "label": "Share",
                            "uri": "https://miniapp.line.me/123456-abcedfg/share"
                        },
                        "style": "link",
                        "height": "md",
                        "color": "#469fd6"
                    }
                ],
                "spacing": "xs"
            }
        ],
        "spacing": "md"
    }
}
```

##### 画像リストタイプ - フッター（F）

| ラベル | セクション                                                              | 要素                                                                                                                    | 説明                                                                                                                                                                                                                                                           |
| --- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| -   | -                                                                  | [フッターブロック](/docs/messaging-api/flex-message-elements/#block) > [ボックス](/docs/messaging-api/flex-message-elements/#box) | - `"layout": "vertical"`                                                                                                                                                                                                                                     |
| -   | -                                                                  | [セパレータ](/docs/messaging-api/flex-message-elements/#separator)                                                         | - `"color": "#f0f0f0"`                                                                                                                                                                                                                                       |
| F   | フッター                                                               | [ボックス](/docs/messaging-api/flex-message-elements/#box)                                                                | F-1〜F-3を入れるボックスです。- `"layout": "horizontal"` - `"flex": 1` - `"spacing": "md"` - `"margin": "md"`                                                                                                                                                            |
| F-1 | LINEミニアプリのアイコン                                                     | [画像](/docs/messaging-api/flex-message-elements/#image)                                                                | - `"url": "{画像のURL}"` - `"flex": 1` - `"gravity": "center"`                                                                                                                                                                                                  |
| F-2 | LINEミニアプリの名前                                                       | [テキスト](/docs/messaging-api/flex-message-elements/#text)                                                               | - `"text": "{LINEミニアプリの名前}"`   最大行数：1行 - `"flex": 19` - `"size": "xs"` - `"color": "#999999"` - `"weight": "bold"` - `"gravity": "center"` - `"wrap": false`                                                                                                 |
| F-3 | ![>](https://vos.line-scdn.net/service-notifier/footer_go_btn.png) | [画像](/docs/messaging-api/flex-message-elements/#image)                                                                | - `"url": "https://vos.line-scdn.net/service-notifier/footer_go_btn.png"` - `"flex": 1` - `"gravity": "center"` - `"size": "xxs"` - `"action" : { ... }`   この画像をタップしたときに、LINEミニアプリのトップページ（`https://miniapp.line.me/{your-liffId}`）を表示するようにURIアクションを指定してください。 |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": { ... },
    "footer": { // フッターブロック
        // ボックス
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // セパレータ
                "type": "separator",
                "color": "#f0f0f0"
            },
            {   // フッター（F） - ボックス
                "type": "box",
                "layout": "horizontal",
                "contents": [
                    {   // LINEミニアプリのアイコン（F-1）
                        "type": "image",
                        "url": "https://example.com/line-mini-app-icon.png",
                        "flex": 1,
                        "gravity": "center"
                    },
                    {   // LINEミニアプリの名前（F-2）
                        "type": "text",
                        "text": "Service name",
                        "flex": 19,
                        "size": "xs",
                        "color": "#999999",
                        "weight": "bold",
                        "gravity": "center",
                        "wrap": false
                    },
                    {   // >（F-3）
                        "type": "image",
                        "url": "https://vos.line-scdn.net/service-notifier/footer_go_btn.png",
                        "flex": 1,
                        "gravity": "center",
                        "size": "xxs",
                        "action": {
                            "type": "uri",
                            "label": "action",
                            "uri": "https://miniapp.line.me/123456-abcedfg"
                        }
                    }
                ],
                "flex": 1,
                "spacing": "md",
                "margin": "md"
            }
        ]
    }
}
```
