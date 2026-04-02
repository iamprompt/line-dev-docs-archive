---
title: 店舗予約デモ
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"jp"}'
path: /ja/docs/line-mini-app/demo/reservation-demo
__hash__: T356NsRUstQlSljo_TAu7_bwMAR2wU81WnXEJ6V8v4M
seo:
  title: 店舗予約デモ
  description: null
---

# :page-title

:markdown-controls:partial{content="documentation-partials/api-use-case/announcement-of-page/"}LINEミニアプリを使って、たとえばヘアサロンや飲食店の予約ができます。

ユーザーの来店忘れを防止するために、予約時間が近づいた際に、LINEミニアプリからLINEのサービスメッセージでリマインドを送信できます。また、LINEミニアプリを通じて取得したユーザーデータを活用し、予約の通知だけでなく、より効率的な販促活動を実現することができます。

※ LINEアカウントと紐づいた行動データの取得・活用にはユーザーの許諾が必須となります。

:toc## デモを見る

お使いのスマートフォンでLINEを起動し、以下のQRコードを読み込むとデモを見ることができます。

![](/media/line-mini-app/demo/reservation-demo/reserve-qr-code.png){className="[\"w-fix-800\"]"}

::admonition{title="デモアプリで取得するデータについて" type="note"}
デモアプリでは、皆さまのLINEアカウントの「プロフィール情報（ユーザーID）」を取得します。ユーザーIDはサーバーに保存しますが、保存したデータは毎日削除されます。以上をご理解のうえ、ご利用ください。
::

## デモアプリ利用の流れ

※お使いのバージョンによって画面のデザインが異なる場合があります。

| dummy                                                                                            | dummy                                                                                            | dummy                                                                                            | dummy                                                                                            |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| ![](/media/line-mini-app/demo/reservation-demo/reserve-image1.webp){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/reservation-demo/reserve-image2.webp){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/reservation-demo/reserve-image3.webp){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/reservation-demo/reserve-image4.webp){className="[\"w-fix-200\"]"} |
| 1.QRコード読取                                                                                        | 2.必要な権限を認可                                                                                       | 3.日時を指定して予約                                                                                      | 4.リマインド通知                                                                                        |

::admonition{title="導入のポイント" type="tip"}
1. アプリのダウンロードや会員登録は不要
2. リマインド通知でユーザーの来店忘れを防ぐ
3. ユーザーの予約アプリでの操作履歴や来店履歴をもとにメッセージ配信可能
::

## 導入におけるメリット

### エンドユーザー視点でのメリット

#### 1. アプリのダウンロードや会員登録は不要

LINEミニアプリは、スマートフォンにダウンロードしたりインストールしたりする必要も、個人情報の入力も必要ないので、すぐに予約することができます。

#### 2. うっかり忘れをリマインド通知で防ぐ

来店前に、「LINEミニアプリ お知らせ」のトークルームにリマインド通知が届きます。通知日は、自由に選択できます。仕事やプライベートに忙しくしていても、うっかり来店日を忘れることがなくなるでしょう。

### サービス提供者視点でのメリット

#### 1. リマインド通知でユーザーの来店忘れを防ぐ

ユーザーの来店忘れを防ぐために、ユーザーに対して来店当日・来店日前など、ユーザーが希望した日に、LINEのサービスメッセージからリマインド通知ができます。

#### 2. ユーザーの予約アプリでの操作履歴や来店履歴をもとにメッセージ配信可能

予約アプリでの操作履歴や来店履歴を、ユーザーIDに紐づけて記録できます。これらの記録をもとに、リピート率を上げるなどの販売促進施策として、ユーザーに有益な情報をLINEで配信できます。

## デモアプリケーションのシステム図とシーケンス図

デモアプリケーションで、どのようにLINE APIを利用しているかを示した図です。

※デモアプリケーションでは実装されていない機能も図に含まれています。

### ヘアサロン

**システム図**

![](/media/line-mini-app/demo/reservation-demo/reserve-system-diagram.webp){className="[\"border\"]"}

- その他のサービスを利用した場合のシステム図

  - :file-link[
  AWSを利用したシステム図]{file="/media/line-mini-app/demo/reservation-demo/reserve-system-diagram-aws.webp"}
  - :file-link[
  Azureを利用したシステム図]{file="/media/line-mini-app/demo/reservation-demo/reserve-system-diagram-azure.webp"}

**シーケンス図**

![](/media/line-mini-app/demo/reservation-demo/reserve-sequence-diagram.webp){className="[\"border\"]"}

- その他のサービスを利用した場合のシーケンス図

  - :file-link[
  AWSを利用したシーケンス図]{file="/media/line-mini-app/demo/reservation-demo/reserve-sequence-diagram-aws.webp"}
  - :file-link[
  Azureを利用したシーケンス図]{file="/media/line-mini-app/demo/reservation-demo/reserve-sequence-diagram-azure.webp"}

### レストラン

**システム図**

![](/media/line-mini-app/demo/reservation-demo/reserve-2-system-diagram.webp){className="[\"border\"]"}

- その他のサービスを利用した場合のシステム図

  - :file-link[
  AWSを利用したシステム図]{file="/media/line-mini-app/demo/reservation-demo/reserve-2-system-diagram-aws.webp"}
  - :file-link[
  Azureを利用したシステム図]{file="/media/line-mini-app/demo/reservation-demo/reserve-2-system-diagram-azure.webp"}

**シーケンス図**

![](/media/line-mini-app/demo/reservation-demo/reserve-2-sequence-diagram.webp){className="[\"border\"]"}

- その他のサービスを利用した場合のシーケンス図

  - :file-link[
  AWSを利用したシーケンス図]{file="/media/line-mini-app/demo/reservation-demo/reserve-2-sequence-diagram-aws.webp"}
  - :file-link[
  Azureを利用したシーケンス図]{file="/media/line-mini-app/demo/reservation-demo/reserve-2-sequence-diagram-azure.webp"}

## 関連リンク

- [Messaging APIドキュメント](/docs/messaging-api/)
- [LINEミニアプリドキュメント](/docs/line-mini-app/)
