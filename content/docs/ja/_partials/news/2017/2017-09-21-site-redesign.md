---
title: LINE Developersサイトのデザインが新しくなりました
navigation: true
description: >-
  LINE
  Developersサイトのデザインが新しくなったことをお知らせします。このアップデートによりサイトの利便性が向上したため、簡単にLINEログインやMessaging
  APIなどのサービスを導入し、必要なドキュメントを参照していただけるようになりました。ここでは、サイトの主な変更点についてご説明します。
meta: '{"date":"2017-09-21 00:00 UTC","tags":"Docs, Console","locale":"ja"}'
path: /ja/_partials/news/2017/2017-09-21-site-redesign
__hash__: VXP9hZF_GDzMjrocjpI0rGN35s4zp4eY5MnVOaygF-o
seo:
  title: LINE Developersサイトのデザインが新しくなりました
  description: >-
    LINE
    Developersサイトのデザインが新しくなったことをお知らせします。このアップデートによりサイトの利便性が向上したため、簡単にLINEログインやMessaging
    APIなどのサービスを導入し、必要なドキュメントを参照していただけるようになりました。ここでは、サイトの主な変更点についてご説明します。
---

LINE Developersサイトのデザインが新しくなったことをお知らせします。このアップデートによりサイトの利便性が向上したため、簡単にLINEログインやMessaging APIなどのサービスを導入し、必要なドキュメントを参照していただけるようになりました。ここでは、サイトの主な変更点についてご説明します。

READMORE

- [LINE Developersコンソール](#line-developers-console)
- [ホームページとサービスの概要](#homepage-and-product-overviews)
- [ドキュメントの更新](#documentation-updates)
- [FAQ](#faq)

### LINE Developersコンソール

![Console top](/media/news/brown-channel-top.png){className="[\"border\",\"w-fix-560\"]"}

使いやすくなった「LINE Developersコンソール」では、簡単にチャネルを作成して管理することができます。[LINE Developersコンソール](/console/)にログインして開発者アカウントを登録し、プロバイダーを作成し、Messaging APIとLINEログインのチャネルを作成できます。

LINE Business Center（2017年9月21日にサービス終了）でチャネルを作成済みの場合も、LINE Developersコンソールでチャネルを表示して管理できます。LINE Business Centerで「会社/事業者」とされていた項目は、LINE Developersコンソールでは「プロバイダー」に名称が変更されていることにご注意ください。

新しいMessaing APIチャネルを作成するとき、[LINE@マネージャー](https://admin-official.line.me){rel="[\"nofollow\"]"}の［Messaging API設定］ページを開いてAPI機能を有効にしたり設定したりする必要はなくなりました。これらの設定は、LINE Developersコンソールの［Channel基本設定］ページで行います。ただし、ご自身のボットにリッチメニューとアカウントページを設定するには、やはりLINE@マネージャーを使う必要があります。

LINEログインとMessaging APIのチャネルの作成について詳しくは、以下のリンク先をご覧ください。

- [LINEログインを利用するには](/docs/line-login/getting-started/)
- [Messaging APIを利用するには](/docs/messaging-api/getting-started/)

### ホームページとサービスの概要

ホームページの見直しが行われ、[LINE Developersコンソール](/console/)、ドキュメント、およびニュースにアクセスしやすくなりました。また、[LINEログイン](/services/line-login/)と[Messaging API](/services/messaging-api/)のサービス概要ページがサイトに追加されました。

### ドキュメントの更新

ドキュメントの構成が新しくなりました。APIリファレンスを統合し、既存のドキュメントを改訂しました。

#### 構成

ドキュメントを以下のカテゴリーに整理しました。また、各カテゴリーにサイドバーを設定し、アクセスしやすくしました。[「ドキュメント」概要ページ](/docs/)からも簡単にドキュメントを参照できます。

- LINEログイン
- Messaging API
- LINE SDK for iOS
- LINE SDK for Android
- Social API

概要ページには、[LINE Social Plugins](https://social-plugins.line.me/ja/){rel="[\"nofollow\"]"}と[LINE Notify](https://notify-bot.line.me/ja/){rel="[\"nofollow\"]"}のウェブサイトへのリンクも記載されています。

#### リファレンスドキュメント

APIとSDKのリファレンスドキュメントを更新し、サイトに統合しました。[https://devdocs.line.me](https://devdocs.line.me){rel="[\"nofollow\"]"}に掲載されている既存のリファレンスドキュメントは、今後は更新を停止し、2017年10月21日頃に参照できなくなります。最新のリファレンス情報については、以下の新しいページを参照してください。

- [Messaging APIリファレンス](/reference/messaging-api/)
- [LINE SDK for iOSリファレンス](/reference/ios-sdk-v4/)
- [LINE SDK for Androidリファレンス](/en/reference/android-sdk-v4/)
- [Social APIリファレンス](/reference/social-api/)

#### 新規または更新されたドキュメント

Messaging APIについて、以下の記事をはじめとするさまざまな新しい記事を追加し、その他の多くのドキュメントを更新しました。

- [Herokuでサンプルボットを作る](/docs/messaging-api/building-sample-bot-with-heroku/)
- [ボットを作成する](/docs/messaging-api/building-bot/)
- [メッセージ](/docs/messaging-api/message-types/)
- [グループチャット](/docs/messaging-api/group-chats/)
- [権限を管理する](/docs/messaging-api/managing-roles/)
- [Social APIの概要](/docs/social-api/overview/)

#### 企業向けドキュメント

既存の企業向けコンテンツ（ビジネスコネクト、ミッションスタンプ、リンクメッセージなど）を一般ユーザー向けコンテンツと切り離しました。企業向けドキュメントの閲覧をご希望のパートナー企業様は、当社の担当営業までお問い合わせください。

### FAQ

新しく[FAQ](/faq/)（よく寄せられる質問）のセクションを設けました。このページでは、LINEログインとMessaging APIに関する質問の回答を参照できます。GitHubの[line-bot-faq](https://github.com/line/line-platform-feedback){rel="[\"nofollow\"]"}リポジトリに寄せられた質問は、このFAQセクションに統合されました。

### 最後に

開発者の方々が当社サービスを利用したアプリ開発をさらに円滑に進められるように、今後も引き続き、LINE Developersサイトと開発者向けドキュメントの品質向上に努めて参ります。

最新情報をお受け取りになりたい場合は、以下のQRコードまたはボタンを使って、LINE DevelopersのLINE公式アカウントの友だち追加をお願いいたします。

![LINE DevelopersアカウントのQRコード](https://qr-official.line.me/sid/L/linedevelopers.png){className="[\"border\",\"w-fix-240\"]"}

[![友だち追加](https://biz.line.naver.jp/line_business/img/btn/addfriends_en.png){className="[\"w-fix-240\"]"}](https://line.me/R/ti/p/@linedevelopers?from=page){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}
