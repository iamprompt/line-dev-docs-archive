---
title: ユーザーIDを取得する
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /ja/docs/messaging-api/getting-user-ids
__hash__: qndPl16F0IlrqHhGVeM3M4NvuoTHKqg1KCBlmGAprbw
seo:
  title: ユーザーIDを取得する
  description: null
---

# :page-title

:markdown-controlsMessaging APIで特定のユーザーに対してメッセージを送信するには、ユーザーIDでユーザーを指定する必要があります。このページでは、ユーザーIDの取得方法について解説します。

:toc## ユーザーIDとは

ユーザーIDとは、ユーザーの一意な識別子です。ユーザーIDは、LINEで登録されているユーザーの表示名や、LINEでの友だち検索に利用するLINE IDとは異なります。ユーザーIDはLINEプラットフォームが発行する値で、`U8189cf6745fc0d808977bdb0b9f22995`のように、`U[0-9a-f]{32}`の正規表現にマッチする文字列です。

![](/media/messaging-api/getting-user-ids/display-name-and-id-and-user-id-ja.png){className="[\"w-fix-960\",\"bg-border\"]"}

### ユーザーIDが発行される単位

ユーザーIDは、同じユーザーであってもプロバイダーごとに異なる値が発行されます。プロバイダーが同じであれば、チャネルの種類（LINEログインチャネルやMessaging APIチャネル）にかかわらず、同じユーザーIDが割り当てられます。

たとえば同じプロバイダーの配下に、Messaging APIチャネルと、LINEログインチャネルがあった場合、それぞれのチャネルで取得したAさんのユーザーIDは同一の値です。しかし、AさんのユーザーIDを異なるプロバイダーの配下にあるチャネルで取得した場合、AさんのユーザーIDはそれぞれのプロバイダーごとに異なる値となります。

![](/media/messaging-api/getting-user-ids/user-id-for-each-provider-ja.png){className="[\"w-fix-520\",\"bg-border\"]"}

## ユーザーIDを取得する

ユーザーIDを取得する方法は4つあります。

1. [開発者が自分自身のユーザーIDを取得する](#get-own-user-id)
2. [WebhookからユーザーIDを取得する](#get-user-ids-in-webhook)
3. [友だち全員のユーザーIDを取得する](#get-all-friends-user-ids)
4. [グループトークや複数人トークのメンバーのユーザーIDを取得する](#get-member-user-ids)

### 開発者が自分自身のユーザーIDを取得する

開発者は自分自身のユーザーIDを[LINE Developersコンソール](/console/)のチャネルの［**チャネル基本設定**］タブにある［**あなたのユーザーID**］で確認できます。詳しくは、『LINE Developersコンソールドキュメント』の「[チャネルの権限](/docs/line-developers-console/managing-roles/#roles-for-channel)」を参照してください。開発者が自分自身のユーザーIDを取得するためのAPIはありません。

::admonition{title="LINEアカウントとビジネスIDの連携が必要です" type="tip"}
［**チャネル基本設定**］タブにある［**あなたのユーザーID**］は、LINEアカウントと未連携のビジネスIDでは表示されません。LINEアカウントの連携状況による表示の違いは以下のとおりです。

| LINEアカウントが連携済み                                                                                                                | LINEアカウントが未連携                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ![](/media/messaging-api/getting-user-ids/get-own-user-id-linked-line-account-ja.png){className="[\"border\",\"w-fix-360\"]"} | ![](/media/messaging-api/getting-user-ids/get-own-user-id-unlinked-line-account-ja.png){className="[\"border\",\"w-fix-360\"]"} |

LINEアカウントの連携方法について詳しくは、『LINE Developersコンソールドキュメント』の「[ビジネスIDにLINEアカウントを連携させる](/docs/line-developers-console/login-account/#link-business-account-with-line-account)」を参照してください。
::

### WebhookからユーザーIDを取得する

ユーザーが、LINE公式アカウントを友だち追加したり、LINE公式アカウントにメッセージを送ったりすると、[LINE Developersコンソール](/console/)の［**Webhook URL**］で指定したURL（ボットサーバー）に対して、LINEプラットフォームからWebhookが送られます。ユーザーIDは、このWebhookに含まれています。

以下は、LINE公式アカウントを友だち追加したときに送られる[Webhookイベントオブジェクト](/reference/messaging-api/#webhook-event-objects)の例です。

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "follow",
      "timestamp": 1462629479859,
      "source": {
        // ユーザーIDはsourceオブジェクトのuserIdプロパティから取得できる
        "type": "user",
        "userId": "U8189cf6745fc0d808977bdb0b9f22995"
      },
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "mode": "active",
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      }
    }
  ]
}
```

ただし、ユーザーがプロフィール情報の取得に同意していない場合、WebhookにユーザーIDは含まれません。詳しくは、「[ユーザーのプロフィール情報取得の同意](/docs/messaging-api/user-consent/)」を参照してください。

### 友だち全員のユーザーIDを取得する

LINE公式アカウントと友だちになっているユーザー全員のユーザーIDは、[LINE公式アカウントを友だち追加したユーザーのリストを取得する](/reference/messaging-api/#get-follower-ids)エンドポイントで取得できます。

::admonition{title="注意" type="note"}
この機能は認証済アカウントまたは:glossary-tooltip[[プレミアムアカウント](/glossary/#premium-account)]{glossary-id="premium-account"}でのみご利用いただけます。アカウント種別について詳しくは、『LINEヤフー for Business』の「[LINE公式アカウント アカウント種別](https://www.lycbiz.com/jp/service/line-official-account/account-type/){rel="[\"nofollow\"]"}」を参照してください。
::

### グループトークや複数人トークのメンバー全員のユーザーIDを取得する

LINE公式アカウントが参加しているグループトークや複数人トークのメンバー全員のユーザーIDは、以下のエンドポイントで取得できます。

- [グループトークのメンバーのユーザーIDを取得する](/reference/messaging-api/#get-group-member-user-ids)
- [複数人トークのメンバーのユーザーIDを取得する](/reference/messaging-api/#get-room-member-user-ids)

::admonition{title="注意" type="note"}
この機能は認証済アカウントまたは:glossary-tooltip[[プレミアムアカウント](/glossary/#premium-account)]{glossary-id="premium-account"}でのみご利用いただけます。アカウント種別について詳しくは、『LINEヤフー for Business』の「[LINE公式アカウント アカウント種別](https://www.lycbiz.com/jp/service/line-official-account/account-type/){rel="[\"nofollow\"]"}」を参照してください。
::

::admonition{title="WebhookからもユーザーIDを取得できます" type="tip"}
ユーザーがグループトークや複数人トークに参加したり、メッセージを送ったりすると、ボットサーバーにWebhookが送信されます。WebhookにはユーザーIDが含まれているため、APIリクエストを実行せずにユーザーIDを取得できます。詳しくは、「[WebhookからユーザーIDを取得する](#get-user-ids-in-webhook)」を参照してください。
::

## ユーザーIDが有効かを確認する

ユーザーIDを知っていても、そのユーザーIDが無効な場合はメッセージを送信できません。

ユーザーIDが有効かを確認するには、[プロフィール情報を取得する](/reference/messaging-api/#get-profile)エンドポイントを使用してください。ユーザーIDが有効な場合は、HTTPステータスコード`200`が返ります。`200`以外が返ってきた場合、そのユーザーIDは無効のため、メッセージは送信できません。
