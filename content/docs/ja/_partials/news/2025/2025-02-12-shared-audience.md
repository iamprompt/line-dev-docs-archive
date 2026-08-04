---
title: Messaging APIにおいて、ビジネスマネージャーで共有したオーディエンスをメッセージ送信に利用できるようになりました
navigation: true
description: Messaging APIにおいて、ビジネスマネージャーで共有されたオーディエンスをナローキャストメッセージの送信条件として指定できるようになりました。
meta: '{"date":"2025-02-12 01:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2025/2025-02-12-shared-audience
__hash__: 9mzGCYRYeUZOS4Oz9m4qupQcd6XVIOmBQiUW2an_2_Q
seo:
  title: Messaging APIにおいて、ビジネスマネージャーで共有したオーディエンスをメッセージ送信に利用できるようになりました
  description: Messaging APIにおいて、ビジネスマネージャーで共有されたオーディエンスをナローキャストメッセージの送信条件として指定できるようになりました。
---

Messaging APIにおいて、ビジネスマネージャーで共有されたオーディエンスを[ナローキャストメッセージ](/reference/messaging-api/#send-narrowcast-message)の送信条件として指定できるようになりました。

これに伴い、以下のエンドポイントを追加しました。

- [ビジネスマネージャーで共有されたオーディエンスのリストを取得する](/reference/messaging-api/#get-shared-audience-list)
- [ビジネスマネージャーで共有されたオーディエンスの情報を取得する](/reference/messaging-api/#get-shared-audience)

これまで、ビジネスマネージャーで共有されたオーディエンスは、Messaging APIでは利用できませんでした。今後はこれらのエンドポイントを使うことで、ビジネスマネージャーとMessaging APIとの連携が可能です。

::admonition{title="ビジネスマネージャーについて" type="tip"}
ビジネスマネージャーを使うことで、特定のオーディエンスを複数のサービス間で共有できます。ビジネスマネージャーでオーディエンスを横断利用することで、エンドユーザーとのより良いコミュニケーションが実現できます。

詳しくは、『LINE DATA SOLUTION』の「[ビジネスマネージャー](https://www.lycbiz.com/jp/service/business-manager/){rel="[\"nofollow\"]"}」を参照してください。
::

### LINE Messaging API SDKの更新について

上記に伴う[LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)の更新状況については、それぞれのSDKのリリースノートを参照してください。
