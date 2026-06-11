---
title: LINEミニアプリとは
navigation: true
description: LINEミニアプリは、LIFF上で実行されるウェブアプリです。
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-mini-app/discover/introduction
__hash__: qdAg2w28ZHB4IUvwuwdiG-voOYUU_hFs2igdbPkkajU
seo:
  title: LINEミニアプリとは
  description: LINEミニアプリは、LIFF上で実行されるウェブアプリです。
---

# :page-title

:markdown-controlsLINEミニアプリは、[LIFF（LINE Front-end Framework）](/docs/liff/)上で実行されるウェブアプリです。LINEミニアプリを使えば、ユーザーはアプリをインストールしなくてもサービスを利用できます。

「LINEミニアプリ」が公式名です。

LINEミニアプリはウェブアプリですので、HTML5のほとんどの仕様が使用できます。詳しくは、「[LINEミニアプリの仕様](/docs/line-mini-app/discover/specifications/)」を参照してください。

## はじめに

LINEミニアプリは[LINEミニアプリポリシー](https://terms2.line.me/LINE_MINI_App?lang=ja){rel="[\"nofollow\"]"}における「本サービスのご利用対象者」であれば、どなたでも開発することができます。はじめに「[クイックスタートガイド](/docs/line-mini-app/quickstart/)」をお読みください。

LINEミニアプリチャネルを作成するには、[LINE Developersコンソール](/console/)のアカウントが必要です。LINEミニアプリの設定から審査申請まで、多くの作業をLINE Developersコンソール上で行います。

## LINEミニアプリでできること

LINEミニアプリには、以下のような便利な[ビルトイン機能](/docs/line-mini-app/discover/builtin-features/)が用意されています。

- LINEミニアプリをほかのユーザーにシェアする機能
- ユーザーに対してサービスへのアクセス権限の付与を依頼する機能

また、さらに充実したユーザー体験を提供するために、以下のような[カスタム機能](/docs/line-mini-app/discover/custom-features/)をLINEミニアプリに追加できます。

- サービスメッセージ
- 決済システムの利用
- カスタムアクションボタン

::admonition{title="LINEミニアプリを試す" type="tip"}
LINEヤフー株式会社では、開発者向けに[LINEミニアプリプレイグラウンド](https://miniapp.line.me/lineminiapp_playground){rel="[\"nofollow\"]"}というLINEミニアプリを公開しています。LINEアプリがインストールされたスマートフォンでLINEミニアプリプレイグラウンドを開くと、LINEミニアプリの一部機能を実際に試すことができます。
::

## 未認証ミニアプリと認証済ミニアプリ

LINEミニアプリは、弊社による認証審査に通過しているかどうかによって、未認証ミニアプリと認証済ミニアプリに分かれます。それぞれの違いについては、以下の各セクションを確認してください。

### 未認証ミニアプリとは

未認証ミニアプリとは、弊社による認証審査に通過していないLINEミニアプリのことをいいます。LINEミニアプリチャネルを作成した後から、認証審査に通過するまでは、未認証ミニアプリとなります。

未認証ミニアプリはどなたでも作成できますが、次の「[認証済ミニアプリとは](#verified-mini-app)」に示すように、一部機能が制限されます。認証済ミニアプリにするためには、[認証審査を申請](/docs/line-mini-app/submit/submission-guide/)してください。

未認証ミニアプリでは、[ヘッダー](/docs/line-mini-app/discover/ui-components/#header)にタイトルとエンドポイントURLのドメイン名が表示されます。

![](/media/line-mini-app/unverified-mini-app-header-ja.png){className="[\"bg-border\",\"w-fix-480\"]"}

### 認証済ミニアプリとは

弊社による認証審査に通過すると、そのLINEミニアプリは認証済ミニアプリとなります。認証済ミニアプリになると、[ヘッダー](/docs/line-mini-app/discover/ui-components/#header)などに認証バッジがつきます。また、ヘッダーにはタイトルとLINEミニアプリ名が表示されます。

![](/media/line-mini-app/verified-mini-app-header-ja.png){className="[\"bg-border\",\"w-fix-480\"]"}

また、以下の各機能などが利用できるようになります。

- [ユーザー端末のホーム画面にショートカットを追加する](/docs/line-mini-app/develop/add-to-home-screen/)
- [Custom Path](/docs/line-mini-app/develop/custom-path/)
- [チャネル同意の簡略化](/docs/line-mini-app/develop/channel-consent-simplification/)

以上のように、LINEミニアプリを認証済ミニアプリにすることで、信頼性や利便性などの面で、ユーザー体験を高めることができます。認証済ミニアプリで利用できる機能について詳しくは、「[カスタム機能](/docs/line-mini-app/discover/custom-features/)」を参照してください。

## LINEミニアプリの構造

LINEミニアプリのページは、（A）ヘッダーおよび（B）ボディで構成されています。詳しくは、「[LINEミニアプリの構造](/docs/line-mini-app/discover/ui-components/)」を参照してください。

![LINEミニアプリの構造](/media/line-mini-app/mini_concept.png){className="[\"w-fix-280\"]"}

## ユーザーがLINEミニアプリにアクセスする方法

ユーザーは、LINEからだけでなく、LINE外部からもLINEミニアプリにアクセスできます。LINE内には、LINEミニアプリにアクセスするためのポイントがいくつも用意されています。

### LINE外部からアクセスする

[LINEミニアプリのパーマネントリンク](/docs/line-mini-app/develop/permanent-links/)にアクセスすると、LINE外部からもLINEミニアプリにアクセスできます。LINEミニアプリのパーマネントリンクは、以下の方法でユーザーにシェアできます。

- ウェブサイト、メール、テキストメッセージなどに掲載する
- QRコードを作成して各種媒体に掲載する

また、[ユーザー端末のホーム画面にLINEミニアプリへのショートカットを追加する](/docs/line-mini-app/develop/add-to-home-screen/)と、ホーム画面からLINEミニアプリに直接アクセスできます。

### LINE公式アカウント

LINE公式アカウントからもLINEミニアプリにアクセスできます。たとえば、LINE公式アカウントの友だちに送信するリッチメッセージや、LINE公式アカウントとのトーク画面に表示されるリッチメニューに、LINEミニアプリを開くリンクを追加できます。詳しくは、[LINE公式アカウントを活用する](/docs/line-mini-app/service/line-mini-app-oa/)を参照してください。

![LINE公式アカウントでLINEミニアプリのプロモーションができる](/media/line-mini-app/mini_with_oa.png){className="[\"w-fix-280\"]"}

### ホームタブ

::admonition{title="LINEミニアプリをLINEのホームタブに固定する機能は廃止されました" type="note"}
詳しくは、2024年1月9日のニュース、「[最近利用したLINEミニアプリにLINEのホームタブからアクセスできるようになりました](/news/2024/01/09/line-mini-app-history/)」を参照してください。
::

LINEの［**ホーム**］タブの［**サービス**］から、最近利用したLINEミニアプリにアクセスできます。［**サービス**］には、最近利用したLINEミニアプリが、利用履歴の新しい順に最大で8件まで表示されます。この機能は、認証済ミニアプリでのみ利用できます。

ホームタブの表示ポリシーは、サービスを提供する地域によって異なります。

![](/media/line-mini-app/mini-access-home-tab-ja.png){className="[\"border\",\"w-fix-280\"]"}

### LINEで探す

LINEの検索機能からも、LINEミニアプリにアクセスできます。この機能は、認証済ミニアプリでのみ利用できます。

![検索機能からアクセス](/media/line-mini-app/mini_access_search.png){className="[\"w-fix-280\",\"border\"]"}

### LINEメッセージ

友だち同士で、LINEミニアプリを簡単にシェアできます。[ビルトインのアクションボタン](/docs/line-mini-app/discover/builtin-features/#action-button)を使用するだけでなく、[カスタムアクションボタン](/docs/line-mini-app/develop/share-messages/)を使用して、LINEミニアプリのページをLINEメッセージでシェアできます。

![シェアメッセージ](/media/line-mini-app/mini_access_share.png){className="[\"w-fix-280\"]"}

## LIFFアプリでできてLINEミニアプリでできないこと

| 項目                     | 説明                                                                                                                                                         |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| アクションボタンの非表示（モジュールモード） | LINEミニアプリでは、[アクションボタン](/docs/line-mini-app/discover/builtin-features/#action-button)を非表示にすることはできません。LINEミニアプリチャネルに追加されているLIFFアプリでは、［**モジュールモード**］は設定できません。 |
| 同一チャネルへの複数のLIFFアプリの追加  | LINEミニアプリチャネルでは、同一チャネルに複数のウェブアプリを追加することはできません。                                                                                                             |

::admonition{title="LINEミニアプリとしての作成を推奨します" type="tip"}
今後、LIFFとLINEミニアプリは、ブランド統合を予定しています。この統合により、LIFFはLINEミニアプリに統合されます。そのため、LIFFアプリを新規作成する際は、LINEミニアプリとして作成することを推奨します。詳しくは、「[2025年2月12日のニュース](/news/2025/02/12/line-mini-app/)」を参照してください。
::
