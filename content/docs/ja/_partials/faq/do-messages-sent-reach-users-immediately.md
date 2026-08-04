---
title: Messaging APIでメッセージを送信したらすぐにユーザーに届きますか？
navigation: true
description: Messaging APIで送信したメッセージがユーザーに届くまで、時間がかかる場合があります。
meta: >-
  {"date":"2023-06-15 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"ja"}
path: /ja/_partials/faq/do-messages-sent-reach-users-immediately
__hash__: BACZL4BTGtlKSlbxm6DZyfapurMPgj4oO5gEOftUN5M
seo:
  title: Messaging APIでメッセージを送信したらすぐにユーザーに届きますか？
  description: Messaging APIで送信したメッセージがユーザーに届くまで、時間がかかる場合があります。
---

Messaging APIで送信したメッセージがユーザーに届くまで、時間がかかる場合があります。

Messaging APIのエンドポイントに対するメッセージ送信のリクエストは、非同期で処理されます。このため、LINE公式アカウントの友だち登録数が多い場合や、同じ時間帯に他のLINE公式アカウントからのメッセージ送信のリクエストが集中した場合、メッセージ送信の処理に時間がかかることがあります。
