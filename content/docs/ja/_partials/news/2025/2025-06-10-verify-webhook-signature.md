---
title: 『Messaging APIドキュメント』にWebhookの署名検証に関するドキュメントを追加しました
navigation: true
description: >-
  『Messaging
  APIドキュメント』に、「Webhookの署名を検証する」を追加しました。このドキュメントでは、Webhookを受信した際にボットサーバーでやるべき署名検証について解説しています。
meta: '{"date":"2025-06-10 00:00 UTC","tags":"docs, messaging-api","locale":"ja"}'
path: /ja/_partials/news/2025/2025-06-10-verify-webhook-signature
__hash__: 3B2bqRZ2915BzlgyGqWMO0wuDHL3nDtaqrz9AO2tL1U
seo:
  title: 『Messaging APIドキュメント』にWebhookの署名検証に関するドキュメントを追加しました
  description: >-
    『Messaging
    APIドキュメント』に、「Webhookの署名を検証する」を追加しました。このドキュメントでは、Webhookを受信した際にボットサーバーでやるべき署名検証について解説しています。
---

『Messaging APIドキュメント』に、「[Webhookの署名を検証する](/docs/messaging-api/verify-webhook-signature/)」を追加しました。このドキュメントでは、Webhookを受信した際にボットサーバーでやるべき署名検証について解説しています。

併せて、『Messaging API開発ガイドライン』の推奨事項に「[Webhook受信時の署名検証](/docs/messaging-api/development-guidelines/#verify-webhook-signature)」を追加しました。

### ドキュメント追加の背景

ユーザーが、LINE公式アカウントを友だち追加したり、LINE公式アカウントにメッセージを送ったりすると、[LINE Developersコンソール](/console/)の［**Webhook URL**］で指定したボットサーバーに対して、LINEプラットフォームからWebhookが送られます。

ボットサーバーでWebhookを受信した際は、[Webhookイベントオブジェクト](/reference/messaging-api/#webhook-event-objects)を処理する前に、リクエストヘッダーに含まれる署名を検証することが推奨されています。署名の検証は、開発者のボットサーバーに届いたリクエストが「LINEプラットフォームから送信されたWebhookか」および「通信経路で改ざんされていないか」などを確認するための重要な手順です。

新たに追加されたドキュメントでは、「[署名検証に必要な事前準備](/docs/messaging-api/verify-webhook-signature/#preparation-for-signature-verification)」、「[署名検証の仕組み](/docs/messaging-api/verify-webhook-signature/#signature-verification-flow)」、そして「[署名検証の手順](/docs/messaging-api/verify-webhook-signature/#signature-verification-implementation-example)」などを解説しています。

また、「[署名検証のよくある失敗とその解決方法](/docs/messaging-api/verify-webhook-signature/#common-signature-verification-failures-and-their-solutions)」では、LINEプラットフォームから送られたWebhookであるにも関わらず、署名検証に失敗してしまうときのトラブルシューティングを解説しています。

開発者のみなさんがMessaging APIを活用したサービスの開発をさらに円滑に進められるように、今後も引き続き、LINE Developersサイトと開発者向けドキュメントの品質向上に努めて参ります。
