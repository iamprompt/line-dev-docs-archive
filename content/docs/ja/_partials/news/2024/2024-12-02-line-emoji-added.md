---
title: Messaging APIで送信可能なLINE絵文字が増えました
navigation: true
description: >-
  LINEアプリのデフォルト絵文字のリニューアルに伴い、Messaging
  APIで送信可能なLINE絵文字が増えました。なお、従来のLINE絵文字も引き続き利用可能です。詳しくは、『Messaging
  APIドキュメント』の「LINE絵文字」を参照してください。
meta: >-
  {"date":"2024-12-02 00:00 UTC","tags":"line-official-account,
  messaging-api","locale":"ja"}
path: /ja/_partials/news/2024/2024-12-02-line-emoji-added
__hash__: z8xz5IKfo9L7cwr6U3mFKJ5N6jHOx8s6MO72XfI0lhs
seo:
  title: Messaging APIで送信可能なLINE絵文字が増えました
  description: >-
    LINEアプリのデフォルト絵文字のリニューアルに伴い、Messaging
    APIで送信可能なLINE絵文字が増えました。なお、従来のLINE絵文字も引き続き利用可能です。詳しくは、『Messaging
    APIドキュメント』の「LINE絵文字」を参照してください。
---

LINEアプリの[デフォルト絵文字のリニューアル](https://www.lycorp.co.jp/ja/news/release/016536/){rel="[\"nofollow\"]"}に伴い、Messaging APIで送信可能なLINE絵文字が増えました。なお、従来のLINE絵文字も引き続き利用可能です。詳しくは、『Messaging APIドキュメント』の「[LINE絵文字](/docs/messaging-api/emoji-list/)」を参照してください。

![](/media/news/2024/line-emoji-added.png){className="[\"bg-border\"]"}

使用したいLINE絵文字の`プロダクトID`と`絵文字ID`を、[テキストメッセージ（v2）](/reference/messaging-api/#text-message-v2)や[テキストメッセージ](/reference/messaging-api/#text-message)の`productId`プロパティと`emojiId`プロパティに指定することで、ユーザーに絵文字が送信できます。メッセージの送信方法について詳しくは、『Messaging APIドキュメント』の「[メッセージを送信する](/docs/messaging-api/sending-messages/)」を参照してください。
