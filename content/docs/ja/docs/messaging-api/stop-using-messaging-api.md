---
title: Messaging APIの利用を停止する
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/messaging-api/stop-using-messaging-api
__hash__: dOaQJjHCnunOtcWingPOzObEJBW6lnjYql2JJo9KybY
seo:
  title: Messaging APIの利用を停止する
  description: null
---

# :page-title

:markdown-controls::admonition{title="LINE公式アカウントの利用を停止する" type="tip"}
Messaging APIチャネルと紐づいているLINE公式アカウントの利用を停止したい場合は、「[LINE公式アカウントの利用を停止する](/docs/messaging-api/stop-using-line-official-account/)」を参照してください。
::

Messaging APIチャネルに紐づいているLINE公式アカウントの利用は継続したいが、Messaging APIの利用は停止したい場合は、以下の作業を行うことを推奨します。なお、Messaging APIチャネルに紐づいているLINE公式アカウントを残し、Messaging APIチャネルのみを削除することはできません。

:toc## Webhookの利用を停止する

1. [LINE Developersコンソール](/console/)で、利用を停止するMessaging APIチャネルを選択します。
2. ［**Messaging API設定**］タブをクリックします。
3. ［**Webhook設定**］セクションの［**Webhookの利用**］を無効にします。

![［Webhook設定］セクションの［Webhookの利用］](/media/messaging-api/stop-using-messaging-api/disable-use-webhook-ja.png){className="[\"border\",\"w-fix-720\"]"}

## チャネルアクセストークンを取り消す

チャネルアクセストークンの種類によって、取り消すためのエンドポイントが異なります。利用しているチャネルアクセストークンに対応するエンドポイントを使用し、チャネルアクセストークンを取り消してください。なお、[ステートレスチャネルアクセストークン](/docs/basics/channel-access-token/#stateless-channel-access-token)は取り消せません。

- [チャネルアクセストークンv2.1を取り消す](/reference/messaging-api/#revoke-channel-access-token-v2-1)エンドポイント
- [短期または長期のチャネルアクセストークンを取り消す](/reference/messaging-api/#revoke-longlived-or-shortlived-channel-access-token)エンドポイント

## Messaging APIの利用停止後の表示

上記の手順でWebhookを無効にし、チャネルアクセストークンを取り消すことで、Messaging APIの利用を停止できます。

ただし、この手順でMessaging APIの利用を停止しても、Messaging APIチャネルそのものは引き続き存在します。そのため、利用停止したチャネルをLINE Developersコンソールのチャネル一覧で確認した場合、他の利用中のMessaging APIチャネルとの見た目の違いはありません。

また、LINE Official Account Managerの設定画面で［**Messaging API**］を選択した際も、ステータスは「**利用中**」のままとなります。
