---
title: Messaging APIアップデート（2020年9月）
navigation: true
description: Messaging APIに新たな機能が追加されました。
meta: '{"date":"2020-09-01 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2020/2020-09-01-messaging-api-update-september-2020
__hash__: 0UudQGatCnpd4XCLoGvnyW_BjJW1DDR0g0oVX4pa_9U
seo:
  title: Messaging APIアップデート（2020年9月）
  description: Messaging APIに新たな機能が追加されました。
---

Messaging APIに新たな機能が追加されました。

今回のアップデートで追加、更新された機能は以下のとおりです。

- [配信可能な上限数の範囲内でナローキャストメッセージを送れるようになりました](#september-upToRemainingQuota)
- [バブルを定義するJSONデータの最大サイズが30KBになりました](#september-bubble)

### 配信可能な上限数の範囲内でナローキャストメッセージを送れるようになりました

ナローキャストメッセージに`limit.upToRemainingQuota`プロパティが追加されました。
ナローキャストメッセージの配信時にこのプロパティを指定しておくことで、配信可能な上限数の範囲内でメッセージを送れます。

::admonition{title="limit.upToRemainingQuotaプロパティを使うメリットとは？" type="tip"}
配信可能な上限数を超えてナローキャストメッセージを送ろうとすると、配信に失敗してしまいます。
そのため従来は、ナローキャストメッセージを送るときには、事前にメッセージ利用状況を確認した上で、「今月は残り750通まで送れるから、`limit.max`プロパティを750にして配信しよう」というように、最大送信数の値を指定して送る必要がありました。

しかし今回追加された`limit.upToRemainingQuota`プロパティを`true`にしておけば、配信しようとしたメッセージの数が配信可能な上限数を超えていても、メッセージの送信は失敗せず、自動的に上限数の範囲内で配信されます。
「残り何通まで送れるか？」を確認しなくても、自動的に上限数の範囲内で配信してくれるのが、このプロパティのメリットです。
なお配信対象は、無作為に抽出されます。
::

`limit.upToRemainingQuota`プロパティについては、『Messaging APIリファレンス』の以下を参照してください。

- [ナローキャストメッセージを送る](/reference/messaging-api/#send-narrowcast-message)

メッセージの配信可能な上限数については、以下を参照してください。

- [Messaging APIの料金](/docs/messaging-api/overview/#line-official-account-plan)

### バブルを定義するJSONデータの最大サイズが30KBになりました

Flex Messageで、バブルを定義するJSONデータの最大サイズが変わりました。
変更前と変更後の差異については、以下の表を参照してください。

| 項目    | 変更前  | 変更後  |
| ----- | ---- | ---- |
| 最大サイズ | 10KB | 30KB |

Flex Messageのバブルコンテナについては、『Messaging APIリファレンス』の以下を参照してください。

- [バブル](/reference/messaging-api/#bubble)
