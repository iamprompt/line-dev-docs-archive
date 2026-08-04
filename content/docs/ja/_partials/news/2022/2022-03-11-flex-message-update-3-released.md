---
title: 【更新】Flex Message Update 3をリリースしました
navigation: true
description: ''
meta: >-
  {"date":"2022-03-11 00:00 UTC","tags":"messaging-api,
  flex-message","locale":"ja"}
path: /ja/_partials/news/2022/2022-03-11-flex-message-update-3-released
__hash__: GXbIKQ2tf4NNoZzlUYg-0g-DDpD1ocXCHJx7O-6l8Os
seo:
  title: 【更新】Flex Message Update 3をリリースしました
  description: ''
---

::admonition{title="2022年3月15日追記" type="note"}
Flex Message SimulatorがFlex Message Update 3に対応しました。
::

Messaging APIのFlex Message Update 3をリリースしました。

Flex Message Update 3では、以下の機能追加を行いました。

- [ヒーローのブロックに動画を表示できるようになりました](#video-component-2022-03-11)
- [ボックスコンポーネントの最大幅と最大高を指定できるようになりました](#box-component-2022-03-11)
- [テキストコンポーネント内の行間を広げられるようになりました](#text-component-2022-03-11)
- [Flex Message SimulatorがUpdate 3に対応しました](#flex-message-simulator-2022-03-11)

### ヒーローのブロックに動画を表示できるようになりました

Flex Messageに[動画コンポーネント](/reference/messaging-api/#f-video)が追加されました。動画コンポーネントを使うと、ヒーローの[ブロック](/docs/messaging-api/flex-message-elements/#block)に動画を表示できます。

![動画コンポーネントの例](/media/messaging-api/create-flex-message-including-video/video.png){className="[\"w-fix-280\"]"}

詳しくは、『Messaging APIドキュメント』の「[動画を含むFlex Messageを作成する](/docs/messaging-api/create-flex-message-including-video/)」を参照してください。

### ボックスコンポーネントの最大幅と最大高を指定できるようになりました

[ボックスコンポーネント](/reference/messaging-api/#box)に`maxWidth`プロパティと`maxHeight`プロパティが追加されました。これらのプロパティを使うと、ボックスコンポーネントの最大幅や最大高を指定することができます。

詳しくは、『Messaging APIドキュメント』の「[ボックスの最大幅](/docs/messaging-api/flex-message-layout/#box-max-width)」および「[ボックスの最大高](/docs/messaging-api/flex-message-layout/#box-max-height)」を参照してください。

### テキストコンポーネント内の行間を広げられるようになりました

[テキストコンポーネント](/reference/messaging-api/#f-text)に`lineSpacing`プロパティが追加されました。`lineSpacing`プロパティを使うと、テキストコンポーネント内の行間を広げることができます。

| `lineSpacing`未指定                                                                                                  | `lineSpacing`20px                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ![lineSpacingプロパティ未指定の例](/media/messaging-api/flex-message-elements/wrap-sample.png){className="[\"w-fix-280\"]"} | ![lineSpacingプロパティ20pxの例](/media/messaging-api/flex-message-elements/line-spacing-sample.png){className="[\"w-fix-280\"]"} |

詳しくは、『Messaging APIドキュメント』の「[テキスト内の行間を広げる](/docs/messaging-api/flex-message-elements/#text-line-spacing)」を参照してください。

### Flex Message SimulatorがUpdate 3に対応しました

[Flex Message Simulator](/flex-simulator/)が、Flex Message Update 3に対応しました。

Flex Message Simulatorを使うと、簡単にFlex MessageのJSONデータを作ってレイアウトを確認できます。テストメッセージを送って、手元のLINEで実際の見た目を確認することもできます。

::admonition{title="制限事項" type="note"}
Flex Message Simulatorは、Flex Messageのレイアウトを保証するものではありません。受信端末の環境によって、同じFlex Messageでも描画結果が異なる可能性があります。描画に影響を与える要素には、OS、LINEのバージョン、端末の解像度、言語設定、フォントなどがあります。
::
