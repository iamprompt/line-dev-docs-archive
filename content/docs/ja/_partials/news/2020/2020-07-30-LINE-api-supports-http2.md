---
title: LINEのAPIがHTTP/2に対応します
navigation: true
description: LINEのAPIが、新たにHTTP/2に対応します。
meta: >-
  {"date":"2020-07-30 00:00 UTC","tags":"LINE Platform, Maintenance,
  SSL","locale":"ja"}
path: /ja/_partials/news/2020/2020-07-30-line-api-supports-http2
__hash__: w8wYHjcCQ4-NvI_IxbyRYD9v0y_DdbHyDWzEtOM1eMc
seo:
  title: LINEのAPIがHTTP/2に対応します
  description: LINEのAPIが、新たにHTTP/2に対応します。
---

LINEのAPIが、新たにHTTP/2に対応します。

### 対象APIのドメイン名

- api.line.me
- api-data.line.me
- access.line.me

### 対応HTTPバージョン

変更前と変更後の差異については、以下の表を参照してください。

| HTTPバージョン | 変更前 | 変更後 |
| --------- | --- | --- |
| HTTP/2    | ❌   | ✅   |
| HTTP/1.1  | ✅   | ✅   |
| HTTP/1.0  | ✅   | ✅   |

### 変更予定日時

2020年8月4日 12:00 ～ 16:00（UTC+9）

### 影響

上記のAPIを利用している場合は、変更後の対応HTTPバージョンで疎通できることを確認してください。

なお変更後に、HTTP/2およびTLS 1.3に対応しているクライアントから上記のAPIを利用する場合、ハンドシェイクのオーバーヘッドが減って接続効率が上がります。

最新のプロトコル（HTTP/2およびTLS 1.3）を利用するためには、開発環境（JDKやその他の開発言語）やLINE SDKを最新バージョンへアップグレードすることを推奨します。

- [LINE SDK for iOS Swift](/docs/ios-sdk/#line-sdk-v5-for-ios-swift)
- [LINE SDK for iOS Objective-C](/docs/ios-sdk/#line-sdk-v5-0-for-ios-objective-c)
- [LINE SDK for Android](/docs/android-sdk/)
- [LINE SDK for Unity](/docs/unity-sdk/)
- [LINE SDK for Flutter](/docs/flutter-sdk/)

### その他の変更点

日本国外から対象APIにアクセスする場合、上記と同時に次の2点が変更されます。

- TLS 1.3を利用できるようになります  
TLS 1.3への対応について詳しくは、「[LINEのAPIがTLS 1.3に対応しました](/news/2020/07/01/enabled-tls1.3/)」を参照してください。
- SSLルート認証局がGlobalSignに変更されます  
SSLルート認証局の変更について詳しくは、「[LINEのAPIでSSLルート認証局が変更されました](/news/2020/07/21/change-ssl-root-certificate/)」を参照してください。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
