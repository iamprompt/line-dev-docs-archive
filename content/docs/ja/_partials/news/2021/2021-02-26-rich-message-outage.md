---
title: 【復旧済み】リッチメニューの処理障害のお知らせ
navigation: true
description: >-
  Messaging
  APIで提供するリッチメニューの一部のAPIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
meta: >-
  {"date":"2021-02-26 02:00 UTC","tags":"Outage report, Messaging
  API","locale":"ja"}
path: /ja/_partials/news/2021/2021-02-26-rich-message-outage
__hash__: IGpexzqK3YziyQ4Mj54kwOPSbEknVnqmFBIYhw77h_8
seo:
  title: 【復旧済み】リッチメニューの処理障害のお知らせ
  description: >-
    Messaging
    APIで提供するリッチメニューの一部のAPIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
---

Messaging APIで提供するリッチメニューの一部のAPIにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

- 2021年2月22日 16:00 頃 〜 2/23 2:46 頃（UTC+9）
- 2021年2月23日 11:38 頃 〜 13:31 頃（UTC+9）
- 2021年2月23日 17:50 頃 〜 18:43 頃（UTC+9）
- 2021年2月24日 0:30 頃 〜 7:42 頃（UTC+9）
- 2021年2月24日 12:26 頃 〜15:00 頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

リッチメニューに関する以下のAPIの処理：

- [リッチメニューと複数のユーザーをリンクする](/reference/messaging-api/#link-rich-menu-to-users)
- [複数のユーザーのリッチメニューのリンクを解除する](/reference/messaging-api/#unlink-rich-menu-from-users)

### 状況

上記の期間、[リッチメニューと複数のユーザーをリンクする](/reference/messaging-api/#link-rich-menu-to-users)エンドポイントと[複数のユーザーのリッチメニューのリンクを解除する](/reference/messaging-api/#unlink-rich-menu-from-users)エンドポイントの処理に大幅に時間を要し、リッチメニューの切り替えが正常に行われない場合がありました。

なお、APIの処理の失敗は確認されていません。また、上記2点のAPIエンドポイント以外の動作に影響はありませんでした。

現在、障害は復旧されており、リッチメニューは正しく処理されています。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
