---
title: LINEのAPIでSSLルート認証局が変更されました
navigation: true
description: ''
meta: >-
  {"date":"2020-07-21 00:00 UTC","tags":"LINE Platform, Maintenance,
  SSL","locale":"ja"}
path: /ja/_partials/news/2020/2020-07-21-change-ssl-root-certificate
__hash__: gPLW2pjH9F8ML2-sfyZfsPOzx2aGBadSr27yUqcUPrI
seo:
  title: LINEのAPIでSSLルート認証局が変更されました
  description: ''
---

::admonition{title="2020年7月30日追記" type="note"}
日本国外から対象APIにアクセスする場合については、2020年8月4日以降、ルート認証局が変更される予定です。
詳しくは2020年7月30日のニュース、「[LINEのAPIがHTTP/2に対応します](/news/2020/07/30/LINE-api-supports-http2/)」を参照してください。
::

LINEのAPIサーバーで使用しているSSL証明書を変更しました。
これに伴って、証明書のルート認証局がDigiCertからGlobalSignに変更されました。

### 対象APIのドメイン名

- api.line.me
- api-data.line.me
- access.line.me

### 変更日時

- 日本：2020年7月10日 17:17 〜 17:54（UTC+9）
- 日本国外：2020年8月4日 12:00 〜 16:00（UTC+9）

### 影響

こちらの変更に伴って、APIを利用しているクライアント側の環境でSSL通信の問題が発生した場合は、対応するルート証明書（GlobalSign Root R3）が存在していない可能性があります。
該当する場合は、APIを利用しているクライアント側の環境で、ルート証明書を最新版にアップデートしてください。

- [GMOグローバルサイン ルート証明書/中間CA証明書(SSLサーバ証明書)](https://jp.globalsign.com/support/rootcertificates/ssl.html){rel="[\"nofollow\"]"}

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
