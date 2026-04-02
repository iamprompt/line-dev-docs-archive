---
title: 2021年11月18日よりMessaging APIのレート制限が変更されます
navigation: true
description: Messaging APIでは、エンドポイントごとにレート制限があります。
meta: '{"date":"2021-11-04 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2021/2021-11-04-rate-limit
__hash__: 7Ceb4faDybEZRbBNbulsyunxCjAxASZWER8_FXwXCKk
seo:
  title: 2021年11月18日よりMessaging APIのレート制限が変更されます
  description: Messaging APIでは、エンドポイントごとにレート制限があります。
---

Messaging APIでは、エンドポイントごとに[レート制限](/reference/messaging-api/#rate-limits)があります。

このレート制限について、2021年11月18日より一部のエンドポイントで変更を予定しています。変更前と変更後の差異については、以下の表を参照してください。

| エンドポイント                                                                                                                   | 変更前          | 変更後              |
| ------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------- |
| - [リッチメニューを作成する](/reference/messaging-api/#create-rich-menu) - [リッチメニューを削除する](/reference/messaging-api/#delete-rich-menu) | 2,000リクエスト/秒 | **100リクエスト/時** ※ |

※ :glossary-tooltip[[LINE Official Account Manager](/glossary/#line-oa-manager)]{glossary-id="line-oa-manager"}を使ってリッチメニューを作成・削除する場合は制限の対象外です。

上記以外のエンドポイントのレート制限には、変更はありません。

### 仕様変更予定日

2021年11月18日

なおこの仕様変更の内容および日時は、予告なく変更される可能性があります。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
