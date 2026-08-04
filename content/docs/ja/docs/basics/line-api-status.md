---
title: LINEプラットフォームの稼働状況を確認する（LINE API Status）
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/basics/line-api-status
__hash__: G251L6AcydYl1ChaZ2YEypcE9ZnOwhygh3kk-lPLFaQ
seo:
  title: LINEプラットフォームの稼働状況を確認する（LINE API Status）
  description: null
---

# :page-title

:markdown-controlsLINEヤフー株式会社では、LINEプラットフォームの稼働状況や障害状況を確認できる[LINE API Status](https://api.line-status.info/){rel="[\"nofollow\"]"}を提供しています。

:toc## LINE API Statusとは

LINE API Statusは、LINEプラットフォームの稼働状況や障害状況を確認できるサイトです。稼働状況や障害状況の情報は英語で提供されます。

::admonition{title="LINE API Statusの情報について" type="note"}
LINEヤフー株式会社は、LINE API Statusにおいて障害状況の情報を提供しますが、即時性、正確性、確実な情報提供を保証するものではありません。また原因や影響範囲など、障害の詳細についてはLINE Developersサイトの[ニュース](/news/tags/outage-report/)にてお知らせします。
::

- [LINE API Status](https://api.line-status.info/){rel="[\"nofollow\"]"}  
![](/media/basics/line-api-status.png){className="[\"border\",\"w-fix-400\"]"}

### ATOMやRSSのフィードの提供

LINE API StatusではATOMやRSSのフィードを提供しています。LINE API Statusで［**SUBSCRIBE TO UPDATES**］をクリックすると、ATOMやRSSのフィードを取得できます。

![](/media/news/line_api_status_rss_feed.png){className="[\"border\",\"w-fix-360\"]"}

### 安定稼働時の表示

何も障害が起きていない安定稼働時は、`All Systems Operational`と表示されます。

![](/media/news/line_api_status_operational.png)

### 障害発生時の表示

障害が起きている場合は、次のように対象のサービスや発生事象が表示されます。

![](/media/news/line_api_status_outage.png)

また障害状況は、[LINE Developersサイト](/)においても次のようにポップアップで表示されます。

![](/media/news/line_api_status_outage_popup.png)

## LINE API Statusの対象となるサービス

LINE API Statusの対象となるサービスは以下のとおりです。

- Messaging API

  - API
  - Webhook
- LINE Developers

  - LINE Developersサイト
  - LINE Developersコンソール
- LIFF
- LINEログイン

現時点では、LINEアプリや上記以外のサービスはLINE API Statusの対象外です。

## LINE API Statusへのアクセス

LINE API Statusは、LINE Developersサイトのヘッダーの［**その他**］や、フッターからアクセスできます。

![](/media/basics/line-api-status-from-header-ja.png){className="[\"border\",\"w-fix-640\"]"}

![](/media/basics/line-api-status-from-footer-ja.png){className="[\"border\",\"w-fix-640\"]"}
