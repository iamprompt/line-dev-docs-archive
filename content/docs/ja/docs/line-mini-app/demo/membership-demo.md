---
title: 会員証デモ
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"jp"}'
path: /ja/docs/line-mini-app/demo/membership-demo
__hash__: DP6ibAhb0zmD2z2owdsDrdC20ctYxokITegrh2QnoUA
seo:
  title: 会員証デモ
  description: null
---

# :page-title

:markdown-controls:partial{content="documentation-partials/api-use-case/announcement-of-page/"}LINEミニアプリを使って、自社サービスの会員証をLINE上で提供できます。

たとえば、スーパー、ドラッグストア、アパレルなど、オフライン店舗で会員証を提供している企業も、オンライン会員証に移行することができます。紙の会員証だけでは実現できない、ユーザーとのコミュニケーションチャネルも構築できます。具体的には、LINEミニアプリを通じて取得したユーザーデータを活用し、プッシュメッセージの送信など、より効率的な販促活動を実現することができます。

※ LINEアカウントと紐づいた行動データの取得・活用にはユーザーの許諾が必須となります。

:toc## デモを見る

お使いのスマートフォンでLINEを起動し、以下のQRコードを読み込むとデモを見ることができます。

![](/media/line-mini-app/demo/membership-demo/membership-qr-demo.webp){className="[\"w-fix-560\"]"}

::admonition{title="デモアプリで取得するデータについて" type="note"}
デモアプリでは、皆さまのLINEアカウントの「プロフィール情報（ユーザーID）」を取得します。ユーザーIDはサーバーに保存しますが、保存したデータは毎日削除されます。以上をご理解のうえ、ご利用ください。
::

## デモアプリ利用の流れ

※お使いのバージョンによって画面のデザインが異なる場合があります。

| dummy                                                                                                     | dummy                                                                                                     | dummy                                                                                                     | dummy                                                                                                     |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| ![](/media/line-mini-app/demo/membership-demo/membership-image-simple1.webp){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/membership-demo/membership-image-simple2.webp){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/membership-demo/membership-image-simple3.webp){className="[\"w-fix-200\"]"} | ![](/media/line-mini-app/demo/membership-demo/membership-image-simple4.webp){className="[\"w-fix-200\"]"} |
| 1.QRコード読取                                                                                                 | 2.必要な権限を認可                                                                                                | 3.会員証を発行                                                                                                  | 4.電子レシート                                                                                                  |

::admonition{title="導入のポイント" type="tip"}
1. カード型会員証が不要になります。
2. カードの受け渡しが不要で接触機会が減少します。
3. 個人情報を入力せず、すぐに会員証を発行可能です。
4. 会員の行動履歴をもとにメッセージ配信可能です。
::

## 導入におけるメリット

### エンドユーザー視点でのメリット

#### 1. カード型会員証が不要に

オンライン会員証なら、カード型会員証のように財布の中でかさばることはありません。店頭でQRコードを読み込むだけで簡単に会員証を発行できます。また、普段から使っているLINEを開くだけでオンライン会員証の提示が可能です。

#### 2. カードの受け渡しが不要で接触機会が減少

LINEアプリで会員証が表示でき、カードを受け渡しする必要がなくなります。接触機会を減らすことができるため、感染症対策にも役立てることができます。

### サービス提供者視点でのメリット

#### 1. 個人情報を入力せず、すぐに会員証を発行可能

一般に会員証を発行するときには、個人を特定するために名前や住所などの個人情報が必要です。一方、LINEミニアプリを使ったオンライン会員証では、LINEの登録している情報を連携することが可能です。つまり、ユーザーから名前や住所などの個人情報を受け取る必要がないため、個人情報の漏洩を防ぐためのコストを必要以上にかけずに、安心して会員証を発行できます。

#### 2. 会員の行動履歴をもとにメッセージ配信可能

会員の行動履歴をユーザーIDに紐づけて記録できます。これらの記録をもとに、リピート率を上げるなどの販売促進施策として、ユーザーに有益な情報をLINEで配信できます。

## デモアプリケーションのシステム図とシーケンス図

デモアプリケーションで、どのようにLINE APIを利用しているかを示した図です。

※デモアプリケーションでは実装されていない機能も図に含まれています。

**システム図**

![](/media/line-mini-app/demo/membership-demo/membership-system-diagram.webp){className="[\"border\"]"}

- その他のサービスを利用した場合のシステム図

  - :file-link[
  AWSを利用したシステム図]{file="/media/line-mini-app/demo/membership-demo/membership-system-diagram-aws.webp"}
  - :file-link[
  Azureを利用したシステム図]{file="/media/line-mini-app/demo/membership-demo/membership-system-diagram-azure.webp"}

**シーケンス図**

![](/media/line-mini-app/demo/membership-demo/membership-sequence-diagram.webp){className="[\"border\"]"}

- その他のサービスを利用した場合のシーケンス図

  - :file-link[
  AWSを利用したシーケンス図]{file="/media/line-mini-app/demo/membership-demo/membership-sequence-diagram-aws.webp"}
  - :file-link[
  Azureを利用したシーケンス図]{file="/media/line-mini-app/demo/membership-demo/membership-sequence-diagram-azure.webp"}

## 関連リンク

- [Messaging APIドキュメント](/docs/messaging-api/)
- [LINEミニアプリドキュメント](/docs/line-mini-app/)
