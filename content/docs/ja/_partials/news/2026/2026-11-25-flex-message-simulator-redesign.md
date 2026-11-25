---
title: Flex Message Simulatorをリニューアルしました
navigation: true
description: >-
  Messaging APIのFlex Messageをブラウザ上で作成、プレビューできるツールであるFlex Message
  Simulatorをリニューアルしました。
meta: >-
  {"date":"2026-11-25 00:00 UTC","tags":"flex-message-simulator,
  messaging-api","locale":"ja"}
path: /ja/_partials/news/2026/2026-11-25-flex-message-simulator-redesign
__hash__: w8GRBoCJhdGyN6DFF2Ud49Q12EsqDC6fhY-aUzYJW6Q
seo:
  title: Flex Message Simulatorをリニューアルしました
  description: >-
    Messaging APIのFlex Messageをブラウザ上で作成、プレビューできるツールであるFlex Message
    Simulatorをリニューアルしました。
---

Messaging APIのFlex Messageをブラウザ上で作成、プレビューできるツールである[Flex Message Simulator](/flex-simulator/)をリニューアルしました。

今回の主な更新内容は、次のとおりです。

- [レイアウトを刷新](#changed-the-layout-20261125)
- [プレビューエリアで動画を再生可能](#enable-video-playback-20261125)
- [送信先の設定画面を改善](#easy-to-select-the-recipient-20261125)
- [その他の更新情報](#other-updates-20261125)

### レイアウトを刷新

各機能の配置が変更されました。プレビューエリアとプロパティエリアが隣同士に表示されることで、入力内容の反映を確認しやすくなりました。

![](/media/news/2026/flex-message-simulator-new-screen.webp){className="[\"bg-border\"]"}

| 左                             | 中央                               | 右                                     |
| ----------------------------- | -------------------------------- | ------------------------------------- |
| ツリービューエリア（データ構造を編集したり表示したりする） | プレビューエリア（作成中のFlex Messageが表示される） | プロパティエリア（ツリービューエリアで選択した項目のプロパティを設定する） |

- 旧デザイン  
![](/media/news/2026/flex-message-simulator-old-screen-ja.webp){className="[\"bg-border\"]"}

### プレビューエリアで動画を再生可能

Flex Messageに含まれる動画を、プレビューエリアで再生できるようになりました。

![](/media/news/2026/flex-message-simulator-preview-video.webp){className="[\"bg-border\"]"}

動画コンポーネントに設定した動画と代替コンテンツの表示は、UI上で切り替えて確認できます。動画に対応していない環境で表示される代替コンテンツも確認しながら、Flex Messageを作成できます。

![](/media/news/2026/flex-message-simulator-alt-content.webp){className="[\"w-fix-480\"]"}

### 送信先の設定画面を改善

作成したFlex Messageを手元のLINEアプリで表示するには、画面右上のメニューバーで［**Send**］をクリックします（図1）。そして、Flex Message SimulatorのLINE公式アカウントを友だち追加して、送信先を登録する必要があります（図2）。

![](/media/news/2026/flex-message-simulator-fig1.webp){className="[\"bg-border\"]"} ![](/media/news/2026/flex-message-simulator-fig2.webp){className="[\"w-fix-480\"]"}

今回の更新によって、最初にFlex Message SimulatorのLINE公式アカウントを友だち追加して、その後に認証コードが発行されるという流れが明確になり、手順が分かりやすくなりました。

### その他の更新情報

- 今回の更新でダークモードに対応し、画面右上のアイコンでライトモードとダークモードの切り替えが可能になりました。  
![](/media/news/2026/flex-message-simulator-dark-mode.webp)
- スマートフォンの画面サイズごとの見え方を確認できるように、プレビューエリア内にサイズ切り替えボタンが新しく設置されました。  
![](/media/news/2026/flex-message-simulator-screen-size-switch.webp){className="[\"w-fix-480\"]"}

LINEヤフー株式会社は、LINEプラットフォームを活用したサービス開発をより円滑に行えるよう、今後も製品および開発者向けドキュメントの品質向上に努めてまいります。
