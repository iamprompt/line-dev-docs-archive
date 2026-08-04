---
title: 【復旧済み】Messaging API障害のお知らせ
navigation: true
description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
meta: >-
  {"date":"2022-07-28 00:00 UTC","tags":"outage-report, messaging-api,
  options-for-corporate-customers","locale":"ja"}
path: /ja/_partials/news/2022/2022-07-28-messaging-api-outage
__hash__: KyXOiKuHPDA2kRGSk9Tsaq3vbpU8gLjP-gNXTjEFMGA
seo:
  title: 【復旧済み】Messaging API障害のお知らせ
  description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。
---

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2022年7月28日 5:29頃 ～ 5:49頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- [応答メッセージを送る](/reference/messaging-api/#send-reply-message)
- [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)
- [マルチキャストメッセージを送る](/reference/messaging-api/#send-multicast-message)
- [ナローキャストメッセージを送る](/reference/messaging-api/#send-narrowcast-message)
- [ブロードキャストメッセージを送る](/reference/messaging-api/#send-broadcast-message)
- [LINE通知メッセージを送る](/reference/partner-docs/#send-line-notification-message)（法人ユーザー向けオプション）
- [ユーザーからのメッセージに既読を付ける](/reference/partner-docs/#mark-messages-from-users-as-read)（法人ユーザー向けオプション）
- [LINE公式アカウントを友だち追加したユーザーのリストを取得する](/reference/messaging-api/#get-follower-ids)
- [コンテンツを取得する](/reference/messaging-api/#get-content)

### 状況

上記の時間帯において、以下の問題が発生していました。

- 一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。
- 一部のリクエストにおいて、エンドポイントへのリクエストが成功してステータスコード200が返ったにもかかわらず、実際はメッセージが送信されていませんでした。

本障害の影響で、APIリクエストは成功したが実際に送信されなかったメッセージについては、LINE公式アカウントのご利用料金、および[送信済みのプッシュメッセージの数を取得する](/reference/messaging-api/#get-number-of-push-messages)エンドポイント等で確認可能な「送信済みメッセージの数」にはカウントされません。

### APIリクエストの再試行について

なお一部のAPIにおいては、ステータスコード500番台のエラーが発生した場合や、リクエストがタイムアウトした場合に、リトライキー（`X-Line-Retry-Key`）を使ってAPIリクエストを再試行する実装にしておくことで、同じ処理の重複を防ぎながら安全にリクエストを再試行できます。

詳しくは、『Messaging APIドキュメント』の「[失敗したAPIリクエストを再試行する](/docs/messaging-api/retrying-api-request/)」および「[リトライキーが利用可能なAPI](/docs/messaging-api/retrying-api-request/#apis-with-available-retry-keys)」を参照してください。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
