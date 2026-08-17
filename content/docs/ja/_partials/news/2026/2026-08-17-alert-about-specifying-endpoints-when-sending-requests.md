---
title: Messaging APIへのリクエスト送信時のエンドポイント指定に関する注意喚起
navigation: true
description: >-
  Messaging APIのエンドポイントにリクエストを送信する際は、Messaging
  APIリファレンスに記載された正しいエンドポイントを指定してください。エンドポイントのパスの末尾に不要なスラッシュ（/）を付与するなど、正しいエンドポイントを指定していない場合の動作は保証されません。
meta: '{"date":"2026-08-17 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: >-
  /ja/_partials/news/2026/2026-08-17-alert-about-specifying-endpoints-when-sending-requests
__hash__: WJ9thX8N_PZfyd9hOG_k0SVPksfbDqdRLZNIEHcoVQc
seo:
  title: Messaging APIへのリクエスト送信時のエンドポイント指定に関する注意喚起
  description: >-
    Messaging APIのエンドポイントにリクエストを送信する際は、Messaging
    APIリファレンスに記載された正しいエンドポイントを指定してください。エンドポイントのパスの末尾に不要なスラッシュ（/）を付与するなど、正しいエンドポイントを指定していない場合の動作は保証されません。
---

Messaging APIのエンドポイントにリクエストを送信する際は、[Messaging APIリファレンス](/reference/messaging-api/)に記載された正しいエンドポイントを指定してください。エンドポイントのパスの末尾に不要なスラッシュ（`/`）を付与するなど、正しいエンドポイントを指定していない場合の動作は保証されません。

| ✅️ 正しいエンドポイントの例                           | ❌️ 誤ったエンドポイントの例                            |
| ----------------------------------------- | ------------------------------------------ |
| `https://api.line.me/v2/bot/message/push` | `https://api.line.me/v2/bot/message/push/` |

::admonition{title="Messaging APIの公式SDKを使いましょう" type="tip"}
Messaging APIの[公式SDK](/docs/messaging-api/line-bot-sdk/#official-sdks)を使って実装すると、エンドポイントのURLやパスを意識することなく、常に正しいエンドポイントを利用できます。
::
