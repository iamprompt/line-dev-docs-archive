---
title: 2025年11月26日をもって、LINE Developersコンソールの統計情報タブで送信メッセージ数を確認できる機能の提供を終了しました
navigation: true
description: >-
  2025年7月31日にお知らせしたとおり、2025年11月26日をもって、LINE DevelopersコンソールのMessaging
  APIチャネルにおける［統計情報］タブで送信メッセージ数を確認できる機能の提供を終了しました。
meta: >-
  {"date":"2025-11-26 00:00 UTC","tags":"console, end-of-life, messaging-api,
  options-for-corporate-customers","locale":"ja"}
path: /ja/_partials/news/2025/2025-11-26-console-statistics
__hash__: gIzB46Bkb0udYw0ZL5R35FxQHXzDTrvDhkBHTNUV898
seo:
  title: 2025年11月26日をもって、LINE Developersコンソールの統計情報タブで送信メッセージ数を確認できる機能の提供を終了しました
  description: >-
    2025年7月31日にお知らせしたとおり、2025年11月26日をもって、LINE DevelopersコンソールのMessaging
    APIチャネルにおける［統計情報］タブで送信メッセージ数を確認できる機能の提供を終了しました。
---

[2025年7月31日](/news/2025/07/31/console-statistics/)にお知らせしたとおり、2025年11月26日をもって、[LINE Developersコンソール](/console/)のMessaging APIチャネルにおける［**統計情報**］タブで送信メッセージ数を確認できる機能の提供を終了しました。

なお、送信メッセージ数はMessaging APIの「[メッセージの送信数を取得する](/reference/messaging-api/#get-number-of-delivery-messages)」エンドポイントで取得可能です。また、[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}の［**分析**］タブでも確認できます。

### 仕様変更日

2025年11月26日

### 詳細

LINE DevelopersコンソールのMessaging APIチャネルにおける［**統計情報**］タブで、以下に示す統計情報が削除されました。

- 送信メッセージ
- 電話番号を利用した送信メッセージ
- Identifier For Advertisersを利用した送信メッセージ（IFA）
- Phone

送信メッセージ数、電話番号を利用した送信メッセージ数を確認したい場合、今後はMessaging APIの「[メッセージの送信数を取得する](/reference/messaging-api/#get-number-of-delivery-messages)」エンドポイント、または[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}を利用してください。

なお、Identifier For Advertisersを利用した送信メッセージ（IFA）とPhoneについては、すでに機能の提供を終了しています。

また、上記の統計情報が削除された後も、［**統計情報**］タブの［**エラー**］については、名称を［**Webhookエラー**］タブに変えて引き続き提供します。Webhookエラーについて詳しくは、『Messaging APIドキュメント』の「[Webhookのエラーの原因と統計情報を確認する](/docs/messaging-api/check-webhook-error-statistics/)」を参照してください。
