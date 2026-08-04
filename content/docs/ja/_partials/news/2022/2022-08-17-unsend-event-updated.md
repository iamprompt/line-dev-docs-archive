---
title: LINE公式アカウントとの1対1のトークでユーザーがメッセージの送信を取り消せるようになりました
navigation: true
description: ユーザーとLINE公式アカウントの1対1のトークにおいて、ユーザー（タイ、台湾のユーザーを除く）がメッセージの送信を取り消せるようになりました。
meta: '{"date":"2022-08-17 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2022/2022-08-17-unsend-event-updated
__hash__: x-O6ZbWBBant_RQZSOwmKkVNX7fnMCdwNEGmb0K0OlY
seo:
  title: LINE公式アカウントとの1対1のトークでユーザーがメッセージの送信を取り消せるようになりました
  description: ユーザーとLINE公式アカウントの1対1のトークにおいて、ユーザー（タイ、台湾のユーザーを除く）がメッセージの送信を取り消せるようになりました。
---

ユーザーとLINE公式アカウントの1対1のトークにおいて、ユーザー（タイ、台湾のユーザーを除く）がメッセージの送信を取り消せるようになりました。

それに伴い、Messaging APIのWebhookで、送信取消イベントの送信元（[`source`プロパティ](/reference/messaging-api/#common-properties)）に含まれるオブジェクトが変わります。従来のグループトークと複数人トークに加えて、新たにユーザーが含まれるようになります。

変更前と変更後の差異については、以下の表を参照してください。

| 項目                                                                                                                   | 変更前                                                                                                   | 変更後                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [送信取消イベント](/reference/messaging-api/#unsend-event)の送信元（[`source`プロパティ](/reference/messaging-api/#common-properties)） | - [グループトーク](/reference/messaging-api/#source-group) - [複数人トーク](/reference/messaging-api/#source-room) | - [ユーザー](/reference/messaging-api/#source-user)（1対1のトーク） - [グループトーク](/reference/messaging-api/#source-group) - [複数人トーク](/reference/messaging-api/#source-room) |

なおボットサーバーで[メッセージイベント](/reference/messaging-api/#message-event)を受信後、対象のメッセージを独自の管理画面などで表示させていた場合、送信取消イベントの受信時にはメッセージの表示を取り消すことを推奨します。

詳しくは、『Messaging APIリファレンス』の「[送信取消イベント](/reference/messaging-api/#unsend-event)」を参照してください。
