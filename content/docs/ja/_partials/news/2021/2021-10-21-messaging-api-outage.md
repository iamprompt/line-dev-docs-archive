---
title: 【復旧済み】Messaging API障害のお知らせ
navigation: true
description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
meta: >-
  {"date":"2021-10-21 01:00 UTC","tags":"outage-report, messaging-api,
  options-for-corporate-customers","locale":"ja"}
path: /ja/_partials/news/2021/2021-10-21-messaging-api-outage
__hash__: roBJVMbapM0koccn6h0AsuTF2yLlo_aBfZCmqgazxMc
seo:
  title: 【復旧済み】Messaging API障害のお知らせ
  description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
---

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2021年10月20日 17:29頃 〜 17:41頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- [応答メッセージを送る](/reference/messaging-api/#send-reply-message)
- [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)
- [マルチキャストメッセージを送る](/reference/messaging-api/#send-multicast-message)
- [ナローキャストメッセージを送る](/reference/messaging-api/#send-narrowcast-message)
- [ブロードキャストメッセージを送る](/reference/messaging-api/#send-broadcast-message)
- [LINE通知メッセージ](/docs/partner-docs/line-notification-messages/)

### 状況

上記の時間帯において、一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。

### APIリクエストの再試行について

なお一部のAPIにおいては、ステータスコード500番台のエラーが発生した場合や、リクエストがタイムアウトした場合に、リトライキー（`X-Line-Retry-Key`）を使ってAPIリクエストを再試行する実装にしておくことで、同じ処理の重複を防ぎながら安全にリクエストを再試行できます。

詳しくは、『Messaging APIドキュメント』の「[失敗したAPIリクエストを再試行する](/docs/messaging-api/retrying-api-request/)」および「[リトライキーが利用可能なAPI](/docs/messaging-api/retrying-api-request/#apis-with-available-retry-keys)」を参照してください。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
