---
title: アサーション署名キーの発行手順が変わりました
navigation: true
description: 2021年4月1日に告知したとおり、アサーション署名キーを発行する手順を変更しました。
meta: >-
  {"date":"2021-05-12 00:00 UTC","tags":"Console, LINE Login, Messaging API,
  LINE MINI app, LINE Blockchain","locale":"ja"}
path: /ja/_partials/news/2021/2021-05-12-assertion-signing-key-flow-change-release
__hash__: NexNVyuqfGVYN3tIgZZiTz4B739tYOP7ctiwqqdRO50
seo:
  title: アサーション署名キーの発行手順が変わりました
  description: 2021年4月1日に告知したとおり、アサーション署名キーを発行する手順を変更しました。
---

[2021年4月1日に告知](/news/2021/04/01/assertion-signing-key-flow-change/)したとおり、アサーション署名キーを発行する手順を変更しました。

::admonition{title="アサーション署名キーを利用している開発者に影響があります" type="tip"}
この変更により、以下の[チャネル](/docs/line-developers-console/overview/#channel)でアサーション署名キーを発行、利用している開発者に影響があります。変更点について詳細を確認してください。

- LINEログイン
- Messaging API
- LINEミニアプリ
- ブロックチェーンサービス
::

### 概要

アサーション署名キーをより安全に利用できるよう、次のとおり発行手順を変更しました。

|          | 変更前                                                                                                                                                                              | 変更後（現在）                                                                                                                                                                                                                         |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **発行手順** | 1. 開発者がLINE Developersコンソールでアサーション署名キーの［**発行**］ボタンをクリックする 2. LINEのサーバサイドでアサーション署名キーのキーペアが生成される 3. 開発者は生成された**秘密鍵**をダウンロードして保存する   ※秘密鍵は発行時に一度だけ表示されます。LINEは公開鍵のみを保管し、秘密鍵は保管しません。 | 1. 開発者が自分の環境（パソコンやサーバ）でアサーション署名キーのキーペアを生成する 2. 開発者はLINE Developersコンソールでアサーション署名キーの［**公開鍵を登録する**］ボタンをクリックする 3. 開発者はLINE Developersコンソールで**公開鍵**をフォームに貼り付けて［**登録する**］ボタンをクリックする 4. 公開鍵の登録に成功すると、LINE Developersコンソールで`kid`が表示される |
| **利用手順** | 開発者は[チャネルアクセストークンv2.1を発行する](/reference/messaging-api/#issue-channel-access-token-v2-1)際に、アサーション署名キーの秘密鍵を利用する。                                                                    | 変更なし                                                                                                                                                                                                                            |

### チャネルアクセストークンv2.1発行までの概略図

この概略図は、次の3つの手順を表しています。

- [アサーション署名キーを発行する](/docs/messaging-api/generate-json-web-token/#create-an-assertion-signing-key) （概略図の手順1）
- [JWTを生成する](/docs/messaging-api/generate-json-web-token/#generate-jwt) （概略図の手順6）
- [チャネルアクセストークンv2.1を発行する](/docs/messaging-api/generate-json-web-token/#issue_a_channel_access_token_v2_1) （概略図の手順7）

![チャネルアクセストークンの発行手順](/media/messaging-api/channel-access-token/channel-access-token-issue-flow.svg){className="[\"w-fix-960\"]"}

変更後のアサーション署名キーの発行手順について詳しくはMessaging APIドキュメントの「[アサーション署名キーを発行する](/docs/messaging-api/generate-json-web-token/#create-an-assertion-signing-key)」を参照してください。

なお従来の手順でLINE Developerコンソールにて発行したアサーション署名キーは、手順変更後も引き続きご利用いただけます。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
