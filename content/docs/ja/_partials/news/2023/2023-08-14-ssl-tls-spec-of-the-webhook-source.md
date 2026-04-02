---
title: 『Messaging APIドキュメント』にWebhookの問題解決に役立つドキュメントを追加しました
navigation: true
description: 『Messaging APIドキュメント』に、Webhookに関する複数のドキュメントを追加しました。
meta: >-
  {"date":"2023-08-14 00:00 UTC","tags":"docs, messaging-api,
  ssl","locale":"ja"}
path: /ja/_partials/news/2023/2023-08-14-ssl-tls-spec-of-the-webhook-source
__hash__: rI62wq3X0sReq7lHNMOTwWm4HxiCQo7irDP_Dc-Fe68
seo:
  title: 『Messaging APIドキュメント』にWebhookの問題解決に役立つドキュメントを追加しました
  description: 『Messaging APIドキュメント』に、Webhookに関する複数のドキュメントを追加しました。
---

『Messaging APIドキュメント』に、Webhookに関する複数のドキュメントを追加しました。

- [Webhook URLを検証する](/docs/messaging-api/verify-webhook-url/)
- [Webhookのエラーの原因と統計情報を確認する](/docs/messaging-api/check-webhook-error-statistics/)
- [Webhook送信元のSSL/TLS仕様](/docs/messaging-api/ssl-tls-spec-of-the-webhook-source/)

これらのドキュメントは、開発者のみなさんがWebhookに関する問題に直面した際、原因を迅速に特定し、解決するための手助けとなります。

### ドキュメント追加の背景

ユーザーが、LINE公式アカウントを友だち追加したり、LINE公式アカウントにメッセージを送ったりすると、[LINE Developersコンソール](/console/)の［**Webhook URL**］で指定したURL（ボットサーバー）に対して、LINEプラットフォームからWebhookイベントが送られます。

このWebhookをボットサーバーでうまく受信できない場合に、原因特定に苦労しているというフィードバックが開発者のみなさんから寄せられていました。

新たに追加されたドキュメントでは、[Webhook URLを検証する](/docs/messaging-api/verify-webhook-url/)手順や、[Webhookのエラーの原因と統計情報を確認する](/docs/messaging-api/check-webhook-error-statistics/)方法などを解説しています。

また、[Webhook送信元のSSL/TLS仕様](/docs/messaging-api/ssl-tls-spec-of-the-webhook-source/)も併せて公開しました。これにより、たとえば「ボットサーバーで適切なSSL/TLS証明書が設定されており、プロトコルバージョンもTLS 1.2で問題ないはずだが、なぜかWebhookを受信できない」というような場合に、もう一歩踏み込んで「Webhook送信元とボットサーバーの間で一致する暗号スイートがあるか」も調査できるようになりました。

開発者のみなさんがMessaging APIを活用したサービスの開発をさらに円滑に進められるように、今後も引き続き、LINE Developersサイトと開発者向けドキュメントの品質向上に努めて参ります。
