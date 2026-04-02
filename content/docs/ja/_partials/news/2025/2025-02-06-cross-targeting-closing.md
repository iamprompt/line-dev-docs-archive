---
title: 2025年3月26日をもってオーディエンスの公開/非公開を設定する機能の提供を終了します
navigation: true
description: 2025年3月26日をもって、Messaging APIで作成したオーディエンスの公開/非公開を設定、および確認する機能の提供を終了します。
meta: >-
  {"date":"2025-02-06 00:00 UTC","tags":"messaging-api, end-of-life,
  life-cycle","locale":"ja"}
path: /ja/_partials/news/2025/2025-02-06-cross-targeting-closing
__hash__: y9uPjrESq8nGdkGzLDfKGKmsMfjjRIZVz0s_b-4Y_Eo
seo:
  title: 2025年3月26日をもってオーディエンスの公開/非公開を設定する機能の提供を終了します
  description: 2025年3月26日をもって、Messaging APIで作成したオーディエンスの公開/非公開を設定、および確認する機能の提供を終了します。
---

2025年3月26日をもって、Messaging APIで作成したオーディエンスの公開/非公開を設定、および確認する機能の提供を終了します。

なおオーディエンスの公開/非公開を設定する機能の提供が終了した後も、Messaging APIとLINE Official Account Managerのオーディエンスは引き続き相互に利用可能です。

### 提供終了するエンドポイント

次のエンドポイントの提供を終了します。

- [オーディエンスの権限レベルを変更する](/reference/messaging-api/#change-authority-level)
- [オーディエンスの権限レベルを取得する](/reference/messaging-api/#get-authority-level)

提供終了後にこれらのエンドポイントにリクエストを送信すると、HTTPステータスコード`404 Not Found`が返ります。

### 詳細

Messaging APIで作成したオーディエンスを、LINE Official Account Managerで使用するには、従来はMessaging APIの「[オーディエンスの権限レベルを変更する](/reference/messaging-api/#change-authority-level)」エンドポイントで、オーディエンスの権限レベルを公開（`PUBLIC`）にしておく必要がありました。

2025年3月26日をもって、このオーディエンスの権限レベルを公開または非公開に設定する従来機能の提供を終了します。

なおオーディエンスの公開/非公開を設定する機能の提供が終了した後も、Messaging APIとLINE Official Account Managerのオーディエンスは引き続き相互に利用可能です。また、非公開（`PRIVATE`）に設定されていてLINE Official Account Managerで利用できなかった既存のオーディエンスも、2025年3月26日からはすべて利用可能となります。

| 作成する                          | 利用する                          | 権限レベル | 機能提供終了前（現在） | 機能提供終了後 |
| ----------------------------- | ----------------------------- | ----- | ----------- | ------- |
| Messaging API                 | LINE Official Account Manager | 非公開   | ❌           | ✅       |
| Messaging API                 | LINE Official Account Manager | 公開    | ✅           | ✅       |
| LINE Official Account Manager | Messaging API                 | 非公開   | ❌           | ✅       |
| LINE Official Account Manager | Messaging API                 | 公開    | ✅           | ✅       |

Messaging APIで作成したオーディエンスを、LINE Official Account Manager以外のツール（[LINE広告マネージャー](https://admanager.line.biz/){rel="[\"nofollow\"]"}など）で使用するための設定は、[ビジネスマネージャー](https://data.linebiz.com/solutions/business-manager){rel="[\"nofollow\"]"}のオーディエンス共有機能でできます。

またビジネスマネージャーのオーディエンス共有機能を使うことで、同一プロバイダー配下のMessaging APIチャネル間でオーディエンスを共有できます。ただしビジネスマネージャーでオーディエンス共有を設定できるのは、認証済アカウントと:glossary-tooltip[[プレミアムアカウント](/glossary/#premium-account)]{glossary-id="premium-account"}のみです。

詳しくは、『LINEヤフー for Business』の「[クロスターゲティング機能（オーディエンスの公開・LINE Tagの共有機能）の提供終了に関するご案内](https://www.lycbiz.com/jp/news/line-ads/20241113/){rel="[\"nofollow\"]"}」を参照してください。

### スケジュール

機能の提供終了に伴うスケジュールは次のとおりです。

| 日付         | 内容                                                         |
| ---------- | ---------------------------------------------------------- |
| 2025年2月12日 | ビジネスマネージャーで共有したオーディエンスの一覧を、Messaging APIで取得するエンドポイントの提供を開始 |
| 2025年3月26日 | オーディエンスの公開/非公開を設定、確認する従来機能の提供を終了                           |

なお、この仕様変更の内容および日時は、予告なく変更される可能性があります。
