---
title: Webhook通知元におけるTLS 1.0、TLS 1.1のサポートを終了しました
navigation: true
description: >-
  2020年10月6日、2021年1月18日、および2021年1月28日にお知らせしたとおり、Messaging
  APIのWebhook通知元であるLINEプラットフォームにおいて、以下のアップデートを行いました。
meta: >-
  {"date":"2021-02-08 00:00 UTC","tags":"Messaging API, SSL,
  end-of-life","locale":"ja"}
path: /ja/_partials/news/2021/2021-02-08-line-platform-update
__hash__: 5tSHzDuxCDYYvfAKk7teagTaS5ZahtlJFS7eVfr8nLc
seo:
  title: Webhook通知元におけるTLS 1.0、TLS 1.1のサポートを終了しました
  description: >-
    2020年10月6日、2021年1月18日、および2021年1月28日にお知らせしたとおり、Messaging
    APIのWebhook通知元であるLINEプラットフォームにおいて、以下のアップデートを行いました。
---

[2020年10月6日](/news/2020/10/06/update-webhook-client-and-root-certificate/)、[2021年1月18日](/news/2021/01/18/reminder-update-webhook-client-and-root-certificate/)、および[2021年1月28日](/news/2021/01/28/reminder-update-webhook-client-and-root-certificate/)にお知らせしたとおり、Messaging APIのWebhook通知元であるLINEプラットフォームにおいて、以下のアップデートを行いました。

- SSL/TLSの対応プロトコルバージョン
- 対応HTTPバージョン
- リクエストのヘッダーフィールド名
- 対応ルート認証局

::admonition{title="チャットボットが動かなくなったら？" type="note"}
今まで動いていたチャットボットが動かなくなった場合、このアップデートに伴って、LINEプラットフォームからWebhook URL（Webhookの通知先となるボットサーバー）への疎通に失敗している可能性があります。「[【リマインド】2021年1月末をもってWebhook通知元におけるTLS 1.0、TLS 1.1のサポートを終了します](/news/2021/01/28/reminder-update-webhook-client-and-root-certificate/)」に記載の検証方法を用いて、 疎通確認を行ってください。
::

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
