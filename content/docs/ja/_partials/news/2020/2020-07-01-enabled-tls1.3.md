---
title: LINEのAPIがTLS 1.3に対応しました
navigation: true
description: ''
meta: >-
  {"date":"2020-07-01 03:00 UTC","tags":"Messaging API, LINE Login, LIFF,
  SSL","locale":"ja"}
path: /ja/_partials/news/2020/2020-07-01-enabled-tls1.3
__hash__: lluHDiAP74fSlVnSlx7cH8_Ryp3N2QuPNnAC-Tx2HJA
seo:
  title: LINEのAPIがTLS 1.3に対応しました
  description: ''
---

::admonition{title="2020年7月30日追記" type="note"}
日本国外から対象APIにアクセスする場合については、2020年8月4日以降、TLS 1.3を利用できるようになる予定です。
詳しくは2020年7月30日のニュース、「[LINEのAPIがHTTP/2に対応します](/news/2020/07/30/LINE-api-supports-http2/)」を参照してください。
::

LINEのAPIが、新たにTLS 1.3に対応しました。

### 対象APIのドメイン名

- api.line.me
- api-data.line.me
- access.line.me

### SSL/TLSの対応プロトコルバージョン

変更前と変更後の差異については、以下の表を参照してください。

| プロトコルバージョン | 変更前 | 変更後 |
| ---------- | --- | --- |
| TLS 1.3    | ❌   | ✅   |
| TLS 1.2    | ✅   | ✅   |
| TLS 1.1    | ✅   | ✅   |
| TLS 1.0    | ✅   | ✅   |
| SSL 3.0    | ❌   | ❌   |
| SSL 2.0    | ❌   | ❌   |

### 影響

上記のAPIを利用している場合は、変更後の対応プロトコルバージョンで疎通可能であることをご確認ください。

### 移行期間

- 日本：2020年7月1日以降、TLS 1.3を利用できます。
- 日本国外：2020年8月4日以降、TLS 1.3を利用できます。

なお今後、TLS 1.0およびTLS 1.1のサポートは終了予定です。
終了時期は未定です。決まり次第、改めてお知らせいたします。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
