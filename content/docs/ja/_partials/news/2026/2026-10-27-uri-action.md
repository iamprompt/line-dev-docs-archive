---
title: Messaging APIにおいて、URIアクションで指定可能なURIの最大文字数を10,000に引き上げました
navigation: true
description: >-
  Messaging
  APIのURIアクションにおいて、uriとaltUri.desktopプロパティに設定可能な最大文字数を引き上げました。これにより、複雑なディープリンクや複数のトラッキングパラメータを含むURLなどをURIアクションに設定しやすくなりました。
meta: '{"date":"2026-10-27 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2026/2026-10-27-uri-action
__hash__: 0QvXP0oDqD_FR22kio__C2gD1PXcf6i2ZCJBaG0Y8JM
seo:
  title: Messaging APIにおいて、URIアクションで指定可能なURIの最大文字数を10,000に引き上げました
  description: >-
    Messaging
    APIのURIアクションにおいて、uriとaltUri.desktopプロパティに設定可能な最大文字数を引き上げました。これにより、複雑なディープリンクや複数のトラッキングパラメータを含むURLなどをURIアクションに設定しやすくなりました。
---

Messaging APIのURIアクションにおいて、`uri`と`altUri.desktop`プロパティに設定可能な最大文字数を引き上げました。これにより、複雑なディープリンクや複数のトラッキングパラメータを含むURLなどをURIアクションに設定しやすくなりました。

### 変更内容

URIアクションが実行されたときに開かれるURIの最大文字数を、以下のとおり引き上げました。

| プロパティ            | 変更前   | 変更後（現在） |
| ---------------- | ----- | ------- |
| `uri`            | 1,000 | 10,000  |
| `altUri.desktop` |       |         |

### メッセージタイプおよび機能において参照されるプロパティ

各メッセージタイプおよび機能において、スマートフォン版LINEとPC版LINEでそれぞれ参照されるURIアクションのプロパティは以下のとおりです。

| メッセージタイプおよび機能                                              | スマートフォン版LINE | PC版LINE          |
| ---------------------------------------------------------- | ------------ | ---------------- |
| [Flex Message](/reference/messaging-api/#flex-message)     | `uri`        | `altUri.desktop` |
| [テンプレートメッセージ](/reference/messaging-api/#template-messages) | `uri`        | - ※              |
| [クイックリプライ](/reference/messaging-api/#quick-reply)          | `uri`        | - ※              |
| [リッチメニュー](/reference/messaging-api/#rich-menu)             | `uri`        | - ※              |

※ `altUri.desktop`は、Flex MessageにURIアクションを関連付けた場合にのみ有効です。

URIアクションについて詳しくは、『Messaging APIリファレンス』の「[URIアクション](/reference/messaging-api/#uri-action)」を参照してください。

### LINE Messaging API SDKの更新について

今回の仕様変更に伴う[LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)の更新状況については、それぞれのSDKのリリースノートを参照してください。
