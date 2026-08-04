---
title: 【リマインド】一部のエンドポイントのドメイン名変更のお知らせ（移行期限：2020年4月30日）
navigation: true
description: >-
  2019年11月8日にお知らせしたとおり、Messaging
  APIの一部のエンドポイントのドメイン名は「api.line.me」から「api-data.line.me」に変更されました。
meta: '{"date":"2020-03-19 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2020/2020-03-19-remind-domain-name-change
__hash__: Yi95N7KN6b_fvkZshWp_-RILiUZA3jFxNRy2HE6R4Fk
seo:
  title: 【リマインド】一部のエンドポイントのドメイン名変更のお知らせ（移行期限：2020年4月30日）
  description: >-
    2019年11月8日にお知らせしたとおり、Messaging
    APIの一部のエンドポイントのドメイン名は「api.line.me」から「api-data.line.me」に変更されました。
---

[2019年11月8日にお知らせ](/news/2019/11/08/domain-name-change/)したとおり、Messaging APIの一部のエンドポイントのドメイン名は「api.line.me」から「api**-data**.line.me」に変更されました。

### 対象エンドポイント

- [コンテンツを取得する](/reference/messaging-api/#get-content)
- [リッチメニューの画像をアップロードする](/reference/messaging-api/#upload-rich-menu-image)
- [リッチメニューの画像をダウンロードする](/reference/messaging-api/#download-rich-menu-image)

### 影響

上記のエンドポイントを利用している場合は、移行期間中にドメイン名を変更してください。

移行期間終了後に、古いドメイン名のエンドポイントにアクセスした場合は、ステータスコード`404`が返されます。

ご利用のユーザー様にはご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。

### 移行期間

2019年11月8日 ～ 2020年4月30日
