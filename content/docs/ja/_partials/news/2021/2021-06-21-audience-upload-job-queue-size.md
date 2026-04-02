---
title: ユーザーIDアップロード用のオーディエンス作成/ユーザーID追加のエンドポイントに同時処理数の制限を設けます
navigation: true
description: >-
  Messaging
  APIにおいて、ユーザーIDアップロード用のオーディエンス作成およびオーディエンスへのユーザーID追加のエンドポイントに同時処理数の制限を設けます。対象のエンドポイントを利用している場合は、この制限による影響をご確認ください。
meta: '{"date":"2021-06-21 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2021/2021-06-21-audience-upload-job-queue-size
__hash__: nIHMr1KMyaPlME6SjgvjUrc5PoZHOmyPa-GvUgtHG1I
seo:
  title: ユーザーIDアップロード用のオーディエンス作成/ユーザーID追加のエンドポイントに同時処理数の制限を設けます
  description: >-
    Messaging
    APIにおいて、ユーザーIDアップロード用のオーディエンス作成およびオーディエンスへのユーザーID追加のエンドポイントに同時処理数の制限を設けます。対象のエンドポイントを利用している場合は、この制限による影響をご確認ください。
---

Messaging APIにおいて、:glossary-tooltip[[ユーザーID](/glossary/#user-id)]{glossary-id="user-id"}アップロード用のオーディエンス作成およびオーディエンスへのユーザーID追加のエンドポイントに同時処理数の制限を設けます。対象のエンドポイントを利用している場合は、この制限による[影響](#audience-upload-20210621-03)をご確認ください。

::admonition{title="オーディエンスはナローキャストメッセージを送る際に使用します" type="tip"}
オーディエンスは[ナローキャストメッセージを送る](/reference/messaging-api/#send-narrowcast-message)際に使用します。詳しくは、『Messaging APIドキュメント』の「[属性情報やリターゲティングを利用して複数のユーザーに送信する（ナローキャストメッセージ](/docs/messaging-api/sending-messages/#send-narrowcast-message)）」を参照してください。
::

### 同時処理数の制限について

ユーザーIDアップロード用のオーディエンス作成およびオーディエンスへのユーザーID追加のエンドポイントにおいて、オーディエンスID（`audienceGroupId`）単位での同時処理数を10とする制限を設けます。

| 項目    | 変更前  | 変更後 |
| ----- | ---- | --- |
| 同時処理数 | 制限なし | 10  |

なお、対象エンドポイントの[レート制限](/reference/messaging-api/#rate-limits)については従来から変更ありません。

### 対象エンドポイント

- [ユーザーIDアップロード用のオーディエンスを作成する（JSON指定）](/reference/messaging-api/#create-upload-audience-group)
- [ユーザーIDアップロード用のオーディエンスを作成する（ファイル指定）](/reference/messaging-api/#create-upload-audience-group-by-file)
- [ユーザーIDアップロード用のオーディエンスにユーザーIDまたはIFAを追加する（JSON指定）](/reference/messaging-api/#update-upload-audience-group)
- [ユーザーIDアップロード用のオーディエンスにユーザーIDまたはIFAを追加する（ファイル指定）](/reference/messaging-api/#update-upload-audience-group-by-file)

同時処理数は、エンドポイントごとではなく、上記のエンドポイントすべてで共有されます。

### 影響

同時処理数を超えるリクエストに対しては、[ステータスコード](/reference/messaging-api/#status-codes)`429 Too Many Requests`のエラーが返ります。

たとえばユーザーIDを1件取得するごとにオーディエンスを1つ作成するなど、対象のエンドポイントへ高頻度でリクエストするような実装になっていた場合は、同時処理数を考慮した実装へ変更してください。

エラーを受け取った場合は、しばらく時間をおいてから再度リクエストをしてください。

処理中のリクエストの数は、以下のエンドポイントのレスポンスに含まれる`jobs`プロパティで確認できます。ジョブのステータス（`jobs[].jobStatus`プロパティ）が待機中（`QUEUED`）、もしくは実行中（`WORKING`）の場合に、同時処理数として計上されます。

- [オーディエンスの情報を取得する](/reference/messaging-api/#get-audience-group)

### 仕様変更予定日

2021年7月5日

なおこの仕様変更の内容および日時は、予告なく変更される可能性があります。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
