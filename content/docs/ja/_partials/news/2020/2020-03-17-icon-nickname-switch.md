---
title: アイコンおよび表示名が変更できるようになりました
navigation: true
description: >-
  これまで法人向けユーザーオプションとして一部のユーザーのみに公開されていた、LINE公式アカウントのアイコンおよび表示名を任意に変更できるMessaging
  APIのpush/reply APIリクエスト拡張機能を一般公開しました。
meta: '{"date":"2020-03-17 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2020/2020-03-17-icon-nickname-switch
__hash__: oDd09ggC_vwTSZgJpLL46ktgcoGkpsmlmRtqIp-1E2M
seo:
  title: アイコンおよび表示名が変更できるようになりました
  description: >-
    これまで法人向けユーザーオプションとして一部のユーザーのみに公開されていた、LINE公式アカウントのアイコンおよび表示名を任意に変更できるMessaging
    APIのpush/reply APIリクエスト拡張機能を一般公開しました。
---

これまで法人向けユーザーオプションとして一部のユーザーのみに公開されていた、LINE公式アカウントのアイコンおよび表示名を任意に変更できるMessaging APIのpush/reply APIリクエスト拡張機能を一般公開しました。

緑色で囲われている箇所のように、LINE公式アカウントからメッセージを送る際に任意のアイコンおよび表示名を指定できます。

![Change icon and display name](/media/messaging-api/icon-nickname-switch/icon-nickname-switch.jpg){className="[\"border\"]"}

詳しくは、「[アイコンおよび表示名を変更する](/docs/messaging-api/icon-nickname-switch/)」を参照してください。

### Messaging APIに追加されたプロパティ

Messaging APIに、アイコンを指定する`sender.iconUrl`プロパティと表示名を指定する`sender.name`が追加されました。`sender.iconUrl`と`sender.name`は、すべてのメッセージオブジェクトに指定できます。

各プロパティについて詳しくは、『Messaging APIリファレンス』の「[アイコンおよび表示名の変更](/reference/messaging-api/#icon-nickname-switch)」セクションを参照してください。
