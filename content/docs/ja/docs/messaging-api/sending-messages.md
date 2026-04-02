---
title: メッセージを送信する
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /ja/docs/messaging-api/sending-messages
__hash__: WcPz4UwVL1tlw_KxuhExjoozAKKasyBT3UNmj4ONFHc
seo:
  title: メッセージを送信する
  description: null
---

# :page-title

:markdown-controlsMessaging APIを使用すると、ボットからユーザーにメッセージを送信できます。任意のタイミングでユーザーにメッセージを送信したり、ユーザーからのメッセージに対して、応答メッセージで返信したりできます。また、さまざまなタイプのメッセージを利用できます。

| dummy      | dummy                                                                                                                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| メッセージの送信方法 | - 応答メッセージ - プッシュメッセージ：1対1 - マルチキャストメッセージ：1対多（ユーザーID指定） - ナローキャストメッセージ：1対多（絞り込み配信） - ブロードキャストメッセージ：1対多（すべての友だち）                                                                                             |
| メッセージタイプ   | - テキストメッセージ - テキストメッセージ（v2） - スタンプメッセージ - 画像メッセージ - 動画メッセージ - 音声メッセージ - 位置情報メッセージ - イメージマップメッセージ - テンプレートメッセージ - Flex Message  メッセージタイプについて詳しくは、「[メッセージタイプ](/docs/messaging-api/message-types/)」を参照してください。 |

## メッセージの送信方法

Messaging APIでは、大きく分けて2種類の送信方法を利用できます。

