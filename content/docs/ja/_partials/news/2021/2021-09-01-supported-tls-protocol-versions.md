---
title: 2021年8月末をもってLINE APIのTLS 1.0、TLS 1.1のサポートを終了しました
navigation: true
description: >-
  2021年5月13日、および2021年8月24日にお知らせしたとおり、2021年8月末をもってLINE APIのTLS 1.0、TLS
  1.1のサポートを終了しました。
meta: >-
  {"date":"2021-09-01 00:00 UTC","tags":"LINE Platform, SSL,
  end-of-life","locale":"ja"}
path: /ja/_partials/news/2021/2021-09-01-supported-tls-protocol-versions
__hash__: jD68rsNFaphp2ABx2z4qiWdlahLQA2OuZ4LzlpimM-o
seo:
  title: 2021年8月末をもってLINE APIのTLS 1.0、TLS 1.1のサポートを終了しました
  description: >-
    2021年5月13日、および2021年8月24日にお知らせしたとおり、2021年8月末をもってLINE APIのTLS 1.0、TLS
    1.1のサポートを終了しました。
---

[2021年5月13日](/news/2021/05/13/supported-tls-protocol-versions/)、および[2021年8月24日](/news/2021/08/24/supported-tls-protocol-versions/)にお知らせしたとおり、2021年8月末をもって:glossary-tooltip[[LINE API](/glossary/#line-api)]{glossary-id="line-api"}のTLS 1.0、TLS 1.1のサポートを終了しました。

### 対象となるLINE APIのドメイン名

- api.line.me
- api-data.line.me

特定のサービスに限らず、当該ドメイン名のLINE APIはすべて対象となります。

### SSL/TLSの対応プロトコルバージョン

TLS 1.0、TLS 1.1のサポートを終了しました。

| プロトコルバージョン | 2021年8月末まで | 2021年9月以降 |
| ---------- | ---------- | --------- |
| TLS 1.3    | ✅          | ✅         |
| TLS 1.2    | ✅          | ✅         |
| TLS 1.1    | ✅          | ❌         |
| TLS 1.0    | ✅          | ❌         |
| SSL 3.0    | ❌          | ❌         |
| SSL 2.0    | ❌          | ❌         |

### サポート終了日

2021年8月31日

### 影響

今後、TLS 1.0もしくはTLS 1.1を利用したAPIリクエストは順次エラーとなり、LINE APIが利用できなくなります。お使いの環境がTLS 1.1以下だった場合は、TLS 1.2以上で通信できるよう、OSやOpenSSL等のバージョンアップを行ってください。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
