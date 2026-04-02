---
title: Messaging APIアップデート（2020年6月）
navigation: true
description: Messaging APIに新しいエンドポイントが追加されました。今回のアップデートで追加された機能は以下のとおりです。
meta: '{"date":"2020-06-10 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2020/2020-06-10-messaging-api-update-june-2020
__hash__: 3-BTET082B1834EDMeBGtxOBMGOaYALgbwGIL0dXTrQ
seo:
  title: Messaging APIアップデート（2020年6月）
  description: Messaging APIに新しいエンドポイントが追加されました。今回のアップデートで追加された機能は以下のとおりです。
---

Messaging APIに新しいエンドポイントが追加されました。今回のアップデートで追加された機能は以下のとおりです。

**エンドポイント**

- [グループの概要を取得する](#get-group-summary-news)
- [グループに参加しているユーザーの人数を取得する](#get-members-in-group-count-news)
- [トークルームに参加しているユーザーの人数を取得する](#get-members-in-room-count-news)

新機能の概要は下記のとおりです。各機能について詳しくは、『Messaging APIリファレンス』を参照してください。

## グループの概要を取得する

LINE公式アカウントが参加しているグループのグループID、グループ名、アイコンのURLを取得します。

詳しくは、『Messaging APIリファレンス』の「[グループの概要を取得する](/reference/messaging-api/#get-group-summary)」を参照してください。

## グループに参加しているユーザーの人数を取得する

グループに参加しているユーザーの人数を取得します。参加しているユーザーが、LINE公式アカウントを友だち追加していない場合や、LINE公式アカウントをブロックしている場合でも、人数に含まれます。

詳しくは、『Messaging APIリファレンス』の「[グループに参加しているユーザーの人数を取得する](/reference/messaging-api/#get-members-group-count)」を参照してください。

## トークルームに参加しているユーザーの人数を取得する

トークルームに参加しているユーザーの人数を取得します。参加しているユーザーが、LINE公式アカウントを友だち追加していない場合や、LINE公式アカウントをブロックしている場合でも、人数に含まれます。

詳しくは、『Messaging APIリファレンス』の「[トークルームに参加しているユーザーの人数を取得する](/reference/messaging-api/#get-members-room-count)」を参照してください。
