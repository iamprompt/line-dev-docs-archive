---
title: Messaging APIでメッセージを送信したのに、ユーザーにメッセージが届きません。
navigation: true
description: >-
  Messaging
  APIでメッセージを送信して200番台のステータスコードが返ったにもかかわらず、ユーザーにメッセージが届いていない場合、以下のような理由が考えられます。
meta: >-
  {"date":"2024-05-16 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"ja"}
path: /ja/_partials/faq/i-sent-a-message-but-the-user-did-not-receive-it
__hash__: 5uXYrO4iEC6a7N6mQta5o5dvqRrRuq3df4Y_np4kIUo
seo:
  title: Messaging APIでメッセージを送信したのに、ユーザーにメッセージが届きません。
  description: >-
    Messaging
    APIでメッセージを送信して200番台のステータスコードが返ったにもかかわらず、ユーザーにメッセージが届いていない場合、以下のような理由が考えられます。
---

Messaging APIでメッセージを送信して200番台のステータスコードが返ったにもかかわらず、ユーザーにメッセージが届いていない場合、以下のような理由が考えられます。

- 「ユーザーがLINE公式アカウントをブロックしている」など、送信に必要な条件を満たしていない

  - [プッシュメッセージを送信できる条件](/reference/messaging-api/#send-push-message-conditions)
  - [マルチキャストメッセージを送信できる条件](/reference/messaging-api/#send-multicast-message-conditions)
  - [ナローキャストメッセージを送信できる条件](/reference/messaging-api/#send-narrowcast-message-conditions)

上記について問題がないにもかかわらず、LINEアプリにメッセージが届いていない場合は、何らかの原因でユーザーの端末とLINEのサーバーの自動同期ができていない可能性があります。ヘルプセンターの「[トークに関する問題 > トークリストの情報が間違っている > 自分が見ているトーク履歴の情報が他のユーザーと違う](https://help.line.me/line/smartphone/pc?lang=ja&contentId=20018227){rel="[\"nofollow\"]"}」を参照して、LINEアプリを利用している端末から「トーク履歴の情報を同期」をお試しいただくようユーザーにご案内ください。

なおヘルプセンターに記載のとおり、トーク履歴の情報を手動で同期する際は、必ず事前にトーク履歴のバックアップを行ってください。
