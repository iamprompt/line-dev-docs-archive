---
title: 【復旧済み／更新】Messaging API障害のお知らせ
navigation: true
description: ''
meta: >-
  {"date":"2021-07-01 02:00 UTC","tags":"Outage report, Messaging
  API","locale":"ja"}
path: /ja/_partials/news/2021/2021-07-01-messaging-api-outage
__hash__: 22KFdzOwIiF7wOUq15nOZbkO7hlrKke06ROGkaMG4K0
seo:
  title: 【復旧済み／更新】Messaging API障害のお知らせ
  description: ''
---

::admonition{title="2021年8月11日追記" type="note"}
「[原因](#cause-20210701)」を更新しました。
::

Messaging APIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2021年6月30日 12:00頃 ～ 12:12頃（UTC+9）

### 原因

キャッシュサーバーへの接続設定の変更に起因する障害

原因の詳細および再発防止策につきましては、セキュリティ＆プライバシーの「[LINE公式アカウントにおけるメッセージ誤表示のお知らせとお詫び](https://www.lycorp.co.jp/ja/privacy-security/archive/L/linecorp_com_ja_security_article_383.PDF){rel="[\"nofollow\"]"}」を参照してください。

### 影響範囲

- [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)
- [マルチキャストメッセージを送る](/reference/messaging-api/#send-multicast-message)

::admonition{title="本障害はメッセージ送信の一部のみに影響がありました" type="note"}
メッセージ送信に関係するエンドポイントのうち、[応答メッセージ](/reference/messaging-api/#send-reply-message)、[ナローキャストメッセージ](/reference/messaging-api/#send-narrowcast-message)、[ブロードキャストメッセージ](/reference/messaging-api/#send-broadcast-message)の送信には、本障害の影響はありませんでした。

また、[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}やLINE公式アカウントのチャット機能からのメッセージ送信も同様に影響はありませんでした。
::

### 状況

上記の時間帯に、一部のリクエストにおいて、特定のボット（ボットA）から送信したメッセージが、送信先ユーザーのLINEアプリ上で、別のボット（ボットB）のトークルームに表示されてしまう障害が発生しました。なお該当メッセージが、当初の送信先ユーザー以外に対して送信されたという事象はありません。

誤って表示されたメッセージは、すでに取り消しを実施しております。取り消されたメッセージは課金対象にはなりません。

![メッセージ送信取り消し](/media/news/message-unsend-ja.png){className="[\"w-fix-320\",\"border\"]"}

影響のあったボットの数は非常に限られており、対象となったボット（ボットA、ボットB）の管理者には、順次個別にご連絡を差し上げております。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
