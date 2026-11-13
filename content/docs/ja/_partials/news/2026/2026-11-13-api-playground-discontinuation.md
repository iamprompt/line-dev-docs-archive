---
title: Messaging APIリファレンスのAPIプレイグラウンドの提供を終了します
navigation: true
description: 2026年11月30日をもって、Messaging APIリファレンス内のAPIプレイグラウンドの提供を終了します。
meta: >-
  {"date":"2026-11-13 00:00 UTC","tags":"messaging-api,
  end-of-life","locale":"ja"}
path: /ja/_partials/news/2026/2026-11-13-api-playground-discontinuation
__hash__: vCqvjBmJs1LWHnvw44ydFXISE0MQ9Dsx9VS2wjf_Q44
seo:
  title: Messaging APIリファレンスのAPIプレイグラウンドの提供を終了します
  description: 2026年11月30日をもって、Messaging APIリファレンス内のAPIプレイグラウンドの提供を終了します。
---

2026年11月30日をもって、[Messaging APIリファレンス](/reference/messaging-api/)内のAPIプレイグラウンドの提供を終了します。

### 提供終了予定日

2026年11月30日

### 詳細

APIプレイグラウンドは、Messaging APIリファレンスの一部のエンドポイントで、ブラウザ上からAPIリクエストを送信し、レスポンスを確認できる機能です。

APIプレイグラウンドの利用状況と継続に必要なセキュリティ要件を総合的に検討した結果、提供を終了することとなりました。なお、今回の終了に伴うMessaging API自体への影響はありません。

### Messaging APIを試す方法

今後、Messaging APIを試す際は、[Messaging APIリファレンス](/reference/messaging-api/)の各エンドポイントに記載されたリクエストの例を参考に、`curl`などでAPIリクエストを送信してください。

チャネルアクセストークンなどの認証情報を環境変数に一度設定しておくと、同じターミナルで実行する`curl`コマンドから繰り返し参照できます。以下は、環境変数`CHANNEL_ACCESS_TOKEN`に設定したチャネルアクセストークンを使って、「[当月に送信できるメッセージ数の上限目安を取得する](/reference/messaging-api/#get-quota)」エンドポイントを呼び出す例です。

```sh
export CHANNEL_ACCESS_TOKEN="{channel access token}"

curl -X GET https://api.line.me/v2/bot/message/quota \
-H "Authorization: Bearer $CHANNEL_ACCESS_TOKEN"
```

APIプレイグラウンドをご利用の皆さまにはご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。
