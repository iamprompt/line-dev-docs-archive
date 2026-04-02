---
title: Iap Signature Validation
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-mini-app/iap-signature-validation
__hash__: ikGen-pnRlf07ru1rvWWxQznHtnLLeCn68z7pSHQS78
seo:
  description: ''
---

### 署名を検証する

LINEミニアプリのサーバーにWebhookのリクエストが届いたら、Webhookイベントを処理する前に、リクエストヘッダーに含まれる署名を検証してください。署名の検証は、LINEミニアプリのサーバーに届いたリクエストが「LINEプラットフォームから送信されたWebhookか」および「通信経路で改ざんされていないか」などを確認するための重要な手順です。

詳しくは、『Messaging APIドキュメント』の「[Webhookの署名を検証する](/docs/messaging-api/verify-webhook-signature/)」を参照してください。
