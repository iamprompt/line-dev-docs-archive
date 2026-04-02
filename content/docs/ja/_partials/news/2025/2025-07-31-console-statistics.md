---
title: 2025年11月末をもって、LINE Developersコンソールの統計情報タブで送信メッセージ数を確認できる機能の提供を終了します
navigation: true
description: >-
  2025年11月末をもって、LINE DevelopersコンソールのMessaging
  APIチャネルにおける［統計情報］タブで送信メッセージ数を確認できる機能の提供を終了します。
meta: >-
  {"date":"2025-07-31 00:00 UTC","tags":"console, end-of-life, messaging-api,
  options-for-corporate-customers","locale":"ja"}
path: /ja/_partials/news/2025/2025-07-31-console-statistics
__hash__: bu8c-MAXCLNAVm5hAVDMaL0IMuxrXpPlaLcpMSo5_9M
seo:
  title: 2025年11月末をもって、LINE Developersコンソールの統計情報タブで送信メッセージ数を確認できる機能の提供を終了します
  description: >-
    2025年11月末をもって、LINE DevelopersコンソールのMessaging
    APIチャネルにおける［統計情報］タブで送信メッセージ数を確認できる機能の提供を終了します。
---

2025年11月末をもって、[LINE Developersコンソール](/console/)のMessaging APIチャネルにおける［**統計情報**］タブで送信メッセージ数を確認できる機能の提供を終了します。

なお、送信メッセージ数はMessaging APIの「[メッセージの送信数を取得する](/reference/messaging-api/#get-number-of-delivery-messages)」エンドポイントで取得可能です。また、[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}の［**分析**］タブでも確認できます。

### 仕様変更予定日

2025年11月末

なお、この仕様変更の内容および日時は、予告なく変更される可能性があります。

### 詳細

LINE DevelopersコンソールのMessaging APIチャネルにおける［**統計情報**］タブで、以下に示す統計情報が削除されます。

- 送信メッセージ
- 電話番号を利用した送信メッセージ
- Identifier For Advertisersを利用した送信メッセージ（IFA）
- Phone

送信メッセージ数、電話番号を利用した送信メッセージ数を確認したい場合、今後はMessaging APIの「[メッセージの送信数を取得する](/reference/messaging-api/#get-number-of-delivery-messages)」エンドポイント、または[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}を利用してください。

なお、Identifier For Advertisersを利用した送信メッセージ（IFA）とPhoneについては、すでに機能の提供を終了しています。

また、上記の統計情報が削除されても、［**統計情報**］タブの［**エラー**］は引き続き機能を提供します。エラーについて詳しくは、『Messaging APIドキュメント』の「[Webhookのエラーの原因と統計情報を確認する](/docs/messaging-api/check-webhook-error-statistics/)」を参照してください。
