---
title: 【リマインド】2021年1月末をもってWebhook通知元におけるTLS 1.0、TLS 1.1のサポートを終了します
navigation: true
description: >-
  2020年10月6日にお知らせしたとおり、Messaging
  APIのWebhook通知元であるLINEプラットフォームにおいて、以下のアップデートを予定しています。Webhookをご利用中の方は、移行期間中に新環境からの疎通をご確認ください。
meta: >-
  {"date":"2021-01-18 00:00 UTC","tags":"Messaging API, SSL,
  end-of-life","locale":"ja"}
path: >-
  /ja/_partials/news/2021/2021-01-18-reminder-update-webhook-client-and-root-certificate
__hash__: 931FJ7lTwxDJfpnbHXQGeq_ngyBhny9HwiZSqIkIDUE
seo:
  title: 【リマインド】2021年1月末をもってWebhook通知元におけるTLS 1.0、TLS 1.1のサポートを終了します
  description: >-
    2020年10月6日にお知らせしたとおり、Messaging
    APIのWebhook通知元であるLINEプラットフォームにおいて、以下のアップデートを予定しています。Webhookをご利用中の方は、移行期間中に新環境からの疎通をご確認ください。
---

[2020年10月6日](/news/2020/10/06/update-webhook-client-and-root-certificate/)にお知らせしたとおり、Messaging APIのWebhook通知元であるLINEプラットフォームにおいて、以下のアップデートを予定しています。Webhookをご利用中の方は、移行期間中に新環境からの疎通をご確認ください。

- [SSL/TLSの対応プロトコルバージョン](#protocol-version-2)
- [対応HTTPバージョン](#http-version-2)
- [リクエストのヘッダーフィールド名](#header-field-name-2)
- [対応ルート認証局](#root-certification-2)

::admonition{title="Webhookとは？" type="note"}
WebhookはLINEが提供するMessaging APIの機能の1つです。Webhookとは、ユーザーの友だち追加やメッセージ送信といったイベントを、LINEプラットフォームからプロバイダー（企業や開発者）のボットサーバーに対して、HTTPSのPOSTリクエストで通知する仕組みのことです。

Webhookの通知先となるボットサーバーは、[LINE Developersコンソール](/console/)の「Webhook URL」で指定できます。Webhookについて詳しくは、「[メッセージ（Webhook）を受信する](/docs/messaging-api/receiving-messages/)」を参照してください。
::

### SSL/TLSの対応プロトコルバージョン

TLS 1.0、TLS 1.1のサポートを終了します。
移行前後の差異については、以下の表を参照してください。

| プロトコルバージョン | 移行前 | 移行後 |
| ---------- | --- | --- |
| TLS 1.3    | ❌   | ✅   |
| TLS 1.2    | ✅   | ✅   |
| TLS 1.1    | ✅   | ❌   |
| TLS 1.0    | ✅   | ❌   |
| SSL 3.0    | ❌   | ❌   |
| SSL 2.0    | ❌   | ❌   |

### 対応HTTPバージョン

移行前後の差異については、以下の表を参照してください。

| HTTPバージョン | 移行前 | 移行後 |
| --------- | --- | --- |
| HTTP/2    | ❌   | ✅   |
| HTTP/1.1  | ✅   | ✅   |
| HTTP/1.0  | ✅   | ✅   |

### リクエストのヘッダーフィールド名

移行に伴い、LINEプラットフォームからWebhookを送信する際に、[リクエストヘッダー](/reference/messaging-api/#request-headers)のフィールド名で大文字・小文字の表記が変更される場合があります。*1

|              | 移行前                | 移行後                |
| ------------ | ------------------ | ------------------ |
| ヘッダーフィールド名の例 | `X-Line-Signature` | `x-line-signature` |

なお今後もLINE側のサーバ更新に伴って、大文字・小文字の表記は予告なく変更される可能性があります。Webhookを受け取るボットサーバー側では、ヘッダーフィールド名の大文字小文字を区別せずに扱ってください。*2

*1 [https://datatracker.ietf.org/doc/html/rfc7540#section-8.1.2](https://datatracker.ietf.org/doc/html/rfc7540#section-8.1.2){rel="[\"nofollow\"]"}   

*2 [https://datatracker.ietf.org/doc/html/rfc7230#section-3.2](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2){rel="[\"nofollow\"]"}

### 対応ルート認証局

Webhook URL（Webhookの通知先となるボットサーバー）では、信頼できる認証局で発行されたSSL/TLS証明書を設定してください。自己署名証明書は使用できません。

移行前後の差異については、以下の表を参照してください。

|                 | 移行前                            | 移行後                                       |
| --------------- | ------------------------------ | ----------------------------------------- |
| 使用可能なSSL/TLS証明書 | 「LINEが信頼する認証局」で発行されたSSL/TLS証明書 | 一般的なブラウザ等で広く信頼されているルート認証局で発行されたSSL/TLS証明書 |

なお「LINEが信頼する認証局」のリストは、移行期間終了と同時に公開を停止します。

### 移行期間

2020年10月6日 〜 2021年1月31日

### 影響

Messaging APIのWebhookを利用している場合は、移行後のLINEプラットフォームからボットサーバーへ疎通できることを、移行期間中に以下のいずれかの方法で事前に検証ください。

#### 検証方法1. Webhook URL検証用のエンドポイントで検証する

Webhook URL検証用のエンドポイントで検証を行ってください。

- [Webhookエンドポイントを検証する](/reference/messaging-api/#test-webhook-endpoint)

::admonition{title="疎通確認のリクエストにはステータスコード200を返してください" type="note"}
疎通確認の際は、Webhookイベントが含まれないHTTP POSTリクエストが送信されます。この場合も、ステータスコード`200`を返してください。

Webhookイベントが含まれないHTTP POSTリクエストの例：

```json
{
    "destination": "xxxxxxxxxx",
    "events": []
}
```
::

#### 検証方法2. LINE DevelopersコンソールからWebhook URLの［検証］ボタンで検証する

[LINE Developersコンソール](/console/)からWebhook URLの［検証］ボタンで検証を行ってください。

![send target](/media/news/webhook-url.png){className="[\"border\",\"w-fix-320\"]"}

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
