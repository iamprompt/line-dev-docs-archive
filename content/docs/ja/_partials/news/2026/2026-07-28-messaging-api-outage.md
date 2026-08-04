---
title: 【復旧済み／更新】LINEプラットフォーム障害のお知らせ
navigation: true
description: ''
meta: >-
  {"date":"2026-07-28 00:00 UTC","tags":"outage-report, line-platform,
  line-login, liff, line-mini-app, messaging-api,
  options-for-corporate-customers, console","locale":"ja"}
path: /ja/_partials/news/2026/2026-07-28-messaging-api-outage
__hash__: m5NB9fr_APNsxoqozYweG6d4GDfkTif1eFX_BCWaGfc
seo:
  title: 【復旧済み／更新】LINEプラットフォーム障害のお知らせ
  description: ''
---

::admonition{title="2026年8月3日追記" type="note"}
「[影響範囲](#messaging-api-outage-impact-20260728)」および「[状況](#messaging-api-outage-details-20260728)」にLINE通知メッセージに関する情報を追記しました。
::

::admonition{title="2026年7月29日追記" type="note"}
復旧に伴い、「[発生日時](#messaging-api-outage-date-20260728)」および「[状況](#messaging-api-outage-details-20260728)」を更新しました。
::

::admonition{title="2026年7月28日追記" type="note"}
「[影響範囲](#messaging-api-outage-impact-20260728)」および「[状況](#messaging-api-outage-details-20260728)」を更新しました。
::

LINEプラットフォームにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2026年7月28日 16:46頃 〜 21:11頃（UTC+9）

### 原因

調査中

原因については、調査が完了し次第、情報を更新します。

### 影響範囲

- Messaging API
- LINEログイン
- LIFF/LINEミニアプリ
- LINE Developersコンソール
- LINE通知メッセージ

### 状況

各プロダクトへの主な影響は以下のとおりです。

- [Messaging API](#outage-state-20260728-01)
- [LINEログイン](#outage-state-20260728-02)
- [LIFF/LINEミニアプリ](#outage-state-20260728-03)
- [LINE Developersコンソール](#outage-state-20260728-04)
- [LINE通知メッセージ](#outage-state-20260728-05)

#### Messaging API

- Webhookイベントの送信が遅延、もしくは正常に行われない場合がありました。
- 一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。

#### LINEログイン

[友だち追加オプション](/docs/line-login/link-a-bot/)を利用した友だち追加や、ブロックの解除の処理が正常に行われない場合がありました。

#### LIFF/LINEミニアプリ

- [友だち追加オプション](/docs/line-login/link-a-bot/)や[`liff.requestFriendship()`](/reference/liff/#request-friendship)メソッドを利用した友だち追加や、ブロックの解除の処理が正常に行われない場合がありました。
- [サービスメッセージ](/docs/line-mini-app/develop/service-messages/)の送信が遅延、もしくは正常に行われない場合がありました。

#### LINE Developersコンソール

各チャネルの設定変更が正常に行われない場合がありました。

#### LINE通知メッセージ

- Webhookイベント（[配信完了イベント](/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/)）の送信が遅延、もしくは正常に行われない場合がありました。
- 一部のリクエストを正常に処理できず、ステータスコード500番台のエラーが発生していました。
- LINE通知メッセージの受信設定やSMS認証が必要な場合に、ユーザーが必要な同意や認証を完了して送信対象となった後も、メッセージが送信されない場合がありました。

  - この事象の影響を受けたユーザーに対しては、LINEヤフー株式会社から本事象についてのお詫びとご案内を個別にお送りする予定です。

  
なお障害発生時は、LINE API Statusにて速報をお知らせしております。詳しくは、『LINEプラットフォームの基礎知識』の「[LINEプラットフォームの稼働状況を確認する（LINE API Status）](/docs/basics/line-api-status/)」を参照してください。

LINEヤフー株式会社は今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
