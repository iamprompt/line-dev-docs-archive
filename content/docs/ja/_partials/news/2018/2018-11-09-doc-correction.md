---
title: ドキュメント訂正のお知らせ
navigation: true
description: 昨日公開された、Webhookイベントに追加された新しいdestinationプロパティの記載に誤記がありました。お詫びして訂正いたします。
meta: '{"date":"2018-11-09 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2018/2018-11-09-doc-correction
__hash__: AJ9cwx96jtzNk-q4DOvH1-JOjRduVc0sl-C_4jp9z4k
seo:
  title: ドキュメント訂正のお知らせ
  description: 昨日公開された、Webhookイベントに追加された新しいdestinationプロパティの記載に誤記がありました。お詫びして訂正いたします。
---

昨日公開された、Webhookイベントに追加された新しい`destination`プロパティの記載に誤記がありました。お詫びして訂正いたします。

【誤】`destination`プロパティには、Webhookイベントを受信すべきボットの**MID**（`destination`）が含まれます。この値は、「**u**[0-9a-f]{32}」の正規表現にマッチする文字列です。

【正】`destination`プロパティには、Webhookイベントを受信すべきボットの**ユーザーID**（`destination`）が含まれます。この値は、「**U**[0-9a-f]{32}」の正規表現にマッチする文字列です。

詳しくは、「[リクエストボディ](/reference/messaging-api/#request-body)」を参照してください。
