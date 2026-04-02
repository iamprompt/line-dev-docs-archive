---
title: テキストの文字数のカウント
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/messaging-api/text-character-count
__hash__: 1zrjDWmgWkxiM0rlKXYP0kFkxpg-RYL-1u6B-AH1bHo
seo:
  title: テキストの文字数のカウント
  description: null
---

# :page-title

:markdown-controlsMessaging APIでは、テキストの文字数は、UTF-16の符号単位（16ビット）でカウントします。複数の符号単位で表現する文字（例：一部の漢字やUnicode絵文字）は、複数の文字としてカウントします。たとえば、Unicode絵文字の🍎は、2つの符号単位で表現されます。そのため、1文字ではなく、2文字としてカウントします。

また、[LINE絵文字](/docs/messaging-api/emoji-list/)を含むテキストの文字数は、テキスト中の絵文字プレースホルダ（`$`）を、使用するLINE絵文字の代替テキストで差し替えた状態でカウントします。代替テキストとは、LINE絵文字の表示ができない端末向けのテキストのことです。そのため、LINE絵文字を含むテキストメッセージを送信する場合に、テキストの文字数が意図せず最大文字数を超えてしまい、メッセージの送信に失敗することがあります。なお、各LINE絵文字に対応する代替テキストは開示しておりません。

ただし、以下のプロパティは、UTF-16の符号単位ではなく、[書記素クラスタ](https://unicode.org/reports/tr29/){rel="[\"nofollow\"]"}単位でカウントします。

| 種別                                                             | プロパティ                                             |
| -------------------------------------------------------------- | ------------------------------------------------- |
| すべての[アクションオブジェクト](/reference/messaging-api/#action-objects)    | - `label`                                         |
| [ポストバックアクションオブジェクト](/reference/messaging-api/#postback-action) | - `displayText` - `fillInText` - `label` - `text` |
| [メッセージアクションオブジェクト](/reference/messaging-api/#message-action)   | - `label` - `text`                                |
| [ボタンテンプレートメッセージ](/reference/messaging-api/#buttons)            | - `text` - `title`                                |
| [確認テンプレートメッセージ](/reference/messaging-api/#confirm)             | - `text`                                          |
| [カルーセルテンプレートメッセージ](/reference/messaging-api/#carousel)         | - `text` - `title`                                |
| [リッチメニューオブジェクト](/reference/messaging-api/#rich-menu-object)    | - `chatBarText` - `name`                          |
