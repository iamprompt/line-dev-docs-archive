---
title: Messaging APIにおいて、ユーザーがクリップボードにテキストを簡単にコピーできるアクションが追加されました
navigation: true
description: >-
  Messaging
  APIにおいて、ユーザーがクリップボードにテキストをコピーするための「クリップボードアクション」を追加しました。今回の機能追加により、ユーザーがクーポンコードなどのテキストをより簡単にコピーできるようになりました。
meta: '{"date":"2024-02-05 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2024/2024-02-05-messaging-api-updated
__hash__: bm66yjBaHASVNt4fKPF7TkHg76qqxpwb9ii-VZw5aU0
seo:
  title: Messaging APIにおいて、ユーザーがクリップボードにテキストを簡単にコピーできるアクションが追加されました
  description: >-
    Messaging
    APIにおいて、ユーザーがクリップボードにテキストをコピーするための「クリップボードアクション」を追加しました。今回の機能追加により、ユーザーがクーポンコードなどのテキストをより簡単にコピーできるようになりました。
---

Messaging APIにおいて、ユーザーがクリップボードにテキストをコピーするための「[クリップボードアクション](/reference/messaging-api/#clipboard-action)」を追加しました。今回の機能追加により、ユーザーがクーポンコードなどのテキストをより簡単にコピーできるようになりました。

### クリップボードにテキストをコピーする

クリップボードアクションを、メッセージ内のボタンやリッチメニューなどのコントロールに指定します。ユーザーがコントロールをタップすると、クリップボードアクションの`clipboardText`プロパティに指定されたテキストが、端末のクリップボードにコピーされます。

![](/media/news/2024/clipbord-action-example-ja.png){className="[\"w-fix-360\",\"border\"]"}

**クリップボードアクションを使ったプッシュメッセージのリクエストの例**

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
    "to": "U4af4980629...",
     "messages":[
      {
        "type": "template",
        "altText": "クーポンコードをお送りします。",
        "template": {
          "type": "buttons",
          "thumbnailImageUrl": "{your coupon image}",
          "imageAspectRatio": "rectangle",
          "imageSize": "cover",
          "imageBackgroundColor": "#FFFFFF",
          "title": "限定クーポン配布中！",
          "text": "有効期限：2024年2月末日\nクーポンコード（3B48740B）を下記のボタンからコピーしてお使いください。",
          "actions": [
            {
              "type": "clipboard",
              "label": "コピー",
              "clipboardText": "3B48740B"  // クリップボードにコピーするテキストを指定する
            }
          ]
        }
      }
    ]
}'
```

詳しくは、『Messaging APIリファレンス』の「[クリップボードアクション](/reference/messaging-api/#clipboard-action)」を参照してください。

### 対象バージョン

今回追加された機能は、iOS版LINEまたはAndroid版LINEのバージョン`14.0.0`以降で動作します。
