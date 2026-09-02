---
title: LINEでビーコンを使う
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/messaging-api/using-beacons
__hash__: U3ZnUAIzKgLuR5u7wcGmqzKzYm7N2ce_XcUcGH3Yy18
seo:
  title: LINEでビーコンを使う
  description: null
---

# :page-title

:markdown-controlsLINE Beaconを使うと、ユーザーがビーコンの電波の受信圏に入ったときに[Webhookビーコンイベント](/reference/messaging-api/#beacon-event)を受け取ることができます。ビーコンを使用して、ビジネスニーズに合ったコンテキストでユーザーとやりとりするようにボットアプリをカスタマイズできます。

::admonition{title="注意" type="note"}
LINE Beaconは、日本、台湾、およびタイで利用できます。
::

::admonition{title="LINEビーコンは最新バージョンのLINEで利用してください" type="tip"}
LINE Beaconは、最新バージョンのLINEでの利用を推奨します。
::

## ビーコン端末を準備する

LINE Beaconを使用するには、LINE公式アカウントとリンクするBluetooth® Low Energy対応ビーコンが必要です。以下のいずれかのタイプの端末を使用できます。

- [LINE Beacon](/docs/messaging-api/beacon-device-spec/)に対応しているビーコン端末。これらのビーコン端末は、それぞれの国でのみサポートされます。

  - 日本で対応している端末については、[こちらのページ](https://beacon.theshop.jp/items/6617930){rel="[\"nofollow\"]"}を参照してください。
  - タイで対応している端末については、[こちらのページ](https://linedevth.line.me/th/tech-partner?filterTech=Beacon){rel="[\"nofollow\"]"}を参照してください。
- [LINE Simple Beacon](https://github.com/line/line-simple-beacon){rel="[\"nofollow\"]"}規格に準拠しているBluetooth® Low Energy端末。

## ビーコンとLINE公式アカウントをリンクする

LINE公式アカウントをビーコンとリンクするには、[LINE Official Account Manager](https://manager.line.biz/beacon/register){rel="[\"nofollow\"]"}のビーコン登録ページを開きます。登録ページでは、LINE Beacon対応端末とLINE公式アカウントをリンクできます。また、**LINE Simple BeaconハードウェアID**を端末に発行できます。

::admonition{title="注意" type="note"}
1つのLINE公式アカウントに複数のビーコンをリンクできます。しかし、1つのビーコンがリンクできるLINE公式アカウントは1つまでです。
::

## Webhookイベントを受け取る

以下の条件を満たしたユーザーがビーコンの受信圏に入ると、ボットサーバーが[Webhookのビーコンイベント](/reference/messaging-api/#beacon-event)を受け取れます。

- BluetoothとLINE Beaconの設定を有効にしている
- ボットアプリが関連付けられているLINE公式アカウントを、事前に友だち追加している

Webhookのビーコンイベントを発生させるには、以下の手順に従います。

1. スマートフォンのBluetoothがオンになっていることを確認します。
2. LINEで［**設定**］>［**プライバシー管理**］を開き、［**LINE Beacon**］を有効にします。
3. ビーコンの電源が入っていることを確認し、スマートフォンをビーコンに近づけます。
4. ボットサーバーがビーコンイベントオブジェクトを受信することを確認します。

以下は、[ビーコンイベントオブジェクト](/reference/messaging-api/#beacon-event)の例です。

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "beacon",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "beacon": {
        "hwid": "d41d8cd98f",
        "type": "enter"
      }
    }
  ]
}
```

## ビーコンバナー

ビーコンバナーとは、ビーコンでユーザーが検知されると、ユーザーのLINEのトーク画面上部に現れるバナーです。

ユーザーがビーコンにリンクされているLINE公式アカウントと友だちになっていない場合、バナーをタップするとLINE公式アカウントを友だち追加できます。

ユーザーがバナーをタップすると、LINE公式アカウントが指定したウェブページが開きます。LINE公式アカウントが友だち追加されている場合は、ユーザーがバナーをタップしたその場でLINE公式アカウントからのメッセージを受信させることができます。

::admonition{title="注意" type="note"}
ビーコンバナーは法人ユーザー向けの機能です。詳しくは、担当営業までご連絡いただくか、[LINEヤフー for Business](https://www.lycbiz.com/jp/){rel="[\"nofollow\"]"}ウェブサイトからお問い合わせください。
::

![](/media/messaging-api/using-beacons/beacon-banner_ja.webp){className="[\"border\",\"w-fix-320\"]"}
