---
title: 2021年8月末をもってLINE APIのTLS 1.0、TLS 1.1のサポートを終了します
navigation: true
description: 2021年8月末をもってLINE APIのTLS 1.0、TLS 1.1のサポートを終了します。
meta: >-
  {"date":"2021-05-13 00:00 UTC","tags":"LINE Platform, SSL,
  end-of-life","locale":"ja"}
path: /ja/_partials/news/2021/2021-05-13-supported-tls-protocol-versions
__hash__: 3Ty7rXk9UfTNyC8fimIS8a2YlMfbDBfVJmxZ-O-5164
seo:
  title: 2021年8月末をもってLINE APIのTLS 1.0、TLS 1.1のサポートを終了します
  description: 2021年8月末をもってLINE APIのTLS 1.0、TLS 1.1のサポートを終了します。
---

2021年8月末をもって:glossary-tooltip[[LINE API](/glossary/#line-api)]{glossary-id="line-api"}のTLS 1.0、TLS 1.1のサポートを終了します。

### 対象となるLINE APIのドメイン名

- api.line.me
- api-data.line.me

特定のサービスに限らず、当該ドメイン名のLINE APIはすべて対象となります。

### SSL/TLSの対応プロトコルバージョン

TLS 1.0、TLS 1.1のサポートを終了します。

| プロトコルバージョン | 2021年8月末まで | 2021年9月以降 |
| ---------- | ---------- | --------- |
| TLS 1.3    | ✅          | ✅         |
| TLS 1.2    | ✅          | ✅         |
| TLS 1.1    | ✅          | ❌         |
| TLS 1.0    | ✅          | ❌         |
| SSL 3.0    | ❌          | ❌         |
| SSL 2.0    | ❌          | ❌         |

### サポート終了予定日

2021年8月31日

なお日時は、予告なく変更される可能性があります。

### 影響

LINE APIに対するリクエストの送信元がTLS 1.2以上に対応していなかった場合、LINE APIが利用できなくなります。お使いの環境がTLS 1.1以下だった場合は、TLS 1.2以上で通信できるよう、OSやOpenSSL等のバージョンアップを行ってください。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
