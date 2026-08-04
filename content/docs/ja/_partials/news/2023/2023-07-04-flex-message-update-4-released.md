---
title: Flex Message Update 4をリリースしました
navigation: true
description: Messaging APIのFlex Message Update 4をリリースしました。
meta: >-
  {"date":"2023-07-04 01:00 UTC","tags":"messaging-api,
  flex-message","locale":"ja"}
path: /ja/_partials/news/2023/2023-07-04-flex-message-update-4-released
__hash__: nGQtg12VU6yUNqPZCbYuHMiELsiUW9D0umkX7CUXGOo
seo:
  title: Flex Message Update 4をリリースしました
  description: Messaging APIのFlex Message Update 4をリリースしました。
---

Messaging APIのFlex Message Update 4をリリースしました。

Flex Message Update 4で追加された機能と、対象バージョンは以下のとおりです。

- [バブルに新しいサイズが追加されました](#bubble-size-2023-07-04)
- [フォントサイズ設定に応じてフォントやアイコンを自動で拡大縮小できるようになりました](#size-scaling-2023-07-04)
- [Flex Message SimulatorがUpdate 4の一部に対応しました](#flex-message-simulator-2023-07-04)
- [対象バージョン](#target-version-20230704)

### バブルに新しいサイズが追加されました

[バブル](/reference/messaging-api/#bubble)の`size`プロパティに`deca`と`hecto`が追加されました。`size`プロパティで指定するバブルのサイズは、`nano`、`micro`、`deca`、`hecto`、`kilo`、`mega`、`giga`の順に大きくなります。

詳しくは、『Messaging APIリファレンス』の「[バブル](/reference/messaging-api/#bubble)」を参照してください。

### フォントサイズ設定に応じてフォントやアイコンを自動で拡大縮小できるようになりました

[ボタン](/reference/messaging-api/#button)、[テキスト](/reference/messaging-api/#f-text)、および[アイコン](/reference/messaging-api/#icon)に`scaling`プロパティが追加されました。`scaling`プロパティに`true`を指定すると、LINEアプリのフォントサイズ設定に応じて、フォントサイズやアイコンのサイズが自動的に拡大縮小されます。`scaling`プロパティを`true`にすることで、アクセシビリティに配慮したメッセージを送ることができます。

| フォントサイズが［**小**］の場合                                                                                                          | フォントサイズが［**特大**］の場合                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| ![フォントサイズ小の例](/media/messaging-api/flex-message-layout/scaling-sample-small-ja.jpg){className="[\"border\",\"w-fix-240\"]"} | ![フォントサイズ特大の例](/media/messaging-api/flex-message-layout/scaling-sample-extra-large-ja.jpg){className="[\"border\",\"w-fix-240\"]"} |

詳しくは、『Messaging APIドキュメント』の「[フォントサイズ設定に応じたサイズへの拡大縮小](/docs/messaging-api/flex-message-layout/#size-scaling)」を参照してください。

### Flex Message SimulatorがUpdate 4の一部に対応しました

[Flex Message Simulator](/flex-simulator/)が、Flex Message Update 4で追加されたバブルのサイズに対応しました。現時点では、`scaling`プロパティには対応していません。今後対応する予定です。

Flex Message Simulatorを使うと、簡単にFlex MessageのJSONデータを作ってレイアウトを確認できます。テストメッセージを送って、手元のLINEで実際の見た目を確認することもできます。

::admonition{title="制限事項" type="note"}
Flex Message Simulatorは、Flex Messageのレイアウトを保証するものではありません。受信端末の環境によって、同じFlex Messageでも描画結果が異なる可能性があります。描画に影響を与える要素には、OS、LINEのバージョン、端末の解像度、言語設定、フォントなどがあります。
::

#### 対象バージョン

仕様変更の対象となるLINEバージョンは以下のとおりです。

| OS                   | 対象バージョン  |
| -------------------- | -------- |
| iOS版とAndroid版のLINE   | 13.6.0以上 |
| macOS版とWindows版のLINE | 7.17.0以上 |
