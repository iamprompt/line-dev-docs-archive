---
title: Messaging APIにおいて、メンバーシップに関するエンドポイントとWebhookイベントの提供を開始しました
navigation: true
description: >-
  Messaging
  APIにおいて、LINE公式アカウントのメンバーシップに加入しているユーザーのユーザーIDを取得するエンドポイントと、ユーザーがメンバーシップに加入や継続課金、またはメンバーシップを退会したときに送信されるWebhookイベントの提供を開始しました。
meta: >-
  {"date":"2025-02-13 00:00 UTC","tags":"messaging-api,
  line-official-account","locale":"ja"}
path: /ja/_partials/news/2025/2025-02-13-membership-api
__hash__: hJNdIYRgm4ntV1ufMYW7Z1Uxh_dveS8Z8YMPoEhUgAg
seo:
  title: Messaging APIにおいて、メンバーシップに関するエンドポイントとWebhookイベントの提供を開始しました
  description: >-
    Messaging
    APIにおいて、LINE公式アカウントのメンバーシップに加入しているユーザーのユーザーIDを取得するエンドポイントと、ユーザーがメンバーシップに加入や継続課金、またはメンバーシップを退会したときに送信されるWebhookイベントの提供を開始しました。
---

Messaging APIにおいて、LINE公式アカウントのメンバーシップに加入しているユーザーのユーザーIDを取得するエンドポイントと、ユーザーがメンバーシップに加入や継続課金、またはメンバーシップを退会したときに送信されるWebhookイベントの提供を開始しました。

これらの機能を用いることで、たとえばメンバーシップに加入しているユーザーにプッシュメッセージを送信したり、ユーザーがメンバーシップに継続課金したときに特典を提供したりできます。詳しくは、以下に示す『Messaging APIリファレンス』の各セクションを参照してください。

- [メンバーシップに加入しているユーザーの一覧を取得する](/reference/messaging-api/#get-membership-user-ids)エンドポイント
- Webhookの[メンバーシップイベント](/reference/messaging-api/#membership-event)

### LINE Messaging API SDKの更新について

今回の機能追加に伴う[LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)の更新状況については、それぞれのSDKのリリースノートを参照してください。
