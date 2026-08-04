---
title: スタンプ
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /ja/docs/messaging-api/sticker-list
__hash__: d2hSha_Np3RfTYqQD71UhHSEeHEfapZDe_y4pgICQyI
seo:
  title: スタンプ
  description: null
---

# :page-title

Messaging APIを使うと、スタンプを[スタンプメッセージ](/docs/messaging-api/message-types/#sticker-messages)として送信できます。ただし、送信できるのは下記の[スタンプ定義](#sticker-definitions)に記載されているスタンプに限られます。スタンプメッセージの送信方法について詳しくは、「[メッセージを送信する](/docs/messaging-api/sending-messages/)」を参照してください。

::admonition{title="スタンプ定義に記載されていないスタンプを送信するには" type="tip"}
- ご自身のLINEアカウントで所持しているスタンプは、[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}およびLINE公式アカウント管理アプリの「チャット」で送信できます。詳しくは、『LINEヤフー for Business』の「[チャット](https://www.lycbiz.com/jp/manual/OfficialAccountManager/chats/){rel="[\"nofollow\"]"}」を参照してください。
- スポンサードスタンプなど、自社でライセンスを保有しているプロモーションスタンプを送信する機能は、所定の申請等を行った法人ユーザーのみがご利用いただけます。自社のLINE公式アカウントでご利用になりたいお客様は、担当営業までご連絡いただくか、[弊社パートナー](https://www.lycbiz.com/jp/partner/sales/){rel="[\"nofollow\"]"}にお問い合わせください。
::

## スタンプを送信する

スタンプを送信するには、[スタンプメッセージ](/reference/messaging-api/#sticker-message)オブジェクトにスタンプのパッケージIDとスタンプIDを指定します。下図のように、`packageId`プロパティと`stickerId`プロパティを指定してください。

![](/media/messaging-api/sticker-message/sticker-message-object-ja.png){className="[\"w-fix-960\",\"bg-border\"]"}

## スタンプ定義

スタンプに付いている番号は、そのスタンプのスタンプIDです。

:messaging-api-stickers
