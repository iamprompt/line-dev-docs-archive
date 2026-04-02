---
title: Messaging APIにおいて、受け取りに失敗したWebhookを再送する機能を追加しました
navigation: true
description: 2022年3月7日のニュースでお知らせしたとおり、Messaging APIにWebhookを再送する機能を追加しました。
meta: '{"date":"2022-04-19 01:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2022/2022-04-19-webhook-redelivery
__hash__: L38BygtErb1CsKDyWD0ELNkgohD0Y84SiNzAoRrrGnI
seo:
  title: Messaging APIにおいて、受け取りに失敗したWebhookを再送する機能を追加しました
  description: 2022年3月7日のニュースでお知らせしたとおり、Messaging APIにWebhookを再送する機能を追加しました。
---

[2022年3月7日のニュース](/news/2022/03/07/pre-release-webhook-redelivery/)でお知らせしたとおり、Messaging APIにWebhookを再送する機能を追加しました。

ユーザーがLINE公式アカウントにメッセージを送ったときなど、イベントに応じたWebhookがボットサーバーに送信されます。このWebhookはこれまで一度しか送信されませんでしたが、これを再送する機能を追加しました。また、あわせてWebhookイベントオブジェクトへの共通プロパティの追加などを行いました。

### 機能追加の概要

本リリースによる主な機能追加として、次の3つを行いました。

1. [Webhookを再送する機能の追加](#add-webhook-redelivery-2022-04-19)
2. [Webhookイベントオブジェクトへの共通プロパティの追加](#add-common-properties-2022-04-19)
3. [エラーの統計情報の公開](#publish-error-statistics-2022-04-19)

#### 1. Webhookを再送する機能の追加

LINEプラットフォームから送信されたWebhookに対して、ボットサーバーがステータスコード`200`番台を返さなかった場合、一定の時間を空けてLINEプラットフォームからWebhookが再送されるようになりました。

この機能はデフォルトでは無効になっており、[LINE Developersコンソール](/console/)から有効にすることで利用できます。すべてのMessaging APIチャネルで利用可能です。

::admonition{title="注意" type="note"}
Webhookの再送を有効にする前に、必ず「[注意事項](#notes-2022-04-19)」を確認してください。
::

Webhookの再送について詳しくは、『Messaging APIドキュメント』の「[受け取りに失敗したWebhookを再送する](/docs/messaging-api/receiving-messages/#webhook-redelivery)」を参照してください。

#### 2. Webhookイベントオブジェクトへの共通プロパティの追加

[Webhookイベントオブジェクトの共通プロパティ](/reference/messaging-api/#common-properties)として、次の2つのプロパティを追加しました。これらのプロパティは、Webhookの再送を有効にしているかどうかにかかわらず、Webhookイベントオブジェクトに含まれます。

##### 追加された共通プロパティ

| プロパティ名                       | 型       | 概要                                     |
| ---------------------------- | ------- | -------------------------------------- |
| webhookEventId               | String  | WebhookイベントID。Webhookイベントを一意に識別するためのID |
| deliveryContext.isRedelivery | Boolean | Webhookイベントが再送されたものかどうか                |

#### 3. エラーの統計情報の公開

[LINE Developersコンソール](/console/)において、Webhookの送信におけるエラーの統計情報を確認できる機能を公開しました。

Webhookの再送を有効にするにあたって、ボットサーバー側で受け取れなかったWebhookの送信状況を確認する必要性が出てくることがあります。これについて、エラーの統計情報はこれまで法人ユーザーにのみ提供していましたが、本リリースにあわせて、すべてのMessaging APIチャネルで利用できるようになりました。

エラーの統計情報について詳しくは、『Messaging APIドキュメント』の「[Webhookの送信におけるエラーの統計情報を確認する](/docs/messaging-api/receiving-messages/#error-statistics-aggregation)」を参照してください。

### 注意事項

Webhookの再送を有効にする前に、以下の点を確認してください。

- ネットワーク経路上の問題等により、同じWebhookイベントが重複して送信される可能性があります。これが問題になる場合は、Webhookイベントオブジェクトの`webhookEventId`を利用し、重複の検出を行ってください。
- Webhookイベントが再送されることにより、Webhookイベントの発生順序と、ボットサーバーに到達する順序が大きく崩れる可能性があります。これが問題になる場合は、Webhookイベントオブジェクトの`timestamp`を確認することによって、前後関係を確認してください。
- Webhook再送機能は、Webhookの確実な再送を保証するものではありません。また、Webhook再送の件数が短期間で著しく増加し、LINEプラットフォームの動作に影響を与えると判断された場合、Webhookの再送設定が強制的に無効になる可能性があります。
- Webhookを再送する回数、間隔は開示しておりません。また回数、間隔については、予告なく変更される可能性があります。
- 長期にわたりWebhookの受信に失敗しているボットサーバーに対して、Webhookの送信停止を実施する可能性があります。
