---
title: LINE API Status site for checking service availability opened
navigation: true
description: >-
  We've opened the LINE API Status site for checking the service availability
  and outage status of LINE APIs.
meta: '{"date":"2021-04-05 00:00 UTC","tags":"LINE Platform","locale":"en"}'
path: /en/_partials/news/2021/2021-04-05-line-api-status
__hash__: VFnYzL-vdtNXPKGcL0YGtGuzM5s6QumvMqot6rjDjU0
seo:
  title: LINE API Status site for checking service availability opened
  description: >-
    We've opened the LINE API Status site for checking the service availability
    and outage status of LINE APIs.
---

We've opened the [LINE API Status](https://api.line-status.info/){rel="[\"nofollow\"]"} site for checking the service availability and outage status of LINE APIs.

- [What is LINE API Status?](#status-01)
  - [Display when operation is stable](#status-02)
  - [Display when outage occurs](#status-03)
- [Services covered by LINE API Status](#status-04)
- [Accessing LINE API Status](#status-05)

### What is LINE API Status?

LINE API Status is a site through which you can check the service availability and outage status of APIs and services that LINE provides. Service availability and outage status information is provided in English.

- [LINE API Status](https://api.line-status.info/){rel="[\"nofollow\"]"}  
![LINE API Status page that shows past incidents and Messaging API and LINE Developers system operations.](/media/news/line_api_status.png){className="[\"border\",\"w-fix-400\"]"}

You can get the ATOM or RSS feed by clicking **SUBSCRIBE TO UPDATES** on LINE API Status.

![A subscribe to updates button that lets you subscribe to Atom Feed or RSS Feed](/media/news/line_api_status_rss_feed.png){className="[\"border\",\"w-fix-360\"]"}

#### Display when operation is stable

When there is no outage and operation is stable, `All Systems Operational` is displayed.

![Display when operation is stable](/media/news/line_api_status_operational.png)

#### Display when outage occurs

When an outage occurs, the following is displayed regarding the service undergoing outage and the occurrence of outage:

![Display when outage occurs](/media/news/line_api_status_outage.png)

Outage status is also displayed through this pop-up on the [LINE Developers site](/).

![A pop-up message alerting the reader of an outage report in the Messaging API.](/media/news/line_api_status_outage_popup.png)

### Services covered by LINE API Status

LINE API Status covers these services:

- Messaging API

  - API
  - Webhook
- LINE Developers

  - LINE Developers site
  - LINE Developers Console

Currently, LINE API Status doesn't cover the LINE app and services other than the above (such as LINE MINI App, LIFF, and LINE Pay).

### Accessing LINE API Status

You can access LINE API Status by clicking [**LINE API Status**](https://api.line-status.info/){rel="[\"nofollow\"]"} on the **More** dropdown menu.

![LINE API Status on the more dropdown menu](/media/news/line_api_status_drop_down_menu_en.png){className="[\"border\",\"w-fix-640\"]"}

::admonition{title="On the information on LINE API Status" type="note"}
LINE will provide information on outage status through LINE API Status, but this doesn't guarantee immediate, accurate, or comprehensive information. We will continue to inform you of the details of the outage, such as the cause and extent of influence, through [News](/news/tags/outage-report/) on the LINE Developers site.
::
