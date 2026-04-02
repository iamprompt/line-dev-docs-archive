---
title: Check the availability of the LINE Platform (LINE API Status)
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/basics/line-api-status
__hash__: CbQ2ZHUxBxL7yy-D3vV99-r5s0WzrdWsOVYg32WA4LE
seo:
  title: Check the availability of the LINE Platform (LINE API Status)
  description: null
---

# :page-title

:markdown-controlsLY Corporation provides [LINE API Status](https://api.line-status.info/){rel="[\"nofollow\"]"} for checking the availability and outage status of the LINE Platform.

:toc## What is LINE API Status

LINE API Status is a site through which you can check the availability and outage status of the LINE Platform. Availability and outage status information is provided in English.

::admonition{title="On the information on LINE API Status" type="note"}
LY Corporation will provide information on outage status through LINE API Status, but this doesn't guarantee immediate, accurate, or comprehensive information. We'll continue to inform you of the details of the outage, such as the cause and extent of influence, through [News](/news/tags/outage-report/) on the LINE Developers site.
::

- [LINE API Status](https://api.line-status.info/){rel="[\"nofollow\"]"}  
![](/media/basics/line-api-status.png){className="[\"border\",\"w-fix-400\"]"}

### Provision of ATOM and RSS feeds

LINE API Status provides ATOM and RSS feeds. You can get the ATOM or RSS feed by clicking **SUBSCRIBE TO UPDATES** on LINE API Status.

![](/media/news/line_api_status_rss_feed.png){className="[\"border\",\"w-fix-360\"]"}

### Display when operation is stable

When there is no outage and operation is stable, `All Systems Operational` is displayed.

![](/media/news/line_api_status_operational.png)

### Display when outage occurs

When an outage occurs, the following is displayed regarding the service undergoing outage and the occurrence of outage:

![](/media/news/line_api_status_outage.png)

Outage status is also displayed through this pop-up on the [LINE Developers site](/).

![](/media/news/line_api_status_outage_popup.png)

## Services covered by LINE API Status

LINE API Status covers these services:

- Messaging API

  - API
  - Webhook
- LINE Developers

  - LINE Developers site
  - LINE Developers Console
- LIFF
- LINE Login

Currently, LINE API Status doesn't cover the LINE app and services other than the above.

## Accessing LINE API Status

You can access LINE API Status from the **More** menu in the header or the footer of the LINE Developers site.

![](/media/basics/line-api-status-from-header-en.png){className="[\"border\",\"w-fix-640\"]"}

![](/media/basics/line-api-status-from-footer-en.png){className="[\"border\",\"w-fix-640\"]"}
