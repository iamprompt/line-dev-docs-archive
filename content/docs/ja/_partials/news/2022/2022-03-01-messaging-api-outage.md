---
title: 【復旧済み】Messaging API障害のお知らせ
navigation: true
description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。
meta: >-
  {"date":"2022-03-01 00:00 UTC","tags":"outage-report, messaging-api,
  options-for-corporate-customers","locale":"ja"}
path: /ja/_partials/news/2022/2022-03-01-messaging-api-outage
__hash__: XgyGFETSXqCTnY2kR42LIZxDMUfAQ__pW1P2u7YCoZQ
seo:
  title: 【復旧済み】Messaging API障害のお知らせ
  description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。
---

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2022年2月28日 14:24頃 ～ 14:27頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)
- [応答メッセージを送る](/reference/messaging-api/#send-reply-message)
- [マルチキャストメッセージを送る](/reference/messaging-api/#send-multicast-message)
- [ブロードキャストメッセージを送る](/reference/messaging-api/#send-broadcast-message)
- [LINE通知メッセージ](/docs/partner-docs/line-notification-messages/)

### 状況

上記の時間帯において、一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。

また、本障害の影響により、2月の配信可能なメッセージ数が一時的に多く消費された状態になっていました。これにより、配信可能なメッセージ数の上限に達していた場合、次のAPIリクエストに失敗していました。

- [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)
- [マルチキャストメッセージを送る](/reference/messaging-api/#send-multicast-message)
- [ブロードキャストメッセージを送る](/reference/messaging-api/#send-broadcast-message)

なお、本障害によるご利用料金への影響はありません。

### APIリクエストの再試行について

一部のAPIにおいては、ステータスコード500番台のエラーが発生した場合や、リクエストがタイムアウトした場合に、リトライキー（`X-Line-Retry-Key`）を使ってAPIリクエストを再試行する実装にしておくことで、同じ処理の重複を防ぎながら安全にリクエストを再試行できます。

詳しくは、『Messaging APIドキュメント』の「[失敗したAPIリクエストを再試行する](/docs/messaging-api/retrying-api-request/)」および「[リトライキーが利用可能なAPI](/docs/messaging-api/retrying-api-request/#apis-with-available-retry-keys)」を参照してください。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
