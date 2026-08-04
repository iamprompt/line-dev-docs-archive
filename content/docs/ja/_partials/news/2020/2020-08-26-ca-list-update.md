---
title: Webhook URLで使用できる認証局を追加しました
navigation: true
description: Webhook URLにはHTTPSを使用し、LINEが信頼する認証局で発行されたSSL証明書を設定する必要があります。
meta: >-
  {"date":"2020-08-26 01:00 UTC","tags":"LINE Platform, Maintenance,
  SSL","locale":"ja"}
path: /ja/_partials/news/2020/2020-08-26-ca-list-update
__hash__: 3gQomYC2KxgrouqmX0VPTtr-QKyoVnrb0iSTfqd6-Qw
seo:
  title: Webhook URLで使用できる認証局を追加しました
  description: Webhook URLにはHTTPSを使用し、LINEが信頼する認証局で発行されたSSL証明書を設定する必要があります。
---

Webhook URLにはHTTPSを使用し、LINEが信頼する認証局で発行されたSSL証明書を設定する必要があります。

LINEが信頼する認証局リストに、以下の認証局が追加されました。

```text
CN=TWCA Global Root CA, OU=Root CA, O=TAIWAN-CA, C=TW
```

Webhook URLを設定する操作について詳しくは、「[Webhook URLを設定する](/docs/messaging-api/building-bot/#setting-webhook-url)」を参照してください。
