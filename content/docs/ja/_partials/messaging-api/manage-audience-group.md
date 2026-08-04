---
title: Manage Audience Group
navigation: true
description: >-
  なお、オーディエンスは、LINE Official Account Managerでも作成できます。詳しくは、『LINEヤフー for
  Business』の「オーディエンス」を参照してください。
meta: '{}'
path: /ja/_partials/messaging-api/manage-audience-group
__hash__: eWuPCKX9ZAXOWAHkETSKCamNOtpHe8323NMl9-pnVuc
seo:
  description: >-
    なお、オーディエンスは、LINE Official Account Managerでも作成できます。詳しくは、『LINEヤフー for
    Business』の「オーディエンス」を参照してください。
---

なお、オーディエンスは、[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}でも作成できます。詳しくは、『LINEヤフー for Business』の「[オーディエンス](https://www.lycbiz.com/jp/manual/OfficialAccountManager/messages-audience/){rel="[\"nofollow\"]"}」を参照してください。

| オーディエンス                              | 作成方法                                                                                                                                                                                                                       |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ユーザーIDアップロード用のオーディエンス                | - [Messaging API](#create-upload-audience-group) - [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"} - [LINEポイントAD](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"} |
| メッセージクリックオーディエンス                     | - [Messaging API](#create-click-audience-group) - [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}                                                                                         |
| メッセージインプレッションオーディエンス                 | - [Messaging API](#create-imp-audience-group) - [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}                                                                                           |
| チャットタグオーディエンス                        | [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}                                                                                                                                           |
| 追加経路オーディエンス                          | [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}                                                                                                                                           |
| 予約オーディエンス                            | [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}                                                                                                                                           |
| リッチメニューインプレッションオーディエンス               | [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}                                                                                                                                           |
| リッチメニュークリックオーディエンス                   | [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}                                                                                                                                           |
| ウェブトラフィックオーディエンス（LINE Tag）           | - [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"} - [LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}                                                                           |
| ウェブトラフィックオーディエンス（計測タグ）               | [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}                                                                                                                                           |
| アプリイベントオーディエンス                       | [LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}                                                                                                                                                                |
| 動画視聴オーディエンス                          | [LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}                                                                                                                                                                |
| 画像クリックオーディエンス                        | [LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}                                                                                                                                                                |
| LINE Beacon Networkインプレッションオーディエンス * | [LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}                                                                                                                                                                |

* LINE Beacon Networkインプレッションオーディエンスは、台湾のユーザーが作成したLINE公式アカウントの場合のみ利用できます。

::admonition{title="注意" type="note"}
- 日本（JP）、タイ（TH）、台湾（TW）のユーザーが作成したLINE公式アカウントの場合のみ、オーディエンスを利用できます。
- Messaging APIでは、次のタイプのオーディエンスは作成できません。

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
