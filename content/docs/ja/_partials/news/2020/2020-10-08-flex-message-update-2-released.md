---
title: 【更新】Flex Message Update 2がリリースされました
navigation: true
description: ''
meta: >-
  {"date":"2020-10-08 00:00 UTC","tags":"Messaging API, Flex
  Message","new":"false","category":"Messaging API","locale":"ja"}
path: /ja/_partials/news/2020/2020-10-08-flex-message-update-2-released
__hash__: bEWc0snGMptfvgjTmjmZY1dww_-aOyE8CHL62pqZonY
seo:
  title: 【更新】Flex Message Update 2がリリースされました
  description: ''
---

::admonition{title="2020年12月10日追記" type="note"}
2020年10月22日より一時的に利用不可としておりましたFlex Messageのアニメーション画像再生機能が、再びご利用いただけるようになりました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
::

Messaging APIのFlex Message Update 2がリリースされました。

Flex Message Update 2では、以下の改善が行われました。

- [カルーセルで持てるバブルの上限数が変更されました](#update-bubble-limit)
- [コンポーネントの配置指定方法が増えました](#update-box)
- [ボックスの背景をグラデーションにできるようになりました](#update-gradient-bg)
- [ボックスの`contents`プロパティで空配列が指定できるようになりました](#update-empty-array)
- [アニメーション画像を指定できるようになりました](#update-apng)
- [サイズの指定方法が変更されました](#update-size)
- [横幅に合わせてテキストを自動縮小できるようになりました](#update-adjust-mode)
- [スペーサーが廃止されました](#update-spacer)
- [Flex Message SimulatorがUpdate 2に対応しました](#update-simulator)

### カルーセルで持てるバブルの上限数が変更されました

カルーセルコンテナで子要素として持てるバブルの上限数が変わりました。変更前と変更後の差異については、以下の表を参照してください。

- **[カルーセルコンテナ](/reference/messaging-api/#f-carousel)**| 項目     | 変更前 | 変更後 |
| ------ | --- | --- |
| 最大バブル数 | 10  | 12  |

### コンポーネントの配置指定方法が増えました

Flex Messageの[ボックス](/reference/messaging-api/#box)コンポーネントでは、`justifyContent`プロパティと`alignItems`プロパティが追加されました。
これらのプロパティで子要素と余白の配置方法を指定することで、子要素を等間隔に並べたり、中央に揃えたりできます。

![flex-start](/media/messaging-api/flex-message-layout/justify-content-01.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![flex-center](/media/messaging-api/flex-message-layout/justify-content-02.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![flex-end](/media/messaging-api/flex-message-layout/justify-content-03.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![space-between](/media/messaging-api/flex-message-layout/justify-content-04.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![space-around](/media/messaging-api/flex-message-layout/justify-content-05.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}![space-evenly](/media/messaging-api/flex-message-layout/justify-content-06.svg){className="[\"w-fix-240\",\"mr-4\",\"mb-4\"]"}

詳しくは、『Messaging APIドキュメント』の「[ボックスの子要素と余白の配置](/docs/messaging-api/flex-message-layout/#justify-property)」を参照してください。

### ボックスの背景をグラデーションにできるようになりました

[ボックス](/reference/messaging-api/#box)コンポーネントの`background.type`プロパティに`linearGradient`を指定すると、ボックスの背景を線形グラデーションにできます。

![0degの線形グラデーション](/media/messaging-api/flex-message-layout/linear-gradient-bg-deg-0.png){className="[\"border\",\"w-fix-240\"]"}![45degの線形グラデーション](/media/messaging-api/flex-message-layout/linear-gradient-bg-deg-45.png){className="[\"border\",\"w-fix-240\"]"}![90degの線形グラデーション](/media/messaging-api/flex-message-layout/linear-gradient-bg-deg-90.png){className="[\"border\",\"w-fix-240\"]"}

詳しくは、『Messaging APIドキュメント』の「[線形グラデーション背景](/docs/messaging-api/flex-message-layout/#linear-gradient-bg)」を参照してください。

### ボックスの`contents`プロパティで空配列が指定できるようになりました

ボックスコンポーネントの`contents`プロパティで、空配列が指定できるようになりました。

- **[ボックスコンポーネント](/reference/messaging-api/#box)**| 項目              | 変更前        | 変更後       |
| --------------- | ---------- | --------- |
| `contents`プロパティ | 空配列を指定できない | 空配列を指定できる |

::admonition{title="空配列が指定できるとどんな場面で便利になる？" type="tip"}
次の4つの四角のように、ボックスコンポーネントを装飾的に使う場合、今まではそれぞれのボックスに子要素としてフィラーコンポーネントなどを入れておく必要がありましたが、Flex Message Update 2からは空配列を指定するだけで済むようになりました。

![offsetプロパティの例1](/media/news/flex-message-update-empty-array-tips.png){className="[\"border\"]"}

一番左にある黄色いボックスコンポーネントのJSONデータを、変更前と変更後で比較してみましょう。


  - **変更前**```json
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


  - **変更後**```json
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

### アニメーション画像を指定できるようになりました

::admonition{title="2020年12月10日追記" type="note"}
2020年10月22日より一時的に利用不可としておりましたFlex Messageのアニメーション画像再生機能が、再びご利用いただけるようになりました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
::

Flex Messageの画像コンポーネントで、アニメーション画像（APNG）を指定できるようになりました。

詳しくは、『Messaging APIリファレンス』の「[画像](/reference/messaging-api/#f-image)」コンポーネントを参照してください。

### サイズの指定方法が変更されました

コンポーネントのサイズを指定する方法が変わりました。変更前と変更後の差異については、以下の表を参照してください。

- **[画像コンポーネント](/docs/messaging-api/flex-message-layout/#image-size)**| 項目                    | 変更前     | 変更後                                  |
| --------------------- | ------- | ------------------------------------ |
| サイズの指定方法（`size`プロパティ） | - キーワード | - キーワード   - **ピクセル**   - **パーセンテージ** |
- **[アイコン、テキスト、スパンコンポーネント](/docs/messaging-api/flex-message-layout/#other-component-size)**| 項目                    | 変更前     | 変更後                  |
| --------------------- | ------- | -------------------- |
| サイズの指定方法（`size`プロパティ） | - キーワード | - キーワード   - **ピクセル** |

### 横幅に合わせてテキストを自動縮小できるようになりました

テキストコンポーネント、ボタンコンポーネントに`adjustMode`プロパティが追加されました。
この`adjustMode`プロパティで`shrink-to-fit`を指定すると、テキストのフォントサイズがコンポーネントの幅に合わせて自動縮小されます。

![フォントサイズの自動縮小](/media/messaging-api/flex-message-layout/adjusts-fontsize-to-fit.png){className="[\"border\",\"w-fix-400\"]"}

詳しくは、『Messaging APIリファレンス』の「[テキスト](/reference/messaging-api/#f-text)」コンポーネントと「[ボタン](/reference/messaging-api/#button)」コンポーネントを参照してください。

### スペーサーが廃止されました

以前より非推奨としておりました、スペーサーコンポーネントが廃止されました。
今後はスペーサーを使わずに、ボックスのパディングを指定してください。

詳しくは、『Messaging APIドキュメント』の「[ボックスのパディング](/docs/messaging-api/flex-message-layout/#padding-property)」を参照してください。

### Flex Message SimulatorがUpdate 2に対応しました

[Flex Message Simulator](/flex-simulator/)も、Flex Message Update 2で追加された新しいプロパティやオブジェクトに対応しました。

[Flex Message Simulator](/flex-simulator/)を使うと、簡単にFlex MessageのJSONデータを作成したり、レイアウトを確認したりできます。

::admonition{title="制限事項" type="note"}
Flex Message Simulatorは、Flex Messageのレイアウトを保証するものではありません。受信端末の環境によって、同じFlex Messageでも描画結果が異なる可能性があります。描画に影響を与える要素には、OS、LINEのバージョン、端末の解像度、言語設定、フォントなどがあります。
::
