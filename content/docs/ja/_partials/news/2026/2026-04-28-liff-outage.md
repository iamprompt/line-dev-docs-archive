---
title: 【復旧済み】LIFF/LINEミニアプリ障害のお知らせ
navigation: true
description: >-
  LIFF/LINEミニアプリにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
meta: >-
  {"date":"2026-04-28 00:00 UTC","tags":"outage-report, liff,
  line-mini-app","locale":"ja"}
path: /ja/_partials/news/2026/2026-04-28-liff-outage
__hash__: R0s8izVXryf28cjoauCHHBUmyHfRrnBoH9g3m5y01Aw
seo:
  title: 【復旧済み】LIFF/LINEミニアプリ障害のお知らせ
  description: >-
    LIFF/LINEミニアプリにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
---

LIFF/LINEミニアプリにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

1. 2026年4月27日 19:46頃 〜 20:05頃（UTC+9）
2. 2026年4月27日 19:46頃 〜 2026年4月28日 0:12頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

- LIFF
- LINEミニアプリ

### 状況

#### LIFF SDKの読み込みに失敗する

1.の発生日時において、[CDNパス](/docs/liff/developing-liff-apps/#specify-cdn-path)を利用してLIFF SDKを読み込んでいるLIFFアプリおよびLINEミニアプリで、LIFF SDKの読み込みに失敗する場合がありました。

#### LIFFアプリの初期化に失敗する

2.の発生日時において、[`liff.init()`](/reference/liff/#initialize-liff-app)メソッドでのLIFFアプリの初期化に失敗し、LIFFアプリおよびLINEミニアプリを正常に利用できない場合がありました。

  
LINEヤフー株式会社は今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
