---
title: 特定のバージョンのLINEに対するLINE Beaconのサービス提供を終了しました
navigation: true
description: 2020年3月10日に告知したとおり、以下のバージョンのLINEを使用しているユーザーに対して、LINE Beaconの提供を終了しました。
meta: '{"date":"2020-03-26 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2020/2020-03-26-line-beacon-eol
__hash__: GWXrQTIt7jn6qT7-ZKWFsY_cUVH-03Z3ZMItKnEN_Ho
seo:
  title: 特定のバージョンのLINEに対するLINE Beaconのサービス提供を終了しました
  description: 2020年3月10日に告知したとおり、以下のバージョンのLINEを使用しているユーザーに対して、LINE Beaconの提供を終了しました。
---

[2020年3月10日に告知](/news/2020/03/10/line-beacon-deprecation/)したとおり、以下のバージョンのLINEを使用しているユーザーに対して、LINE Beaconの提供を終了しました。

- 日本 : LINEバージョン8.17.0未満
- 台湾 : LINEバージョン9.14.0未満
- タイ : LINEバージョン9.8.0未満
- インドネシア：LINEバージョン9.8.0未満（変更なし）

### 影響

該当するユーザーが、ビーコンの電波の受信圏に出入りしても検知されません。

- ボットアプリに対して、Webhookビーコンイベントが送信されません。
- 該当するユーザーに対して、ビーコンバナーが表示されません。

LINE Beaconについて詳しくは、「[ビーコンを使う](/docs/messaging-api/using-beacons/)」を参照してください。

サービスの提供終了にともない、お客様には多大なご迷惑をお掛けし、誠に申し訳ございません。LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
