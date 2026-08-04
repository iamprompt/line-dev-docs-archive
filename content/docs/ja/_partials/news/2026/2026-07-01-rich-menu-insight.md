---
title: Messaging APIで作成したリッチメニューの統計情報が取得できるようになりました
navigation: true
description: Messaging APIで作成したリッチメニューにおいて、表示された回数やクリック数などの統計情報が取得できるようになりました。
meta: >-
  {"date":"2026-07-01 01:00 UTC","tags":"messaging-api,
  line-official-account","locale":"ja"}
path: /ja/_partials/news/2026/2026-07-01-rich-menu-insight
__hash__: 37zWlVG6jOPBbPE6HWXk7fBcazbuJBaEnfCwzAJploI
seo:
  title: Messaging APIで作成したリッチメニューの統計情報が取得できるようになりました
  description: Messaging APIで作成したリッチメニューにおいて、表示された回数やクリック数などの統計情報が取得できるようになりました。
---

Messaging APIで作成したリッチメニューにおいて、表示された回数やクリック数などの統計情報が取得できるようになりました。

### 追加されたエンドポイント

- [リッチメニューの統計情報（合計）を取得する](/reference/messaging-api/#get-rich-menu-insight-summary)
- [リッチメニューの統計情報（日別）を取得する](/reference/messaging-api/#get-rich-menu-insight-daily)

従来は、LINE Official Account Managerで作成したリッチメニューのみ、「[分析 - リッチメニュー](https://www.lycbiz.com/jp/manual/OfficialAccountManager/insight_rich-menus/){rel="[\"nofollow\"]"}」で統計情報を確認することができましたが、今回の機能追加により、Messaging APIで作成したリッチメニューの統計情報も取得できるようになりました。

なお、Messaging APIで作成したリッチメニューの統計情報は、LINE Official Account Managerには表示されません。また、LINE Official Account Managerで作成したリッチメニューの統計情報も、Messaging APIでは取得できません。

### LINE Messaging API SDKの更新について

今回の機能追加に伴う[LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)の更新状況については、それぞれのSDKのリリースノートを参照してください。
