---
title: ナローキャストメッセージの送信対象を絞り込む条件に再配信オブジェクトが追加されました
navigation: true
description: |-
  Messaging APIで、ナローキャストメッセージの送信対象を絞り込む条件に再配信オブジェクトが追加されました。
  再配信オブジェクトを使うと、「過去に配信したナローキャストメッセージを受信したユーザー」を条件にしてメッセージが送れます。
meta: '{"date":"2020-09-15 01:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2020/2020-09-15-messaging-api-narrowcast-requestid
__hash__: 9YXnBXlKoqKFswVSs3vpTFI2fIeKV50ovnLXMJntLoo
seo:
  title: ナローキャストメッセージの送信対象を絞り込む条件に再配信オブジェクトが追加されました
  description: |-
    Messaging APIで、ナローキャストメッセージの送信対象を絞り込む条件に再配信オブジェクトが追加されました。
    再配信オブジェクトを使うと、「過去に配信したナローキャストメッセージを受信したユーザー」を条件にしてメッセージが送れます。
---

Messaging APIで、ナローキャストメッセージの送信対象を絞り込む条件に再配信オブジェクトが追加されました。
再配信オブジェクトを使うと、「過去に配信したナローキャストメッセージを受信したユーザー」を条件にしてメッセージが送れます。

- [再配信オブジェクトが追加されました](#redelivery-object)
- [演算子オブジェクト（AND、OR、NOT）を使って送信対象を設定する](#and-or-not)

### 再配信オブジェクトが追加されました

ナローキャストメッセージでは、通常は対象のLINE公式アカウントを友だち追加したすべてのユーザーが送信対象となります。ですが「[ナローキャストメッセージを送る](/reference/messaging-api/#send-narrowcast-message)」際に、送信対象として[レシピエントオブジェクト](/reference/messaging-api/#narrowcast-recipient)や[デモグラフィックフィルターオブジェクト](/reference/messaging-api/#narrowcast-demographic-filter)を指定することで、メッセージを送る相手をいくつかの条件で絞り込むことができます。

![narrowcast message](/media/messaging-api/narrowcast-message/narrow_cast.png){className="[\"w-fix-520\"]"}

このレシピエントオブジェクトで送信対象を絞り込む条件として、既存の[オーディエンスオブジェクト](/docs/messaging-api/sending-messages/#audience-object)に加えて、新たに[再配信オブジェクト](/docs/messaging-api/sending-messages/#redelivery-object)が指定できるようになりました。

再配信オブジェクトでリクエストIDを指定することで、「過去に配信したナローキャストメッセージを受信したユーザー」を送信対象にしてメッセージが送れます。

:interactive-svg{src="/media/news/redeliver-narrowcast.svg" border}::admonition{title="指定できるリクエストIDにはいくつかの条件があります" type="note"}
以下の条件をすべて満たすリクエストIDを、`requestId`プロパティで指定してください。

- ナローキャストメッセージの配信によって発行されたリクエストIDであること
- 過去7日間以内の配信であること
- 送信処理が完了していること（「[ナローキャストメッセージの進行状況を取得する](/reference/messaging-api/#get-narrowcast-progress-status)」で、レスポンスの`phase`プロパティの値が`succeeded`であること）
::

再配信オブジェクトについて詳しくは、以下を参照してください。

- [再配信オブジェクト](/docs/messaging-api/sending-messages/#redelivery-object)
- [レシピエントオブジェクト](/reference/messaging-api/#narrowcast-recipient)（Messaging APIリファレンス）

#### 演算子オブジェクト（AND、OR、NOT）を使って送信対象を設定する

既存のオーディエンスオブジェクトと同様に、再配信オブジェクトも演算子（AND、OR、NOT）を利用して複雑な条件で送信対象を設定できます。

以下は、「チャットに特定のタグが付いているユーザー」、かつ（AND）「過去に配信したナローキャストメッセージを受信したユーザー」を送信対象に設定した場合のレシピエントオブジェクトの例です。

![send target](/media/news/send_target.png){className="[\"w-fix-320\"]"}

```json
"recipient": {
    "type": "operator",
    "and": [
        {
            "type": "audience",
            "audienceGroupId": 5614991017776
        },
        {
            "type": "redelivery",
            "requestId": "5b59509c-c57b-11e9-aa8c-2a2ae2dbcce4"
        }
    ]
}
```

送信対象を絞り込んでナローキャストメッセージを送る方法について詳しくは、以下を参照してください。

- [属性情報やリターゲティングを利用して複数のユーザーに送信する（ナローキャストメッセージ）](/docs/messaging-api/sending-messages/#send-narrowcast-message)
- [ナローキャストメッセージを送る](/reference/messaging-api/#send-narrowcast-message)（Messaging APIリファレンス）
