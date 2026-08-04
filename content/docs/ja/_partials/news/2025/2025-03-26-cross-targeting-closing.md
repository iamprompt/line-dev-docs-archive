---
title: 【更新】オーディエンスの公開/非公開を設定する機能の提供を終了しました
navigation: true
description: ''
meta: >-
  {"date":"2025-03-26 00:00 UTC","tags":"messaging-api, end-of-life,
  life-cycle","locale":"ja"}
path: /ja/_partials/news/2025/2025-03-26-cross-targeting-closing
__hash__: CBMmI8XQJHn8STNG3kKUy49AeUsWv5RyDzOievLvecw
seo:
  title: 【更新】オーディエンスの公開/非公開を設定する機能の提供を終了しました
  description: ''
---

::admonition{title="2025年4月16日追記" type="tip"}
[提供終了したエンドポイント](#endpoints-20250326)に「オーディエンスを有効化する」エンドポイントを追加しました。
::

[2025年2月6日](/news/2025/02/06/cross-targeting-closing/)にお知らせしたとおり、2025年3月26日をもって、Messaging APIで作成したオーディエンスの公開/非公開を設定、および確認する機能の提供を終了しました。

### 提供終了したエンドポイント

次のエンドポイントの提供を終了しました。

- オーディエンスの権限レベルを変更する
- オーディエンスの権限レベルを取得する
- オーディエンスを有効化する

### 詳細

Messaging APIで作成したオーディエンスを、[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で使用するには、従来はMessaging APIの「オーディエンスの権限レベルを変更する」エンドポイントで、オーディエンスの権限レベルを公開（`PUBLIC`）にしておく必要がありました。

2025年3月26日をもって、このオーディエンスの権限レベルを公開または非公開に設定する従来機能の提供を終了しました。

なおMessaging APIとLINE Official Account Managerのオーディエンスは引き続き相互に利用可能です。また、非公開（`PRIVATE`）に設定されていてLINE Official Account Managerで利用できなかった既存のオーディエンスは、現在はすべて利用可能となっています。

| オーディエンスを   作成するツール            | オーディエンスを   利用するツール            | オーディエンスの   権限レベル | 機能提供終了前 | 機能提供終了後（現在） |
| ----------------------------- | ----------------------------- | ---------------- | ------- | ----------- |
| Messaging API                 | LINE Official Account Manager | 非公開              | ❌       | ✅           |
| Messaging API                 | LINE Official Account Manager | 公開               | ✅       | ✅           |
| LINE Official Account Manager | Messaging API                 | 非公開              | ❌       | ✅           |
| LINE Official Account Manager | Messaging API                 | 公開               | ✅       | ✅           |

✅：「オーディエンスを利用するツール」がオーディエンスを利用可能  
❌：「オーディエンスを利用するツール」がオーディエンスを利用不可

Messaging APIで作成したオーディエンスを、他のツールで使用する方法について詳しくは、『Messaging APIドキュメント』の「[オーディエンスを共有する](/docs/messaging-api/using-audience/#audience-sharing)」を参照してください。
