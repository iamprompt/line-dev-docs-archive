---
title: オーディエンスを使う
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /ja/docs/messaging-api/using-audience
__hash__: y1qZ7gaGZMq_wIA7k2FCoZaNRLxWJ-ZnvjGT807moEw
seo:
  title: オーディエンスを使う
  description: null
---

# :page-title

:markdown-controlsオーディエンス機能を使うと、高度なターゲティングができます。たとえば、メッセージを開封したユーザーや、メッセージのURLをクリックしたユーザーのグループをターゲットにできます。

::admonition{title="注意" type="note"}
日本、タイ、台湾のユーザーが作成したLINE公式アカウントの場合のみ、オーディエンスを作成できます。
::

::admonition{title="Identifier for Advertisers（IFA）を使用するには" type="note"}
送信対象アカウントをIFAで指定することもできますが、この機能は、所定の申請等を行った法人ユーザーのみがご利用いただけます。自社のLINE公式アカウントでご利用になりたいお客様は、担当営業までご連絡いただくか、[弊社パートナー](https://www.lycbiz.com/jp/partner/sales/){rel="[\"nofollow\"]"}にお問い合わせください。
::

## オーディエンスを作成する

オーディエンスはMessaging APIで作成できます。作成できるオーディエンスは次のとおりです。

| オーディエンス                                                                         | 説明                                                                                                                  |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [ユーザーIDアップロード用のオーディエンス](/reference/messaging-api/#create-upload-audience-group) | :glossary-tooltip[[ユーザーID](/glossary/#user-id)]{glossary-id="user-id"}やIFA（Identifier For Advertisers）で特定できるユーザーの集合 |
| [メッセージクリックオーディエンス](/reference/messaging-api/#create-click-audience-group)       | 過去に配信したメッセージのURLをクリックしたユーザーの集合                                                                                      |
| [メッセージインプレッションオーディエンス](/reference/messaging-api/#create-imp-audience-group)     | 過去に配信したメッセージを開封したユーザーの集合                                                                                            |

なお、Messaging APIでは、次のタイプのオーディエンスは作成できません。

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

::admonition{title="同時処理数の制限があります" type="note"}
ユーザーIDアップロード用のオーディエンス作成およびオーディエンスへのユーザーID追加のエンドポイントでは、オーディエンスID（`audienceGroupId`）単位での同時処理数の制限があります。詳しくは、「[同時処理数の制限](/reference/messaging-api/#limit-on-the-number-of-concurrent-operations)」を参照してください。
::

## オーディエンスを使う

オーディエンスは、ナローキャストメッセージの送信で使用できます。詳しくは、「[ナローキャストメッセージを送信する](/docs/messaging-api/sending-messages/#send-narrowcast-message)」を参照してください。

## オーディエンスを共有する

Messaging APIと[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}では、同じLINE公式アカウントにおいて作成したオーディエンスを相互に利用できます。オーディエンスの相互利用に際して、必要な初期設定はありません。

Messaging APIとLINE Official Account Manager以外のツール（[LINE広告マネージャ](https://admanager.line.biz/){rel="[\"nofollow\"]"}など）でオーディエンスを相互に利用したい場合は、オーディエンスを共有する設定が必要です。オーディエンスを共有する方法について詳しくは、「[ビジネスマネージャーでオーディエンスを共有する](#audience-sharing-business-manager)」を参照してください。

| オーディエンスを作成するツール                     | オーディエンスを利用するツール                     | オーディエンスの利用可否 |
| ----------------------------------- | ----------------------------------- | ------------ |
| Messaging API                       | LINE Official Account Manager       | ✅            |
| LINE Official Account Manager       | Messaging API                       | ✅            |
| Messaging API                       | LINE Official Account Manager以外のツール | ✅ *1         |
| LINE Official Account Manager以外のツール | Messaging API                       | ✅ *1         |

*1 ビジネスマネージャでオーディエンスを共有すれば利用可能

### ビジネスマネージャーでオーディエンスを共有する

[ビジネスマネージャー](https://www.lycbiz.com/jp/service/business-manager/){rel="[\"nofollow\"]"}を使うことで、特定のオーディエンスを複数のサービス（LINE広告マネージャなど）で共有して、相互に利用できるようになります。

またビジネスマネージャーのオーディエンス共有機能を使うことで、同一プロバイダー配下のMessaging APIチャネル間でもオーディエンスを共有できます。ただしビジネスマネージャーでオーディエンスの共有を設定できるLINE公式アカウントは、認証済アカウントと:glossary-tooltip[[プレミアムアカウント](/glossary/#premium-account)]{glossary-id="premium-account"}のみです。

ビジネスマネージャーで共有されたオーディエンスの情報は、以下のエンドポイントで取得できます。

- [ビジネスマネージャーで共有されたオーディエンスのリストを取得する](/reference/messaging-api/#get-shared-audience-list)
- [ビジネスマネージャーで共有されたオーディエンスの情報を取得する](/reference/messaging-api/#get-shared-audience)

オーディエンスの共有方法について詳しくは、『ビジネスマネージャーマニュアル』の「[リソースの共有](https://www.lycbiz.com/jp/manual/BusinessManager/BMmaniyuarushare003/){rel="[\"nofollow\"]"}」を参照してください。

## オーディエンスの仕様について

オーディエンスの仕様は以下のとおりです。

| 項目                                                                                                                                                                                         | 仕様                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| チャネルあたりのオーディエンス数                                                                                                                                                                           | 最大1,000件                                                                           |
| オーディエンスの保存期間                                                                                                                                                                               | 最大180日間（15,552,000秒間）                                                              |
| ユーザーIDアップロード用のオーディエンスに1リクエストでアップロードできるユーザーIDまたはIFAの数                                                                                                                                       | - JSONを使用する場合：最大10,000件 - ファイルを使用する場合：最大1,500,000件                                 |
| オーディエンスあたりのユーザー数                                                                                                                                                                           | - ユーザーIDアップロード用のオーディエンス：制限なし - メッセージクリックオーディエンス：最小50件 - メッセージインプレッションオーディエンス：最小50件 |
| メッセージを配信してからリターゲティング用オーディエンス:sup[[1](#user-content-fn-retargeting-audiences){ariaDescribedBy="[\"footnote-label\"]" dataFootnoteRef="" #user-content-fnref-retargeting-audiences}]を作成できる期間 | 最大60日間（5,184,000秒間）                                                                |

ナローキャストメッセージの使用制限について詳しくは、『Messaging APIリファレンス』の「[属性情報やオーディエンスを利用したメッセージ送信の制限事項](/reference/messaging-api/#send-narrowcast-message-restrictions)」を参照してください。

::section
---
className:
  - footnotes
dataFootnotes: ''
---
## Footnotes

1. メッセージクリックオーディエンスおよびメッセージインプレッションオーディエンスを指します。 [↩](#user-content-fnref-retargeting-audiences){ariaLabel="Back to reference 1" className="[\"data-footnote-backref\"]" dataFootnoteBackref=""}
::
