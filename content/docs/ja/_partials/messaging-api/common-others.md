---
title: Common Others
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/common-others
__hash__: TS08baEqoTp3G5Qg7cYqHJ68V2ukpvVWFrIS1LcIcek
seo:
  description: ''
---

### その他の共通仕様

#### リクエストボディのプロパティに指定するURLのエンコードについて

プロパティにURLを指定する場合は、ドメイン名、パス、クエリパラメータ、フラグメントはUTF-8を用いて[パーセントエンコード](https://ja.wikipedia.org/wiki/%E3%83%91%E3%83%BC%E3%82%BB%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0){rel="[\"nofollow\"]"}してください。

たとえば、以下の構成要素を持つURIを指定する場合は、 `https://example.com/path?q=%E3%81%8A%E3%81%AF%E3%82%88%E3%81%86#%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF`とします。

| スキーム  | ドメイン名       | パス    | クエリパラメータ | フラグメント |
| ----- | ----------- | ----- | -------- | ------ |
| https | example.com | /path | q=おはよう   | こんにちは  |

#### エンドポイントのパスは正確に指定してください

Messaging APIのエンドポイントにリクエストを送信する際は、Messaging APIリファレンスに記載された正しいエンドポイントを指定してください。エンドポイントのパスの末尾に不要なスラッシュ（`/`）を付与するなど、正しいエンドポイントを指定していない場合の動作は保証されません。

| ✅️ 正しいエンドポイントの例                           | ❌️ 誤ったエンドポイントの例                            |
| ----------------------------------------- | ------------------------------------------ |
| `https://api.line.me/v2/bot/message/push` | `https://api.line.me/v2/bot/message/push/` |

::admonition{title="Messaging APIの公式SDKを使いましょう" type="tip"}
Messaging APIの[公式SDK](/docs/messaging-api/line-bot-sdk/#official-sdks)を使って実装すると、エンドポイントのURLやパスを意識することなく、常に正しいエンドポイントを利用できます。
::
