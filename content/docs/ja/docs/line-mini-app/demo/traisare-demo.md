---
title: 移動体験デモ
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"jp"}'
path: /ja/docs/line-mini-app/demo/traisare-demo
__hash__: iwIThP7CEgCtPW19OoSgOC9c786G5p6mIM_LFQZM3Zo
seo:
  title: 移動体験デモ
  description: null
---

# :page-title

:markdown-controls:partial{content="documentation-partials/api-use-case/announcement-of-page/"}MaaS Tech Japanの移動情報統合データ基盤「[TraISARE（トレイザー）](https://traisare.maas.co.jp/){rel="[\"nofollow\"]"}」とLINEを組み合わせることで、一人ひとりに合わせた移動体験を提供することができます。

エンドユーザー視点では、周遊チケットの購入や交通機関の運行情報の確認に加え、利用履歴に応じたおすすめ情報やお得なクーポンなど一人ひとりに合わせた情報を、日常的に使っているLINEに集約することができます。

サービス提供者視点では、交通・人流のデータと行動データを統合・分析することで、利用傾向や混雑状況を踏まえた移動を快適にする旅の提案など、エンドユーザーに行動変容を促すことができます。

LINEを活用してMaaS（モビリティ・アズ・ア・サービス）の利用ハードルを下げながら、TraISAREで移動に関する様々なデータを高度に活用し、エンドユーザーひとりひとりの状況に合わせたUX（ユーザー・エクスペリエンス）の向上を目指します。これが、私たちの考える一人ひとりに合わせた移動体験です。

:toc## デモを見る

- [デモサイトで実際にLINEミニアプリによる移動体験を体験してみましょう。](https://lineapiusecase.com/ja/traisare/index.html){rel="[\"nofollow\"]"}

## 導入におけるメリット

### エンドユーザー視点でのメリット

#### 1. アプリのダウンロードや煩雑な入会手続きは不要

LINEミニアプリを使うことにより、専用アプリのダウンロードが不要になります。また、個人情報の入力も必要なく、すぐにMaaSを利用できます。

#### 2. お出かけ中の状況に合わせて役立つ情報を得ることができます

交通チケットの利用状況に合わせて、お出かけに役立つ情報やお得なクーポンを取得できます。

#### 3. 遅延や混雑を気にすることなく快適に移動できます

公共交通の遅延や混雑による密なエリアの発生状況など、必要な情報をリアルタイムに受け取ることができるため、ユーザーは都度情報を探すことなくお出かけを楽しむことができます。

### サービス提供者視点でのメリット

#### 1. MaaSのPDCA環境が簡単に実現できます

LINEミニアプリとデータ基盤であるTraISAREおよびダッシュボードを利用することで、MaaS専用のアプリ提供とデータの蓄積・効果把握のための基盤構築の手間を削減し、PDCAサイクルに必要な環境が容易に準備できます。

#### 2. 混雑回避や利用促進のための行動変容を促すことができます

クーポン配布による混雑の回避や、行動を予測した情報配信により、ユーザーに行動の変化を促すことができます。また、蓄積したデータを分析することで、クーポン配付後等のユーザーの移動や滞在状況が把握できます。

#### 3. 交通情報等の連携により便利で快適な移動が提供できます

TraISAREを介して外部サービスの交通情報や混雑情報との連携が可能となります。また、LINEを通じたタイムリーな情報提供によりサービスを向上させることで、ユーザーのエリア滞在時間の拡大などが期待できます。

## デモアプリケーションのシステム図とシーケンス図

デモアプリケーションで、どのようにLINE APIを利用しているかを示した図です。

※デモアプリケーションでは実装されていない機能も図に含まれています。

**システム図**

![](/media/line-mini-app/demo/traisare-demo/traisare-system-diagram.webp){className="[\"border\"]"}

**シーケンス図**

![](/media/line-mini-app/demo/traisare-demo/traisare-sequence-diagram.webp){className="[\"border\"]"}

## 関連リンク

- [Messaging APIドキュメント](/docs/messaging-api/)
- [LINEミニアプリドキュメント](/docs/line-mini-app/)
