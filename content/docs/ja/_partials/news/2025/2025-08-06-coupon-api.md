---
title: Messaging APIでクーポンを作成してメッセージとして送信できるようになりました
navigation: true
description: Messaging APIでクーポンを作成して、LINE公式アカウントからユーザーにメッセージとして送信できるようになりました。
meta: >-
  {"date":"2025-08-06 00:00 UTC","tags":"messaging-api,
  line-official-account","locale":"ja"}
path: /ja/_partials/news/2025/2025-08-06-coupon-api
__hash__: pxC1zEBbtfbnOUolWXToZYeraA6lMvI-J481aRT8vW8
seo:
  title: Messaging APIでクーポンを作成してメッセージとして送信できるようになりました
  description: Messaging APIでクーポンを作成して、LINE公式アカウントからユーザーにメッセージとして送信できるようになりました。
---

Messaging APIでクーポンを作成して、LINE公式アカウントからユーザーにメッセージとして送信できるようになりました。

![](/media/messaging-api/coupon/several-coupons.jpg)

### 追加された機能

- [クーポンを作成する](/reference/messaging-api/#create-coupon)
- [クーポンを終了する](/reference/messaging-api/#discontinue-coupon)
- [クーポンの一覧を取得する](/reference/messaging-api/#get-coupons-list)
- [クーポンの詳細を取得する](/reference/messaging-api/#get-coupon)
- メッセージタイプに[クーポンメッセージ](/docs/messaging-api/message-types/#coupon-messages)を指定してメッセージを送る

詳しくは、『Messaging APIドキュメント』の「[クーポンを作成してユーザーに送る](/docs/messaging-api/send-coupons-to-users/)」を参照してください。

### LINE Messaging API SDKの更新について

今回の機能追加に伴う[LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)の更新状況については、それぞれのSDKのリリースノートを参照してください。
