---
title: 一部エンドポイントにおいて旧ドメイン名でのリクエスト受付を停止しました
navigation: true
description: >-
  2019年11月8日、2020年3月19日、2020年8月12日、および2020年10月9日にお知らせしたとおり、Messaging
  APIの一部のエンドポイントのドメイン名は「api.line.me」から「api-data.line.me」に変更されました。
meta: '{"date":"2021-01-21 01:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2021/2021-01-21-no-longer-provided-with-the-old-domain-name
__hash__: hJ5eW_GgrdlbpwKdbi7ax4d7qwoCS0bjzKE8OyYnfe4
seo:
  title: 一部エンドポイントにおいて旧ドメイン名でのリクエスト受付を停止しました
  description: >-
    2019年11月8日、2020年3月19日、2020年8月12日、および2020年10月9日にお知らせしたとおり、Messaging
    APIの一部のエンドポイントのドメイン名は「api.line.me」から「api-data.line.me」に変更されました。
---

[2019年11月8日](/news/2019/11/08/domain-name-change/)、[2020年3月19日](/news/2020/03/19/remind-domain-name-change/)、[2020年8月12日](/news/2020/08/12/extention-of-domain-name-change-transition-period/)、および[2020年10月9日](/news/2020/10/09/reminder-for-domain-name-change-transition-period/)にお知らせしたとおり、Messaging APIの一部のエンドポイントのドメイン名は「api.line.me」から「api**-data**.line.me」に変更されました。

移行期限を過ぎたため、本日をもって旧ドメイン名でのリクエスト受付を停止しましたことをお知らせします。

### 対象エンドポイント

- [コンテンツを取得する](/reference/messaging-api/#get-content)
- [リッチメニューの画像をアップロードする](/reference/messaging-api/#upload-rich-menu-image)
- [リッチメニューの画像をダウンロードする](/reference/messaging-api/#download-rich-menu-image)

### 影響

旧ドメイン名でエンドポイントにアクセスした場合は、ステータスコード`404`が返されます。上記のエンドポイントを旧ドメイン名で利用されていた場合は、速やかにドメイン名を`api-data.line.me`に変更してください。

ご利用のユーザー様にはご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。
