---
title: リッチメニューの概要
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/messaging-api/rich-menus-overview
__hash__: cuc6CVxyAzZR5RFHOqGImvlACBoT5syt-Gnn9EeIxLU
seo:
  title: リッチメニューの概要
  description: null
---

# :page-title

:markdown-controlsこのページでは、LINE公式アカウントのトーク画面で表示される、リッチメニューについて説明します。

## リッチメニューとは

リッチメニューはLINE公式アカウントのトーク画面下部に表示されるメニュー機能です。リッチメニューに、LINE公式アカウントの各機能や、外部サイトや予約ページなどへのリンクを設定することで、よりリッチなユーザー体験を提供できます。[リッチメニューの構造](#rich-menu-structure)に基づいて、[リッチメニューを作成するツール](#choosing-tool-for-creating-rich-menus)を使ってみましょう。

::admonition{title="リッチメニューはデスクトップ版では表示されません" type="note"}
リッチメニューは、デスクトップ版（macOS、Windows）のLINEでは表示されません。
::

## リッチメニューの構造

リッチメニューは、リッチメニュー画像、タップ領域、およびトークルームメニューで構成されます。

![](/media/messaging-api/rich-menu/bot-demo-rich-menu-image.png){className="[\"w-fix-240\"]"}

1. リッチメニュー画像：メニューの項目を含む1枚の画像（JPEGまたはPNG）ファイルです。画像の要件について詳しくは、『Messaging APIリファレンス』の「[リッチメニューの画像の要件](/reference/messaging-api/#upload-rich-menu-image-requirements)」を参照してください。
2. タップ領域：メニューの項目として分割した領域。ポストバックイベントを返したり、URLを開いたりするさまざまなアクションを各項目に設定します。
3. トークルームメニュー：リッチメニューの開閉に使うメニューです。トークルームメニューのテキストは、カスタマイズできます。

## リッチメニューを設定するツール

リッチメニューの設定には、[LINE Official Account Manager](#creating-a-rich-menu-with-the-line-manager) 、または[Messaging API](#creating-a-rich-menu-using-the-messaging-api)を使用します。ニーズに合わせてツールを選びましょう。

::admonition{title="1つのリッチメニューに使用できるのは1つのツールのみ" type="note"}
1つのリッチメニューの取得や編集に、2つのツールを使うことはできません。LINE Official Account Managerで作成したリッチメニューは、LINE Official Account Managerでのみ取得と編集ができます。また、Messaging APIで作成したリッチメニューについては、LINE Official Account Managerは使用できません。
::

| ツール                                                                              | 利点                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"} | - 開発期間が短く済みます - 操作が簡単なGUIで開発できます - 表示期間を設定できます - 表示された回数やクリック率などの統計情報が確認できます  詳しくは、『LINEヤフー for Business』の「[リッチメニューの活用方法](https://www.lycbiz.com/jp/column/line-official-account/technique/20180731-01/){rel="[\"nofollow\"]"}」および「[分析 - リッチメニュー](https://www.lycbiz.com/jp/manual/OfficialAccountManager/insight_rich-menus/){rel="[\"nofollow\"]"}」を参照してください。        |
| Messaging API                                                                    | - 高度なカスタマイズが可能です - [ポストバックアクション](/reference/messaging-api/#postback-action)や[日時選択アクション](/reference/messaging-api/#datetime-picker-action)などの[アクションオブジェクト](/reference/messaging-api/#action-objects)を利用できます - [リッチメニューでタブ切り替えを行う](/docs/messaging-api/switch-rich-menus/)ことができます  リッチメニューの機能を実際に使って試したい場合は、「[リッチメニューを試す](/docs/messaging-api/try-rich-menu/)」を参照してください。 |

なおMessaging APIで設定したリッチメニューについては、表示された回数やクリック率などの統計情報は取得できません。

### LINE Official Account Managerでリッチメニューを設定する

LINE Official Account Managerではデフォルトのリッチメニューを設定できます。より[優先順位](#rich-menu-display)の高いリッチメニューが既に設定されていなければ、ユーザーにはデフォルトのリッチメニューが表示されます。

LINE Official Account Managerを使うと、あらかじめタップ領域が定義されたテンプレートをもとに、GUIを使ってタップ領域を設定できます。詳しくは、[LINE Official Account Managerのマニュアル](https://www.lycbiz.com/jp/manual/OfficialAccountManager/rich-menus/){rel="[\"nofollow\"]"}を参照してください。

### Messaging APIでリッチメニューを設定する

Messaging APIでリッチメニューを設定する場合は、必要となるエンドポイントを順番に呼び出す必要があります。基本的には以下の手順で行います。

1. リッチメニューの画像を準備する。
2. [リッチメニューを作成する](/reference/messaging-api/#create-rich-menu)エンドポイントを使用する。
3. [リッチメニューの画像をアップロードする](/reference/messaging-api/#upload-rich-menu-image)エンドポイントを使用する。
4. [デフォルトのリッチメニューを設定する](/reference/messaging-api/#set-default-rich-menu)エンドポイントを使用する。

Messaging APIでリッチメニューを設定する方法について詳しくは、「[リッチメニューを使う](/docs/messaging-api/using-rich-menus/)」を参照してください。

## リッチメニューの適用範囲

リッチメニューには、2つの適用範囲があり、それぞれで設定できるツールが異なります。

| 適用範囲                                          | 設定できるツール                                        |
| --------------------------------------------- | ----------------------------------------------- |
| LINE公式アカウントとのトーク画面を開いたすべてのユーザー（デフォルトのリッチメニュー） | - LINE Official Account Manager - Messaging API |
| ユーザー単位（ユーザー単位のリッチメニュー）                        | Messaging API                                   |

適用範囲と設定したツールによって、リッチメニューの表示優先度や、ユーザーのトーク画面に反映されるタイミングが異なります。

- [リッチメニューの表示優先度](#rich-menu-display)
- [リッチメニューの設定変更が反映されるタイミング](#when-setting-change-takes-effect)

### リッチメニューの表示優先度

リッチメニューは、設定したツールと適用範囲によって表示優先度が異なります。リッチメニューの表示優先順位（1が最優先で表示）は以下のとおりです。

1. Messaging APIで設定するユーザー単位のリッチメニュー
2. Messaging APIで設定するデフォルトのリッチメニュー
3. [LINE Official Account Manager](https://manager.line.biz){rel="[\"nofollow\"]"}で設定するデフォルトのリッチメニュー

### リッチメニューの設定変更が反映されるタイミング

リッチメニューの設定を変更したとき、リッチメニューの適用範囲と設定したツールによって、ユーザーのトーク画面に反映されるタイミングが異なります。

| 適用範囲と設定したツール                                    | 反映されるタイミング                                                                                                             |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Messaging APIで設定するユーザー単位のリッチメニュー                | 即時。ただし、[ユーザーとのリンクを解除](/reference/messaging-api/#unlink-rich-menu-from-user)せずにリッチメニューを削除した場合は、トーク画面に再入室したときに削除が反映されます。 |
| Messaging APIで設定するデフォルトのリッチメニュー                 | トーク画面に再入室したとき。変更が反映されるまで、1分程度掛かる場合があります。                                                                               |
| LINE Official Account Managerで設定するデフォルトのリッチメニュー | トーク画面に再入室したとき。                                                                                                         |

### LINE公式アカウントと友だちではないユーザーがトーク画面を開いた場合

LINE公式アカウントと友だちではないユーザーがトーク画面を開いた場合、LINE Official Account Managerもしくは、Messaging APIで設定したデフォルトのリッチメニューが表示されます。

なお、LINE公式アカウントと友だちではないユーザーに対して、ユーザー単位のリッチメニューはリンクできません。詳しくは、『Messaging APIリファレンス』の「[リッチメニューをリンクできる条件](/reference/messaging-api/#link-rich-menu-to-user-conditions)」を参照してください。

## リッチメニューのAPIリファレンス

- [リッチメニュー](/reference/messaging-api/#rich-menu)
- [ユーザー単位のリッチメニュー](/reference/messaging-api/#per-user-rich-menu)
- [リッチメニューエイリアス](/reference/messaging-api/#rich-menu-alias)
