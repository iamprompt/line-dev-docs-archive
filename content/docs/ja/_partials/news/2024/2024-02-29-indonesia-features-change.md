---
title: インドネシアにおけるMessaging APIの一部機能が2024年4月3日に廃止されます
navigation: true
description: インドネシアにおけるLINE公式アカウントの戦略変更に伴い、Messaging APIの一部機能が廃止されますのでお知らせします。
meta: >-
  {"date":"2024-02-29 00:00 UTC","tags":"line-official-account, messaging-api,
  options-for-corporate-customers, end-of-life","locale":"ja"}
path: /ja/_partials/news/2024/2024-02-29-indonesia-features-change
__hash__: zCrZlt8Pu06C5UhRFsWeuF97xQ4-IVtlUwnRF5HjLgQ
seo:
  title: インドネシアにおけるMessaging APIの一部機能が2024年4月3日に廃止されます
  description: インドネシアにおけるLINE公式アカウントの戦略変更に伴い、Messaging APIの一部機能が廃止されますのでお知らせします。
---

インドネシアにおけるLINE公式アカウントの戦略変更に伴い、Messaging APIの一部機能が廃止されますのでお知らせします。

### 仕様変更予定日

2024年4月3日

なお、この仕様変更の内容および日時は、予告なく変更される可能性があります。

### 変更点

この仕様変更により、インドネシアにおいて以下の機能が廃止されます。

1. [友だちの属性情報に基づく統計情報の取得](#changes-get-demographic-20240229)
2. [ナローキャストメッセージの「地域」による送信対象の指定](#changes-region-20240229)
3. [LINE通知メッセージによるメッセージ送信](#changes-line-notification-message-20240229)
4. [LINEビーコンの使用](#changes-line-beacon-20240229)

#### 1. 友だちの属性情報に基づく統計情報の取得

「分析」の「[友だちの属性情報に基づく統計情報を取得する](/reference/messaging-api/#get-demographic)」エンドポイントにおいて、インドネシアのユーザーが作成したLINE公式アカウントは統計情報を取得できなくなります。

#### 2. ナローキャストメッセージの「地域」による送信対象の指定

[ナローキャストメッセージ](/reference/messaging-api/#send-narrowcast-message)の[デモグラフィックフィルターオブジェクト](/reference/messaging-api/#narrowcast-demographic-filter)として指定する[地域](/reference/messaging-api/#narrowcast-demographic-filter-region)において、インドネシアが指定できなくなります。

#### 3. LINE通知メッセージによるメッセージ送信

法人ユーザーのみが利用できる[LINE通知メッセージ](/reference/partner-docs/#send-line-notification-message)において、インドネシアで発行された電話番号に対してメッセージが送信できなくなります。

#### 4. LINEビーコンの使用

インドネシアにおいて、[LINEビーコン](/docs/messaging-api/using-beacons/)が使用できなくなります。仕様変更以降、ビーコン端末はインドネシアのユーザーを検出できなくなります。

LINEヤフー株式会社は今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
