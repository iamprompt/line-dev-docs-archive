---
title: 【更新】LINEプラットフォーム障害のお知らせ
navigation: true
description: ''
meta: >-
  {"date":"2026-07-28 00:00 UTC","tags":"outage-report, line-platform,
  line-login, liff, line-mini-app, messaging-api, console","locale":"ja"}
path: /ja/_partials/news/2026/2026-07-28-messaging-api-outage
__hash__: 6K573ST0GplUU5C-fyzBmbRCQNyQh64Y31lJPQ4zN28
seo:
  title: 【更新】LINEプラットフォーム障害のお知らせ
  description: ''
---

::admonition{title="2026年7月28日追記" type="note"}
「[影響範囲](#messaging-api-outage-impact-20260728)」および「[状況](#messaging-api-outage-details-20260728)」を更新しました。
::

LINEプラットフォームにおいて以下の障害が発生しております。お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。

## 発生日時

2026年7月28日 16:45頃（UTC+9）（継続中）

## 原因

調査中

## 影響範囲

- Messaging API
- LINEログイン
- LIFF/LINEミニアプリ
- LINE Developersコンソール

## 状況

各プロダクトへの主な影響は以下のとおりです。

- [Messaging API](#outage-state-20260728-01)
- [LINEログイン](#outage-state-20260728-02)
- [LIFF/LINEミニアプリ](#outage-state-20260728-03)
- [LINE Developersコンソール](#outage-state-20260728-04)

### Messaging API

[Messaging API](/docs/messaging-api/)で提供している機能が正常に利用できない事象が発生しております。

### LINEログイン

[友だち追加オプション](/docs/line-login/link-a-bot/)を利用した友だち追加や、ブロックの解除の処理が正常に行われない場合があります。

### LIFF/LINEミニアプリ

[友だち追加オプション](/docs/line-login/link-a-bot/)や[`liff.requestFriendship()`](/reference/liff/#request-friendship)メソッドを利用した友だち追加や、ブロックの解除の処理が正常に行われない場合があります。

### LINE Developersコンソール

各チャネルの設定変更が正常に行われない場合があります。

現在も引き続き調査を行っております。詳細は追ってお知らせいたします。

なお、最新の状況は[LINE API Status](https://api.line-status.info/incidents/ffzrh28hv6t1){rel="[\"nofollow\"]"}でお知らせしております。
