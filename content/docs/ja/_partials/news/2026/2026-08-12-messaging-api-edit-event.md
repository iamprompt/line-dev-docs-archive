---
title: LINE公式アカウントを含むグループトークでユーザーがメッセージを編集できるようになりました
navigation: true
description: >-
  LINE公式アカウントを含むグループトークで、ユーザーがメッセージを編集できるようになりました。これに伴い、Messaging
  APIのWebhookイベントオブジェクトに、編集イベント（messageEdited）を追加しました。
meta: '{"date":"2026-08-12 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2026/2026-08-12-messaging-api-edit-event
__hash__: XBFk64cYl6DYs4X2vs24AQrmT5TuAJUJ5amvmWsNO6M
seo:
  title: LINE公式アカウントを含むグループトークでユーザーがメッセージを編集できるようになりました
  description: >-
    LINE公式アカウントを含むグループトークで、ユーザーがメッセージを編集できるようになりました。これに伴い、Messaging
    APIのWebhookイベントオブジェクトに、編集イベント（messageEdited）を追加しました。
---

LINE公式アカウントを含むグループトークで、ユーザーがメッセージを編集できるようになりました。これに伴い、Messaging APIの[Webhookイベントオブジェクト](/reference/messaging-api/#webhook-event-objects)に、[編集イベント](/reference/messaging-api/#edit-event)（`messageEdited`）を追加しました。

### 編集イベント追加の背景

[LINEラボ](https://guide.line.me/ja/services/linelabs.html){rel="[\"nofollow\"]"}において、メッセージ編集の機能が公開され、LINE公式アカウントを含むグループトークでユーザーが送信済みのテキストメッセージを編集できるようになりました。

ユーザーがLINE公式アカウントを含むグループトークでテキストメッセージを編集すると、[LINE Developersコンソール](/console/)の［**Webhook URL**］で指定したボットサーバーに対して、LINEプラットフォームから編集イベントが送られます。

| Webhookイベント                                    | 1対1のトーク | グループトーク | 複数人トーク |
| ---------------------------------------------- | ------- | ------- | ------ |
| [編集イベント](/reference/messaging-api/#edit-event) | ❌       | ✅       | ❌      |

編集イベントには応答トークン（`replyToken`）が含まれるため、編集されたメッセージにLINE公式アカウントから応答できます。

### LINE Messaging API SDKの更新について

今回の機能追加に伴う[LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)の更新状況については、それぞれのSDKのリリースノートを参照してください。
