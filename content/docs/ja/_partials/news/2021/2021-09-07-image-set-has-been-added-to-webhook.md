---
title: 複数画像の同時送信をWebhookで判別できるようになりました
navigation: true
description: >-
  Messaging
  APIでは、ユーザーが2つの画像を同時に送信すると、LINEプラットフォームからボットサーバーにWebhookイベントが2つ送られます。このWebhookに含まれる画像のメッセージオブジェクトに、以下のフィールドが追加されました。
meta: '{"date":"2021-09-07 01:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2021/2021-09-07-image-set-has-been-added-to-webhook
__hash__: VjiA_0kTA2PjYiTQ9SwzQ2qGYhHkIH_Bj5TaSk1ckHY
seo:
  title: 複数画像の同時送信をWebhookで判別できるようになりました
  description: >-
    Messaging
    APIでは、ユーザーが2つの画像を同時に送信すると、LINEプラットフォームからボットサーバーにWebhookイベントが2つ送られます。このWebhookに含まれる画像のメッセージオブジェクトに、以下のフィールドが追加されました。
---

Messaging APIでは、ユーザーが2つの画像を同時に送信すると、LINEプラットフォームからボットサーバーにWebhookイベントが2つ送られます。このWebhookに含まれる画像のメッセージオブジェクトに、以下のフィールドが追加されました。

- `imageSet.id`：画像セットID
- `imageSet.index`：同時に送信した画像セットの中で、何番目の画像かを示す`1`から始まるインデックス
- `imageSet.total`：同時に送信した画像の総数

従来は、2つの画像が同時に送られたものか、それとも続けて2度送られたものかが判別できませんでした。しかし今回追加されたこれらのフィールドにより、ユーザーが複数画像を同時に送信したことをWebhookで判別できるようになりました。

```json
// 2つの画像を同時に送った場合のメッセージオブジェクト（1番目の画像）
"message": {
    "type": "image",
    "id": "354718705033693859",
    "contentProvider": {
        "type": "line"
    },
    "imageSet": {
        "id": "E005D41A7288F41B65593ED38FF6E9834B046AB36A37921A56BC236F13A91855",
        "index": 1,
        "total": 2
    }
}

// 2つの画像を同時に送った場合のメッセージオブジェクト（2番目の画像）
"message": {
    "type": "image",
    "id": "354718705033693861",
    "contentProvider": {
        "type": "line"
    },
    "imageSet": {
        "id": "E005D41A7288F41B65593ED38FF6E9834B046AB36A37921A56BC236F13A91855",
        "index": 2,
        "total": 2
    }
}
```

詳しくは、『Messaging APIリファレンス』のメッセージイベントの「[画像](/reference/messaging-api/#wh-image)」を参照してください。
