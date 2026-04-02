---
title: 【復旧済み】LIFF/LINEミニアプリ障害のお知らせ
navigation: true
description: ''
meta: >-
  {"date":"2022-01-14 00:00 UTC","tags":"outage-report, liff,
  line-mini-app","locale":"ja"}
path: /ja/_partials/news/2022/2022-01-14-liff-outage
__hash__: WF00gqUYWM0KGH-K8P5MhfjanIZz9K5VVb8TLWdfun8
seo:
  title: 【復旧済み】LIFF/LINEミニアプリ障害のお知らせ
  description: ''
---

::admonition{title="2022年1月17日追記" type="note"}
「[発生日時](#date-20220114)」および「[影響範囲](#impact-20220114)」を更新しました。
::

LIFF/LINEミニアプリにおいて以下の障害が発生しておりましたが、修正バージョンのLINEをリリースしました。

お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

### 発生日時

2022年1月12日 〜 2022年1月16日

### 原因

iOS版およびiPadOS版LINE 12.0.0のバグ

### 状況

特定の条件下でLIFFアプリまたはLINEミニアプリを開いた際に、以下の問題が発生していました。

- [`liff.sendMessages()`](/reference/liff/#send-messages)が正常に動作せず、ステータスコード`403`で`user doesn't grant required permissions yet`というエラーメッセージが返る
- [`liff.getContext()`](/reference/liff/#get-context)を実行すると、LIFFアプリが起動された画面に関わらず、戻り値の`type`で`none`が返る

### 影響範囲

以下の条件をすべて満たす場合、`liff.sendMessages()`および`liff.getContext()`で問題が発生していました。

- ユーザーがiOS版またはiPadOS版のLINEを利用している
- ユーザーが利用しているLINEのバージョンが`12.0.0`である
- ユーザーが以下のいずれかの方法でLIFFアプリまたはLINEミニアプリを起動した

  - [リッチメニュー](/docs/messaging-api/using-rich-menus/)
  - [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}から送信した[リッチメッセージ](https://www.linebiz.com/jp/manual/OfficialAccountManager/rich-messages/){rel="[\"nofollow\"]"}

こちらの条件に当てはまる場合は、ユーザーが利用しているLINEのバージョンを`12.0.1`以降にアップデートすることで問題が解消いたします。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
