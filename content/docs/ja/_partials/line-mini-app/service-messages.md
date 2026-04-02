---
title: Service Messages
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-mini-app/service-messages
__hash__: GN7KSNK7DW-uxBrLL7Zn4ldrgvbt3n1vcUQrsjHAuN8
seo:
  description: ''
---

## サービスメッセージ

::admonition{title="認証済ミニアプリでのみ利用できます" type="tip"}
この機能は、認証済ミニアプリでのみ利用できます。未認証ミニアプリの場合、開発用の内部チャネルではテストできますが、公開用の内部チャネルでは利用できません。
::

サービスメッセージAPIを使用すると、サービスからLINEミニアプリのユーザーに、サービスメッセージを送信できます。

サービスメッセージを送信するには、サービス通知トークンと[テンプレート](/docs/line-mini-app/develop/service-messages/#service-message-templates)が必要です。

- [サービス通知トークンを発行する](#issue-notification-token)
- [サービスメッセージを送信する](#send-service-message)
