---
title: Messaging APIにおいて、ナローキャストメッセージの部分配信を禁止するプロパティを追加しました
navigation: true
description: >-
  Messaging
  APIにおいて、ナローキャストメッセージの部分配信を禁止するlimit.forbidPartialDeliveryプロパティをリミットオブジェクトに追加しました。
meta: '{"date":"2025-10-21 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2025/2025-10-21-narrowcast-message-update
__hash__: cFAx1KbV9rAJAWw2aTKGHInKPa8OWi2k2TIynDFN3NI
seo:
  title: Messaging APIにおいて、ナローキャストメッセージの部分配信を禁止するプロパティを追加しました
  description: >-
    Messaging
    APIにおいて、ナローキャストメッセージの部分配信を禁止するlimit.forbidPartialDeliveryプロパティをリミットオブジェクトに追加しました。
---

Messaging APIにおいて、[ナローキャストメッセージ](/reference/messaging-api/#send-narrowcast-message)の部分配信を禁止する`limit.forbidPartialDelivery`プロパティを[リミットオブジェクト](/reference/messaging-api/#send-narrowcast-limit)に追加しました。

`limit.forbidPartialDelivery`プロパティを有効にすることで、ナローキャストメッセージ送信時に送信対象の一部にのみメッセージが配信されることを防ぐことができます。

### 仕様

`upToRemainingQuota`プロパティに`true`を指定し、`forbidPartialDelivery`プロパティにも`true`を指定すると、送信対象の人数がメッセージの最大送信数を超えていた場合、メッセージの配信を行いません。

メッセージの配信が中止されたかどうかは、[ナローキャストメッセージの進行状況を取得](/reference/messaging-api/#get-narrowcast-progress-status)することで確認できます。配信が中止された場合、進行状況を取得した際のレスポンスで`phase`プロパティが`failed`となり、`errorCode`プロパティで`5`が返されます。

### リミットオブジェクトによる最大送信数の制御

[リミットオブジェクト](/reference/messaging-api/#send-narrowcast-limit)は、ナローキャストメッセージの最大送信数を制限する場合に設定します。今回追加された`forbidPartialDelivery`プロパティを含めた、リミットオブジェクトによる最大送信数の制御の例は以下のとおりです。

| 条件（※）                                                                     | ターゲットリーチ：100   上限目安：90   送信対象：80       | ターゲットリーチ：100   上限目安：50   送信対象：80       |
| ------------------------------------------------------------------------- | -------------------------------------- | -------------------------------------- |
| リミットオブジェクトを指定しない                                                          | ❌ リクエスト時にエラー   （ターゲットリーチが上限目安を超えているため） | ❌ リクエスト時にエラー   （ターゲットリーチが上限目安を超えているため） |
| `max`指定なし   `upToRemainingQuota`=`true`   `forbidPartialDelivery`=`false` | ✅ 送信対象全員に送信される                         | ✅ 送信対象のうち、上限目安である50人に送信される             |
| `max`指定なし   `upToRemainingQuota`=`true`   `forbidPartialDelivery`=`true`  | ✅ 送信対象全員に送信される                         | ❌ 部分配信となるため配信が中止される                    |
| `max`=30   `upToRemainingQuota`=`true`   `forbidPartialDelivery`=`false`  | ✅ 送信対象のうち、`max`の値である30人に送信される          | ✅ 送信対象のうち、`max`の値である30人に送信される          |
| `max`=30   `upToRemainingQuota`=`true`   `forbidPartialDelivery`=`true`   | ❌ 部分配信となるため配信が中止される                    | ❌ 部分配信となるため配信が中止される                    |

※ 条件で使われる用語についての説明は以下のとおりです。

- ターゲットリーチ：メッセージの配信先となる友だちの母数。
- 上限目安：当月に送信できるメッセージ数の上限目安。詳しくは、『Messaging APIリファレンス』の「[当月に送信できるメッセージ数の上限目安を取得する](/reference/messaging-api/#get-quota)」を参照してください。
- 送信対象：属性情報（性別や年齢、OSの種類、地域など）やリターゲティング（オーディエンス）で絞り込んだ送信対象。
