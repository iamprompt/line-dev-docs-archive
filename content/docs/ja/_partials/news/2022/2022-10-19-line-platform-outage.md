---
title: 【復旧済み／更新】LINEプラットフォーム障害のお知らせ
navigation: true
description: ''
meta: >-
  {"date":"2022-10-19 00:00 UTC","tags":"outage-report, messaging-api,
  options-for-corporate-customers, line-mini-app","locale":"ja"}
path: /ja/_partials/news/2022/2022-10-19-line-platform-outage
__hash__: lhzzzb7oUYOHWuOBBzBcZIa6SmjtlaUKBJ-GfK2osio
seo:
  title: 【復旧済み／更新】LINEプラットフォーム障害のお知らせ
  description: ''
---

::admonition{title="2022年10月20日" type="note"}
「[Messaging APIの状況](#state-20221019-01)」を更新しました。
::

::admonition{title="2022年10月19日 17:10追記" type="note"}
「[発生日時](#date-20221019)」および「[影響範囲](#impact-20221019)」を更新しました。
::

LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2022年10月19日 12:00頃 〜 16:18頃 （UTC+9）

### 原因

サーバー障害

### 影響範囲

- Messaging API
- LINEミニアプリ

### 状況

各プロダクトへの主な影響は以下のとおりです。

- [Messaging API](#state-20221019-01)
- [LINEミニアプリ](#state-20221019-02)

#### Messaging API

上記の時間帯において、以下の問題が発生していました。

- 以下のエンドポイントへのリクエスト時に、一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。

  - [応答メッセージを送る](/reference/messaging-api/#send-reply-message)
  - [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)
  - [マルチキャストメッセージを送る](/reference/messaging-api/#send-multicast-message)
  - [ブロードキャストメッセージを送る](/reference/messaging-api/#send-broadcast-message)
  - [LINE公式アカウントを友だち追加したユーザーのリストを取得する](/reference/messaging-api/#get-follower-ids)
  - [ユーザーからのメッセージに既読を付ける](/reference/partner-docs/#mark-messages-from-users-as-read)
  - [LINE通知メッセージを送る](/reference/partner-docs/#send-line-notification-message)
- 以下のエンドポイントへのリクエスト時に、エンドポイントへのリクエストが成功してステータスコード200が返ったにもかかわらず、実際はメッセージが送信されていない場合がありました。

  - [応答メッセージを送る](/reference/messaging-api/#send-reply-message)
  - [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)
  - [マルチキャストメッセージを送る](/reference/messaging-api/#send-multicast-message)
  - [ブロードキャストメッセージを送る](/reference/messaging-api/#send-broadcast-message)

なお本障害の影響で、APIリクエストは成功したが実際に送信されなかったメッセージについては、LINE公式アカウントのご利用料金、および[送信済みのプッシュメッセージの数を取得する](/reference/messaging-api/#get-number-of-push-messages)エンドポイント等で確認可能な「送信済みメッセージの数」にはカウントされません。

##### APIリクエストの再試行について

なお一部のAPIにおいては、ステータスコード500番台のエラーが発生した場合や、リクエストがタイムアウトした場合に、リトライキー（`X-Line-Retry-Key`）を使ってAPIリクエストを再試行する実装にしておくことで、同じ処理の重複を防ぎながら安全にリクエストを再試行できます。

詳しくは、『Messaging APIドキュメント』の「[失敗したAPIリクエストを再試行する](/docs/messaging-api/retrying-api-request/)」および「[リトライキーが利用可能なAPI](/docs/messaging-api/retrying-api-request/#apis-with-available-retry-keys)」を参照してください。

#### LINEミニアプリ

- 以下のエンドポイントへのリクエスト時に、一部のリクエストを正常に処理できない場合がありました。

  - [サービスメッセージを送る](/reference/line-mini-app/#send-service-message)

  
LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
