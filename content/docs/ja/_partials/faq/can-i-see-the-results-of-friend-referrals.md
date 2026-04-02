---
title: ユーザーが友だちにLINE公式アカウントをシェアした際、友だち紹介の結果（友だち追加の有無や人数）をLINE公式アカウント側で取得できますか？
navigation: true
description: いいえ、できません。
meta: >-
  {"date":"2023-07-14 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"ja"}
path: /ja/_partials/faq/can-i-see-the-results-of-friend-referrals
__hash__: D7hYa4NwPkH8a4zkIXuS8ovWlyduZNNb19h5iTkDK0o
seo:
  title: ユーザーが友だちにLINE公式アカウントをシェアした際、友だち紹介の結果（友だち追加の有無や人数）をLINE公式アカウント側で取得できますか？
  description: いいえ、できません。
---

いいえ、できません。

紹介された相手がLINE公式アカウントを友だち追加またはブロック解除すると、LINEプラットフォームからボットサーバーにWebhookの[フォローイベント](/reference/messaging-api/#follow-event)が送信されます。しかし、そのユーザーがLINE公式アカウントをどの経路で友だち追加したのか（誰の紹介で友だち追加したのか）は、Messaging APIでは確認できません。

また友だち紹介の結果、何人が友だち追加したかという人数も取得できません。
