---
title: Messaging APIにおいて、ユーザーにリンク済みのリッチメニューを一括で置き換えたり、解除したりできるようになりました
navigation: true
description: Messaging APIにおいて、ユーザーにリンク済みのリッチメニューを一括で置き換え・解除するエンドポイントを追加しました。
meta: >-
  {"date":"2023-07-04 00:00 UTC","tags":"Messaging API, Rich
  menu","locale":"ja"}
path: /ja/_partials/news/2023/2023-07-04-messaging-api-updated
__hash__: QI3Qh8a52k_tsrKcSkwVceK9oxRMU-sC4vG_e5l15bw
seo:
  title: Messaging APIにおいて、ユーザーにリンク済みのリッチメニューを一括で置き換えたり、解除したりできるようになりました
  description: Messaging APIにおいて、ユーザーにリンク済みのリッチメニューを一括で置き換え・解除するエンドポイントを追加しました。
---

Messaging APIにおいて、ユーザーにリンク済みのリッチメニューを一括で置き換え・解除するエンドポイントを追加しました。

- [リンク済みのリッチメニューを一括で置き換え・解除するエンドポイント](#bach-control-20230704)
- [リッチメニューの一括操作の進行状況を取得するエンドポイント](#bach-control-status-20230704)
- [リッチメニューの一括操作のリクエストを検証するエンドポイント](#bach-control-validation-20230704)
- [リッチメニューの置き換えを安全にリトライするには](#bach-control-example-20230704)

### リンク済みのリッチメニューを一括で置き換え・解除するエンドポイント

[リッチメニューとユーザーをリンクする](/reference/messaging-api/#link-rich-menu-to-user)エンドポイントなどを利用して、ユーザーにリンクしたリッチメニューを一括で操作できるエンドポイントです。このエンドポイントでは、以下のような操作が可能です。

1. 特定のリッチメニューをリンク済みのすべてのユーザーを対象に、リッチメニューを別のリッチメニューに置き換える
2. 特定のリッチメニューをリンク済みのすべてのユーザーを対象に、リッチメニューのリンクを解除する
3. リッチメニューをリンク済みのすべてのユーザーを対象に、リッチメニューのリンクを解除する

これまで、ユーザーにリンク済みのリッチメニューをリンクし直したり、リンクを解除したりするためには、変更の対象となるすべての:glossary-tooltip[[ユーザーID](/glossary/#user-id)]{glossary-id="user-id"}が必要でした。このエンドポイントを利用することで、ユーザーIDを指定することなく、リンク済みのリッチメニューをリンクし直したり、リンクを解除したりすることができます。

このエンドポイントへのリクエストはバックグラウンドで非同期に処理されます。処理の進行状況は「[リッチメニューの一括操作の進行状況を取得するエンドポイント](#bach-control-status-20230704)」で確認できます。

なお、一度のリクエストで複数のリッチメニューの操作を指定することができます。複数の操作を指定した場合、リッチメニューへの操作はそれぞれ並行してユーザーごとに実行されます。

詳しくは、『Messaging APIリファレンス』の「[リンク済みのリッチメニューを一括で置き換え・解除する](/reference/messaging-api/#batch-control-rich-menus-of-users)」を参照してください。

### リッチメニューの一括操作の進行状況を取得するエンドポイント

ユーザーにリンク済みのリッチメニューを、一括で置き換え・解除したときの進行状況を取得します。

進行状況を取得できる期間は、リッチメニューの一括操作のリクエストを受け付けた時間から14日間（336時間）です。

詳しくは、『Messaging APIリファレンス』の「[リッチメニューの一括操作の進行状況を取得する](/reference/messaging-api/#get-batch-control-rich-menus-progress-status)」を参照してください。

### リッチメニューの一括操作のリクエストを検証するエンドポイント

リンク済みのリッチメニューを一括で置き換え・解除するエンドポイントの、[リクエストボディ](/reference/messaging-api/#batch-control-rich-menus-of-users-request-body)が有効かを検証します。

このエンドポイントを使うことで、リクエストがエラーにならないことを事前に確認できます。

詳しくは、『Messaging APIリファレンス』の「[リッチメニューの一括操作のリクエストを検証する](/reference/messaging-api/#validate-batch-control-rich-menus-request)」を参照してください。

### リッチメニューの置き換えを安全にリトライするには

リッチメニューを一括で操作する際の処理は、ユーザーごとに非同期に実行されます。そのため、一部のユーザーに対しての処理が失敗していた場合に、同じ内容でリトライをしてしまうと、意図しない内容でリッチメニューが置き換わってしまう場合があります。

以下のように、ユーザーにリンク済みのリッチメニューを入れ替えるとします。

1. `richmenu ID A`がリンクされているユーザー全員のリッチメニューを、`richmenu ID B`に置き換える
2. `richmenu ID B`がリンクされているユーザー全員のリッチメニューを、`richmenu ID A`に置き換える

この場合のリクエストの例は以下のとおりです。

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu/batch \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
  "operations": [
    {
      "type": "link",
      "from": "{richmenu ID A}",
      "to": "{richmenu ID B}"
    },
    {
      "type": "link",
      "from": "{richmenu ID B}",
      "to": "{richmenu ID A}"
    }
  ]
}'
```

このリクエストの処理が成功しているかどうかは、「[リッチメニューの一括操作の進行状況を取得するエンドポイント](#bach-control-status-20230704)」で取得します。

進行状況を取得した結果、処理に失敗していた場合、上記の内容でリトライをするとします。このとき、初回のリクエストで`richmenu ID B`から`richmenu ID A`に置き換えが完了していたユーザーのリッチメニューは、再び`richmenu ID B`に置き換わってしまいます。

そのため、リッチメニューを一括で置き換えたり、解除したりする場合は、リトライ用のキーである`resumeRequestKey`プロパティを指定することを推奨します。`resumeRequestKey`プロパティを指定した場合のリクエストの例は、以下のとおりです。

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu/batch \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
  "operations": [
    {
      "type": "link",
      "from": "{richmenu ID A}",
      "to": "{richmenu ID B}"
    },
    {
      "type": "link",
      "from": "{richmenu ID B}",
      "to": "{richmenu ID A}"
    }
  ],
  "resumeRequestKey": "{任意のキー}"
}'
```

初回のリクエストで`resumeRequestKey`プロパティに任意のキーを指定していた場合、同じキーを指定して再度リクエストを送ることで、処理が完了していないユーザーに対してのみ再度処理が行われます。`resumeRequestKey`プロパティを使用することで、安全にリトライすることができます。

`resumeRequestKey`プロパティの有効期限は14日間（336時間）です。有効期限を超えた場合、新しいリクエストとして扱われます。
