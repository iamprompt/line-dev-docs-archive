---
title: LINE@アカウントのLINE公式アカウントへの統合に伴う変更について
navigation: true
description: >-
  LINE@アカウントのLINE公式アカウントへの統合に伴い、LINE DevelopersコンソールおよびMessaging
  APIの機能が以下のように変更されました。
meta: '{"date":"2019-04-18 00:00 UTC","tags":"Messaging API, Console","locale":"ja"}'
path: /ja/_partials/news/2019/2019-04-18-bot-redesign
__hash__: GimOx8n7KZ4_jY-NOxvQF3-yO6ZgSpQqA1j33T_WhJc
seo:
  title: LINE@アカウントのLINE公式アカウントへの統合に伴う変更について
  description: >-
    LINE@アカウントのLINE公式アカウントへの統合に伴い、LINE DevelopersコンソールおよびMessaging
    APIの機能が以下のように変更されました。
---

[LINE@アカウントのLINE公式アカウントへの統合](https://www.lycorp.co.jp/news/archive/L/ja/ja20181203_B.pdf){rel="[\"nofollow\"]"}に伴い、[LINE Developersコンソール](/console/)およびMessaging APIの機能が以下のように変更されました。

### LINE Developersコンソールの機能変更

#### 作成されるアカウントの種別

LINE DevelopersコンソールでMessaging APIのチャネルを作成すると、LINE@アカウントではなくLINE公式アカウントが作成されます。

詳しくは、「[LINE@アカウントの移行](/docs/messaging-api/migrating-line-at/)」を参照してください。既存のLINE@アカウントも、LINE公式アカウントに順次移行されます。

#### プライバシーポリシーと利用条件

LINEログインおよびMessagig APIのチャネルに、プライバシーポリシーと利用条件のURLを設定できます。

将来的には、これらのURLを設定すると、LINEログインおよびLINE公式アカウントのユーザー同意画面に、プライバシーポリシーと利用条件へのリンクが表示されるようになる予定です。

### Messaging APIの機能拡張

新しい、または移行済みのLINE公式アカウントに紐づけられたボットでは、利用プランを問わず以下の機能を利用できます。

- [追加メッセージ数の上限目安を取得する](/reference/messaging-api/#get-quota)
- [当月のメッセージ利用状況を取得する](/reference/messaging-api/#get-consumption)
- [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)
- [マルチキャストメッセージを送る](/reference/messaging-api/#send-multicast-message)
- [ブロードキャストメッセージを送る](/reference/messaging-api/#send-broadcast-message)
- [送信済みのブロードキャストメッセージの数を取得する](/reference/messaging-api/#get-number-of-broadcast-messages)

LINE@アカウントに紐づけられたボットの場合は、利用プランによってはこれらの機能を実行できません。

詳しくは、『[Messaging APIリファレンス](/reference/messaging-api/)』を参照してください。
