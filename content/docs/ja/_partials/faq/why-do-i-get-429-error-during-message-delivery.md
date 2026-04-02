---
title: >-
  当月に配信できるメッセージ数はまだ残っているのに、メッセージ送信時に429 Too Many Requests（You have reached your
  monthly limit.）が返されるのはなぜですか？
navigation: true
description: >-
  当月に配信できるメッセージ数が十分に残っている場合でも、メッセージを配信している最中に別のメッセージを送信しようとすると、429 Too Many
  RequestsおよびエラーメッセージYou have reached your monthly
  limit.が返され、メッセージの送信に失敗することがあります。
meta: >-
  {"date":"2026-01-22 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"ja"}
path: /ja/_partials/faq/why-do-i-get-429-error-during-message-delivery
__hash__: f8lrk9Hv6lMJUGj7wsbMY4YqeYBFFzNGrO6GGXjhskc
seo:
  title: >-
    当月に配信できるメッセージ数はまだ残っているのに、メッセージ送信時に429 Too Many Requests（You have reached
    your monthly limit.）が返されるのはなぜですか？
  description: >-
    当月に配信できるメッセージ数が十分に残っている場合でも、メッセージを配信している最中に別のメッセージを送信しようとすると、429 Too Many
    RequestsおよびエラーメッセージYou have reached your monthly
    limit.が返され、メッセージの送信に失敗することがあります。
---

当月に配信できるメッセージ数が十分に残っている場合でも、メッセージを配信している最中に別のメッセージを送信しようとすると、`429 Too Many Requests`およびエラーメッセージ`You have reached your monthly limit.`が返され、メッセージの送信に失敗することがあります。

これは、LINE Official Account ManagerおよびMessaging APIによるメッセージ配信において、送信開始から実際に送信される件数が確定するまでの間、配信予定のメッセージ数が一時的に予約されるために発生します。メッセージの配信設定によっては、実際の配信対象のユーザー数に関わらず:glossary-tooltip[[ターゲットリーチ](/glossary/#target-reach)]{glossary-id="target-reach"}分のメッセージ数が予約され、残数が一時的に枯渇する場合があります。

配信予定数の予約によって当月に配信できるメッセージの残数が一時的に枯渇している場合、別のメッセージの送信に失敗することがあります。先に実行している配信が完了し、配信されたメッセージ数が確定した段階で当月に配信できるメッセージの残数があれば、改めてメッセージを送信できます。

詳しくは、『Messaging APIリファレンス』の「[当月に配信できるメッセージの残数に関する注意事項](/reference/messaging-api/#send-narrowcast-message-cautions)」を参照してください。
