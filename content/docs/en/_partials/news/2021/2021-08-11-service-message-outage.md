---
title: '[Resolved/Updated] Notice about outage for LINE MINI Apps and LINE Login'
navigation: true
description: ''
meta: >-
  {"date":"2021-08-11 00:00 UTC","tags":"Outage report, LINE MINI App,
  line-login","locale":"en"}
path: /en/_partials/news/2021/2021-08-11-service-message-outage
__hash__: sfZkiHRiWhehf4wi7KJIHirr3u6ZFOjCkfQHaYmV4GQ
seo:
  title: '[Resolved/Updated] Notice about outage for LINE MINI Apps and LINE Login'
  description: ''
---

::admonition{title="Updated on August 12, 2021" type="note"}
As a result of our investigation, we've found out that LINE Login was also affected by this outage. Therefore, we've updated the title of this article, [Impact](#impact-20210811), and [Details](#details-20210811).
::

We'd like to inform you about a service outage regarding LINE MINI App. The issue has now been resolved, but we sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

August 10, 2021 around 16:38 - around 16:48 (UTC+9)

### Cause of the outage

Server failure

### Impact

- [Sending service messages](/reference/line-mini-app/#send-service-message) endpoint of the LINE MINI App
- [Add a LINE Official Account as a friend when logged in (bot link)](/docs/line-login/link-a-bot/)

### Details

These are the main impacts per product:

#### LINE MINI App

In some LINE MINI Apps, even though requests to the endpoint were successful and status code `200` was returned, the messages may not have actually been sent.

#### LINE Login

In some LINE Official Accounts, adding as a friend and unblocking them with using the [botlink](/docs/line-login/link-a-bot/) feature didn't work properly.

  
LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
