---
title: 一部のエンドポイントのドメイン名変更のお知らせ
navigation: true
description: >-
  Messaging
  APIの一部のエンドポイントのドメイン名を「api.line.me」から「api-data.line.me」に変更いたしました。これに伴うメンテナンスはありません。
meta: '{"date":"2019-11-08 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2019/2019-11-08-domain-name-change
__hash__: rayPZSoxbAohG00DQXJDVKdWpfydlFIGtzBNbSlj43I
seo:
  title: 一部のエンドポイントのドメイン名変更のお知らせ
  description: >-
    Messaging
    APIの一部のエンドポイントのドメイン名を「api.line.me」から「api-data.line.me」に変更いたしました。これに伴うメンテナンスはありません。
---

Messaging APIの一部のエンドポイントのドメイン名を「api.line.me」から「api**-data**.line.me」に変更いたしました。これに伴うメンテナンスはありません。

### 対象エンドポイント

- [コンテンツを取得する](/reference/messaging-api/#get-content)
- [リッチメニューの画像をアップロードする](/reference/messaging-api/#upload-rich-menu-image)
- [リッチメニューの画像をダウンロードする](/reference/messaging-api/#download-rich-menu-image)

### 影響

上記のエンドポイントを利用している場合は、移行期間中にドメインを変更してください。ご利用のユーザー様にはご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。

移行期間終了後は、古いドメインのエンドポイントにアクセスした場合は、ステータスコード`404`が返されます。

### 移行期間

本日 ～ 2020年4月30日