- [ユーザーからのメッセージやアクションに応答する（応答メッセージ）](#reply-messages)
- [任意のタイミングでメッセージを送信する](#send-messages-at-any-time)

### ユーザーからのメッセージやアクションに応答する（応答メッセージ）

ユーザーがLINE公式アカウントを友だち追加したり、LINE公式アカウントにメッセージを送ったりしたときに、Messaging APIで応答できます。`replyToken`プロパティには、ユーザーのアクションによる[Webhookイベント](/reference/messaging-api/#webhook-event-objects)を通じて受け取った応答トークンを設定します。1回のリクエストで[メッセージオブジェクト](/reference/messaging-api/#message-objects)を最大5つまで送信できます。

::admonition{title="応答メッセージの準備中にローディングのアニメーションを表示できます" type="tip"}
LINE公式アカウントがユーザーからのメッセージを受信したあと、メッセージの準備や予約の処理などで返答に少し時間がかかることがあります。そのような場合に、ユーザーにそのまま待機しておいて欲しいことをローディングのアニメーションで視覚的に伝えることができます。詳しくは、「[ローディングのアニメーションを表示する](/docs/messaging-api/use-loading-indicator/)」を参照してください。
::

応答メッセージのリクエスト例は以下のとおりです。

```sh
curl -v -X POST https://api.line.me/v2/bot/message/reply \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
    "replyToken":"nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
    "messages":[
        {
            "type":"text",
            "text":"Hello, user"
        },
        {
            "type":"text",
            "text":"May I help you?"
        }
    ]
}'
```

詳しくは、『Messaging APIリファレンス』の「[応答メッセージを送る](/reference/messaging-api/#send-reply-message)」を参照してください。

### 任意のタイミングでメッセージを送信する

以下のいずれかの方法で、任意のタイミングでユーザーにメッセージを送信できます。

| メッセージの送信方法                                                        | 説明                                                                                                                       |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [プッシュメッセージ](/reference/messaging-api/#send-push-message)          | ユーザー、グループトーク、複数人トークにメッセージを送信します。たとえば、ショッピングサイトで商品を購入したユーザーに対して、商品の発送を通知する場合に使用できます。                                      |
| [マルチキャストメッセージ](/reference/messaging-api/#send-multicast-message)  | 一度に複数のユーザーにメッセージを送信します。ナローキャストメッセージとの違いは、ユーザーIDで送信対象を指定する点です。たとえば、ショッピングサイトのユーザー全員に対して、新機能を通知する場合に使用できます。                |
| [ナローキャストメッセージ](#send-narrowcast-message)                          | 一度に複数のユーザーにメッセージを送信します。マルチキャストメッセージとの違いは、ユーザーの属性情報やリターゲティング（オーディエンス）を利用して送信対象を指定する点です。ユーザーの属性情報には、性別、年齢、OSの種類、地域などがあります。 |
| [ブロードキャストメッセージ](/reference/messaging-api/#send-broadcast-message) | LINE公式アカウントと友だちになっているすべてのユーザーに、同じメッセージを送信できます。                                                                           |

1回のリクエストで[メッセージオブジェクト](/reference/messaging-api/#message-objects)を最大5つまで送信できます。

::admonition{title="メッセージ通数のカウント方法について" type="tip"}
メッセージ通数は、メッセージの送信対象となった人数でカウントされます。1回のリクエストで指定した[メッセージオブジェクト](/reference/messaging-api/#message-objects)の件数は、メッセージ通数には影響しません。たとえば、1回のリクエストで4つのメッセージオブジェクトを含むプッシュメッセージを5人いるトークルームに送ったとします。この場合、メッセージ通数は5通です。

LINE公式アカウントをブロックしているユーザーIDや、存在しないユーザーIDなど、メッセージが届かないユーザーに送られたメッセージは、カウントから除外されます。
::

プッシュメッセージのリクエストの例は以下のとおりです。

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
    "to": "U4af4980629...",
    "messages":[
        {
            "type":"text",
            "text":"Hello, world1"
        },
        {
            "type":"text",
            "text":"Hello, world2"
        }
    ]
}'
```

## ナローキャストメッセージを送信する

ナローキャストメッセージでは、複数のユーザーに、任意のタイミングでメッセージを送信できます。グループトークや複数人トークにはナローキャストメッセージを送信できません。ナローキャストメッセージでは、送信対象を年齢、性別、OS、地域などの属性情報やリターゲティング（オーディエンス）を利用して指定します。

ナローキャストメッセージは、以下の流れで送信します。

1. [オーディエンスやリクエストIDを準備する](#prepare-audience-or-request-id)
2. [ナローキャストメッセージの送信を開始する](#send-narrowcast-message-detail)
3. [ナローキャストメッセージの進行状況を確認する](#get-narrowcast-progress-status)

### オーディエンスやリクエストIDを準備する

ナローキャストメッセージを送信するには、送信対象に応じて、オーディエンスかリクエストIDを用意する必要があります。ナローキャストメッセージは、論理演算子（AND、OR、NOT）を使用して送信対象を合成できます。たとえば、「メッセージAを受信したユーザー」と「メッセージBのURLをクリックしたユーザー」をOR演算子で送信対象に含めることができます。

| 送信対象                                                                                                             | 準備する情報                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LINE公式アカウントを友だち追加したすべてのユーザー                                                                                      | なし                                                                                                                                                                                          |
| :glossary-tooltip[[ユーザーID](/glossary/#user-id)]{glossary-id="user-id"}やIFA（Identifier For Advertisers）で特定できるユーザー | - [ユーザーIDアップロード用のオーディエンス（JSON指定）](/reference/messaging-api/#create-upload-audience-group) - [ユーザーIDアップロード用のオーディエンス（ファイル指定）](/reference/messaging-api/#create-upload-audience-group-by-file) |
| 配信したメッセージのURLをクリックしたユーザー                                                                                         | [メッセージクリックオーディエンス](/reference/messaging-api/#create-click-audience-group)                                                                                                                   |
| 配信したメッセージを開封したユーザー                                                                                               | [メッセージインプレッションオーディエンス](/reference/messaging-api/#create-imp-audience-group)                                                                                                                 |
| ナローキャストメッセージを受信したユーザー                                                                                            | 過去に配信したナローキャストメッセージのリクエストIDを、[レシピエントオブジェクト](/reference/messaging-api/#narrowcast-recipient)の再配信オブジェクトで指定します。                                                                                |
| チャットに特定のタグが付いているユーザー                                                                                             | チャットタグオーディエンス。[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で作成してください。                                                                                    |
| 特定の経路でLINE公式アカウントを友だち追加したユーザー                                                                                    | 追加経路オーディエンス。[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で作成します。                                                                                         |
| 来店予約したユーザー                                                                                                       | 予約オーディエンス。[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で作成してください。                                                                                        |
| リッチメニューを表示したユーザー                                                                                                 | リッチメニューインプレッションオーディエンス。[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で作成します。                                                                              |
| リッチメニューをクリックしたユーザー                                                                                               | リッチメニュークリックオーディエンス。[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で作成します。                                                                                  |
| LINE Tagのトラッキング情報で絞り込んだユーザー                                                                                      | ウェブトラフィックオーディエンス（LINE Tag）。[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}や[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}で作成します。              |
| 計測タグのトラッキング情報で絞り込んだユーザー                                                                                          | ウェブトラフィックオーディエンス（計測タグ）。[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で作成します。                                                                              |
| 送信した動画を視聴したユーザー                                                                                                  | 動画視聴オーディエンス。[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}で作成します。                                                                                                              |
| アプリ内のイベントに参加したユーザー（アプリを開く、アプリ内で購入するなど）                                                                           | アプリイベントオーディエンス。[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}で作成します。                                                                                                           |
| 以前に送信した画像をクリックしたユーザー                                                                                             | 画像クリックオーディエンス。[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}で作成します。                                                                                                            |
| [ビーコンバナー](/docs/messaging-api/using-beacons/#beacon-banner)が表示されたユーザー                                            | LINE Beacon Networkインプレッションオーディエンス。[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}で作成します。なお、LINE Beacon Networkインプレッションオーディエンスは、台湾のユーザーが作成したLINE公式アカウントの場合のみ利用できます。             |

::admonition{title="注意" type="note"}
Messaging APIでは、次のタイプのオーディエンスは作成できません。

- チャットタグオーディエンス
- 追加経路オーディエンス
- 予約オーディエンス
- リッチメニューインプレッションオーディエンス
- リッチメニュークリックオーディエンス
- ウェブトラフィックオーディエンス（LINE Tag）
- ウェブトラフィックオーディエンス（計測タグ）
- アプリイベントオーディエンス
- 動画視聴オーディエンス
- 画像クリックオーディエンス
- LINE Beacon Networkインプレッションオーディエンス
::

オーディエンスを作成したら、以下の手順に従って、配信に利用できることを確認します。

#### オーディエンスが配信に利用できることを確認する

オーディエンスの作成は、バックグラウンドで非同期に行われます。ナローキャストメッセージをオーディエンスに送信する前に、オーディエンスのステータスが`READY`（配信に利用可能）であることを確認してください。

オーディエンスのステータスは、以下のエンドポイントで確認できます。

```sh
curl -v -X GET https://api.line.me/v2/bot/audienceGroup/{audienceGroupId} \
-H 'Authorization: Bearer {channel access token}'
```

レスポンスの`status`プロパティが、`READY`（配信に利用可能）であれば、オーディエンスにナローキャストメッセージを送信できます。

オーディエンスのステータスを確認する方法について詳しくは、『Messaging APIリファレンス』の「[オーディエンスの情報を取得する](/reference/messaging-api/#get-audience-group)」を参照してください。

### ナローキャストメッセージの送信を開始する

ナローキャストメッセージを送信する際に、以下のオブジェクトを組み合わせることで、送信対象を絞り込むことができます。

- [レシピエントオブジェクト](#recipient-object)
  - [オーディエンスオブジェクト](#audience-object)
  - [再配信オブジェクト](#redelivery-object)
- [デモグラフィックフィルターオブジェクト](#demographic-filter-object)
- [演算子オブジェクト](#operator-object)
- [リミットオブジェクト](#limit-object)

たとえば、「2つのオーディエンスどちらにも含まれている、15〜20歳以外の女性」を送信対象とするといった指定ができます。論理演算子（AND、OR、NOT）でオブジェクトを組み合わせることが可能です。

![](/media/messaging-api/narrowcast-message/narrow_cast.png){className="[\"w-fix-520\"]"}

なお、送信できるメッセージ数には月単位の上限があります。上限を超えて送信しようとすると、配信に失敗します。`limit.upToRemainingQuota`プロパティを`true`に設定することで、送信するメッセージ数を上限内に保つことができます。送信可能なメッセージ数の上限については、「[Messaging APIの料金](/docs/messaging-api/pricing/)」を参照してください。

::admonition
---
title: ナローキャストメッセージの配信が完了するまでは他のメッセージの送信に失敗する場合があります
type: note
---
ナローキャストメッセージの配信時には、実際に配信されるメッセージ通数にかかわらず当月分の上限目安をすべて予約することがあります。上限目安がすべて予約されると、ナローキャストメッセージの配信が完了するまでは一時的に上限目安を超過した状態になります。その状態で他のメッセージを送信すると、`You have reached your monthly limit.`が返されてメッセージの送信に失敗します。

詳しくは、『Messaging APIリファレンス』の「[当月に配信できるメッセージの残数に関する注意事項](/reference/messaging-api/#send-narrowcast-message-cautions)」を参照してください。
::

#### レシピエントオブジェクト

ナローキャストメッセージを送信する際は、リクエストボティの`messages`プロパティにメッセージの内容を、`recipient`プロパティに送信対象を指定します。`recipient`プロパティを省略すると、LINE公式を友だち追加したすべてのユーザーが送信対象になります。

レシピエントオブジェクトには、[オーディエンスオブジェクト](#audience-object)もしくは[再配信オブジェクト](#redelivery-object)を指定します。

##### オーディエンスオブジェクト

ナローキャストメッセージをオーディエンスに送信するには、リクエストボディの`recipient`プロパティにオーディエンスオブジェクトを設定します。オーディエンスオブジェクトを作成するには、オブジェクトの`type`プロパティに`"audience"`を、`audienceGroupId`プロパティにオーディエンスIDを指定します。オーディエンスがない場合は「[オーディエンス管理](/reference/messaging-api/#manage-audience-group)」のAPIを使用して作成してください。

オーディエンスオブジェクトの例は以下のとおりです。

```json
{
  "type": "audience",
  "audienceGroupId": 5614991017776
}
```

##### 再配信オブジェクト

既存のナローキャストメッセージを受信したユーザーにナローキャストメッセージを送信するには、リクエストボディの`recipient`プロパティに再配信オブジェクトを設定します。再配信オブジェクトでは、`type`プロパティが`"redelivery"`に設定されています。`requestId`プロパティには、ナローキャスト配信時に取得したリクエストID（`X-Line-Request-Id`）を設定します。

再配信オブジェクトの例は以下のとおりです。

```json
{
  "type": "redelivery",
  "requestId": "5b59509c-c57b-11e9-aa8c-2a2ae2dbcce4"
}
```

![](/media/news/redeliver-narrowcast.svg){className="[\"bg-border\"]"}

::admonition{title="「送信対象が少なすぎる」というエラーについて" type="note"}
過去に送信したメッセージのリクエストIDを再配信オブジェクトで指定してメッセージを送ろうとしたが、`errorCode`の`2`（送信対象が少なすぎたためエラーになったことを意味する）が返された場合は、次のような原因が考えられます。

- 該当のナローキャストメッセージの送信後に、送信対象のユーザーの一部がLINE公式アカウントをブロックしたため、送信対象の人数が減った。
- [演算子オブジェクト](#operator-object)（ANDやNOT）で、他のオーディエンスオブジェクトやデモグラフィックフィルターオブジェクトと組み合わせて条件を絞り込んだ結果、送信対象の人数が減った。

送信対象のユーザーの属性を推測できないようにするために、送信対象が一定数よりも少ない場合はナローキャストメッセージを送信できません。詳しくは、『Messaging APIリファレンス』の「[属性情報やオーディエンスを利用したメッセージ送信の制限事項](/reference/messaging-api/#send-narrowcast-message-restrictions)」を参照してください。
::

オーディエンスオブジェクトや再配信オブジェクトについて詳しくは、『Messaging APIリファレンス』の「[レシピエントオブジェクト](/reference/messaging-api/#narrowcast-recipient)」を参照してください。

#### デモグラフィックフィルターオブジェクト

デモグラフィックフィルターオブジェクト（`filter.demographic`プロパティ）を指定すると、ユーザーの属性情報（性別や年齢、OSの種類、地域など）を使用して、**セグメント配信**ができます。

以下は、性別を使用してフィルタリングするデモグラフィックフィルターオブジェクトの例です。

```json
{
  "type": "gender",
  "oneOf": ["male", "female"]
}
```

詳しくは、『Messaging APIリファレンス』の「[デモグラフィックフィルターオブジェクト](/reference/messaging-api/#narrowcast-demographic-filter)」を参照してください。

#### 演算子オブジェクト

演算子オブジェクトの積集合（AND）、和集合（OR）、差集合（NOT）を利用することで、レシピエントオブジェクトおよびデモグラフィックフィルターオブジェクトの複数の条件を組み合わせて送信対象を指定できます。

![](/media/messaging-api/narrowcast-message/operator_object.png){className="[\"w-fix-800\"]"}

以下は、演算子オブジェクトで指定したレシピエントオブジェクトの例です。

```json
"recipient": {
    "type": "operator",
    "and": [
        {
            "type": "audience",
            "audienceGroupId": 5614991017776
        },
        {
            "type": "operator",
            "not": {
                "type": "redelivery",
                "requestId": "5b59509c-c57b-11e9-aa8c-2a2ae2dbcce4"
            }
        }
    ]
}
```

::admonition{title="演算子オブジェクトは入れ子（ネスト）構造で送信対象を指定できます" type="tip"}
レシピエントオブジェクトおよびデモグラフィックフィルターオブジェクトは、演算子オブジェクトを利用して入れ子（ネスト）構造で送信対象を指定できます。演算子オブジェクトは、ネストの深い階層から優先して適用されます。

以下の図では、送信対象は「**AかつBかつEに当てはまるユーザーのうち、CかつDであるユーザーを除く**（`AudienceA AND AudienceB AND NOT (AudienceC AND AudienceD) AND AudienceE`）」として解釈されます。

![](/media/messaging-api/narrowcast-message/operator_object_nest_sample.png){className="[\"w-fix-400\"]"}

```json
{
    "type": "operator",
    "and": [
        {
            "type": "audience",
            "audienceGroupId": AudienceA
        },
        {
            "type": "audience",
            "audienceGroupId": AudienceB
        },
        {
            "type": "operator",
            "not": {
                "type": "operator",
                "and": [
                    {
                       "type": "audience",
                       "audienceGroupId": AudienceC
                    },
                    {
                       "type": "audience",
                       "audienceGroupId": AudienceD
                    },
                 ]
            }
        },
        {
            "type": "audience",
            "audienceGroupId": AudienceE
        },
    ]
}
```
::

#### リミットオブジェクト

リミットオブジェクトを指定すると、ナローキャストメッセージの最大送信数を制限できます。なお送信対象が制限された場合、送信先のユーザーは無作為に抽出されます。

リミットオブジェクトの例は以下のとおりです。

```json
{
  "max": 100,
  "upToRemainingQuota": true,
  "forbidPartialDelivery": true
}
```

詳しくは、『Messaging APIリファレンス』の「[リミットオブジェクト](/reference/messaging-api/#send-narrowcast-limit)」を参照してください。

##### リミットオブジェクトによる最大送信数の制御

リミットオブジェクトによる最大送信数の制御の例は以下のとおりです。

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

### ナローキャストメッセージのリクエストの例

たとえば、以下の条件のユーザーにナローキャストメッセージを送信したいとします。

- オーディエンス（オーディエンスID:`5614991017776`）に属している
- ナローキャストメッセージ（リクエストID：`5b59509c-c57b-11e9-aa8c-2a2ae2dbcce4`）を受信しなかった
- 年齢20〜25歳の男女
- 秋田県か愛知県在住
- 友だち期間が7日〜30日
- 年齢35〜40歳の女性（男性を除外）

上記で指定した送信対象にナローキャストメッセージを送るリクエストの例は以下のとおりです。

```sh
curl -v -X POST https://api.line.me/v2/bot/message/narrowcast \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d '{
    "messages": [
        {
            "type": "text",
            "text": "test message"
        }
    ],
    "recipient": {
        "type": "operator",
        "and": [
            {
                "type": "audience",
                "audienceGroupId": 5614991017776
            },
            {
                "type": "operator",
                "not": {
                    "type": "redelivery",
                    "requestId": "5b59509c-c57b-11e9-aa8c-2a2ae2dbcce4"
                }
            }
        ]
    },
    "filter": {
        "demographic": {
            "type": "operator",
            "or": [
                {
                    "type": "operator",
                    "and": [
                        {
                            "type": "gender",
                            "oneOf": [
                                "male",
                                "female"
                            ]
                        },
                        {
                            "type": "age",
                            "gte": "age_20",
                            "lt": "age_25"
                        },
                        {
                            "type": "appType",
                            "oneOf": [
                                "android",
                                "ios"
                            ]
                        },
                        {
                            "type": "area",
                            "oneOf": [
                                "jp_23",
                                "jp_05"
                            ]
                        },
                        {
                            "type": "subscriptionPeriod",
                            "gte": "day_7",
                            "lt": "day_30"
                        }
                    ]
                },
                {
                    "type": "operator",
                    "and": [
                        {
                            "type": "age",
                            "gte": "age_35",
                            "lt": "age_40"
                        },
                        {
                            "type": "operator",
                            "not": {
                                "type": "gender",
                                "oneOf": [
                                    "male"
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },
    "limit": {
        "max": 100,
        "upToRemainingQuota": true
    }
}'
```

詳しくは、『Messaging APIリファレンス』の「[ナローキャストメッセージを送る](/reference/messaging-api/#send-narrowcast-message)」を参照してください。

### ナローキャストメッセージの進行状況を確認する

ナローキャストメッセージは、バックグラウンドで非同期に送信されます。そのため、ナローキャストメッセージが正しく送信できたかどうかを確認するには、以下の例のように「[ナローキャストメッセージの進行状況を取得する](/reference/messaging-api/#get-narrowcast-progress-status)」エンドポイントを実行します。

```sh
curl -v -X GET 'https://api.line.me/v2/bot/message/progress/narrowcast?requestId={request_id}' \
-H 'Authorization: Bearer {channel access token}'
```

## 引用メッセージを送信する

Messaging APIを使って、過去のメッセージを引用したメッセージを送信できます。

![](/media/messaging-api/sending-messages/quote-message.png){className="[\"border\",\"w-fix-480\"]"}

過去のメッセージを引用したメッセージを送るには、引用対象となるメッセージの引用トークン（`quoteToken`）を指定します。引用トークンの取得方法について詳しくは、「[引用トークンを取得する](/docs/messaging-api/get-quote-tokens/)」を参照してください。

**過去のメッセージを引用したプッシュメッセージのリクエストの例**

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
  "to": "U4af4980629...",
  "messages": [
    {
      "type": "text",
      "text": "Yes, you can.",
      "quoteToken": "yHAz4Ua2wx7..." // 引用対象となるメッセージの引用トークンを指定する
    }
  ]
}'
```

なお引用対象となるメッセージの送信が取り消されていた場合や、過去のトーク履歴が端末から削除されていた場合、引用されたメッセージは表示されません。

![存在しないメッセージが引用対象だった場合は「このメッセージはありません。」と表示される](/media/messaging-api/sending-messages/delete-quoted-message-en.png){className="[\"border\",\"w-fix-480\"]"}

引用トークンを使ってメッセージを送信できるのは、次のエンドポイントのみです。

- [応答メッセージを送る](/reference/messaging-api/#send-reply-message)
- [プッシュメッセージを送る](/reference/messaging-api/#send-push-message)

また引用トークンを使ってメッセージを送信するとき、使用できるのは以下のメッセージオブジェクトのみです。

- [テキストメッセージ](/docs/messaging-api/message-types/#text-messages)
- [テキストメッセージ（v2）](/docs/messaging-api/message-types/#text-messages-v2)
- [スタンプメッセージ](/docs/messaging-api/message-types/#sticker-messages)
