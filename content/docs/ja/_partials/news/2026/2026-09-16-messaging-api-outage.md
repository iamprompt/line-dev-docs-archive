---
title: 【復旧済み】Messaging API障害のお知らせ
navigation: true
description: Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
meta: >-
  {"date":"2026-09-16 00:00 UTC","tags":"outage-report, messaging-api,
  options-for-corporate-customers","locale":"ja"}
path: /ja/_partials/news/2026/2026-09-16-messaging-api-outage
__hash__: rd_AGzMr_-oSKNo07Ud_JZiPELR5vNBLqgPZ9MvWPyw
seo:
  title: 【復旧済み】Messaging API障害のお知らせ
  description: >-
    Messaging
    APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
---

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2026年9月15日 23:58頃 〜 2026年9月16日 3:43頃（UTC+9）

### 原因

ネットワーク障害

### 影響範囲

- [Messaging APIのすべてのエンドポイント](/reference/messaging-api/)
- [LINE通知メッセージ（フレキシブル）を送る](/reference/line-notification-messages/#send-line-notification-message-flexible)（法人ユーザー向けオプション）
- [LINE通知メッセージ（テンプレート）を送る](/reference/line-notification-messages/#send-line-notification-message-template)（法人ユーザー向けオプション）

### 状況

上記の時間帯において、一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。

#### APIリクエストの再試行について

なお一部のAPIにおいては、ステータスコード500番台のエラーが発生した場合や、リクエストがタイムアウトした場合に、リトライキー（`X-Line-Retry-Key`）を使ってAPIリクエストを再試行する実装にしておくことで、同じ処理の重複を防ぎながら安全にリクエストを再試行できます。

詳しくは、『Messaging APIドキュメント』の「[失敗したAPIリクエストを再試行する](/docs/messaging-api/retrying-api-request/)」および「[リトライキーを常に指定する](/docs/messaging-api/retrying-api-request/#apis-with-available-retry-keys)」を参照してください。

LINEヤフー株式会社は今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
