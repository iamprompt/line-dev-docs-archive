---
title: LINEプラットフォーム メンテナンスのお知らせ
navigation: true
description: >-
  LINEプラットフォームにおいて、以下のメンテナンスを予定しています。ご利用のユーザー様にはご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。
meta: >-
  {"date":"2024-08-13 00:00 UTC","tags":"maintenance, channel-access-token,
  messaging-api, line-login, liff, line-mini-app,
  options-for-corporate-customers, console","locale":"ja"}
path: /ja/_partials/news/2024/2024-08-13-maintenance-notice
__hash__: u-cz7mkiKBKM7rL-LsKgq_7rJ5t4XCQWa1UssVNTG_c
seo:
  title: LINEプラットフォーム メンテナンスのお知らせ
  description: >-
    LINEプラットフォームにおいて、以下のメンテナンスを予定しています。ご利用のユーザー様にはご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。
---

LINEプラットフォームにおいて、以下のメンテナンスを予定しています。ご利用のユーザー様にはご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。

### メンテナンス予定日時

2024年8月28日 5:00頃 〜 6:00頃（UTC+9）

なお、メンテナンス日時は予告なく変更される可能性があります。

### 影響範囲

メンテナンス予定時間のうち、システムを数分間利用できない状態が複数回発生するため、各プロダクトにおいて以下の操作ができない場合があります。なお、メンテナンス中においても、下記以外の操作は実行可能です。

- [チャネルアクセストークン](#impact-channel-access-token-20240813)
- [Messaging API](#impact-messaging-api-20240813)
- [LINEログイン／LIFF／LINEミニアプリ](#impact-liff-20240813)
- [法人ユーザー向けオプション](#impact-options-for-corporate-customers-20240813)
- [LINE Developersコンソール](#impact-console-20240813)

#### チャネルアクセストークン

- [チャネルアクセストークン](/docs/basics/channel-access-token/)の発行

#### Messaging API

- Messaging APIのエンドポイントの実行（`api.line.me/v2/bot/*`および`api-data.line.me/v2/bot/*`）
- Webhookイベントの受信  
Webhookイベントは、遅延または消失が発生する可能性があります。

#### LINEログイン／LIFF／LINEミニアプリ

- ログインの試行
- LIFFアプリおよびLINEミニアプリの起動

#### 法人ユーザー向けオプション

- [LINE通知メッセージを送る](/reference/partner-docs/#send-line-notification-message)
- [送信済みのLINE通知メッセージの数を取得する](/reference/partner-docs/#get-number-of-sent-line-notification-messages)

#### LINE Developersコンソール

- [チャネル](/docs/line-developers-console/overview/#channel)の作成、設定変更、および権限の編集
