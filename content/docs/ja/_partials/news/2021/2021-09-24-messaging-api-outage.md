---
title: 【復旧済み】Messaging API障害のお知らせ
navigation: true
description: >-
  Messaging
  APIにおいて以下の障害が発生しておりましたが、問題を修正したバージョンのLINEをリリースいたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
meta: >-
  {"date":"2021-09-24 00:00 UTC","tags":"Outage report, Messaging
  API","locale":"ja"}
path: /ja/_partials/news/2021/2021-09-24-messaging-api-outage
__hash__: fOBKb5owGMMjtWSAoWkTqSgO4b2vgdviYTqtZJJZQ6s
seo:
  title: 【復旧済み】Messaging API障害のお知らせ
  description: >-
    Messaging
    APIにおいて以下の障害が発生しておりましたが、問題を修正したバージョンのLINEをリリースいたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
---

Messaging APIにおいて以下の障害が発生しておりましたが、問題を修正したバージョンのLINEをリリースいたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2021年9月13日 〜 2021年9月24日

### 原因

iOS版およびiPadOS版LINEのバグ

### 影響

LINE公式アカウントから[イメージマップメッセージ](/docs/messaging-api/message-types/#imagemap-messages)を送信した際に、画像内の特定の領域をユーザーがタップすると、LINEが強制終了する事象が発生していました。

### 状況

以下の条件をすべて満たす場合に、LINEが強制終了する事象が発生します。

- ユーザーがiOS版またはiPadOS版のLINEを利用している
- ユーザーが利用しているLINEのバージョンが`11.16.0`である
- LINE公式アカウントから、Messaging APIを用いて[イメージマップメッセージ](/reference/messaging-api/#imagemap-message)を送信した
- 送信したイメージマップメッセージの`actions`プロパティ内で、[イメージマップURIアクションオブジェクト](/reference/messaging-api/#imagemap-uri-action-object)を指定していた
- アクション内に複数のオブジェクトがあった場合は、イメージマップURIアクションオブジェクトを、それ以外のオブジェクトよりも後に定義していた
- イメージマップURIアクションオブジェクトの領域をユーザーがタップした

こちらの条件に当てはまる場合は、ユーザーが利用しているLINEのバージョンを`11.16.1`以降にアップデートすることで問題が解消いたします。

なお[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}から送信した[リッチメッセージ](https://www.linebiz.com/jp/manual/OfficialAccountManager/rich-messages/){rel="[\"nofollow\"]"}は、本事象の対象外です。

#### 影響を受ける`actions`プロパティの例

```json
"actions": [
    {
        "type": "message",
        "text": "Hello",
        "area": {
            "x": 520,
            "y": 586,
            "width": 520,
            "height": 454
        }
    },
    {
        "type": "uri",
        "linkUri": "https://example.com/",
        "area": {
            "x": 0,
            "y": 586,
            "width": 520,
            "height": 454
        }
    }
]
```

#### 影響を受けない`actions`プロパティの例

```json
"actions": [
    {
        "type": "uri",
        "linkUri": "https://example.com/",
        "area": {
            "x": 0,
            "y": 586,
            "width": 520,
            "height": 454
        }
    },
    {
        "type": "message",
        "text": "Hello",
        "area": {
            "x": 520,
            "y": 586,
            "width": 520,
            "height": 454
        }
    }
]
```

LINEは今後もお客様への一層のサービス向上に取組んでまいります。
何卒ご理解を賜りますよう、よろしくお願い申し上げます。
