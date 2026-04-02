---
title: ユーザーIDアップロード用のオーディエンス作成/ユーザーID追加のエンドポイントに同時処理数の制限を設けました
navigation: true
description: >-
  2021年6月21日にお知らせしたとおり、2021年7月5日よりMessaging
  APIにおいて、ユーザーIDアップロード用のオーディエンス作成およびオーディエンスへのユーザーID追加のエンドポイントに同時処理数の制限を設けました。対象のエンドポイントを利用している場合は、この制限による影響をご確認ください。
meta: '{"date":"2021-07-05 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2021/2021-07-05-audience-upload-job-queue-size
__hash__: sHdyF2ZEaPgEu0YN2mKcxda4nWUxJnWMJOL069os9VU
seo:
  title: ユーザーIDアップロード用のオーディエンス作成/ユーザーID追加のエンドポイントに同時処理数の制限を設けました
  description: >-
    2021年6月21日にお知らせしたとおり、2021年7月5日よりMessaging
    APIにおいて、ユーザーIDアップロード用のオーディエンス作成およびオーディエンスへのユーザーID追加のエンドポイントに同時処理数の制限を設けました。対象のエンドポイントを利用している場合は、この制限による影響をご確認ください。
---

[2021年6月21日](/news/2021/06/21/audience-upload-job-queue-size/)にお知らせしたとおり、2021年7月5日よりMessaging APIにおいて、:glossary-tooltip[[ユーザーID](/glossary/#user-id)]{glossary-id="user-id"}アップロード用のオーディエンス作成およびオーディエンスへのユーザーID追加のエンドポイントに同時処理数の制限を設けました。対象のエンドポイントを利用している場合は、この制限による[影響](#audience-upload-20210705-03)をご確認ください。

::admonition{title="オーディエンスはナローキャストメッセージを送る際に使用します" type="tip"}
オーディエンスは[ナローキャストメッセージを送る](/reference/messaging-api/#send-narrowcast-message)際に使用します。詳しくは、『Messaging APIドキュメント』の「[属性情報やリターゲティングを利用して複数のユーザーに送信する（ナローキャストメッセージ](/docs/messaging-api/sending-messages/#send-narrowcast-message)）」を参照してください。
::

### 同時処理数の制限について

ユーザーIDアップロード用のオーディエンス作成およびオーディエンスへのユーザーID追加のエンドポイントにおいて、オーディエンスID（`audienceGroupId`）単位での同時処理数の上限を10とする制限を設けました。

| 項目       | 変更前  | 変更後 |
| -------- | ---- | --- |
| 同時処理数の上限 | 制限なし | 10  |

なお、対象エンドポイントの[レート制限](/reference/messaging-api/#rate-limits)については従来から変更ありません。詳しくは、「[同時処理数の制限](/reference/messaging-api/#limit-on-the-number-of-concurrent-operations)」を参照してください。

### 対象エンドポイント

- [ユーザーIDアップロード用のオーディエンスを作成する（JSON指定）](/reference/messaging-api/#create-upload-audience-group)
- [ユーザーIDアップロード用のオーディエンスを作成する（ファイル指定）](/reference/messaging-api/#create-upload-audience-group-by-file)
- [ユーザーIDアップロード用のオーディエンスにユーザーIDまたはIFAを追加する（JSON指定）](/reference/messaging-api/#update-upload-audience-group)
- [ユーザーIDアップロード用のオーディエンスにユーザーIDまたはIFAを追加する（ファイル指定）](/reference/messaging-api/#update-upload-audience-group-by-file)

上記のエンドポイントで同時に処理されているリクエストの合計が、同時処理数としてカウントされます。

### 影響

同時処理数の上限を超えるリクエストに対しては、[ステータスコード](/reference/messaging-api/#status-codes)`429 Too Many Requests`のエラーが返ります。

たとえばユーザーIDを1件取得するごとにオーディエンスを1つ作成するなど、対象のエンドポイントへ高頻度でリクエストするような実装になっていた場合は、同時処理数を考慮した実装へ変更してください。

エラーを受け取った場合は、しばらく時間をおいてから再度リクエストをしてください。

処理中のリクエストの数は、以下のエンドポイントのレスポンスに含まれる`jobs`プロパティで確認できます。ジョブのステータス（`jobs[].jobStatus`プロパティ）が待機中（`QUEUED`）、もしくは実行中（`WORKING`）の場合に、同時処理数として計上されます。

- [オーディエンスの情報を取得する](/reference/messaging-api/#get-audience-group)

### 仕様変更日

2021年7月5日

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
