---
title: Common Others
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/common-others
__hash__: GzXwEsDedgFx8j7YL8oUET61I7TMnDYNzSM0piimSzc
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
