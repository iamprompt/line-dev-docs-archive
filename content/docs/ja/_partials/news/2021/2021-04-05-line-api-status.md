---
title: サービスの稼働状況を確認できるLINE API Statusを公開しました
navigation: true
description: LINE APIの稼働状況や障害状況を確認できるサイト、LINE API Statusを公開しました。
meta: '{"date":"2021-04-05 00:00 UTC","tags":"LINE Platform","locale":"ja"}'
path: /ja/_partials/news/2021/2021-04-05-line-api-status
__hash__: yExdBcM925GjO2eQc84Tmeb8P0syW71xo3fdoQR6Kls
seo:
  title: サービスの稼働状況を確認できるLINE API Statusを公開しました
  description: LINE APIの稼働状況や障害状況を確認できるサイト、LINE API Statusを公開しました。
---

LINE APIの稼働状況や障害状況を確認できるサイト、[LINE API Status](https://api.line-status.info/){rel="[\"nofollow\"]"}を公開しました。

- [LINE API Statusとは](#status-01)
  - [安定稼働時の表示](#status-02)
  - [障害発生時の表示](#status-03)
- [LINE API Statusの対象となるサービス](#status-04)
- [LINE API Statusへのアクセス](#status-05)

### LINE API Statusとは

LINE API Statusは、LINEが提供するサービスの稼働状況や障害状況を確認できるサイトです。稼働状況や障害状況の情報は英語で提供されます。

- [LINE API Status](https://api.line-status.info/){rel="[\"nofollow\"]"}  
![LINE APIの稼働状況や障害状況を確認できるサイト](/media/news/line_api_status.png){className="[\"border\",\"w-fix-400\"]"}

LINE API Statusで［**SUBSCRIBE TO UPDATES**］をクリックして、ATOMやRSSのフィードを取得することもできます。

![ATOMフィードとRSSフィードの取得](/media/news/line_api_status_rss_feed.png){className="[\"border\",\"w-fix-360\"]"}

#### 安定稼働時の表示

何も障害が起きていない安定稼働時は、`All Systems Operational`と表示されます。

![安定稼働時の表示](/media/news/line_api_status_operational.png)

#### 障害発生時の表示

障害が起きている場合は、次のように対象のサービスや発生事象が表示されます。

![障害発生時の表示](/media/news/line_api_status_outage.png)

また障害状況は、[LINE Developersサイト](/)においても次のようにポップアップで表示されます。

![障害発生時はポップアップで障害状況を表示](/media/news/line_api_status_outage_popup.png)

### LINE API Statusの対象となるサービス

LINE API Statusの対象となるサービスは以下の通りです。

- Messaging API

  - API
  - Webhook
- LINE Developers

  - LINE Developersサイト
  - LINE Developersコンソール

現時点では、LINEアプリや上記以外のサービス（LINEミニアプリやLIFF、LINE Payなど）はLINE API Statusの対象外です。

### LINE API Statusへのアクセス

LINE API Statusは、［**その他**］のドロップダウンメニューに表示される「[**LINE API Status**](https://api.line-status.info/){rel="[\"nofollow\"]"}」からアクセスできます。

![その他のドロップダウンメニューのLINE API Status](/media/news/line_api_status_drop_down_menu_ja.png){className="[\"border\",\"w-fix-640\"]"}

::admonition{title="LINE API Statusの情報について" type="note"}
当社は、LINE API Statusにおいて障害状況の情報を提供しますが、即時性、正確性、確実な情報提供を保証するものではありません。また原因や影響範囲など、障害の詳細については従来通りLINE Developersサイトの[ニュース](/news/tags/outage-report/)にてお知らせしてまいります。
::
